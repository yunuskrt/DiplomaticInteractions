import React, { useState, useEffect, useRef } from 'react'
import InteractionCartography from '@components/interactionCartography'
import CountryDataModal from '@components/countryDataModal'
import CountryFlag from '@components/countryFlag'
import styles from './worldMapScreen.module.css'
import {
	Button,
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
	FormField,
} from 'semantic-ui-react'
import InteractionNetwork from '@components/interactionNetwork'

const WorldMapScreen = () => {
	const [display, setDisplay] = useState('cartography')
	const [visible, setVisible] = useState(false)
	const [filters, setFilters] = useState({
		interactionType: { show: false, subFilters: [] },
		conversationType: { show: false, subFilters: [] },
		topic: { show: false, subFilters: [] },
		year: { show: false, subFilters: [] },
	})
	const [reporterFilter, setReporterFilter] = useState({
		show: false,
		value: '',
	})
	const startDateRef = useRef(null)
	const endDateRef = useRef(null)

	const [country, setCountry] = useState('')
	const [modalOpen, setModalOpen] = useState(false)

	const [filteredData, setFilteredData] = useState(null)

	const [loading, setLoading] = useState(true)

	const [originalData, setOriginalData] = useState(null)

	const camelDict = {
		Albania: 'albania',
		Algeria: 'algeria',
		'American Samoa': 'americanSamoa',
		Angola: 'angola',
		Anguilla: 'anguilla',
		'Antigua and Barbuda': 'antiguaAndBarbuda',
		Argentina: 'argentina',
		Armenia: 'armenia',
		Aruba: 'aruba',
		Australia: 'australia',
		Austria: 'austria',
		Azerbaijan: 'azerbaijan',
		Bahamas: 'bahamas',
		Bahrain: 'bahrain',
		Bangladesh: 'bangladesh',
		Barbados: 'barbados',
		Belarus: 'belarus',
		Belgium: 'belgium',
		Belize: 'belize',
		Benin: 'benin',
		Bermuda: 'bermuda',
		Bhutan: 'bhutan',
		Bolivia: 'bolivia',
		'Bosnia and Herzegovina': 'bosniaAndHerzegovina',
		Botswana: 'botswana',
		Brazil: 'brazil',
		'British Virgin Islands': 'britishVirginIslands',
		'Brunei Darussalam': 'bruneiDarussalam',
		Bulgaria: 'bulgaria',
		'Burkina Faso': 'burkinaFaso',
		Burundi: 'burundi',
		Cambodia: 'cambodia',
		Cameroon: 'cameroon',
		Canada: 'canada',
		'Cape Verde': 'capeVerde',
		'Cayman Islands': 'caymanIslands',
		'Central African Republic': 'centralAfricanRepublic',
		Chad: 'chad',
		Chile: 'chile',
		China: 'china',
		Colombia: 'colombia',
		Comoros: 'comoros',
		Congo: 'congo',
		'Costa Rica': 'costaRica',
		Croatia: 'croatia',
		Cuba: 'cuba',
		Curaçao: 'curacao',
		Cyprus: 'cyprus',
		'Czech Republic': 'czechRepublic',
		'Dem. Rep. Korea': 'demRepKorea',
		Denmark: 'denmark',
		Djibouti: 'djibouti',
		Dominica: 'dominica',
		'Dominican Republic': 'dominicanRepublic',
		Ecuador: 'ecuador',
		Egypt: 'egypt',
		'El Salvador': 'elSalvador',
		'Equatorial Guinea': 'equatorialGuinea',
		Eritrea: 'eritrea',
		Estonia: 'estonia',
		Ethiopia: 'ethiopia',
		'Faeroe Islands': 'faeroeIslands',
		'Falkland Islands': 'falklandIslands',
		'Federated States of Micronesia': 'federatedStatesOfMicronesia',
		Fiji: 'fiji',
		Finland: 'finland',
		France: 'france',
		'French Guiana': 'frenchGuiana',
		'French Polynesia': 'frenchPolynesia',
		Gabon: 'gabon',
		Gambia: 'gambia',
		Georgia: 'georgia',
		Germany: 'germany',
		Ghana: 'ghana',
		Greece: 'greece',
		Greenland: 'greenland',
		Grenada: 'grenada',
		Guadeloupe: 'guadeloupe',
		Guam: 'guam',
		Guatemala: 'guatemala',
		Guinea: 'guinea',
		'Guinea-Bissau': 'guineaBissau',
		Guyana: 'guyana',
		Haiti: 'haiti',
		Honduras: 'honduras',
		Hungary: 'hungary',
		Iceland: 'iceland',
		India: 'india',
		Indonesia: 'indonesia',
		Iran: 'iran',
		Iraq: 'iraq',
		Ireland: 'ireland',
		Israel: 'israel',
		Italy: 'italy',
		Jamaica: 'jamaica',
		Japan: 'japan',
		Jordan: 'jordan',
		Kazakhstan: 'kazakhstan',
		Kenya: 'kenya',
		Kuwait: 'kuwait',
		Kyrgyzstan: 'kyrgyzstan',
		'Lao PDR': 'laoPDR',
		Latvia: 'latvia',
		Lebanon: 'lebanon',
		Lesotho: 'lesotho',
		Liberia: 'liberia',
		Libya: 'libya',
		Lithuania: 'lithuania',
		Luxembourg: 'luxembourg',
		Macedonia: 'macedonia',
		Madagascar: 'madagascar',
		Malawi: 'malawi',
		Malaysia: 'malaysia',
		Maldives: 'maldives',
		Mali: 'mali',
		Malta: 'malta',
		'Marshall Islands': 'marshallIslands',
		Martinique: 'martinique',
		Mauritania: 'mauritania',
		Mauritius: 'mauritius',
		Mayotte: 'mayotte',
		Mexico: 'mexico',
		Moldova: 'moldova',
		Mongolia: 'mongolia',
		Montenegro: 'montenegro',
		Montserrat: 'montserrat',
		Morocco: 'morocco',
		Mozambique: 'mozambique',
		Myanmar: 'myanmar',
		Namibia: 'namibia',
		Nauru: 'nauru',
		Nepal: 'nepal',
		Netherlands: 'netherlands',
		'New Caledonia': 'newCaledonia',
		'New Zealand': 'newZealand',
		Nicaragua: 'nicaragua',
		Niger: 'niger',
		Nigeria: 'nigeria',
		'Northern Mariana Islands': 'northernMarianaIslands',
		Norway: 'norway',
		Oman: 'oman',
		Pakistan: 'pakistan',
		Palau: 'palau',
		Palestine: 'palestine',
		Panama: 'panama',
		'Papua New Guinea': 'papuaNewGuinea',
		Paraguay: 'paraguay',
		Peru: 'peru',
		Philippines: 'philippines',
		Poland: 'poland',
		Portugal: 'portugal',
		'Puerto Rico': 'puertoRico',
		Qatar: 'qatar',
		'Republic of Korea': 'republicOfKorea',
		Reunion: 'reunion',
		Romania: 'romania',
		Russia: 'russia',
		Rwanda: 'rwanda',
		'Saint Kitts and Nevis': 'saintKittsAndNevis',
		'Saint Lucia': 'saintLucia',
		'Saint Vincent and the Grenadines': 'saintVincentAndTheGrenadines',
		'Saint-Barthélemy': 'saintBarthelemy',
		'Saint-Martin': 'saintMartin',
		Samoa: 'samoa',
		'São Tomé and Principe': 'saoTomeAndPrincipe',
		'Saudi Arabia': 'saudiArabia',
		Senegal: 'senegal',
		Serbia: 'serbia',
		Seychelles: 'seychelles',
		'Sierra Leone': 'sierraLeone',
		'Sint Maarten': 'sintMaarten',
		Slovakia: 'slovakia',
		Slovenia: 'slovenia',
		'Solomon Islands': 'solomonIslands',
		Somalia: 'somalia',
		'South Africa': 'southAfrica',
		Spain: 'spain',
		'Sri Lanka': 'sriLanka',
		'St. Eustatius And Saba (Netherlands)': 'sabaNetherlands',
		Sudan: 'sudan',
		Suriname: 'suriname',
		Swaziland: 'swaziland',
		Sweden: 'sweden',
		Switzerland: 'switzerland',
		Syria: 'syria',
		Taiwan: 'taiwan',
		Tajikistan: 'tajikistan',
		Tanzania: 'tanzania',
		Thailand: 'thailand',
		'Timor-Leste': 'timorLeste',
		Togo: 'togo',
		Tonga: 'tonga',
		'Trinidad and Tobago': 'trinidadAndTobago',
		Tunisia: 'tunisia',
		Turkey: 'turkey',
		Turkmenistan: 'turkmenistan',
		'Turks and Caicos Islands': 'turksaAndCaicosIslands',
		Tuvalu: 'tuvalu',
		Uganda: 'uganda',
		Ukraine: 'ukraine',
		'United Arab Emirates': 'unitedArabEmirates',
		'United Kingdom': 'unitedKingdom',
		'United States': 'unitedStates',
		'United States Virgin Islands': 'unitedStatesVirginIslands',
		Uruguay: 'uruguay',
		Uzbekistan: 'uzbekistan',
		Vanuatu: 'vanuatu',
		Venezuela: 'venezuela',
		Vietnam: 'vietnam',
		'Western Sahara': 'westernSahara',
		Yemen: 'yemen',
		Zambia: 'zambia',
		Zimbabwe: 'zimbabwe',
	}

	function handleChecboxChange(data, filterTitle) {
		setFilters({
			...filters,
			[filterTitle]: {
				show: filters[filterTitle]['show'],
				subFilters: filters[filterTitle]['subFilters'].includes(data.value)
					? filters[filterTitle]['subFilters'].filter(
							(item) => item !== data.value
					  )
					: [...filters[filterTitle]['subFilters'], data.value],
			},
		})
	}
	function handleDataFilter(data, filters) {
		let filteredData = data
		// filter data based on selected filters
		if (filters.hasOwnProperty('interactionType')) {
			filteredData = filteredData.filter((item) => {
				return filters['interactionType'].includes(item['interactionType'])
			})
		}
		if (filters.hasOwnProperty('conversationType')) {
			filteredData = filteredData.filter((item) => {
				return filters['conversationType'].includes(item['conversationType'])
			})
		}
		if (filters.hasOwnProperty('topic')) {
			filteredData = filteredData.filter((item) => {
				return filters['topic'].includes(item['topic'])
			})
		}
		if (filters.hasOwnProperty('startDate')) {
			filteredData = filteredData.filter((item) => {
				return new Date(item['date']) >= new Date(filters['startDate'])
			})
		}
		if (filters.hasOwnProperty('endDate')) {
			filteredData = filteredData.filter((item) => {
				return new Date(item['date']) <= new Date(filters['endDate'])
			})
		}
		if (filters.hasOwnProperty('reporterCountry')) {
			filteredData = filteredData.filter((item) => {
				return item['reporter'] === filters['reporterCountry']
			})
		}
		return filteredData
	}
	function handleFilterSelection() {
		let formattedFilters = {}
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
	function handleCountryDataSelection(data, title) {
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
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch('/api/countries')
				const jsonData = await response.json()
				setOriginalData(jsonData)
				const filteredData = handleDataFilter(jsonData, {})
				setFilteredData(filteredData)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
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
								{Object.entries(camelDict).map((country) => {
									return (
										<FormField key={country[1]}>
											<Radio
												label={
													<label>
														<CountryFlag name={country[0]} /> {country[0]}
													</label>
												}
												name='reporterCountryFilterRadio'
												value={country[1]}
												checked={reporterFilter['value'] === country[1]}
												onChange={(e, data) =>
													setReporterFilter({
														show: reporterFilter['show'],
														value: data.value,
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
						const filteredData = handleDataFilter(originalData, filters)
						setFilteredData(filteredData)
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
					) : display == 'cartography' ? (
						<div className={styles.mapContainer}>
							<InteractionCartography
								onPathHover={setCountry}
								onPathClick={() => {
									setModalOpen(true)
								}}
								cartographyData={filteredData}
							/>
							<CountryDataModal
								country={handleCountryDataSelection(originalData, country)}
								modalOpen={modalOpen}
								onModalClose={() => setModalOpen(false)}
								onModalOpen={() => setModalOpen(true)}
							/>
						</div>
					) : (
						<div className={styles.mapContainer}>
							<InteractionNetwork networkData={filteredData} />
						</div>
					)}

					<div className={styles.bottomContainer}>
						<div>
							<Form>
								<FormField>
									<Checkbox
										radio
										label='Cartography'
										name='displayOption'
										value='cartography'
										checked={display === 'cartography'}
										onChange={(e, data) => setDisplay(data.value)}
									/>
								</FormField>
								<FormField>
									<Checkbox
										radio
										label='Network'
										name='displayOption'
										value='network'
										checked={display === 'network'}
										onChange={(e, data) => setDisplay(data.value)}
									/>
								</FormField>
							</Form>
						</div>
					</div>
				</div>
			</SidebarPusher>
		</SidebarPushable>
	)
}

export default WorldMapScreen
