const data = fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => data);
;