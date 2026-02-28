import { Ticket, CheckCircle, AlertTriangle, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

const Lottery = () => {
  const lotteryGames = [
    { name: "Scratch-Offs", description: "Various price points available", icon: "🎫" },
    { name: "Powerball", description: "Multi-state jackpot game", icon: "🎱" },
    { name: "Mega Millions", description: "Biggest jackpots in lottery", icon: "💰" },
    { name: "Pick-3", description: "Daily draw game", icon: "🔢" },
    { name: "Pick-4", description: "Daily draw game", icon: "🔢" },
    { name: "Cash4Life", description: "Daily for life prize", icon: "💵" },
    { name: "Jersey Cash 5", description: "Daily NJ game", icon: "🃏" }
  ]

  const features = [
    { text: "Instant scratch-off tickets", available: true },
    { text: "Quick Pick available", available: true },
    { text: "Lottery results posted", available: true },
    { text: "Friendly staff to assist", available: true }
  ]

  const tobaccoProducts = [
    "Cigarettes (various brands)",
    "Cigars (premium & economy)",
    "Pipe tobacco",
    "Rolling papers",
    "Vaping devices & e-liquids",
    "Hookah tobacco"
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            NJ Lottery & Tobacco
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Your official NJ Lottery retailer on Gordons Corner Rd
          </p>
        </div>
      </section>

      {/* Lottery Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Ticket className="text-primary" size={32} />
                <h2 className="text-3xl font-heading font-bold text-gray-900">
                  NJ Lottery - Official Retailer
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Try your luck at Gordons Convenience, an official NJ Lottery retailer! We offer 
                a wide variety of lottery games to make your day more exciting.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <a 
                href="tel:+18482339192" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Call to Confirm Availability
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {lotteryGames.map((game, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{game.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{game.name}</h3>
                  <p className="text-sm text-gray-600">{game.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tobacco Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Tobacco Products & Accessories
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Find all your tobacco needs at Gordons Convenience. We carry a variety of 
                brands and products to satisfy your preferences.
              </p>

              <ul className="space-y-3 mb-8">
                {tobaccoProducts.map((product, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                    <span className="text-gray-700">{product}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-amber-800">Age Restriction</p>
                  <p className="text-amber-700 text-sm">Must be 21+ to purchase tobacco products. ID required.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🚬", name: "Cigarettes" },
                { emoji: "🍺", name: "Cigars" },
                { emoji: "💨", name: "Vaping" },
                { emoji: "🧴", name: "E-Liquids" },
                { emoji: "📜", name: "Papers" },
                { emoji: " Hookah", name: "Hookah" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <AlertTriangle className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-heading font-bold mb-4">
            Play Responsibly
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Please remember to play responsibly. NJ Lottery and Gordons Convenience support 
            responsible gaming.
          </p>
          <a 
            href="tel:1800GAMBLER" 
            className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call 1-800-GAMBLER for Help
          </a>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding">
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
                <p className="text-gray-600">(848) 233-9192</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lottery
