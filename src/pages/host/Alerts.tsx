import { useState } from 'react'
import { 
  ExclamationTriangleIcon,
  WrenchIcon,
  ShieldCheckIcon,
  CalendarIcon,
  BoltIcon,
  BellIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

const Alerts = () => {
  const [activeTab, setActiveTab] = useState<'alerts' | 'settings'>('alerts')

  const activeAlerts = [
    {
      id: 1,
      type: 'maintenance',
      title: 'AC Unit Malfunction',
      room: '302',
      priority: 'urgent',
      time: '10:30 AM',
      description: 'Temperature control not responding'
    },
    {
      id: 2,
      type: 'security',
      title: 'Unauthorized Access Attempt',
      room: 'Lobby',
      priority: 'high',
      time: '9:45 AM',
      description: 'Multiple failed keycard attempts'
    },
    {
      id: 3,
      type: 'reservations',
      title: 'Double Booking Detected',
      room: '205',
      priority: 'medium',
      time: '9:15 AM',
      description: 'Two reservations for same room'
    },
    {
      id: 4,
      type: 'energy',
      title: 'High Energy Consumption',
      room: '118',
      priority: 'medium',
      time: '8:30 AM',
      description: 'Room consuming 2x average energy'
    }
  ]

  const alertTypes = [
    {
      type: 'maintenance',
      percentage: 38,
      icon: WrenchIcon,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'security',
      percentage: 25,
      icon: ShieldCheckIcon,
      color: 'bg-red-100 text-red-800'
    },
    {
      type: 'reservations',
      percentage: 25,
      icon: CalendarIcon,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      type: 'energy',
      percentage: 12,
      icon: BoltIcon,
      color: 'bg-yellow-100 text-yellow-800'
    }
  ]

  const notificationSettings = [
    {
      type: 'email',
      icon: EnvelopeIcon,
      title: 'Email Notifications',
      description: 'Receive alerts via email',
      status: 'enabled'
    },
    {
      type: 'sms',
      icon: DevicePhoneMobileIcon,
      title: 'SMS Alerts',
      description: 'Get instant notifications on your phone',
      status: 'enabled'
    },
    {
      type: 'thresholds',
      icon: AdjustmentsHorizontalIcon,
      title: 'Alert Thresholds',
      description: 'Configure alert sensitivity levels',
      status: 'configured'
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alerts & Notifications</h1>
          <p className="text-gray-500 dark:text-gray-400">Monitor and respond to property alerts</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'alerts'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Alerts
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'settings'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {activeTab === 'alerts' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Alerts */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Active Alerts</h2>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  1 urgent
                </span>
                <span className="ml-2 text-sm text-gray-500">6 requiring attention</span>
              </div>
            </div>
            <div className="space-y-4">
              {activeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className={`p-2 rounded-full ${getPriorityColor(alert.priority)}`}>
                    {alert.type === 'maintenance' && <WrenchIcon className="h-5 w-5" />}
                    {alert.type === 'security' && <ShieldCheckIcon className="h-5 w-5" />}
                    {alert.type === 'reservations' && <CalendarIcon className="h-5 w-5" />}
                    {alert.type === 'energy' && <BoltIcon className="h-5 w-5" />}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {alert.title}
                      </h3>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Room {alert.room} • {alert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alert Types */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Recent Alert Types
            </h2>
            <p className="text-sm text-gray-500 mb-4">Distribution by category</p>
            <div className="space-y-4">
              {alertTypes.map((type) => (
                <div key={type.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${type.color}`}>
                        <type.icon className="h-5 w-5" />
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
                        {type.type}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {type.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${type.color.split(' ')[0]}`}
                      style={{ width: `${type.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Alert Settings */
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Alert Settings</h2>
          <p className="text-sm text-gray-500 mb-6">Configure notification preferences</p>
          <div className="space-y-6">
            {notificationSettings.map((setting) => (
              <div
                key={setting.type}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary-100">
                    <setting.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {setting.title}
                    </h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700">
                  Configure
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Alerts 