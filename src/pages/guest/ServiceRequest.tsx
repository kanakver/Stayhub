import { useState } from 'react'
import {
  SparklesIcon,
  WrenchScrewdriverIcon,
  GiftIcon,
  UserGroupIcon,
  TruckIcon,
  HeartIcon,
  FunnelIcon,
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

const serviceCategories = [
  {
    id: 'room-service',
    name: 'Room Service',
    icon: SparklesIcon,
    description: 'Order food and beverages to your room'
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping',
    icon: WrenchScrewdriverIcon,
    description: 'Request cleaning or maintenance services'
  },
  {
    id: 'amenities',
    name: 'Amenities',
    icon: GiftIcon,
    description: 'Request additional room amenities'
  },
  {
    id: 'concierge',
    name: 'Concierge',
    icon: UserGroupIcon,
    description: 'Get assistance with local services'
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: TruckIcon,
    description: 'Arrange transportation services'
  },
  {
    id: 'wellness',
    name: 'Wellness',
    icon: HeartIcon,
    description: 'Book spa or fitness services'
  }
]

const menuItems = [
  {
    id: 'club-sandwich',
    name: 'Club Sandwich',
    price: 16,
    description: 'Classic club with chicken, bacon, lettuce, tomato and mayo'
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    price: 14,
    description: 'Fresh romaine lettuce, croutons, parmesan and Caesar dressing'
  },
  {
    id: 'pasta-primavera',
    name: 'Pasta Primavera',
    price: 18,
    description: 'Linguine pasta with seasonal vegetables in a light cream sauce'
  }
]

const currentRequests = [
  {
    id: 1,
    category: 'room-service',
    item: 'Club Sandwich',
    status: 'preparing',
    time: '10:30 AM'
  },
  {
    id: 2,
    category: 'housekeeping',
    item: 'Room Cleaning',
    status: 'pending',
    time: '9:00 AM'
  }
]

const specialRequests = [
  {
    id: 1,
    request: 'Extra pillows needed',
    status: 'completed',
    time: 'Yesterday'
  },
  {
    id: 2,
    request: 'Late check-out request',
    status: 'pending',
    time: 'Today'
  }
]

const ServiceRequest = () => {
  const [activeCategory, setActiveCategory] = useState('room-service')
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [showFullMenu, setShowFullMenu] = useState(false)

  const handleAddToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const handleRemoveFromCart = (itemId: string) => {
    if (cart[itemId] > 1) {
      setCart(prev => ({
        ...prev,
        [itemId]: prev[itemId] - 1
      }))
    } else {
      const newCart = { ...cart }
      delete newCart[itemId]
      setCart(newCart)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services & Requests</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Order services or make special requests
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`p-4 rounded-lg border ${
              activeCategory === category.id
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <category.icon
              className={`h-6 w-6 mx-auto ${
                activeCategory === category.id ? 'text-primary-600' : 'text-gray-400'
              }`}
            />
            <h3 className="mt-2 text-sm font-medium text-center">{category.name}</h3>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Room Service Menu */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Room Service Menu</h2>
            <button className="flex items-center text-sm text-primary-600 hover:text-primary-700">
              <FunnelIcon className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>

          <div className="space-y-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {cart[item.id] ? (
                      <>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium">{cart[item.id]}</span>
                        <button
                          onClick={() => handleAddToCart(item.id)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item.id)}
                        className="px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700"
                      >
                        Add to Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="w-full px-4 py-2 text-sm text-primary-600 hover:text-primary-700"
          >
            {showFullMenu ? 'Show Less' : 'View full menu'}
          </button>
        </div>

        {/* Current Requests & Special Requests */}
        <div className="space-y-6">
          {/* Current Requests */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Current Requests
            </h2>
            <div className="space-y-4">
              {currentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {request.item}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {request.time}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Special Requests
            </h2>
            <div className="space-y-4">
              {specialRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {request.request}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {request.time}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          {Object.keys(cart).length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Your Order
              </h2>
              <div className="space-y-2">
                {Object.entries(cart).map(([itemId, quantity]) => {
                  const item = menuItems.find(i => i.id === itemId)
                  return (
                    <div key={itemId} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {item?.name} x{quantity}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        ${(item?.price || 0) * quantity}
                      </span>
                    </div>
                  )
                })}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center justify-center">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceRequest 