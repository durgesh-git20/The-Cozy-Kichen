function storeText1(text) {
    console.log("storing local data...")
    localStorage.setItem('searchQuery', text);
    console.log(text);
    window.location.href = './Source files/search.html';
}


document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.querySelector('.menu-items');

    // Assuming menu_list is an array of objects with 'menu_image' and 'menu_name' properties
    const menu_list = [
        {
            menu_name: "Salad",
            menu_image: "./assets/menu_1.png"
        },
        {
            menu_name: "Rolls",
            menu_image: "./assets/menu_2.png"
        },
        {
            menu_name: "Deserts",
            menu_image: "./assets/menu_3.png"
        },
        {
            menu_name: "Sandwich",
            menu_image: "./assets/menu_4.png"
        },
        {
            menu_name: "Cake",
            menu_image: "./assets/menu_5.png"
        },
        {
            menu_name: "Pure Veg",
            menu_image: "./assets/menu_6.png"
        },
        {
            menu_name: "Pasta",
            menu_image: "./assets/menu_7.png"
        },
        {
            menu_name: "Noodles",
            menu_image: "./assets/menu_8.png"
        }]

    const itemsHTML = menu_list.map(item => {
        return `
                <div class="menu-item" onclick=storeText1("${item.menu_name}")>
                    <img src="${item.menu_image}" alt="${item.menu_name}">
                    <p class="menu-name">${item.menu_name}</p>
                </div>
            `;
    }).join("");

    // Inject the generated HTML into the container
    itemsContainer.innerHTML = itemsHTML;
});

