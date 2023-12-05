document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.botao-digitar');
    const input = document.querySelector('.padd');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const escrita = input.value;
        
        if (escrita !== 'Digite aqui...') {
            
            localStorage.setItem('userInput', escrita);
            

        }
    });
});
