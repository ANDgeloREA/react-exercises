import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";


const App = () => {
  return (
    <>
      <nav>
        <Link to="users/usersList">Users List</Link>
      </nav>
      <Routes>
      <Route path="users" >
          <Route path="usersList" element={<GithubUserList />} >
            <Route path=":username" element={<ShowGithubUser />} />
            <Route index element={<p>Add a user and select it</p>}/>
          </Route>
        </Route>
        <Route path="*" element={<h1>"Page Not Found"</h1>} />
      </Routes>
    </>
  )
}

export default App