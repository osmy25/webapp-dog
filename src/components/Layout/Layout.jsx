import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="page">
      <Header text="Best Boy Viggo" />

      <main>
        <Outlet />
      <nav>
        <Link to="/">Start</Link>
        {" | "}
        <Link to="/gallery">Gallery</Link>
      </nav>
      </main>

      <Footer />
    </div>
  )
}