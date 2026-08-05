import React from 'react'
function EventGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-4xl">📷</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventGallery
