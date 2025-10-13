import { useState } from 'react';
import { Check, X, Menu } from 'lucide-react';


export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual developers and small projects",
      monthlyPrice: 99,
      yearlyPrice: 950,
      gpu: "1x RTX 4090",
      vram: "24GB VRAM",
      features: [
        "24/7 GPU Access",
        "Up to 100 hours/month",
        "Standard Support",
        "API Access",
        "Basic Monitoring",
        "1 Concurrent Job"
      ],
      notIncluded: [
        "Priority Support",
        "Custom Configurations",
        "Dedicated Account Manager"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "For teams and production workloads",
      monthlyPrice: 299,
      yearlyPrice: 2870,
      gpu: "3x RTX 4090",
      vram: "72GB VRAM",
      features: [
        "24/7 GPU Access",
        "Unlimited hours",
        "Priority Support",
        "API Access",
        "Advanced Monitoring",
        "5 Concurrent Jobs",
        "Custom Docker Images",
        "Snapshots & Backups"
      ],
      notIncluded: [
        "Dedicated Account Manager",
        "SLA Guarantee"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Maximum performance for large-scale operations",
      monthlyPrice: 799,
      yearlyPrice: 7670,
      gpu: "8x RTX 4090",
      vram: "192GB VRAM",
      features: [
        "24/7 GPU Access",
        "Unlimited hours",
        "24/7 Priority Support",
        "API Access",
        "Real-time Monitoring",
        "Unlimited Concurrent Jobs",
        "Custom Docker Images",
        "Snapshots & Backups",
        "Dedicated Account Manager",
        "99.9% SLA Guarantee",
        "Custom Configurations",
        "Private Network Access"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

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
              <a href="/pricing" className="block py-2 font-semibold" style={{ color: '#C8102E' }}>Pricing</a>
              <a href="/support" className="block py-2 text-gray-700">Support</a>
              <a href="/dashboard" className="block py-2 text-gray-700">Dashboard</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span style={{ color: '#C8102E' }}>GPU Power</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Flexible plans designed to scale with your needs. All plans include 24/7 access and no setup fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors"
              style={{ backgroundColor: billingCycle === 'yearly' ? '#C8102E' : '#D1D5DB' }}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#C8102E' }}>
                Save up to 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                plan.popular ? 'ring-2 ring-offset-2' : 'border border-gray-200'
              }`}
              style={plan.popular ? { ringColor: '#C8102E' } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: '#C8102E' }}
                >
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold" style={{ color: '#C8102E' }}>
                    ${getPrice(plan)}
                  </span>
                  <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-gray-500">Save ${getSavings(plan)}/year</p>
                )}
                <div className="mt-4 text-sm text-gray-700">
                  <div className="font-semibold">{plan.gpu}</div>
                  <div>{plan.vram}</div>
                </div>
              </div>

              <button
                className="w-full py-3 rounded-lg font-semibold mb-6 transition-opacity hover:opacity-90"
                style={
                  plan.popular
                    ? { backgroundColor: '#C8102E', color: 'white' }
                    : { border: '2px solid #C8102E', color: '#C8102E' }
                }
              >
                Get Started
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C8102E' }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF5F5' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked <span style={{ color: '#C8102E' }}>Questions</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">Yes! You can change your plan at any time. Changes take effect immediately, and billing is prorated.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, debit cards, and ACH transfers for enterprise customers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! All new customers get a 7-day free trial with full access to the Starter plan features.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my usage limits?</h3>
              <p className="text-gray-600">For the Starter plan, you'll be notified when approaching limits. Professional and Enterprise plans have unlimited usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <button 
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C8102E' }}
          >
            Contact Sales
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