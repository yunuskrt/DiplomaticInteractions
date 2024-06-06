import React, { useState } from 'react'

function ZoomableSVG() {
	const [scale, setScale] = useState(1)
	const [dragging, setDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [startY, setStartY] = useState(0)
	const [offsetX, setOffsetX] = useState(0)
	const [offsetY, setOffsetY] = useState(0)

	const handleZoomIn = () => {
		setScale(scale + 0.1)
	}

	const handleZoomOut = () => {
		setScale(scale - 0.1)
	}

	const handleMouseDown = (e: any) => {
		setDragging(true)
		setStartX(e.clientX)
		setStartY(e.clientY)
	}

	const handleMouseMove = (e: any) => {
		if (dragging) {
			const deltaX = e.clientX - startX
			const deltaY = e.clientY - startY
			setOffsetX(offsetX + deltaX)
			setOffsetY(offsetY + deltaY)
			setStartX(e.clientX)
			setStartY(e.clientY)
		}
	}

	const handleMouseUp = () => {
		setDragging(false)
	}

	return (
		<div>
			<button onClick={handleZoomIn}>Zoom In</button>
			<button onClick={handleZoomOut}>Zoom Out</button>
			<svg
				width='400'
				height='400'
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<g transform={`scale(${scale}) translate(${offsetX}, ${offsetY})`}>
					<rect x='10' y='10' width='100' height='100' fill='blue' />
					<circle cx='200' cy='200' r='50' fill='red' />
				</g>
			</svg>
		</div>
	)
}

export default ZoomableSVG
