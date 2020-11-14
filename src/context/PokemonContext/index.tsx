import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { parse } from 'query-string'
import { toast } from 'react-toastify'

import { pokeApi } from '../../services/apiClients'

import {
	GetPokemonOptions,
	Pokemon,
	PokemonContextData,
	PokemonState,
	PokemonUrlResponse,
	Stat,
	Type,
} from './types'

const PokemonContext = createContext<PokemonContextData>(
	{} as PokemonContextData
)

export const PokemonProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<PokemonState>(() => {
		const initialState: PokemonState = {
			pokemons: [],
			nextPageParams: {},
			loading: false,
		}

		const storagedPokemons = localStorage.getItem(
			'PokedexVictorFiamoncini:pokemons'
		)

		if (storagedPokemons) {
			initialState.pokemons = JSON.parse(storagedPokemons)
		}

		const storagedNextPageParams = localStorage.getItem(
			'PokedexVictorFiamoncini:nextPageParams'
		)

		if (storagedNextPageParams) {
			initialState.nextPageParams = JSON.parse(storagedNextPageParams)
		}

		return initialState
	})

	const { pokemons, nextPageParams, loading } = data

	const getPokemons = useCallback(async (params: GetPokemonOptions) => {
		setData(state => ({ ...state, loading: true }))

		try {
			const pokemonsUrlsResponse = await pokeApi.get('/pokemon', { params })

			const fetchedPokemons: Pokemon[] = await Promise.all(
				pokemonsUrlsResponse.data.results.map(
					async (pokemonUrlReponse: PokemonUrlResponse) => {
						const responsePokemon = await pokeApi.get(pokemonUrlReponse.url)

						const {
							name,
							sprites,
							species,
							types,
							stats,
						} = responsePokemon.data

						const responseSpecies = await pokeApi.get(species.url)

						const responseEvolutionChain = await pokeApi.get(
							responseSpecies.data.evolution_chain.url
						)

						const serializedTypes = types.map((type: Type) => ({
							slot: type.slot,
							type: type.type,
						}))

						const serializedStats = stats.map((stat: Stat) => ({
							base_stat: stat.base_stat,
							effort: stat.effort,
							stat: stat.stat,
						}))

						return {
							name,
							types: serializedTypes,
							stats: serializedStats,
							image: sprites.front_default,
							canEvolve: !!responseEvolutionChain.data.chain.evolves_to.length,
						}
					}
				)
			)

			const parsedParams = parse(pokemonsUrlsResponse.data.next)

			const [offset, limit] = Object.values(parsedParams).map(
				param => param as string
			)

			setData(state => ({
				...state,
				pokemons: [...state.pokemons, ...fetchedPokemons],
				nextPageParams: {
					offset,
					limit,
				},
				loading: false,
			}))
		} catch {
			toast('Error to fetch pokemons', {
				type: 'error',
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(
			'PokedexVictorFiamoncini:pokemons',
			JSON.stringify(pokemons)
		)
	}, [pokemons])

	useEffect(() => {
		localStorage.setItem(
			'PokedexVictorFiamoncini:nextPageParams',
			JSON.stringify(nextPageParams)
		)
	}, [nextPageParams])

	return (
		<PokemonContext.Provider
			value={{ pokemons, nextPageParams, loading, getPokemons }}
		>
			{children}
		</PokemonContext.Provider>
	)
}

export function usePokemon(): PokemonContextData {
	const context = useContext(PokemonContext)

	if (!context) {
		throw new Error(
			'usePokemon must be used within an PokemonProvider component'
		)
	}

	return context
}
