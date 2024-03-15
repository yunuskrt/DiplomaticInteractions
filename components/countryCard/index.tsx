import React from 'react'
import { CardContent, Card, Button } from 'semantic-ui-react'
import ReactCountryFlag from 'react-country-flag'

import Interaction from 'types/country'

const CountryCard = (interaction: Interaction) => {
	return (
		<Card style={{ backgroundColor: '#031219' }}>
			<CardContent
				header={interaction.country}
				style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}
			/>
			<CardContent
				description={
					<ReactCountryFlag
						svg
						countryCode={interaction.abbr}
						style={{
							fontSize: '160px',
						}}
						aria-label='United States'
					/>
				}
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginRight: '5px',
				}}
			/>
			<CardContent
				extra
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginRight: '5px',
				}}
			>
				<Button
					color='teal'
					style={{
						width: '100%',
						height: '50px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '16px',
						marginLeft: '10px',
					}}
					as='a'
					href={`/interaction/${interaction.abbr.toLowerCase()}`}
				>
					Visit Page
				</Button>
			</CardContent>
		</Card>
	)
}

export default CountryCard
