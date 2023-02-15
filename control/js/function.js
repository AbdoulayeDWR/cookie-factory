// création de variable
let nbCookie = 0;
let nbMoney = 0;
let nbGrandma = 0;
let price = 50;
let nbDollard = 0;

//affiliation
let btnCookie = document.getElementById("cookie");
let count = document.getElementById("count");
let money = document.getElementById("money");
let grandma = document.getElementById("grandma");
let dollard = document.getElementById("dollard")
let btnBuy = document.getElementById("buy");

//fonction du clicker
btnCookie.onclick = function () {
    nbCookie += (1 + nbGrandma);
    nbMoney += (1 + nbGrandma);
    money.innerHTML = nbMoney;
    count.innerHTML = nbCookie;
    
};

// fonction des grands-mères
btnBuy.onclick = function () {
    if (nbMoney >= price) {
        nbGrandma += 1;
        grandma.innerHTML = nbGrandma;
        nbMoney = nbMoney - price;
        money.innerHTML = nbMoney;
    };
    if (nbGrandma >= nbDollard + 10) {
        price = price * 2;
        dollard.innerHTML = price;
        nbDollard += 10;
    };
}
