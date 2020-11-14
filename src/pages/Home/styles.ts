import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.main`
	padding: 6px 0;
	width: 100%;
	max-width: 1060px;
	margin: 0 auto;
	> section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: auto;
		grid-gap: 10px;
		margin-bottom: 20px;
		padding: 10px;
		background: ${props => props.theme.colors.white};
		border-radius: 8px;
		box-shadow: 5px 5px 22px #ccc;
	}
	> div {
		margin: 40px 0;
		text-align: center;
		button {
			border: none;
			border-radius: 10px;
			height: 46px;
			width: 100%;
			max-width: 180px;
			box-shadow: 5px 5px 14px #ccc;
			background: ${props => props.theme.colors.primary};
			color: ${props => props.theme.colors.white};
			font-size: ${rem(18)};
			font-weight: 600;
			&:hover {
				transition: transform 0.6s;
				transform: translateX(4px);
			}
		}
	}
`
