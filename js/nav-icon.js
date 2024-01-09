const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); //find all nav__link


//create funtion to open navigation toggle button
navToggle.addEventListener('click', ()=> { 
    document.body.classList.toggle('nav-open');
    
});

//creat function to close the nav bar and remove open nav from navLinks
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove("nav-open");
    })
})