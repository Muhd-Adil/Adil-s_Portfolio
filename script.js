
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


//Preloading Animation

const preloader=gsap.timeline({paused:true})

gsap.set(".navbar",{opacity:0})
gsap.set(".hero-section",{opacity:0})
gsap.set(".hero-sec-socials",{opacity:0})


preloader.to(".logo-container",{opacity:1,delay:1,duration:0.5})
.to(".loading-screen",{yPercent:-100,duration:1.3,ease:"expo.inOut"})
.to(".hero-section",{opacity:1 ,duration:0.3})
.to(".navbar",{opacity:1,duration:0.3})
.to(".hero-sec-socials",{opacity:1,duration:0.3})
preloader.play()


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

const navLinks = document.querySelectorAll('.link');
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
          top: targetSection.offsetTop - (nav.offsetHeight + 10),
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

//Contact form Validation

  const form=document.querySelector('form');

  //getting input value from form
  const fullName=document.getElementById("name");
  const email=document.getElementById("email");
  const mess=document.getElementById("message");


  function sendEmail(){
    const bodyMessage=`Full Name : ${fullName.value}<br>
    Email : ${email.value}<br>
    Message : ${mess.value}<br>`;


    Email.send({
      SecureToken :"007e9ac6-0415-4668-ac93-08b36695de03",
      // Host : "smtp.elasticemail.com",
      // Username : "adilpydev@gmail.com",
      // Password : "DC460408613796989DE133A17BA537A9802F",
      To : 'adilpydev@gmail.com',
      From : "adilpydev@gmail.com",
      Subject : "This is the subject",
      Body : bodyMessage
    }).then(
      message => {
        if (message =="OK"){
          Swal.fire({
            title: "<span class='swal2-title-custom'>Success!</span>",
            text: "Message Sent Successfully!",
            icon: "success"
          });
        }
      }
    );
  };

  function checkInputs(){
    const items=document.querySelectorAll(".form-control");

    for (const item of items){
      if (item.value == ""){
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      if (items[1].value != ""){
        checkEmail();
      }

      items[1].addEventListener("keyup", () => {
        checkEmail();
      });

      item.addEventListener("keyup",() => {
        if (item.value != ""){
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
        else{
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      })
    }
  };

  function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail=document.querySelector(".email-error");
    
    if (!email.value.match(emailRegex)){
      email.classList.add("error");
      email.parentElement.classList.add("error");
      if (email.value != ""){
        errorTxtEmail.innerText = "Enter a valid email address";
      }
      else{
        errorTxtEmail.innerText = "Email Required";
      }
    }
    else{
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  
  }


  form.addEventListener("submit",(e) => {
      e.preventDefault();

      checkInputs();

      if (!fullName.classList.contains("error") && !email.classList.contains("error")
         && !mess.classList.contains("error")){
            sendEmail();

            form.reset();
            return false;
        }
  });

  // window.addEventListener("load", (event) => {
  //   console.log("page is fully loaded");
  //   const txtArea=document.querySelector("textarea");
  //   txtArea.value="";
  // });
