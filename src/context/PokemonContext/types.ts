export interface PokemonUrlResponse {
	url: string
}

export interface GetPokemonOptions {
	limit?: number
	offset?: number
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
	id: string
	name: string
	image: string
	types: Type[]
	stats: Stat[]
	canEvolve: boolean
}

export interface PokemonState {
	pokemons: Pokemon[]
	nextPageUrl: string
}

export interface PokemonContextData {
	pokemons: Pokemon[]
	nextPageUrl: string
	getPokemons(params: GetPokemonOptions): Promise<void>
}
