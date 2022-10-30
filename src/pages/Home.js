import Navigation from "../components/Navigation"

function Home () {
    return (
      <div >
      <Navigation />
      <div className="home"> You are Welcome!</div>
      <div>
      Your <span>Fav.</span>books are here
      <img src={require("./libraryimage.jpg")} alt="" />
      </div>
      </div>
    )
  }; 

  export default Home;