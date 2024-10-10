const partners = [
    {
        id: 1,
        name: "Madhurani",
        speciality: "North-indian Food"
    },
    {
        id: 2,
        name: "Priyadarshani",
        speciality: "South-indian Food"
    }, {
        id: 3,
        name: "Amrita",
        speciality: "East-indian Food"
    }, {
        id: 4,
        name: "Kamal",
        speciality: "West-indian Food"
    }
];

function gotocookinfo(id) {
    console.log(id);
    localStorage.setItem('cook_id', id);
    window.location.href = "./cookInfo.html";
}

document.addEventListener('DOMContentLoaded', () => {
    let cooks = partners.map((element) => {
        return `
        <div class="card card-style " onclick="gotocookinfo(${element.id})">
            <img
            src="../assets/Partner${element.id}.png"
            class="card-img-top" alt="...">
            
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <b><p class="card-text">Speciality : ${element.speciality}</p></b>
            <p>\<p>
            </div>
            <div>
            <h2 class="card-price"><img src="../assets/rating_starts.png" alt=""></h2>
            </div>
        </div>
        `
    }).join("");
    console.log(typeof (cooks));
    const cardgrp = document.querySelector('.card-grp');
    cardgrp.innerHTML = cooks;

})