// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root', //vue deve lavorare all'interno del contenitore root
        data: {
            title: 'Ciao, è la prima volta che uso Vue.js!',
            //all'interno di una proprietà che si chiama title abbiamo il titolo
            myImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/FujiSunriseKawaguchiko2025WP.jpg/260px-FujiSunriseKawaguchiko2025WP.jpg'
        }
    }
);

