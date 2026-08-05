// ===============================
// COLLECTION FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".collection-item");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

const filter = button.getAttribute("data-filter");

cards.forEach(card => {

if(filter === "all"){

card.classList.remove("hide");

}else if(card.classList.contains(filter)){

card.classList.remove("hide");

}else{

card.classList.add("hide");

}

});

});

});
//==============================
// Scroll To Top
//==============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});