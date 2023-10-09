import React from 'react'
import  {Card, Button, ListGroup} from 'react-bootstrap';
import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    let initialList = [
        {id: 1, text: "clean the office", done: true},
        {id: 2, text: "Buy Milk", done: false},
        {id: 3, text: "create app", done: false},
        {id: 4, text: "drink water", done: false},
        {id: 5, text: "build website", done: false},
        {id: 6, text: "get cat", done: false},
    ];

  const [list, setList] = useState(initialList);
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  }

  let toDoItems = list.map((item) => {
    return <ToDoItem key={item.id} todo={item}/>
  })


  return (
    <>
        <Card className='bg-dark bg-gradient rounded-5'>
            <Card.Header className='display-5 fw-bolder text-light p-4'>To-Do List</Card.Header>
            <span className="square border border-light"></span>
                <Card.Body className='text-light fw-normal'>
                    <ListGroup>
                        {toDoItems}
                    </ListGroup>
                </Card.Body>
            <span className="square border border-light"></span>
                <Card.Footer className='d-flex justify-content-center p-4'>
                    <input className='rounded-3 w-50' type='text' onChange={handleTextInput} value={textInput}/>
                    <Button variant="primary" className="mx-2">Add</Button>                   
                </Card.Footer>
        </Card>
    </>
  );
};

export default ToDoList;
