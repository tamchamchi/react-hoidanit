import { Button, Container } from 'react-bootstrap';
import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import ModalAddNewUser from './components/ModalAddNewUser';

function App() {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () =>{
      setIsShowModalAddNew(false)
    }
    return (
        <div className="app-container">
            <Header />
            <Container>
                <div className="my-3 add-new">
                    <span>
                        <h3>List Users:</h3>
                    </span>
                    <Button 
                      variant="success" 
                      className="btn-add-new-user"
                      onClick={() => setIsShowModalAddNew(true)}
                    >
                        Add new user
                    </Button>
                </div>
                <TableUsers />
            </Container>
            <ModalAddNewUser show={isShowModalAddNew} handleClose={handleClose} />
        </div>
    );
}

export default App;
