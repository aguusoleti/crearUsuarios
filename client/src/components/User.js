import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function User() {
    return (
        <Form className="forms">
            <Form.Group className="mb-3" controlId="Nombre">
                <Form.Label >Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fecha">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date" placeholder="Fecha de Nacimiento" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Pais">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" placeholder="Pais" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Provincia">
                <Form.Label>Provincia</Form.Label>
                <Form.Control type="text" placeholder="Provincia" />
            </Form.Group>

            <Button variant="primary" type="submit" className="button">
                Enviar
            </Button>
        </Form>
    );
}

export default User;