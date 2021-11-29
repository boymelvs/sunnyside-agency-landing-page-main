"use strict";

/* adding & removing classes here */
const active = (value) => {
   const delay = () => {
      /* after changing display from none to flex execute this */
      setTimeout(() => {
         if (value.classList.contains("active")) {
            value.classList.remove("active");

            /* delay on removing show classes */
            setTimeout(() => {
               value.classList.remove("show");
            }, 150);

            /* adding active classes to display menu  */
         } else {
            value.classList.add("active");
         }
      }, 0.1);
   };

   if (value.classList.contains("show")) {
      delay();

      /* adding show classes to change display from none to flex */
   } else {
      value.classList.add("show");
      delay();
   }
};

/* toggle burger */
const showBurger = (lines) => {
   lines.forEach((line) => {
      active(line);
   });
};

/* call fn to show burger & add/remove classes */
const closeOpen = (elements, value, lines) => {
   /* looping for multiple listening */
   if (elements.length > 1) {
      elements.forEach((element) => {
         element.addEventListener("click", () => {
            /* hide menu once content is click */
            if (value.classList.contains("active")) {
               active(value);
               showBurger(lines);
            }
         });
      });

      /* listening for single element */
   } else {
      elements.addEventListener("click", () => {
         /* open/close menu & burger */
         active(value);
         showBurger(lines);
      });
   }
};

/* get elements from DOM */
const menus = document.querySelectorAll(".menus"); /* get all list of menu */
const burger = document.querySelector(".burger_container"); /* get the burger */
const lines = document.querySelectorAll(".burger"); /* get all line of burger */
const navBar = document.querySelector(".list"); /* get menu container */
const arrowUP = document.querySelector(".scroll_up"); /* get up_arrow */

closeOpen(burger, navBar, lines); /* toggle burger & show menu list */
closeOpen(menus, navBar, lines); /* close menu list when active link in menu was click */

/* listening when to show up_arrow */
window.addEventListener("scroll", () => {
   window.pageYOffset > 750 ? arrowUP.classList.add("active") : arrowUP.classList.remove("active");
});
