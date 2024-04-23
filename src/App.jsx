import { useState } from 'react'
import { Link } from 'react-router-dom';
const  App = () => {

  return (
    <>
    <h1 className=''>hi there</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>products</Link></li>

      </ul>
    </>
  );
}

export default App;
