      
      // SCRIPT POUR Le MENU DE NAVIGATION EN MODE RESPONSIVE

      const hamburgerToggler = document.querySelector(".hamburger");

      const navLinksContainer = document.querySelector(".navlinks-container");

      const toggleNav = e => {
         
         hamburgerToggler.classList.toggle("open")

         const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";

         hamburgerToggler.setAttribute("aria-expanded",ariaToggle)

         navLinksContainer.classList.toggle("open")
      }

         hamburgerToggler.addEventListener("click", toggleNav)


         
         // SCRIPT Pour La Section Goûter anim apres click de telecharger img 1

         const downText1 = document.getElementById('downText1');
         const downImg1 = document.getElementById('downImg1');

         downText1.addEventListener('click', (e) => {

            setTimeout(() => {  
                downImg1.remove();
               });

            downText1.innerHTML = "✔";
            downText1.style.fontSize = "83px";
            downText1.style.color = "#fff";

         })


         // SCRIPT Pour La Section Goûter anim apres click de telecharger img 2

         const downText2 = document.getElementById('downText2');
         const downImg2 = document.getElementById('downImg2');

         downText2.addEventListener('click', (e) => {

            setTimeout(() => {  
                downImg2.remove();
               });

            downText2.innerHTML = "✔";
            downText2.style.fontSize = "83px";
            downText2.style.color = "#fff";

         })


         // SCRIPT Pour La Section Goûter anim apres click de telecharger img 3

         const downText3 = document.getElementById('downText3');
         const downImg3 = document.getElementById('downImg3');

         downText3.addEventListener('click', (e) => {

            setTimeout(() => {  
                downImg3.remove();
               });

            downText3.innerHTML = "✔";
            downText3.style.fontSize = "83px";
            downText3.style.color = "#fff";

         })


         // SCRIPT Pour La Section Goûter anim apres click de telecharger img 4

         const downText4 = document.getElementById('downText4');
         const downImg4 = document.getElementById('downImg4');

         downText4.addEventListener('click', (e) => {

            setTimeout(() => {  
                downImg4.remove();
               });

            downText4.innerHTML = "✔";
            downText4.style.fontSize = "83px";
            downText4.style.color = "#fff";

         })