const features = document.querySelector(".features > p");
const featuresList = document.querySelector(".features ul");
const featuesArrow = document.querySelector("header nav .features p img");
const company = document.querySelector(".company > p");
const companyList = document.querySelector(".company ul");
const companyArrow = document.querySelector("header nav .company p img");
const mobileNav = document.querySelector("header .right-content");
const menuBtn = document.querySelector("header .menu");
const closeMenuBtn = document.querySelector("header .right-content .close-menu");
const overlay = document.querySelector(".overlay");

features.addEventListener("click", ()=>{
    featuresList.classList.toggle("display");
    if(featuresList.classList.contains("display")) {
        featuesArrow.src = "./images/icon-arrow-up.svg"
    } else {
        featuesArrow.src = "./images/icon-arrow-down.svg"
    }
})

company.addEventListener("click", ()=>{
    companyList.classList.toggle("display")
    if(companyList.classList.contains("display")) {
        companyArrow.src = "./images/icon-arrow-up.svg"
    } else {
        companyArrow.src = "./images/icon-arrow-down.svg"
    }
})

menuBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "flex";
    overlay.style.display = "block";
})

closeMenuBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "none";
    overlay.style.display = "none";
})

