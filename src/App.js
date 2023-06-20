import {Link,Route, Routes} from 'react-router-dom'
import React from 'react';
import Home from './components/Home'
import Personajes from './components/Personajes'
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      
        <Link to='/'>Home</Link> <br/>
        <Link to='/personajes'>Personajes</Link>
        <hr/>
        <Routes>
          <Route path='/' exact="true" element={<Home/>}/>
          <Route path='/personajes' element={<Personajes/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
