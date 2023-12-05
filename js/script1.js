document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.botao-digitar');
    const input = document.querySelector('.padd');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do envio do formulário
        
        const escrita = input.value;
        
        if (escrita !== 'Digite aqui...') {
            // Save to localStorage apenas se o valor for diferente de 'Digite aqui...'
            localStorage.setItem('userInput', escrita);
            // Ou execute outras ações com o valor do input

            // Aqui você pode redirecionar para outra página, se desejar:
            window.location.href = "fluxo_de_tela2.3.html";
        }
    });
});
