import { useState } from "react"


function Item() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
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
                <button className="">Add</button>
            </div>
        </div>
    )
}

export default Item