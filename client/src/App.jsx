import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import Event from './pages/Event'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/allLocations" element={<Locations />} />
        <Route path="/locations/:locationName" element={<LocationEvents />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;