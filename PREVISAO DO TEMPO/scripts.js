
const key "dd0c5429f7d5d5f6cfcab9393cbb335c"

async function buscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())

  console.log(dados)
  
}


function cliqueBusca() {
  const cidade = document.querySelector(".input-cidade").value;
  console.log(input);
}
