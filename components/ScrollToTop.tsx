"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function ScrollToTop() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919243837546"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  )
}