import React from 'react'
import GridLayout from "../Layout/GridLayout"
import { createDisplayCell } from '../Layout/CellUtilities'
import { Grid } from '../Common/Grid'
import { createBinaryTree } from './BinaryTree'

const generateModel = (rows, cols) => {
    const model = []

    for (const cell of createBinaryTree(new Grid(rows, cols)).eachCell()) {
        model.push(createDisplayCell(cell.column, cell.row, cell.openWalls()))
    }

    return model
}

const BinaryTreePage = ({rows = 4, cols = 4}) => {
    const model = generateModel(rows, cols)

    return (<GridLayout model={model} cols={cols}/>)
}

export default BinaryTreePage