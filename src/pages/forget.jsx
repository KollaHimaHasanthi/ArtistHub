import { useState } from "react";
import Head from "next/head";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [sent, setSent] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!email) return;
		setIsSubmitting(true);
		try {
			// Simulate request
			await new Promise((r) => setTimeout(r, 900));
			setSent(true);
			alert("If an account exists for this email, a reset link has been sent.");
			setEmail("");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<Head>
				<title>Forgot Password</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div className="min-h-screen bg-gray-50 py-12 px-4" style={{ fontFamily: "Inter, sans-serif" }}>
				<div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 grid md:grid-cols-2 overflow-hidden md:min-h-[560px]">
					<div className="hidden md:block bg-emerald-50 md:h-full">
						<img src="/sign.jpg" alt="Forgot password" className="h-full w-full object-cover" />
					</div>
					<div className="p-8 sm:p-10">
						<div className="text-center mb-10">
							<div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21a7 7 0 10-14 0h14z" />
								</svg>
							</div>
							<h1 className="text-2xl font-semibold text-gray-900 mb-2">Forgot your password?</h1>
							<p className="text-gray-500 text-sm">Enter your email and we'll send you a reset link.</p>
						</div>

						<form className="space-y-5" onSubmit={handleSubmit}>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									placeholder="you@example.com"
									className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors mt-2"
							>
								{isSubmitting ? "Sending..." : "Send reset link"}
							</button>

							{sent && (
								<p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md p-3">
									Check your inbox for a password reset link.
								</p>
							)}
						</form>

						<div className="mt-8 text-center">
							<p className="text-gray-500 text-sm">
								Remember your password? <a href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">Sign in</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


