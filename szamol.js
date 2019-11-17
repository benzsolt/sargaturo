function szamol() {
    var beirtSzam = parseInt(document.getElementById("hany_fo").value);
    document.getElementById("tej").innerText = "0,6 l tej";
    var tejErtek = (beirtSzam * 0.6);
    document.getElementById("tej").innerText = (tejErtek + " l tej");

    var beirtSzam = parseInt(document.getElementById("hany_fo").value);
    document.getElementById("tojas").innerText = "6 tojás";
    var tejErtek = (beirtSzam * 6);
    document.getElementById("tojas").innerText = (tejErtek + " db tojás");

    var beirtSzam = parseInt(document.getElementById("hany_fo").value);
    document.getElementById("cukor").innerText = "3 ek kristálycukor";
    var tejErtek = (beirtSzam * 3);
    document.getElementById("cukor").innerText = (tejErtek + " ek kristálycukor");
}