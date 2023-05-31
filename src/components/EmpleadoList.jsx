import React from 'react';
import EmpleadoRow from './EmpleadoRow';
import { ListGroup } from 'react-bootstrap';

const EmpleadoList = () => {
    return (
        <ListGroup>
            <EmpleadoRow></EmpleadoRow>
            <EmpleadoRow></EmpleadoRow>
            <EmpleadoRow></EmpleadoRow>
            <EmpleadoRow></EmpleadoRow>

        </ListGroup>
    );
};

export default EmpleadoList;