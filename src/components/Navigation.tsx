import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, MapPin, Clock } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About Us' },
    { to: '/lottery', label: 'Lottery' },
    { to: '/specials', label: 'Specials' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              285 Gordons Corner Rd, Manalapan, NJ 07726
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              Open 6 AM - 9 PM Daily
            </span>
          </div>
          <a href="tel:+18482339192" className="flex items-center gap-1 hover:text-accent transition-colors">
            <ShoppingBag size={14} />
            (848) 233-9192
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <img 
                src="/img/logo.jpg" 
                alt="Gordons Convenience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-heading">Gordons Convenience</h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.to)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.to)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t text-sm text-gray-600">
              <p className="flex items-center gap-2 mb-1">
                <MapPin size={14} />
                285 Gordons Corner Rd, Manalapan
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} />
                Open 6 AM - 9 PM Daily
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
