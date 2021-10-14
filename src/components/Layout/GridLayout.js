import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import { createDisplayCell } from './CellUtilities'

const ReactGridLayout = WidthProvider(RGL)

const generateLayout = (model) => {
    return model.map((cell, index) => ({x: cell.x, y: cell.y, w: 1, h: 1, i: `${index}`}))
}

const generateDom = (model) => {
    return model.map((cell, index) => (
        <div
            key={index} 
            style={{borderStyle: 'solid', borderColor: 'black', borderWidth: cell.borderWidth, textAlign:'center', background: cell.background, color: cell.textColor}}
        >
            {cell.contents}
        </div>
    ))
}

const onLayoutChange = (layout) => {
    
}

const getSolution = (showSolution, showLongestPath, showTexture, enter, exit, grid) => {
    if (showSolution)
    {
        const start = grid.getCell(...enter)

        if (!start)
            return

        const distances = start.distances()
        grid.distances = distances.pathTo(grid.getCell(...exit))
    }

    else if (showLongestPath)
    {
        const start = grid.getCell(0, 0)

        if (!start)
            return

        const distances = start.distances()

        const [newStart, /*UNUSED*/] = distances.max()
        const newDistances = newStart.distances()

        const [goal, /*UNUSED*/] = newDistances.max()
        grid.distances = newDistances.pathTo(goal)
    }

    else if (showTexture) {
        const start = grid.getCell(...enter)

        if (!start)
            return

        grid.distances = start.distances()
        grid.colorCells()
    }
}

const createModel = (showSolution, showLongestPath, showTexture, enter, exit, grid) => {
    if (showSolution || showLongestPath || showTexture) {
        getSolution(showSolution, showLongestPath, showTexture, enter, exit, grid)
    }

    const model = []
    for (const cell of grid.eachCell()) {
        model.push(createDisplayCell(
            cell.column,
            cell.row, 
            cell.openWalls(), 
            grid.contentsOfCell(cell),
            cell.background,
            cell.textColor))
    }
    return model
}

const GridLayout = ({grid, showSolution, showLongestPath, showTexture, enter, exit, cols = 4}) => {
    const model = createModel(showSolution, showLongestPath, showTexture, enter, exit, grid)

    return (
        <div style={{width: '500px'}}>
            <ReactGridLayout
                layout={generateLayout(model)}
                onLayoutChange={onLayoutChange}
                className='layout'
                isDraggable={false}
                isResizable={false}
                cols={cols || 0}
                margin={[0,0]}
                rowHeight={500 / cols}
            >
                {generateDom(model)}
            </ReactGridLayout>
        </div>
    )
}

export default GridLayout
