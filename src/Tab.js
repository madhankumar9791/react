import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Tab()
{

return(
  <>
  <Container fluid className=" p-5 text-center">
      <Row xs={2} md={4} lg={6}>
        <Col className="bg-primary p-5">1 of 2</Col>
        <Col className="bg-info p-5" >2 of 2</Col>
        <Col className="bg-success p-5">3 of 3</Col>
        <Col className="bg-secondary p-5">3 of 3</Col>
        <Col className="bg-info p-5" >2 of 2</Col>
        <Col className="bg-success p-5">3 of 3</Col>
      </Row>

 
       
    </Container>
  </>
)


}