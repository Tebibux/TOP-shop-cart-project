import { useState } from 'react'
import './App.css';
import Header from './components/header.jsx';
import MainBody from './components/mainBody.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Header cartItems={cartItems} />
      <MainBody cartItems={cartItems} />
      <Footer />
    </div>
  )
}

export default App
