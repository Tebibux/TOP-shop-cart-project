function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 px-6 mt-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
                    <p className="mb-2">Address: Wolaita Sodo, South Ethiopia</p>
                    <p className="mb-2">Phone: +251982242400</p>
                    <a href="tebibusolomon79@gmail.com" className="mb-2">Email: tebibusolomon79@gmail.com</a>
                    <p className="mb-2">&copy; {new Date().getFullYear()} Warka Printing</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer