
import API from "../API/UserApi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

function ContainerRows (){
    const [firstName, setFirstName] = useState('1');
    const [lastName, setLastName] = useState('2');
    const [email, setEmail] = useState('3');
    const [number, setNumber] = useState('4');

    useEffect(() => {
       loadEmployyees()
    });
    
    function loadEmployyees (){
        API.getRandomEmployees()
        .then(res =>
            console.log(res))

    }
     
    return(
    <>
    <Container>
     <Row>
        <Col>First Name</Col>
        <Col>Last Name</Col>
        <Col>Email</Col>
        <Col>Cell Number</Col>
     </Row>
     <Row>
        <Col>{firstName}</Col>
        <Col>{lastName}</Col>
        <Col>{email}</Col>
        <Col>{number}</Col>
     </Row>
    </Container>
    </>
)};

export default ContainerRows