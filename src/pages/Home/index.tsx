import React, { useEffect } from 'react'

import { usePokemon } from '../../context/PokemonContext'

import Header from '../../components/Header'

import { Container } from './styles'

const Home: React.FC = () => {
	const { getPokemons, pokemons, nextPageParams } = usePokemon()

	useEffect(() => {
		async function dispatchGetPokemons() {
			await getPokemons({ limit: '4' })
		}

		if (!pokemons.length) {
			dispatchGetPokemons()
		}
	}, [getPokemons, pokemons.length])

	return (
		<Container>
			<Header />
		</Container>
	)
}

export default Home

/**
 *
 * 			<div>
				{nextPageParams.limit} - {nextPageParams.offset}
			</div>
			<button onClick={async () => getPokemons(nextPageParams)}>More</button>

 * <div>
				{nextPageParams.limit} - {nextPageParams.offset}
			</div>
			<button onClick={async () => getPokemons(nextPageParams)}>More</button>
			{pokemons.map((pokemon, index) => (
				<div key={index}>
					<img src={pokemon.image} alt={pokemon.name} />
					<p>{pokemon.name}</p>
					<p>Pode evoluir: {pokemon.canEvolve ? 'Sim' : 'Não'}</p>
					<div>
						{pokemon.types.map((type, index) => (
							<p key={index}>{type.type.name}</p>
						))}
					</div>
					<div>
						{pokemon.stats.map((stat, index) => (
							<p key={index}>
								{stat.stat.name}: {stat.base_stat}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
 */
