function Section() {
    return (
        <div class="w-64 h-screen sticky top-0 bg-white border-r p-4 overflow-y-auto">
            <h2 class="text-xl font-semibold mb-4">Categories</h2>

            <ul class="space-y-3 text-gray-700">
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">All Items</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Electronics</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Clothing</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Shoes</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Accessories</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Sports & Fitness</li>
                <li class="cursor-pointer hover:text-blue-600 hover:font-medium">Books</li>
            </ul>
        </div>


    )
}

export default Section