import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  )
}

export default App