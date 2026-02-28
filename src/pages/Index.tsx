import { Link } from 'react-router-dom'
import { Coffee, Clock, MapPin, Award, ArrowRight, Star, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const storeImages = [
    '/img/logo2.png',
    '/img/storefront.jpeg',
    '/img/snacks.jpeg',
    '/img/coffee.jpeg',
    '/img/chips.jpeg',
    '/img/milk_promo.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storeImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [storeImages.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {storeImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Gordons Convenience ${index + 1}`}
                className="w-full h-full object-contain bg-black"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {storeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container-custom relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              ✨ Open 6 AM - 9 PM Daily
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Your Neighborhood Convenience Store in{' '}
              <span className="text-accent">Manalapan</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              From fresh coffee to daily essentials, we're here to make your life easier. 
              Freshly brewed coffee, snacks, beverages, lottery & more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                Shop Now
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                <MapPin size={20} />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Coffee className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Fresh Coffee</p>
                <p className="text-sm text-gray-600">Brewed All Day</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">NJ Lottery</p>
                <p className="text-sm text-gray-600">Official Retailer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Quality Brands</p>
                <p className="text-sm text-gray-600">You Trust</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Easy Parking</p>
                <p className="text-sm text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Gordons Convenience?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your neighborhood store since 2010, serving Manalapan and surrounding communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fresh & Fast */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Fresh & Fast</h3>
              <p className="text-gray-600">
                Fresh coffee brewed all day, grab-and-go meals ready when you are
              </p>
            </div>

            {/* Local & Friendly */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Local & Friendly</h3>
              <p className="text-gray-600">
                Manalapan's favorite neighborhood store since 2010
              </p>
            </div>

            {/* Always Convenient */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Always Convenient</h3>
              <p className="text-gray-600">
                Open 6 AM - 9 PM, 365 days a year on Gordons Corner Rd
              </p>
            </div>

            {/* More Than a Store */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Lottery & More</h3>
              <p className="text-gray-600">
                NJ Lottery, tobacco products, and seasonal essentials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need, right around the corner
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fresh Coffee */}
            <div className="card group">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <Coffee size={64} className="text-amber-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-1">Fresh Coffee</h3>
                <p className="text-gray-600 text-sm">Hot & iced coffee brewed fresh</p>
              </div>
            </div>

            {/* Snacks & Candy */}
            <div className="card group">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
                <Star size={64} className="text-pink-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-1">Snacks & Candy</h3>
                <p className="text-gray-600 text-sm">Chips, chocolate & more</p>
              </div>
            </div>

            {/* Beverages */}
            <div className="card group">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Award size={64} className="text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-1">Beverages</h3>
                <p className="text-gray-600 text-sm">Energy drinks, soda & water</p>
              </div>
            </div>

            {/* Lottery */}
            <div className="card group">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <Star size={64} className="text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-1">NJ Lottery</h3>
                <p className="text-gray-600 text-sm">Scratch-offs & draw games</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Visit Us on Gordons Corner Rd
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Located right in the heart of Manalapan, we're easy to find and even easier to shop. 
                Stop by for your daily coffee, grab what you need, and be on your way!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-medium">285 Gordons Corner Rd, Manalapan, NJ 07726</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" size={20} />
                  <span className="font-medium">Open Daily: 6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={20} />
                  <a href="tel:+18482339192" className="font-medium hover:text-primary transition-colors">
                    (848) 233-9192
                  </a>
                </div>
              </div>

              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                Get Directions
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="/img/IMG_8228.jpeg" 
                  alt="Gordons Convenience Store" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="font-medium text-gray-900">Serving Manalapan & Surrounding Areas</p>
                <p className="text-sm text-gray-600">Englishtown • Marlboro • Freehold • Old Bridge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Save Big with Our Weekly Specials!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to get exclusive deals and updates on new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Link to="/specials" className="btn-accent whitespace-nowrap">
              View Specials
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
