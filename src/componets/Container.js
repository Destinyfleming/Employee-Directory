
import API from "../API/UserApi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

function ContainerRows (){
    //employee states
    const [employeeOne, setEmployeeOne] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeTwo, setEmployeeTwo] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeThree, setEmployeeThree] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeFour, setEmployeeFour] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeFive, setEmployeeFive] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeSix, setEmployeeSix] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeSeven, setEmployeeSeven] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeEight, setEmployeeEight] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeNine, setEmployeeNine] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })
    const [employeeTen, setEmployeeTen] = useState({
        firstname :'',
        lastname:'',
        email :'',
        number : ''
    })

    

    useEffect(() => {
       loadEmployyees()
    }, []);

    
    function loadEmployyees (){
        API.getRandomEmployees()
        .then(
          (result) => {
              console.log(result)
              setEmployeeOne({
                  firstName:(result.data.results[0].name.first),
                  lastName:(result.data.results[0].name.last),
                  email:(result.data.results[0].email),
                  number:(result.data.results[0].cell)
              })
              setEmployeeTwo({
                firstName:(result.data.results[1].name.first),
                lastName:(result.data.results[1].name.last),
                email:(result.data.results[1].email),
                number:(result.data.results[1].cell)
              })
              setEmployeeThree({
                firstName:(result.data.results[2].name.first),
                lastName:(result.data.results[2].name.last),
                email:(result.data.results[2].email),
                number:(result.data.results[2].cell)
              })
              setEmployeeFour({
                firstName:(result.data.results[3].name.first),
                lastName:(result.data.results[3].name.last),
                email:(result.data.results[3].email),
                number:(result.data.results[3].cell)
              })
              setEmployeeFive({
                firstName:(result.data.results[4].name.first),
                lastName:(result.data.results[4].name.last),
                email:(result.data.results[4].email),
                number:(result.data.results[4].cell)
            })
            setEmployeeSix({
                firstName:(result.data.results[5].name.first),
                lastName:(result.data.results[5].name.last),
                email:(result.data.results[5].email),
                number:(result.data.results[5].cell)
            })
            setEmployeeSeven({
                firstName:(result.data.results[6].name.first),
                lastName:(result.data.results[6].name.last),
                email:(result.data.results[6].email),
                number:(result.data.results[6].cell)
            })
            setEmployeeEight({
                firstName:(result.data.results[7].name.first),
                lastName:(result.data.results[7].name.last),
                email:(result.data.results[7].email),
                number:(result.data.results[7].cell)
            })
            setEmployeeNine({
                firstName:(result.data.results[8].name.first),
                lastName:(result.data.results[8].name.last),
                email:(result.data.results[8].email),
                number:(result.data.results[8].cell)
            })
            setEmployeeTen({
                firstName:(result.data.results[9].name.first),
                lastName:(result.data.results[9].name.last),
                email:(result.data.results[9].email),
                number:(result.data.results[9].cell)
            })
          });
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
        <Col>{employeeOne.firstName}</Col>
        <Col>{employeeOne.lastName}</Col>
        <Col>{employeeOne.email}</Col>
        <Col>{employeeOne.number}</Col>
     </Row>
     <Row>
        <Col>{employeeTwo.firstName}</Col>
        <Col>{employeeTwo.lastName}</Col>
        <Col>{employeeTwo.email}</Col>
        <Col>{employeeTwo.number}</Col>
     </Row>
     <Row>
        <Col>{employeeThree.firstName}</Col>
        <Col>{employeeThree.lastName}</Col>
        <Col>{employeeThree.email}</Col>
        <Col>{employeeThree.number}</Col>
     </Row>
     <Row>
        <Col>{employeeFour.firstName}</Col>
        <Col>{employeeFour.lastName}</Col>
        <Col>{employeeFour.email}</Col>
        <Col>{employeeFour.number}</Col>
     </Row>
     <Row>
        <Col>{employeeFive.firstName}</Col>
        <Col>{employeeFive.lastName}</Col>
        <Col>{employeeFive.email}</Col>
        <Col>{employeeFive.number}</Col>
     </Row>
     <Row>
        <Col>{employeeSix.firstName}</Col>
        <Col>{employeeSix.lastName}</Col>
        <Col>{employeeSix.email}</Col>
        <Col>{employeeSix.number}</Col>
     </Row>
     <Row>
        <Col>{employeeSeven.firstName}</Col>
        <Col>{employeeSeven.lastName}</Col>
        <Col>{employeeSeven.email}</Col>
        <Col>{employeeSeven.number}</Col>
     </Row>
     <Row>
        <Col>{employeeEight.firstName}</Col>
        <Col>{employeeEight.lastName}</Col>
        <Col>{employeeEight.email}</Col>
        <Col>{employeeEight.number}</Col>
     </Row>
     <Row>
        <Col>{employeeNine.firstName}</Col>
        <Col>{employeeNine.lastName}</Col>
        <Col>{employeeNine.email}</Col>
        <Col>{employeeNine.number}</Col>
     </Row>
     <Row>
        <Col>{employeeTen.firstName}</Col>
        <Col>{employeeTen.lastName}</Col>
        <Col>{employeeTen.email}</Col>
        <Col>{employeeTen.number}</Col>
     </Row>
    </Container>
    </>
)};

export default ContainerRows