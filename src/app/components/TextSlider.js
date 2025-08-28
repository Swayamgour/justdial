import React, { useEffect, useState } from "react";

const TextSlider = () => {
    const texts = [

        {
            text: `'4.7 Crore+ '`,
            style: "Businesses"
        },
        {
            text: ` '5.9 Crore+ '`,
            style: " Products & Services"
        }
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-10 mt-2 flex items-center  font-bold   sm:text-xl md:text-xl lg:text-2xl  ">
            <span className="mr-2">Search across</span> {/* static content */}
            <div className="overflow-hidden h-10">
                <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${index * 40}px)` }} // 40px = height of line
                >
                    {texts.map((text, i) => (
                        <div key={i} className="h-10 flex items-center cursor-pointer">
                            {text.text} <span className="text-blue-600">{text.style}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextSlider;
