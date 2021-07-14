import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

const ReactGridLayout = WidthProvider(RGL)

const defaultModel = [{x: 0, y: 0, borderWidth: '1px'}, {x: 1, y: 0, borderWidth: '1px'}, {x: 12, y: 0, borderWidth: '1px'}]

const generateLayout = (model) => {
    return model.map((cell, index) => ({x: cell.x, y: cell.y, w: 1, h: 1, i: `${index}`}))
}

const generateDom = (model) => {
    return model.map((cell, index) => (
        <div key={index} style={{borderStyle: 'solid', borderColor: 'black', borderWidth: cell.borderWidth, textAlign:'center'}}>
        </div>
    ))
}

const onLayoutChange = (layout) => {
    
}

const GridLayout = ({model, cols = 12}) => {
    return (
        <ReactGridLayout
            layout={generateLayout(model ?? defaultModel)}
            onLayoutChange={onLayoutChange}
            className='layout'
            isDraggable={false}
            isResizable={false}
            cols={cols}
        >
        {generateDom(model ?? defaultModel)}
        </ReactGridLayout>
    )
}

export default GridLayout