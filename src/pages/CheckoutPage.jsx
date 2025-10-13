import { useState } from 'react';
import { Menu, X, Check, Lock, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    starter: {
      name: "Starter",
      monthlyPrice: 99,
      yearlyPrice: 950,
      gpu: "1x RTX 4090",
      features: ["24/7 GPU Access", "Up to 100 hours/month", "Standard Support", "API Access"]
    },
    professional: {
      name: "Professional",
      monthlyPrice: 299,
      yearlyPrice: 2870,
      gpu: "3x RTX 4090",
      features: ["24/7 GPU Access", "Unlimited hours", "Priority Support", "API Access", "Custom Docker Images"]
    },
    enterprise: {
      name: "Enterprise",
      monthlyPrice: 799,
      yearlyPrice: 7670,
      gpu: "8x RTX 4090",
      features: ["24/7 GPU Access", "Unlimited hours", "24/7 Priority Support", "API Access", "Dedicated Account Manager", "99.9% SLA"]
    }
  };

  const currentPlan = plans[selectedPlan];
  const price = billingCycle === 'monthly' ? currentPlan.monthlyPrice : currentPlan.yearlyPrice;
  const savings = billingCycle === 'yearly' ? (currentPlan.monthlyPrice * 12) - currentPlan.yearlyPrice : 0;

  const handleStripeCheckout = () => {
    setIsProcessing(true);
    
    // This is where you'd integrate with Stripe
    // Example Stripe integration:
    /*
    const stripe = await loadStripe('your_publishable_key');
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId: selectedPlan,
        billingCycle: billingCycle,
        priceId: 'price_xxx' // Your Stripe Price ID
      })
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
    */

    // Simulate redirect to Stripe Checkout
    setTimeout(() => {
      alert('Redirecting to Stripe Checkout...\n\nIn production, this will open Stripe\'s hosted checkout page.');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <a href="/support" className="block py-2 text-gray-700">Support</a>
              <a href="/dashboard" className="block py-2 text-gray-700">Dashboard</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Your <span style={{ color: '#C8102E' }}>Subscription</span>
          </h1>
          <p className="text-lg text-gray-600">
            Secure checkout powered by Stripe. Start using GPU power in minutes.
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Plan Selection */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Cycle Toggle */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Billing Cycle</h3>
                <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
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

              {/* Plan Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Plan</h3>
                <div className="space-y-4">
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedPlan === key
                          ? 'border-current bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={selectedPlan === key ? { borderColor: '#C8102E' } : {}}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                            {selectedPlan === key && (
                              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C8102E' }}>
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{plan.gpu}</p>
                          <div className="flex flex-wrap gap-2">
                            {plan.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold" style={{ color: '#C8102E' }}>
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </div>
                          <div className="text-sm text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Secure Checkout</h4>
                  <p className="text-sm text-blue-700">
                    Your payment is processed securely through Stripe. We never store your credit card information.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-semibold text-gray-900">{currentPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GPU</span>
                    <span className="font-semibold text-gray-900">{currentPlan.gpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Billing</span>
                    <span className="font-semibold text-gray-900 capitalize">{billingCycle}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold text-gray-900">${price}</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between mb-2">
                        <span className="text-green-600">Yearly Savings</span>
                        <span className="font-semibold text-green-600">-${savings}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold" style={{ color: '#C8102E' }}>
                        ${price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">What's Included:</h4>
                  {currentPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C8102E' }} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleStripeCheckout}
                  disabled={isProcessing}
                  className="w-full py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
                  style={{ backgroundColor: '#C8102E' }}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CreditCard className="w-4 h-4" />
                  <span>Powered by Stripe</span>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Lock className="w-8 h-8 mx-auto mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Secure Payment</h4>
                <p className="text-sm text-gray-600">256-bit SSL encryption</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Money-Back Guarantee</h4>
                <p className="text-sm text-gray-600">7-day full refund</p>
              </div>
              <div>
                <CreditCard className="w-8 h-8 mx-auto mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Billing</h4>
                <p className="text-sm text-gray-600">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}