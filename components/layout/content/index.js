import React, { ReactNode } from 'react'
import styles from './content.module.css'

const Content = ({ children }) => {
	return <div className={styles.contentContainer}>{children}</div>
}

export default Content
