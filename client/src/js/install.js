const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// make button visible before install
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';

    // reset button text after installation
    butInstall.addEventListener('click', async () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});

// notify user the app was installed
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
