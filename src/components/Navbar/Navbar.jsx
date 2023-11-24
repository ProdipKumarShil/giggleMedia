import { Link } from "react-router-dom";
import { getUser } from "../../getUser/utilities";

const Navbar = () => {
  const user = getUser();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Giggle Media</a>
      </div>
      {user ? (
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="w-12 h-12 flex justify-center items-center text-xl font-bold bg-pink-300 rounded-full active:scale-95">
              {user?.userName?.split("")[0].toUpperCase()}
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={() => localStorage.clear()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link className="btn" to="/register">
            SignUp
          </Link>
          <Link className="btn" to="/login">
            SignIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// const UserImg = ({userName: string}) => {
//   const firstLetter = userName.split('')[0]
//   return <div className="w-12 h-12 flex justify-center items-center text-xl font-bold bg-pink-500 rounded-full">{firstLetter.toUpperCase()}</div>
// }
