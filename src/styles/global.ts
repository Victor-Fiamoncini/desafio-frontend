import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

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
		color: ${props => props.theme.colors.white};
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	button {
		font-family: ${props => props.theme.fonts.primary}, serif;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
`
