import { dataFethched } from "../assets/storeapi.js"
import Item from "./Item.jsx"

//  <Item cartItems={props.cartItems} setCartItems={props.setCartItems} />

const itemsData = await dataFethched();


function Items(props) {
    return (
        < >
            {itemsData.map((item) => <Item key={item.id}
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                id={item.id}
                categrory={item.category}
                rating={item.rating}

            />)}
        </>
    )
}

export default Items



// {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
//     category: "women's clothing",
//     image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png',
//     rating: { rate: 4.5, count: 146 }
// }