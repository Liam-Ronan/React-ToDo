import React from 'react'
import ListGroup  from 'react-bootstrap/ListGroup'

const ToDoItem = (props) => {
  return (
    <>
        <ListGroup.Item>{props.todo.text}</ListGroup.Item>
    </>
  );
};

export default ToDoItem;
