import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
      <NavDropdown title="Usuario" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Agregar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Buscar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Eliminar</NavDropdown.Item>
  
     
      </NavDropdown>
    </Nav>
  );
}

// render(<NavDropdownExample />);