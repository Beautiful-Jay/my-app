import { Link, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Library () {
    return (
      <section>
      <section><Navigation /></section>
      <nav className="sty-user">
        <Link to={"sign-up"}>Sign Up</Link> 
        <Link to={"login"}>Login</Link> 
      </nav>
      <Outlet />
      </section>
    )
  };

  export default Library;