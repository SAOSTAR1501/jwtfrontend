import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers, deleteUser } from "../../services/userService";
import { toast } from "react-toastify";
import ModalDelete from "./ModalDelete";
import ModalUser from "./ModalUser";
import "./Users.scss";

const Users = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  //modal delete
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataModal, setDataModal] = useState({});

  //modal user
  const [isShowModalUser, setIsShowModalUser] = useState(false);
  const [actionModalUser, setActionModalUser] = useState("CREATE");
  const [dataModalUser, setDataModalUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async (page) => {
    let response = await fetchAllUsers(currentPage, currentLimit);

    if (response && response.EC === 0) {
      setTotalPages(response.DT.totalPages);
      setListUsers(response.DT.users);
    }
  };

  let navigate = useNavigate();
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      navigate("/login");
    }
  }, []);

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1);
  };

  const handleDeleteUser = async (user) => {
    setIsShowModalDelete(true);
    setDataModal(user);
    // let response = await deleteUser(user);
    // if (response && response.EC === 0) {
    //   toast.success(response.EM);
    //   await fetchUsers();
    // } else {
    //   toast.error(response.EM);
    // }
  };

  const confirmDeleteUser = async () => {
    let response = await deleteUser(dataModal);
    if (response && response.EC === 0) {
      toast.success(response.EM);
      await fetchUsers();
      setIsShowModalDelete(false);
    } else {
      toast.error(response.EM);
    }
  };

  const handleClose = () => {
    setDataModal({});
    setIsShowModalDelete(false);
  };

  const onHideModalUser = async () => {
    setIsShowModalUser(false);
    setDataModalUser({});
    await fetchUsers();
  };

  const handleCreateUser = () => {
    setActionModalUser("CREATE");
    setIsShowModalUser(true);
  };

  const handleEditUser = (user) => {
    setActionModalUser("UPDATE");
    setDataModalUser(user);
    setIsShowModalUser(true);
  };

  const handleRefresh = async () => {
    await fetchUsers();
  };
  return (
    <>
      <div className="container">
        <div className="manage-users-container">
          <div className="user-header">
            <div className="title mt-3">
              <h3>Manage users</h3>
            </div>
            <div className="actions my-3">
              <button
                className="btn btn-success"
                onClick={() => handleRefresh()}
              >
                <i className="fa fa-refresh"></i>Refresh
              </button>
              <button
                className="btn btn-primary mx-3"
                onClick={() => handleCreateUser()}
              >
                {" "}
                <i className="fa fa-plus-circle"></i>Add new user
              </button>
            </div>
          </div>
          <div className="user-body">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Id</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Group</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listUsers && listUsers.length > 0 ? (
                  <>
                    {listUsers.map((item, index) => {
                      return (
                        <tr key={`row-${index}`}>
                          <th scope="row">
                            {(currentPage - 1) * currentLimit + index + 1}
                          </th>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>{item.Group ? item.Group.name : ""}</td>
                          <td>
                            <span
                              title="Edit"
                              className="edit"
                              onClick={() => handleEditUser(item)}
                            >
                              <i className="fa fa-pencil"></i>
                            </span>
                            <span
                              title="Delete"
                              className="delete"
                              onClick={() => handleDeleteUser(item)}
                            >
                              <i className="fa fa-trash-o"></i>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <span>Not found users</span>
                  </>
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 0 && (
            <div className="user-footer">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </div>
      </div>
      <ModalDelete
        show={isShowModalDelete}
        handleClose={handleClose}
        confirmDeleteUser={confirmDeleteUser}
        dataModal={dataModal}
      />
      <ModalUser
        onHide={onHideModalUser}
        show={isShowModalUser}
        action={actionModalUser}
        dataModalUser={dataModalUser}
      />
    </>
  );
};

export default Users;
