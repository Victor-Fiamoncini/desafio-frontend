import React from 'react'
import { Line } from 'rc-progress'
import { useTheme } from 'styled-components'

import capitalize from '../../utils/capitalize'
import getPokemonTypeColor from '../../utils/getPokemonTypeColor'

import { Pokemon } from '../../context/PokemonContext/types'

import {
	Container,
	ImageContainer,
	StatsContainer,
	TypesContainer,
	Type,
} from './styles'

const PokemonCard: React.FC<Pokemon> = ({ name, image, stats, types }) => {
	const { colors } = useTheme()

	return (
		<Container>
			<ImageContainer>
				<img src={image} alt={name} title={name} />
				<h2>{capitalize(name)}</h2>
			</ImageContainer>
			{!!stats.length && (
				<StatsContainer>
					<ul>
						{stats.map((stat, index) => (
							<li key={index}>
								<p>{stat.stat.name}</p>
								<Line
									percent={stat.base_stat}
									strokeWidth={4}
									strokeColor={colors.secundary}
									trailColor="transparent"
								/>
							</li>
						))}
					</ul>
				</StatsContainer>
			)}
			{!!types.length && (
				<TypesContainer>
					<ul>
						{types.map((type, index) => (
							<Type
								key={index}
								color={getPokemonTypeColor[type.type.name || 'default']}
							>
								{type.type.name}
							</Type>
						))}
					</ul>
				</TypesContainer>
			)}
		</Container>
	)
}

export default PokemonCard
