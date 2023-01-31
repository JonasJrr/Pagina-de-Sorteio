let pessoas = ["Alex", "Fernanda","Mariana","Carol", "Jonas",
 "José", "Gabrielle", "Carlos", "Danilo", "Felipe", "Matheus",
  "Mailson", "Lucas", "João", "Kaique", "Moisés", "Franco",
   "Catia", "Ian", "Marcelo", "Diana"]; //array com o nome das pessoas do sorteio

function sortear(){ //criando a função para sortear

    let numPessoas = pessoas.length; //pegando o número de pessoas dentro do array (20)

    let numSorteado = Math.floor(Math.random() * numPessoas); //Math.floor para aproximar para um número inteiro (para baixo)

    document.getElementById("nome").innerHTML = pessoas[numSorteado]; 
}

