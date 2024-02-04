//Text typing Animation

let typingEffect= new Typed(".name-spc",{
    strings:["MUHAMMED ADIL","FULL STACK DEVELOPER"],
    loop:true,
    typeSpeed:80,
    backSpeed:50,
    startDelay:500,
    backDelay:2500
})

// For Smooth Scrolling

// const navLinks = document.querySelectorAll('.mylink');

// navLinks.forEach(link => {
//   link.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor link behavior

//     const targetSection = document.getElementById(this.hash.substring(1));

//     // Enhanced smooth scrolling with optional offset for navbar height
//     window.scrollTo({
//       top: targetSection.offsetTop - (nav.offsetHeight || 50), // Adjust offset if needed
//       behavior: 'smooth'
//     });
//   });
// });
