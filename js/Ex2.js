let tarefas = [{descricao : "", autor : "", departamento : "", importancia : "" }];

const btnAdd = document.getElementById("btnAddTarefa");

btnAdd.addEventListener("click", (evt)=>{
    evt.preventDefault();
})

const inputDescricao = document.getElementById("idDescricao").value;
const inputAutor = document.getElementById("idAutor").value;
const inputDepartamento = document.getElementById("idDepartamento").value;
const inputImportancia = document.getElementById("idImportancia").value;

tarefas.descricao.push(inputDescricao.value);
console.log(tarefas);

