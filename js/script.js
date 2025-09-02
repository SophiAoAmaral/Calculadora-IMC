// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

//seleçaõ dos elementos

const imcTable = document.querySelector("#imc-table")

const heightInput = document.querySelector("#height")// input que vai informar a altura
const weightInput =document.querySelector("#weight")//input que vai dar o valor do peso
const calxBtn = document.querySelector("#calc-btn")//botao que calcula

const clearBtn = document.querySelector("#clear-btn")//botao que limpa



//funcoes
function createTable(data){
    data.forEach((item) => {//criando um loop
        const div = document.createElement("div")//criando uma div
        div.classList.add("table-data")//dando uma class p ela

        const classification = document.createElement("p")//criando um elemento p com o mesmo"nome" do data q passa os dados
        classification.innerText = item.classification //colocando o texto que esta dentro do array de data

        const info = document.createElement("p")//criando um elemento p com o mesmo"nome" do data q passa os dados
        info.innerText = item.info//colocando o texto que esta dentro do array de data

        const obesity = document.createElement("p")//criando um elemento p com o mesmo"nome" do data q passa os dados
        obesity.innerText = item.obesity//colocando o texto que esta dentro do array de data

        div.appendChild(classification)//colocando os elementso criados dentro da div criada
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div)//colocando a div dentro da div q recebeu oo nome de IMCtable
    });
}



//inicialização
createTable(data)


//eventos