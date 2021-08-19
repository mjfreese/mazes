import React from 'react'
import GridLayout from "../Layout/GridLayout"
import { createDisplayCell } from '../Layout/CellUtilities'
import { Grid } from '../Common/Grid'
import { createBinaryTree } from './BinaryTree'
import { DistanceGrid } from '../Common/DistanceGrid'

const generateModel = (rows, cols, showDistances) => {
    const model = []
    const grid = showDistances ? new DistanceGrid(rows, cols) : new Grid(rows, cols)
    const binaryTree = createBinaryTree(grid)

    if (showDistances)
    {
        const start = grid.getCell(0, 0)
        const distances = start.distances()
        grid.distances = distances
    }

    for (const cell of binaryTree.eachCell()) {
        model.push(createDisplayCell(cell.column, cell.row, cell.openWalls(), grid.contentsOfCell(cell)))
    }

    return model
}

const BinaryTreePage = ({rows = 4, cols = 4, showDistances = false}) => {
    const model = generateModel(rows, cols, showDistances)

    return (<GridLayout model={model} cols={cols}/>)
}

export default BinaryTreePage