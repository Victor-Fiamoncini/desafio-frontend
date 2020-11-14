import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div`
	background: ${props => props.theme.colors.background};
	border-radius: 8px;
	padding: 0 8px;
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	img {
		width: 100px;
		background-color: #bbb;
	}
	h2 {
		margin: 0 auto;
		font-size: ${rem(16)};
		font-weight: 600;
	}
`

export const Stats = styled.ul`
	li {
		position: relative;
		p {
			color: #fff;
			position: absolute;
		}
	}
`

export const Types = styled.ul`
	li {
		font-size: ${rem(10)};
	}
`
