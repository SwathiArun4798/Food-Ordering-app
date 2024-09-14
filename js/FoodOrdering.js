
const filterFood = () => {
    let filter = document.getElementById("search").value.toUpperCase();
    let foodCards = document.getElementsByClassName("card");

    for (let i = 0; i < foodCards.length; i++) {

        let foodName = foodCards[i].getElementsByTagName("h2")[0];
        if (foodName) {
            if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1) {
                foodCards[i].style.display = "";
            } else {
                foodCards[i].style.display = "none";
            }
        }
    }
}

let listCart = [];

const addToCart = (foodName, price) => {
    const existingFood = listCart.find(food => food.foodName === foodName);
    if (existingFood) {
        existingFood.quantity++;
    } else {
        listCart.push({
            foodName: foodName,
            price: price,
            quantity: 1
        })
    }
    incrementCart();
}

const incrementCart = () => {

    let listCartCount = 0;
    for (let i = 0; i < listCart.length; i++) {
        listCartCount += listCart[i].quantity;
    }

    document.getElementById("cart-count").innerText = listCartCount;
}

const displayCart = () => {
    document.getElementById("cart-sidebar").style.width = "100%";
    document.getElementById("cart-sidebar").style.display = "block";


    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].quantity >= 1) {
            const imagePath = `images/${listCart[i].foodName}.avif`;
            cartItems.innerHTML += `
            <div class="cart-item">
                <img src=${imagePath} alt=${listCart[i].foodName} Icon width="100" height="100" />
                <div class="quantity-container">
                <button onclick="decrementQuantity(${i})">-</button>
                <p id ="quantity">${listCart[i].quantity}</p>
                 <button onclick="incrementQuantity(${i})">+</button>
                </div>
                <span>$${listCart[i].price * listCart[i].quantity}</span>
            </div>
            `
        }
    }

    let total = 0;
    for (let i = 0; i < listCart.length; i++) {
        total += listCart[i].price * listCart[i].quantity;
    }
    document.getElementById("cart-total").innerHTML = total ? `Total: ${total}` : "Cart is empty";
}
const incrementQuantity = (index) => {
    listCart[index].quantity++;
    document.getElementById("quantity").innerHTML = listCart[index].quantity;
    displayCart();
    incrementCart();
}

const decrementQuantity = (index) => {
    if (listCart[index].quantity >= 1) {
        listCart[index].quantity--;
        if (listCart[index].quantity === 0) {
            listCart.splice(index, 1);
            displayCart();
            incrementCart();
            return;
        }
        document.getElementById("quantity").innerHTML = listCart[index].quantity;
        displayCart();
        incrementCart();
    }
}

const closeCart = () => {
    document.getElementById("cart-sidebar").style.width = "0";
    document.getElementById("cart-sidebar").style.display = "none";
}

const checkout = () => {
    window.location.href = "https://www.paypal.com/checkout/"
}



