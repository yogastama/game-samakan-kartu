let jumlahKartu = 5;
const gameWrap = document.getElementById("game");
let kartuPertama = 0;
let kartuKedua = 0;
let idKartuPertama;
let idKartuKedua;
// fungsi buat angka
function angkaBerurut() {
    let angkaBerurut = [];
    for (let i = 1; i <= jumlahKartu; i++) {
        angkaBerurut.push(i, i);
    }
    return angkaBerurut;
}
// fungsi acak angka
function acakAngka(angkaBerurut) {
    let angkaAcak = angkaBerurut.sort(function () {
        return 0.5 - Math.random();
    });
    return angkaAcak;
}
// fungsi masukkan kartu
function masukkanKartu(angkaAcak) {
    let str = "";
    let id = 1;
    angkaAcak.forEach(function (i) {
        str += `<div class="kartu" id="id_${id}"><div class="kartu-belakang">${i}</div><div class="kartu-depan">Open</div> </div>`;
        id++;
    });
    gameWrap.innerHTML = str;
}
// buat angka
let angkaKartu = angkaBerurut();
// acak anga
let angkaAcak = acakAngka(angkaKartu);
// masukkan kartu

masukkanKartu(angkaAcak);

// function runGame() {
let semuaKartu = document.querySelectorAll(".kartu");
semuaKartu.forEach(function (i) {
    i.addEventListener("click", function (e) {
        console.log('cek id');

        console.log(idKartuPertama != i.id);

        if (idKartuPertama != i.id) {
            i.className = i.classList + " buka";
            if (kartuPertama == 0) {
                kartuPertama = parseInt(i.children[0].textContent);
                idKartuPertama = i.id;
                console.log('ini kartu pertama' + kartuPertama);
            } else {

                kartuKedua = parseInt(i.children[0].textContent);
                console.log('seleksi kartu pertama ' + kartuPertama + kartuKedua);
                if (kartuPertama === kartuKedua) {
                    kartuPertama = 0;
                    kartuKedua = 0;
                    let kartuSama = document.querySelectorAll('.buka');
                    console.log(kartuSama);
                    console.log(kartuSama[0].className = 'kartu betul');
                    console.log(kartuSama[1].className = 'kartu betul');
                } else {
                    kartuPertama = 0;
                    kartuKedua = 0;
                    i.addEventListener("transitionend", function () {
                        let semuaKartuBaru = document.querySelectorAll(".kartu");
                        // console.log(i);

                        // console.log(semuaKartuBaru);
                        let kelasKartu;
                        semuaKartuBaru.forEach(function (sk) {
                            kelasKartu = sk.classList;
                            if (kelasKartu.length > 1 && kelasKartu[1] == 'betul') {
                                // console.log(sk);
                                sk.className = 'kartu betul';
                            } else {
                                sk.className = 'kartu';
                            }
                            kelasKartu = null;
                        });

                    });
                }
                console.log('hasil akhir seleksi' + kartuPertama + kartuKedua);
            }
        } else {
            i.className = 'kartu';
            kartuPertama = 0;
            idKartuPertama = null;
            console.log('kartu 1' + kartuPertama);
        }
    });
})
// }
// }
// run game
// runGame();