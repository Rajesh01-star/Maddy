"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/photo10.jpg",
  // Add more image paths here
];

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-center flex flex-col items-center justify-center p-4">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {!showGallery ? "I'm Sorry, Maddy" : "Abb maaff bhi kar do yarr please"}
        </h1>
        <p className="mt-4 text-white text-md md:text-lg">
          {!showGallery
            ? "yeh niche wale button ko mat click karna... okay..."
            : "kar diya na click .... har barr jo mana karta hun wahi karti ho..."}
        </p>
      </motion.div>

      <button
        onClick={() => setShowGallery(true)}
        className="px-4 py-2 md:px-6 md:py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:bg-purple-50 transition"
      >
       {!showGallery ? "DO NOT CLICK ME" : "Patience naam ki cheez hi nahi hei" }
      </button>

      {showGallery && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md md:max-w-4xl mt-8"
        >
          <div className="relative min-h-[10rem]">
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
            >
              ←
            </button>
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="object-contain w-full h-96 max-h-full" // Adjusted to maintain aspect ratio
            />
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
            >
              →
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
