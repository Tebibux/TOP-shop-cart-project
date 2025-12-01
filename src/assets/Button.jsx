import React from 'react'

function Button(props) {
    const buttonSytle = {
        color: props.color ? props.color : 'black',
        backgroundColor: props.bgColor ? props.bgColor : 'white',
        padding: props.padding ? props.padding : '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }

    function checkFunc() {
        console.log("Cart Items:", props.cartItems);
    }


    return (
        <div onClick={checkFunc} style={buttonSytle}>{props.btnName} </div>
    )
}

export default Button