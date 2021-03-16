const arrayButtons = Array.from(document.querySelectorAll('button'));

arrayButtons.forEach(button => button.addEventListener('click', () => {

    setTimeout(async () => {
        const response = await fetch("http://localhost:3000/last-record");
        const json = await response.json();
        const { estado, updatedAt } = json[0];
        updateView(estado, updatedAt);
    }, 1000);

}));


const updateView = (estado, updatedAt) => {
    const estadoView = document.getElementById('estado');
    const updateView = document.getElementById('modificacion');
    estadoView.textContent = estado;
    updateView.textContent = updatedAt;
}