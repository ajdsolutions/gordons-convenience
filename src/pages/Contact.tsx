import { useState } from 'react'
import { MapPin, Phone, Clock, Send, Car } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })

  const faqs = [
    {
      question: "What are your store hours?",
      answer: "We're open 6:00 AM to 9:00 PM, 365 days a year!"
    },
    {
      question: "Do you offer delivery?",
      answer: "Currently, we don't offer delivery, but we're working on it! Check back soon."
    },
    {
      question: "What lottery games do you sell?",
      answer: "We sell all NJ Lottery games including scratch-offs, Powerball, Mega Millions, Pick-3, Pick-4, and more!"
    },
    {
      question: "Do you accept credit cards?",
      answer: "Yes! We accept all major credit cards, debit cards, and cash."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have a large parking lot with ample spaces for cars and trucks."
    }
  ]

  const directions = [
    {
      area: "Manalapan",
      text: "We're located right on Gordons Corner Rd, just minutes from Manalapan's town center. Easy access with ample parking."
    },
    {
      area: "Englishtown",
      text: "Take Route 33 West to Gordons Corner Rd. We're about 5 minutes from Englishtown."
    },
    {
      area: "Marlboro",
      text: "Head north on Route 79 to Gordons Corner Rd. Turn right, and you'll find us on the left."
    },
    {
      area: "Freehold",
      text: "Take Route 9 North to Gordons Corner Rd. We're about 10 minutes from Freehold."
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact & Location
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Find us on Gordons Corner Rd in Manalapan
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">285 Gordons Corner Rd<br />Manalapan, NJ 07726</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">(848) 233-9192</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <Clock className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">Mon - Sun: 6:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Get Directions
              </h2>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-74.29431908459375!3d40.28665297933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab4c4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2s285%20Gordons%20Corner%20Rd%2C%20Manalapan%2C%20NJ%2007726!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
              <a 
                href="https://maps.google.com/?q=285+Gordons+Corner+Rd+Manalapan+NJ+07726"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Directions */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Directions from Surrounding Communities
              </h2>
              <div className="space-y-6">
                {directions.map((dir, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{dir.area}</h3>
                    <p className="text-gray-600">{dir.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-gray-600">
                <Car className="text-primary" size={20} />
                <span>Easy parking available on-site</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="employment">Employment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
