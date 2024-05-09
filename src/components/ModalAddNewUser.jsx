import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalAddNewUser = (props) => {
    const { handleClose, show } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const handleSaveUser = () => {
     console.log("check>>>>", name, job)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        value={name} 
                                        onChange={e => setName(e.target.value)}
                                        type="text" 
                                        placeholder="Enter name" 
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Job</Form.Label>
                                    <Form.Control 
                                        value={job} 
                                        onChange={e => setJob(e.target.value)}
                                        type="text" 
                                        placeholder="Enter Job" 
                                   />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalAddNewUser;
