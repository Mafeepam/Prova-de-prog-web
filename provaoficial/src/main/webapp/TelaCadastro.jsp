<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <script src="Script.js"></script>
    
</head>
<body>
    <form id="cadastro-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" onblur="validarFormulario()" required>
        <br>
        <br>
        <label for="ano-nascimento">Ano de nascimento:</label>
        <input type="number" id="ano-nascimento" name="ano-nascimento" min="1900" max="2023" onblur="calcularIdade()" required>
        <span id="idade"></span>
        <br>
    </form>
    <div id="response"></div>
</body>
</html>
