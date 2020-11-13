import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import queryString from 'query-string'

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

	const { pokemons, nextPageParams } = data

	const getPokemons = useCallback(async (params: GetPokemonOptions) => {
		const pokemonsUrlsResponse = await pokeApi.get('/pokemon', { params })

		const fetchedPokemons: Pokemon[] = await Promise.all(
			pokemonsUrlsResponse.data.results.map(
				async (pokemonUrlReponse: PokemonUrlResponse) => {
					const responsePokemon = await pokeApi.get(pokemonUrlReponse.url)

					const responseSpecies = await pokeApi.get(
						responsePokemon.data.species.url
					)

					const responseEvolutionChain = await pokeApi.get(
						responseSpecies.data.evolution_chain.url
					)

					const serializedTypes = responsePokemon.data.types.map(
						(type: Type, index: number) => ({
							...type,
							id: index,
						})
					)

					const serializedStats = responsePokemon.data.stats.map(
						(stat: Stat, index: number) => ({
							...stat,
							id: index,
						})
					)

					return {
						...responsePokemon.data,
						types: serializedTypes,
						stats: serializedStats,
						image: responsePokemon.data.sprites.front_default,
						canEvolve: !!responseEvolutionChain.data.chain.evolves_to.length,
					}
				}
			)
		)

		const parsedParams = queryString.parse(pokemonsUrlsResponse.data.next)

		const [offset, limit] = Object.values(parsedParams).map(
			param => (param as string) || undefined
		)

		setData({
			pokemons: pokemons.concat(fetchedPokemons),
			nextPageParams: {
				offset,
				limit,
			},
		})
	}, [])

	useEffect(() => {
		localStorage.setItem(
			'PokedexVictorFiamoncini:pokemons',
			JSON.stringify(pokemons)
		)

		localStorage.setItem(
			'PokedexVictorFiamoncini:nextPageParams',
			JSON.stringify(nextPageParams)
		)
	}, [pokemons, nextPageParams])

	return (
		<PokemonContext.Provider value={{ pokemons, nextPageParams, getPokemons }}>
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
