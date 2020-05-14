import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Text, Flex } from 'rebass';

import Balls from '../components/Balls/Balls';
import Action from '../components/Action/Action';

const Manager = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Action/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Balls />
        </Col>
      </Row>
    </Container>
  );
};

export default Manager;
