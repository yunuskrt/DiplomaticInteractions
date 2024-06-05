export default function handler(req, res) {
	const method = req.method
	const countryCode = req.query.countryCode
	switch (method) {
		case 'GET':
			try {
				const interactionData = [
					{
						country: 'Turkey',
						abbr: 'TR',
						scores: {
							Turkey: 80,
							'United States': 70,
							'United Kingdom': 60,
							France: 50,
							Germany: 40,
						},
					},
					{
						country: 'United States',
						abbr: 'US',
						scores: {
							Turkey: 70,
							'United States': 80,
							'United Kingdom': 70,
							France: 60,
							Germany: 50,
						},
					},
					{
						country: 'United Kingdom',
						abbr: 'GB',
						scores: {
							Turkey: 60,
							'United States': 70,
							'United Kingdom': 80,
							France: 70,
							Germany: 60,
						},
					},
					{
						country: 'France',
						abbr: 'FR',
						scores: {
							Turkey: 50,
							'United States': 60,
							'United Kingdom': 70,
							France: 80,
							Germany: 70,
						},
					},
					{
						country: 'Germany',
						abbr: 'DE',
						scores: {
							Turkey: 40,
							'United States': 50,
							'United Kingdom': 60,
							France: 70,
							Germany: 80,
						},
					},
				]
				const countryData = interactionData.find(
					(country) => country.abbr.toLowerCase() === countryCode
				)
				if (countryData) res.status(200).json(countryData)
				else res.status(404).json(null)
			} catch (error) {
				res.status(500).json({ message: error.message })
			}
		default:
			res.setHeader('Allow', ['GET'])
			res.status(405).json({ message: `Method ${method} not allowed.` })
	}
}