import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row ,Table} from "react-bootstrap";

 
import {nameCox} from "./Curd/CreateCox";




export default function Kood()
{
  const abc = React.useContext(nameCox)
    return(
        <>

        <Container fluid className="text-white">

        <Row>
            <Col className="bg-primary p-5">
            

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
            </Col>

            <Col className="bg-secondary p-5">
            
            <h1>  {abc.data}</h1>
            
            </Col>
        </Row>

        </Container>


        </>
    )
}