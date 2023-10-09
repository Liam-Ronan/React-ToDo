import React from 'react'
import {Container,  Col, Row}  from 'react-bootstrap';
import ToDoList from './components/ToDoList'

const App = () => {
  return (
    <>
        <Container className='mt-5'>
            <Row>
                <Col>
                    <ToDoList />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default App;
