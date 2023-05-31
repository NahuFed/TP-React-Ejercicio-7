import React from 'react';
import { Image } from 'react-bootstrap';

const EmpleadoAvatar = ({pic}) => {
    return (
        <Image src= {pic} />                    
    );
};

export default EmpleadoAvatar;