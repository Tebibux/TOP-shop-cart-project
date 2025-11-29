import Button from "../assets/Button";
import { cartCount } from "./Item";

const Header = () => {
    cosnt[cartCount, setCartCount] = cartCount(0);


    function addToCartFunction() {
        setCartCount(cartCount + count);
        setCount(0);
    }
    return (
        <div className="bg-gray-900 text-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
                <div className="text-3x1 font-bold underline">Warka Printing Shop</div>
                <div className="flex items-center justify-between">
                    <button className="nav px-8">Cart</button>
                    <Button btnName={`Items ${cartCount}`} />
                </div>
            </nav>
        </div>
    )
}

export default Header;