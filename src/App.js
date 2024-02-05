import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 

function CalcularSueldo() {
  const [nombre, setNombre] = useState('');
  const [horasTrabajadas, setHorasTrabajadas] = useState(0);
  const [valorHora, setValorHora] = useState(0);
  const [totalSueldo, setTotalSueldo] = useState(0);

  const calcularSueldo = () => {
    if (isNaN(horasTrabajadas) || isNaN(valorHora) || horasTrabajadas <= 0 || valorHora < 0) {
      alert('Por favor, ingrese valores válidos para horas trabajadas y valor por hora.');
      return;
    }

    const sueldo = horasTrabajadas * valorHora;
    setTotalSueldo(sueldo);
  };

  return (
    <div className="container">
      <h2>Calcular Sueldo</h2>
      <br></br>
      <div className="row">
        <div className="col-md-6">
          <form className='formulario'>
            <div className='form-group'>
              <label><i className="fas fa-info-circle tooltip-icon" title="Ingrese su nombre."></i>  Nombre:<span> *</span></label>
              <input className='form-control' type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>
            <br></br>
            <div className='form-group'>
              <label><i className="fas fa-info-circle tooltip-icon" title="Ingrese el número de horas trabajadas. Mínimo tres dígitos"></i>  Horas trabajadas: <span> *</span></label>
              <input type="number" className='form-control' onChange={(e) => setHorasTrabajadas(e.target.value)} />
            </div>
            <br></br>
            <div className='form-group'>
              <label><i className="fas fa-info-circle tooltip-icon" title="Ingrese el valor estimado por hora. Mínimo "></i>  Valor por hora: <span> *</span></label>
              <input type="number" className='form-control' onChange={(e) => setValorHora(e.target.value)} />
            </div>
            <div className='botones'>
              <button className='btn btn-primary' type='button' onClick={calcularSueldo}>Calcular sueldo</button>
              <button className='btn btn-danger' type='reset'>Reintentar</button>
            </div>
          </form>
          <br></br>
          {totalSueldo > 0 && (
        <div className='form-group'>
          <label>{nombre}, el valor a pagar de su sueldo corresponde a: </label>
          <br></br>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input id='resultado' type='text' className='form-control' readOnly value={totalSueldo} />
          </div>
        </div>
      )}
        </div>
        <div className="col-md-6 up">
          <div className="alert alert-secondary" role="alert">
            Por favor, ingresa tus datos para calcular el sueldo. 
          </div>
          <img src="https://www.buk.mx/hubfs/imagen%202@1.5x.png" alt="Información adicional" className="img-fluid"/>
        </div>
      </div>
    </div>  
  );
}

export default CalcularSueldo;
