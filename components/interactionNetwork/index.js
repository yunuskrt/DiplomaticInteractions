'use client'
import React, { useState, useEffect } from 'react'
import Graph from 'react-graph-vis'

const InteractionNetwork = ({ graphData }) => {
	const [isClient, setIsClient] = useState(false)
	const options = {
		physics: {
			enabled: false,
		},
		interaction: {
			navigationButtons: true,
			zoomView: false,
		},
		nodes: {
			borderWidth: 2,
			size: 50,
			color: {
				border: '#222222',
				background: '#666666',
			},
			font: { color: '#000000' },
		},
		edges: {
			color: '#000000',
		},
		shadow: true,
		smooth: true,
		height: '550px',
	}
	useEffect(() => {
		setIsClient(true)
	}, [])
	if (!isClient) {
		return null
	} else if (!graphData) {
		return null
	}
	return <Graph graph={graphData} options={options} />
}
export default InteractionNetwork
