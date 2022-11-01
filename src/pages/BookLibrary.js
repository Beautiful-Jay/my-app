import { Link, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Library () {
    return (
      <section>
      <section><Navigation /></section>
      <nav className="sty-user">
      <div className="book-div">
        <Link to={"sign-up"}>Sign Up</Link> 
        <Link to={"login"}>Login</Link> 
        </div>
      </nav>
      <Outlet />
      </section>
    )
  };

  export default Library;