/* Função de apagar o visor da calculadora*/
function limpar (){
    document.getElementById('visor').value = '';
}

/* Função para colocar os números*/
function preencher (valor){
    document.getElementById('visor').value += valor;
}

/* Função para fazer os cálculos*/
function calcular (){
    var resultado = 0;
    resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    document.getElementById('visor').value = eval(resultado);
}