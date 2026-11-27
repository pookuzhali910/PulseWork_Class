
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>

      <nav>
        <Link to="dashboard">Dashboard</Link>
        <Link to="userDetails">User Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Admin;
