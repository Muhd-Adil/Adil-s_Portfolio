
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

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const nav = document.querySelector('nav');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor link behavior
      const targetSection = document.getElementById(this.hash.substring(1));

      if (!targetSection) {
        console.error('Target section not found:', this.hash.substring(1));
        return;
      }

      const offset = window.innerWidth <= 768 ? 80 : (nav.offsetHeight + 10);

      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });

      console.log('Scrolling to:', targetSection.id, 'Offset:', offset);
    });
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
