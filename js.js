function mostrarCadastro() {
    const display = document.getElementById("cadastro-aluno")

    if(display.style.display === "none"){
        display.style.display = "block";
    }else{
        display.style.display = "none";
    }
}

function cancelarCadastro() {
    const display = document.getElementById("cadastro-aluno")

    display.style.display = "none";
}