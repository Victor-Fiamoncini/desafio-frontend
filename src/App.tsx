import React from 'react'

import AppProvider from './context'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => (
	<AppProvider>
		<Routes />
		<GlobalStyle />
	</AppProvider>
)

export default App
