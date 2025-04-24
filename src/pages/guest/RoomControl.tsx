import { useState } from 'react'
import { 
  SunIcon,
  MoonIcon,
  BoltIcon,
  TvIcon,
  PauseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  LightBulbIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

const RoomControl = () => {
  const [temperature, setTemperature] = useState(23)
  const [mainLight, setMainLight] = useState(true)
  const [bedsideLight, setBedsideLight] = useState(false)
  const [bathroomLight, setBathroomLight] = useState(false)
  const [ambientLight, setAmbientLight] = useState(true)
  const [brightness, setBrightness] = useState(70)
  const [colorTemp, setColorTemp] = useState('neutral')
  const [mainCurtains, setMainCurtains] = useState('closed')
  const [bathroomBlinds, setBathroomBlinds] = useState('open')
  const [tvOn, setTvOn] = useState(false)
  const [preset, setPreset] = useState('custom')

  const presets = [
    { name: 'Sleep', icon: MoonIcon },
    { name: 'Reading', icon: LightBulbIcon },
    { name: 'Movie', icon: TvIcon },
    { name: 'Custom', icon: AdjustmentsHorizontalIcon }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Room Control</h1>
        <p className="text-gray-500 dark:text-gray-400">Adjust your room for maximum comfort</p>
      </div>

      {/* Temperature Control */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Temperature</h2>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold text-gray-900 dark:text-white">{temperature}°C</div>
          <div className="flex space-x-2">
            <button
              onClick={() => setTemperature(16)}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              16°C
            </button>
            <button
              onClick={() => setTemperature(23)}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              23°C
            </button>
            <button
              onClick={() => setTemperature(30)}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              30°C
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <button
            onClick={() => setTemperature(t => Math.max(16, t - 1))}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          </button>
          <div className="flex-1 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-primary-600 rounded-full"
              style={{ width: `${((temperature - 16) / (30 - 16)) * 100}%` }}
            />
          </div>
          <button
            onClick={() => setTemperature(t => Math.min(30, t + 1))}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Lighting Control */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Lighting Control</h2>
        <div className="space-y-6">
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
              onClick={() => setBedsideLight(!bedsideLight)}
              className={`p-4 rounded-lg border ${
                bedsideLight
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <LightBulbIcon
                className={`h-6 w-6 mx-auto ${
                  bedsideLight ? 'text-indigo-500' : 'text-gray-400'
                }`}
              />
              <span className="mt-2 block text-sm font-medium text-center">Bedside Light</span>
            </button>

            <button
              onClick={() => setBathroomLight(!bathroomLight)}
              className={`p-4 rounded-lg border ${
                bathroomLight
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <LightBulbIcon
                className={`h-6 w-6 mx-auto ${
                  bathroomLight ? 'text-blue-500' : 'text-gray-400'
                }`}
              />
              <span className="mt-2 block text-sm font-medium text-center">Bathroom Light</span>
            </button>

            <button
              onClick={() => setAmbientLight(!ambientLight)}
              className={`p-4 rounded-lg border ${
                ambientLight
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <LightBulbIcon
                className={`h-6 w-6 mx-auto ${
                  ambientLight ? 'text-purple-500' : 'text-gray-400'
                }`}
              />
              <span className="mt-2 block text-sm font-medium text-center">Ambient Light</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Brightness
              </label>
              <div className="flex items-center space-x-4">
                <SunIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {brightness}%
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Color Temperature
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setColorTemp('cool')}
                  className={`px-3 py-1 rounded-md ${
                    colorTemp === 'cool'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Cool
                </button>
                <button
                  onClick={() => setColorTemp('neutral')}
                  className={`px-3 py-1 rounded-md ${
                    colorTemp === 'neutral'
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Neutral
                </button>
                <button
                  onClick={() => setColorTemp('warm')}
                  className={`px-3 py-1 rounded-md ${
                    colorTemp === 'warm'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Warm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curtains & Blinds */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Curtains & Blinds</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Curtains */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Main Curtains</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                {mainCurtains}
              </span>
              <div className="flex space-x-2 ml-auto">
                <button
                  onClick={() => setMainCurtains('open')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={() => setMainCurtains('pause')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <PauseIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={() => setMainCurtains('closed')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Bathroom Blinds */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Bathroom Blinds</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                {bathroomBlinds}
              </span>
              <div className="flex space-x-2 ml-auto">
                <button
                  onClick={() => setBathroomBlinds('open')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={() => setBathroomBlinds('pause')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <PauseIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={() => setBathroomBlinds('closed')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TV & Entertainment */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">TV & Entertainment</h2>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-500 dark:text-gray-400">
            TV is currently {tvOn ? 'on' : 'off'}.
            {!tvOn && ' Turn it on to access controls.'}
          </div>
          <button
            onClick={() => setTvOn(!tvOn)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              tvOn ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {tvOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>

        {tvOn && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Presets</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {presets.map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  onClick={() => setPreset(name.toLowerCase())}
                  className={`flex flex-col items-center p-4 rounded-lg ${
                    preset === name.toLowerCase() ? 'bg-primary-100' : 'bg-gray-100'
                  }`}
                >
                  <Icon className={`h-6 w-6 ${
                    preset === name.toLowerCase() ? 'text-primary-600' : 'text-gray-400'
                  }`} />
                  <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoomControl 