import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

import { pokeApi } from '../../services/apiClients'

import {
	GetPokemonOptions,
	Pokemon,
	PokemonContextData,
	PokemonState,
	PokemonUrlResponse,
} from './types'

const PokemonContext = createContext<PokemonContextData>(
	{} as PokemonContextData
)

export const PokemonProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<PokemonState>(() => {
		const initialState: PokemonState = {
			pokemons: [],
			nextPageUrl: '',
		}

		const storagedPokemons = localStorage.getItem(
			'PokedexVictorFiamoncini:pokemons'
		)

		if (storagedPokemons) {
			initialState.pokemons = JSON.parse(storagedPokemons)
		}

		return initialState
	})

	const { pokemons, nextPageUrl } = data

	const getPokemons = useCallback(async (params: GetPokemonOptions) => {
		const pokemonsUrlsResponse = await pokeApi.get('/pokemon', { params })

		const pokemons: Pokemon[] = await Promise.all(
			pokemonsUrlsResponse.data.results.map(
				async (pokemonUrlReponse: PokemonUrlResponse) => {
					const responsePokemon = await pokeApi.get(pokemonUrlReponse.url)

					console.log(responsePokemon.data)

					return {
						...responsePokemon.data,
						image: responsePokemon.data.sprites.front_default,
					}
				}
			)
		)

		setData({
			...data,
			pokemons,
		})
	}, [])

	useEffect(() => {
		localStorage.setItem(
			'PokedexVictorFiamoncini:pokemons',
			JSON.stringify(pokemons)
		)
	}, [pokemons])

	return (
		<PokemonContext.Provider value={{ pokemons, nextPageUrl, getPokemons }}>
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
