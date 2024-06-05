import React from 'react'
import { Icon, SemanticICONS } from 'semantic-ui-react'
import styles from './landingIcon.module.css'

const LandingIcon = ({ icon, desc }) => {
	return (
		<div className={styles.landingCard}>
			<Icon name={icon} size='huge' />
			<div className={styles.description}>{desc}</div>
		</div>
	)
}

export default LandingIcon
