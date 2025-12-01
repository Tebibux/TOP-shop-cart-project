import Button from "../assets/Button";
import { useState } from "react";

const Header = () => {
    const [cartItems, setCartItems] = useState([]);


    return (
        <div className="bg-gray-900 text-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
                <div className="text-3x1 font-bold underline">Warka Printing Shop</div>
                <div className="flex items-center justify-between">
                    <button className="nav px-8">Cart</button>
                    <Button btnName={`Items`} />
                </div>
            </nav>
        </div>
    )
}

export default Header;