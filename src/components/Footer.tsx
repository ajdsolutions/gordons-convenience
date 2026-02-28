import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Gordons Convenience</h3>
            <p className="text-white/80 mb-4">
              Your neighborhood convenience store in Manalapan, NJ. Fresh coffee, snacks, beverages, lottery & more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lottery" className="text-white/80 hover:text-white transition-colors">
                  Lottery
                </Link>
              </li>
              <li>
                <Link to="/specials" className="text-white/80 hover:text-white transition-colors">
                  Specials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Store Hours</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Monday - Sunday</span>
              </li>
              <li className="ml-6 text-white">6:00 AM - 9:00 PM</li>
              <li className="mt-4 text-sm">365 days a year</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  285 Gordons Corner Rd<br />
                  Manalapan, NJ 07726
                </span>
              </li>
              <li>
                <a href="tel:+18482339192" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone size={16} />
                  (848) 233-9192
                </a>
              </li>
              <li>
                <a href="mailto:gordonsconvenience25@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Mail size={16} />
                  gordonsconvenience25@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Gordons Convenience. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-white/60">
              <span>21+ to purchase tobacco</span>
              <span>|</span>
              <span>Gamble Responsibly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
