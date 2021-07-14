import React from 'react'
import GridLayout from "../Layout/GridLayout"
import { createCell, sides } from '../Layout/CellUtilities'

const generateModel = (cols, rows) => {
    const model = []

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i === cols - 1 && j === 0)
                model.push(createCell(i, j, sides.left | sides.bottom))
            else if (i === cols - 1 && j === rows - 1)
                model.push(createCell(i, j, sides.top | sides.left))
            else if (i === cols - 1)
                model.push(createCell(i, j, sides.top | sides.left | sides.bottom))
            else if (j === 0) {
                const isLeftOpen = i !== 0
                let openSides = sides.right | sides.bottom
                if (isLeftOpen)
                    openSides = openSides | sides.left
                model.push(createCell(i, j, openSides))
            }
            else {
                const rand = Math.floor(Math.random() * 2)
                const isTopOpen = !rand
                const isRightOpen = rand
                const isBottomOpen = j !== rows - 1
                const isLeftOpen = i !== 0
                let openSides = isTopOpen ? sides.top : 0
                if (isRightOpen)
                    openSides = openSides | sides.right
                if (isBottomOpen)
                    openSides = openSides | sides.bottom
                if (isLeftOpen)
                    openSides = openSides | sides.left
                model.push(createCell(i, j, openSides))
            }
        }
    }

    console.log(model)
    return model
}

const BinaryTreePage = () => {
    const square = 12
    const model = generateModel(square, square)

    return (<div><GridLayout model={model} cols={square}/></div>)
}

export default BinaryTreePage