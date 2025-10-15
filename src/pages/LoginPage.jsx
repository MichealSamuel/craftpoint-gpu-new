import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // ✅ For success message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      console.log('Login successful:', formData);
      setIsLoading(false);
      setShowToast(true);

      // Hide toast after 2 seconds and redirect to homepage
      setTimeout(() => {
        setShowToast(false);
        navigate('/home');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ✅ Success Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-out">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>Login Successful! Redirecting...</span>
        </div>
      )}

      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold" style={{ color: '#C8102E' }}>
            CraftPoint GPU
          </h1>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: '#FFF5F5' }}
            >
              <Lock className="w-8 h-8" style={{ color: '#C8102E' }} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Log in to access your GPU dashboard</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
          >
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
                  type={showPassword ? 'text' : 'password'}
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

            <button
              type="submit"
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
                Don’t have an account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold hover:underline"
                  style={{ color: '#C8102E' }}
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By logging in, you agree to our{' '}
              <Link to="/terms" className="hover:underline" style={{ color: '#C8102E' }}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="hover:underline" style={{ color: '#C8102E' }}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Simple animation styling */}
      <style>
        {`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: translateY(-10px); }
            10%, 90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-in-out {
            animation: fade-in-out 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
