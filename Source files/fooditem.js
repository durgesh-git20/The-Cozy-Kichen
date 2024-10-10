const food_list = [
    {
        id: "1",
        name: "Greek salad",
        image: "../assets/food_1.png",
        price: 12,
        description: "A fresh and crunchy mix of cucumbers, tomatoes, olives, and feta cheese. Perfect for a healthy lunch or dinner.",
        category: "Salad",
        cook: "Kamakshi"
    },
    {
        id: "2",
        name: "Veg salad",
        image: "../assets/food_2.png",
        price: 18,
        description: "A vibrant combination of fresh vegetables, tossed with a light dressing. Ideal for a nutritious meal.",
        category: "Salad",
        cook: "Amrita"
    },
    {
        id: "3",
        name: "Clover Salad",
        image: "../assets/food_3.png",
        price: 16,
        description: "A unique blend of clover leaves and assorted greens, offering a distinctive taste. Refreshing and healthy.",
        category: "Salad",
        cook: "Priyadarshani"
    },
    {
        id: "4",
        name: "Chicken Salad",
        image: "../assets/food_4.png",
        price: 24,
        description: "Grilled chicken pieces mixed with fresh veggies and a tangy dressing. A fulfilling and protein-rich meal.",
        category: "Salad",
        cook: "Madhurani"
    },
    {
        id: "5",
        name: "Lasagna Rolls",
        image: "../assets/food_5.png",
        price: 14,
        description: "Delicious lasagna sheets rolled up with a rich meat filling. A delightful twist on a classic dish.",
        category: "Rolls",
        cook: "Kamakshi"
    },
    {
        id: "6",
        name: "Peri Peri Rolls",
        image: "../assets/food_6.png",
        price: 12,
        description: "Spicy and tangy peri peri flavored rolls, perfect for a quick snack. Packed with bold flavors.",
        category: "Rolls",
        cook: "Amrita"
    },
    {
        id: "7",
        name: "Chicken Rolls",
        image: "../assets/food_7.png",
        price: 20,
        description: "Juicy chicken pieces wrapped in a soft roll. Ideal for a satisfying and easy-to-eat meal.",
        category: "Rolls",
        cook: "Priyadarshani"
    },
    {
        id: "8",
        name: "Veg Rolls",
        image: "../assets/food_8.png",
        price: 15,
        description: "A medley of vegetables wrapped in a crisp roll. Healthy and delicious, great for any time of the day.",
        category: "Rolls",
        cook: "Madhurani"
    },
    {
        id: "9",
        name: "Ripple Ice Cream",
        image: "../assets/food_9.png",
        price: 14,
        description: "Creamy ice cream with ripples of chocolate throughout. Perfect for cooling down on a hot day.",
        category: "Desserts",
        cook: "Kamakshi"
    },
    {
        id: "10",
        name: "Fruit Ice Cream",
        image: "../assets/food_10.png",
        price: 22,
        description: "Refreshing ice cream made with real fruit pieces. A delicious and fruity treat.",
        category: "Desserts",
        cook: "Amrita"
    },
    {
        id: "11",
        name: "Jar Ice Cream",
        image: "../assets/food_11.png",
        price: 10,
        description: "Conveniently packed ice cream in a jar. Easy to carry and enjoy anywhere.",
        category: "Desserts",
        cook: "Priyadarshani"
    },
    {
        id: "12",
        name: "Vanilla Ice Cream",
        image: "../assets/food_12.png",
        price: 12,
        description: "Classic vanilla ice cream with a rich and creamy texture. A timeless favorite.",
        category: "Desserts",
        cook: "Madhurani"
    },
    {
        id: "13",
        name: "Chicken Sandwich",
        image: "../assets/food_13.png",
        price: 12,
        description: "Grilled chicken sandwich with fresh lettuce and tomatoes. Perfect for a quick and tasty meal.",
        category: "Sandwich",
        cook: "Kamakshi"
    },
    {
        id: "14",
        name: "Vegan Sandwich",
        image: "../assets/food_14.png",
        price: 18,
        description: "A hearty sandwich filled with fresh vegetables and vegan spreads. Ideal for a plant-based diet.",
        category: "Sandwich",
        cook: "Amrita"
    },
    {
        id: "15",
        name: "Grilled Sandwich",
        image: "../assets/food_15.png",
        price: 16,
        description: "Crispy grilled sandwich with a melty cheese center. Perfect for a warm and comforting meal.",
        category: "Sandwich",
        cook: "Priyadarshani"
    },
    {
        id: "16",
        name: "Bread Sandwich",
        image: "../assets/food_16.png",
        price: 24,
        description: "Simple yet delicious sandwich made with freshly baked bread. Great for a quick bite.",
        category: "Sandwich",
        cook: "Madhurani"
    },
    {
        id: "17",
        name: "Cup Cake",
        image: "../assets/food_17.png",
        price: 14,
        description: "Soft and fluffy cupcake with a rich frosting. A delightful treat for any occasion.",
        category: "Cake",
        cook: "Kamakshi"
    },
    {
        id: "18",
        name: "Vegan Cake",
        image: "../assets/food_18.png",
        price: 12,
        description: "Delicious cake made without any animal products. Perfect for a vegan diet.",
        category: "Cake",
        cook: "Amrita"
    },
    {
        id: "19",
        name: "Butterscotch Cake",
        image: "../assets/food_19.png",
        price: 20,
        description: "Rich and buttery butterscotch cake. Ideal for celebrations and special occasions.",
        category: "Cake",
        cook: "Priyadarshani"
    },
    {
        id: "20",
        name: "Sliced Cake",
        image: "../assets/food_20.png",
        price: 15,
        description: "Pre-sliced cake pieces, perfect for sharing. A convenient and delicious dessert option.",
        category: "Cake",
        cook: "Madhurani"
    },
    {
        id: "21",
        name: "Garlic Mushroom",
        image: "../assets/food_21.png",
        price: 14,
        description: "Sauteed mushrooms with a rich garlic flavor. A savory and healthy dish.",
        category: "Pure Veg",
        cook: "Kamakshi"
    },
    {
        id: "22",
        name: "Fried Cauliflower",
        image: "../assets/food_22.png",
        price: 22,
        description: "Crispy fried cauliflower with a spicy kick. A tasty and satisfying snack.",
        category: "Pure Veg",
        cook: "Amrita"
    },
    {
        id: "23",
        name: "Mix Veg Pulao",
        image: "../assets/food_23.png",
        price: 10,
        description: "Aromatic rice cooked with a mix of fresh vegetables. A wholesome and delicious meal.",
        category: "Pure Veg",
        cook: "Priyadarshani"
    },
    {
        id: "24",
        name: "Rice Zucchini",
        image: "../assets/food_24.png",
        price: 12,
        description: "Flavorful rice mixed with fresh zucchini. A light and nutritious dish.",
        category: "Pure Veg",
        cook: "Madhurani"
    },
    {
        id: "25",
        name: "Cheese Pasta",
        image: "../assets/food_25.png",
        price: 12,
        description: "Creamy pasta with a rich cheese sauce. A comforting and delicious meal.",
        category: "Pasta",
        cook: "Kamakshi"
    },
    {
        id: "26",
        name: "Tomato Pasta",
        image: "../assets/food_26.png",
        price: 18,
        description: "Pasta in a tangy and flavorful tomato sauce. A classic Italian dish.",
        category: "Pasta",
        cook: "Amrita"
    },
    {
        id: "27",
        name: "Creamy Pasta",
        image: "../assets/food_27.png",
        price: 16,
        description: "Rich and creamy pasta with a smooth sauce. Perfect for a delicious dinner.",
        category: "Pasta",
        cook: "Priyadarshani"
    },
    {
        id: "28",
        name: "Chicken Pasta",
        image: "../assets/food_28.png",
        price: 24,
        description: "Hearty pasta with tender chicken pieces and a rich sauce. A satisfying meal.",
        category: "Pasta",
        cook: "Madhurani"
    },
    {
        id: "29",
        name: "Buttter Noodles",
        image: "../assets/food_29.png",
        price: 14,
        description: "Soft noodles coated in a rich buttery sauce. A simple and tasty dish.",
        category: "Noodles",
        cook: "Kamakshi"
    },
    {
        id: "30",
        name: "Veg Noodles",
        image: "../assets/food_30.png",
        price: 12,
        description: "Flavorful noodles mixed with a variety of fresh vegetables. A healthy and satisfying meal.",
        category: "Noodles",
        cook: "Amrita"
    },
    {
        id: "31",
        name: "Somen Noodles",
        image: "../assets/food_31.png",
        price: 20,
        description: "Thin and delicate somen noodles, served cold or hot. A versatile and delicious dish.",
        category: "Noodles",
        cook: "Priyadarshani"
    },
    {
        id: "32",
        name: "Cooked Noodles",
        image: "../assets/food_32.png",
        price: 15,
        description: "Classic cooked noodles with a savory flavor. Great as a main dish or a side.",
        category: "Noodles",
        cook: "Madhurani"
    }
];

const fooddiv = document.querySelector("#fooditem-outerdiv");
let search_id = localStorage.getItem('Searchitem');
let fooditem;
for (let i = 0; i < food_list.length; i++) {
    if (food_list[i].id == search_id) { fooditem = food_list[i]; break; }
}

async function showAlert() {
    const alertmsg = document.querySelector('.alert-mystyle');
    alertmsg.classList.remove('hide');
    alertmsg.classList.add('setright');
    setTimeout(() => {
        alertmsg.classList.add('translation');
        setTimeout(() => { alertmsg.classList.remove('setright'); alertmsg.classList.remove('translation'); alertmsg.classList.add('hide'); }, 1500);
    }, 100);

}

console.log(fooditem);
function addToCart(id) {
    let arr = JSON.parse(localStorage.getItem('cartArr'));
    if (arr == null) { arr = [[id, 1]]; }
    else {
        let i = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i][0] == id) { arr[i][1]++; break; }
        }
        if (i == arr.length) {
            arr.push([id, 1]);
        }
    }
    localStorage.setItem('cartArr', JSON.stringify(arr));
    showAlert();
}

function buyNow(id, quantity) {
    let arr = [[id, quantity]];
    localStorage.setItem('bill_items', JSON.stringify(arr));
    window.location.href = "./bill.html";
}

fooddiv.innerHTML = `
        <div class="product-container">
            <div class="product-image">
                <img src="${fooditem.image}" alt="Food Image">
            </div>
            <div class="product-details">
                <h1>${fooditem.name}</h1>
                <p class="description">${fooditem.description}</p>
                <p class="price">${fooditem.price}</p>
                <p class="cook-name">Cooked by: ${fooditem.cook}</p>
                <div class="offers">
                    <p>Available offers:</p>
                    <ul>
                        <li>Get ₹50 Instant Discount on first order above ₹200</li>
                        <li>5% Cashback on select bank cards</li>
                        <li>Special Price: Extra 10% off</li>
                        <li>Sign-up and get free delivery for a month</li>
                    </ul>
                </div>
                <div class="action-buttons">
                    <button class="add-to-cart" onclick="addToCart(${fooditem.id})">Add to Cart</button>
                    <button class="buy-now" onclick="buyNow(${fooditem.id},${1})">Buy Now</button>
                </div>
            </div>
        </div>
`
