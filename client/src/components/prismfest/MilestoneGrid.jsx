import React from 'react'
function MilestoneGrid({ milestones }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {milestones.map((milestone, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
              {milestone.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-800">{milestone.year}</h3>
              <p className="text-sm text-gray-600">{milestone.title}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{milestone.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MilestoneGrid
