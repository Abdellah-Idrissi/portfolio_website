
/*-------------- NAV & HEADER INTERACTIONS --------------*/
const nav = document.querySelector('#nav')
const menuIcon = document.querySelector('#menuIcon')
const closeIcon = document.querySelector('#closeIcon')
const header = document.querySelector('header')
const navLinks = document.querySelectorAll('.nav_list li a')
menuIcon.addEventListener('click',()=> {
  nav.classList.add('navShowUp')
})
closeIcon.addEventListener('click',()=> {
  nav.classList.remove('navShowUp')
})
window.addEventListener('scroll',()=> {
  if(scrollY > 61) {
    header.classList.add('scrolling')
  }

  else {
    header.classList.remove('scrolling')
  }
})
navLinks.forEach((navLink)=> {
  navLink.addEventListener('click',(e)=> {
    e.preventDefault()

    let href = navLink.getAttribute('href').split('').splice(1).join('')
    let sectionTop = document.querySelector(`#${href}`).offsetTop + 2

    scrollTo({ top: sectionTop,  left: 0,  behavior: 'smooth' })

    closeIcon.click()
  })
})




/*-------------- SWIPERJS (PROJECTS) --------------*/
let projectsSwiper = new Swiper(".projectsSwiper", {
  cssMode: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 768
    768: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


/*-------------- SWIPERJS (TESTIMONIAL) --------------*/
let testimonialSwiper = new Swiper(".testimonialSwiper", {
  cssMode: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});



/*-------------- SCROLL SECTION ACTIVE LINK --------------*/
let sections = document.querySelectorAll('.section')
function sectionLinkActive() {
let headerHeight = matchMedia('(min-width:1024px)').matches ? 61 : 0

  sections.forEach((section)=> {
    let sectionTop = section.offsetTop - headerHeight
    let sectionBottom = sectionTop + section.offsetHeight
    let sectionId = section.id
    let sectionNavLink = document.querySelector(`.nav_list a[href*=${sectionId}]`)

    if(scrollY >= sectionTop && scrollY <= sectionBottom) {
      sectionNavLink.classList.add('active')
    }

    else {
      sectionNavLink.classList.remove('active')
    }

  })
}
window.addEventListener('scroll',sectionLinkActive)



/*-------------- THEME CHANGER --------------*/
let themeBtn = document.querySelector('.themeBtn') 
let themeBtnIcon = themeBtn.querySelector('i')
let theme = localStorage.getItem('theme')
if(theme !== null && theme === 'dark') {
  document.documentElement.classList.add('dark')
  themeBtnIcon.classList.remove('ri-moon-line')
  themeBtnIcon.classList.add('ri-sun-line')
}
themeBtn.addEventListener('click',()=> {

  if(document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    themeBtnIcon.classList.remove('ri-sun-line')
    themeBtnIcon.classList.add('ri-moon-line')
    localStorage.setItem('theme','light')
    localStorage.setItem('themeIcon','ri-moon-line')
  }

  else {
    document.documentElement.classList.add('dark')
    themeBtnIcon.classList.remove('ri-moon-line')
    themeBtnIcon.classList.add('ri-sun-line')
    localStorage.setItem('theme','dark')
    localStorage.setItem('themeIcon','ri-sun-line')
  }

})



/*-------------- ARROW UP --------------*/
let arrowUp = document.querySelector('.arrowUp')
arrowUp.addEventListener('click',()=> {
  scrollTo({ top: 0,  left: 0,  behavior: 'smooth' })
})
window.addEventListener('scroll',()=> {
  scrollY > 600 ? arrowUp.classList.add('showArrowUp') : arrowUp.classList.remove('showArrowUp')
})




/*-------------- EMAILJS --------------*/
function initEmailJs(){
  emailjs.init("DkODN_tWiF9BqVpke");
}
function clearInputs () {
  let id = setTimeout(()=> {
    mailMsg.innerHTML = ''
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#message').value = ''
    clearTimeout(id)
  },5000)
}
initEmailJs()
let submitBtn = document.querySelector('#submitBtn')
let mailMsg = document.querySelector('#mailMsg')
submitBtn.addEventListener('click',()=> {
  let name = document.querySelector('#name').value
  let email = document.querySelector('#email').value
  let message = document.querySelector('#message').value

  if(name === '' || email === '' || message === '') {
    mailMsg.innerHTML = 'Please Fill out all Inputs fields'
    mailMsg.classList.add('fillInputs')
    clearInputs()
  }

  else {

    let params = {
      name: name,
      email: email,
      message: message
    }

    const serviceID = 'service_exmh6yg'
    const templateID = 'template_g75qeoe'
    
    emailjs.send(serviceID,templateID,params)
    .then(res=> {
      mailMsg.innerHTML = 'Sent successfully'
      mailMsg.classList.remove('fillInputs')
      mailMsg.classList.add('sent')
      clearInputs()
    })
    .catch(err=> {
      mailMsg.innerHTML = 'OOPS! SOMETHING HAS FAILED...'
      mailMsg.classList.remove('sent')
      mailMsg.classList.add('fillInputs')
      clearInputs()
    })

  }

})



/*-------------- SCROLLREVEALJS --------------*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2400,
  delay:300,
  reset: true,
})
sr.reveal('.home_pic , .projectsSwiper , .testimonialSwiper ')
sr.reveal('.home_text , .footer' , {origin:'bottom'})
sr.reveal('.skills_left , .qualif_left , .contact_left',{origin:'left'})
sr.reveal('.skills_right , .qualif_right , .contact_right',{origin:'right'})
sr.reveal('.service_item' , {interval:150})