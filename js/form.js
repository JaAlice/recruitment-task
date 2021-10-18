let cform = document.getElementById("contact_form")
cform.onsubmit = function(event) {
    let imie = document.getElementById('name').value;
    let nazwisko = document.getElementById('surname').value;
    let tel = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let wiadomosc = document.getElementById('message').value;
    console.log("Imię: " + imie);
    console.log("Nazwisko: " + nazwisko);
    console.log("Telefon: " + tel);
    console.log("E-mail: " + email);
    console.log("Wiadomość: " + wiadomosc);
    document.getElementById('popup_all').style.display = "block";
    document.getElementById('blocker1').style.display = "block";
    cform.style.pointerEvents = "none";
    event.preventDefault(); //nie wysyla submita, nie przeladuje strony
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}


let okey = document.getElementById('okb')
okey.onclick = function (event) {
    document.getElementById('popup_all').style.display = "none";
    document.getElementById('blocker1').style.display = "none";
    cform.style.pointerEvents = "all";
}
