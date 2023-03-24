import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const DataList = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`http://localhost:9000/api/user/${id}`)
      .then((response) => setData(response.data));
  };

  const addData = async () => {
    await axios
      .post(`http://localhost:9000/api/list/new/${id}`, { task: formData })
      .then((add_data) => console.log(add_data))
      .catch((error) => console.log(error));
    getData();
  };
  const updateData = async (id) => {
    await axios
      .put("http://localhost:9000/api/list/done", { id: id })
      .then((upd_data) => console.log(upd_data))
      .catch((error) => console.log(error));
    getData();
  };
  const deleteData = async (id) => {
    console.log(id);
    await axios
      .delete("http://localhost:9000/api/list/remove", { data: { id: id } })
      .then((del_data) => console.log(del_data))
      .catch((error) => console.log(error));
    getData();
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="display-2">To do list</h1>
        <input
          name="username"
          type="text"
          value={formData}
          onChange={(e) => {
            setFormData(e.target.value);
          }}
          placeholder="New task"
        />
        <button className="btn_add" onClick={addData}>
          Add
        </button>
        <p className="fs-4">Insert a new task</p>
      </div>
      <center>
        <table className="table" border={"1px"}>
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Date</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.date}</td>
                <td>{data.task}</td>
                <td>{data.status}</td>
                <td>
                  <button className="btn1" onClick={() => deleteData(data.id)}>
                    Delete
                  </button>
                  <button className="btn2" onClick={() => updateData(data.id)}>
                    Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn_lgt" onClick={() => logout()}>
          Logout
        </button>
      </center>
    </div>
  );
};

export default DataList;
