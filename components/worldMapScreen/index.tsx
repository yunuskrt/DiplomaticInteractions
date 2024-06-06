import React, { useState, useEffect, useRef } from 'react'
import WorldMapSvg from '@components/worldMapSvg'
import CountryDataModal from '@components/countryDataModal'
import CountryFlag from '@components/countryFlag'
import styles from './worldMapScreen.module.css'
import {
	Button,
	ButtonGroup,
	SidebarPushable,
	Sidebar,
	SidebarPusher,
	Icon,
	Accordion,
	AccordionTitle,
	AccordionContent,
	Segment,
	Form,
	Checkbox,
	Radio,
	CheckboxProps,
	FormField,
} from 'semantic-ui-react'

const WorldMapScreen = () => {
	const [visible, setVisible] = useState(false)
	const [filters, setFilters] = useState({
		interactionType: { show: false, subFilters: [] as string[] },
		conversationType: { show: false, subFilters: [] as string[] },
		topic: { show: false, subFilters: [] as string[] },
		year: { show: false, subFilters: [] as string[] },
	})
	const [reporterFilter, setReporterFilter] = useState({
		show: false,
		value: '',
	})
	const startDateRef = useRef<HTMLInputElement>(null)
	const endDateRef = useRef<HTMLInputElement>(null)

	const [country, setCountry] = useState('')
	const [modalOpen, setModalOpen] = useState(false)

	const [colors, setColors] = useState<any>(null)
	const [loading, setLoading] = useState(true)

	const [originalData, setOriginalData] = useState<any>(null)

	const countryList = [
		'albania',
		'algeria',
		'americanSamoa',
		'angola',
		'anguilla',
		'antiguaAndBarbuda',
		'argentina',
		'armenia',
		'aruba',
		'australia',
		'austria',
		'azerbaijan',
		'bahamas',
		'bahrain',
		'bangladesh',
		'barbados',
		'belarus',
		'belgium',
		'belize',
		'benin',
		'bermuda',
		'bhutan',
		'bolivia',
		'bosniaAndHerzegovina',
		'botswana',
		'brazil',
		'britishVirginIslands',
		'bruneiDarussalam',
		'bulgaria',
		'burkinaFaso',
		'burundi',
		'cambodia',
		'cameroon',
		'canada',
		'canaryIslandsSpain',
		'capeVerde',
		'caymanIslands',
		'centralAfricanRepublic',
		'chad',
		'chile',
		'china',
		'colombia',
		'comoros',
		'congo',
		'costaRica',
		'coteDIvoire',
		'croatia',
		'cuba',
		'curacao',
		'cyprus',
		'czechRepublic',
		'demRepKorea',
		'denmark',
		'djibouti',
		'dominica',
		'dominicanRepublic',
		'ecuador',
		'egypt',
		'elSalvador',
		'equatorialGuinea',
		'eritrea',
		'estonia',
		'ethiopia',
		'faeroeIslands',
		'falklandIslands',
		'federatedStatesOfMicronesia',
		'fiji',
		'finland',
		'france',
		'frenchGuiana',
		'frenchPolynesia',
		'gabon',
		'gambia',
		'georgia',
		'germany',
		'ghana',
		'greece',
		'greenland',
		'grenada',
		'guadeloupe',
		'guam',
		'guatemala',
		'guinea',
		'guineaBissau',
		'guyana',
		'haiti',
		'honduras',
		'hungary',
		'iceland',
		'india',
		'indonesia',
		'iran',
		'iraq',
		'ireland',
		'israel',
		'italy',
		'jamaica',
		'japan',
		'jordan',
		'kazakhstan',
		'kenya',
		'kosovo',
		'kuwait',
		'kyrgyzstan',
		'laoPDR',
		'latvia',
		'lebanon',
		'lesotho',
		'liberia',
		'libya',
		'lithuania',
		'luxembourg',
		'macedonia',
		'madagascar',
		'malawi',
		'malaysia',
		'maldives',
		'mali',
		'malta',
		'marshallIslands',
		'martinique',
		'mauritania',
		'mauritius',
		'mayotte',
		'mexico',
		'moldova',
		'mongolia',
		'montenegro',
		'montserrat',
		'morocco',
		'mozambique',
		'myanmar',
		'namibia',
		'nauru',
		'nepal',
		'netherlands',
		'newCaledonia',
		'newZealand',
		'nicaragua',
		'niger',
		'nigeria',
		'northernMarianaIslands',
		'norway',
		'oman',
		'pakistan',
		'palau',
		'palestine',
		'panama',
		'papuaNewGuinea',
		'paraguay',
		'peru',
		'philippines',
		'poland',
		'portugal',
		'puertoRico',
		'qatar',
		'republicOfKorea',
		'reunion',
		'romania',
		'russia',
		'rwanda',
		'sabaNetherlands',
		'saintBarthelemy',
		'saintKittsAndNevis',
		'saintLucia',
		'saintMartin',
		'saintVincentAndTheGrenadines',
		'samoa',
		'saudiArabia',
		'senegal',
		'serbia',
		'seychelles',
		'sierraLeone',
		'sintMaarten',
		'slovakia',
		'slovenia',
		'solomonIslands',
		'somalia',
		'southAfrica',
		'southSudan',
		'spain',
		'sriLanka',
		'stEustatiusNetherlands',
		'sudan',
		'suriname',
		'swaziland',
		'sweden',
		'switzerland',
		'syria',
		'saoTomeAndPrincipe',
		'taiwan',
		'tajikistan',
		'tanzania',
		'thailand',
		'timorLeste',
		'togo',
		'tonga',
		'trinidadAndTobago',
		'tunisia',
		'turkey',
		'turkmenistan',
		'turksaAndCaicosIslands',
		'tuvalu',
		'uganda',
		'ukraine',
		'unitedArabEmirates',
		'unitedKingdom',
		'unitedStates',
		'unitedStatesVirginIslands',
		'uruguay',
		'uzbekistan',
		'vanuatu',
		'venezuela',
		'vietnam',
		'westernSahara',
		'yemen',
		'zambia',
		'zimbabwe',
	]

	function assingColorCode(value: number, stepValue: number) {
		if (value === 0) return '#ffffff'
		else if (value <= stepValue) return '#ccedff'
		else if (value <= stepValue * 2) return '#80d2ff'
		else if (value <= stepValue * 3) return '#1aafff'
		else if (value <= stepValue * 4) return '#0074b3'
		else return '#004266'
	}
	function handleChecboxChange(
		data: CheckboxProps,
		filterTitle: 'interactionType' | 'conversationType' | 'topic' | 'year'
	) {
		setFilters({
			...filters,
			[filterTitle]: {
				show: filters[filterTitle]['show'],
				subFilters: filters[filterTitle]['subFilters'].includes(
					data.value as string
				)
					? filters[filterTitle]['subFilters'].filter(
							(item) => item !== data.value
					  )
					: [...filters[filterTitle]['subFilters'], data.value],
			},
		})
	}
	function handleDataFilter(
		data: { [key: string]: string }[],
		filters: { [key: string]: string[] | string }
	) {
		const countryDict = countryList.reduce(
			(acc: { [key: string]: number }, item) => {
				acc[item] = 0
				return acc
			},
			{}
		)
		let filteredData = data

		if (filters.hasOwnProperty('interactionType')) {
			filteredData = filteredData.filter((item) => {
				return (filters['interactionType'] as string[]).includes(
					item['interactionType']
				)
			})
		}
		if (filters.hasOwnProperty('conversationType')) {
			filteredData = filteredData.filter((item) => {
				return (filters['conversationType'] as string[]).includes(
					item['conversationType']
				)
			})
		}
		if (filters.hasOwnProperty('topic')) {
			filteredData = filteredData.filter((item) => {
				return (filters['topic'] as string[]).includes(item['topic'])
			})
		}
		if (filters.hasOwnProperty('startDate')) {
			filteredData = filteredData.filter((item) => {
				return (
					new Date(item['date']) >= new Date(filters['startDate'] as string)
				)
			})
		}
		if (filters.hasOwnProperty('endDate')) {
			filteredData = filteredData.filter((item) => {
				return new Date(item['date']) <= new Date(filters['endDate'] as string)
			})
		}
		if (filters.hasOwnProperty('reporterCountry')) {
			filteredData = filteredData.filter((item) => {
				return item['reporter'] === filters['reporterCountry']
			})
		}

		for (const country of filteredData) {
			countryDict[country.reporter] += 1
			countryDict[country.reported] += 1
		}
		const sortedDict = Object.fromEntries(
			Object.entries(countryDict).sort(([, a], [, b]) => b - a)
		)
		const maxValue = Object.values(sortedDict)[0]
		const stepValue = Math.floor(maxValue / 4)
		const colorDict: { [key: string]: string } = {}

		Object.keys(sortedDict).forEach((key) => {
			const value = sortedDict[key]
			colorDict[key] = assingColorCode(value, stepValue)
		})
		if (filters.hasOwnProperty('reporterCountry')) {
			colorDict[filters['reporterCountry'] as string] = 'red'
		}
		return colorDict
	}
	function handleFilterSelection() {
		let formattedFilters: { [key: string]: string[] | string } = {}
		Object.entries(filters).forEach(([key, value]) => {
			if (value['subFilters'].length > 0)
				formattedFilters[key] = value['subFilters']
		})
		if (reporterFilter['value'] !== '') {
			formattedFilters['reporterCountry'] = reporterFilter['value']
		}
		if (startDateRef.current !== null && startDateRef.current.value !== '')
			formattedFilters['startDate'] = startDateRef.current.value
		if (endDateRef.current !== null && endDateRef.current.value !== '')
			formattedFilters['endDate'] = endDateRef.current.value

		return formattedFilters
	}
	function handleCountryDataSelection(
		data: { [key: string]: string }[],
		title: string
	) {
		const formattedCountry =
			title == undefined || title == ''
				? ''
				: title.replace(/\s+/g, '')[0].toLowerCase() +
				  title.replace(/\s+/g, '').slice(1)
		return {
			title: title,
			data: data.filter((item) => {
				return (
					item['reporter'] === formattedCountry ||
					item['reported'] === formattedCountry
				)
			}),
		}
	}
	useEffect(() => {
		const fetchColors = async () => {
			setLoading(true)
			try {
				const response = await fetch('/api/countries')
				const jsonData = await response.json()
				setOriginalData(jsonData)
				const colorData = handleDataFilter(jsonData, {})
				setColors(colorData)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchColors()
	}, [])
	return (
		<SidebarPushable>
			<Sidebar
				animation='overlay'
				icon='labeled'
				onHide={() => setVisible(false)}
				visible={visible}
				width='wide'
				className={styles.filterSidebar}
			>
				<h2>Filter By</h2>
				<Accordion fluid exclusive={false}>
					<AccordionTitle
						active={reporterFilter['show']}
						index={0}
						onClick={() => {
							setReporterFilter({
								show: !reporterFilter['show'],
								value: reporterFilter['value'],
							})
						}}
					>
						<Icon name='dropdown' />
						Reporter Country
					</AccordionTitle>
					<AccordionContent active={reporterFilter['show']}>
						<Segment className={styles.reporterCountry}>
							<Form>
								{countryList.map((country) => {
									const formattedCountry = country
										.replace(/([a-z])([A-Z])/g, '$1 $2')
										.replace(/\b\w/g, function (char) {
											return char.toUpperCase()
										})
									return (
										<FormField key={country}>
											<Radio
												label={
													<label>
														<CountryFlag name={formattedCountry} />{' '}
														{formattedCountry}
													</label>
												}
												name='reporterCountryFilterRadio'
												value={country}
												checked={reporterFilter['value'] === country}
												onChange={(e, data) =>
													setReporterFilter({
														show: reporterFilter['show'],
														value: data.value as string,
													})
												}
											/>
										</FormField>
									)
								})}
							</Form>
						</Segment>
					</AccordionContent>

					<AccordionTitle
						active={filters['interactionType']['show']}
						index={0}
						onClick={() => {
							setFilters({
								...filters,
								interactionType: {
									show: !filters['interactionType']['show'],
									subFilters: filters['interactionType']['subFilters'],
								},
							})
						}}
					>
						<Icon name='dropdown' />
						Interaction Type
					</AccordionTitle>
					<AccordionContent active={filters['interactionType']['show']}>
						<Segment>
							<Form>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='star' /> Leader Level
											</label>
										}
										name='interactionTypeFilterCheckbox'
										value='leaderLevel'
										onChange={(e, data) =>
											handleChecboxChange(data, 'interactionType')
										}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='at' /> Mention
											</label>
										}
										name='interactionTypeFilterCheckbox'
										value='mention'
										onChange={(e, data) =>
											handleChecboxChange(data, 'interactionType')
										}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='ellipsis horizontal' /> Other
											</label>
										}
										name='interactionTypeFilterCheckbox'
										value='other'
										onChange={(e, data) =>
											handleChecboxChange(data, 'interactionType')
										}
									/>
								</FormField>
							</Form>
						</Segment>
					</AccordionContent>

					<AccordionTitle
						active={filters['conversationType']['show']}
						index={1}
						onClick={() => {
							setFilters({
								...filters,
								conversationType: {
									show: !filters['conversationType']['show'],
									subFilters: filters['conversationType']['subFilters'],
								},
							})
						}}
					>
						<Icon name='dropdown' />
						Conversation Type
					</AccordionTitle>
					<AccordionContent active={filters['conversationType']['show']}>
						<Segment>
							<Form>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='phone' /> Telephone
											</label>
										}
										name='conversationTypeFilterCheckbox'
										value='telephone'
										onChange={(e, data) =>
											handleChecboxChange(data, 'conversationType')
										}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='envelope' /> Email
											</label>
										}
										name='conversationTypeFilterCheckbox'
										value='email'
										onChange={(e, data) =>
											handleChecboxChange(data, 'conversationType')
										}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='users' /> Face to Face
											</label>
										}
										name='conversationTypeFilterCheckbox'
										value='faceToFace'
										onChange={(e, data) =>
											handleChecboxChange(data, 'conversationType')
										}
									/>
								</FormField>
							</Form>
						</Segment>
					</AccordionContent>

					<AccordionTitle
						active={filters['topic']['show']}
						index={2}
						onClick={() => {
							setFilters({
								...filters,
								topic: {
									show: !filters['topic']['show'],
									subFilters: filters['topic']['subFilters'],
								},
							})
						}}
					>
						<Icon name='dropdown' />
						Topic
					</AccordionTitle>
					<AccordionContent active={filters['topic']['show']}>
						<Segment>
							<Form>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='chart line' /> Economic
											</label>
										}
										name='topicFilterCheckbox'
										value='economic'
										onChange={(e, data) => handleChecboxChange(data, 'topic')}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='shield' /> Military
											</label>
										}
										name='topicFilterCheckbox'
										value='military'
										onChange={(e, data) => handleChecboxChange(data, 'topic')}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='flag' /> Political
											</label>
										}
										name='topicFilterCheckbox'
										value='political'
										onChange={(e, data) => handleChecboxChange(data, 'topic')}
									/>
								</FormField>
								<FormField>
									<Checkbox
										label={
											<label>
												<Icon name='building outline' /> Development
											</label>
										}
										name='topicFilterCheckbox'
										value='development'
										onChange={(e, data) => handleChecboxChange(data, 'topic')}
									/>
								</FormField>
							</Form>
						</Segment>
					</AccordionContent>

					<AccordionTitle
						active={filters['year']['show']}
						index={2}
						onClick={() => {
							setFilters({
								...filters,
								year: {
									show: !filters['year']['show'],
									subFilters: filters['year']['subFilters'],
								},
							})
						}}
					>
						<Icon name='dropdown' />
						Year
					</AccordionTitle>
					<AccordionContent active={filters['year']['show']}>
						<Segment className={styles.yearFilter}>
							<div>
								<label>Start Date</label>
								<input
									ref={startDateRef}
									type='date'
									placeholder='Enter Start Date'
								></input>
							</div>
							<div>
								<label>End Date</label>
								<input
									ref={endDateRef}
									type='date'
									placeholder='Enter Start Date'
								></input>
							</div>
						</Segment>
					</AccordionContent>
				</Accordion>
				<Button
					primary
					className={styles.filterBtn}
					size='huge'
					onClick={() => {
						const filters = handleFilterSelection()
						setColors(handleDataFilter(originalData, filters))
					}}
				>
					Filter
				</Button>
			</Sidebar>

			<SidebarPusher>
				<div className={styles.worldMapScreenContainer}>
					<div className={styles.filterSidebarBtnWrapper}>
						<Button
							icon='filter'
							content='Filter'
							color='grey'
							onClick={() => setVisible(!visible)}
						/>
					</div>
					{loading ? (
						<div>Loading...</div>
					) : (
						<div className={styles.mapContainer}>
							<WorldMapSvg
								onPathHover={setCountry}
								onPathClick={() => {
									setModalOpen(true)
								}}
								colors={colors}
							/>
							<CountryDataModal
								country={handleCountryDataSelection(originalData, country)}
								modalOpen={modalOpen}
								onModalClose={() => setModalOpen(false)}
								onModalOpen={() => setModalOpen(true)}
							/>
						</div>
					)}

					<div className={styles.zoomBtnContainer}>
						<ButtonGroup size='big'>
							<Button icon='zoom-in' color='grey' />
							<Button icon='zoom-out' color='grey' />
						</ButtonGroup>
					</div>
				</div>
			</SidebarPusher>
		</SidebarPushable>
	)
}

export default WorldMapScreen
