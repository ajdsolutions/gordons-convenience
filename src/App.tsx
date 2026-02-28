import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Index from './pages/Index'
import Products from './pages/Products'
import About from './pages/About'
import Lottery from './pages/Lottery'
import Contact from './pages/Contact'
import Specials from './pages/Specials'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/lottery" element={<Lottery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/specials" element={<Specials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
