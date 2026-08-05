import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'

function PrismFestPage() {
  return (
    <div>
      <PageHeader title="Ozilla Festival" subtitle="Campaign Modules and Performance Highlights" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Festival Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/prismfest/2023" className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Pre-Campaign Footprint</h3>
            <p className="text-gray-600">Base-year insights focused on youth audience behavior and activation planning.</p>
          </Link>
          <Link to="/prismfest/2024" className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2025 Scale Metrics</h3>
            <p className="text-gray-600">25+ events delivered and large influencer/campus ecosystem growth.</p>
          </Link>
          <Link to="/prismfest/2025" className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ozilla Festival 2026</h3>
            <p className="text-gray-600">Flagship edition with 40,000+ attendance target and multi-channel sponsor visibility.</p>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/prismfest/celebrities" className="bg-purple-50 rounded-lg p-4 text-center font-semibold text-purple-700">
            Celebrity Singers
          </Link>
          <Link to="/prismfest/events" className="bg-blue-50 rounded-lg p-4 text-center font-semibold text-blue-700">
            Past Events
          </Link>
          <Link to="/prismfest/future" className="bg-green-50 rounded-lg p-4 text-center font-semibold text-green-700">
            Future Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrismFestPage
