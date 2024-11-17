//---- Funzione per scorrere il contenuto di un contenitore verso sinistra
function scrollLeftContainer(sectionId) {
    // Trova il contenitore HTML tramite il suo ID
    const container = document.getElementById(sectionId);

    // Esegui lo scorrimento orizzontale di -300px (verso sinistra)
    // Il comportamento 'smooth' rende il movimento fluido
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

//---- Funzione per scorrere il contenuto di un contenitore verso destra
function scrollRightContainer(sectionId) {
    // Trova il contenitore HTML tramite il suo ID
    const container = document.getElementById(sectionId);

    // Esegui lo scorrimento orizzontale di 300px (verso destra)
    // Il comportamento 'smooth' rende il movimento fluido
    container.scrollBy({ left: 300, behavior: 'smooth' });
}


//---- Funzione per animazione delle sezioni delle carte
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutte le sezioni delle carte
    const sections = document.querySelectorAll('.section');

    // Funzione di callback per l'osservatore
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aggiunge la classe "visible" quando la sezione è visibile
                entry.target.classList.add('visible');
            } else {
                // Rimuove la classe "visible" quando la sezione non è visibile
                entry.target.classList.remove('visible');
            }
        });
    };

    // Configurazione dell'osservatore
    const observerOptions = {
        root: null, // Usa il viewport come contenitore
        threshold: 0.1 // La sezione è visibile quando almeno il 10% è nell'area visibile
    };

    // Crea un nuovo IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Aggiunge tutte le sezioni da osservare
    sections.forEach(section => {
        observer.observe(section);
    });
});


//---- Funzione per generare i div dinamicamente e aggiungere randomicamente le immagini
function generateRandomDivs(sectionId, imagePath, imageCount) {
    const container = document.getElementById(sectionId);

    // Rimuovi eventuali contenuti precedenti
    container.innerHTML = "";

    // Numero randomico di div da 7 a 10
    const divCount = Math.floor(Math.random() * 4) + 7;

    // Crea un array con numeri da 1 a imageCount
    const images = Array.from({ length: imageCount }, (_, i) => i + 1);

    // Mescola l'array
    images.sort(() => Math.random() - 0.5);

    // Aggiungi i div con immagini al container
    for (let i = 0; i < divCount; i++) {
        const div = document.createElement("div");
        div.classList.add("item");

        const img = document.createElement("img");
        img.src = `${imagePath}/${images[i % imageCount]}.png`;
        img.alt = `Immagine ${images[i % imageCount]}`;

        div.appendChild(img);
        container.appendChild(div);
    }
}

//--- Genera i div per ogni sezione
window.onload = function () {
    generateRandomDivs("trending", "assets/imgs/movies", 18);
    generateRandomDivs("watchAgain", "assets/imgs/movies", 18);
    generateRandomDivs("newReleases", "assets/imgs/movies", 18);
};
