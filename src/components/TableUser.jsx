import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fectAllUser } from '../services/UserServices';
const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        let res = await fectAllUser();
        if (res && res.data && res.data.data) {
            setListUsers(res.data.data);
        }
    };
    console.log(listUsers);
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </>
    );
};

export default TableUsers;
