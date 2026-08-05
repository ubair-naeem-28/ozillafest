import React from 'react'
function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-6 rounded-lg mb-8 page-header">
      <p className="uppercase tracking-wide mb-2 page-header-brand" style={{ color: '#f7ecf1' }}>Ozilla Festival</p>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-xl text-purple-100" style={{ maxWidth: '760px' }}>{subtitle}</p>}
    </div>
  )
}

export default PageHeader
