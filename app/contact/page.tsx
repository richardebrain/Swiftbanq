import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Swiftbanq Credit Solutions',
  description: 'Get in touch with Swiftbanq Credit Solutions for loans, asset financing, and treasury services.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-brand-gray py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to answer your questions and guide you toward the right financial solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need SME Financing, Asset Financing, or want to explore our Treasury Services, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Location</h4>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">+234 (0) 800 SWIFTBANQ</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">info@swiftbanq.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="fname" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lname" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors" placeholder="+234 XXX XXXX" />
                  </div>
                </div>

                <div>
                   <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                   <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-white">
                      <option>SME Financing</option>
                      <option>Asset Financing</option>
                      <option>Digital Lending</option>
                      <option>Treasury Services</option>
                      <option>General Inquiry</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full inline-flex justify-center items-center px-8 py-4 bg-brand-yellow text-brand-dark rounded-lg font-bold hover:bg-brand-yellow-hover transition-colors">
                  Submit Application / Inquiry <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
