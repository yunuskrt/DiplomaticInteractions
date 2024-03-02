import React from 'react'
import styles from './teamMember.module.css'

import { Image, Label } from 'semantic-ui-react'

type Props = {
	imageUrl: string
	name: string
	title: string
}

const TeamMember = (props: Props) => {
	return (
		<div className={styles.memberContainer}>
			<Image src={props.imageUrl} size='small' circular />
			<div className={styles.memberName}>{props.name}</div>
			<Label color='blue' size='large'>
				{props.title}
			</Label>
		</div>
	)
}

export default TeamMember
