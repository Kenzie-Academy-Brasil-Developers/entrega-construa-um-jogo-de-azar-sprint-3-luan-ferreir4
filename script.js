//  const pedra = document.getElementById("pedraBttn");
//  pedra.dataset.buttonNum ="1"
const playerBttns = document.querySelectorAll("#bttns-list > button");
console.log(playerBttns);
let playerBttnsArr = [...playerBttns];
console.log(playerBttnsArr);


const pcChoice = document.getElementById("pcChoice");
let pcPlay = Math.floor(Math.random()*3);
console.log(pcPlay);
let pcOption = 0;


function pcString(){
    if(pcPlay === 0){
        pcOption = 'Pedra'
    }
    if(pcPlay === 1){
        pcOption = 'Papel'
    }
    if(pcPlay === 2){
        pcOption = 'Pesoura'
    }
    return pcOption;
}

let matchCombination = [];
let combination = [];

const resultContainer = document.getElementById("result");

const winingCombinations = [
    [0,2],
    [1,0],
    [2,1]
]

for(let cont = 0; cont < playerBttnsArr.length; cont++){
   
    let bttn = playerBttnsArr[cont];
   
    bttn.dataset.buttonId = cont;
    console.log(bttn);

    bttn.addEventListener('click', getMatch);
}




function getMatch(evento){
    pcChoice.innerHTML = pcString();

        let buttonData = evento.target.getAttribute('data-button-id');
        console.log(buttonData)
        let buttonDataNum = parseInt(buttonData);

        matchCombination.push(buttonDataNum, pcPlay)
        console.log(matchCombination);

        for(row = 0; row < winingCombinations.length; row++){
           combination = winingCombinations[row];
            console.log(winingCombinations[row])
            
            if(matchCombination === combination[row]){
                resultContainer.innerHTML = "Você venceu!";
            }
        }
        
        if(buttonDataNum === pcPlay){
            resultContainer.innerHTML = "Empate!";
        }


    }



