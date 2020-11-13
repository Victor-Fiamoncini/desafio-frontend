import React from 'react'
import { ThemeProvider as Theme } from 'styled-components'

import defaultTheme from '../../styles/themes/default'

export const ThemeProvider: React.FC = ({ children }) => (
	<Theme theme={defaultTheme}>{children}</Theme>
)
