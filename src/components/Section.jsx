import { useState } from "react"

function Section(props) {
    // chech the status of all section data
    const [sectionDataStatus, setSectionDataStatus] = useState({})

    const tempName = props.allItemsData[0].category;




    return (
        <div className="w-64 h-screen sticky top-0 bg-white border-r p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>

            <ul className="space-y-3 text-gray-700">
                <li className="cursor-pointer hover:text-blue-600 hover:font-bold">All Items</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Electronics</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Men's Clothing</li>
                <li className="cursor-pointer hover:text-blue-600 hover:font-medium">Women's Clothing</li>
            </ul>
        </div>


    )
}

export default Section