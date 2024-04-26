import React from "react";
import { SlHandbag } from "react-icons/sl";

function ProductCard({
	productName,
	productDescription,
	productImage,
	productPrice,
}) {
	return (
		<div className=" group border bg-white hover:border-kfc transition rounded-md p-3 w-80 m-5 flex flex-col gap-5 font-pragati">
			{/* bg and product image */}
			<div className="bg-[url('https://kfc.com.np/background.86d1f00f31c0ae144880.webp')] rounded-md flex-grow-0">
				<img
					src={productImage}
					alt="tsp"
					className="group-hover:scale-110 transition"
				/>
			</div>

			{/* item name */}
			<span className="flex flex-grow-0 gap-1 items-center">
				<img
					src="https://kfc.com.np/assets/images/icons/non-veg.svg"
					alt="nov veg icon"
				/>
				<p className="font-bold text-xl">{productName}</p>
			</span>

			{/* description */}
			<p className="text-gray-600">{productDescription}</p>

			{/* price and add to cart */}
			<span className="flex justify-between items-center">
				<p className="font-bold">NRS {productPrice}</p>
				<button className="border border-kfc text-kfc rounded-lg bg-white hover:bg-kfc hover:text-white flex flex-row font-bold items-center py-3 px-2 gap-2">
					<SlHandbag className="text-xl" />
					<p>Add to Cart</p>
				</button>
			</span>
		</div>
	);
}

export default ProductCard;
