import React from 'react'
import Interaction from 'types/country'
import type {
	InferGetServerSidePropsType,
	GetServerSideProps,
	GetServerSidePropsContext,
} from 'next'
import { promises as fs } from 'fs'

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	// Fetch data from external APIs
	const countryCode = (context.params?.countryCode ?? '').toString()
	const file = await fs.readFile(process.cwd() + '/dummyData.json', 'utf8')
	const fileData: [Interaction] = JSON.parse(file)
	const data = fileData.find(
		(interaction) => interaction.abbr.toLowerCase() === countryCode
	)
	// Pass data to the page via props
	return { props: { data } }
}

const CountryInteraction = ({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<main>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</main>
	)
}

export default CountryInteraction
