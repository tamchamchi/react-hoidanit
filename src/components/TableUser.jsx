import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fectAllUser } from '../services/UserServices';
import ModalAddNewUser from './ModalAddNewUser';
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
    };

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    };

    useEffect(() => {
        getUser(1);
    }, []);

    const handlePageClick = (e) => {
        getUser(e.selected + 1);
    };

    const getUser = async (page) => {
        let res = await fectAllUser(page);
        if (res && res.data) {
            setTotalPages(res.total_pages);
            setTotalUsers(res.total);
            setListUsers(res.data);
        }
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    <h3>List Users:</h3>
                </span>
                <Button variant="success" className="btn-add-new-user" onClick={() => setIsShowModalAddNew(true)}>
                    Add new user
                </Button>
            </div>

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

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />

            <ModalAddNewUser show={isShowModalAddNew} handleClose={handleClose} handleUpdateTable={handleUpdateTable} />
        </>
    );
};

export default TableUsers;
