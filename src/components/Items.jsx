import Item from "./Item.jsx"
function Items(props) {
    return (
        < >
            <Item cartItems={props.cartItems} />
            <Item cartItems={props.cartItems} />
            <Item cartItems={props.cartItems} />
            <Item cartItems={props.cartItems} />
        </>
    )
}

export default Items