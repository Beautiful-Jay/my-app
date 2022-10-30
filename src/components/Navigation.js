import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <section className="navigation">
      <nav><span>Crystal </span><span className="lib">Library</span>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="navigate"
        to="/">
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="navigate"
        to="/users">
        Users
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="navigate"
        to="/book-library">
          Books
      </NavLink>
     </nav>
     
    </section>
  );
}

export default Navigation;
