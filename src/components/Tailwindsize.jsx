import React from "react";

function Tailwindsize() {
	return (
		<>
			<p class="text-2xl fixed top-16 font-black md:hidden text-yellow-400 stroke-black ">
				small
			</p>
			<p class="text-2xl fixed top-16 font-black hidden lg:block text-yellow-400 stroke-black">
				large
			</p>
			<p class="text-2xl fixed top-16 font-black hidden md:block lg:hidden text-yellow-400 stroke-black">
				medium
			</p>
		</>
	);
}

export default Tailwindsize;
