import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import { Badge, Col, ListGroupItem, Row } from 'react-bootstrap';

const EmpleadoRow = () => {
    
    return (
        <ListGroupItem >
            <Row className='align-items-end'>
                <Col className='text-center'>
            <EmpleadoAvatar></EmpleadoAvatar>

                </Col>
                <Col md="9" xs>           
                <h3>Nahuel Rodriguez</h3>
                <p>Cargo o puesto <Badge bg='info'>Seccion</Badge></p>            
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default EmpleadoRow;