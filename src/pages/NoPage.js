import { NavLink } from "react-router-dom";

function NoPage () {
    return (
      <section className="no-page">
      <h1>404 Error</h1>
      <h3>The page you are looking is no longer active or has been moved to another site.</h3>
      <section> <p>Back to </p> <NavLink style={({isActive}) => isActive ? {color: 'white'} : {color :'black'}}
         className="navigate" to={"/"}>Home Page</NavLink> 
         </section>
      </section>
    )
  };


  export default NoPage;

