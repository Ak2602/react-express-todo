import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

// import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  console.log(user);
  useEffect(() => {
    // userData();
  });

  const userHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/", user)
      .then((user_data) => console.log(user_data))
      .catch((error) => console.log(error));
  };

  return (
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
  );
};

export default Login;
