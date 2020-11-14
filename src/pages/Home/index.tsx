import React, { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import { usePokemon } from '../../context/PokemonContext'

import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'

import { Container, LoadMoreButton } from './styles'

const Home: React.FC = () => {
	const { getPokemons, pokemons, nextPageParams, loading } = usePokemon()
	const { colors } = useTheme()

	useEffect(() => {
		async function dispatchGetPokemons() {
			await getPokemons({ limit: '6' })
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
				<LoadMoreButton onClick={() => getPokemons(nextPageParams)}>
					{loading ? (
						<PulseLoader color={colors.white} size={16} loading={loading} />
					) : (
						'Load More'
					)}
				</LoadMoreButton>
			</div>
		</Container>
	)
}

export default Home
