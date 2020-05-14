import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
} from 'reactstrap';
import { Text } from 'rebass';
import styled from 'styled-components';
import { profile } from '../../mocks/profile.json';

const CardContent = styled.div`
  background: #fafafa;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  flex-direction: column;
`;

const Shenlong = styled.img`
  height: 400px;
  position: fixed;
  z-index: 9;
  left: 40%;
  width: auto;
`;

const Action = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => setModal(!modal);

  const invoke = () => {
    !!(profile.balls.length === 7) ? setShow(true) : setModal(true);
  };

  return (
    <>
      {show && (
        <Shenlong src='https://static.wixstatic.com/media/ecfb5e_dbd3be9fe8f14cc2a37e91167d125bc2.png/v1/fill/w_784,h_784,al_c,q_95,usm_0.66_1.00_0.01/ecfb5e_dbd3be9fe8f14cc2a37e91167d125bc2.webp' />
      )}
      <CardContent>
        <Text fontSize='32px'>Invocar shenlong</Text>
        <Button color='warning' onClick={invoke}>
          Invocar
        </Button>
      </CardContent>
      <Modal isOpen={modal} toggle={toggle}>
        <Text>Você não tem todas as esferas para invocar o shenlong</Text>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Voltar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Action;
