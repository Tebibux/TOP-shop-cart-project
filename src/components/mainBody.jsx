import Items from "./Items";
import Section from "./Section.jsx";


function MainBody() {
    return (
        <div className="flex">
            <section>
                <Section />
            </section>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 flex-1">
                <Items />
            </main>
        </div>
    )
}

export default MainBody