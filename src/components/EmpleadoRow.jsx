import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import { Badge, Col, ListGroupItem, Row } from 'react-bootstrap';

const EmpleadoRow = ({titulo,nombreCompleto,departamento,pic}) => {
    
    return (
        <ListGroupItem >
            <Row className='align-items-end'>
                <Col className='text-center'>
            <EmpleadoAvatar pic={pic}></EmpleadoAvatar>

                </Col>
                <Col md="9" xs>           
                <h3>{nombreCompleto}</h3>
                <p>{titulo} <Badge bg='info'>{departamento}</Badge></p>            
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default EmpleadoRow;