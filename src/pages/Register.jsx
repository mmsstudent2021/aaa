import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";

const Register = () => {
  const [name, setName] = useState("Min Thiha");
  const [email, setEmail] = useState("minthiha41@gmail.com");
  const [password, setPassword] = useState("asdffdsa");
  const [password_confirmation, setPasswordConfirmation] = useState("asdffdsa");
//   const [error, setError] = useState({});
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    const {data} = await register(user);
    if(data?.success) navigate('/login')
    console.log(data);
    // setError(data?.error?.data?.errors);
    // console.log(data?.error?.data?.errors);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-green-500 text-xl font-bold">Register Account</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <small className="text-red-500">
          {error?.email?.map((item) => item)}
        </small> */}
        <input
          type="password"
          placeholder="Enter your password "
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password confirmation"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {/* <small className="text-red-500">
          {error?.password?.map((item) => item)}
        </small> */}

        <div>
          <small className="text-xs">
            Already have an account?
            <Link to="/login">
              <span className="text-green-500 cursor-pointer">login</span>
            </Link>
          </small>
          <br />
          <button
            type="submit"
            className="bg-green-400 px-10 py-2 text-white rounded cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
