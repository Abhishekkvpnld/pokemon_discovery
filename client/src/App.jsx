import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import MyCollections from "./pages/MyCollections";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/my-collections" element={<MyCollections />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  )
}

export default App