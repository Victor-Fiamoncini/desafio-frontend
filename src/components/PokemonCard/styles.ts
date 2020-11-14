import styled from 'styled-components'
import { rem } from 'polished'

import { TypeColor } from './types'

export const Container = styled.div`
	position: relative;
	overflow: hidden;
	background: ${props => props.theme.colors.background};
	border-radius: 8px;
	padding: 0 8px 8px 8px;
	box-shadow: 5px 5px 18px ${props => props.theme.colors.tertiary};
`

export const CanEvolveLabel = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	border-color: transparent ${props => props.theme.colors.primary} transparent
		transparent;
	border-style: solid;
	border-width: 0 66px 66px 0;
	p {
		position: absolute;
		transform: rotate(45deg) translateX(28px) translateY(-4px);
		color: ${props => props.theme.colors.white};
		font-weight: 600;
		font-size: ${rem(12)};
		text-align: center;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 100%;
		max-width: 108px;
	}
	h2 {
		margin: 0 auto;
		color: ${props => props.theme.colors.secundary};
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
