import React from 'react'
function ArtistLineup({ artists }) {
  return (
    <div className="space-y-6">
      {artists.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.artists.map((artist, artistIndex) => (
              <div key={artistIndex} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{artist.icon}</div>
                <h4 className="font-semibold text-gray-800">{artist.name}</h4>
                <p className="text-sm text-purple-600">{artist.genre}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArtistLineup
