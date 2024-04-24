import React, { useEffect, useState } from "react";
/**
 *
 * @param {list} imageArray The list of uri of images to display
 * @returns an image carousel, that slides automatically
 */
function ImageCarousel({ imageArray }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const changeImage = () =>
		currentIndex < imageArray.length
			? setCurrentIndex(++currentIndex)
			: setCurrentIndex(0); // change the image

    useEffect(()=>{

        const timer = setTimeout(()=>{
            changeImage();
        }, 3000);

        return ()=> clearTimeout(timer);

    }, [currentIndex])
    

	return (
		<div className="w-lvw h-auto min-h-96">
			<img src={imageArray[currentIndex]} alt={"image " + currentIndex} />
			{imageArray.map((value, index) => {
				return (
					<span
						className={`h-3 w-3 rounded-full border-red-300 ${
							index == currentIndex
								? "bg-green-500"
								: "bg-green-300"
						}`}
					></span>
				);
			})}
		</div>
	);
}

export default ImageCarousel;
