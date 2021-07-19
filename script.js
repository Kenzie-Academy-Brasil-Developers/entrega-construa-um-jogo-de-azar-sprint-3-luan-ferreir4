//  const pedra = document.getElementById("pedraBttn");
//  pedra.dataset.buttonNum ="1"
const playerBttns = document.querySelectorAll("#bttns-list > button");
// console.log(playerBttns);
let playerBttnsArr = [...playerBttns];
// console.log(playerBttnsArr);


const pcChoice = document.getElementById("pcChoice");
let pcPlay = Math.floor(Math.random()*3);
console.log(pcPlay);
let pcOption = 0;


const resultContainer = document.getElementById("result");


function pcString(){
    if(pcPlay === 0){
        pcOption = 'Pedra'
    }
    if(pcPlay === 1){
        pcOption = 'Papel'
    }
    if(pcPlay === 2){
        pcOption = 'Tesoura'
    }
    return pcOption;
}

// FUNÇÃO DO BLOCO DA PERDIÇÃO
// function equalArr(matchArr, winArr){
//     let cont = 0;
//     for(let i = 0; i < 2; i++){
//         if(matchArr[i] === winArr[i]){
//             cont++
//         }
//         else{
//             return false;
//         }     
//     }
//     if(cont === 2){
//         return true;
//     }
// }

function getMatch(evento){
    pcChoice.innerHTML = pcString();

        let buttonData = evento.target.getAttribute('data-button-id');
      
        buttonData = Number(buttonData);
        // console.log(buttonData)

        if(buttonData === pcPlay){
                resultContainer.innerHTML = "Empate!";

                pcChoice.classList.remove("winBackground","loseBackground");
                pcChoice.classList.add("drawBackground"); 
            }

        //PEDRA 
        if(buttonData === 0 && pcPlay === 2){
            resultContainer.innerHTML = "Você Venceu!";

            pcChoice.classList.remove("drawBackground","loseBackground");
            pcChoice.classList.add("winBackground");        
        }    
        if(buttonData === 0 && pcPlay === 1){
            resultContainer.innerHTML = "Você Perdeu!";

            pcChoice.classList.remove("drawBackground","winBackground");
            pcChoice.classList.add("loseBackground"); 
        } 
        //PAPEL
        if(buttonData === 1 && pcPlay === 0){
            resultContainer.innerHTML = "Você Venceu!";  

            pcChoice.classList.remove("drawBackground","loseBackground");
            pcChoice.classList.add("winBackground");      
        }    
        if(buttonData === 1 && pcPlay === 2){
            resultContainer.innerHTML = "Você Perdeu!";

            pcChoice.classList.remove("drawBackground","winBackground");
            pcChoice.classList.add("loseBackground"); 
        } 
        //TESOURA
        if(buttonData === 2 && pcPlay === 1){
            resultContainer.innerHTML = "Você Venceu!";  

            pcChoice.classList.remove("drawBackground","loseBackground");
            pcChoice.classList.add("winBackground");      
        }    
        if(buttonData === 2 && pcPlay === 0){
            resultContainer.innerHTML = "Você Perdeu!";
            pcChoice.classList.remove("drawBackground","winBackground");
            pcChoice.classList.add("loseBackground"); 
        } 


        //BLOCO DA PERDIÇÃO
        // let matchCombination = [];
        // let combination = [];

        // matchCombination.push(buttonData, pcPlay)
        // console.log(matchCombination);

        // const winingCombinations = [
        //     [0,2],
        //     [1,0],
        //     [2,1]
        // ]

        // for(let i = 0; i < winingCombinations.length; i++){
        //     combination = winingCombinations[i];
        //     let itsWin = equalArr(matchCombination, combination);
        //     console.log(combination);
            
            
        //     if( itsWin === true){
        //         resultContainer.innerHTML = "Você Venceu!";
                
        //     }
        //     if( itsWin === false){
        //         resultContainer.innerHTML = "Vocẽ Perdeu!"
        //     }
        //     console.log(itsWin);
        // }
        // if(buttonData === pcPlay){
        //     resultContainer.innerHTML = "Empate!";
        // }
        
    }

    for(let cont = 0; cont < playerBttnsArr.length; cont++){
        let bttn = playerBttnsArr[cont];
       
        bttn.dataset.buttonId = cont;
        // console.log(bttn);
    
        bttn.addEventListener('click', getMatch);
    }

