
import Nav from "./Components/Nav";
import Banner from "./Components/Banner"
import TechnologySection from "./Components/TechnologySection";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <TechnologySection />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
