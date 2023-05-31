import { Container } from 'react-bootstrap';
import './App.css'
import EmpleadoList from './components/EmpleadoList'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    
    <Container className='mt-5'> 
    <EmpleadoList></EmpleadoList>  
    </Container>
  )
}

export default App
