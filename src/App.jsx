import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header.jsx';
import MainBody from './components/mainBody.jsx';
import Footer from './components/footer.jsx';


// Mock API fetch function
import { dataFethched } from "./assets/storeapi.js"

//  <Item cartItems={props.cartItems} setCartItems={props.setCartItems} />
// waiting for data fetch
const allItemsData = await dataFethched();


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Header cartItems={cartItems} />
      <MainBody allItemsData={allItemsData} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  )
}

export default App
