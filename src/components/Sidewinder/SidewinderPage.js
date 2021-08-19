import React from 'react'
import GridLayout from "../Layout/GridLayout"
import { createDisplayCell } from '../Layout/CellUtilities'
import { Grid } from '../Common/Grid'
import { createSidewinder } from './Sidewinder'
import { DistanceGrid } from '../Common/DistanceGrid'

const generateModel = (rows, cols, showDistances, enter, exit) => {
    const model = []

    const grid = showDistances ? new DistanceGrid(rows, cols) : new Grid(rows, cols)
    const sidewinder = createSidewinder(grid)

    if (showDistances)
    {
        const start = grid.getCell(...enter)
        const distances = start.distances()
        grid.distances = distances.pathTo(grid.getCell(...exit))
    }

    for (const cell of sidewinder.eachCell()) {
        model.push(createDisplayCell(
            cell.column, 
            cell.row, 
            cell.openWalls(), 
            grid.contentsOfCell(cell),
            cell.background))
    }

    return model
}

const SidewinderPage = ({rows = 4, cols = 4, showDistances = false, enter = [0, 0], exit = [3, 3]}) => {
    const model = generateModel(rows, cols, showDistances, enter, exit)

    return (<GridLayout model={model} cols={cols}/>)
}

export default SidewinderPage