const nosPlats = [
   {
      img: "1-dish.png",
      alt: "image de la salade vert",
      nomDuPlat: "Salade Verte",
      details: "Une salade verte remplie de chou, de feuilles de moutarde et de morceaux de poulet ajoutés pour plus de saveurs." 
   },
   {
      img: "2-dish.png",
      alt: "image de la salade combinée",
      nomDuPlat: "Salade de Boeuf",
      details: "Une salade combinée avec une délicieuse tranche de bacon et mélangée à de l'huile de sésame savoureuse et fraîche." 
   },
   {
      img: "3-dish.png",
      alt: "image de la salade mélangée",
      nomDuPlat: "Salade de Noix",
      details: "La salade est mélangée à divers types de noix salées pour ajouter un goût délicieux et addictif." 
   }

];

/* 
   *****LA FUNCTION
*/

let container = document.querySelector('.cards');

(function () {

   const cardsHTML = renderCard(nosPlats);

   if(!!cardsHTML) {
      container.innerHTML = cardsHTML;
   }

   function renderCard(cards) {
      return `

      ${cards.map(card => {
         return `
         <div class="card">
            <img src="images/${card.img}" alt="${card.alt}">
            <h2>${card.nomDuPlat}</h2>
            <p class="subtitle">${card.details}</p>
         </div>
         `;
      }).join('')}

      `;
   }
})();

// 925DEV