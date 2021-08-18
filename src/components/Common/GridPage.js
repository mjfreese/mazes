import React, { useState } from 'react'
import { Col, FormControl, Row, Tab, Tabs, InputGroup } from 'react-bootstrap'

import BinaryTreePage from '../BinaryTree/BinaryTreePage'
import SidewinderPage from '../Sidewinder/SidewinderPage'

const modelGenerators = [
    { name: 'Binary Tree', page: BinaryTreePage },
    { name: 'Sidewinder', page: SidewinderPage },
]

const GridPage = () => {
    const [numRows, setNumRows] = useState(4)
    const [numCols, setNumCols] = useState(4)

    return (
        <div>
            <Row>
                <Col xs={6}>
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
                <Col xs={6}>
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
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey={modelGenerators[0].name} transition={false}>
                        {
                            modelGenerators.map((gen, index) => (
                                <Tab key={index} eventKey={gen.name} title={gen.name}>
                                    {<gen.page rows={parseInt(numRows)} cols={parseInt(numCols)}/>}
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