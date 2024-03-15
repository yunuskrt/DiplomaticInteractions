type Interaction = {
	country: string
	abbr: string
	scores: {
		[country: string]: number
	}
}

export default Interaction