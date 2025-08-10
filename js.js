function mostrarCadastro() {
    const display = document.getElementById("cadastro-aluno")

    if(display.style.display === "none"){
        display.style.display = "block";
    }else{
        display.style.display = "none";
    }
}

function mostrarEditar(){
    const display = document.getElementById("edita-aluno")

    if(display.style.display === "none"){
        display.style.display = "block";
    }else{
        display.style.display = "none";
    }
}

function cancelarCadastro() {
    const display_cadastro = document.getElementById("cadastro-aluno");
    const display_edita = document.getElementById("edita-aluno")

    display_cadastro.style.display = "none";
    display_edita.style.display = "none";
}

