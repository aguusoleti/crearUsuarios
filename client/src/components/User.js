import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';

export default function User() {
    const [usuario, setUsuarios] = useState({
        nombre: "",
        apellido: "",
        email: "",
        fechaDeNacimiento: "",
        pais: "",
        provinia: ""
    })
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false)

    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editing) {
            const response = await fetch(`http://localhost:4000/usuario/${params.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify(usuario),
            });
            const data = await response.json()
        } else {
            const res = await fetch(`http://localhost:4000/usuario`, {
                method: 'POST',
                body: JSON.stringify(usuario),
                headers: { "Content-Type": "application/json" },

            })
        }
        navigate('/')
    }
    const handleCharge = (e) =>
        setUsuarios({ ...usuario,[e.target.name]: e.target.value });

    const loadUsuarios = async (id) => {
        const res = await fetch(`http://localhost:4000/usuario/${id}`)
        const data = await res.json();
        setUsuarios({ nombre: data.nombre, apellido: data.apellido, fechaDeNacimiento: data.fechaDeNacimiento, email: data.email, pais: data.pais, provinia: data.provinia })
        setEditing(true)
    }
    useEffect(() => {
        if (params.id)
            loadUsuarios(params.id);
    }, [params.id])

    return (
        <Form className="forms">
            <Form>{editing ? "Modificar Usuario" : "Agregar Usuario"}</Form>
            <form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="Nombre">
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={usuario.nombre} onChange={handleCharge} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" value={usuario.apellido} name="apellido"onChange={handleCharge} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de Nacimiento" value={usuario.fechaDeNacimiento} onChange={handleCharge} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="email" value={usuario.email} onChange={handleCharge} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Pais">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control type="text" placeholder="Pais" value={usuario.pais} onChange={handleCharge} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Provincia">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control type="text" placeholder="Provincia" value={usuario.provinia} onChange={handleCharge} />
                </Form.Group>

                <Button variant="primary" type="submit" className="button" disabled={!usuario.nombre || !usuario.apellido || !usuario.email || !usuario.fechaDeNacimiento || !usuario.provinia || !usuario.pais}>
                    guardar
                </Button>
            </form>
        </Form>
    );
}