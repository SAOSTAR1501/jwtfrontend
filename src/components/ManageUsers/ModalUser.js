import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchGroups } from "../../services/userService";
import { toast } from "react-toastify";

const ModalUser = (props) => {
  const [userGroups, setUserGroups] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    let res = await fetchGroups();
    if (res && res.data && res.data.EC === 0) {
      setUserGroups(res.data.DT);
    } else {
      toast.error(res.data.EM);
    }
  };
  return (
    <>
      <Modal size="lg" show={true} className="modal-user">
        <Modal.Header closeButton>
          <Modal.Title>
            <span>{props.title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-body row">
            <div className="col-12 col-sm-6 form-group">
              <label>
                Email (<span className="text-danger">*</span>) :
              </label>
              <input className="form-control" type="email" />
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>
                Phone number (<span className="text-danger">*</span>) :
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>Username :</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>
                Password (<span className="text-danger">*</span>) :
              </label>
              <input className="form-control" type="password" />
            </div>
            <div className="col-12 col-sm-12 form-group">
              <label>Address:</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>Gender:</label>
              <select className="form-select">
                <option defaultValue="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 form-group">
              <label>
                Group (<span className="text-danger">*</span>) :
              </label>
              <select className="form-select">
                {userGroups.length > 0 &&
                  userGroups.map((item, index) => {
                    return (
                      <option key={`group-${index}`} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUser;
