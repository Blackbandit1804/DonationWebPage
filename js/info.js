var info = document.getElementById("info");
var cont = document.getElementById("info_content");
var header = document.getElementById("info_header");

function tipeee(isin) {
    if (isin) {
        info.style.opacity = 1;
        header.style.backgroundColor = "#43f367";
        cont.textContent = "Wenn ich gerade streame wird eine Donation Message im Stream abgespielt mit deinem Nutzername und deiner Nachicht. " +
                           "Jedoch werden c.a. 25% der Spende an Tipeee als Gebür zurück gezahlt, also erhalte ich nur c.a. 75% deiner Spende. " +
                           "Spenden ist möglich über zahlreiche Bezahlmöglichkeiten wie PayPal, Paysafe, SofortÜberweisung usw."
    } else {
        info.style.opacity = 0;
    }
}

function patreon(isin) {
    if (isin) {
        info.style.opacity = 1;
        header.style.backgroundColor = "#f3434d";
        cont.textContent = "Bei Patreon spendest du mir monatlich einen gewissen, von dir bestimmten, betrag. Davon werden nur geringfügig Gebüren abgetreten. " +
                           "Auch hier hast du eine große Auswahl aus vielen Bezahlmöglichkeiten (PayPal, Paysafe, SofortÜberweisung usw).";
    } else {
        info.style.opacity = 0;

    }
}

function paypal(isin) {
    if (isin) {
        info.style.opacity = 1;
        header.style.backgroundColor = "#43f3e9";
        cont.textContent = "Du kannst auch direkt über PayPal.me spenden mit deinem eigenen PayPal Konto. Dabei geht der gesamte Betrag ohne Abzüge an mich über.";
    } else {
        info.style.opacity = 0;
    }
}
