import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/authApi";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("minthiha26@gmail.com");
  const [password, setPassword] = useState("asdffdsa");
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    const { data } = await login({ email, password });
    dispatch(addUser({ user: data?.user, token: data?.token }));
    if (data?.success) navigate("/");
    console.log(data);
    // console.log(email, password);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-blue-500 text-xl font-bold">Login Account</h1>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password "
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <small className="text-xs">
            Don't have an account?
            <Link to="/register">
              <span className="text-green-500 cursor-pointer">register</span>
            </Link>
          </small>{" "}
          <br />
          <button
            type="submit"
            className="bg-blue-400 px-10 py-2 text-white rounded cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
