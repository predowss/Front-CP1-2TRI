function handleSubmit() {
    var form = document.getElementById('contactForm');
    var successMessage = document.getElementById('successMessage');
    
    // Adicione aqui o código para enviar os dados do formulário, se necessário
    
    successMessage.textContent = "Mensagem enviada, em breve responderemos";
    successMessage.style.color = "green";
    
    form.reset(); // Limpa o formulário
    
    return false; // Previne o redirecionamento da página
}