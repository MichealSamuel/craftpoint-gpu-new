import { useState } from 'react';
import { Zap, Server, Shield, TrendingUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // ADD THIS LINE

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Enterprise-grade GPUs delivering unmatched compute power for your AI, ML, and rendering workloads."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Scale up or down instantly. Pay only for what you use with flexible subscription plans."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "99.9% uptime guarantee with enterprise-level security and dedicated support."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Track your GPU usage, performance metrics, and billing through our intuitive dashboard."
    }
  ];

  const pricingPreview = [
    { name: "Starter", price: "99", gpu: "1x RTX 4090" },
    { name: "Professional", price: "299", gpu: "3x RTX 4090" },
    { name: "Enterprise", price: "799", gpu: "8x RTX 4090" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     {/* Navigation */}
<nav className="fixed top-0 w-full bg-white shadow-sm z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold" style={{ color: '#C8102E' }}>CraftPoint GPU</Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
        <Link to="/support" className="text-gray-700 hover:text-gray-900">Support</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
      </div>

      <div className="hidden md:block">
        <Link 
          to="/checkout"
          className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#C8102E' }}
        >
          Get Started
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden pb-4">
        <Link to="/" className="block py-2 text-gray-700">Home</Link>
        <Link to="/pricing" className="block py-2 text-gray-700">Pricing</Link>
        <Link to="/support" className="block py-2 text-gray-700">Support</Link>
        <Link to="/dashboard" className="block py-2 text-gray-700">Dashboard</Link>
        <Link 
          to="/checkout"
          className="mt-2 block w-full px-6 py-2 rounded-lg text-white font-semibold text-center"
          style={{ backgroundColor: '#C8102E' }}
        >
          Get Started
        </Link>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Enterprise GPU Power,
            <br />
            <span style={{ color: '#C8102E' }}>On Demand</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access high-performance GPU clusters for AI training, machine learning, 
            rendering, and compute-intensive workloads. Scale instantly with flexible subscriptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#C8102E' }}
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-lg border-2 font-semibold text-lg hover:bg-gray-50 transition-colors" style={{ borderColor: '#C8102E', color: '#C8102E' }}>
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#C8102E' }}>99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#C8102E' }}>500+</div>
            <div className="text-gray-600">Active Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#C8102E' }}>24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span style={{ color: '#C8102E' }}>CraftPoint GPU</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for developers, researchers, and enterprises who demand the best in GPU computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
                <div className="mb-4" style={{ color: '#C8102E' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent <span style={{ color: '#C8102E' }}>Pricing</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your compute needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPreview.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold" style={{ color: '#C8102E' }}>${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.gpu}</p>
                <button 
                  className="w-full px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#C8102E' }}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#pricing" className="text-lg font-semibold hover:underline" style={{ color: '#C8102E' }}>
              View Full Pricing Details →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Supercharge Your Computing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of developers and enterprises leveraging CraftPoint GPU for their most demanding workloads.
          </p>
          <button 
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C8102E' }}
          >
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#C8102E' }}>CraftPoint GPU</h3>
            <p className="text-gray-400">Enterprise GPU computing, simplified.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 CraftPoint GPU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}