import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import CountryFlag from '@components/countryFlag'
import { Grid, GridColumn } from 'semantic-ui-react'
import styles from './countries.module.css'

const codeData = {
	AL: 'Albania',
	DZ: 'Algeria',
	AS: 'American Samoa',
	AO: 'Angola',
	AI: 'Anguilla',
	AG: 'Antigua and Barbuda',
	AR: 'Argentina',
	AM: 'Armenia',
	AW: 'Aruba',
	AU: 'Australia',
	AT: 'Austria',
	AZ: 'Azerbaijan',
	BS: 'Bahamas',
	BH: 'Bahrain',
	BD: 'Bangladesh',
	BB: 'Barbados',
	BY: 'Belarus',
	BE: 'Belgium',
	BZ: 'Belize',
	BJ: 'Benin',
	BM: 'Bermuda',
	BT: 'Bhutan',
	BO: 'Bolivia',
	BA: 'Bosnia and Herzegovina',
	BW: 'Botswana',
	BR: 'Brazil',
	VG: 'British Virgin Islands',
	BN: 'Brunei Darussalam',
	BG: 'Bulgaria',
	BF: 'Burkina Faso',
	BI: 'Burundi',
	KH: 'Cambodia',
	CM: 'Cameroon',
	CA: 'Canada',
	CV: 'Cape Verde',
	KY: 'Cayman Islands',
	CF: 'Central African Republic',
	TD: 'Chad',
	CL: 'Chile',
	CN: 'China',
	CO: 'Colombia',
	KM: 'Comoros',
	CG: 'Congo',
	CR: 'Costa Rica',
	HR: 'Croatia',
	CU: 'Cuba',
	CW: 'Curaçao',
	CY: 'Cyprus',
	CZ: 'Czech Republic',
	KP: 'Dem. Rep. Korea',
	DK: 'Denmark',
	DJ: 'Djibouti',
	DM: 'Dominica',
	DO: 'Dominican Republic',
	EC: 'Ecuador',
	EG: 'Egypt',
	SV: 'El Salvador',
	GQ: 'Equatorial Guinea',
	ER: 'Eritrea',
	EE: 'Estonia',
	ET: 'Ethiopia',
	FO: 'Faeroe Islands',
	FK: 'Falkland Islands',
	FM: 'Federated States of Micronesia',
	FJ: 'Fiji',
	FI: 'Finland',
	FR: 'France',
	GF: 'French Guiana',
	PF: 'French Polynesia',
	GA: 'Gabon',
	GM: 'Gambia',
	GE: 'Georgia',
	DE: 'Germany',
	GH: 'Ghana',
	GR: 'Greece',
	GL: 'Greenland',
	GD: 'Grenada',
	GP: 'Guadeloupe',
	GU: 'Guam',
	GT: 'Guatemala',
	GN: 'Guinea',
	GW: 'Guinea-Bissau',
	GY: 'Guyana',
	HT: 'Haiti',
	HN: 'Honduras',
	HU: 'Hungary',
	IS: 'Iceland',
	IN: 'India',
	ID: 'Indonesia',
	IR: 'Iran',
	IQ: 'Iraq',
	IE: 'Ireland',
	IL: 'Israel',
	IT: 'Italy',
	JM: 'Jamaica',
	JP: 'Japan',
	JO: 'Jordan',
	KZ: 'Kazakhstan',
	KE: 'Kenya',
	KW: 'Kuwait',
	KG: 'Kyrgyzstan',
	LA: 'Lao PDR',
	LV: 'Latvia',
	LB: 'Lebanon',
	LS: 'Lesotho',
	LR: 'Liberia',
	LY: 'Libya',
	LT: 'Lithuania',
	LU: 'Luxembourg',
	MK: 'Macedonia',
	MG: 'Madagascar',
	MW: 'Malawi',
	MY: 'Malaysia',
	MV: 'Maldives',
	ML: 'Mali',
	MT: 'Malta',
	MH: 'Marshall Islands',
	MQ: 'Martinique',
	MR: 'Mauritania',
	MU: 'Mauritius',
	YT: 'Mayotte',
	MX: 'Mexico',
	MD: 'Moldova',
	MN: 'Mongolia',
	ME: 'Montenegro',
	MS: 'Montserrat',
	MA: 'Morocco',
	MZ: 'Mozambique',
	MM: 'Myanmar',
	NA: 'Namibia',
	NR: 'Nauru',
	NP: 'Nepal',
	NL: 'Netherlands',
	NC: 'New Caledonia',
	NZ: 'New Zealand',
	NI: 'Nicaragua',
	NE: 'Niger',
	NG: 'Nigeria',
	MP: 'Northern Mariana Islands',
	NO: 'Norway',
	OM: 'Oman',
	PK: 'Pakistan',
	PW: 'Palau',
	PS: 'Palestine',
	PA: 'Panama',
	PG: 'Papua New Guinea',
	PY: 'Paraguay',
	PE: 'Peru',
	PH: 'Philippines',
	PL: 'Poland',
	PT: 'Portugal',
	PR: 'Puerto Rico',
	QA: 'Qatar',
	KR: 'Republic of Korea',
	RE: 'Reunion',
	RO: 'Romania',
	RU: 'Russia',
	RW: 'Rwanda',
	KN: 'Saint Kitts and Nevis',
	LC: 'Saint Lucia',
	VC: 'Saint Vincent and the Grenadines',
	BL: 'Saint-Barthélemy',
	MF: 'Saint-Martin',
	WS: 'Samoa',
	ST: 'São Tomé and Principe',
	SA: 'Saudi Arabia',
	SN: 'Senegal',
	RS: 'Serbia',
	SC: 'Seychelles',
	SL: 'Sierra Leone',
	SX: 'Sint Maarten',
	SK: 'Slovakia',
	SI: 'Slovenia',
	SB: 'Solomon Islands',
	SO: 'Somalia',
	ZA: 'South Africa',
	ES: 'Spain',
	LK: 'Sri Lanka',
	BQ: 'St. Eustatius And Saba (Netherlands)',
	SD: 'Sudan',
	SR: 'Suriname',
	SZ: 'Swaziland',
	SE: 'Sweden',
	CH: 'Switzerland',
	SY: 'Syria',
	TW: 'Taiwan',
	TJ: 'Tajikistan',
	TZ: 'Tanzania',
	TH: 'Thailand',
	TL: 'Timor-Leste',
	TG: 'Togo',
	TO: 'Tonga',
	TT: 'Trinidad and Tobago',
	TN: 'Tunisia',
	TR: 'Turkey',
	TM: 'Turkmenistan',
	TC: 'Turks and Caicos Islands',
	TV: 'Tuvalu',
	UG: 'Uganda',
	UA: 'Ukraine',
	AE: 'United Arab Emirates',
	GB: 'United Kingdom',
	US: 'United States',
	VI: 'United States Virgin Islands',
	UY: 'Uruguay',
	UZ: 'Uzbekistan',
	VU: 'Vanuatu',
	VE: 'Venezuela',
	VN: 'Vietnam',
	EH: 'Western Sahara',
	YE: 'Yemen',
	ZM: 'Zambia',
	ZW: 'Zimbabwe',
}

const CountryList = () => {
	const router = useRouter()
	const [searchData, setSearchData] = useState(codeData)
	const searchRef = useRef(null)
	return (
		<div className={styles.countriesContainer}>
			<input
				placeholder='Search Country...'
				className={styles.searchInput}
				ref={searchRef}
				onChange={() => {
					let filtered = {}
					const searchTerm = searchRef.current?.value.toLowerCase()
					for (let [key, value] of Object.entries(codeData)) {
						if (value.toLowerCase().includes(searchTerm)) {
							filtered[key] = value
						}
					}
					setSearchData(filtered)
				}}
			/>
			<div className={styles.gridCardContainer}>
				<Grid>
					{Object.entries(searchData).map((country) => {
						return (
							<GridColumn mobile={16} tablet={8} computer={4} key={country[0]}>
								<div className={styles.countryCard}>
									<div
										className={styles.countryFlag}
										onClick={() => {
											router.push(`/countries/${country[0].toLowerCase()}`)
										}}
									>
										<CountryFlag
											fontSize={100}
											name={country[1]}
											countryCode={country[0]}
										/>
									</div>
									<span>{country[1]}</span>
								</div>
							</GridColumn>
						)
					})}
				</Grid>
			</div>
		</div>
	)
}
export default CountryList
