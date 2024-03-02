import React from 'react'
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'

type Props = {}
const Footer = (props: Props) => {
	return (
		<Segment vertical inverted>
			<Container textAlign='center'>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={8}>
							<Header
								inverted
								as='h4'
								content='© 2024 Tubitak Sabanci University'
							/>
						</Grid.Column>
						<Grid.Column width={8}>
							<Icon name='facebook' inverted link />
							<Icon name='twitter' inverted link />
							<Icon name='instagram' inverted link />
							<Icon name='linkedin' inverted link />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	)
}

export default Footer
