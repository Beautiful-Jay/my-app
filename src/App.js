import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home" 
import BookLibrary from "./pages/BookLibrary" 
import NoPage from "./pages/NoPage" 
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Users from "./pages/Users"
import { ErrorBoundary } from "./components/ErrorBoundary"

function App() {
  return (
 <section className="main-app">
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="book-library" element={<BookLibrary />}>
  <Route path="sign-up" element={<SignUp />} />
  <Route path="login" element={<Login />} />
  </Route>
  <Route path="users" element={<ErrorBoundary><Users /> </ErrorBoundary>} />
  <Route path="*" element={<NoPage />} />
</Routes>
 </section>
  );
}

export default App;
