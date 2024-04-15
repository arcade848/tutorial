const winners = (season,team,competition) => {
    console.log(`The winner of the ${season} ${competition} season is ${team}`);
}
winners("2023/2024","Arsenal","premier legue");


const players = ({name,foot}) => {
    console.log(name + " " +  "scored with his" + " " + foot + " " +"foot");
}
players({foot:"left",name:"Odegaard"});


const addNum = ({x,y,z}) => {
     return x + y + z;
   
}
console.log(addNum({x:3,y:4,z:5}));
const figures = [10,20,30,40,50];

const sumUp = () => {
    let output = 0;
    for( let figure of figures){
        output += figure;
    }
    return output;
}
console.log(sumUp(figures));

const data = [90,40,15,78,87];
const subFig = () => {
 let total = 0;
 for(let datum of data){
    total -=datum;

 }
 return total
}
console.log(subFig(data));

 const facts = [90,40,15,78,87];
const addFig = (...facts) => {
    return facts.reduce((sum,result)=>sum + result,0);
}
console.log(addFig(...facts));