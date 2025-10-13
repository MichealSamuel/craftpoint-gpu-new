import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, MessageSquare, Phone, Clock, Send, CheckCircle } from 'lucide-react';

export default function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to CRM backend
    // In production, this would be: POST /api/support-ticket
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          priority: 'medium',
          category: 'general',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@craftpointgpu.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      responseTime: "Instant response"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      responseTime: "Mon-Fri, 9am-6pm EST"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with CraftPoint GPU?",
      answer: "Simply choose a plan from our pricing page, complete the checkout process, and you'll receive immediate access to your GPU instances through your dashboard."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes! You can change your plan at any time from your dashboard. Changes take effect immediately, and billing is prorated based on your usage."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and ACH transfers for enterprise customers."
    },
    {
      question: "How do I monitor my GPU usage?",
      answer: "Your dashboard provides real-time monitoring of all your GPU instances, including usage metrics, uptime, and performance statistics."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We maintain a 99.9% uptime SLA for all Enterprise plans. Professional and Starter plans have standard uptime commitments detailed in our terms of service."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your dashboard settings. Your service will remain active until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold" style={{ color: '#C8102E' }}>CraftPoint GPU</a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
<Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
<Link to="/support" className="text-gray-700 hover:text-gray-900">Support</Link>
<Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            </div>

            <div className="hidden md:block">
              <button 
                className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C8102E' }}
              >
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="/" className="block py-2 text-gray-700">Home</a>
              <a href="/pricing" className="block py-2 text-gray-700">Pricing</a>
              <a href="/support" className="block py-2 font-semibold" style={{ color: '#C8102E' }}>Support</a>
              <a href="/dashboard" className="block py-2 text-gray-700">Dashboard</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How Can We <span style={{ color: '#C8102E' }}>Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here 24/7 to assist you with any questions or issues.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4" style={{ color: '#C8102E' }}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="font-semibold" style={{ color: '#C8102E' }}>{option.contact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{option.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Submit a <span style={{ color: '#C8102E' }}>Support Ticket</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ticket Submitted!</h3>
              <p className="text-gray-600">
                Thank you for contacting us. We've received your support ticket and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent"
                    style={{ focusRingColor: '#C8102E' }}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="account">Account Management</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-0 focus:border-transparent resize-none"
                  placeholder="Please describe your issue in detail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
                style={{ backgroundColor: '#C8102E' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Ticket
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span style={{ color: '#C8102E' }}>Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 font-semibold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4" style={{ color: '#C8102E' }}>+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
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
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="/support" className="hover:text-white">Contact Us</a></li>
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