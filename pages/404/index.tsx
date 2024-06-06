import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
	Icon,
	StatisticValue,
	StatisticLabel,
	Statistic,
} from 'semantic-ui-react'
import styles from './404.module.css'
const NotFound = () => {
	const [countdown, setCountdown] = useState(5)
	const router = useRouter()

	useEffect(() => {
		const timer = setInterval(() => {
			if (countdown > 0) {
				setCountdown((prevCountdown) => prevCountdown - 1)
			} else {
				clearInterval(timer)
				router.push('/')
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [countdown, router])

	return (
		<div className={styles.notFoundContainer}>
			<Icon
				name='hand point right'
				size='massive'
				className={styles.pointIcon}
			/>
			<div className={styles.messageContainer}>
				<h1>Page Not Found</h1>
				<Statistic size='huge'>
					<StatisticValue>{countdown}</StatisticValue>
					<StatisticLabel>
						You will be redirected to the home page in {countdown} seconds.
					</StatisticLabel>
				</Statistic>
			</div>
		</div>
	)
}

export default NotFound
