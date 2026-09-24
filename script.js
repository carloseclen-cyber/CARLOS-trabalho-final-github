
// Pega todos os títulos dos personagens
const personagens = document.querySelectorAll(".personagem h3");

// Faz cada título ser clicável
personagens.forEach(function(titulo) {

    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", function() {

        const texto = titulo.nextElementSibling;

        if (texto.style.display === "none") {
            texto.style.display = "block";
        } else {
            texto.style.display = "none";
        }

    });

});


// Pega todos os títulos dos cenários
const cenarios = document.querySelectorAll(".cenario h3");

// Faz cada título ser clicável
cenarios.forEach(function(titulo) {

    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", function() {

        const texto = titulo.nextElementSibling;

        if (texto.style.display === "none") {
            texto.style.display = "block";
        } else {
            texto.style.display = "none";
        }

    }); 
    

});

