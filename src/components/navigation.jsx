import "../styles/navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
