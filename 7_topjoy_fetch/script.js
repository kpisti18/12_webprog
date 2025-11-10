const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
//console.log(messages, messageBox, messageButton);

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const uzik = await fetch('./uzik.csv');
        console.log(uzik);
        
    } catch (error) {
        console.error(error);
    }
});

