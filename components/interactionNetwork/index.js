'use client'
import React, { useState, useEffect } from 'react'
import Graph from 'react-graph-vis'

const InteractionNetwork = ({ networkData }) => {
	function convertDataToGraph(data) {
		const graph = {
			nodes: [],
			edges: [],
		}

		const allEntities = new Set()
		data.forEach((item) => {
			allEntities.add(item.reporter)
			allEntities.add(item.reported)
		})

		for (const entity of allEntities) {
			graph.nodes.push({
				id: entity,
				label: entity,
				title: entity,
				shape: 'circle',
			})
		}
		data.forEach((item) => {
			const index = graph.edges.findIndex((edge) => {
				return edge.from === item.reporter && edge.to === item.reported
			})
			if (index === -1) {
				graph.edges.push({
					from: item.reporter,
					to: item.reported,
					weight: 1,
				})
			} else {
				graph.edges[index].weight += 1
			}
		})
		return graph
	}
	const [isClient, setIsClient] = useState(false)
	const [graphData, setGraphData] = useState(null)
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
		setGraphData(convertDataToGraph(networkData))
	}, [networkData])
	if (!isClient) {
		return null
	} else if (!networkData) {
		return null
	}
	return <Graph graph={graphData} options={options} />
}
export default InteractionNetwork
