"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComprehensiveCareSection({ careCategories, heading, path }) {
  const scrollContainer = useRef(null);



  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.offsetWidth; // scroll by container width
      if (direction === "left") {
        scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };
  const router = useRouter()


  return (
    <section
      className=" relative bg-cover bg-center lg:mx-8"
      style={{ backgroundImage: `url(${path})` }}

    >
      <div className=" mx-auto flex flex-col md:flex-row items-center px-6 py-12 gap-6">
        {/* Left Doctor Image */}
        <div className="flex-shrink-0 md:w-1/3 flex justify-center">
          {/* <Image
            src="/doctor/doctor-bg-web.avif"
            alt="Doctor"
            width={350}
            height={400}
            className="object-contain"
          /> */}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <div className=" mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h2>
            <p className="text-gray-600">Complete healthcare solutions for all your needs</p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-gray-700 text-xl" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-gray-700 text-xl" />
            </button>

            {/* Scrollable Cards */}
            <div
              ref={scrollContainer}
              className="flex overflow-x-auto scrollbar-hide gap-6 px-6 py-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {careCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/5 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => router.push('/RefrigeratorRepairServices')}

                >
                  <div className="h-36 bg-gray-100 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1 p-2">
                    <h3 className="text-sm text-center font-semibold text-gray-800 mb-1">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
