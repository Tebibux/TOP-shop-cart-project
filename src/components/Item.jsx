function Item() {
    return (
        <div className="max-w-xs bg-white rounded-2xl shadow p-4 flex flex-col gap-3 m-2">
            <img src="src/assets/images/Screenshot from 2025-11-24 15-03-47.png" alt="item image" className="w-full h-40 object-cover rounded-xl" />
            <h3 className="text-lg font-semibold text-gray-800">Item Name</h3>
            <p>Item Description</p>
            <span>Price: $0.00</span>
        </div>
    )
}

export default Item