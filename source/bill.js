const food_list = [
    { id: "1", name: "Greek salad", price: 12 },
    { id: "2", name: "Veg salad", price: 18 },
    { id: "3", name: "Clover Salad", price: 16 },
    { id: "4", name: "Chicken Salad", price: 24 },
    { id: "5", name: "Lasagna Rolls", price: 14 },
    { id: "6", name: "Peri Peri Rolls", price: 12 },
    { id: "7", name: "Chicken Rolls", price: 20 },
    { id: "8", name: "Veg Rolls", price: 15 },
    { id: "9", name: "Ripple Ice Cream", price: 14 },
    { id: "10", name: "Fruit Ice Cream", price: 22 },
    { id: "11", name: "Jar Ice Cream", price: 10 },
    { id: "12", name: "Vanilla Ice Cream", price: 12 },
    { id: "13", name: "Chicken Sandwich", price: 12 },
    { id: "14", name: "Vegan Sandwich", price: 18 },
    { id: "15", name: "Grilled Sandwich", price: 16 },
    { id: "16", name: "Bread Sandwich", price: 24 },
    { id: "17", name: "Cup Cake", price: 14 },
    { id: "18", name: "Vegan Cake", price: 12 },
    { id: "19", name: "Butterscotch Cake", price: 20 },
    { id: "20", name: "Sliced Cake", price: 15 },
    { id: "21", name: "Garlic Mushroom", price: 14 },
    { id: "22", name: "Fried Cauliflower", price: 22 },
    { id: "23", name: "Mix Veg Pulao", price: 10 },
    { id: "24", name: "Rice Zucchini", price: 12 },
    { id: "25", name: "Cheese Pasta", price: 12 },
    { id: "26", name: "Tomato Pasta", price: 18 },
    { id: "27", name: "Creamy Pasta", price: 16 },
    { id: "28", name: "Chicken Pasta", price: 24 },
    { id: "29", name: "Butter Noodles", price: 14 },
    { id: "30", name: "Veg Noodles", price: 12 },
    { id: "31", name: "Somen Noodles", price: 20 },
    { id: "32", name: "Cooked Noodles", price: 15 }
];

const partners = [
    {
        id: 1,
        name: "Madhurani",
        plate_price: 150,
        monthly_sub_price: 4000
    },
    {
        id: 2,
        name: "Priyadarshani",
        plate_price: 130,
        monthly_sub_price: 3500
    },
    {
        id: 3,
        name: "Amrita",
        plate_price: 140,
        monthly_sub_price: 3700
    },
    {
        id: 4,
        name: "Kamal",
        plate_price: 160,
        monthly_sub_price: 4200
    }
];


const tablestart = document.querySelector('#tablestart');
let subtotal_bill = 0;

document.addEventListener('DOMContentLoaded', () => {

    let arr = JSON.parse(localStorage.getItem('bill_items'));
    // parsing to retrieve original data;

    let tablerows = arr.map((ele) => {
        let name; let Quantity; let price;
        if (ele[0] > 100) {
            if (ele[1] == 1) name = partners[ele[0] - 101].name + "'s Kitchen - Try Out Plate";
            else name = partners[ele[0] - 101].name + "'s Kitchen - Monthly Subscription";
            Quantity = 1;
            if (ele[1] == 1) {
                price = partners[ele[0] - 101].plate_price;
            } else {
                price = partners[ele[0] - 101].monthly_sub_price;
            }
        }
        else {
            name = food_list[ele[0] - 1].name;
            Quantity = ele[1];
            price = food_list[ele[0] - 1].price;
        }

        subtotal_bill += Quantity * price;

        return `
                <tr>
                    <td>${name}</td>
                    <td>${Quantity}</td>
                    <td>${price}</td>
                    <td>${Quantity * price}</td>
                </tr>
            `
    }).join("");

    let endrows = `<tr>
                        <td colspan="3" class="text-right">Subtotal</td>
                        <td>${subtotal_bill}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">GST (18%)</td>
                        <td>${(subtotal_bill * 18) / 100}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Total</td>
                        <td>${subtotal_bill + subtotal_bill * 0.18}</td>
                    </tr>
                `;

    tablestart.insertAdjacentHTML('afterbegin', tablerows);
    tablestart.insertAdjacentHTML('beforeend', endrows);
});
