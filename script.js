document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Você clicou no botão!';
    });
});
