// UBICACION
function toggleUbication() {
    var myUbication = document.getElementById('ubication');
    var displaySetting = myUbication.style.display;
    var ubicationButton = document.getElementById('ubicationButton');

    if (displaySetting == 'block') {
        myUbication.style.display = 'none';
        ubicationButton.innerHTML = '+';
    }
    else {
        myUbication.style.display = 'block';
        ubicationButton.innerHTML = '-';
    }
}
// CLIMA
function toggleClima() {
    var myClima = document.getElementById('clima');
    var displaySetting = myClima.style.display;
    var climaButton = document.getElementById('climaButton');

    if (displaySetting == 'block') {
        myClima.style.display = 'none';
        climaButton.innerHTML = '+';
    }
    else {
        myClima.style.display = 'block';
        climaButton.innerHTML = '-';
    }
}
// FIESTA DE LA MASA VIENESA
function toggleFiesta1() {
    var myFiesta1 = document.getElementById('fiesta1');
    var displaySetting = myFiesta1.style.display;
    var fiesta1Button = document.getElementById('fiesta1Button');

    if (displaySetting == 'block') {
        myFiesta1.style.display = 'none';
        fiesta1Button.innerHTML = '+';
    }
    else {
        myFiesta1.style.display = 'block';
        fiesta1Button.innerHTML = '-';
    }
}
// FIESTA DE LA CERVERZA
function toggleFiesta2() {
    var myFiesta2 = document.getElementById('fiesta2');
    var displaySetting = myFiesta2.style.display;
    var fiesta2Button = document.getElementById('fiesta2Button');

    if (displaySetting == 'block') {
        myFiesta2.style.display = 'none';
        fiesta2Button.innerHTML = '+';
    }
    else {
        myFiesta2.style.display = 'block';
        fiesta2Button.innerHTML = '-';
    }
}