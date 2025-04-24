import { useState } from 'react'
import { 
  QrCodeIcon,
  DocumentTextIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const CheckInPage = () => {
  const [verificationCode, setVerificationCode] = useState('')
  // const [isVerified, setIsVerified] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  const handleVerification = () => {
    // In a real app, this would verify the code with the backend
    if (verificationCode.length === 6) {
      // setIsVerified(true)
      setShowQRCode(true)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contactless Check-In</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Complete your check-in process quickly and securely
        </p>
      </div>

      {/* Reservation Details */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Reservation Found</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Booking #BK12345 • June 10-12, 2023
            </p>
          </div>
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Full Name
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">Alex Johnson</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Email Address
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">alex.johnson@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Phone Number
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* ID Document Upload */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">ID Document</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Upload your ID or passport
        </p>
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
          <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              Select File
            </button>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <CreditCardIcon className="h-6 w-6 text-gray-400" />
          <div>
            <p className="text-gray-900 dark:text-white">•••• •••• •••• 5678</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Charged at check-out</p>
          </div>
        </div>
      </div>

      {/* Verification Code */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Verification Code</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          We've sent a verification code to your phone
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            maxLength={6}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter 6-digit code"
          />
          <button className="text-primary-600 hover:text-primary-700">
            <ArrowPathIcon className="h-5 w-5" />
            <span className="ml-1 text-sm">Resend Code</span>
          </button>
        </div>
      </div>

      {/* Complete Check-In Button */}
      <button
        onClick={handleVerification}
        disabled={!verificationCode || verificationCode.length !== 6}
        className="w-full px-4 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Complete Check-In
      </button>

      {/* QR Code Access */}
      {showQRCode && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Access Your Room</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Use this QR code to unlock your door
          </p>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-lg">
              <QrCodeIcon className="h-32 w-32 text-gray-900" />
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Room access is valid until check-out on June 12, 2023
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckInPage
