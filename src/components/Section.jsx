function Section() {
    return (
        <div className="w-64 h-screen sticky top-0 bg-white border-r p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>

            <ul className="space-y-3 text-gray-700">
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">All Items</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Electronics</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Clothing</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Shoes</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Accessories</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Sports & Fitness</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Books</li>
            </ul>
        </div>


    )
}

export default Section