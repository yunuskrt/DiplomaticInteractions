import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import GlobeNetworkSvg from '@components/globeNetworkSvg'
import LandingIcon from '@components/landingIcon'
import styles from './landingScreen.module.css'

const LandingScreen = ({ onScroll }) => {
	return (
		<Grid>
			<Grid.Row className={styles.headerRow}>
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

			<Grid.Row className={styles.infoRow}>
				<Grid.Column width={16} className={styles.iconsContainer}>
					<div className={styles.iconsWrapper}>
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

			<Grid.Row className={styles.scrolRow}>
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
