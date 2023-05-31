import React from 'react';
import EmpleadoRow from './EmpleadoRow';
import { ListGroup } from 'react-bootstrap';

const EmpleadoList = () => {
    let empleados = [
        { id: 1, nombreCompleto: "Laya Dueñas", titulo: "CEO", departamento: "Business", pic: "https://cdn-icons-png.flaticon.com/128/3220/3220315.png" },
        { id: 2, nombreCompleto: "Astryd Vallés", titulo: "CMO", departamento: "Marketing", pic: "https://cdn-icons-png.flaticon.com/128/3220/3220358.png"},
        { id: 3, nombreCompleto: "Shantell Meza", titulo: "CFO", departamento: "Business", pic: "https://cdn-icons-png.flaticon.com/128/3220/3220400.png" },
        { id: 4, nombreCompleto: "Sergio Ocampo", titulo: "CTO", departamento: "Engineering", pic: "https://cdn-icons-png.flaticon.com/128/265/265674.png" }, ]
    

    
    return (
        <ListGroup>
          {empleados.map(empleado => <EmpleadoRow key ={empleado.id} nombreCompleto ={empleado.nombreCompleto} titulo ={empleado.titulo} departamento={empleado.departamento} pic={empleado.pic}></EmpleadoRow> )} 
        </ListGroup>
    );
};

export default EmpleadoList;