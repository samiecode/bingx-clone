import { useEffect, useState } from "react";

function Header() {
	const [atTop, setAtTop] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setAtTop(window.scrollY > 50 ? false : true);
		});
    }, [window.scrollY]);
    
	return (
		<section className="bg-black ">
			<div className="max-w-7xl w-full">
				<div
					className={`${
						!atTop &&
						"bg-white transition duration-300 ease-in-out border-b border-b-gray-200"
					} flex items-center justify-between h-14 px-6 fixed z-50 w-full`}
				>
					<div className="relative flex h-full gap-8">
						<a href="#_" className="flex items-center font-medium">
							<svg
								width="76"
								height="24"
								viewBox="0 0 76 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M20.17 4.32c1.19 0 2.16-.97 2.16-2.16C22.33.97 21.36 0 20.17 0c-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16zm-4.81 3.254a4.425 4.425 0 0 1-1.114 3.11v.01c.596.403 2.074 1.507 2.074 3.629 0 2.428-1.987 4.406-4.426 4.406H0V3.37h10.838c2.381 0 4.407 1.843 4.522 4.205zm-3.85.307c0-1.075-.892-1.555-1.91-1.555H3.84v3.062H9.6c.998 0 1.9-.441 1.91-1.507zm-7.69 4.464l.02 3.427v-.01h6.72c.989 0 1.9-.643 1.92-1.708 0-1.075-.902-1.709-1.92-1.709H3.82zM18.25 5.28h3.84v13.44h-3.84V5.28zm20.63 6.307c0-3.514-2.4-5.75-5.28-6.22a8.067 8.067 0 0 0-1.114-.087c-1.238 0-2.707.23-4.166.96v-.96h-3.84v13.44h3.84v-6.74c0-2.697 1.574-3.667 3.36-3.667 1.92 0 3.36 1.268 3.36 3.668v6.739h3.84v-7.133zm27.677-3.36C63.562 4.953 59.74 4.32 57.61 4.32v3.984c1.574 0 4.416.49 6.499 3.206-2.083 2.717-4.925 3.207-6.5 3.207V18.7c2.132 0 5.953-.634 8.948-3.908 3.1 3.293 6.633 3.908 8.841 3.908v-3.984c-1.507 0-4.099-.384-6.422-3.207 2.323-2.822 4.925-3.206 6.422-3.206V4.32c-2.208 0-5.74.614-8.841 3.907zM51.84 6.269v-.99h3.83v11.8c0 2.15-1.104 6.92-7.881 6.92-3.399 0-6.202-1.4-7.479-3.35l2.88-1.93c.576.788 2.093 1.92 4.32 1.92 3.514 0 4.32-2.418 4.32-3.56-1.056.748-2.534 1.16-4.435 1.16-3.677 0-7.075-3.004-7.075-6.844 0-3.84 3.427-6.115 7.085-6.115 2.217 0 3.878.72 4.435.989zm-7.68 5.328c0 1.814 1.718 3.283 3.84 3.283 2.121 0 3.84-1.469 3.84-3.283 0-1.815-1.719-3.284-3.84-3.284-2.122 0-3.84 1.47-3.84 3.284z"
									fill="#fff"
								/>
							</svg>
						</a>

						<nav className="max-md:hidden flex flex-wrap items-center text-base text-gray-50 md:border-gray-200 space-x-6 *:text-sm *:font-medium *:leading-6 *:text-gray-50  *:tracking-wider *:border-b-4 *:border-b-transparent *:h-full *:flex *:items-center *:transition *:duration-400 *:relative">
							<div className="hover:border-primary relative  group">
								Buy
								<span>Crypto</span>
								<div className="absolute top-0 left-0 transition translate-y-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform py-3">
									<ul className="drop-shadow-lg bg-white space-y-2 p-4 rounded-xl *:min-w-64 *:p-2 *:rounded-md">
										<li className="hover:bg-neutral-100">
											<a
												href="#"
												className="flex items-center gap-5"
											>
												<span>
													<img
														src="/plus.svg"
														alt="_icon"
													/>
												</span>
												<div className="flex flex-col">
													<h2 className="text-black flex gap-2 items-center text-sm tracking-wider">
														Quick Buy{" "}
														<img
															src="/new.png"
															alt="_icon"
															className="w-6"
														/>
													</h2>
													<p className="text-[12px] leading-none text-neutral-400 font-normal">
														Fast and accessible
														transactions
													</p>
												</div>
											</a>
										</li>
										<li className="hover:bg-neutral-100">
											<a
												href="#"
												className="flex items-center gap-5"
											>
												<span>
													<img
														src="/peer.svg"
														alt="_icon"
													/>
												</span>
												<div className="flex flex-col">
													<h2 className="text-black flex items-center text-sm tracking-wider">
														P2P Trading
													</h2>
													<p className="leading-none text-[12px] text-neutral-400 font-normal">
														Myriads of merchants
														with better price
													</p>
												</div>
											</a>
										</li>
										<li className="hover:bg-neutral-100">
											<a
												href="#"
												className="flex items-center gap-5"
											>
												<span>
													<img
														src="/deposit.svg"
														alt="_icon"
													/>
												</span>
												<div className="flex flex-col">
													<h2 className="text-black flex items-center text-sm tracking-wider">
														Bank Deposit
														<img
															src="/img/promo.4d275e4.png"
															alt="_icon"
															className="w-10"
														/>
													</h2>
													<p className="leading-tight text-[12px] text-neutral-400 font-normal">
														Deposit via bank
														transfer or online
														payments
													</p>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<a href="#_" className="hover:border-primary">
								Markets
							</a>
							<a href="#_" className="hover:border-primary">
								Spot
							</a>
							<a
								href="#_"
								className="text-sm font-medium leading-6 text-gray-50 tracking-wider flex items-center gap-1 border-b-4 border-b-transparent hover:border-primary h-full transition duration-400"
							>
								Derivatives
								<img
									src="/img/hot.52184ba.png"
									alt="_Icon"
									width="15"
								/>
							</a>
							<a href="#_" className="hover:border-primary">
								Copy Trading
							</a>
							<a href="#_" className="hover:border-primary">
								Wealth
							</a>
						</nav>
					</div>

					<div className="flex items-center space-x-4 h-full">
						<a
							href="#"
							className="text-sm font-medium px-4 py-1 rounded-full leading-6 text-gray-50 whitespace-no-wrap transition duration-150 ease-in-out hover:bg-gray-700"
						>
							Sign in
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center px-4 py-1 text-sm font-medium leading-6 text-white whitespace-no-wrap bg-primary border border-transparent rounded-full shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
							data-rounded="rounded-md"
							data-primary="indigo-600"
						>
							Sign up
						</a>
					</div>
				</div>

				<div className="flex px-12 items-center justify-between w-full">
					<div className="space-y-3">
						<div className="h-[40px] w-[147px]">
							<img src="/img/ship-logo.13a827b.png" alt="" />
						</div>
						<div className="text-white space-y-4">
							<h1 className="font-medium text-[2.65rem] tracking-wider">
								Empower the Future
							</h1>
							<p className="uppercase text-1xl text-neutral-400">
								OFFICIAL CRYPTO Exchange partner of chelsea fc
							</p>
							<a
								href="#_"
								className="block w-fit bg-primary font-medium rounded-full px-6 py-3 text-base"
							>
								Trade
							</a>
						</div>
					</div>
					<div className="w-[59%] relative">
						<div className="absolute w-[120px] right-0 top-0 bg-black-gradient z-20 h-full"></div>
						<img src="/PCbanner_CFC.png" alt="" className="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
