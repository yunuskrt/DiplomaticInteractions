import React from 'react'
import { Image, Label } from 'semantic-ui-react'
import styles from './teamMember.module.css'

const TeamMember = (member) => {
	return (
		<div className={styles.memberContainer}>
			<Image src={member.imageUrl} size='small' circular />
			<div className={styles.memberName}>{member.name}</div>
			<Label color='blue' size='large'>
				{member.title}
			</Label>
		</div>
	)
}

export default TeamMember
