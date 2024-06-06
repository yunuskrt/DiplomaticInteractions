import React from 'react'
import { Icon, SemanticICONS } from 'semantic-ui-react'
import styles from './landingIcon.module.css'
type Props = {
	icon: string
	desc: string
}
const LandingIcon = ({ icon, desc }: Props) => {
	return (
		<div className={styles.landingCard}>
			<Icon name={icon as SemanticICONS} size='huge' />
			<div className={styles.description}>{desc}</div>
		</div>
	)
}

export default LandingIcon
