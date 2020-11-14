export interface PokemonUrlResponse {
	url: string
}

export interface GetPokemonOptions {
	limit?: string
	offset?: string
}

export interface NextPageParams {
	limit?: string
	offset?: string
}

export interface Type {
	slot: number
	type: {
		name: string
	}
}

export interface Stat {
	base_stat: number
	effort: number
	stat: {
		name: string
	}
}

export interface Pokemon {
	name: string
	image: string
	types: Type[]
	stats: Stat[]
	canEvolve: boolean
}

export interface PokemonState {
	pokemons: Pokemon[]
	nextPageParams: NextPageParams
	loading: boolean
}

export interface PokemonContextData {
	pokemons: Pokemon[]
	nextPageParams: NextPageParams
	loading: boolean
	getPokemons(params: GetPokemonOptions): Promise<void>
}
