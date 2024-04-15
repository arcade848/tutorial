class country {
    constructor(president,capital) {
        this.president = president;
        this.capital = capital;
    }
    displayInfo(){
        console.log(`The President of my country is ${this.president} and our capital city is ${this.capital}.`)
    }

}
const myCountry = new country("Bola Ahmed Tinubu","Abuja");
console.log(myCountry.displayInfo());

//inheritance
class nationalTeam {
    constructor(team,country,captain) {
        this.team = team;
        this.country =country;
        this.captain = captain;

    }
    output(){
        return `The national team I support is the ${this.team} of ${this.country} and there captain is ${this.captain}.`
    }
}
 class tournament extends nationalTeam{
    constructor (team,country,captain,year,competition,host){
      super(team,country,captain);
      this.year = year;
      this.competition = competition;
      this.host = host;

 }
 showOutput(){
    return `The winner of the ${this.year} ${this.competition} is the ${this.team} of ${this.country}. `;
 }
 showOutput2(){
    return `The ${this.year} ${this.competition} was hosted by ${this.host}.`
 }

 }
 const myNationalTeam = new nationalTeam("Super Eagles","Nigeria","William Troost Ekong");
 const Winner = new tournament("Elephants","Cote d'Ivoire","Serge Aurier","2023","AFCON","Cote d'Ivoire");
 console.log(myNationalTeam.output());
 console.log(Winner.showOutput());
 console.log(Winner.showOutput2());

