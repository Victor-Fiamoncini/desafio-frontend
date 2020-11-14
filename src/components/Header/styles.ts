import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	> a {
		display: inline-block;
		&:hover {
			transition: transform 0.4s;
			transform: translateX(2px);
		}
		img {
			width: 80px;
			height: 80px;
			margin-bottom: 10px;
		}
	}
	div {
		h1 {
			font-size: ${rem(26)};
			margin-bottom: 10px;
		}
		a {
			display: inline-block;
			font-size: ${rem(16)};
			font-weight: 600;
			color: ${props => props.theme.colors.primary};
			&:hover {
				transition: transform 0.4s;
				transform: translateX(2px);
			}
		}
	}
`
