import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../Redux/actions/actionLogin';

const Prueba = () => {

  const dispatch = useDispatch();
  const navigate  = useNavigate();
  //cerrar sesion
  const handleLogout = () => {
    dispatch(logoutAsync())
    navigate("/login")
}

  return (
    <div>
      <div>prueba</div>
      <button onClick={() => handleLogout()}>LogOut</button>
    </div>
  )
}

export default Prueba