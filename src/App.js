import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col,  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button } from "shards-react";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
        HELLO
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="2" lg="3">
        </Col>
        <Col sm="12" md="8" lg="6">
          <Card>
            <CardBody>
              Nunc quis nisl ac justo elementum sagittis in quis justo.
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="2" lg="3">
        </Col>
      </Row>
    </Container>
  );
}

export default App;
