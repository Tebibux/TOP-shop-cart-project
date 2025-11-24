import Items from "./Items";
import Section from "./Section.jsx";


function MainBody() {
    return (
        <div className="flex">
            <section className="w-64 sticky top-0 h-screen bg-gray-100 p-4">
                <Section />
            </section>
            <main className="flex-1 p-6 overflow-auto">
                <Items />
            </main>
        </div>
    )
}

export default MainBody