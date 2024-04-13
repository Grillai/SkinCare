gsap.registerPlugin(ScrollTrigger) 


var contenitoreVideo = document.getElementById('contenitoreVideo');
       
window.onload = function(){
    document.getElementById("video").play();
    contenitoreVideo.style.opacity = 1; // Imposta l'opacità a 100%
}
        
        
    


gsap.to(".Parte_Sinistra",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Sinistra", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 100%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 70%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});


gsap.to(".Parte_Sinistra-2",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Sinistra-2", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 100%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 70%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});



gsap.to(".Parte_Sinistra-3",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Sinistra-3", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 100%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 70%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});


gsap.to(".Parte_Sinistra-4",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Sinistra-4", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 100%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 70%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});



gsap.to(".Parte_Destra",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Destra", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 70%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 80%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});



gsap.to(".Parte_Destra-2",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Destra-2", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 70%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 80%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});



gsap.to(".Parte_Destra-3",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Destra-3", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 70%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 80%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});



gsap.to(".Parte_Destra-4",{ 
    x: 0, // sposta l'elemento a x = 0, è partito da x = -100%
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
        trigger: ".Parte_Destra-4", // l'animazione si attiva quando questo elemento è visibile a schermo
        start: "top 70%", // l'animazione inizia quando il 20% superiore dell'elemento è visibile
        end: "bottom 80%", // l'animazione termina quando il 20% inferiore dell'elemento è visibile
        scrub: true // l'animazione si aggiorna mentre si scorre
    }
});

gsap.to(".Contenitore_Prodotti", {
    x: 0, // sposta l'elemento a x = 0, è partito da x = 100% // Imposta l'opacità a 1 per far apparire il contenitore
    duration: 1, // durata dell'animazione in secondi
    scrollTrigger: {
      trigger: ".Prodotto", // l'animazione si attiva quando questo elemento è visibile a schermo
      start: "top 70%", // l'animazione inizia quando il 30% superiore dell'elemento è visibile
      end: "bottom 70%", // l'animazione termina quando il 30% inferiore dell'elemento è visibile
      scrub: true // l'animazione si aggiorna mentre si scorre
    }
});
  




document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuItems = document.querySelector('.container_link_menu');

    hamburgerMenu.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
});


document.getElementById('toggleModulo').addEventListener('click', function() {
    var modulo = document.getElementById('moduloContatto');
    if (modulo.style.opacity === '0' || modulo.style.opacity === '') {
        modulo.style.opacity = '1';
    } else {
        modulo.style.opacity = '0';
    }
});