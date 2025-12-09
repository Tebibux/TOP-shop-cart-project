export async function dataFethched() {
    const requestingLinkData = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .catch(err => console.log("Error fetching data:", err));
    return requestingLinkData;
}
