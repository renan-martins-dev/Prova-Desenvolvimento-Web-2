
function atualizarHorario() {
    document.getElementById("hora-atual").innerHTML = new Date().toLocaleDateString("pt-br") + " " + new Date().toLocaleTimeString("pt-br");
    setInterval(() => {
        document.getElementById("hora-atual").innerHTML = new Date().toLocaleDateString("pt-br") + " " + new Date().toLocaleTimeString("pt-br");
    }, 1000);
}

atualizarHorario();
