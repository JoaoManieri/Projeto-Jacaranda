const { ipcRenderer } = require("electron");

let linkSobre = document.querySelector('#sobre_ref');

linkSobre.addEventListener('click', function() {
    console.log("Entrou")
    ipcRenderer.send('abrir-janela-sobre');
});