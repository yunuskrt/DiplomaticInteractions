import React from 'react'
import CountryCard from '@components/countryCard'
import { Grid, GridColumn } from 'semantic-ui-react'
import Interaction from 'types/country'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { promises as fs } from 'fs'
import styles from './interaction.module.css'

export const getServerSideProps = (async () => {
	// Fetch data from external APIs
	const file = await fs.readFile(process.cwd() + '/dummyData.json', 'utf8')
	const data: [Interaction] = JSON.parse(file)
	// Pass data to the page via props
	return { props: { data } }
}) satisfies GetServerSideProps<{ data: [Interaction] }>

const Interaction = ({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className={styles.gridCardContainer}>
			<Grid>
				{data.map((interaction) => {
					return (
						<GridColumn mobile={16} tablet={8} computer={4}>
							<CountryCard {...interaction} />
						</GridColumn>
					)
				})}
			</Grid>
		</div>
	)
}
export default Interaction
