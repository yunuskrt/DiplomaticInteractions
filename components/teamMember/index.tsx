import React from 'react'
import { Image, Label } from 'semantic-ui-react'
import type Member from 'types/team'
import styles from './teamMember.module.css'

const TeamMember = (member: Member) => {
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
