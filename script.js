console.log("taart bouwen")

let aTaart = document.querySelector('#aardbei')
const kaars = document.querySelector('#kaars')
const banner = document.querySelector('#banner')


let kaarsGeklikt = false;
let bannerGeklikt = false;

//Gevraagd aan ChatGPT hoe dit kon//
function toggleKaars() {
    if (kaarsGeklikt) {
        aTaart.src = "images/plain/ataart.svg";
        aTaart.alt = "aardbeientaart";
        kaarsGeklikt = false;
    } else { 
        aTaart.src = "images/kaars/ataart+kaars.svg";
        aTaart.alt = "aardbeientaart met kaarsjes";
        kaarsGeklikt = true;
    }
    controleerAfbeeldingen();

}
kaars.addEventListener("click", toggleKaars);

//Gevraagd aan ChatGPT hoe dit kon//
function toggleBanner() {
    if (bannerGeklikt) {
        aTaart.src = "images/plain/ataart.svg";
        aTaart.alt = "aardbeientaart";
        bannerGeklikt = false;
    } else { 
        aTaart.src = "images/bannr/ataart+banner.svg";
        aTaart.alt = "aardbeientaart met een banner";
        bannerGeklikt = true;
    }
    controleerAfbeeldingen();
}
banner.addEventListener("click", toggleBanner);

//Gevraagd aan ChatGPT hoe dit kon//
function controleerAfbeeldingen() {
    if (kaarsGeklikt && bannerGeklikt) {
        aTaart.src = "images/alles/ataart+alles.svg";
        aTaart.alt = "aardbeientaart met kaarsjes en een banner";
    }
    
}







