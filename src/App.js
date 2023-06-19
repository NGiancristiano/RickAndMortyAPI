import {Link,Route, Routes} from 'react-router-dom'
import React from 'react';
import Home from './components/Home'
import Personajes from './components/Personajes';

function App() {
  return (
    <div>
      
        <Link to='/'>Home</Link> <br/>
        <Link to='/personajes'>Personajes</Link>
        <hr/>
        <Routes>
          <Route path='/' exact="true" element={<Home/>}/>
          <Route path='/personajes' element={<Personajes/>}/>
        </Routes>
    </div>
  );
}

export default App;
