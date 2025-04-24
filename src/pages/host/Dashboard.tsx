import { useState } from 'react'
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  BoltIcon,
  WrenchIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today')
  const [selectedFloor, setSelectedFloor] = useState<'all' | '1-3' | '4-6'>('all')

  const stats = [
    {
      name: 'Occupancy Rate',
      value: '78%',
      change: '+5%',
      trend: 'up',
      icon: BuildingOfficeIcon,
      detail: '98/126 rooms'
    },
    {
      name: 'Check-ins Today',
      value: '24',
      change: '-2%',
      trend: 'down',
      icon: UserGroupIcon,
      detail: '16 pending'
    },
    {
      name: 'Energy Usage',
      value: '1,248',
      change: '-12%',
      trend: 'down',
      icon: BoltIcon,
      detail: 'kWh today'
    },
    {
      name: 'Service Requests',
      value: '18',
      change: '+8%',
      trend: 'up',
      icon: WrenchIcon,
      detail: '7 active'
    }
  ]

  const recentActivities = [
    {
      type: 'New Check-in',
      time: '10:45 AM',
      details: 'Room 302 - Alex Johnson'
    },
    {
      type: 'Check-out Completed',
      time: '9:30 AM',
      details: 'Room 215 - Mark Wilson'
    },
    {
      type: 'Service Request',
      time: '9:15 AM',
      details: 'Room 118 - Extra towels requested'
    },
    {
      type: 'Maintenance Alert',
      time: '8:50 AM',
      details: 'Room 427 - AC issue reported'
    }
  ]

  const upcomingCheckIns = [
    {
      name: 'Michael Brown',
      time: '12:00 PM',
      room: '205',
      duration: '3 nights'
    },
    {
      name: 'Sarah Davis',
      time: '1:30 PM',
      room: '310',
      duration: '2 nights'
    },
    {
      name: 'James Wilson',
      time: '2:00 PM',
      room: '422',
      duration: '1 night'
    },
    {
      name: 'Emily Clark',
      time: '3:15 PM',
      room: '118',
      duration: '4 nights'
    }
  ]

  const getRoomStatus = (roomNumber: number) => {
    const statuses = [
      { type: 'occupied', status: 'clean' },
      { type: 'occupied', status: 'needs-attention' },
      { type: 'maintenance', status: 'required' },
      { type: 'check-in', status: 'today' },
      { type: 'vacant', status: 'ready' }
    ]
    return statuses[roomNumber % statuses.length]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Property Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Grand Hotel • 126 Rooms</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('today')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'today'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'week'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === 'month'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <span className={`ml-2 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Occupancy Trend */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Occupancy Trend</h2>
          <div className="h-64 flex items-end space-x-2">
            {['Tue', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="flex-1">
                <div
                  className="bg-primary-600 rounded-t"
                  style={{ height: `${Math.random() * 100}%` }}
                />
                <p className="text-xs text-center text-gray-500 mt-2">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activities</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View all activity</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.type}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Status and Upcoming Check-ins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Room Status Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Room Status Overview</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedFloor('all')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedFloor === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Floors
              </button>
              <button
                onClick={() => setSelectedFloor('1-3')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedFloor === '1-3'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Floor 1-3
              </button>
              <button
                onClick={() => setSelectedFloor('4-6')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedFloor === '4-6'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Floor 4-6
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }).map((_, index) => {
              const roomNumber = index + 101
              const status = getRoomStatus(roomNumber)
              return (
                <div
                  key={roomNumber}
                  className={`aspect-square rounded flex flex-col items-center justify-center text-sm font-medium ${
                    status.type === 'occupied' && status.status === 'clean'
                      ? 'bg-green-100 text-green-800'
                      : status.type === 'occupied' && status.status === 'needs-attention'
                      ? 'bg-yellow-100 text-yellow-800'
                      : status.type === 'maintenance'
                      ? 'bg-red-100 text-red-800'
                      : status.type === 'check-in'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <span>{roomNumber}</span>
                  <span className="text-xs mt-1">
                    {status.type === 'occupied'
                      ? 'Occupied'
                      : status.type === 'maintenance'
                      ? 'Maintenance'
                      : status.type === 'check-in'
                      ? 'Check-in'
                      : 'Vacant'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Check-ins */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Check-ins</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View all check-ins</button>
          </div>
          <div className="space-y-4">
            {upcomingCheckIns.map((checkIn, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{checkIn.name}</p>
                  <p className="text-sm text-gray-500">
                    Room {checkIn.room} • {checkIn.duration}
                  </p>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{checkIn.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 