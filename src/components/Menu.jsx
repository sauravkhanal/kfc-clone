import React, { useRef } from "react";
import MenuItem from "./MenuItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Menu() {
	const items = [
		{ uri: "https://kfc.com.np/assets/images/deals.webp", name: "deals" },
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/6410039a13da6.webp",
			name: "Hot & Crispy",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641003c4791db.webp",
			name: "Chicken Buckets",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641003deb80c3.webp",
			name: "Burger",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/64100406aa627.webp",
			name: "Smoky Red",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/645b8291e02c7.webp",
			name: "Chicken Roll",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641004308c3be.webp",
			name: "Rice Meal",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/6410046748438.webp",
			name: "Snacks",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/645b8291e02c7.webp",
			name: "Chicken Roll",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641004308c3be.webp",
			name: "Rice Meal",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/6410046748438.webp",
			name: "Snacks",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/645b8291e02c7.webp",
			name: "Chicken Roll",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641004308c3be.webp",
			name: "Rice Meal",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/6410046748438.webp",
			name: "Snacks",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/645b8291e02c7.webp",
			name: "Chicken Roll",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/641004308c3be.webp",
			name: "Rice Meal",
		},
		{
			uri: "https://assets.kfc.com.np/storage/uploads/images/category/6410046748438.webp",
			name: "Snacks",
		},
	];

	const menuRef = useRef(null);

	const scrollLeft = () => {
		if (menuRef.current) {
			menuRef.current.scrollBy({
				left: -244,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (menuRef.current) {
			menuRef.current.scrollBy({
				left: 244, // Adjust scroll distance as needed
				behavior: "smooth", // Add smooth scrolling effect
			});
		}
	};

	return (
		<div className="my-10">
			<span className="flex items-center justify-center">
				<div
					className="text-2xl rounded-full shadow-md shadow-slate-500  border p-2 text-black bg-white hover:text-white hover:bg-kfc hover:border-kfc transition-colors relative left-1"
					onClick={scrollLeft}
				>
					<FaChevronLeft />
				</div>

				<div
					ref={menuRef}
					// width of container is 56 ie 224px, gap is 5 ie 20px
					// sm: 640px = fits 2
					//md: 768px = fits 3
					//lg: 1024px 4
					//xl 1280px 5
					className="flex flex-row overflow-x-scroll scroll-m-0 no-scrollbar w-56 sm:w-[468px] max-w:w-[712px] lg:w-[956px] xl:w-[1200px] "
				>
					<div className="flex flex-col">
						<h2 className="text-3xl font-bold pb-5">Explore Menu</h2>
						<div className="flex flex-row flex-nowrap gap-5 flex-shrink-0">
							{items.map(({ uri, name }, index) => (
								<MenuItem
									key={index}
									imageURI={uri}
									name={name}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="text-2xl rounded-full shadow-md shadow-slate-500  border p-2 text-black bg-white hover:text-white hover:bg-kfc hover:border-kfc transition-colors relative right-1"
				onClick={scrollRight} 
				>
					<FaChevronRight />
				</div>
			</span>
		</div>
	);
}

export default Menu;
