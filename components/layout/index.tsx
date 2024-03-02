import React, { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
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
	const router = useRouter()
	const isActiveItem = (href: string) => router.pathname.split('/')[1] == href

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
				style={{ backgroundColor: '#031219' }}
			>
				<MenuItem as='a' href='/' active={isActiveItem('')}>
					<Icon name='home' />
					Home
				</MenuItem>
				<MenuItem
					as='a'
					href='/interaction'
					active={isActiveItem('interaction')}
				>
					<Icon name='world' />
					Country Interaction
				</MenuItem>
				<MenuItem as='a' href='/team' active={isActiveItem('team')}>
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
