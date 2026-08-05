import React from 'react'
import PageHeader from '../../components/common/PageHeader'

function PrismFest2023Page() {
  const highlights = [
    'Audience journey model structured from Discover to Remember',
    'Activation-first approach defined for brand interaction',
    'Content-led visibility strategy designed for social amplification',
    'Sponsor touchpoint map finalized for venue integration'
  ]

  return (
    <div>
      <PageHeader title="Module 2023" subtitle="Pre-Campaign Strategy Overview" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edition Summary</h2>
        <p className="text-gray-600 mb-4">
          This module captures foundational strategy themes that shaped the full Ozilla sponsorship journey,
          including activation architecture and audience behavior planning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div key={item} className="bg-purple-50 rounded-lg p-4 text-gray-700">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrismFest2023Page
