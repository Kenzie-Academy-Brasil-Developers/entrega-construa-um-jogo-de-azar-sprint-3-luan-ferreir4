let playerBttns = document.querySelectorAll("#bttns-list > button");
playerBttns = [...playerBttns];

const pcChoice = document.getElementById("pcChoice");
let pcPlay = Math.floor(Math.random()*3);
console.log(pcPlay);

let pcOption = '';

const resultContainer = document.getElementById("result");

const getBttns = () => {
    for(let cont = 0; cont < playerBttns.length; cont++){
        let bttn = playerBttns[cont];
       
        bttn.dataset.buttonId = cont;
    
        bttn.addEventListener('click', getMatch);
    }
}

const pcChoiceToString = (pc) => {
    if(pc === 0){
        pcOption = 'Pedra'
    }
    if(pc === 1){
        pcOption = 'Papel'
    }
    if(pc === 2){
        pcOption = 'Tesoura'
    }
    return pcOption;
}

function equalArr(matchArr, winArr){
    let cont = 0;
    for(let i = 0; i < 2; i++){
        if(matchArr[i] === winArr[i]){
            cont++
        }
        else{
            return false;
        }     
    }
    if(cont === 2){
        return true;
    }
}

function getMatch(evento){
    pcChoice.innerHTML = pcChoiceToString(pcPlay);

        let buttonData = evento.target.getAttribute('data-button-id');
      
        buttonData = Number(buttonData);
        console.log(buttonData)

        let matchCombination = [];
        let combination = [];

        matchCombination.push(buttonData, pcPlay)
        console.log(matchCombination);

        const winingCombinations = [
            [0,2],
            [1,0],
            [2,1]
        ]

        for(let i = 0; i < winingCombinations.length; i++){
            combination = winingCombinations[i];
            let itsWin = equalArr(matchCombination, combination);
            console.log(combination);
            
            
            if( itsWin === true){
                resultContainer.innerHTML = "Você Venceu!";
                
            }
            if( itsWin === false){
                resultContainer.innerHTML = "Vocẽ Perdeu!"
            }
            console.log(itsWin);
        }
        if(buttonData === pcPlay){
            resultContainer.innerHTML = "Empate!";
        }
        
    }

    getBttns();

