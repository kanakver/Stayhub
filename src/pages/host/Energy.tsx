import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { BoltIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend)

const dailyData = {
  labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
  datasets: [
    {
      label: 'Energy Usage (kWh)',
      data: [2.1, 1.8, 2.3, 3.5, 4.2, 4.8, 3.9, 2.7],
      backgroundColor: '#0ea5e9',
    },
  ],
}

const weeklyData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Energy Usage (kWh)',
      data: [25, 28, 24, 26, 30, 32, 27],
      borderColor: '#0ea5e9',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      fill: true,
    },
  ],
}

const stats = [
  {
    name: 'Total Energy Usage',
    value: '2.4kWh',
    change: '+12%',
    trend: 'up',
  },
  {
    name: 'Cost Savings',
    value: '$45',
    change: '-8%',
    trend: 'down',
  },
  {
    name: 'Carbon Footprint',
    value: '1.2t',
    change: '-15%',
    trend: 'down',
  },
]

export default function Energy() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Energy Management</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: Just now</span>
          <button className="btn btn-secondary">Refresh</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex items-center ${
                  stat.trend === 'up' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowTrendingUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowTrendingDownIcon className="h-5 w-5" />
                )}
                <span className="ml-1">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Daily Usage */}
        <div className="card">
          <h2 className="text-lg font-medium mb-4">Daily Energy Usage</h2>
          <div className="h-64">
            <Bar
              data={dailyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="card">
          <h2 className="text-lg font-medium mb-4">Weekly Energy Trend</h2>
          <div className="h-64">
            <Line
              data={weeklyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Energy Tips */}
      <div className="card">
        <h2 className="text-lg font-medium mb-4">Energy Saving Tips</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900">
              <BoltIcon className="h-5 w-5 text-primary-600 dark:text-primary-300" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Optimize AC Usage</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Set AC temperature to 24°C during occupied hours and 28°C during unoccupied hours.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900">
              <BoltIcon className="h-5 w-5 text-primary-600 dark:text-primary-300" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Smart Lighting</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use motion sensors and daylight harvesting to reduce lighting energy consumption.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900">
              <BoltIcon className="h-5 w-5 text-primary-600 dark:text-primary-300" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Maintenance Schedule</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Regular maintenance of HVAC systems can improve efficiency by up to 15%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 