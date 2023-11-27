import Header from "./components/header/Header"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Service from "./pages/Services"
import './app.css';
import Faq from "./pages/Faq"


function App() {
  return(
    <>
    <Header/>
    <Home/>
    <Service/>
    <Blog/>
    <Faq/>
    <About/>
    <Footer/>
    </>
  )
}

export default App
