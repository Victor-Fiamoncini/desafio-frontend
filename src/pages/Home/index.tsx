import React, { useEffect } from 'react'

import { usePokemon } from '../../context/PokemonContext'

const Home: React.FC = () => {
	const { getPokemons, pokemons, nextPageParams } = usePokemon()

	useEffect(() => {
		async function dispatchGetPokemons() {
			await getPokemons({ limit: '4' })
		}

		if (!pokemons.length) {
			dispatchGetPokemons()
		}
	}, [])

	return (
		<div style={{ display: 'flex' }}>
			<div>
				{nextPageParams.limit} - {nextPageParams.offset}
			</div>
			<button onClick={async () => getPokemons(nextPageParams)}>More</button>
			{pokemons.map(pokemon => (
				<div key={pokemon.id}>
					<img src={pokemon.image} alt={pokemon.name} />
					<p>{pokemon.name}</p>
					<p>Pode evoluir: {pokemon.canEvolve ? 'Sim' : 'Não'}</p>
					<div>
						{pokemon.types.map(type => (
							<p key={type.id}>{type.type.name}</p>
						))}
					</div>
					<div>
						{pokemon.stats.map(stat => (
							<p key={stat.id}>
								{stat.stat.name}: {stat.base_stat}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Home
