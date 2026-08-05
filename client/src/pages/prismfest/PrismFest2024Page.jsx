import React from 'react'
import PageHeader from '../../components/common/PageHeader'

function PrismFest2024Page() {
  const stats = [
    { label: 'Events Delivered', value: '25+' },
    { label: 'Instagram Reach', value: '20-40M' },
    { label: 'Meta Audience', value: '100-200M' },
    { label: 'Campus Ambassadors', value: '100+' }
  ]

  return (
    <div>
      <PageHeader title="Module 2024-25" subtitle="Scale and Reach Overview" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edition Summary</h2>
        <p className="text-gray-600 mb-6">
          This module reflects growth-stage outcomes and projected reach patterns, creating the benchmark
          for the full Ozilla Festival 2026 campaign rollout.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrismFest2024Page
