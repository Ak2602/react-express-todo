import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [authenticated, setAuthenticated] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (authenticated) {
      navigate(`/list/${id}`);
    } else {
      navigate("/");
    }
  }, [authenticated]);

  const userHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/api/login", user)
      .then((response) => {
        response.data.value && setAuthenticated((data) => !data);
        setId(response.data.user_id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="body">
        <form
          onSubmit={(e) => {
            userData(e);
          }}
        >
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={(e) => {
              userHandler(e);
            }}
            placeholder="Username"
          />
          <input
            name="password"
            type="text"
            value={user.password}
            onChange={(e) => {
              userHandler(e);
            }}
            placeholder="Password"
          />
          <input type="submit" value={"submit..."} />
        </form>
      </div>
    </>
  );
};

export default Login;
