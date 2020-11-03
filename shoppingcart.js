function DagOmzet() {
    let omzet =0;
    let klant =0;
    let alleOmzet; alleOmzet+= omzet;

    this.voegToeAanDagOmzet = function (klantTotaal) {
        //omzet += omzet + klantTotaal;
        omzet += klantTotaal;
        klant +=1;
        return omzet;
    }

    this.totaalKlanten = function () {
    return klant;
 }

}

function Winkelmand() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
     DagOmzet();
        return totaalBedrag;
    }

    this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {

        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);

        this.setWinkelmandBerekenen(snoep, chocola, koek);
    }

    this.setWinkelmandBerekenen = function (snoep, chocola, koek) {
//aanpassing gedaan
        totaalBedrag = totaalBedrag + snoep.getTotaal() + chocola.getTotaal() + koek.getTotaal();
    }

}

                   function Snoep(aantal) {
                       let prijs = 2.45;
                       let totaalBedrag = 0;

                       this.berekenSnoepTotaal = function (aantal) {
                           totaalBedrag =  prijs * aantal;
                       }

                       this.getTotaal = function () {
                           return totaalBedrag;
                       }

                       this.berekenSnoepTotaal(aantal);
                   }

//aanpassing gedaan
                   function Koek(aantal) {
                    let prijs = 2.45;
                    let totaalBedrag = 0;

                    this.berekenSnoepTotaal = function (aantal1) {
                        totaalBedrag =  prijs * aantal;
                    }

                    this.getTotaal = function () {
                        return totaalBedrag;
                    }

                    this.berekenSnoepTotaal(aantal);
                   }

//aanpassing gedaan
                   function Chocola(aantal) {
                    let prijs = 2.45;
                    let totaalBedrag = 0;

                    this.berekenSnoepTotaal = function (aantal) {
                        totaalBedrag =  prijs * aantal;
                    }

                    this.getTotaal = function () {
                        return totaalBedrag;
                    }

                    this.berekenSnoepTotaal(aantal);
                }



function Aankopen() {

    let winkelmand = new Winkelmand();

    this.wijzigAankopen = function (snoep, chocola, koek) {
       winkelmand.vulWinkelmand(snoep, chocola, koek);
    };

    this.teBetalen = function () {
    
        return winkelmand.getTotaalBedrag();
    }
}

let klant0 = new Aankopen();
let klant1 = new Aankopen();


let dagomz = new DagOmzet();
//Alle bedragen worden nu wel opgeteld
klant0.wijzigAankopen(1,1,1);
klant1.wijzigAankopen(1,1,0);


console.log('Totaalbedrag in winkelmand: ' + klant0.teBetalen());
//voeg bedrag toe aan totaal omzet

let dagomzet = new DagOmzet();

dagomzet.voegToeAanDagOmzet(klant0.teBetalen());
dagomzet.voegToeAanDagOmzet(klant1.teBetalen());



console.log('De totale dagomzet bedraagt: ' + dagomzet.voegToeAanDagOmzet(0));
console.log('Klanten bedraagt: ' + dagomzet.totaalKlanten());

// for (let i=0; i< )