import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sponsors from './pages/Sponsors'
import Properties from './pages/Properties'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
