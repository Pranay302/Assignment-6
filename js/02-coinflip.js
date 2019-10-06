var coinFlip = parseInt(Math.floor(Math.random() * 11)) ;
var choice = prompt("Enter your choice : Heads/Tails ?????");
var coinFlipResult;
if (coinFlip < 5){
    coinFlipResult="heads";
}else {
    coinFlipResult="tails";
}
if (choice.toUpperCase() === coinFlipResult.toUpperCase()){
    if (coinFlipResult === "heads"){
        alert("The flip was heads and you chose heads...you win!");
    }else {
        alert("The flip was tails and you chose tails...you win!");
    }
}else {
    if (coinFlipResult === "heads" && choice.toUpperCase() === "TAILS"){
        alert("The flip was heads but you chose tails...you lose!");
    }else {
        alert("The flip was tails but you chose heads...you lose!");
    }
}
