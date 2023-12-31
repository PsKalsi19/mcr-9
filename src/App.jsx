import { Route, Routes } from 'react-router-dom'
import './App.css'
import PrimaryLayout from './layout/PrimaryLayout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Playlist from './pages/Playlist';
import WatchLater from './pages/WatchLater'
import Video from './pages/Video'
import PlaylistItems from './pages/PlaylistItems'

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
          <Route path='playlist-items/:id' element={<PlaylistItems/>} />
          <Route path='watchlater' element={<WatchLater/>} />
          <Route path='video/:id' element={<Video/>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
