
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navber from './components/Home/Navber/Navber'
import HomeBanner from "./components/Home/HomeBanner/HomeBanner"
import Booking from "./components/Booking/Booking"
import Facilities from "./components/Facilities/Facilities"
import About from "./components/About/About"
import Location from "./components/Map/Location"
import Contact from "./components/Contact/Contact"
import Login from "./components/Home/Navber/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<HomeBanner />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
