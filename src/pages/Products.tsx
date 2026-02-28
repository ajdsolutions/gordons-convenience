import { Coffee, Droplets, Home, Ticket, Gift, ArrowRight } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      icon: Coffee,
      title: "Snacks & Candy",
      description: "Potato chips, pretzels, chocolate bars, candy, nuts, jerky, and protein bars",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Droplets,
      title: "Beverages",
      description: "Fresh coffee (hot & iced), energy drinks, soft drinks, bottled water, juices",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Coffee,
      title: "Fresh Food",
      description: "Fresh sandwiches, wraps, salads, hot dogs, pizza, fresh baked goods",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Home,
      title: "Household Essentials",
      description: "Cleaning supplies, paper products, laundry detergent, personal care items",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Ticket,
      title: "Tobacco & Lottery",
      description: "NJ Lottery tickets (scratch-offs, draw games), cigarettes, cigars, vaping products",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Gift,
      title: "Seasonal Items",
      description: "Holiday decorations, summer supplies, back-to-school essentials",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Products & Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Everything you need, right around the corner. From fresh coffee to daily essentials.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Everything You Need, Under One Roof
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="card p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-6`}>
                  <category.icon className={category.iconColor} size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Popular Items
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular products at a glance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Fresh Coffee", emoji: "☕" },
              { name: "Energy Drinks", emoji: "⚡" },
              { name: "Chips", emoji: "🍟" },
              { name: "Candy", emoji: "🍬" },
              { name: "Sandwiches", emoji: "🥪" },
              { name: "Lottery", emoji: "🎰" },
              { name: "Water", emoji: "💧" },
              { name: "Cigarettes", emoji: "🚬" },
              { name: "Soda", emoji: "🥤" },
              { name: "Protein Bars", emoji: "🍫" },
              { name: "Hot Dogs", emoji: "🌭" },
              { name: "Vaping", emoji: "💨" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <p className="font-medium text-gray-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop by our store or give us a call. We likely have it or can get it for you!
          </p>
          <a 
            href="tel:+18482339192" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Call Us: (848) 233-9192
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Products
