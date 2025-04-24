import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { 
  SunIcon, 
  BoltIcon, 
  CheckCircleIcon,
  TvIcon,
  TruckIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowPathIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  LightBulbIcon,
  WindowIcon
} from '@heroicons/react/24/outline'

ChartJS.register(ArcElement, Tooltip, Legend)

const GuestDashboard = () => {
  const [mainLight, setMainLight] = useState(true)
  const [ac, setAC] = useState(true)
  const [blinds, setBlinds] = useState(true)
  const [tv, setTV] = useState(false)

  const recentActivities = [
    {
      type: 'Room accessed',
      time: '10:45 AM',
      icon: ArrowPathIcon
    },
    {
      type: 'Room service delivered',
      time: '9:30 AM',
      icon: TruckIcon
    },
    {
      type: 'Temperature adjusted',
      time: 'Yesterday, 8:15 PM',
      icon: BoltIcon
    }
  ]

  const hotelServices = [
    {
      name: 'Room Service',
      icon: TruckIcon,
      description: 'Order food and beverages'
    },
    {
      name: 'Housekeeping',
      icon: SparklesIcon,
      description: 'Request cleaning service'
    },
    {
      name: 'Transport',
      icon: TruckIcon,
      description: 'Arrange transportation'
    },
    {
      name: 'Concierge',
      icon: UserGroupIcon,
      description: 'Get assistance'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Room 302</h1>
          <p className="text-gray-500 dark:text-gray-400">Check-out: June 12, 2023</p>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
          <span className="text-sm font-medium text-green-600">All Systems Active</span>
        </div>
      </div>

      {/* Room Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Temperature</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">23°C</p>
                <div className="ml-2 flex space-x-1">
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <ArrowUpIcon className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <ArrowDownIcon className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            <BoltIcon className="h-6 w-6 text-primary-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">45%</p>
            </div>
            <SunIcon className="h-6 w-6 text-primary-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lighting</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">70%</p>
            </div>
            <SunIcon className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </div>

      {/* Quick Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Controls</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setMainLight(!mainLight)}
            className={`p-4 rounded-lg border ${
              mainLight
                ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <LightBulbIcon
              className={`h-6 w-6 mx-auto ${
                mainLight ? 'text-amber-500' : 'text-gray-400'
              }`}
            />
            <span className="mt-2 block text-sm font-medium text-center">Main Light</span>
          </button>

          <button
            onClick={() => setAC(!ac)}
            className={`p-4 rounded-lg border ${
              ac
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <BoltIcon
              className={`h-6 w-6 mx-auto ${
                ac ? 'text-blue-500' : 'text-gray-400'
              }`}
            />
            <span className="mt-2 block text-sm font-medium text-center">A/C</span>
          </button>

          <button
            onClick={() => setBlinds(!blinds)}
            className={`p-4 rounded-lg border ${
              blinds
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <WindowIcon
              className={`h-6 w-6 mx-auto ${
                blinds ? 'text-indigo-500' : 'text-gray-400'
              }`}
            />
            <span className="mt-2 block text-sm font-medium text-center">Blinds</span>
          </button>

          <button
            onClick={() => setTV(!tv)}
            className={`p-4 rounded-lg border ${
              tv
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <TvIcon
              className={`h-6 w-6 mx-auto ${
                tv ? 'text-purple-500' : 'text-gray-400'
              }`}
            />
            <span className="mt-2 block text-sm font-medium text-center">TV</span>
          </button>
        </div>
      </div>

      {/* Recent Activity and Hotel Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View all activity</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <activity.icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.type}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Services */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Hotel Services</h2>
          <div className="grid grid-cols-2 gap-4">
            {hotelServices.map((service) => (
              <button
                key={service.name}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <service.icon className="h-6 w-6 text-primary-600" />
                <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  {service.name}
                </span>
                <span className="mt-1 text-xs text-gray-500">{service.description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestDashboard 