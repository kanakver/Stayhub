import { useState } from 'react'
import { 
  StarIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

const ratingOptions = [1, 2, 3, 4, 5]
const ratingLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

const faqs = [
  {
    question: 'How do I adjust the room temperature?',
    answer: 'You can adjust the temperature using the room control panel or the SmartStay app. The temperature range is between 16°C and 30°C.'
  },
  {
    question: 'What time is breakfast served?',
    answer: 'Breakfast is served daily from 6:30 AM to 10:30 AM in the main dining area.'
  },
  {
    question: 'Is there a gym or fitness center?',
    answer: 'Yes, we have a 24/7 fitness center located on the 3rd floor. Access is included with your stay.'
  },
  {
    question: 'How do I request late check-out?',
    answer: 'You can request late check-out through the SmartStay app or by contacting the front desk. Approval is subject to availability.'
  },
  {
    question: "What's the Wi-Fi password?",
    answer: 'The Wi-Fi password is provided in your check-in confirmation email and is also displayed on the room control panel.'
  }
]

const chatMessages = [
  {
    sender: 'guest',
    time: '10:30 AM',
    message: "Hi, I'm having trouble with the air conditioning in my room."
  },
  {
    sender: 'support',
    time: '10:32 AM',
    message: "I'm sorry to hear that. Can you please provide more details about the issue you're experiencing with the air conditioning?"
  }
]

const Feedback = () => {
  const [activeTab, setActiveTab] = useState<'feedback' | 'support'>('feedback')
  const [overallRating, setOverallRating] = useState(0)
  const [roomComfort, setRoomComfort] = useState(0)
  const [staffService, setStaffService] = useState(0)
  const [smartFeatures, setSmartFeatures] = useState(0)
  const [comments, setComments] = useState('')
  const [chatMessage, setChatMessage] = useState('')
  const [messages, setMessages] = useState(chatMessages)

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the feedback to the server
    alert('Thank you for your feedback!')
    setOverallRating(0)
    setRoomComfort(0)
    setStaffService(0)
    setSmartFeatures(0)
    setComments('')
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      setMessages([
        ...messages,
        {
          sender: 'guest',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          message: chatMessage
        }
      ])
      setChatMessage('')
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Feedback & Support</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Share your experience or get help from our team
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('feedback')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'feedback'
              ? 'border-b-2 border-primary-600 text-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Feedback
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'support'
              ? 'border-b-2 border-primary-600 text-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Support
        </button>
      </div>

      {activeTab === 'feedback' ? (
        <form onSubmit={handleSubmitFeedback} className="space-y-8">
          {/* Overall Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Rate Your Stay</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Overall Experience
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {ratingOptions.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setOverallRating(value)}
                        className={`p-1 rounded-full ${
                          overallRating >= value
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        <StarIcon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {overallRating ? ratingLabels[overallRating - 1] : ''}
                  </span>
                </div>
              </div>

              {/* Room Comfort */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Room Comfort
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {ratingOptions.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRoomComfort(value)}
                        className={`p-1 rounded-full ${
                          roomComfort >= value
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        <StarIcon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {roomComfort ? ratingLabels[roomComfort - 1] : ''}
                  </span>
                </div>
              </div>

              {/* Staff Service */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Staff Service
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {ratingOptions.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setStaffService(value)}
                        className={`p-1 rounded-full ${
                          staffService >= value
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        <StarIcon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {staffService ? ratingLabels[staffService - 1] : ''}
                  </span>
                </div>
              </div>

              {/* Smart Features */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Smart Features
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {ratingOptions.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSmartFeatures(value)}
                        className={`p-1 rounded-full ${
                          smartFeatures >= value
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        <StarIcon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {smartFeatures ? ratingLabels[smartFeatures - 1] : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Comments */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Additional Comments
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Tell us about your experience..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="space-y-8">
          {/* Live Support */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Live Support</h2>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'guest' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'guest'
                        ? 'bg-primary-100 text-primary-900'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className="mt-1 text-xs text-gray-500">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="p-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-start space-x-2">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-primary-600 mt-1" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feedback 