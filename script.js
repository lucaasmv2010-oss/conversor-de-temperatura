function converter() {
    let campo = document.getElementById("temperatura").value;
    let conversao = document.getElementById("conversao").value;

    if (campo === "") {
        document.getElementById("resultado").textContent =
            "Digite uma temperatura.";
        return;
    }

    let temperatura = Number(campo);

    if (conversao === "celsius") {
        let resultado = (temperatura * 9 / 5) + 32;

        document.getElementById("resultado").textContent =
            resultado.toFixed(2) + " °F";

    } else if (conversao === "fahrenheit") {
        let resultado = (temperatura - 32) * 5 / 9;

        document.getElementById("resultado").textContent =
            resultado.toFixed(2) + " °C";
    }
}