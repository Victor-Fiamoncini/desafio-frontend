import React from 'react'
import { Line } from 'rc-progress'

import capitalize from '../../utils/capitalize'

import { Pokemon } from '../../context/PokemonContext/types'

import { Container, ImageContainer, Stats } from './styles'

const PokemonCard: React.FC<Pokemon> = ({ name, image, stats, types }) => (
	<Container>
		<ImageContainer>
			<img src={image} alt={name} title={name} />
			<h2>{capitalize(name)}</h2>
		</ImageContainer>
		{!!stats.length && (
			<Stats>
				{stats.map((stat, index) => (
					<li key={index}>
						{/* <p>{stat.stat.name}</p> */}
						<Line
							percent={stat.base_stat}
							strokeWidth={6}
							strokeColor="#000"
							trailColor="transparent"
						>
							qeqw
						</Line>
					</li>
				))}
			</Stats>
		)}
		{!!types.length && (
			<Stats>
				{types.map((type, index) => (
					<li key={index}>{type.type.name}</li>
				))}
			</Stats>
		)}
	</Container>
)

export default PokemonCard
