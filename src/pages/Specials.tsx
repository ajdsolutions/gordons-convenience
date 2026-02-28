import { Tag, Clock, ArrowRight, Star } from 'lucide-react'

const Specials = () => {
  const specials = [
    {
      title: "Buy 2 Get 1 Free on All Snacks",
      description: "Stock up on your favorite chips, candy, and pretzels! Mix and match any 3 snacks and only pay for 2.",
      expires: "Limited time only",
      featured: true
    },
    {
      title: "Fresh Coffee - $1 Off Before 8 AM",
      description: "Start your morning right with discounted coffee. Get $1 off any hot or iced coffee before 8 AM.",
      expires: "Daily offer",
      featured: false
    },
    {
      title: "NJ Lottery Jackpot Winners Here!",
      description: "Try your luck at Gordons Convenience. We're proud to have had multiple big winners!",
      expires: "Always",
      featured: false
    },
    {
      title: "Energy Drinks - Buy 4 Get 1 Free",
      description: "Power through your day with our selection of energy drinks. Buy 4, get 1 free!",
      expires: "This week",
      featured: false
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent to-accent-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Weekly Specials & Deals
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Save big at Gordons Convenience! Check out our latest deals and promotions.
          </p>
        </div>
      </section>

      {/* Specials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Current Specials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these great deals! Stop by the store to redeem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specials.map((special, index) => (
              <div 
                key={index} 
                className={`card p-8 ${special.featured ? 'ring-2 ring-accent' : ''}`}
              >
                {special.featured && (
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    ⭐ Featured Deal
                  </span>
                )}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {special.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {special.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>{special.expires}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Tag className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Don't Miss a Deal!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get exclusive deals and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary text-white rounded-xl p-8 text-center">
              <Star className="mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold mb-4">
                Join Our Rewards Program!
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Ask about our rewards program at checkout. Earn points on every purchase and redeem for free items!
              </p>
              <a href="/contact" className="inline-block bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Ask at Checkout
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Come Visit Us!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Stop by and see our latest specials in person. We're located on Gordons Corner Rd in Manalapan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Directions
              <ArrowRight size={20} />
            </a>
            <a href="tel:+18482339192" className="btn-secondary inline-flex items-center gap-2">
              Call: (848) 233-9192
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specials
