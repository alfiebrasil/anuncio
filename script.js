function calcularSoma() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const soma = valor1 + valor2;
    document.getElementById('resultado').value = soma;

    // Enviar dados para o servidor
    fetch('/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ valor1, valor2, soma })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados salvos com sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro ao salvar dados:', error);
    });
}
