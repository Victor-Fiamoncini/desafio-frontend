import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.header`
	text-align: center;
	img {
		width: 112px;
		height: 112px;
		margin-bottom: 8px;
	}
	h1 {
		font-size: ${rem(28)};
		margin-bottom: 8px;
	}
	a {
		display: inline-block;
		font-size: ${rem(16)};
		color: ${props => props.theme.colors.primary};
		&:hover {
			transition: transform 0.4s;
			transform: translateX(6px);
		}
	}
`
