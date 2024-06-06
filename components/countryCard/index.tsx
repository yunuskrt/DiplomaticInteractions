import React from 'react'
import { CardContent, Card, Button } from 'semantic-ui-react'
import CountryFlag from '@components/countryFlag'

import type Interaction from 'types/country'

import styles from './countryCard.module.css'

const CountryCard = (interaction: Interaction) => {
	return (
		<Card className={styles.countryCard}>
			<CardContent
				header={interaction.country}
				className={styles.countryCardHeader}
			/>
			<CardContent
				description={
					<CountryFlag
						fontSize={200}
						name={interaction.country}
						countryCode={interaction.abbr}
					/>
				}
				className={styles.countryCardContent}
			/>
			<CardContent extra className={styles.countryCardContent}>
				<Button
					color='teal'
					className={styles.visitPageBtn}
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
