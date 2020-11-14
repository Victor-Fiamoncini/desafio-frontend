import React from 'react'

import pokemonBall from '../../assets/images/pokeball.png'

import { Container } from './styles'

const Header: React.FC = () => (
	<Container>
		<a href="https://pokeapi.co" rel="noreferrer" target="_blank">
			<img src={pokemonBall} alt="Pokeball" title="PokeAPI" />
		</a>
		<div>
			<h1>Pokedex Challenge</h1>
			<a
				href="https://github.com/Victor-Fiamoncini"
				rel="noreferrer"
				target="_blank"
			>
				By Victor Fiamoncini
			</a>
		</div>
	</Container>
)

export default Header
