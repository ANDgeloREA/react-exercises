import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";


const App = () => {
  return (
    <>
      <nav>
        <Link to="/users/ANDgeloREA">Andrea</Link>
        <Link to="/users/PuglisiAlfio">Alfio</Link>
        <Link to="/users/gabrimarch3">Gabriel</Link>
      </nav>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  )
}

export default App