import React, { useEffect } from 'react'

import { usePokemon } from '../../context/PokemonContext'

import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'

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
			<section>
				{pokemons.map((pokemon, index) => (
					<PokemonCard key={index} {...pokemon} />
				))}
			</section>
			<div>
				<button onClick={async () => getPokemons(nextPageParams)}>
					Carregar Mais
				</button>
			</div>
		</Container>
	)
}

export default Home

/**
 *
 * 			<div>
				{nextPageParams.limit} - {nextPageParams.offset}
			</div>

 *
 */
