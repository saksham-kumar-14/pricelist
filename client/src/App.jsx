import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
    <div className='container'>
      <title>Pricelist</title>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App