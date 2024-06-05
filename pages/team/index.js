import React, { useState, useEffect } from 'react'
import TeamMember from '@components/teamMember'
import { Transition } from 'semantic-ui-react'
import styles from './team.module.css'
const Team = () => {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setVisible(true)
	}, [])
	return (
		<Transition visible={visible} animation='slide left' duration={500}>
			<div className={styles.memberContainer}>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Nihat Muğurtay'
						title='Project Manager'
					/>
					<div className={styles.separatorBig} />
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Onur Varol'
						title='Project Manager'
					/>
				</div>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Kaan Güray Şirin'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Ayça Demir'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Doğukan Abcde'
						title='AI Engineer'
					/>
				</div>
				<div className={styles.memberRow}>
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Fazlı Göktuğ Yılmaz'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/kaansirin.jpg'
						name='Melis Gemalmaz'
						title='AI Engineer'
					/>
					<div className={styles.separatorSmall} />
					<TeamMember
						imageUrl='/images/yunuskerestecioglu.jpg'
						name='Yunus Tan Kerestecioğlu'
						title='Web Developer'
					/>
				</div>
			</div>
		</Transition>
	)
}

export default Team
