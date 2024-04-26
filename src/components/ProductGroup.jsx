import React from "react";
import ProductCard from "./ProductCard";

function ProductGroup({ itemArray, groupTitle }) {
	return (
		<div className="bg-slate-100">
			<hr className="relative top-10" />
			<div className="flex flex-col gap-5 px-20 py-5  items-center justify-center">
				<p className="font-bold text-4xl font-national bg-slate-100 z-10 px-5">
					{groupTitle}
				</p>
				<div className="flex flex-wrap  justify-center">
					{itemArray.map((itemDetail) => (
						<ProductCard {...itemDetail} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductGroup;
