
import './App.css'
import ContactUs from './sections/ContactUs'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Partners from './sections/Partners'
import PopularSection from './sections/PopularSection'
import Testimonials from './sections/Testimonials'

function App() {
  

  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="popular"><PopularSection /></section>
      <Partners />
      <Features />
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactUs /></section>
      <Footer />
    </>
  )
}

export default App
