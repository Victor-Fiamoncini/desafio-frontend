import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.main`
	padding: 14px 0 0;
	width: 100%;
	max-width: 1060px;
	margin: 0 auto;
	> section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: auto;
		grid-gap: 16px;
		margin-bottom: 12px;
		padding: 16px;
		background: ${props => props.theme.colors.white};
		border-radius: 8px;
		box-shadow: 5px 5px 22px #ccc;
	}
	> div {
		margin: 30px 0;
		text-align: center;
	}
`

export const LoadMoreButton = styled.button`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	width: 100%;
	max-width: 180px;
	border: none;
	border-radius: 8px;
	box-shadow: 5px 5px 14px #ccc;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.white};
	font-size: ${rem(18)};
	font-weight: 600;
	&:hover {
		transition: transform 0.4s;
		transform: translateY(-2px);
	}
`
