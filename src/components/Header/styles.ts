import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.header`
	text-align: center;
	margin-bottom: 40px;
	img {
		width: 80px;
		height: 80px;
		margin-bottom: 10px;
	}
	h1 {
		font-size: ${rem(28)};
		margin-bottom: 10px;
	}
	a {
		display: inline-block;
		font-size: ${rem(16)};
		color: ${props => props.theme.colors.primary};
		&:hover {
			transition: transform 0.4s;
			transform: translateX(4px);
		}
	}
`
