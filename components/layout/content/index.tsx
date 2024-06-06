import React, { ReactNode } from 'react'
import styles from './content.module.css'

type Props = {
	children: ReactNode
}

const Content = ({ children }: Props) => {
	return <div className={styles.contentContainer}>{children}</div>
}

export default Content
