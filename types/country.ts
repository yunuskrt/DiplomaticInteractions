type Interaction = {
	country: string
	abbr: string
	scores: {
		[country: string]: number
	}
}

export type Flag = {
	fontSize ?: number
	name : string
	countryCode ?: string
}

export default Interaction