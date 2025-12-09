import { useState } from "react";


// {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
//     category: "women's clothing",
//     image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png',
//     rating: { rate: 4.5, count: 146 }
// }



function Item(props) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function addToCartFunc() {
        if (count <= 0) return
        console.log("Added to cart:", count);
        console.log("Current cart items:", props.cartItems.length);
        setCount(0);
        setCartItems(...cartItems, count);
    }

    return (
        <div className="max-w-xs bg-white rounded-2xl shadow p-4 flex flex-col gap-3 m-2">
            <img src="src/assets/images/Screenshot from 2025-11-24 15-03-47.png" alt="item image" className="w-full h-40 object-cover rounded-xl" />
            <h3 className="text-lg font-semibold text-gray-800">Item Name</h3>
            <p className="text-sm font-semibold text-gray-800">Item Description</p>
            <span className="text-base font-medium text-gray-700">Price: $0.00</span>
            <div className="flex items-center gap-3 mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded-full text-lg font-bold" id="btnMinus" onClick={() => decrement()}>-</button>
                <span className="text-lg font-semibold">{count}</span>
                <button className="px-3 py-1 bg-gray-200 rounded-full text-lg font-bold" id="btnPlus" onClick={() => increment()}>+</button>
                <button className="" onClick={addToCartFunc}> Add</button>
            </div>
        </div>
    )
}

export default Item;