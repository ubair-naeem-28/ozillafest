import React from 'react'
function SponsorshipTierCard({ tier }) {
  return (
    <div className={`bg-gradient-to-br ${tier.color} rounded-lg shadow-lg p-6 text-white`}>
      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
      <p className="text-xl font-semibold mb-4">{tier.price}</p>
      <p className="text-sm opacity-90 mb-6">{tier.description}</p>
      
      <ul className="space-y-2 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-white text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Contact for Details
      </button>
    </div>
  )
}

export default SponsorshipTierCard
