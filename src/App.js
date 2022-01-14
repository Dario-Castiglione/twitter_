import { Route, Routes } from 'react-router';

import NavBar from './components/NavBar';
import Home from './pages/home';
import Explore from './pages/explore';
import Messages from './pages/messages';
import Notification from './pages/notification';
import Bookmarks from './pages/bookmarks';
import Profile from './pages/profile';

import './App.scss';
function App() {
  return (
  <section>

    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Explore" element={<Explore />}/>
      <Route path="/Messages" element={<Messages />}/>
      <Route path="/Notification" element={<Notification />}/>
      <Route path="/Bookmarks" element={<Bookmarks />}/>
      <Route path="/Profile" element={<Profile />}/>
    </Routes>
   


  </section>  
    )
}

export default App;
