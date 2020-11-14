import React from 'react'
import { ToastContainer } from 'react-toastify'

import AppProvider from './context'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => (
	<AppProvider>
		<Routes />
		<GlobalStyle />
		<ToastContainer />
	</AppProvider>
)

export default App
