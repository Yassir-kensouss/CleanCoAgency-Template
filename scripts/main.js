
/**********************************Initialize Swiper (Our Permissions section)***************************/

var mySwiper = new Swiper('.permissions-swipper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:'true',
  },

  //Autoplay

  autoplay: {
    delay: 4000,
  },
});

/****************************************Initialize Swiper (News section)***********************************/

var swiper = new Swiper('.news-content-swiper', {
  // Optional parameters
  direction: 'vertical',
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 280
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 230
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 250
    },

    // when window width is >= 640px
    680: {
      slidesPerView: 2,
      spaceBetween: 250
    },

    // when window width is >= 750px
    750: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  },
  slidesPerView: 3,
  spaceBetween: 250,
  loop:'true'
});

/****************************************Initialize Swiper (FAQ section)***********************************/

var swiper = new Swiper('.faq-content-swiper', {
  // Optional parameters
  direction: 'vertical',
  updateOnWindowResize:'true',
  slidesPerView: 5,
  spaceBetween: -70,
});

/*****************************************Accordion****************************************/

// Get the accordions objects
const accordion = document.querySelector('.accordion-contentBox');
const accordion_head = document.querySelectorAll('.accordion-heading');
const arrow_icon = document.querySelectorAll('.fa-angle-down');


//Loop for each single accordion and add the active class to resize the height
for(i = 0 ; i<accordion_head.length ; i++)
{
  accordion_head[i].addEventListener('click',function(){
    this.nextElementSibling.classList.toggle('active');
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight)
    {
      panel.style.maxHeight = null
    }
    else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    this.lastElementChild.firstElementChild.classList.toggle('rotate');
  });
 
}

//console.log(clicked);

/*********************************References section swiper*********************************/

var swiper = new Swiper('.references-swiper', {
  // Optional parameters
  direction: 'horizontal',
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 80
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 200
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 100
    }
  },
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: true,
});


/************************** Project Galery (Project details page) section swiper ************************/

var swiper = new Swiper('.project-galery-container', {
  // Optional parameters
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:'true',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: true,
});


/**************************************Humberger Menu Effect*******************************************/

const humberger = document.querySelector(".humberger");
const bottom_header = document.querySelector(".bottom-header");

// Set initial state of menu

let showMenu = false;

humberger.addEventListener('click',()=>{

  bottom_header.classList.toggle("open");

  if(!showMenu)
  {
    humberger.classList.add('close');
    // Set menu state
    showMenu = true;
  }else{

    humberger.classList.remove('close');
    // Set menu state
    showMenu = false;

  }

})

/***************************auto resize the project detail avatar height********************************/

/*
  we're going to make the project-detail-avatar box 
  auto resize depending on the project-detail-content
*/

// Get project detail content and avatar element

const project_detail_avatar = document.querySelector('.project-detail-avatar');
const project_detail_content = document.querySelector('.project-detail-content');

// Get the height of the content box
const pdc_box = project_detail_content.offsetHeight;

// console.log(pdc_box);

//Set the height of the avatar box
project_detail_avatar.style.height = pdc_box+"px";

