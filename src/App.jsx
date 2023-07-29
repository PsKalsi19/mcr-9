import { Route, Routes } from 'react-router-dom'
import './App.css'
import PrimaryLayout from './layout/PrimaryLayout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Playlist from './pages/Playlist';
import WatchLater from './pages/WatchLater'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrimaryLayout/>}>
          <Route index element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='explore/:category' element={<Explore/>} />
          <Route path='explore' element={<Explore/>} />
          <Route path='playlist' element={<Playlist/>} />
          <Route path='watchlater' element={<WatchLater/>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
