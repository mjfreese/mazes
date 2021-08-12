import React from 'react'
import GridLayout from "../Layout/GridLayout"
import { createDisplayCell } from '../Layout/CellUtilities'
import { Grid } from '../Common/Grid'
import { createBinaryTree } from './BinaryTree'

const generateModel = (cols, rows) => {
    const model = []

    for (const cell of createBinaryTree(new Grid(cols, rows)).eachCell()) {
        model.push(createDisplayCell(cell.column, cell.row, cell.openWalls()))
    }

    return model
}

const BinaryTreePage = () => {
    const square = 12
    const model = generateModel(square, square)

    return (<GridLayout model={model} cols={square}/>)
}

export default BinaryTreePage