
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });
});


document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(function() {
            alert('Réservation envoyée avec succès!');
        }, function(error) {
            alert('Erreur lors de l’envoi : ' + JSON.stringify(error));
        });
});
s