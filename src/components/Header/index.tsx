import React from 'react'

import pokemonBall from '../../assets/images/pokeball.png'

import { Container } from './styles'

const Header: React.FC = () => (
	<Container>
		<img src={pokemonBall} alt="Pokeball" title="Pokeball" />
		<h1>Desafio Pokedex</h1>
		<a
			href="https://github.com/Victor-Fiamoncini"
			rel="noreferrer"
			target="_blank"
		>
			Por Victor Fiamoncini
		</a>
	</Container>
)

export default Header
