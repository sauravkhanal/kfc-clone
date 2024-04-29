import React from "react";

function Footer() {
	return (
		<div className="bg-[#282d33] flex flex-col">
			<span className="flex justify-center py-10">
				<img
					src="https://assets.kfc.com.np/storage/uploads/images/FooterTMblack/63e64a94f01ae.png"
					alt="kfc logo"
                    className="w-24"
				/>
			</span>
			<span className="text-white font-bold items-center md:justify-around flex px-10 flex-col md:flex-row">
				<a className="hover:text-kfc cursor-pointer">About Us</a>
				<a className="hover:text-kfc cursor-pointer">Privacy Policy</a>
				<a className="hover:text-kfc cursor-pointer">Disclaimer</a>
				<a className="hover:text-kfc cursor-pointer">Terms and Conditions</a>
				<a className="hover:text-kfc cursor-pointer">FAQs</a>
				<a className="hover:text-kfc cursor-pointer">Feedback</a>
			</span>
			<span className="flex justify-center gap-10 py-10">
                <img src="https://kfc.com.np/assets/images/icons/facebook-icon.svg" alt="facebook" />
                <img src="https://kfc.com.np/assets/images/icons/instagram-icon.svg" alt="instagram" />
            </span>
			<span className="flex justify-center gap-5">
				<div className="bg-white w-8 h-20"></div>
				<div className="bg-white w-8 h-20"></div>
				<div className="bg-white w-8 h-20"></div>
			</span>
			<span className="bg-[#14141c] text-white font-bold flex flex-col md:flex-row justify-between items-center px-20 py-3">
                <p>©2024 <span className="text-kfc">KFC®</span>. All Rights Reserved</p>
                <span className="flex flex-row "><p>Powered by <span >Coffee</span> from Gritfeat</p></span>
            </span>
		</div>
	);
}

export default Footer;
