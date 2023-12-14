import './App.css';
import logo from './imagenes/logo.png';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';




function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = resultado => {
    if (input) {
      setInput(evaluate(input))
    }
    else {
      alert("Error ingresa valores para los cálculos")
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo-imagen' src={logo} alt='Logo de la página' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manageInput={agregarInput}>1</Boton>
          <Boton manageInput={agregarInput}>2</Boton>
          <Boton manageInput={agregarInput}>3</Boton>
          <Boton manageInput={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manageInput={agregarInput}>4</Boton>
          <Boton manageInput={agregarInput}>5</Boton>
          <Boton manageInput={agregarInput}>6</Boton>
          <Boton manageInput={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manageInput={agregarInput}>7</Boton>
          <Boton manageInput={agregarInput}>8</Boton>
          <Boton manageInput={agregarInput}>9</Boton>
          <Boton manageInput={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manageInput={calcularResultado}>=</Boton>
          <Boton manageInput={agregarInput}>0</Boton>
          <Boton manageInput={agregarInput}>.</Boton>
          <Boton manageInput={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manageClear={() => setInput('')}>Clear</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
