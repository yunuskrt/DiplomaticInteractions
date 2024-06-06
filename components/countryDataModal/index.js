import React from 'react'
import styles from './countryDataModal.module.css'
import {
	Icon,
	ModalHeader,
	ModalDescription,
	ModalContent,
	ModalActions,
	Modal,
	Table,
	TableRow,
	TableHeaderCell,
	TableHeader,
	TableCell,
	TableBody,
	Button,
} from 'semantic-ui-react'
import CountryFlag from '@components/countryFlag'

const CountryDataModal = ({
	country,
	modalOpen,
	onModalOpen,
	onModalClose,
}) => {
	const codeDict = {
		Albania: 'AL',
		Algeria: 'DZ',
		'American Samoa': 'AS',
		Angola: 'AO',
		Anguilla: 'AI',
		'Antigua and Barbuda': 'AG',
		Argentina: 'AR',
		Armenia: 'AM',
		Aruba: 'AW',
		Australia: 'AU',
		Austria: 'AT',
		Azerbaijan: 'AZ',
		Bahamas: 'BS',
		Bahrain: 'BH',
		Bangladesh: 'BD',
		Barbados: 'BB',
		Belarus: 'BY',
		Belgium: 'BE',
		Belize: 'BZ',
		Benin: 'BJ',
		Bermuda: 'BM',
		Bhutan: 'BT',
		Bolivia: 'BO',
		'Bosnia and Herzegovina': 'BA',
		Botswana: 'BW',
		Brazil: 'BR',
		'British Virgin Islands': 'VG',
		'Brunei Darussalam': 'BN',
		Bulgaria: 'BG',
		'Burkina Faso': 'BF',
		Burundi: 'BI',
		Cambodia: 'KH',
		Cameroon: 'CM',
		Canada: 'CA',
		'Cape Verde': 'CV',
		'Cayman Islands': 'KY',
		'Central African Republic': 'CF',
		Chad: 'TD',
		Chile: 'CL',
		China: 'CN',
		Colombia: 'CO',
		Comoros: 'KM',
		Congo: 'CG',
		'Costa Rica': 'CR',
		Croatia: 'HR',
		Cuba: 'CU',
		Curaçao: 'CW',
		Cyprus: 'CY',
		'Czech Republic': 'CZ',
		'Dem. Rep. Korea': 'KP',
		Denmark: 'DK',
		Djibouti: 'DJ',
		Dominica: 'DM',
		'Dominican Republic': 'DO',
		Ecuador: 'EC',
		Egypt: 'EG',
		'El Salvador': 'SV',
		'Equatorial Guinea': 'GQ',
		Eritrea: 'ER',
		Estonia: 'EE',
		Ethiopia: 'ET',
		'Faeroe Islands': 'FO',
		'Falkland Islands': 'FK',
		'Federated States of Micronesia': 'FM',
		Fiji: 'FJ',
		Finland: 'FI',
		France: 'FR',
		'French Guiana': 'GF',
		'French Polynesia': 'PF',
		Gabon: 'GA',
		Gambia: 'GM',
		Georgia: 'GE',
		Germany: 'DE',
		Ghana: 'GH',
		Greece: 'GR',
		Greenland: 'GL',
		Grenada: 'GD',
		Guadeloupe: 'GP',
		Guam: 'GU',
		Guatemala: 'GT',
		Guinea: 'GN',
		'Guinea-Bissau': 'GW',
		Guyana: 'GY',
		Haiti: 'HT',
		Honduras: 'HN',
		Hungary: 'HU',
		Iceland: 'IS',
		India: 'IN',
		Indonesia: 'ID',
		Iran: 'IR',
		Iraq: 'IQ',
		Ireland: 'IE',
		Israel: 'IL',
		Italy: 'IT',
		Jamaica: 'JM',
		Japan: 'JP',
		Jordan: 'JO',
		Kazakhstan: 'KZ',
		Kenya: 'KE',
		Kuwait: 'KW',
		Kyrgyzstan: 'KG',
		'Lao PDR': 'LA',
		Latvia: 'LV',
		Lebanon: 'LB',
		Lesotho: 'LS',
		Liberia: 'LR',
		Libya: 'LY',
		Lithuania: 'LT',
		Luxembourg: 'LU',
		Macedonia: 'MK',
		Madagascar: 'MG',
		Malawi: 'MW',
		Malaysia: 'MY',
		Maldives: 'MV',
		Mali: 'ML',
		Malta: 'MT',
		'Marshall Islands': 'MH',
		Martinique: 'MQ',
		Mauritania: 'MR',
		Mauritius: 'MU',
		Mayotte: 'YT',
		Mexico: 'MX',
		Moldova: 'MD',
		Mongolia: 'MN',
		Montenegro: 'ME',
		Montserrat: 'MS',
		Morocco: 'MA',
		Mozambique: 'MZ',
		Myanmar: 'MM',
		Namibia: 'NA',
		Nauru: 'NR',
		Nepal: 'NP',
		Netherlands: 'NL',
		'New Caledonia': 'NC',
		'New Zealand': 'NZ',
		Nicaragua: 'NI',
		Niger: 'NE',
		Nigeria: 'NG',
		'Northern Mariana Islands': 'MP',
		Norway: 'NO',
		Oman: 'OM',
		Pakistan: 'PK',
		Palau: 'PW',
		Palestine: 'PS',
		Panama: 'PA',
		'Papua New Guinea': 'PG',
		Paraguay: 'PY',
		Peru: 'PE',
		Philippines: 'PH',
		Poland: 'PL',
		Portugal: 'PT',
		'Puerto Rico': 'PR',
		Qatar: 'QA',
		'Republic of Korea': 'KR',
		Reunion: 'RE',
		Romania: 'RO',
		Russia: 'RU',
		Rwanda: 'RW',
		'Saint Kitts and Nevis': 'KN',
		'Saint Lucia': 'LC',
		'Saint Vincent and the Grenadines': 'VC',
		'Saint-Barthélemy': 'BL',
		'Saint-Martin': 'MF',
		Samoa: 'WS',
		'São Tomé and Principe': 'ST',
		'Saudi Arabia': 'SA',
		Senegal: 'SN',
		Serbia: 'RS',
		Seychelles: 'SC',
		'Sierra Leone': 'SL',
		'Sint Maarten': 'SX',
		Slovakia: 'SK',
		Slovenia: 'SI',
		'Solomon Islands': 'SB',
		Somalia: 'SO',
		'South Africa': 'ZA',
		Spain: 'ES',
		'Sri Lanka': 'LK',
		'St. Eustatius And Saba (Netherlands)': 'BQ',
		Sudan: 'SD',
		Suriname: 'SR',
		Swaziland: 'SZ',
		Sweden: 'SE',
		Switzerland: 'CH',
		Syria: 'SY',
		Taiwan: 'TW',
		Tajikistan: 'TJ',
		Tanzania: 'TZ',
		Thailand: 'TH',
		'Timor-Leste': 'TL',
		Togo: 'TG',
		Tonga: 'TO',
		'Trinidad and Tobago': 'TT',
		Tunisia: 'TN',
		Turkey: 'TR',
		Turkmenistan: 'TM',
		'Turks and Caicos Islands': 'TC',
		Tuvalu: 'TV',
		Uganda: 'UG',
		Ukraine: 'UA',
		'United Arab Emirates': 'AE',
		'United Kingdom': 'GB',
		'United States': 'US',
		'United States Virgin Islands': 'VI',
		Uruguay: 'UY',
		Uzbekistan: 'UZ',
		Vanuatu: 'VU',
		Venezuela: 'VE',
		Vietnam: 'VN',
		'Western Sahara': 'EH',
		Yemen: 'YE',
		Zambia: 'ZM',
		Zimbabwe: 'ZW',
	}
	function capitalized(text) {
		return text
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.replace(/\b\w/g, function (char) {
				return char.toUpperCase()
			})
	}
	const camelCaseData = country.data.map((data) => {
		return {
			reporter: capitalized(data.reporter),
			reported: capitalized(data.reported),
			interactionType: capitalized(data.interactionType),
			conversationType: capitalized(data.conversationType),
			topic: capitalized(data.topic),
			date: capitalized(data.date),
		}
	})
	return (
		<>
			{country.title !== '' && (
				<div className={styles.countryToolTipContainer}>
					<div className={styles.countryTooltipHeader}>
						<CountryFlag countryCode={codeDict[country.title]} />
						{country.title}
					</div>
					<div className={styles.toolTipText}>
						<p>Click on map to see more information</p>
						<Icon name={'right arrow'} />
					</div>
				</div>
			)}

			<Modal onClose={onModalClose} onOpen={onModalOpen} open={modalOpen}>
				<ModalHeader>
					<div className={styles.modalHeader}>
						<CountryFlag countryCode={codeDict[country.title]} />
						<div>{country.title} - Data</div>
					</div>
				</ModalHeader>
				<ModalContent className={styles.modalContent}>
					<ModalDescription>
						<Table celled>
							<TableHeader>
								<TableRow>
									<TableHeaderCell textAlign='center'>Reporter</TableHeaderCell>
									<TableHeaderCell textAlign='center'>Reported</TableHeaderCell>
									<TableHeaderCell textAlign='center'>
										Interaction Type
									</TableHeaderCell>
									<TableHeaderCell textAlign='center'>
										Conversation Type
									</TableHeaderCell>
									<TableHeaderCell textAlign='center'>Topic</TableHeaderCell>
									<TableHeaderCell textAlign='center'>Date</TableHeaderCell>
								</TableRow>
							</TableHeader>

							<TableBody>
								{camelCaseData.map((data, index) => (
									<TableRow key={index}>
										<TableCell textAlign='center'>
											{data.reporter === country.title ? (
												<div className={styles.boldTitle}>{data.reporter}</div>
											) : (
												<div>{data.reporter}</div>
											)}
										</TableCell>
										<TableCell textAlign='center'>
											{data.reported === country.title ? (
												<div className={styles.boldTitle}>{data.reported}</div>
											) : (
												<div>{data.reported}</div>
											)}
										</TableCell>
										<TableCell textAlign='center'>
											{data.interactionType}
										</TableCell>
										<TableCell textAlign='center'>
											{data.conversationType}
										</TableCell>
										<TableCell textAlign='center'>{data.topic}</TableCell>
										<TableCell textAlign='center'>{data.date}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</ModalDescription>
				</ModalContent>
				<ModalActions>
					<Button
						as='a'
						href={`/countries/${
							codeDict[country.title] === undefined
								? '/404'
								: codeDict[country.title].toLowerCase()
						}`}
						primary
					>
						Go To Page
					</Button>
				</ModalActions>
			</Modal>
		</>
	)
}

export default CountryDataModal
