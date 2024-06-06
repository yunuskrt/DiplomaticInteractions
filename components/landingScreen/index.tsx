import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import GlobeNetworkSvg from '@components/globeNetworkSvg'
import LandingIcon from '@components/landingIcon'
import styles from './landingScreen.module.css'

type Props = {
	onScroll: () => void
}
const LandingScreen = ({ onScroll }: Props) => {
	return (
		<Grid>
			<Grid.Row style={{ height: '70vh' }}>
				<Grid.Column width={10} textAlign='center' verticalAlign='middle'>
					<div className={styles.landingText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
						massa, facilisis sit amet sem ut, fringilla pharetra velit. Ut
						tristique ligula sed nisi luctus
					</div>
				</Grid.Column>
				<Grid.Column width={6} textAlign='center' verticalAlign='middle'>
					<GlobeNetworkSvg />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row
				style={{
					height: '15vh',
					// overflow: 'scroll',
				}}
			>
				<Grid.Column
					width={16}
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							width: '80%',
							height: '100%',
							display: 'flex',
						}}
					>
						<LandingIcon
							icon='flag'
							desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra.'
						/>
						<LandingIcon
							icon='globe'
							desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra.'
						/>
						<LandingIcon
							icon='map outline'
							desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra.'
						/>
						<LandingIcon
							icon='balance scale'
							desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra.'
						/>
					</div>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={{ height: '10vh' }}>
				<Grid.Column width={16} textAlign='center' verticalAlign='top'>
					<Icon
						name='angle double down'
						size='huge'
						className={styles.scrollIcon}
						onClick={onScroll}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default LandingScreen
