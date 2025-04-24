import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import GuestDashboard from './pages/guest/Dashboard'
import GuestRoomControl from './pages/guest/RoomControl'
import GuestServiceRequest from './pages/guest/ServiceRequest'
import GuestFeedback from './pages/guest/Feedback'
import GuestCheckIn from './pages/guest/CheckInPage'
import HostDashboard from './pages/host/Dashboard'
import HostAlerts from './pages/host/Alerts'
import HostEnergy from './pages/host/Energy'
import HostCommunication from './pages/host/Communication'
import HostPropertyManagement from './pages/host/PropertyManagement'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Guest Routes */}
        <Route path="/guest" element={<Layout />}>
          <Route index element={<GuestDashboard />} />
          <Route path="room-control" element={<GuestRoomControl />} />
          <Route path="service-request" element={<GuestServiceRequest />} />
          <Route path="feedback" element={<GuestFeedback />} />
          <Route path="check-in" element={<GuestCheckIn />} />
        </Route>

        {/* Host Routes */}
        <Route path="/host" element={<Layout />}>
          <Route index element={<HostDashboard />} />
          <Route path="alerts" element={<HostAlerts />} />
          <Route path="energy" element={<HostEnergy />} />
          <Route path="communication" element={<HostCommunication />} />
          <Route path="property-management" element={<HostPropertyManagement />} />
        </Route>

        {/* Redirect to guest dashboard by default */}
        <Route path="/" element={<Layout />}>
          <Route index element={<GuestDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 