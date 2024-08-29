// Função para verificar a nota e manipular o parágrafo "resultado"
function verificarNota() {
    var nota = document.getElementById("nota").value;
	nota = nota.replace(",", ".");
	nota = parseFloat(nota);
    var notaArredondada = Math.round(nota);  // Arredondar a nota para o inteiro mais próximo
    var resultado = document.getElementById("resultado");
    var mensagemMotivacional = document.getElementById("mensagemMotivacional");
	
	console.log(nota);
	console.log(notaArredondada);

    if (notaArredondada >= 6) {
        resultado.textContent = "Aluno Aprovado";
    } else if (notaArredondada > 4 && notaArredondada < 6) {
        resultado.textContent = "Aluno em Recuperação";
    } else {
        resultado.textContent = "Aluno Reprovado";
    }

    // Usando switch para apresentar uma mensagem motivacional baseada na nota arredondada
    switch (notaArredondada) {
        case 10:
            mensagemMotivacional.textContent = "Parabéns! Você é um verdadeiro campeão!";
            break;
        case 9:
            mensagemMotivacional.textContent = "Excelente trabalho! Continue assim!";
            break;
        case 8:
            mensagemMotivacional.textContent = "Muito bom! Um esforço admirável!";
            break;
        case 7:
            mensagemMotivacional.textContent = "Bom bem! Continue assim!";
            break;
        case 6:
            mensagemMotivacional.textContent = "Bom trabalho! Continue se esforçando";
            break;
        case 5:
            mensagemMotivacional.textContent = "Você pode melhorar! Confie no seu potencial!";
            break;
        case 4:
            mensagemMotivacional.textContent = "Continue tentando! O esforço trará resultados!";
            break;
        case 3:
            mensagemMotivacional.textContent = "Não desanime! Use isso como uma lição.";
            break;
        case 2:
            mensagemMotivacional.textContent = "Todo esforço conta! Dê o seu melhor na próxima vez.";
            break;
        case 1:
            mensagemMotivacional.textContent = "Cada passo é um avanço. Continue tentando!";
            break;
        case 0:
            mensagemMotivacional.textContent = "Não se preocupe, há sempre uma nova oportunidade!";
            break;
        default:
            mensagemMotivacional.textContent = "Nota inválida.";
            break;
    }
}

// Função para limpar o parágrafo "resultado" e "mensagemMotivacional" quando o valor do input for alterado
function limparResultado() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("mensagemMotivacional").textContent = "";
}

// Adicionando os eventos de clique aos botões para que sempre chamem as funções
//document.getElementById("verificarNotaBtn").addEventListener("click", verificarNota);

// Adicionando o evento de input ao campo da nota para limpar os parágrafos "resultado" e "mensagemMotivacional"
document.getElementById("nota").addEventListener("input", limparResultado);
