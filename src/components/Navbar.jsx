import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const data = await logout(token);
    console.log(data);
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center bg-blue-50 px-10 shadow-sm my-2">
      <h1 className="flex items-center gap-3">
        <AiFillContacts className="text-2xl text-yellow-500" />
        <span className="font-bold text-blue-800">ReContact</span>
      </h1>
      <div className="flex items-center gap-5">
        <div>
          <p>{user?.name}</p>
          <small>{user?.email}</small>
        </div>
        <button
          onClick={logoutHandler}
          className="bg-gray-400 px-3 py-1 rounded text-white cursor-pointer"
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
