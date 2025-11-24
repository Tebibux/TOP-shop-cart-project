import Items from "./Items";
import Section from "./Section.jsx";


function MainBody() {
    return (
        <div className="flex h-screen" >
            <div className="w-64 h-full p-4 border-r border-gray-100 sticky top-0">
                <Section />
            </div>
            <div className="flex-1 h-full overflow-y-auto p-6">
                <Items />
            </div>
        </div>
    )
}

export default MainBody