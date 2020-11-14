import styled from 'styled-components'
import { rem } from 'polished'

import { TypeColor } from './types'

export const Container = styled.div`
	background: ${props => props.theme.colors.background};
	border-radius: 8px;
	padding: 0 8px 8px 8px;
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	img {
		width: 108px;
	}
	h2 {
		margin: 0 auto;
		color: ${props => props.theme.colors.quartenary};
		font-size: ${rem(18)};
		font-weight: 600;
	}
`

export const StatsContainer = styled.div`
	padding: 0 4px;
	margin-bottom: 6px;
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
		grid-column-gap: 12px;
		grid-row-gap: 4px;
		p {
			display: inline-block;
			color: ${props => props.theme.colors.quartenary};
			font-weight: 600;
		}
	}
`

export const TypesContainer = styled.ul`
	padding: 0 4px;
`

export const Type = styled.li<TypeColor>`
	display: inline-block;
	padding: 6px;
	background: ${props => props.color};
	border-radius: 8px;
	color: ${props => props.theme.colors.white};
	font-weight: 600;
	margin-right: 6px;
`
