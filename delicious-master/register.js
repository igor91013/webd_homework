

var korisnici =
    [
        {
            username: "_",
            password: "_",

        },
    ]

if (localStorage.getItem("korisnici") == null)
    localStorage.setItem("korisnici", JSON.stringify(korisnici));


function encrpas(pass) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(pass))
}

function decr(encrpass) {
    return CryptoJS.enc.Base64.parse(encrpass).toString(CryptoJS.enc.Utf8)
}


function register() {
    let username = document.getElementById('usernamereg').value
    let korisnicii=JSON.parse(localStorage.getItem("korisnici"));
    korisnicii.forEach(korisnik => {
        if (korisnik.username == username)
            return alert("Korisnik vec postoji");
    })

    let password = document.getElementById('passwordreg').value

    let korisnik = { username: username, password: encrpas(password) }
    
    korisnicii.push(korisnik)

    //sessionStorage.setItem(username, encrpas(password));

    localStorage.setItem("korisnici", JSON.stringify(korisnicii));
    alert("uspesno ste registrovali korisnika");


}
