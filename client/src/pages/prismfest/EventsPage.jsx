import React from 'react'
import PageHeader from '../../components/common/PageHeader'

function EventsPage() {
  const events = [
    { name: 'Ozilla Strategy Module', status: 'Completed', detail: 'Audience journey and activation playbook finalized.' },
    { name: 'Ozilla Scale Module', status: 'Completed', detail: 'Multi-channel visibility model and sponsor packages benchmarked.' }
  ]

  return (
    <div>
      <PageHeader title="Past Events" subtitle="Completed Ozilla Campaign Modules" />

      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.name} className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">{event.status}</span>
            </div>
            <p className="text-gray-600">{event.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsPage
