import { useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Default login for first-time users
      const defaultUser = {
        id: '1',
        name: 'Guest User',
        email: formData.email || 'guest@example.com',
        userType: 'guest',
        profile: {
          fullName: 'Guest User',
          dateOfBirth: '',
          about: '',
          skills: [],
          designation: '',
          languages: [],
          location: {
            country: '',
            state: '',
            city: ''
          },
          gender: '',
          currentRole: '',
          socialLinks: [],
          experience: [],
          achievements: [],
          verified: false
        }
      };

      login(defaultUser);
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className=" flex min-h-screen">
        <div className="w-full lg:w-1/2 flex items-center justify-center py-8 px-6 sm:px-8">
          <div className="w-full max-w-md">
            <div className="  p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                  Welcome back
                </h2>
                <p className="text-slate-600" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                  Sign in to your account
                </p>
              </div>
        
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-700" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="/forget" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                    style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>


                <div className="text-center pt-4">
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                    Don't have an account?{' '}
                    <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 rounded-bl-[8rem] relative bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="absolute inset-0 "></div>
          <img src="/gradient_2.jpg" alt="Login" className="absolute inset-0 h-full w-full object-cover " />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="text-center text-white p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>Welcome to our platform</h3>
              <p className="text-white/80 text-sm" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>Join thousands of creative professionals sharing their work</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

