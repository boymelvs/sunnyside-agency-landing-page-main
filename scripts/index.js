"use strict";

/* add & remove classes */
const active = (value) => {
   value.classList.contains("active") ? value.classList.remove("active") : value.classList.add("active");
};

/* toggle burger */
const showBurger = (lines) => {
   lines.forEach((line) => {
      active(line);
   });
};

/* get the location of page */
const getPosition = () => {
   let currentPosition = Math.floor(window.pageYOffset / 100) * 100;

   return currentPosition;
};

/* move up/down the page */
const moveUpDown = (myPosition, currentPosition) => {
   const scrollStep = () => {
      if (myPosition > currentPosition) {
         window.pageYOffset === myPosition ? clearInterval(timer) : window.scroll(0, getPosition() + 100);
      } else {
         window.pageYOffset === myPosition ? clearInterval(timer) : window.scroll(0, getPosition() - 100);
      }
   };

   let timer = setInterval(scrollStep, 17);
};

/* call show burger & add/remove classess */
const closeOpen = (elements, value, lines) => {
   if (elements.length > 1) {
      elements.forEach((element) => {
         element.addEventListener("click", () => {
            if (element.innerText === "About") {
               moveUpDown(500, getPosition());
            }

            if (element.innerText === "Services") {
               moveUpDown(1300, getPosition());
            }

            if (element.innerText === "Projects") {
               moveUpDown(1900, getPosition());
            }

            if (element.innerText === "Testimonials") {
               moveUpDown(2500, getPosition());
            }

            active(value);
            showBurger(lines);
         });
      });

      /** */
   } else {
      elements.addEventListener("click", () => {
         active(value);
         showBurger(lines);
      });
   }
};

/** get elements from DOM */
const menus = document.querySelectorAll(".menus"); /* get all list of menu */
const burger = document.querySelector(".burger_container"); /* get the burger */
const lines = document.querySelectorAll(".burger"); /* get all line of burger */
const navBar = document.querySelector(".list"); /* get menu container */
const arrowUP = document.querySelector(".scroll_up"); /* get up_arrow */

closeOpen(burger, navBar, lines); /* toggle burger & show menu list */
closeOpen(menus, navBar, lines); /* close menu list when active link in menu was click */

/* listening when to show up_arrow */
window.addEventListener("scroll", () => {
   let arrowPosition = window.pageYOffset;

   arrowPosition > 1000 ? arrowUP.classList.add("active") : arrowUP.classList.remove("active");
   console.log("this", arrowPosition);
});

/* listening when up_arrow was click */
arrowUP.addEventListener("click", () => {
   moveUpDown(0);
});
