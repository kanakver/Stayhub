import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  HomeIcon, 
  CogIcon, 
  BellIcon, 
  ChatBubbleLeftIcon,
  BuildingOfficeIcon,
  KeyIcon
} from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'

const guestNavigation = [
  { name: 'Dashboard', href: '/guest', icon: HomeIcon },
  { name: 'Check-in', href: '/guest/check-in', icon: KeyIcon },
  { name: 'Room Control', href: '/guest/room-control', icon: CogIcon },
  { name: 'Service Request', href: '/guest/service-request', icon: BellIcon },
  { name: 'Feedback', href: '/guest/feedback', icon: ChatBubbleLeftIcon },
]

const hostNavigation = [
  { name: 'Dashboard', href: '/host', icon: HomeIcon },
  { name: 'Property Management', href: '/host/property-management', icon: BuildingOfficeIcon },
  { name: 'Alerts', href: '/host/alerts', icon: BellIcon },
  { name: 'Energy', href: '/host/energy', icon: CogIcon },
  { name: 'Communication', href: '/host/communication', icon: ChatBubbleLeftIcon },
]

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHostRoute = location.pathname.startsWith('/host')
  const navigation = isHostRoute ? hostNavigation : guestNavigation

  const handleViewToggle = (checked: boolean) => {
    if (checked && !isHostRoute) {
      navigate('/host')
    } else if (!checked && isHostRoute) {
      navigate('/guest')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-primary-600">SmartStay</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">Guest</span>
            <Switch
              checked={isHostRoute}
              onChange={handleViewToggle}
              className={`${
                isHostRoute ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  isHostRoute ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <span className="text-sm text-gray-600 dark:text-gray-300">Host</span>
          </div>
        </div>
        <nav className="mt-5 px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === item.href
                  ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-600 dark:text-primary-300'
                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
} 