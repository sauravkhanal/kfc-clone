import React, { useEffect, useState } from "react";

function ImageCarousel({ imageArray }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = () => {
        currentIndex < imageArray.length - 1
            ? setCurrentIndex(currentIndex + 1)
            : setCurrentIndex(0);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            changeImage();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="relative flex justify-center w-full h-auto transition">
            <img
                src={imageArray[currentIndex]}
                alt={`image ${currentIndex}`}
                className=""
            />
            <div className="absolute bottom-4 md:bottom-7 lg:bottom-10 z-10 flex gap-2">
                {imageArray.map((_, index) => (
                    <button
                        key={index}
                        className={` border h-3 w-3 rounded-full overflow-hidden ${
                            index === currentIndex ? "bg-red-500" : "bg-gray-300"
                        }`}
                        onClick={()=>setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;
