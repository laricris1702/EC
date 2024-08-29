function verificarNota() {
    var nota = document.getElementById("nota").value;
    var resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.textContent = "Aluno Aprovado";
    }
} 


/*function verificarNota() {
    var nota = document.getElementById("nota").value;
    var resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.textContent = "Aluno Aprovado";
    } else {
        resultado.textContent = "Aluno Reprovado";
    }
}
*/

/*function verificarNota() {
    var nota = document.getElementById("nota").value;
    var resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.textContent = "Aluno Aprovado";
    } else if (nota > 4 && nota < 7) {
        resultado.textContent = "Aluno em Recuperação";
    } else {
        resultado.textContent = "Aluno Reprovado";
    }
} */


// Função para limpar o parágrafo "resultado" quando o valor do input for alterado
function limparResultado() {
    document.getElementById("resultado").textContent = "";
}

// Adicionando o evento de input ao campo da nota para limpar o parágrafo "resultado"
document.getElementById("nota").addEventListener("input", limparResultado);