import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import MouseSpotlight from './components/MouseSpotlight'

function App() {
  return (
    <div className="min-h-screen relative">
      <MouseSpotlight />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}

export default App