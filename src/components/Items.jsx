import { dataFethched } from "../assets/storeapi.js"
import Item from "./Item.jsx"

//  <Item cartItems={props.cartItems} setCartItems={props.setCartItems} />

const itemsData = await dataFethched();


function Items(props) {
    return (
        < >
            {itemsData.map((item) => <Item key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imageSrc={item.image}
            />)}
        </>
    )
}

export default Items

