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
        renderizar()
    }
}

function renderizar(){
    lista.innerHTML = "";

    tarefas.forEach(function(item){
        let li = document.createElement("li")
        li.textContent = item.tarefa
        lista.appendChild(li);

        let btnExcluir = document.createElement("button")
        btnExcluir.innerHTML = "❌"
        li.appendChild(btnExcluir)

        btnExcluir.addEventListener("click", function(e){
            e.stopPropagation()
            tarefas = tarefas.filter(function(t){
                return t.Id !== item.Id
            })
            renderizar()
        })
    })
}