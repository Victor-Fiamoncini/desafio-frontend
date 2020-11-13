import React from 'react'

import { ThemeProvider } from './ThemeContext'
import { PokemonProvider } from './PokemonContext'

const AppProvider: React.FC = ({ children }) => (
	<ThemeProvider>
		<PokemonProvider>{children}</PokemonProvider>
	</ThemeProvider>
)

export default AppProvider
