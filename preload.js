const path = require('path');
const { ipcRenderer } = require("electron");

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close_btn').onclick = function () {
        ipcRenderer.send('closeApp');
    }

    document.querySelector('.minimize_btn').onclick = function () {
        ipcRenderer.send('minimizeApp');
    }

})
