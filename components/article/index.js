import React from 'react'
import {
	CardMeta,
	CardHeader,
	Label,
	CardDescription,
	CardContent,
	Card,
	Icon,
} from 'semantic-ui-react'
import styles from './article.module.css'

const Article = ({ article }) => (
	<Card className={styles.articleCard}>
		<CardContent className={styles.articleContent}>
			<CardHeader>{article.title}</CardHeader>
			<CardMeta>
				Written by {article.authors.join(', ')} on{' '}
				<span className={styles.articleDate}>{article.date}</span>
			</CardMeta>
			<CardMeta>
				<Label color='blue'>{article.category}</Label>
			</CardMeta>

			<CardDescription>{article.description}</CardDescription>
		</CardContent>
		<CardContent extra>
			<div className={styles.extraContent}>
				<span>Related Links:</span>
				{article.links.map((link, index) => (
					<div>
						<Icon name='linkify' />

						<a key={index} href={link.link} target='_blank' rel='noreferrer'>
							{link.name}
						</a>
					</div>
				))}
			</div>
		</CardContent>
	</Card>
)

export default Article
