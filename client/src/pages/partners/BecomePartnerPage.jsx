import React from 'react'
import PageHeader from '../../components/common/PageHeader'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'

function BecomePartnerPage() {
  return (
    <div>
      <PageHeader title="Become A Partner" subtitle="Partner Benefits and Admin Scope" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Partner With OZilla</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ozillaProfessionalContent.partnerBenefits.map((benefit) => (
            <div key={benefit} className="bg-purple-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Admin Panel Requirements</h2>
        <p className="text-gray-600 mb-4">
          Admin should manage restaurants, hotels, discounts, images, offers, partner details and
          website content through a simple operational dashboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">Restaurant Partner Management</div>
          <div className="border border-gray-200 rounded-lg p-4">Hotel and Discount Management</div>
          <div className="border border-gray-200 rounded-lg p-4">Offers, Media and Content Control</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Call To Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ozillaProfessionalContent.callToActions.map((item) => (
            <div key={item} className="bg-white/20 rounded-lg p-4 font-semibold text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BecomePartnerPage
