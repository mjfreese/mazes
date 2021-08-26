import React, { useState } from 'react'
import { Col, FormControl, Row, Tab, Tabs, InputGroup, FormCheck, Form } from 'react-bootstrap'

import { createBinaryTree } from '../BinaryTree/BinaryTree'
import GridLayout from '../Layout/GridLayout'
import { createSidewinder } from '../Sidewinder/Sidewinder'
import { DistanceGrid } from './DistanceGrid'

const modelGenerators = [
    { name: 'Binary Tree', generator: createBinaryTree },
    { name: 'Sidewinder', generator: createSidewinder },
]

const generateModel = (rows, cols, modelGenerator) => {
    const grid = new DistanceGrid(rows, cols)
    return modelGenerator(grid)
}

const getNewTargetCellCoord = (row, col) => {
    console.log(row, col)
    return [isNaN(row) ? 0 : parseInt(row), isNaN(col) ? 0 : parseInt(col)]
}

const GridPage = () => {
    const [numRows, setNumRows] = useState(4)
    const [numCols, setNumCols] = useState(4)
    const [showSolution, setShowSolution] = useState(false)
    const [entrance, setEntrance] = useState([0,0])
    const [exit, setExit] = useState([3, 3])
    const [showLongestPath, setShowLongestPath] = useState(false)

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <InputGroup>
                        <InputGroup.Text>Rows</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={numRows}
                            onChange={(ev) => setNumRows(parseInt(ev.target.value))} 
                            max={20}
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <InputGroup>
                        <InputGroup.Text>Columns</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={numCols} 
                            onChange={(ev) => setNumCols(parseInt(ev.target.value))} 
                            max={20}
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <Form style={{marginTop:'7px', textAlign:'center'}}>
                        <FormCheck
                            inline
                            type='radio'
                            label='Show Solution'
                            name='slnGroup'
                            checked={showSolution}
                            onChange={(ev) => {
                                setShowSolution(true)
                                setShowLongestPath(false)
                            }}
                        />
                        <FormCheck
                            inline
                            type='radio'
                            label='Show Longest Path'
                            name='slnGroup'
                            checked={showLongestPath}
                            onChange={(ev) => {
                                setShowSolution(false)
                                setShowLongestPath(true)
                            }}
                        />
                        <FormCheck
                            inline
                            type='radio'
                            label='None'
                            name='slnGroup'
                            checked={!showLongestPath && !showSolution}
                            onChange={(ev) => {
                                setShowLongestPath(false)
                                setShowSolution(false)
                            }}
                        />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Entrance (row, col)</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={entrance[0]} 
                            onChange={(ev) => setEntrance(old => getNewTargetCellCoord(ev.target.value, old[1]))} 
                            min={0}
                            max={numRows - 1}
                        />
                        <FormControl 
                            type='number' 
                            value={entrance[1]} 
                            onChange={(ev) => setEntrance(old => getNewTargetCellCoord(old[0], ev.target.value))}
                            min={0}
                            max={numCols - 1}
                        />
                    </InputGroup>
                </Col>
                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Exit (row, col)</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={exit[0]} 
                            onChange={(ev) => setExit(old => getNewTargetCellCoord(ev.target.value, old[1]))}
                            min={0}
                            max={numRows - 1}
                        />
                        <FormControl 
                            type='number' 
                            value={exit[1]} 
                            onChange={(ev) => setExit(old => getNewTargetCellCoord(old[0], ev.target.value))}
                            min={0}
                            max={numCols - 1}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey={modelGenerators[0].name} transition={false}>
                        {
                            modelGenerators.map((gen, index) => (
                                <Tab key={index} eventKey={gen.name} title={gen.name}>
                                    <center>
                                    {
                                        <GridLayout
                                            grid={generateModel(
                                                numRows, 
                                                numCols,
                                                gen.generator)}
                                            enter={entrance}
                                            exit={exit}
                                            showLongestPath={showLongestPath}
                                            showSolution={showSolution}
                                            cols={numCols}
                                        />
                                    }
                                    </center>
                                </Tab>
                            ))
                        }
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default GridPage