const navSlide = () => {
    const bruger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    bruger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

   /*      //Animate links
         navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
            }
        });   */

        //Burger animation
        bruger.classList.toggle('toggle');
    });

}
navSlide();