
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
function App() {
  return (
  <section>

    <NavBar/>
    <Routes>
      <Route path="/" component={Home}/>
    </Routes>
   


  </section>  
    )
}

export default App;
