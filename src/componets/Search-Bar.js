import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar (){
    //pass in props
    //see if employee.name === search input
    return(
    <Form>
     <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="name" placeholder="Employee Name" />
     </Form.Group>
     <Button>Search</Button>
    </Form>
)};

export default SearchBar