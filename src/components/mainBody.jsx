import Items from "./Items";
import Section from "./Section.jsx";


function MainBody(props) {
    return (
        <div className="flex">
            <section>
                <Section />
            </section>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 flex-1">
                <Items cartItems={props.cartItems} setCartItems={props.setCartItems} />
            </main>
        </div>
    )
}

export default MainBody