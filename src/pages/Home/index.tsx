import React from 'react'
import { usePokemon } from '../../context/PokemonContext'

const Home: React.FC = () => {
	const { getPokemons, pokemons } = usePokemon()

	return (
		<div>
			{!!pokemons.length &&
				pokemons.map(pokemon => (
					<div key={pokemon.id}>
						<img src={pokemon.image} alt={pokemon.name} />
						<p>{pokemon.name}</p>
						<div>
							{pokemon.types.map(type => (
								<p key={type.slot}>{type.type}</p>
							))}
						</div>
						<div>
							{pokemon.stats.map(stat => (
								<p key={stat.base_stat}>
									{stat.base_stat} - {stat.stat}
								</p>
							))}
						</div>
					</div>
				))}
		</div>
	)
}

export default Home
