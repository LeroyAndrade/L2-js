function Dagomzet() {
    let omzet = 0;

    this.voegToeAanDagomzet = function (klantTotaal) {
        omzet = omzet + klantTotaal;
        return omzet;
    }

    this.totaalDagOmzet = function (klantTotaal) {
     omzet = omzet + klantTotaal;
     return omzet;
 }

}

function Winkelmand() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
     Dagomzet();
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

let klant = new Aankopen();
//Alle bedragen worden nu wel opgeteld
klant.wijzigAankopen(1,1,1);

console.log('Totaalbedrag in winkelmand: ' + klant.teBetalen());
//voeg bedrag toe aan totaal omzet

let dagomzet = new Dagomzet();
dagomzet.voegToeAanDagomzet(klant.teBetalen());


console.log('De totale dagomzet bedraagt: ' + dagomzet.voegToeAanDagomzet(0));
