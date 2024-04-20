import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth.context";

function Navbar() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  
  const context = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  return (
    <nav className="navbar bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Iron Fork | {context.user?.name}
        </Link>
      </div>
      <div>
      {localStorage.getItem('token') ? (<button onClick={handleLogout}>Logout</button>) : ""}
      </div>

    </nav>
  );
}

export default Navbar;
