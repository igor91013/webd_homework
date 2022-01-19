

korisnici =
    [
        {
            username: "_",
            password: "_",

        },
    ]

function encrpas(pass) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(pass))
}

function decr(encrpass) {
    return CryptoJS.enc.Base64.parse(encrpass).toString(CryptoJS.enc.Utf8)
}


function register() {
    let username = document.getElementById('usernamereg').value

    korisnici.forEach(korisnik => {
        if (korisnik.username == username)
            return alert("Korisnik vec postoji");
    })

    let password = document.getElementById('passwordreg').value

    let korisnik = { username: username, password: encrpas(password) }
    korisnici.push(korisnik)
    console.log(korisnici)
    //sessionStorage.setItem(username, encrpas(password));

    localStorage.setItem("korisnici", JSON.stringify(korisnici));
    alert("uspesno ste registrovali korisnika");


}
