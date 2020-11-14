import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		font-size: ${rem(16)};
	}

	body {
		background: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.secundary};
		-webkit-font-smoothing: antialiased;
		::-webkit-scrollbar {
  		width: 10px;
		}
		::-webkit-scrollbar-track {
			background:  ${props => props.theme.colors.background};
		}
		::-webkit-scrollbar-thumb {
			background:  ${props => props.theme.colors.quartenary};
			&:hover {
				background: ${props => props.theme.colors.primary};
			}
		}
	}

	body,
	input,
	button {
		font-family: ${props => props.theme.fonts.primary}, Helvetica, sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
  }

  ol,
  ul,
	li {
    list-style: none;
  }
`
