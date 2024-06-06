import React, { useState, useEffect } from 'react'
import styles from './team.module.css'
import TeamMember from '@components/teamMember'
import { Transition } from 'semantic-ui-react'
type Props = {}
const Team = (props: Props) => {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setVisible(true)
	}, [])
	return (
		<Transition visible={visible} animation='slide left' duration={500}>
			<div className={styles.memberContainer}>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Yunus Tan Kerestecioglu'
						title='Project Manager'
					/>
					<div className={styles.separatorBig} />
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Yunus Tan Kerestecioglu'
						title='Project Manager'
					/>
				</div>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Yunus Tan Kerestecioglu'
						title='Front-end Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Kaan Güray Şirin'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Kaan Güray Şirin'
						title='AI Engineer'
					/>
				</div>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Kaan Güray Şirin'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Kaan Güray Şirin'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Yunus Tan Kerestecioglu'
						title='AI Engineer'
					/>
				</div>
			</div>
		</Transition>
	)
}

export default Team
