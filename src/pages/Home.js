import Navigation from "../components/Navigation";

function Home() {
  return (
    <div className="home">
      <div>
        <Navigation />
      </div>
      <div className="item">
        <div className="item1">
          {" "}
          You are Welcome{" "}
          <div>
            {" "}
            Your <span className="fav">Fav.</span> books are Here
          </div>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <div className="item2">
          {" "}
          <img src={require("./libraryimage.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
