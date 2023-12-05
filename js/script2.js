document.addEventListener('DOMContentLoaded', function(){
    const input = document.querySelector('.padd');
    const finalizar = document.querySelector(".finalizar");
    const form = document.querySelector('.linha');

    finalizar.style.display = 'none'; // Inicialmente, esconda o elemento finalizar

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do envio do formulário

        const escrita = input.value;
        
        if (escrita !== 'Digite aqui...') {
            // Save to localStorage apenas se o valor for diferente de 'Digite aqui...'
            localStorage.setItem('userInput', escrita);
            // Ou execute outras ações com o valor do input
            
            // Altere o estilo para exibir o elemento finalizar quando o formulário for enviado
            finalizar.style.display = 'flex';
        }
    });
});
