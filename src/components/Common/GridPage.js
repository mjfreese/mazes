import React, { useState } from 'react'
import { Col, FormControl, Row, Tab, Tabs, InputGroup, FormCheck } from 'react-bootstrap'

import BinaryTreePage from '../BinaryTree/BinaryTreePage'
import SidewinderPage from '../Sidewinder/SidewinderPage'

const modelGenerators = [
    { name: 'Binary Tree', page: BinaryTreePage },
    { name: 'Sidewinder', page: SidewinderPage },
]

const GridPage = () => {
    const [numRows, setNumRows] = useState(4)
    const [numCols, setNumCols] = useState(4)
    const [showDistances, setShowDistances] = useState(false)
    const [entranceRow, setEntranceRow] = useState(0)
    const [entranceCol, setEntranceCol] = useState(0)
    const [exitRow, setExitRow] = useState(3)
    const [exitCol, setExitCol] = useState(3)

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <InputGroup>
                        <InputGroup.Text>Rows</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={numRows}
                            onChange={(ev) => setNumRows(ev.target.value)} 
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
                            onChange={(ev) => setNumCols(ev.target.value)} 
                            max={20}
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <InputGroup>
                        <InputGroup.Text>Show Solution</InputGroup.Text>
                        <FormCheck
                            type='switch'
                            onChange={() => {
                                setShowDistances(old => !old)
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Entrance (row, col)</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={entranceRow} 
                            onChange={(ev) => setEntranceRow(ev.target.value)} 
                            max={20}
                        />
                        <FormControl 
                            type='number' 
                            value={entranceCol} 
                            onChange={(ev) => setEntranceCol(ev.target.value)} 
                            max={20}
                        />
                    </InputGroup>
                </Col>
                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Exit (row, col)</InputGroup.Text>
                        <FormControl 
                            type='number' 
                            value={exitRow} 
                            onChange={(ev) => setExitRow(ev.target.value)} 
                            max={20}
                        />
                        <FormControl 
                            type='number' 
                            value={exitCol} 
                            onChange={(ev) => setExitCol(ev.target.value)} 
                            max={20}
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
                                {
                                    <gen.page 
                                        rows={parseInt(numRows)} 
                                        cols={parseInt(numCols)} 
                                        showDistances={showDistances}
                                        entrance={[entranceRow, entranceCol]}
                                        exit={[exitRow, exitCol]}
                                    />
                                }
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