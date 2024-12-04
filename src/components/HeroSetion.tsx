import React from 'react';
import Image from 'next/image';
import { TailwindcssButtons } from './TailwindCssButtons';

const images = [
  '/01.png',
  '/02.png',
  '/01.png',
  '/02.png',
];

const HeroSection: React.FC = () => {
  // Duplicate the images to create the infinite loop effect
  const infiniteImages = [...images, ...images];

  return (
    <section className="relative bg-hero text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="order-1 lg:w-1/2 text-center lg:text-left mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 md:text-6xl">
            Viral <span className='text-[#2CFBCD]'>Thumbnails</span> & <span className='text-[#2CFBCD]'>Titles</span> in Seconds
          </h1>
          <p className="text-lg lg:text-xl mb-6 ">
            No delays, no surprises, no hidden fees. Cancel anytime.
          </p>
          <TailwindcssButtons/>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="order-2 lg:w-1/2 overflow-hidden relative mb-8 lg:mb-0">
          <div className="carousel flex gap-4 animate-scroll">
            {infiniteImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[400px] flex-shrink-0 relative"
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .carousel {
          display: flex;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
