import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import { context } from "../ContextProvider/Provider";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  const handleLogOut = () => {
    logOutUser()
      .then(() =>
        Swal.fire({
          position: "center",
          icon: "success",
          text: "LogOut Successfully!",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((err) => Swal.fire(err.code));
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? " bg-orange-200" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <li className="">
          <p>{user?.displayName}</p>
        </li>
      )}
      {user ? (
        <li>
          <div className="dropdown dropdown-end p-1 mr-5">
            <label tabIndex={0} className="avatar">
              <div className="w-8 rounded-full">
                <img
                  className=""
                  alt="https://i.ibb.co/N1nwWNp/a.png"
                  src={user?.photoURL}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-28 z-[1] p-2 shadow menu menu-horizontal dropdown-content  w-24 rounded-lg"
            >
              <li>
                <NavLink
                  onClick={handleLogOut}
                  // className="btn btn-sm md:btn-md  "
                >
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        // <div className="flex gap-5">
        // <div className="flex justify-items-center  flex-col md:flex-row text-center gap-3">
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? " bg-orange-400" : "")}
              to={"/login"}
              // className="btn btn-sm md:btn-md "
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
