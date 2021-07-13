import React from 'react'
import GridLayout from "../Layout/GridLayout"

const generateModel = (cols, rows) => {
    const model = []

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i === cols - 1 && j === 0)
                model.push({x: i, y: j, borderWidth: '1px 1px 0 0'})
            else if (i === cols - 1 && j === rows - 1)
                model.push({x: i, y: j, borderWidth: '0 1px 1px 0'})
            else if (i === cols - 1)
                model.push({x: i, y: j, borderWidth: '0 1px 0 0'})
            else if (j === 0)
                model.push({x: i, y: j, borderWidth: `1px 0 0 ${i === 0 ? 1 : 0}px`})
            else {
                const rand = Math.floor(Math.random() * 2)
                model.push({x: i, y: j, borderWidth: `${rand}px ${rand === 0 ? 1 : 0}px ${j === rows - 1 ? 1 : 0}px ${i === 0 ? 1 : 0}px`, openSide: rand})
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