import { useState } from 'react';
import { Menu, X, Activity, CreditCard, Server, Settings, LogOut, TrendingUp, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - this would come from your CRM API
  const userData = {
    name: "John Smith",
    email: "john@company.com",
    plan: "Professional",
    status: "Active"
  };

  const gpuUsage = {
    currentMonth: 247,
    totalHours: 500,
    percentage: 49.4
  };

  const activeGPUs = [
    {
      id: "GPU-001",
      type: "RTX 4090",
      status: "Running",
      uptime: "12h 34m",
      usage: 87
    },
    {
      id: "GPU-002",
      type: "RTX 4090",
      status: "Running",
      uptime: "8h 15m",
      usage: 92
    },
    {
      id: "GPU-003",
      type: "RTX 4090",
      status: "Idle",
      uptime: "0h 0m",
      usage: 0
    }
  ];

  const billingHistory = [
    {
      date: "Oct 1, 2025",
      amount: "$299.00",
      status: "Paid",
      invoice: "INV-2025-10"
    },
    {
      date: "Sep 1, 2025",
      amount: "$299.00",
      status: "Paid",
      invoice: "INV-2025-09"
    },
    {
      date: "Aug 1, 2025",
      amount: "$299.00",
      status: "Paid",
      invoice: "INV-2025-08"
    }
  ];

  const stats = [
    {
      label: "Total GPU Hours",
      value: "247h",
      icon: <Clock className="w-6 h-6" />,
      change: "+23%"
    },
    {
      label: "Active GPUs",
      value: "2/3",
      icon: <Server className="w-6 h-6" />,
      change: null
    },
    {
      label: "Avg. Performance",
      value: "89%",
      icon: <Activity className="w-6 h-6" />,
      change: "+5%"
    },
    {
      label: "Next Billing",
      value: "Nov 1",
      icon: <CreditCard className="w-6 h-6" />,
      change: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold" style={{ color: '#C8102E' }}>CraftPoint GPU</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-700">{userData.email}</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userData.name}</h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#C8102E' }}>
              {userData.plan} Plan
            </span>
            <span className="text-gray-600">Status: <span className="text-green-600 font-semibold">{userData.status}</span></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div style={{ color: '#C8102E' }}>{stat.icon}</div>
                {stat.change && (
                  <span className="text-sm font-semibold text-green-600 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'border-current text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={activeTab === 'overview' ? { borderColor: '#C8102E', color: '#C8102E' } : {}}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('gpus')}
              className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                activeTab === 'gpus'
                  ? 'border-current text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={activeTab === 'gpus' ? { borderColor: '#C8102E', color: '#C8102E' } : {}}
            >
              GPU Status
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                activeTab === 'billing'
                  ? 'border-current text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={activeTab === 'billing' ? { borderColor: '#C8102E', color: '#C8102E' } : {}}
            >
              Billing
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* GPU Usage Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GPU Usage This Month</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Hours Used</span>
                  <span className="font-semibold text-gray-900">{gpuUsage.currentMonth} / {gpuUsage.totalHours} hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ backgroundColor: '#C8102E', width: `${gpuUsage.percentage}%` }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                You've used {gpuUsage.percentage}% of your monthly allocation. Great usage this month!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left">
                <Zap className="w-8 h-8 mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-1">Start New Job</h4>
                <p className="text-sm text-gray-600">Launch a new GPU compute job</p>
              </button>
              
              <Link to="/pricing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left block">
                <TrendingUp className="w-8 h-8 mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-1">Upgrade Plan</h4>
                <p className="text-sm text-gray-600">Get more GPU power</p>
              </Link>
              
              <button className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left">
                <CreditCard className="w-8 h-8 mb-3" style={{ color: '#C8102E' }} />
                <h4 className="font-semibold text-gray-900 mb-1">Manage Billing</h4>
                <p className="text-sm text-gray-600">Update payment methods</p>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'gpus' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Active GPU Instances</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {activeGPUs.map((gpu, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${gpu.status === 'Running' ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div>
                      <div className="font-semibold text-gray-900">{gpu.id}</div>
                      <div className="text-sm text-gray-600">{gpu.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Uptime</div>
                      <div className="font-semibold text-gray-900">{gpu.uptime}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Usage</div>
                      <div className="font-semibold" style={{ color: gpu.usage > 80 ? '#C8102E' : '#10B981' }}>
                        {gpu.usage}%
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-colors"
                      style={{ borderColor: '#C8102E', color: '#C8102E' }}
                    >
                      {gpu.status === 'Running' ? 'Stop' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            {/* Current Plan */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Subscription</h3>
                  <p className="text-gray-600">Professional Plan - $299/month</p>
                </div>
                <Link
                  to="/pricing"
                  className="px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-colors"
                  style={{ borderColor: '#C8102E', color: '#C8102E' }}
                >
                  Change Plan
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                <p>Next billing date: November 1, 2025</p>
                <p>Payment method: •••• •••• •••• 4242</p>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Billing History</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {billingHistory.map((bill, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-semibold text-gray-900">{bill.amount}</div>
                        <div className="text-sm text-gray-600">{bill.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                        {bill.status}
                      </span>
                      <button className="text-sm font-semibold hover:underline" style={{ color: '#C8102E' }}>
                        Download Invoice
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}