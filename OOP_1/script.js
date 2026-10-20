class Bankomat {
    #castka;

    constructor(castka) {
        this.#castka = castka;
    }

    vloz(castka) {
        if (castka > 0) {
            console.log("Neplatna castka");
        } else {
            this.#castka += castka;
        }
    }

    vyber(castka) {
        if (castka > this.#castka) {
            console.log("Neplatna castka");
        } else {
            this.#castka -= castka;
        }
    }
}

const bankomat = new Bankomat(1000);
const bankomat2 = new Bankomat(500);

bankomat.vloz(200);
bankomat.vyber(100);

console.log(bankomat);
console.log(bankomat2);   // vypíše stejný název protože clas Bankomat nemá vlastnost název