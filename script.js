const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const nomeLista = document.getElementById('nome-lista');
const inserirButton = document.getElementById('inserir');
const sortearButton = document.getElementById('sortear');
  
let nomes = []; //Criando o array que vai receber os nomes inseridos através do input

inserirButton.addEventListener('click', () => { //Adicionando função ao botão "INSERIR NOME"
  const nome = nomeInput.value; //Pegando o valor (nome) inserido no input
  if (nome) {
    nomes.push(nome); //Puxando os nomes para dentro do array criado (nomes)
    nomeLista.innerHTML += `<h2>${nome}</h2>`; //Inserindo os nomes dentro do HTML
    nomeInput.value = ''; //Limpando o input depois de inserir um nome
  }
});

sortearButton.addEventListener('click', () => { //Adicionando função ao botão "SORTEAR"
  if (nomes.length > 0) { //Se houver pelo menos 1 nome inserido
    const randomIndex = Math.floor(Math.random() * nomes.length); //Pegando um nome aleatório dentro dos que foram inseridos
    const sorteado = nomes[randomIndex]; //Variável que recebe o nome sorteado
    alert(`O nome sorteado foi: ${sorteado}`); //Exibindo qual foi o nome sorteado
    window.location.reload(true)
  } else {
    alert('Insira pelo menos um nome.'); //Caso não for inserido nenhum nome através do input, será exibido esse alerta
  }
});
