import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
/**
 *
 * @param {bool} param0 boolean: status of the drawer
 * @param {function} param1 function to toggle drawer open status
 * @returns
 */
function SlideDrawer({ open, onClose }) {
	return (
		<Drawer
			open={open}
			onClose={onClose}
			direction="left"
			className=""
			size={300}
		>
			<div className="p-5 flex flex-col gap-10">
				{/* cross button */}
				<span
					className="bg-kfc text-white text-xl absolute px-5 py-3 top-0 left-[300px] cursor-pointer"
					onClick={onClose}
				>
					X
				</span>

                {/* location */}
				<span className="bg-kfc rounded-md text-white flex gap-1 items-center px-3 py-1 h-12">
					<img
						src="https://kfc.com.np/assets/images/icons/location-icon-white.svg"
						alt="location"
					/>
					<p>Kathmandu</p>
				</span>

                {/* search */}

                <form className="flex">
                    <input placeholder="search" name="address" className="outline-none border border-kfc rounded-l-full px-5 py-4 w-44"/>
                    <button className="bg-kfc border border-kfc rounded-r-full p-2 flex justify-center items-center flex-grow text-3xl"><IoSearch className="text-white"/></button>
                </form>

                <span className="flex flex-col text-xl">
                    <a className="hover:text-kfc border-b-[1px] border-kfc pb-2 cursor-pointer">Home</a>
                    <a className="hover:text-kfc border-b-[1px] border-kfc pb-2 cursor-pointer">Menu</a>
                    <a className="hover:text-kfc border-b-[1px] border-kfc pb-2 cursor-pointer">Nearby Location</a>
                </span>

                <span className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">My Account</p>
                    <span className="flex items-center text-xl cursor-pointer"><RiDiscountPercentLine className="text-3xl"/>&nbsp;Offer</span>
                    <span className="flex items-center text-xl cursor-pointer"><img src="https://kfc.com.np/assets/images/icons/User.svg" className="w-8 h-8"/><a>&nbsp;Login</a><p>&nbsp;/&nbsp;</p><a>Register</a></span>
                </span>
			</div>
		</Drawer>
	);
}

export default SlideDrawer;
