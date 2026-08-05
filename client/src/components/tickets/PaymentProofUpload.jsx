import React from 'react'
import { useState } from 'react'

function PaymentProofUpload({ ticketId, onUpload }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('paymentProof', file)
      await onUpload(ticketId, formData)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Upload Payment Proof</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {preview && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Preview:</p>
          <img src={preview} alt="Payment proof preview" className="max-w-full h-auto rounded-lg border" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold"
      >
        {uploading ? 'Uploading...' : 'Upload Proof'}
      </button>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Please ensure the payment proof clearly shows the transaction details including amount, date, and recipient account.
        </p>
      </div>
    </div>
  )
}

export default PaymentProofUpload
