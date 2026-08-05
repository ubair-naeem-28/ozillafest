import React from 'react'
function SponsorshipPerksList() {
  const perks = [
    {
      title: "Brand Visibility",
      description: "Logo placement on all marketing materials, website, and event signage",
      icon: "👁️"
    },
    {
      title: "VIP Access",
      description: "Complimentary VIP tickets for your team and clients",
      icon: "🎟️"
    },
    {
      title: "Speaking Opportunities",
      description: "Opportunity to address the audience at opening ceremony",
      icon: "🎤"
    },
    {
      title: "Networking Events",
      description: "Exclusive access to networking dinners and VIP events",
      icon: "🤝"
    },
    {
      title: "Digital Marketing",
      description: "Social media campaigns and email marketing inclusion",
      icon: "📱"
    },
    {
      title: "Data & Analytics",
      description: "Post-event reports with attendee engagement metrics",
      icon: "📊"
    },
    {
      title: "Custom Activations",
      description: "Brand activation zones and experiential marketing opportunities",
      icon: "🎯"
    },
    {
      title: "Media Coverage",
      description: "Inclusion in press releases and media interviews",
      icon: "📰"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {perks.map((perk, index) => (
        <div key={index} className="bg-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">{perk.icon}</div>
          <h3 className="font-semibold text-gray-800 mb-1">{perk.title}</h3>
          <p className="text-sm text-gray-600">{perk.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SponsorshipPerksList
