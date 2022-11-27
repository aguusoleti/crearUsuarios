import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './components/User';
import Container from "react-bootstrap/Container"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from "./components/Navbar";
import UserList from './components/UserList';
export default function App() {
  return (

    <BrowserRouter>
    <NavBar/>
      <Container>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/usuario/new' element={<User />} />
          {/* <Route path='/task/new' element={<TaskForms />} /> */}
          <Route path='/usuario/:id/edit' element={<User />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}