// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root', //vue deve lavorare all'interno del contenitore root
        data: {
            message: 'Ciao, è la prima volta che uso Vue.js!',
            //all'interno di una proprietà che si chiama title abbiamo il titolo
        }
    });

