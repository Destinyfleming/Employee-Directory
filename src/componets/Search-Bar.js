import React from "react";
import Form from 'react-bootstrap/Form';

function SearchBar (){
    //pass in props
    //see if employee.name === search input
    return(
    <Form>
     <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Employee name</Form.Label>
        <Form.Control type="name" placeholder="Employee Name" />
     </Form.Group>
    </Form>
)};

export default SearchBar