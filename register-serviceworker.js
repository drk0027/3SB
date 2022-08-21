window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(resp => {
            console.log("Service worker registrado")
            console.info(resp)
        })
        .catch(err => {
            console.warn("service worker no registrado")
            console.error(err)
        })
}

if (window.location.protocol === 'http:') {
    console.log("cuidado, no deberias instalar apps desde un sitio inseguro")

    //determina si estoy en una pagina insegura
    /* const requireHTTPS = document.getElementById('requireHTTPS');
    const link = requireHTTPS.querySelector('a');
    link.href = window.location.href.replace('http://', 'https://');
    requireHTTPS.classList.remove('hidden'); */
}

window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    window.deferredPrompt = null;
});