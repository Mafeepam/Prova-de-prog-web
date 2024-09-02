function calcularIdade() {
    const anoNascimentoInput = document.getElementById('ano-nascimento');
    const idadeSpan = document.getElementById('idade');

    if (anoNascimentoInput.value) {
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNascimentoInput.value;
        idadeSpan.textContent = `Idade: ${idade}`;

        if (idade < 18) {
            alert('Nao sera possivel realizar o cadastro, pois a pessoa deve ser maior de idade.');
            document.getElementById('TelaCadastro.jsp').addEventListener('submit', e => {
                e.preventDefault();
                alert('Para realizar o cadastro, a pessoa deve ser maior de idade.');
            });
            Array.from(document.getElementsByTagName('input')).forEach(input => input.disabled = true);
        } else{
            window.location.href = 'CadastroSucesso.html'; // Substitua 'CadastroSucesso.html' pela URL ou caminho correto

            // Armazena o ano de nascimento no localStorage
            let anoNascimento = anoNascimentoInput.value;
            localStorage.setItem("ano-nascimento", anoNascimento);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Limpa o valor do ano de nascimento armazenado no localStorage
    localStorage.removeItem("ano-nascimento");

    // Exibe o ano de nascimento se estiver definido no localStorage
    let anoNascimentoInput = localStorage.getItem("ano-nascimento");
    if (anoNascimentoInput) {
        document.getElementById("ano-nascimento").textContent = anoNascimentoInput;
    } else {
        document.getElementById("ano-nascimento").textContent = "Não especificado";
    }
});

function validarFormulario() {
            var nome = document.getElementById('nome').value;
            if (nome === '') {
                alert('Por favor, preencha o campo do nome.');
                return false; // Impede o envio do formulário
            }
            return true; // Permite o envio do formulário
        }
