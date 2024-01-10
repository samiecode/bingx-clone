import Header from "./components/Header";
import PopularSpot from "./components/PopularSpot";

function App() {
	return (
		<>
			<Header />
			<div className="bg-primary h-10"></div>

			<section>
				<div className="max-w-7xl w-full px-10 py-16 space-y-4">
					<div className="flex justify-between">
						<p className="flex gap-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
								/>
							</svg>
							BingX 🤝 Chelsea FC | Empower the Future
						</p>
						<span className="flex items-center text-sm text-primary">
							More
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-3 h-3"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</span>
					</div>
					<div className="grid grid-cols-4 gap-6">
						<div className="h-[120px]">
							<img
								src="/event/event1.webp"
								alt=""
								className="rounded-xl border-2 border-black hover:border-primary"
							/>
						</div>
						<div className="h-[120px]">
							<img
								src="/event/event2.webp"
								alt=""
								className="rounded-xl border-2 border-black hover:border-primary"
							/>
						</div>
						<div className="h-[120px]">
							<img
								src="/event/event3.webp"
								alt=""
								className="rounded-xl border-2 border-black hover:border-primary"
							/>
						</div>
						<div className="h-[120px]">
							<img
								src="/event/event4.webp"
								alt=""
								className="rounded-xl border-2 border-black hover:border-primary"
							/>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div>
					<div className="max-w-7xl w-full px-10 flex flex-col gap-10">
						<h1 className="text-6xl max-w-xl font-medium text-gray-900 leading-tight">
							Capture Every Trading Opportunity
							<span className="text-primary">.</span>
						</h1>
						<div className="flex justify-between items-center">
							<div className="space-x-6">
								<a
									href="#"
									className="bg-gray-200 px-4 py-3 rounded-full"
								>
									Popular Spot
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									Popular Futures
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									Top Gainers
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									{" "}
									Indices
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									Commodities
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									Forex
								</a>
								<a href="#" className="px-4 py-3 rounded-full">
									Stocks
								</a>
							</div>
							<div>
								<a
									href="#_"
									className="flex items-center text-sm text-primary gap-2"
								>
									Market
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-3 h-3 text-black"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="m8.25 4.5 7.5 7.5-7.5 7.5"
										/>
									</svg>
								</a>
							</div>
						</div>
						<PopularSpot />
					</div>
				</div>
			</section>

			<section>
				<div className="max-w-7xl w-full px-10 py-20">
					<div className="bg-black py-20 px-5 rounded-2xl relative space-y-20">
						<h1 className="font-medium text-6xl text-white flex justify-center">
							Explore Our Products
							<span className="text-primary">.</span>
						</h1>
						<div className="text-white">
							<div className="w-2/5 space-y-10">
								<div className="space-y-16">
									<h1 className="text-[2.5rem] font-medium leading-[3rem]">
										Copy Trading: Invest Less, Earn More
									</h1>
									<div className="grid grid-cols-3 gap-10">
										<div className="flex flex-col">
											<span className="text-[2rem]">
												15,000+
											</span>
											<span className="text-base text-neutral-400">
												Elite Traders
											</span>
										</div>
										<div className="flex flex-col">
											<span className="text-[2rem]">
												38M+
											</span>
											<span className="text-base text-neutral-400">
												Copier Earnings
											</span>
										</div>
										<div className="flex flex-col">
											<span className="text-[2rem]">
												400M+
											</span>
											<span className="text-base text-neutral-400">
												Total Orders
											</span>
										</div>
									</div>
								</div>
								<button className="text-white rounded-full bg-primary px-8 font-medium text-base py-3 block h-[50px]">
									Learn More
								</button>
							</div>
							<div className="w-3/5 font-medium"></div>
						</div>
						<div className="grid grid-cols-3 gap-8 text-white pt-16 pb-10 border-t border-t-neutral-700">
							<div className="space-y-7">
								<div className="space-y-9">
									<div>
										<img src="/icon4.svg" alt="_icon" />
									</div>
									<div className="space-y-3">
										<h2 className="text-[2.65rem] font-medium">
											Spot
										</h2>
										<p className="text-neutral-400 text-base tracking-wider">
											Over{" "}
											<span className="font-medium text-white">
												700+
											</span>{" "}
											coins available. Buy and sell
											quickly with automatic calculation
											of average cost and PnL.
										</p>
									</div>
								</div>
								<div>
									<span className="transition duration-300 font-medium hover:text-neutral-400  flex gap-4 text-base items-center">
										Learn More{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
											/>
										</svg>
									</span>
								</div>
							</div>

							<div className="space-y-7">
								<div className="space-y-9">
									<div>
										<img src="/icon6.svg" alt="_icon" />
									</div>
									<div className="space-y-3">
										<h2 className="text-[2.65rem] font-medium">
											Futures
										</h2>
										<p className="text-neutral-400 text-base tracking-wider">
											Supports long/short positions with
											leverage and profit of up to{" "}
											<span className="font-medium text-white">
												150x
											</span>{" "}
											from market volatilities.
										</p>
									</div>
								</div>
								<div>
									<span className="transition duration-300 font-medium hover:text-neutral-400  flex gap-4 text-base items-center">
										Learn More{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
											/>
										</svg>
									</span>
								</div>
							</div>

							<div className="space-y-7">
								<div className="space-y-9">
									<div>
										<img src="/icon5.svg" alt="_icon" />
									</div>
									<div className="space-y-3">
										<h2 className="text-[2.65rem] font-medium">
											Grid Trading
										</h2>
										<p className="text-neutral-400 text-base tracking-wider">
											Create your personal trading
											strategy and profit{" "}
											<span className="font-medium text-white">
												24/7
											</span>{" "}
											with spot grid and futures grid
											trading.
										</p>
									</div>
								</div>
								<div>
									<span className="transition duration-300 font-medium hover:text-neutral-400  flex gap-4 text-base items-center">
										Learn More{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
						<img
							src="/curve.svg"
							alt="_img"
							className="absolute bottom-0 right-0"
						/>
					</div>
				</div>
			</section>

			<section>
				<div>
					<div className="max-w-7xl w-full px-16 py-20 flex flex-col gap-10">
						<h1 className="mx-auto text-6xl max-w-xl font-medium text-gray-900 leading-tight">
							Secure Your Assets
							<span className="text-primary">.</span>
						</h1>
						<div className="grid grid-cols-3 gap-14">
							<div className="flex flex-col items-center gap-8">
								<div className="h-22 w-22 border rounded-full flex justify-center items-center">
									<img
										src="/icon1.svg"
										alt="_icon"
										className="w-[40%]"
									/>
								</div>
								<div className="space-y-4">
									<h1 className="text-[22px] font-medium text-center">
										Compliance Matrix
									</h1>
									<p className="text-center text-base">
										A global digital services financial
										institution with branch offices in
										Canada, the EU, and Australia Regulated
										business and services in countries where
										it operates
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center gap-8">
								<div className="h-22 w-22 border rounded-full flex justify-center items-center">
									<img
										src="/icon2.svg"
										alt="_icon"
										className="w-[40%]"
									/>
								</div>
								<div className="space-y-4">
									<h1 className="text-[22px] font-medium text-center">
										Compliance Matrix
									</h1>
									<p className="text-center text-base">
										A global digital services financial
										institution with branch offices in
										Canada, the EU, and Australia Regulated
										business and services in countries where
										it operates
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center gap-8">
								<div className="h-22 w-22 border rounded-full flex justify-center items-center">
									<img
										src="/icon3.svg"
										alt="_icon"
										className="w-[40%]"
									/>
								</div>
								<div className="space-y-4">
									<h1 className="text-[22px] font-medium text-center">
										Compliance Matrix
									</h1>
									<p className="text-center text-base">
										A global digital services financial
										institution with branch offices in
										Canada, the EU, and Australia Regulated
										business and services in countries where
										it operates
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="max-w-7xl w-full px-10 flex flex-col gap-10">
					<div className="border-y py-20 flex">
						<div className="w-[45%] flex flex-col gap-6">
							<h1 className="font-medium text-6xl leading-tight text-gray-900">
								Get Started in 3 Minutes
								<span className="text-primary">.</span>
							</h1>
							<p>
								The easy way to use BingX with a better user
								experience
							</p>
							<button className="font-medium text-white bg-primary px-10 py-3 rounded-full w-fit">
								Learn More
							</button>
						</div>
						<div className="w-[55%] flex flex-col gap-6">
							<button className="bg-gray-100 flex items-center justify-between px-5 text-1xl h-24 rounded-xl font-medium">
								How to Buy Crypto With P2P Trading{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</button>
							<button className="bg-gray-100 flex items-center justify-between px-5 text-1xl h-24 rounded-xl font-medium">
								How to Get Started With Copy Trading{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</button>
							<button className="bg-gray-100 flex items-center justify-between px-5 text-1xl h-24 rounded-xl font-medium">
								How to Deposit and Withdraw on BingX{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="max-w-7xl w-full px-10 py-20 space-y-16">
					<h1 className="font-medium text-6xl leading-tight text-gray-900">
						Catch Us at the Biggest Crypto Events Around the World
						<span className="text-primary">.</span>
					</h1>
					<div className="grid grid-cols-3 gap-7">
						<div className="rounded-xl h-[395px] border relative">
							<img
								src="/1_5.webp"
								className="w-full h-full rounded-xl object-cover"
								alt=""
							/>
							<span className="font-medium absolute bottom-5 text-[26px] text-white px-6 leading-none">
								Future Blockchain Summit Dubai 2023
							</span>
						</div>
						<div className="rounded-xl h-[395px] border relative bg-black">
							<div className="h-[71%] w-full">
								<img
									src="/img/1_4.JPEG"
									className="w-full h-full rounded-t-xl object-cover"
									alt=""
								/>
							</div>
							<p className="text-white text-[26px] px-6 font-medium tracking-wider leading-8">
								European Blockchain Conference Barcelona 2023
							</p>
						</div>
						<div className="group rounded-xl h-[395px] border relative">
							<div className="h-1/2 p-6 flex items-end leading-8">
								<p className="text-[26px] tracking-wider font-medium">
									Token 2049 Singapore 2023
								</p>
							</div>
							<div className="h-1/2 w-full overflow-hidden rounded-b-xl">
								<img
									src="/img/3_5.jpeg"
									className="w-full h-full rounded-b-xl object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="bg-black px-14 pt-20 flex flex-col gap-10">
					<div className="max-w-7xl w-full flex flex-col items-center">
						<h1 className="text-6xl text-white font-medium">
							Trade<span className="text-primary">.</span> Anytime
							<span className="text-primary">.</span>
							Anywhere<span className="text-primary">.</span>
						</h1>
					</div>

					<div className="mx-[120px] flex flex-col gap-14">
						<div className="flex justify-between">
							<div className="cursor-pointer border border-neutral-800 rounded-lg flex items-center gap-4 px-4 py-2 w-fit hover:bg-neutral-800">
								<div>
									<img src="/apple-icon.svg" alt="_icon" />
								</div>
								<div className="flex flex-col">
									<span className="text-neutral-400 font-medium text-sm leading-none">
										Download on the
									</span>
									<span className="text-white text-1xl font-medium">
										AppStore
									</span>
								</div>
							</div>
							<div className="cursor-pointer border border-neutral-800 rounded-lg flex items-center gap-4 px-4 py-2 w-fit hover:bg-neutral-800">
								<div>
									<img
										src="/play-store-icon.svg"
										alt="_icon"
									/>
								</div>
								<div className="flex flex-col">
									<span className="text-neutral-400 font-medium text-sm leading-none">
										Available on the
									</span>
									<span className="text-white text-1xl font-medium">
										Google Play
									</span>
								</div>
							</div>
							<div className="cursor-pointer border border-neutral-800 rounded-lg flex items-center gap-4 px-4 py-2 w-fit hover:bg-neutral-800">
								<div>
									<img src="/code-icon.svg" alt="_icon" />
								</div>
								<div className="flex flex-col">
									<span className="text-neutral-400 font-medium text-sm leading-none">
										For developers
									</span>
									<span className="text-white text-1xl font-medium">
										API
									</span>
								</div>
							</div>
							<div className="cursor-pointer border border-neutral-800 rounded-lg flex items-center gap-4 px-4 py-2 w-fit hover:bg-neutral-800">
								<div>
									<img src="/qr-code-icon.svg" alt="_icon" />
								</div>
								<div className="flex flex-col">
									<span className="text-neutral-400 font-medium text-sm leading-none">
										Scan to download
									</span>
									<span className="text-white text-1xl font-medium">
										iOS & Andriod
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-14">
							<div className="w-[40%]">
								<img
									src="/trade-web.b63cd62.png"
									alt="_img"
									className=""
								/>
							</div>
							<div className="flex flex-col gap-6">
								<h1 className="text-white flex gap-2">
									<img src="/daimond.svg" alt="_icon" /> Sign
									up to claim rewards worth 5125 USDT
								</h1>
								<div className="flex items-center gap-4">
									<input
										type="text"
										name="email"
										placeholder="Enter Phone Number/Email"
										className="bg-transparent border border-neutral-700 py-3 text-sm h-14 px-3 rounded-md block font-medium hover:border-primary transition duration-300 w-80 outline-none focus:border-primary text-white"
									/>
									<button className="text-white rounded-full bg-primary px-6 font-medium text-sm py-3 block h-[50px]">
										Sign Up
									</button>
								</div>
								<div className="">
									<p className="text-neutral-300 flex gap-4 cursor-pointer">
										or continue with{" "}
										<span className="font-semibold text-white flex gap-2 items-center">
											<img
												src="/img/google.9f383e2.svg"
												alt=""
											/>
											Google
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section></section>

			<section>
				<div className="max-w-7xl w-full border-y px-10">
					<div className="flex w-full py-16">
						<div className="w-100 space-y-12">
							<div>
								<img
									src="/bingx-black.png"
									alt=""
									width="120"
								/>
							</div>
							<div className="space-y-8">
								<div className="space-y-4">
									<div className="flex gap-4">
										<img src="/telegram.svg" alt="_icon" />
										<img
											src="/discord-icon.svg"
											alt="_icon"
										/>
										<img
											src="/facebook-icon.svg"
											alt="_icon"
										/>
										<img src="/telegram.svg" alt="_icon" />
									</div>
									<div className="flex gap-4">
										<img
											src="/linkedin-icon.svg"
											alt="_icon"
										/>
										<img
											src="/medium-icon.svg"
											alt="_icon"
										/>
										<img
											src="/youtube-icon.svg"
											alt="_icon"
										/>
										<img src="/more.svg" alt="_icon" />
									</div>
								</div>
								<div className="text-black/70 block">
									© 2018-2024 BingX All <br /> rights reserved
								</div>
							</div>
						</div>
						<div className="grid grid-cols-4 w-full">
							<div className="space-y-4">
								<h1 className="text-[22px] font-medium">
									Platform Service
								</h1>
								<div className="flex gap-3 flex-col">
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Download App
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Trading Fees
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Price Analyzer
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Currency Converter
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										How to Buy Crypto
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										News
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Listing Application
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										P2P Merchant Application
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Signal Trading
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										TradingView
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										MT5
									</a>
								</div>
							</div>
							<div className="space-y-4">
								<h1 className="text-[22px] font-medium">
									Support
								</h1>
								<div className="flex gap-3 flex-col">
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Beginner's Guide
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Help Center
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Feedback
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										API Documentation
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										BingX Broker Program
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										BingX Verify
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										VIP Benefits
									</a>
								</div>
							</div>
							<div className="space-y-4">
								<h1 className="text-[22px] font-medium">
									Company
								</h1>
								<div className="flex gap-3 flex-col">
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										About Us
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Join Us
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										BingX Affiliate Program
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										100% Proof of Reserves
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Announcement Center
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										BingX Blog
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										BingX News
									</a>
								</div>
							</div>
							<div className="space-y-4">
								<h1 className="text-[22px] font-medium">
									Terms
								</h1>
								<div className="flex gap-3 flex-col">
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Customer Agreement
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Privacy Policy
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Disclaimer
									</a>
									<a
										href="#_"
										className="text-black/70 text-base"
									>
										Risk Notice
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="max-w-7xl w-full px-10 py-16 space-y-6">
					<h1>Risk Warning</h1>
					<p className="text-neutral-400 text-sm">
						Cryptocurrencies and their derivatives are innovative
						financial products with great volatility and high
						investment risks.
						<br />
						Although BingX is committed to providing users with
						easy-to-use trading tools, trading itself is still a
						highly sophisticated field. Trading digital assets and
						their derivatives are subject to high market risk and
						price volatility and may result in partial or total loss
						of account funds. You must carefully consider and
						exercise clear judgment to evaluate your financial
						situation and the aforementioned risks before using
						BingX Services. You shall be responsible for all losses
						arising therefrom. If necessary, please consult relevant
						professionals to make informed decisions before
						investing. By accessing, downloading, using or clicking
						on "I agree" to accept any BingX Services provided by
						BingX, you agree that you have read, understood and
						accepted all of the terms and conditions stipulated in
						BingX Terms of Use as well as our Privacy Policy.
					</p>
					<p className="text-neutral-400 text-sm">
						Trading by copying or replicating the trades of other
						traders involves a high level of risks, even when
						copying or replicating the top-performing traders. Past
						performance of a BingX community member is not a
						reliable indicator of his future performance. Content on
						BingX's trading platform is generated by members of its
						community and does not contain advice or recommendations
						by or on behalf of BingX.
					</p>
				</div>
			</section>
		</>
	);
}

export default App;
