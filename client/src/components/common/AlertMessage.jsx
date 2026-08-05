import React from 'react'
function AlertMessage({ type, message, onClose }) {
  const bgColor = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  }[type] || 'bg-gray-100 border-gray-500 text-gray-700'

  return (
    <div className={`${bgColor} border-l-4 p-4 rounded mb-4 flex justify-between items-center`}>
      <p>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 font-bold hover:opacity-75"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default AlertMessage
