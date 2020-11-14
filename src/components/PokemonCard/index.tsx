import React from 'react'
import { Pokemon } from '../../context/PokemonContext/types'

import { Container } from './styles'

const PokemonCard: React.FC<Pokemon> = ({ name, image }) => (
	<Container>
		<img src={image} alt={name} title={name} />
	</Container>
)

export default PokemonCard

/**
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
