const champion = (winner) =>{
    return `The premier league champion for the year ${winner.year} is ${winner.team}`;
}
console.log(champion({
    year : 2024,
    team: "Arsenal"
}));