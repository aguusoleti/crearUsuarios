// import { useEffect, useState } from "react"; // use state es para poder crear una variable o un estado 
// import {useNavigate} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

export default function UserList() {
  const [usuarios, setUsuarios] = useState([])
  const cargarUsuario = async () => {
    const response = await fetch('http://localhost:4000/')
    const data = await response.json()
    setUsuarios(data)
  }
  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/usuario/${id}`, {
      method: "DELETE",
    })
    setUsuarios(
      usuarios.filter(usuario => usuario.id !== id)

    )
  }
  useEffect(() => {
    cargarUsuario()
  }, [])

  const navigate = useNavigate();
  return (

    <>
      <h1>Usuarios</h1>
      {
        usuarios.map((usuario) => (
          <Card key={usuario.id}>
            <Card.Body>
              <div>
              <Card.Title>Usuario n° {usuario.id}</Card.Title>
              <Card.Text>Nombre : {usuario.nombre}</Card.Text>
              <Card.Text>Apellido : {usuario.apellido}</Card.Text>
              <Card.Text>Email : {usuario.email}</Card.Text>
              <Card.Text>Fecha de naciemiento : {usuario.fechadenacimiento}</Card.Text>
              <Card.Text>Pais : {usuario.pais}</Card.Text>
              <Card.Text>Provincia : {usuario.provinia}</Card.Text>
              </div>
              <div>
              <Button variant="primary" onClick={() => navigate(`/usuario/${usuario.id}/edit`)}>Editar</Button>
              <Button variant="primary" onClick={() => handleDelete(usuario.id)}>Eliminar</Button>
              </div>
            </Card.Body>
          </Card>
        )

        )
      }

    </>

  )
}