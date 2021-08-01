$(document).ready(function(){
     $(window).scroll(function(){
            //  if(this.scrollY > 20){
            //     $('.navbar').addClass("sticky");
            //  }else{
            //     $('.navbar').removeClass("sticky");
            //  }
     });

    //  typing animation script 

    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    
});

    //  slide-up scicpt 

    $('.scroll-up-btn').click(function(){

        $('html').animate({scrollTop: 0})
          
    });

     
     // toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     
    });
});


function classToggle() {
   var el = document.querySelector('.icon-cards__content');
   el.classList.toggle('step-animation');
 }
 
 $(document).querySelector('#toggle-animation').addEventListener('click', classToggle);



 



    
    




