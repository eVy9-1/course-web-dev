function mailMe() {
    const mymail = "timon.scheer@gmail.com";
    var mailline = 'mailto:' + mymail;

    var emailsub = document.getElementById('emailsubhtml').value;
    var emailcc = document.getElementById('emailcchtml').value;
    var emailbody = document.getElementById('emailbodyhtml').value;

    var fullmailline = "?"

    // forming subject line
    if (emailsub !== "") {
        fullmailline += 'subject=' + emailsub
    }

    // forming cc line
    if (emailcc !== "") {
        if(emailsub) {
            fullmailline += "&"
        }
        fullmailline += 'cc=' + emailcc
    }

    // forming body line
    if (emailbody !== "") {
        if(emailsub || emailbody) {
            fullmailline += "&"
        }
        fullmailline += 'body=' + emailbody
    }

    fullmailline = mailline + fullmailline;
    // FILTER //
    // Fragezeichen suchen und ersetzen mit: %3F
    // Leerzeichen suchen und ersetzen mit: %20
    fullmailline = fullmailline.replace(/ /g, '%20');
    // Linebreaks suchen und ersetzen mit: %0D
    fullmailline = fullmailline.replace(/(\r\n|\r|\n)/g, '%0D');

    // open mailto: //
    alert(fullmailline);
    window.open(fullmailline, '_self');
}





// function ty() {
//     alert("Danke, ich werde mich schnellstmöglich bei Ihnen melden!")
// }

// var data = document.getElementById('id').value;
// function ty() {
//     alert(document.getElementById('betreff').value);
// }


// alert (console.log(bt));

// var x = "?subject= " .


// function sendEmail() {
//     var email = "timon.scheer@gmail.com"; // Die ursprüngliche E-Mail-Adresse
//     var variableInhalt = document.getElementById('betreff').value;
//
//     // Den Inhalt der Variable an die E-Mail-Adresse anhängen
//     var erweiterteEmail = email + "?subject=" + variableInhalt;
//
//     // Das Formular-Action-Attribut aktualisieren
//     document.getElementById("myForm").action = "mailto:" + erweiterteEmail;
// }
//
//
// <a href="mailto:m.mustermann@domain.de?subject=Hier%20steht%20der%20Betreff">E-Mail mit Betreff</a>
//
