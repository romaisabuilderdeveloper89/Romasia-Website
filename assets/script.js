'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            question.classList.toggle('active');
  
            // Toggle answer visibility
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
  });
  
  
  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  
  next.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
  })
  
  prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
  })

  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;
  
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue +=1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });