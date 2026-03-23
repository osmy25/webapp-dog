import "./App.css"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import CodeEditor from "./pages/CodeEditor"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="editor" element={<CodeEditor />} />
      </Route>
    </Routes>
  )
}

export default App