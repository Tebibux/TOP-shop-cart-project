function Item({
    title,
    description,
    price,
    imageSrc,
}) {

    return (
        <div className="max-w-xs bg-white rounded-2xl shadow p-4 flex flex-col gap-3 m-2">
            <img src={imageSrc} alt="item image" className="w-full h-40 object-cover rounded-xl" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm font-semibold text-gray-800">{description}</p>
            <span className="text-base font-medium text-gray-700">Price: ${price}</span>
            <div className="flex items-center gap-3 mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded-full text-lg font-bold" id="btnMinus" >-</button>
                <span className="text-lg font-semibold">{0}</span>
                <button className="px-3 py-1 bg-gray-200 rounded-full text-lg font-bold" id="btnPlus" >+</button>
                <button className="" > Add</button>
            </div>
        </div>
    )
}

export default Item;