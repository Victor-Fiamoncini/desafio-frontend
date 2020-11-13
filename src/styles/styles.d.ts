import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string
		colors: {
			primary: string
			secundary: string
			tertiary: string
			quartenary: string
			white: string
			black: string
			messages: {
				info: string
				success: string
				error: string
			}
		}
		fonts: {
			primary: string
		}
	}
}
