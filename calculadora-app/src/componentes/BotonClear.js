import React from 'react';
import '../stylesheet/BotonClear.css'

const BotonClear = (props) => (
    <div
        className='boton-clear'
        onClick={props.manageClear}>
        {props.children}
    </div>
);

export default BotonClear;