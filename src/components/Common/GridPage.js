import React, { useState } from 'react'
import GridLayout from "../Layout/GridLayout"
import { createDisplayCell } from '../Layout/CellUtilities'
import { Grid } from '../Common/Grid'
import { createBinaryTree } from '../BinaryTree/BinaryTree'
import { createSidewinder } from '../Sidewinder/Sidewinder'

const generateModel = (cols, rows, modelGenerator) => {
    const model = []

    for (const cell of modelGenerator(new Grid(cols, rows)).eachCell()) {
        model.push(createDisplayCell(cell.column, cell.row, cell.openWalls()))
    }

    return model
}

const modelGenerators = [
    { name: 'Binary Tree', generator: createBinaryTree },
    { name: 'Sidewinder', generator: createSidewinder }
]

const GridPage = () => {
    const [modelGenerator, setGenerator] = useState(() => {})
    const [numRows, setNumRows] = useState(4)
    const [numCols, setNumCols] = useState(4)

    return (
        <div>
            <select onChange={(ev) => {
                console.log(ev.target.value)
                setGenerator(ev.target.value.generator)
            }}>
            {
                modelGenerators.map((gen, index) => (
                    <option key={index} value={gen}>{gen.name}</option>)
                )
            }
            </select>
            <input type='number' value={numRows} onChange={(ev) => setNumRows(ev.target.value)} />
            <input type='number' value={numCols} onChange={(ev) => setNumCols(ev.target.value)} />
            <GridLayout model={generateModel(numRows, numCols, modelGenerator)} cols={numCols}/>
        </div>
    )
}

export default GridPage