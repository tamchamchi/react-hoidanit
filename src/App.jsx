import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUser';

function App() {
    return (
        <div className="app-container">
            <Header />
            <Container>
                <TableUsers />
            </Container>
        </div>
    );
}

export default App;
