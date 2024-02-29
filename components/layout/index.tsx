import React, { ReactNode, useState } from 'react'
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'
import Content from '@components/layout/content'
import {
	Menu,
	MenuItem,
	SidebarPusher,
	SidebarPushable,
	Icon,
	Sidebar,
} from 'semantic-ui-react'

type Props = {
	app: ReactNode
}

const Layout = ({ app }: Props) => {
	const [visible, setVisible] = useState(false)
	const toggleSidebar = () => setVisible(!visible)
	return (
		<SidebarPushable>
			<Sidebar
				as={Menu}
				animation='overlay'
				icon='labeled'
				inverted
				onHide={() => setVisible(false)}
				vertical
				visible={visible}
				width='wide'
			>
				<MenuItem as='a' href='/'>
					<Icon name='home' />
					Home
				</MenuItem>
				<MenuItem as='a' href='/interaction'>
					<Icon name='world' />
					Country Interaction
				</MenuItem>
				<MenuItem as='a' href='/team'>
					<Icon name='users' />
					Our Team
				</MenuItem>
			</Sidebar>

			<SidebarPusher>
				<Header toggleSidebar={toggleSidebar} />
				<Content>{app}</Content>
				<Footer />
			</SidebarPusher>
		</SidebarPushable>
	)
}

export default Layout
