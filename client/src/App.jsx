import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { ContactUs } from "./pages/ContactUs"
import { About } from "./pages/About"
import { Error } from "./pages/Error"
import { Footer } from "./components/Footer"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"
import { TermAndCondition } from "./pages/TermAndCondition"


const App = () => {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermAndCondition />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
