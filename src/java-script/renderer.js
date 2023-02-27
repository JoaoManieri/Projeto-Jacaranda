const { ipcRenderer } = require('electron')

// const electron = window.require('electron');
// const ipcRenderer = electron.ipcRenderer;

let linkSobre = document.querySelector('#sobre_ref');

linkSobre.addEventListener('click', function() {
    console.log("Entrou")
    ipcRenderer.send('abrir-janela-sobre');
});