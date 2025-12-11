
import Item from "./Item.jsx"




function Items(props) {
    return (
        < >
            {console.log("All Items Data in Items Component:", props.allItemsData)}
            {props.allItemsData.map((item) => <Item key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imageSrc={item.image}
            />)}
        </>
    )
}

export default Items

