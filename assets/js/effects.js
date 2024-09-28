/**
 * Listening evento click bottone Continua a leggere
 * Chiude finestra di splash e apre il sito
 */
function closeSplash() {

    fadeOut("splashscreen" , () => {

        document.getElementById("splashscreen").style.display = "none";

        fadeIn("app");

    })
}

/**
 * Apre finestra modale
 * 
 * @param {string} elmId ID finestra modale
 */
function openModalWindow(elmId) {

    document.getElementById(elmId).style.display = "block";
    fadeIn(elmId);

}

/**
 * Chiude finestra modale
 * @param {string} elmId ID finestra modale
 */
function closeModalWindow(elmId) {

    fadeOut(elmId, () => {

        document.getElementById(elmId).style.display = "none";

    });

}

/**
 * Listener evento click sull'anteprima di un'immagine della galleria
 * Cambia immagine visualizzata applicando un effetto fade-out fade-in
 * 
 * @param {String} mainPictureId id elemento img in cui visualizzare l'immagine
 * @param {String} elmId id elemento anteprima selezionato
 * @param {String} imgName nome file dell'immagine
 * @param {String} caption testo da visualizzare nella didascalia
 */
function galleryChangePicture(mainPictureId, elmId, imgName, caption) {    

    fadeOut(mainPictureId , () => {

        document.getElementById(mainPictureId).src = './assets/img/' + imgName;

        document.querySelectorAll(".active-thumb").forEach(elm => {

            elm.classList.remove("active-thumb");
            
        });

        fadeIn(mainPictureId, () => {

            document.getElementById(elmId).classList.add("active-thumb");
            document.getElementById('events-gallery-caption').innerHTML = caption;

        });

    })

}

/**
 * Listener evento click sugli elementi del menu di navigazione per dispositivi mobile.
 * Scorre la pagina fino all'elemento indicato nel parametro elmId. 
 * 
 * @param {String} elmId ID elemento
 */
function goTo(elmId) {

    fadeOut("mobile-menu", () => {

        document.getElementById("mobile-menu").style.display = "none";

        const element = document.getElementById(elmId);
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    });

}


/**
 * Applica effetto dissolvenza ad un elemento del DOM
 * 
 * @param {String} elmId ID elemento a cui applicare la dissolvenza
 * @param {*} callback funzione da eseguire alla fine
 */
function fadeOut(elmId, callback) {

    const elm = document.getElementById(elmId);
    elm.style.opacity = 1;

    const timer = setInterval(() => {

        var opacity = Number.parseFloat(elm.style.opacity);

        if (opacity > 0) {

            opacity -= 0.1;
            elm.style.opacity = opacity;

        }
        else {

            clearInterval(timer);

            if (typeof callback !== "undefined") callback();

        }

    }, 50)

}

/**
 * Applica effetto fade-in ad un elemento del DOM
 * 
 * @param {String} elmId ID elemento a cui applicare l'effetto
 * @param {*} callback funzione da eseguire alla fine
 */
function fadeIn(elmId, callback) {

    const elm = document.getElementById(elmId);
    elm.style.opacity = 0;

    const timer = setInterval(() => {

        var opacity = Number.parseFloat(elm.style.opacity);

        if (opacity < 1) {

            opacity += 0.1;
            elm.style.opacity = opacity;

        }
        else {

            clearInterval(timer);

            if (typeof callback !== "undefined") callback();

        }

    }, 50)

}