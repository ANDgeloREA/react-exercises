import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  )
}

export default App