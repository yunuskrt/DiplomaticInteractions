import React from 'react'
import styles from './countryDataModal.module.css'
import {
	Icon,
	SemanticICONS,
	ModalHeader,
	ModalDescription,
	ModalContent,
	Modal,
	Table,
	TableRow,
	TableHeaderCell,
	TableHeader,
	TableCell,
	TableBody,
} from 'semantic-ui-react'
import CountryFlag from '@components/countryFlag'

type Props = {
	country: { data: { [key: string]: string }[]; title: string }
	modalOpen: boolean
	onModalOpen: () => void
	onModalClose: () => void
}

const CountryDataModal = ({
	country,
	modalOpen,
	onModalOpen,
	onModalClose,
}: Props) => {
	function convertCamelCase(text: string) {
		return text
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.replace(/\b\w/g, function (char) {
				return char.toUpperCase()
			})
	}
	const camelCaseData = country.data.map((data) => {
		return {
			reporter: convertCamelCase(data.reporter),
			reported: convertCamelCase(data.reported),
			interactionType: convertCamelCase(data.interactionType),
			conversationType: convertCamelCase(data.conversationType),
			topic: convertCamelCase(data.topic),
			date: convertCamelCase(data.date),
		}
	})
	return (
		<>
			{country.title !== '' && (
				<div className={styles.countryToolTipContainer}>
					<div className={styles.countryTooltipHeader}>
						<CountryFlag name={country.title} />
						{country.title}
					</div>
					<div className={styles.toolTipText}>
						<p>Click on map to see more information</p>
						<Icon name={'right arrow' as SemanticICONS} />
					</div>
				</div>
			)}

			<Modal onClose={onModalClose} onOpen={onModalOpen} open={modalOpen}>
				<ModalHeader>
					<div className={styles.modalHeader}>
						<CountryFlag name={country.title} />
						<div>{country.title} - Data</div>
					</div>
				</ModalHeader>
				<ModalContent>
					<ModalDescription>
						<Table celled>
							<TableHeader>
								<TableRow>
									<TableHeaderCell>Reporter</TableHeaderCell>
									<TableHeaderCell>Reported</TableHeaderCell>
									<TableHeaderCell>Interaction Type</TableHeaderCell>
									<TableHeaderCell>Conversation Type</TableHeaderCell>
									<TableHeaderCell>Topic</TableHeaderCell>
									<TableHeaderCell>Date</TableHeaderCell>
								</TableRow>
							</TableHeader>

							<TableBody>
								{camelCaseData.map((data, index) => (
									<TableRow key={index}>
										<TableCell>
											{data.reporter === country.title ? (
												<div className={styles.boldTitle}>{data.reporter}</div>
											) : (
												<div>{data.reporter}</div>
											)}
										</TableCell>
										<TableCell>
											{data.reported === country.title ? (
												<div className={styles.boldTitle}>{data.reported}</div>
											) : (
												<div>{data.reported}</div>
											)}
										</TableCell>
										<TableCell>{data.interactionType}</TableCell>
										<TableCell>{data.conversationType}</TableCell>
										<TableCell>{data.topic}</TableCell>
										<TableCell>{data.date}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</ModalDescription>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CountryDataModal
