import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link, Outlet } from "react-router-dom"
import "./Layout.css"

export default function Layout() {
  return (
    <div className="page">
      <Header text="Best Boy Viggo" />

      <main>
        <Outlet />
      </main>
      <nav className="navbar">
        <Link to="/">Start</Link>
        {" | "}
        <Link to="/gallery">Gallery</Link>
        {" | "}
        <Link to="/editor">Editor</Link>
      </nav>

      <Footer />
    </div>
  )
}