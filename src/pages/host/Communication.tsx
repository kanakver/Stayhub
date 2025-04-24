import { useState } from 'react'
import {
  PaperAirplaneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

const mockMessages = [
  {
    id: 1,
    sender: 'guest',
    name: 'John Doe',
    room: '101',
    message: 'Hi, could you please send someone to fix the AC?',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'host',
    name: 'Support',
    message: 'Of course! We\'ll send maintenance right away.',
    time: '10:32 AM',
  },
  {
    id: 3,
    sender: 'guest',
    name: 'John Doe',
    room: '101',
    message: 'Thank you!',
    time: '10:33 AM',
  },
]

const mockGuests = [
  {
    id: 1,
    name: 'John Doe',
    room: '101',
    lastMessage: 'Thank you!',
    time: '10:33 AM',
    unread: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    room: '203',
    lastMessage: 'Could you bring extra towels?',
    time: '9:45 AM',
    unread: true,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    room: '305',
    lastMessage: 'The TV is not working',
    time: 'Yesterday',
    unread: false,
  },
]

export default function Communication() {
  const [selectedGuest, setSelectedGuest] = useState(mockGuests[0])
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState(mockMessages)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      sender: 'host',
      name: 'Support',
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Guest List */}
      <div className="w-64 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium">Guests</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {mockGuests.map((guest) => (
            <button
              key={guest.id}
              onClick={() => setSelectedGuest(guest)}
              className={`w-full p-4 text-left border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                selectedGuest.id === guest.id ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div>
                    <h3 className="text-sm font-medium">{guest.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Room {guest.room}
                    </p>
                  </div>
                </div>
                {guest.unread && (
                  <span className="h-2 w-2 rounded-full bg-primary-600" />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate">
                {guest.lastMessage}
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                {guest.time}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium">
            {selectedGuest.name} - Room {selectedGuest.room}
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'host' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'host'
                    ? 'bg-primary-100 dark:bg-primary-900'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">
                    {message.sender === 'host' ? 'Support' : message.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {message.time}
                  </span>
                </div>
                <p className="mt-1 text-sm">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 