import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // This is where you'll integrate with your backend
    // POST to your authentication API
    setTimeout(() => {
      // Simulate API call
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Redirect to dashboard after successful login
      // window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold" style={{ color: '#C8102E' }}>CraftPoint GPU</Link>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link to="/support" className="text-gray-700 hover:text-gray-900">Support</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 font-semibold">
                Log In
              </Link>
              <Link 
                to="/signup"
                className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C8102E' }}
              >
                Sign Up
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <Link to="/" className="block py-2 text-gray-700">Home</Link>
              <Link to="/pricing" className="block py-2 text-gray-700">Pricing</Link>
              <Link to="/support" className="block py-2 text-gray-700">Support</Link>
              <Link to="/login" className="block py-2 text-gray-700">Log In</Link>
              <Link to="/signup" className="block py-2 text-gray-700">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#FFF5F5' }}>
              <Lock className="w-8 h-8" style={{ color: '#C8102E' }} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Log in to access your GPU dashboard</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" style={{ accentColor: '#C8102E' }} />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm font-semibold hover:underline" style={{ color: '#C8102E' }}>
                Forgot password?
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
              style={{ backgroundColor: '#C8102E' }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </>
              ) : (
                'Log In'
              )}
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-semibold hover:underline" style={{ color: '#C8102E' }}>
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By logging in, you agree to our{' '}
              <Link to="/terms" className="hover:underline" style={{ color: '#C8102E' }}>Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="hover:underline" style={{ color: '#C8102E' }}>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}