function validateLoginForm() {
    var form = document.getElementById('loginForm');
    var username = form['username'].value.trim();
    var password = form['password'].value.trim();

    // Verifica se o nome de usuário e a senha estão corretos
    if (username === 'kaue' && password === '1234') {
        window.location.href = './index.html'; // Redireciona para a página inicial
        return false; // Previne o envio do formulário
    } else {
        alert('Usuário ou senha incorretos.');
        return false; // Previne o envio do formulário e mantém o usuário na página de login
    }
}

function validateRegisterForm() {
    var form = document.getElementById('registerForm');
    var username = form['username'].value.trim();
    var email = form['email'].value.trim();
    var password = form['password'].value.trim();

    // Você pode adicionar aqui outras validações, como comprimento mínimo de senha, etc.
    if (validateEmail(email)) {
        alert('Cadastro feito com sucesso');
        return true; // Permite o envio do formulário
    } else {
        alert('Insira um endereço de e-mail válido.');
        return false; // Previne o envio do formulário
    }
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
