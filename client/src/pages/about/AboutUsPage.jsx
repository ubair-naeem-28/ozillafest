import React from 'react'
import PageHeader from '../../components/common/PageHeader'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'

function AboutUsPage() {
  return (
    <div>
      <PageHeader title="About Us" subtitle="Event Organizer Information" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Organization Details</h2>
        <p className="text-gray-600 mb-4">
          {ozillaProfessionalContent.about}
        </p>
        <p className="text-gray-600">
          The platform is designed around discovery, experiences, hospitality partnerships,
          discount access, and long-term brand collaborations.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">User Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {ozillaProfessionalContent.journey.map((step, idx) => (
            <div key={step} className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Step {idx + 1}</p>
              <p className="font-semibold text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ozillaProfessionalContent.partnerBenefits.map((benefit) => (
            <div key={benefit} className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
