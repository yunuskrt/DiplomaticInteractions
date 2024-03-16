import React, { useState } from 'react'
import type Interaction from 'types/country'
import type {
	InferGetServerSidePropsType,
	GetServerSideProps,
	GetServerSidePropsContext,
} from 'next'
import { promises as fs } from 'fs'

import {
	Segment,
	FormField,
	Form,
	Checkbox,
	Label,
	Button,
} from 'semantic-ui-react'
import TableInteraction from '@components/tableInteraction'
import styles from './countryCode.module.css'

interface CheckedState {
	table: boolean
	graph: boolean
	cartography: boolean
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const countryCode = (context.params?.countryCode ?? '').toString()
	const file = await fs.readFile(process.cwd() + '/dummyData.json', 'utf8')
	const fileData: [Interaction] = JSON.parse(file)
	const data = fileData.find(
		(interaction) => interaction.abbr.toLowerCase() === countryCode
	)

	if (!data) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		}
	}

	return { props: { data } }
}

const CountryInteraction = ({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [checked, setChecked] = useState({
		table: true,
		graph: false,
		cartography: false,
	})
	const handleCheckboxChange = (key: keyof CheckedState) => {
		setChecked((prevChecked) => ({
			...prevChecked,
			[key]: !prevChecked[key],
		}))
	}
	return (
		<div>
			<Segment inverted className={styles.filterSegmentWrapper}>
				<Label
					as='div'
					color='teal'
					ribbon
					size='big'
					className={styles.filterInfoRibbon}
				>
					Report With
				</Label>
				<div className={styles.filterSegmentInnerContainer}>
					<Segment compact inverted secondary>
						<Form className={styles.filterCheckboxContainer}>
							<FormField className={styles.filterField}>
								<Checkbox
									className={styles.filterCheckbox}
									label='Table'
									onChange={() => {
										handleCheckboxChange('table')
									}}
									defaultChecked
									slider
								/>
							</FormField>
							<FormField className={styles.filterField}>
								<Checkbox
									className={styles.filterCheckbox}
									label='Graph'
									onChange={() => {
										handleCheckboxChange('graph')
									}}
									slider
								/>
							</FormField>
							<FormField className={styles.filterField}>
								<Checkbox
									className={styles.filterCheckbox}
									label='Cartography'
									onChange={() => {
										handleCheckboxChange('cartography')
									}}
									slider
								/>
							</FormField>
						</Form>
					</Segment>
				</div>
			</Segment>
			{checked.table && <TableInteraction {...data} />}
			{checked.graph && <div>Graph Component</div>}
			{checked.cartography && <div>Cartography Component</div>}
		</div>
	)
}

export default CountryInteraction
