import { MapPin, Clock, Phone, Heart, Award, Users, Star } from 'lucide-react'

const About = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Best coffee in Manalapan! The staff is always friendly.",
      rating: 5
    },
    {
      name: "John D.",
      text: "My go-to for lottery tickets. Quick and easy!",
      rating: 5
    },
    {
      name: "Mike R.",
      text: "Great selection of snacks and drinks. Love the convenience.",
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Gordons Convenience
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Manalapan's trusted neighborhood store since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Serving Manalapan Since 2010
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Welcome to Gordons Convenience, your friendly neighborhood store located right 
                  in the heart of Manalapan at 285 Gordons Corner Rd. For over a decade, we've 
                  been proud to serve our local community with fresh products, friendly service, 
                  and everyday convenience.
                </p>
                <p>
                  What started as a small neighborhood store has grown to become a trusted 
                  destination for residents of Manalapan, Englishtown, Marlboro, and surrounding 
                  areas. We believe in the power of community, and treating every customer like 
                  family is at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/img/IMG_8228.jpeg" 
                  alt="Gordons Convenience Store" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 italic">
              "At Gordons Convenience, our mission is simple: to make your daily life easier 
              by providing fresh, quality products at fair prices with a smile. Whether you're 
              grabbing your morning coffee before work, picking up household essentials, or trying 
              your luck with NJ Lottery, we're here to serve you."
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What You'll Find at Gordons Convenience
            </h2>
            <p className="text-lg text-gray-600">
              Quality products and friendly service, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Food & Beverages",
                items: ["Freshly brewed coffee", "Energy drinks and soft drinks", "Bottled water and juices", "Fresh sandwiches and snacks"]
              },
              {
                title: "Snacks & Sweet Treats",
                items: ["Chips, pretzels, and crackers", "Chocolate and candy", "Nuts and jerky", "Protein bars and healthy options"]
              },
              {
                title: "Household Essentials",
                items: ["Cleaning supplies", "Paper products", "Laundry detergent", "Personal care items"]
              },
              {
                title: "Lottery & Tobacco",
                items: ["NJ Lottery tickets", "Cigarettes", "Cigars", "Vaping products"]
              },
              {
                title: "Seasonal Items",
                items: ["Holiday decorations", "Summer supplies", "Back-to-school essentials"]
              }
            ].map((offer, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                  {offer.title}
                </h3>
                <ul className="space-y-2">
                  {offer.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                More Than a Store - We're Your Neighbors
              </h2>
              <p className="text-lg text-white/90">
                Gordons Convenience is proud to be an active part of the Manalapan community. 
                We support local schools, participate in community events, and strive to give 
                back to the neighborhood that has supported us over the years.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Heart className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Community First</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Users className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Local Support</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Award className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Since 2010</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Star className="mx-auto mb-3" size={32} />
                <p className="font-semibold">Customer Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">285 Gordons Corner Rd<br />Manalapan, NJ 07726</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">Mon - Sun: 6:00 AM - 9:00 PM<br />365 days a year</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                <p className="text-gray-600">(848) 233-9192<br />gordonsconvenience25@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
