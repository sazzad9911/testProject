import React from 'react';
import './App.css';
import Cart from './components/Cart'

function App() {

  return (
    <div style={{
      display: 'flex',
    }}>
    
    <Cart image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTC642YlDroPGgWKzzqd9Wm6oyKQP6zwHn5PDu_JNCiAV8EjhM1mqbd9z0hKfJRZBD7o&usqp=CAU' headLine='Sports' body='Get 10% discount your order'/>
    <Cart image='https://www.freeiconspng.com/thumbs/shoes-png/running-shoes-png-sneakers-23.png' headLine='Shoes' body='CASUAL, STYLISH, & TRENDY'/>
    </div>
  );
}

export default App;
