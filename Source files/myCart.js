const food_list = [
    {
        id: "1",
        name: "Greek salad",
        price: 12
    },
    {
        id: "2",
        name: "Veg salad",
        price: 18
    },
    {
        id: "3",
        name: "Clover Salad",
        price: 16
    },
    {
        id: "4",
        name: "Chicken Salad",
        price: 24
    },
    {
        id: "5",
        name: "Lasagna Rolls",
        price: 14
    },
    {
        id: "6",
        name: "Peri Peri Rolls",
        price: 12
    },
    {
        id: "7",
        name: "Chicken Rolls",
        price: 20
    },
    {
        id: "8",
        name: "Veg Rolls",
        price: 15
    },
    {
        id: "9",
        name: "Ripple Ice Cream",
        price: 14
    },
    {
        id: "10",
        name: "Fruit Ice Cream",
        price: 22
    },
    {
        id: "11",
        name: "Jar Ice Cream",
        price: 10
    },
    {
        id: "12",
        name: "Vanilla Ice Cream",
        price: 12
    },
    {
        id: "13",
        name: "Chicken Sandwich",
        price: 12
    },
    {
        id: "14",
        name: "Vegan Sandwich",
        price: 18
    },
    {
        id: "15",
        name: "Grilled Sandwich",
        price: 16
    },
    {
        id: "16",
        name: "Bread Sandwich",
        price: 24
    },
    {
        id: "17",
        name: "Cup Cake",
        price: 14
    },
    {
        id: "18",
        name: "Vegan Cake",
        price: 12
    },
    {
        id: "19",
        name: "Butterscotch Cake",
        price: 20
    },
    {
        id: "20",
        name: "Sliced Cake",
        price: 15
    },
    {
        id: "21",
        name: "Garlic Mushroom",
        price: 14
    },
    {
        id: "22",
        name: "Fried Cauliflower",
        price: 22
    },
    {
        id: "23",
        name: "Mix Veg Pulao",
        price: 10
    },
    {
        id: "24",
        name: "Rice Zucchini",
        price: 12
    },
    {
        id: "25",
        name: "Cheese Pasta",
        price: 12
    },
    {
        id: "26",
        name: "Tomato Pasta",
        price: 18
    },
    {
        id: "27",
        name: "Creamy Pasta",
        price: 16
    },
    {
        id: "28",
        name: "Chicken Pasta",
        price: 24
    },
    {
        id: "29",
        name: "Buttter Noodles",
        price: 14
    },
    {
        id: "30",
        name: "Veg Noodles",
        price: 12
    },
    {
        id: "31",
        name: "Somen Noodles",
        price: 20
    },
    {
        id: "32",
        name: "Cooked Noodles",
        price: 15
    }
];

let arr = JSON.parse(localStorage.getItem('cartArr'));
// parsing data is important as data stored as string in local storage to get it into its real form...
console.log(arr);
const table = document.querySelector(".my-table-body");
const total_head = document.querySelector('h2');

function removeItem(ind) {
    arr[ind][1]--;
    if (arr[ind][1] == 0) arr.splice(ind, 1);
    localStorage.setItem('cartArr', JSON.stringify(arr));
    location.reload();
}

function clearCart() {
    arr = [];
    localStorage.setItem('cartArr', JSON.stringify(arr));
    location.reload();
}

function addall() {
    let arr = JSON.parse(localStorage.getItem('cartArr'));
    localStorage.setItem('bill_items', JSON.stringify(arr));
    location.href = "./bill.html";
}

function orderNow(id, val) {
    let arr = [[id, val]];
    localStorage.setItem('bill_items', JSON.stringify(arr));
    location.href = "./bill.html";
}

document.addEventListener('DOMContentLoaded', () => {

    let total = 0;
    arr.forEach((element, ind) => {
        if (element.length != 0) {
            let fooditem;
            for (let i = 0; i < food_list.length; i++) {
                if (food_list[i].id == element[0]) {
                    fooditem = food_list[i];
                    break;
                }
            }
            total += fooditem.price * element[1];
            table.insertAdjacentHTML('beforeend', `
            <tr>
                <th scope="row">${ind + 1}</th>
                <th scope="row">${fooditem.name}</th>
                <th scope="row">${fooditem.price}</th>
                <th scope="row">${element[1]}</th>
                <th scope="row">${fooditem.price * element[1]}</th>
                <th scope="row">
                <button type="button" class="btn btn-secondary" onclick="orderNow(${fooditem.id},${element[1]})">Order Now</button></th>
                <th scope="row" onclick="removeItem(${ind})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg></th>
            </tr>
        `);
        }
    }
    );
    total_head.innerText = "Total : " + total;
});
