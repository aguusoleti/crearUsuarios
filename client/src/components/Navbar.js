import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate= useNavigate();
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
      <NavDropdown title="Usuario" id="nav-dropdown" className="navbar">
        <NavDropdown.Item onClick={()=>navigate("/usuario/new")}>Agregar</NavDropdown.Item>
        {/* <NavDropdown.Item >Buscar</NavDropdown.Item>
        <NavDropdown.Item >Eliminar</NavDropdown.Item> */}
  
     
      </NavDropdown>
    </Nav>
  );
}

// render(<NavDropdownExample />);