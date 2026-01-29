import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Droplet, Package, Heart, Building2, Factory, Briefcase, Hotel, Calendar, Users, Shield, Clock, Sparkles, CheckCircle2, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const galleryImages = [
    { alt: 'Modern vending machine installation', src: '/vending_1.jpg' },
    { alt: 'Premium vending services', src: '/vending_2.jpg' },
    { alt: 'Professional vending solutions', src: '/vending_3.webp' },
    { alt: 'Quality vending equipment', src: '/vending_4.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl' : 'bg-gray-900/90 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white tracking-tight">DESQ Vending Services</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Services
              </button>
              <button onClick={() => scrollToSection('locations')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Locations We Serve
              </button>
              <button onClick={() => scrollToSection('gallery')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Contact
              </button>
              <a href="tel:5124357345" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-bold rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Services
              </button>
              <button onClick={() => scrollToSection('locations')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Locations We Serve
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                Contact
              </button>
              <a href="tel:5124357345" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-bold rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Now Seeking Vending Locations<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">in Amarillo, Texas</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              No cost vending machines for workplaces and commercial facilities. Full service included.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: CheckCircle2, text: 'Zero cost to your business' },
              { icon: Clock, text: 'Weekly restocking' },
              { icon: Sparkles, text: 'Fast maintenance' },
              { icon: Shield, text: 'Locally owned' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                <item.icon className="w-8 h-8 text-gray-400 mb-3" />
                <p className="text-white font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:5124357345" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 text-lg font-bold rounded-xl hover:from-white hover:to-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a href="mailto:Tabor@txapex.com" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-lg font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3 border border-gray-600">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Modern Machines. Zero Hassle.</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional vending solutions for serious businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Droplet, title: 'Drink Vending Machines', desc: 'Cold drinks always available' },
              { icon: Package, title: 'Snack Vending Machines', desc: 'Wide variety of snacks' },
              { icon: Heart, title: 'Healthy Vending Machines', desc: 'Better for you options' }
            ].map((machine, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 hover:border-gray-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <machine.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{machine.title}</h4>
                <p className="text-gray-600 text-lg">{machine.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-700">
            <h4 className="text-3xl font-black text-white mb-8 text-center">Full Service Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Regular restocking',
                'Fast repairs',
                'Clean modern machines',
                'Zero cost placement'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Businesses We Serve */}
      <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">Businesses We Serve</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Premium vending solutions for every commercial facility</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Briefcase, name: 'Offices' },
              { icon: Factory, name: 'Industrial facilities' },
              { icon: Building2, name: 'Manufacturing' },
              { icon: Heart, name: 'Clinics' },
              { icon: Hotel, name: 'Hotels' },
              { icon: Calendar, name: 'Event centers' },
              { icon: Users, name: 'Multi tenant buildings' },
              { icon: Sparkles, name: 'Many More' }
            ].map((business, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-xl border border-gray-600 hover:border-gray-500 transition-all hover:transform hover:scale-105 group">
                <business.icon className="w-10 h-10 text-gray-400 mb-4 group-hover:text-gray-300 transition-colors" />
                <p className="text-white font-bold text-lg">{business.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-600">
            <h4 className="text-3xl font-black text-white mb-8 text-center">Products We Stock</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                'Cold drinks',
                'Healthy snacks',
                'Candy',
                'Chips',
                'Protein drinks and snacks'
              ].map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">{product}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Modern Equipment</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Clean, professional vending machines in commercial spaces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-6">Why Choose DESQ Vending</h3>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">Cold drinks. Professional service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: MapPin, title: 'Locally owned in Amarillo Texas', desc: 'Supporting the local community' },
              { icon: Shield, title: 'Reliable professional service', desc: 'Count on us every week' },
              { icon: Sparkles, title: 'Clean modern machines', desc: 'Latest equipment and technology' },
              { icon: CheckCircle2, title: 'Zero hassle', desc: 'We handle everything for you' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-gray-600 transition-all group">
                <item.icon className="w-12 h-12 text-gray-400 mb-4 mx-auto group-hover:text-gray-300 transition-colors" />
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Request Free Vending Placement</h3>
            <p className="text-xl text-gray-600">Get started with no cost vending for your business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700">
                <h4 className="text-2xl font-black text-white mb-6">Get In Touch</h4>
                <div className="space-y-6">
                  <a href="tel:5124357345" className="flex items-center space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">Call Us Now</p>
                      <p className="text-white text-xl font-bold">(512) 435-7345</p>
                    </div>
                  </a>

                  <a href="mailto:Tabor@txapex.com" className="flex items-center space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-gray-500 group-hover:to-gray-600 transition-all">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">Email Us</p>
                      <p className="text-white text-lg font-bold">Tabor@txapex.com</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-5 bg-gray-800/50 rounded-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">Our Location</p>
                      <p className="text-white text-lg font-bold">919 South West 8th</p>
                      <p className="text-white text-lg font-bold">Amarillo Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2!2d-101.8313!3d35.1983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDExJzUzLjkiTiAxMDHCsDQ5JzUyLjciVw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DESQ Vending Services Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-200">
              <h4 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h4>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Contact Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Address</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all shadow-sm resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg font-bold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Request Placement
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <h4 className="text-2xl font-black text-white">DESQ Vending Services</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional vending solutions for businesses in Amarillo Texas. Zero cost placement with full service included.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold text-lg mb-4">Contact Info</h5>
              <div className="space-y-3">
                <a href="tel:5124357345" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>(512) 435-7345</span>
                </a>
                <a href="mailto:Tabor@txapex.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Tabor@txapex.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p>919 South West 8th</p>
                    <p>Amarillo Texas</p>
                    <p className="mt-2 text-sm">Service Area: Amarillo Texas</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
              <div className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Services', id: 'services' },
                  { label: 'Locations We Serve', id: 'locations' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'About', id: 'about' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 DESQ Vending Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
