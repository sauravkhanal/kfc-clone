import React, { useState } from "react";

import { IoMenu, IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import SlideDrawer from "./SlideDrawer";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex justify-center items-center border-b-2 h-[88px] p-[14px]  lg:px-40">
			{/* <span className="fixed top-0 left-0 bg-red-500 opacity-25 h-20 w-20 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500"></span> */}
			{/* nav items */}
			<div className="flex flex-grow items-center justify-between   gap-20 h-[1200px]:gap-40 ">
				<span className="flex flex-grow xl:flex-grow-0  items-center gap-8">
					{/* kfc logo */}
					<img
						src="src/assets/images/kfc_logo.jpg"
						alt="KFC logo"
						className="h-14"
					/>

					{/* location */}

					<div className="relative items-center hidden xl:flex">
						<span className="flex items-center pl-5 rounded-full bg-slate-100 w-48 h-14">
							<span>
								<img
									src="https://kfc.com.np/assets/images/icons/location-icon.png"
									alt="enter delivery address"
									className="w-5"
								/>
							</span>
							<p className="pl-2 text-gray-400 text-xl">
								Kathmandu
							</p>
						</span>

						{/* <input
						className="outline-none rounded-full bg-slate-100 w-48 h-14"
						// placeholder="Enter Delivery Address"
					/> */}
					</div>
				</span>

				{/* home menu locations */}

				<span className="hidden xl:flex text-xl font-semibold  gap-6  min-w-80">
					<a href="" className="text-red-500">
						Home
					</a>
					<a href="" className="hover:text-red-500">
						Menu
					</a>
					<a href="" className="hover:text-red-500">
						Nearby Location
					</a>
				</span>

				{/* icon container */}
				<div className=" flex justify-between *:px-5">
					{/* search and offer */}
					<span className="hidden xl:flex gap-5">
						<IoSearch className="h-8 w-8 hover:text-red-500 mr-5" />
						<span className="flex text-xl font-semibold  hover:text-red-500 gap-2">
							<RiDiscountPercentLine className="h-8 w-8 " />
							<p>offer</p>
						</span>
					</span>

					{/* login register */}
					<span className="hidden xl:flex text-xl font-semibold  items-center gap-3">
						<span className="flex hover:text-red-500 gap-1">
							<CgProfile className="h-8 w-8 " />
							<p>Login</p>
						</span>
						<p>/</p>
						<p className="hover:text-red-500">Register</p>
					</span>

					{/* basket and menu icon*/}
					<span className="flex gap-4">
						<span className="flex gap-1 text-xl font-semibold hover:text-red-500">
							<img
								src="https://kfc.com.np/assets/images/basket.svg"
								alt="basket"
								className="w-8 h-8"
							/>
							<p className="hidden xl:flex">Cart</p>
						</span>

						<IoMenu
							onClick={toggleDrawer}
							className="h-8 w-8 hover:bg-gray-200 xl:hidden"
						/>
						<SlideDrawer open={isOpen} onClose={toggleDrawer} direction={"left"}/>
						{/* <Drawer
							open={isOpen}
							onClose={toggleDrawer}
							direction="left"
							className=""
						>
							<span
								className="bg-red-600 text-white absolute px-2 -right-7"
								onClick={toggleDrawer}
							>
								X
							</span>
							<h1>Here lies the menu items inside drawer</h1>
						</Drawer> */}
					</span>
				</div>
			</div>
		</nav>
	);
}
