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

/* show/hide arrow scroll up */
window.addEventListener("scroll", () => {
   let currentPosition = window.pageYOffset;
   currentPosition > 1000 ? arrowUP.classList.add("active") : arrowUP.classList.remove("active");
   console.log("this", window.pageYOffset);
});

/* move up the page when arrow scrollUp click */
const moveUp = () => {
   const scrollStep = () => {
      window.pageYOffset === 0 ? clearInterval(timer) : window.scroll(0, window.pageYOffset - 100);
   };

   let timer = setInterval(scrollStep, 25);
};

const closeOpen = (elements, value, lines) => {
   if (elements.length > 1) {
      elements.forEach((element) => {
         element.addEventListener("click", () => {
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
const menus = document.querySelectorAll(".menus");
const burger = document.querySelector(".burger_container");
const lines = document.querySelectorAll(".burger");
const navOpen = document.querySelector(".list");
const arrowUP = document.querySelector(".scroll_up");

closeOpen(burger, navOpen, lines); /* toggle burger & show menu list */
closeOpen(menus, navOpen, lines); /* close menu list when active link in menu was click */

arrowUP.addEventListener("click", () => {
   moveUp();
});
