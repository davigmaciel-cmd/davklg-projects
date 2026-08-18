let tarefas = []
let contId = 0 

let inputText = document.querySelector(".inputText")
let btnEnviar = document.querySelector(".btnEnviar")
let lista = document.querySelector(".lista")

btnEnviar.addEventListener("click", function(){
    addTarefa()
})

inputText.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTarefa()
    }
})

function addTarefa(){
    let text = inputText.value.trim(); //trim é pra caso user digitar espaço, o code tirar os espaços da ponta:"     lavar", trim tira o espaço//

    if(text !== ""){
        contId++;
        tarefas.push({Id: contId, tarefa: text, concluido: false});
        inputText.value = ""
        console.log(tarefas)
    }
}