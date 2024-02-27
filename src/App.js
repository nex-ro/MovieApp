import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './pages/main'
import Populer from './pages/populer'
import Series from './pages/Series'
import Actor from './pages/Actor'


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/movies' element={<Populer/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/actor' element={<Actor/>}/>

    </Routes>
  </Router>
  );
}

export default App;
