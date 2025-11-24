
const Header = () => {
    return (
        <div className="bg-gray-900 text-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
                <div className="text-3x1 font-bold underline">Warka Printing Shop</div>
                <div className="flex items-center justify-between">
                    <div className="nav px-8">Cart</div>
                    <div className="user px-8">User</div>
                </div>
            </nav>
        </div>
    )
}

export default Header;