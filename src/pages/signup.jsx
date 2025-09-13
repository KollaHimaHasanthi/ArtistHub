import { useState, useEffect } from "react";
import Head from "next/head";

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
		const a = parseInt(age);
		if (isNaN(a) || a < 18) {
			alert("You must be at least 18 years old to sign up");
			return;
		}
		if (!phoneVerified) {
			alert("Please verify your phone number first");
			return;
		}
		if (!emailVerified) {
			alert("Please verify your email address first");
			return;
		}

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
	}

	return (
		<>
			<Head>
				<title>Sign Up</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="min-h-screen bg-gray-50 py-12 px-4" style={{ fontFamily: "Inter, sans-serif" }}>
				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 grid md:grid-cols-2 overflow-hidden md:min-h-[720px]">
					<div className="hidden md:block bg-emerald-50 md:h-full">
						<img src="/sign.jpg" alt="Sign up" className="h-full w-full object-cover" />
					</div>
					<div className="p-8 sm:p-10">
						<div className="text-center mb-10">
						<div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<h1 className="text-2xl font-semibold text-gray-900 mb-2">Create Your Account</h1>
						<p className="text-gray-500 text-sm">Please fill in your information to get started</p>
					</div>

					<form className="space-y-5" onSubmit={handleSubmit}>
						{/* Name Fields */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
								<input
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
									className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
								<input
									type="text"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
									className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								/>
							</div>
						</div>

						{/* Phone Number with Verification */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
							<div className="flex gap-3">
								<input
									type="tel"
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									required
									placeholder="+1 (555) 123-4567"
									className="flex-1 px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								/>
								<button
									type="button"
									onClick={handleVerifyPhone}
									className={`px-6 py-2.5 text-white rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
										phoneOtpVisible ? "bg-gray-500 hover:bg-gray-600" : "bg-emerald-600 hover:bg-emerald-700"
									}`}
								>
									{phoneOtpVisible ? "Resend" : "Verify"}
								</button>
							</div>
							<div className={`mt-3 ${phoneOtpVisible ? "" : "hidden"}`}>
								<input
									type="text"
									placeholder="Enter 6-digit OTP"
									value={phoneOtp}
									onChange={(e) => setPhoneOtp(e.target.value)}
									className={`w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 transition-colors bg-gray-50 focus:bg-white ${
										phoneVerified ? "border-green-500 bg-green-50" : "focus:ring-green-500 focus:border-green-500"
									}`}
									disabled={phoneVerified}
								/>
								<div className={`mt-2 text-green-600 font-medium text-sm ${phoneVerified ? "flex" : "hidden"} items-center`}>
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
									</svg>
									Phone verified successfully
								</div>
							</div>
						</div>

						{/* Email with Verification */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
							<div className="flex gap-3">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									placeholder="your@email.com"
									className="flex-1 px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								/>
								<button
									type="button"
									onClick={handleVerifyEmail}
									className={`px-6 py-2.5 text-white rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
										emailOtpVisible ? "bg-gray-500 hover:bg-gray-600" : "bg-emerald-600 hover:bg-emerald-700"
									}`}
								>
									{emailOtpVisible ? "Resend" : "Verify"}
								</button>
							</div>
							<div className={`mt-3 ${emailOtpVisible ? "" : "hidden"}`}>
								<input
									type="text"
									placeholder="Enter 6-digit OTP"
									value={emailOtp}
									onChange={(e) => setEmailOtp(e.target.value)}
									className={`w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 transition-colors bg-gray-50 focus:bg-white ${
										emailVerified ? "border-green-500 bg-green-50" : "focus:ring-green-500 focus:border-green-500"
									}`}
									disabled={emailVerified}
								/>
								<div className={`mt-2 text-green-600 font-medium text-sm ${emailVerified ? "flex" : "hidden"} items-center`}>
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
									</svg>
									Email verified successfully
								</div>
							</div>
						</div>

						{/* Password */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder="Create a strong password"
								className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
							/>
						</div>

						{/* Religion and Gender Row */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
								<select
									value={religion}
									onChange={(e) => setReligion(e.target.value)}
									required
									className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
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
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
								<select
									value={gender}
									onChange={(e) => setGender(e.target.value)}
									required
									className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								>
									<option value="">Select Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="non-binary">Non-binary</option>
									<option value="prefer-not-to-say">Prefer not to say</option>
								</select>
							</div>
						</div>

						{/* Age */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
							<input
								type="number"
								min={18}
								max={120}
								required
								value={age}
								onChange={(e) => setAge(e.target.value)}
								placeholder="Must be 18 or older"
								className={`w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white ${
									ageError ? "border-red-500" : ""
								}`}
							/>
							<div className={`mt-2 text-red-500 text-sm ${ageError ? "flex" : "hidden"} items-center`}>
								<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
								</svg>
								You must be at least 18 years old to sign up
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors mt-6"
						>
							Create Account
						</button>
					</form>

					<div className="mt-8 text-center">
						<p className="text-gray-500 text-sm">
							Already have an account? <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Sign in</a>
						</p>
					</div>
					</div>
				</div>
			</div>
		</>
	);
}


