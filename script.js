document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('MyCheckbox');
  const bar = document.querySelector('.bar');
  
  // Ensure the cursor is always a pointer when hovering over the bar container
  bar.addEventListener('mouseenter', () => {
      bar.style.cursor = 'pointer';
  });

  bar.addEventListener('mouseleave', () => {
      bar.style.cursor = 'default';
  });

  // Ensure the cursor is a pointer over the entire bar, even in between spans
  bar.querySelectorAll('span').forEach(span => {
      span.addEventListener('mouseover', () => {
          bar.style.cursor = 'pointer';
      });

      span.addEventListener('mouseleave', () => {
          bar.style.cursor = 'default';
      });
  });
});





//Glowing hover effect
    document.addEventListener('mousemove', function(e) {
        const glow = document.querySelector('.glow');
        const x = e.clientX;
        const y = e.clientY;

        // Constrain the glow element within the viewport horizontally
        const maxX = window.innerWidth - (glow.offsetWidth / 2);
        const minX = glow.offsetWidth / 2;
        
        // Constrain the glow element within the viewport vertically
        const maxY = window.innerHeight - (glow.offsetHeight / 2);
        const minY = glow.offsetHeight / 2;

        const posX = Math.min(Math.max(x, minX), maxX);
        const posY = Math.min(Math.max(y, minY), maxY);

        glow.style.left = `${posX}px`;
        glow.style.top = `${posY}px`;
    });


//Text typing Animation

let typingEffect= new Typed(".name-spc",{
    strings:["MUHAMMED ADIL","FULL STACK DEVELOPER"],
    loop:true,
    typeSpeed:80,
    backSpeed:50,
    startDelay:500,
    backDelay:2500
})

//For Smooth Scrolling

const navLinks = document.querySelectorAll('.mylink');
const nav = document.querySelector('nav');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.hash.substring(1));

    // Enhanced smooth scrolling with optional offset for navbar height
    if (window.innerWidth <= 768) { // Adjust the width as needed for your mobile breakpoint
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - (nav.offsetHeight + 20),
          behavior: 'smooth'
        });
      }
  });
});

// For Navbar fading

$(document).ready(function(){
  $('.navbar-nav a').on('click', function(){

    if($('.navbar-collapse').hasClass('show'))
    { 
      $('.navbar-collapse').removeClass('show');
      $('#MyCheckbox').prop('checked', false);
    }
  });
});

//For Skill-section hover
$(document).ready(function(){
  $(".skill-item").hover(function(){
    $(this).find('.sk').css(
      "transform","scale(1.2)"
    );
  },
  function(){
    $("img,i").css(
      "transform","none"
    );
  })
});





