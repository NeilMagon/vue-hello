// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imageUrl: `https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png`
        };
    }
}).mount('#app');