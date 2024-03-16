import React from 'react'
import {
	TableRow,
	TableHeaderCell,
	TableHeader,
	TableCell,
	TableBody,
	Table,
	Segment,
	StatisticValue,
	Statistic,
} from 'semantic-ui-react'
import CountryFlag from '@components/countryFlag'
import type Interaction from 'types/country'
import styles from './tableInteraction.module.css'

const TableInteraction = (interaction: Interaction) => {
	return (
		<Segment className={styles.countryTableSegment}>
			<div className={styles.headerCountryContainer}>
				<CountryFlag fontSize={24} name={interaction.country} />
				<span className={styles.headerCountryTitle}>{interaction.country}</span>
			</div>
			<Table celled inverted selectable>
				<TableHeader>
					<TableRow>
						<TableHeaderCell textAlign='center'>Country</TableHeaderCell>
						<TableHeaderCell textAlign='center'>Score (%)</TableHeaderCell>
					</TableRow>
				</TableHeader>

				<TableBody>
					{Object.entries(interaction.scores).map(([country, score]) => {
						return (
							<TableRow key={country}>
								<TableCell>
									<div className={styles.rowCountryContainer}>
										<CountryFlag fontSize={40} name={country} />
										<span className={styles.rowCountryTitle}>{country}</span>
									</div>
								</TableCell>
								<TableCell textAlign='center'>
									<Statistic size='mini' inverted>
										<StatisticValue>{score}%</StatisticValue>
									</Statistic>
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</Segment>
	)
}

export default TableInteraction
