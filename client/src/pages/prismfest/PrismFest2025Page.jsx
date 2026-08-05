import React from 'react'
import PageHeader from '../../components/common/PageHeader'

function PrismFest2025Page() {
  const stats = [
    { label: 'Projected Attendance', value: '40,000+' },
    { label: 'Influencers', value: '1,000+' },
    { label: 'Meta Audience', value: '100-200M' },
    { label: 'Campaign Goal', value: 'Dominant sponsor visibility + audience engagement' }
  ]

  return (
    <div>
      <PageHeader title="Ozilla Festival 2026" subtitle="Upcoming Headline Edition" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edition Summary</h2>
        <p className="text-gray-600 mb-6">
          Ozilla Festival 2026 is structured as the flagship sponsorship and entertainment edition,
          combining immersive brand activations with large-scale digital and on-ground audience impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-purple-700">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrismFest2025Page
