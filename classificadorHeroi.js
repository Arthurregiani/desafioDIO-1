function classificarHeroi(nome, experiencia) {
    let nivel;

    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return nivel;
}

function atualizarBarraProgresso(experiencia) {
    const progresso = document.getElementById('progresso');
    const percentual = Math.min((experiencia / 10000) * 100, 100); 
    progresso.style.width = percentual + '%';
}

function main() {
    const nomeInput = document.getElementById('nome');
    const experienciaInput = document.getElementById('experiencia');
    const resultadoDiv = document.getElementById('resultado');


    const savedNome = localStorage.getItem('nome');
    const savedExperiencia = localStorage.getItem('experiencia');

    if (savedNome && savedExperiencia) {
        nomeInput.value = savedNome;
        experienciaInput.value = savedExperiencia;
        atualizarBarraProgresso(savedExperiencia);
    }

    document.getElementById('classificar').addEventListener('click', function () {
        const nome = nomeInput.value;
        const experiencia = parseInt(experienciaInput.value);

        if (isNaN(experiencia) || experiencia < 0) {
            alert("Por favor, insira um valor válido de experiência.");
            return;
        }

        localStorage.setItem('nome', nome);
        localStorage.setItem('experiencia', experiencia);

        const nivel = classificarHeroi(nome, experiencia);
        resultadoDiv.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`;
        atualizarBarraProgresso(experiencia);
    });
}

main();
