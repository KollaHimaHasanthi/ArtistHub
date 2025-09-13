import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, Phone, User, Calendar, Globe, Users } from "lucide-react";

export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [religion, setReligion] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");

	const [phoneOtpVisible, setPhoneOtpVisible] = useState(false);
	const [emailOtpVisible, setEmailOtpVisible] = useState(false);
	const [phoneOtp, setPhoneOtp] = useState("");
	const [emailOtp, setEmailOtp] = useState("");
	const [phoneVerified, setPhoneVerified] = useState(false);
	const [emailVerified, setEmailVerified] = useState(false);
	const [ageError, setAgeError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const a = parseInt(age);
		if (!isNaN(a)) {
			setAgeError(a < 18);
		} else {
			setAgeError(false);
		}
	}, [age]);

	function handleVerifyPhone() {
		if (!phoneNumber) {
			alert("Please enter a phone number first");
			return;
		}
		setPhoneOtpVisible(true);
		alert("OTP sent to " + phoneNumber + "\nDemo OTP: 123456");
	}

	function handleVerifyEmail() {
		if (!email) {
			alert("Please enter an email address first");
			return;
		}
		setEmailOtpVisible(true);
		alert("OTP sent to " + email + "\nDemo OTP: 654321");
	}

	useEffect(() => {
		if (phoneOtp === "123456") {
			setPhoneVerified(true);
		}
	}, [phoneOtp]);

	useEffect(() => {
		if (emailOtp === "654321") {
			setEmailVerified(true);
		}
	}, [emailOtp]);

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		
		const a = parseInt(age);
		if (isNaN(a) || a < 18) {
			alert("You must be at least 18 years old to sign up");
			setIsLoading(false);
			return;
		}
		if (!phoneVerified) {
			alert("Please verify your phone number first");
			setIsLoading(false);
			return;
		}
		if (!emailVerified) {
			alert("Please verify your email address first");
			setIsLoading(false);
			return;
		}

		// Simulate API call
		setTimeout(() => {
			const formData = {
				firstName,
				lastName,
				phoneNumber,
				email,
				religion,
				gender,
				age: a,
			};

			alert(
				"Account created successfully!\n\nWelcome, " +
					formData.firstName +
					" " +
					formData.lastName +
					"!"
			);

			// reset
			setFirstName("");
			setLastName("");
			setPhoneNumber("");
			setEmail("");
			setPassword("");
			setReligion("");
			setGender("");
			setAge("");
			setPhoneOtpVisible(false);
			setEmailOtpVisible(false);
			setPhoneVerified(false);
			setEmailVerified(false);
			setPhoneOtp("");
			setEmailOtp("");
			setIsLoading(false);
		}, 1000);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<div className=" flex min-h-screen">
				<div className="w-full lg:w-1/2 flex items-center justify-center py-1 px-6 sm:px-8">
					<div className="w-full max-w-xl">
						<div className="p-4">
							<div className="text-center mb-3">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
									<User className="h-8 w-8 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
									Create Your Account
								</h2>
								<p className="text-slate-600" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
									Please fill in your information to get started
								</p>
							</div>

							<form className="space-y-6" onSubmit={handleSubmit}>
								{/* Name Fields */}
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											First Name
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
												<User className="h-5 w-5 text-slate-400" />
											</div>
											<input
												type="text"
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
												required
												className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
												placeholder="First name"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Last Name
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
												<User className="h-5 w-5 text-slate-400" />
											</div>
											<input
												type="text"
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
												required
												className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
												placeholder="Last name"
											/>
										</div>
									</div>
								</div>

								{/* Phone Number and Email in Single Row */}
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
									{/* Phone Number with Verification */}
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Phone Number
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<Phone className="h-4 w-4 text-slate-400" />
											</div>
											<input
												type="tel"
												value={phoneNumber}
												onChange={(e) => setPhoneNumber(e.target.value)}
												required
												placeholder="+1 (555) 123-4567"
												className="w-full pl-10 pr-20 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
											/>
											<button
												type="button"
												onClick={handleVerifyPhone}
												className={`absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
													phoneOtpVisible 
														? "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200" 
														: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-sm hover:shadow-md"
												}`}
												style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
											>
												{phoneOtpVisible ? "Resend" : "Verify"}
											</button>
										</div>
										<div className={`mt-3 ${phoneOtpVisible ? "" : "hidden"}`}>
											<div className="relative">
												<input
													type="text"
													placeholder="Enter 6-digit OTP"
													value={phoneOtp}
													onChange={(e) => setPhoneOtp(e.target.value)}
													className={`w-full px-4 py-2.5 border-2 rounded-2xl text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-0 transition-all duration-200 text-center tracking-widest font-mono ${
														phoneVerified 
															? "border-green-400 bg-green-50 text-green-700" 
															: "border-slate-200 bg-white hover:border-blue-300 focus:border-blue-400"
													}`}
													disabled={phoneVerified}
												/>
												{phoneVerified && (
													<div className="absolute right-3 top-1/2 -translate-y-1/2">
														<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
															<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
															</svg>
														</div>
													</div>
												)}
											</div>
											<div className={`mt-2 text-green-600 font-medium text-sm ${phoneVerified ? "flex" : "hidden"} items-center justify-center`} style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
												<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
												</svg>
												Phone verified successfully
											</div>
										</div>
									</div>

									{/* Email with Verification */}
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Email Address
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<Mail className="h-4 w-4 text-slate-400" />
											</div>
											<input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
												placeholder="your@email.com"
												className="w-full pl-10 pr-20 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
											/>
											<button
												type="button"
												onClick={handleVerifyEmail}
												className={`absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
													emailOtpVisible 
														? "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200" 
														: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-sm hover:shadow-md"
												}`}
												style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
											>
												{emailOtpVisible ? "Resend" : "Verify"}
											</button>
										</div>
										<div className={`mt-3 ${emailOtpVisible ? "" : "hidden"}`}>
											<div className="relative">
												<input
													type="text"
													placeholder="Enter 6-digit OTP"
													value={emailOtp}
													onChange={(e) => setEmailOtp(e.target.value)}
													className={`w-full px-4 py-2.5 border-2 rounded-2xl text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-0 transition-all duration-200 text-center tracking-widest font-mono ${
														emailVerified 
															? "border-green-400 bg-green-50 text-green-700" 
															: "border-slate-200 bg-white hover:border-blue-300 focus:border-blue-400"
													}`}
													disabled={emailVerified}
												/>
												{emailVerified && (
													<div className="absolute right-3 top-1/2 -translate-y-1/2">
														<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
															<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
															</svg>
														</div>
													</div>
												)}
											</div>
											<div className={`mt-2 text-green-600 font-medium text-sm ${emailVerified ? "flex" : "hidden"} items-center justify-center`} style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
												<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
												</svg>
												Email verified successfully
											</div>
										</div>
									</div>
								</div>

								{/* Password */}
								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Password
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
											<Lock className="h-5 w-5 text-slate-400" />
										</div>
										<input
											type={showPassword ? 'text' : 'password'}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
											placeholder="Create a strong password"
											className="w-full pl-12 pr-12 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
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

								{/* Country and Gender Row */}
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Country
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
												<Globe className="h-5 w-5 text-slate-400" />
											</div>
											<select
												value={religion}
												onChange={(e) => setReligion(e.target.value)}
												required
												className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white appearance-none"
											>
												<option value="">Select Country</option>
												<option value="united-states">United States</option>
												<option value="canada">Canada</option>
												<option value="united-kingdom">United Kingdom</option>
												<option value="india">India</option>
												<option value="australia">Australia</option>
												<option value="nigeria">Nigeria</option>
												<option value="kenya">Kenya</option>
												<option value="germany">Germany</option>
												<option value="france">France</option>
												<option value="other">Other</option>
												<option value="prefer-not-to-say">Prefer not to say</option>
											</select>
										</div>
									</div>
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Gender
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
												<Users className="h-5 w-5 text-slate-400" />
											</div>
											<select
												value={gender}
												onChange={(e) => setGender(e.target.value)}
												required
												className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white appearance-none"
											>
												<option value="">Select Gender</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="non-binary">Non-binary</option>
												<option value="prefer-not-to-say">Prefer not to say</option>
											</select>
										</div>
									</div>
								</div>

								{/* Age */}
								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Age
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
											<Calendar className="h-5 w-5 text-slate-400" />
										</div>
										<input
											type="number"
											min={18}
											max={120}
											required
											value={age}
											onChange={(e) => setAge(e.target.value)}
											placeholder="Must be 18 or older"
											className={`w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white ${
												ageError ? "border-red-500" : ""
											}`}
										/>
									</div>
									<div className={`mt-2 text-red-500 text-sm ${ageError ? "flex" : "hidden"} items-center`} style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
										</svg>
										You must be at least 18 years old to sign up
									</div>
								</div>

								{/* Submit Button */}
								<div>
									<button
										type="submit"
										disabled={isLoading}
										className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
										style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
									>
										{isLoading ? 'Creating Account...' : 'Create Account'}
									</button>
								</div>

								<div className="text-center pt-4">
									<p className="text-sm text-slate-600" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Already have an account?{' '}
										<a href="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											Sign in
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="hidden lg:block w-1/2 rounded-bl-[8rem] relative bg-gradient-to-br from-slate-900 to-slate-800">
					<div className="absolute inset-0"></div>
					<img src="/gradient_2.jpg" alt="Sign up" className="absolute inset-0 h-full w-full object-cover" />
					<div className="absolute inset-0 flex items-center justify-center">
						{/* Optional: Add signup-specific content here */}
					</div>
				</div>
			</div>
		</div>
	);
}


