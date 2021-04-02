
import API from "../API/UserApi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

function ContainerRows (){
    const [user, setUser] = useState('');

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
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
     </Row>
     <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
     </Row>
    </Container>
    </>
)};

export default ContainerRows