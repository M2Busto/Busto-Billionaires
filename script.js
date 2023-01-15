let Cash = Number(localStorage.getItem("Cash"))
let Lemonade = {Cash: 1, Enabled: true, Owned: true}
let Fuelling = {Cash: 3, Enabled: true, Owned: false}
let Designing = {Cash: 5, Enabled: true, Owned: false}
const Cash_Text = document.querySelector("#cash-text")
const Lemonade_Button = document.querySelector("#lemonde-button")
const Fuelling_Button = document.querySelector("#fuelling-button")
const Designing_Button = document.querySelector("#designing-button")

console.log("Welcome to Busto Billionares!")

Cash_Text.innerHTML = Cash

function LemonadeFunc() {
    if (Lemonade.Enabled === true) {
        Cash += Lemonade.Cash
        Cash_Text.innerHTML = Cash
        Lemonade_Button.style.opacity = 0.5 ; Lemonade.Enabled = false
        setTimeout(function(){Lemonade_Button.style.opacity = 1; Lemonade.Enabled = true}, 500)
        localStorage.setItem("Cash", Cash)
    }
}

function FuellingFunc() {
    if (Fuelling.Enabled === true) {
        Cash += Fuelling.Cash
        Cash_Text.innerHTML = Cash
        Fuelling_Button.style.opacity = 0.5 ; Fuelling.Enabled = false
        setTimeout(function(){Fuelling_Button.style.opacity = 1; Fuelling.Enabled = true}, 1000)
        localStorage.setItem("Cash", Cash)
    }
}

function DesigningFunc() {
    if (Designing.Enabled == true) {
        Cash += Designing.Cash
        Cash_Text.innerHTML = Cash
        Designing_Button.style.opacity = 0.5 ; Designing.Enabled = false
        setTimeout(function(){Designing_Button.style.opacity = 1; Designing.Enabled = true}, 2000)
    }
}