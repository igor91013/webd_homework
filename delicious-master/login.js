

function logIn() {
    korisnici = JSON.parse(localStorage.getItem("korisnici"))
    let username = document.getElementById('usernamelog').value
    let password = document.getElementById('passwordlog').value

    korisnici.forEach(korisnik => {
        if (korisnik.username == username && korisnik.password == encrpas(password)) {
            sessionStorage.setItem("ulogovan", JSON.stringify(korisnik))
            window.location.href = "index.html";
            return true

        }

    })
    if (!sessionStorage.getItem("ulogovan")) alert("Nepostojeci korisnik ili netacna sifra")
}

function logOut() {
    sessionStorage.removeItem("ulogovan");
    window.location.href = "index.html";
    

}