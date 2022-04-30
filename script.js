let pessoas = ["Alex", "Fernanda","Mariana","Carol", "Jonas", "José", "Gabrielle", "Carlos", "Danilo", "Felipe", "Matheus", "Mailson", "Lucas"]

function sortear(){

    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("nome").innerHTML = pessoas[ns];

}

//pessoas -> array com o nome dos participantes
//np -> número de pessoas do sorteio
//ns -> número sorteado
//Math.floor para aproximar para um número inteiro (para baixo ou piso)