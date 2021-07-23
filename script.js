


let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]

const rollDice = () => {

    for (let i = 0; i < 1000; i++){

        let dado1 = Math.floor(Math.random() * 6 ) + 1;

        let dado2 = Math.floor(Math.random() * 6 ) + 1;
 
        let combinacao = dado1 + dado2

        count[combinacao] = count[combinacao] + 1;
    
        //console.log(count[combinacao])
    }
        //let rolarDados = document.getElementById("rollDice")

        for (let j = 2; j < 13; j++){

        let estatistica = document.createElement("div");
        estatistica.className = "stat";
        estatistica.style.width = count[j] + "px"
       


        let final = document.createTextNode(j+":"+count[j])
    
        estatistica.appendChild(final)

        let botao = document.getElementById("rollDice")
        botao.appendChild(estatistica)

        console.log(estatistica)
        }
    }
    rollDice()






  
