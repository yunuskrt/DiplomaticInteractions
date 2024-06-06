import LandingScreen from '@components/landingScreen'
import React, { useEffect } from 'react'
import WorldMapScreen from '@components/worldMapScreen'

type Props = {}
const scrollToSection = () => {
	const section = document.getElementById('mapSection')
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' })
	}
}
const Home = (props: Props) => {
	useEffect(() => {
		const handleScroll = () => {
			const mapSection = document.getElementById('mapSection')
			if (mapSection) {
				const mapSectionTop = mapSection.getBoundingClientRect().top
				mapSection.style.opacity = (
					1 -
					mapSectionTop / window.innerHeight
				).toString()
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div>
			<div id='landingSection'>
				<LandingScreen onScroll={scrollToSection} />
			</div>

			<div id='mapSection'>
				<WorldMapScreen />
			</div>
		</div>
	)
}

export default Home
