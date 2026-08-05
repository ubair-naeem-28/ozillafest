import React from 'react'
import PageHeader from '../../components/common/PageHeader'

function BrandCollaborationPage() {
  const collaborationPoints = [
    { title: 'Audience Reach', detail: 'Projected 100-200M Meta audience and 20-40M Instagram reach.' },
    { title: 'Influencer Ecosystem', detail: '1,000+ targeted influencers and 100+ campus ambassadors.' },
    { title: 'On-Ground Activation', detail: 'Branded zones, product sampling, and photo/content booths.' },
    { title: 'Brand Recall', detail: 'Connected visibility across entrance, stage, screens, and media wall.' }
  ]

  return (
    <div>
      <PageHeader title="Brand Collaboration" subtitle="Partnership Opportunities for Ozilla Festival 2026" />

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Collaborate</h2>
        <p className="text-gray-600 mb-6">
          Ozilla Festival provides end-to-end brand integration across venue touchpoints, audience
          journey, digital campaigns, and creator-led amplification.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborationPoints.map((point) => (
            <div key={point.title} className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Collaboration Formats</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Stage + Screen Visibility</h3>
            <p className="text-gray-600">Brand placement on event screens, stage mentions, and reveal assets.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Activation Booths</h3>
            <p className="text-gray-600">Dedicated on-ground spaces for product trials, contests, and engagement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Creator and Social Content</h3>
            <p className="text-gray-600">Collab posts, branded reels, and influencer-driven campaign coverage.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Build Your Collaboration Plan</h2>
        <p className="mb-6">Contact the team to design a package based on your campaign goals.</p>
        <a href="/contact" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">
          Contact Collaboration Team
        </a>
      </div>
    </div>
  )
}

export default BrandCollaborationPage
