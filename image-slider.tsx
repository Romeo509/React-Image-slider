"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const images = [
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
]

export default function ImageSlider() {
  const [expandedIndex, setExpandedIndex] = useState(2)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Amazing Slider</h1>
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        {images.map((src, index) => (
          <div
            key={index}
            className={cn(
              "h-16 md:h-96 bg-cover bg-center rounded-3xl transition-all duration-500 ease-in-out cursor-pointer m-2",
              expandedIndex === index ? "md:w-3/4" : "md:w-1/4"
            )}
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => setExpandedIndex(index)}
          />
        ))}
      </div>
      <p className="text-xl font-semibold text-white mt-8">React + Tailwind CSS</p>
    </div>
  )
}
