const partners = [
    {
        id: 1,
        name: "Madhurani",
        speciality: "North-indian Food",
        description: "Madhurani has over 20 years of experience in preparing authentic North Indian cuisine. She specializes in rich, flavorful dishes like butter chicken, paneer tikka, and various types of bread.",
        plate_price: 150,
        monthly_sub_price: 4000
    },
    {
        id: 2,
        name: "Priyadarshani",
        speciality: "South-indian Food",
        description: "Priyadarshani is a culinary expert in traditional South Indian dishes. Her specialties include dosa, idli, sambar, and various coconut-based curries.",
        plate_price: 130,
        monthly_sub_price: 3500
    },
    {
        id: 3,
        name: "Amrita",
        speciality: "East-indian Food",
        description: "Amrita brings the flavors of East India to your plate. She is known for her fish curries, mustard-based dishes, and a variety of sweets like rasgulla and sandesh.",
        plate_price: 140,
        monthly_sub_price: 3700
    },
    {
        id: 4,
        name: "Kamal",
        speciality: "West-indian Food",
        description: "Kamal is renowned for his expertise in West Indian cuisine. His menu features spicy curries, seafood dishes, and unique preparations like Goan vindaloo and Parsi dhansak.",
        plate_price: 160,
        monthly_sub_price: 4200
    }
];

function gotobill(id, val) {
    let bill = [[100 + id, val]];
    localStorage.setItem('bill_items', JSON.stringify(bill));
    window.location.href = "./bill.html";
}


document.addEventListener('DOMContentLoaded', () => {

    let cook_id = localStorage.getItem('cook_id');
    let cook_obj;
    for (i = 0; i < partners.length; i++) {
        if (partners[i].id == cook_id) { cook_obj = partners[i]; break; }
    }

    cookhtml = `
    <div class="product-container" style="background-color: #E3F2FD;">
            <div class="product-image">
                <img src="../assets/Partner${cook_obj.id}.png"alt="Food Image">
            </div>
            <div class="product-details">
                <h1><b>${cook_obj.name}</b></h1>
                <p style="margin-top: 5px;">Speciality : ${cook_obj.speciality}</p>
                <p>${cook_obj.description}</p>
                <p>per plate cost : ${cook_obj.plate_price}</p>
                <p>Monthly Subscription : ${cook_obj.monthly_sub_price}</p>
                <p><b>Enjoy The best Ever Taste !!!</b><p>
                <div style="display:flex; justify-content:space-evenly">
                    <button type="button" class="btn btn-outline-primary" onclick="gotobill(${cook_obj.id},${1})">Try Out Today</button>
                    <button type="button" class="btn btn-outline-success" onclick="gotobill(${cook_obj.id},${2})">Monthly Subscription</button>
                </div>
            </div>
        </div>
    `
    let cookbox = document.querySelector('#cookOuterDiv');
    cookbox.innerHTML = cookhtml;

})


