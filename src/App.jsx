import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header.jsx';
import MainBody from './components/mainBody.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    console.log("Cart Items in App:", cartItems);
  }, [cartItems]);

  return (
    <div>
      <Header cartItems={cartItems} />
      <MainBody cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  )
}

export default App
