const caroussel = document.querySelector(".caroussel-container");
const pages = document.querySelectorAll(".caroussel-slider");
const carou = document.querySelector(".caroussel");
const btnStarts = document.querySelectorAll(".btn-starts");
const btnIdeas = document.querySelector(".btn-ideas");
const btnBusiness = document.querySelector(".btn-business");

let currentPage = 0;
for (let i = 0; i < pages.length; i++) {
  pages[i].classList.add("y");
}
for (let j = 0; j < pages.length; j++) {
  if (j != currentPage) {
    pages[j].classList.add("inactive");
  }
}

setInterval(() => {
  pages[currentPage].classList.add("inactive");
  currentPage += 1;
  if (currentPage == pages.length) {
    currentPage = 0;
  }
  pages[currentPage].classList.remove("inactive");
  if (currentPage == 1) {
    carou.classList.add("carouIdeas");
  } else if (currentPage == 2) {
    carou.classList.add("carouBusiness");
  } else {
    carou.classList.remove("carouBusiness");
    carou.classList.remove("carouIdeas");
  }
}, 5000);

btnIdeas.addEventListener("click", (event) => {
  carou.classList.remove("carouBusiness");
  carou.classList.add("carouIdeas");
  for (let j = 0; j < pages.length; j++) {
    if (currentPage == pages.length) {
      currentPage = 0;
    }
    pages[currentPage].classList.add("inactive");
  }
  pages[1].classList.remove("inactive");
});

// Ici on va s'occuper de la partie service

const firstCards = document.querySelector(".content .cards .firstCards");
const secondCards = document.querySelector(".content .cards .secondCards");

const spanRight = document.querySelector(".content span.btn-right");
secondCards.classList.add("arrival");
spanRight.addEventListener("click", (event) => {
  secondCards.classList.remove("arrival");
  secondCards.classList.add("arrivalRight");
  firstCards.classList.add("depart");
});
const spanLeft = document.querySelector(".content span.btn-left");
spanLeft.addEventListener("click", (event) => {
  firstCards.classList.remove("depart");
  firstCards.classList.add("arrivalRight");
  secondCards.classList.add("arrival");
});

// ici on va s'occuper de la partie sliders

// const service=document.getElementById("services");
// service.addEventListener("click",(e)=>{
//   console.log(5);
//   service.classList.add("test");
// })

const btn = document.querySelector(".grow");
const pop = document.querySelector("#services .popUpSliders");
btn.addEventListener("click", () => {
  console.log(5);
  pop.classList.add("bottom");
  document.body.classList.add("modal-open");
});


// là je vais m'occuper de la sortie du texte back 
const backBtn=document.querySelector(".btnQuit span img");
const back=document.querySelector(".btnQuit .back");

backBtn.addEventListener("mouseover", () => {
  console.log(5);
  back.classList.add("backLeft");
});
backBtn.addEventListener("mouseleave", () => {
  back.classList.remove("backLeft");
});

backBtn.addEventListener("click",()=>{
  pop.classList.remove("bottom");
  document.body.classList.remove("modal-open");

})




// ici on va s'occuper des stars 


const star=document.querySelectorAll(".star");

// console.log(star.length);


// star.addEventListener("mouseover",()=>{
//   star.classList.add("starHover");
// })


// for (let i = 0; i < star.length; i++) {
//   // Stocker l'indice de l'élément span dans l'attribut "data-index"
//   // star[i].setAttribute("data-index", i+1);
  
//   // // Gestionnaire d'événements pour l'événement hover
//   // star[i].addEventListener("mouseover", function() {
//   //   const index = this.getAttribute("data-index");
//   //   console.log("Indice du span en cours de survol : " + index);
//   // });
  
//   // // Gestionnaire d'événements pour l'événement clic
//   // star[i].addEventListener("click", function() {
//   //   const index = this.getAttribute("data-index");
//   //   console.log("Indice du span cliqué : " + index);
//   // });
 

//   // star[i].addEventListener("mouseover",()=>{
//   //   for(let j=0;j<=i;j++){
//   //     star[j].classList.add("starHover")
//   //   }

//   // })
//   // star[i].addEventListener("mouseleave",()=>{
//   //   for(let j=0;j<=i;j++){
//   //     star[j].classList.remove("starHover")
//   //   }

//   // })

//   star[i].addEventListener("click",()=>{
//     for(let j=0;j<=i;j++){
//       star[j].classList.add("starHover")
//       // console.log(i);
//       // console.log(j);
//     }
//     // star[j].addEventListener("click",()=>{
//     //       if(j<i){
//     //         for(let m=j+1;j<=i;j++){
//     //           star[j].classList.remove("starHover")
//     //         }
//     //       }
//     //     })



//     // for (let m = i+1; m < star.length; m++) {
//     //   star[m].addEventListener("click",()=>{
//     //     if(star[m].classList.contains("starHover")){
         
            
//     //           star[m].classList.remove("starHover")
            
//     //       }
        
//     //   })
      
//     // }
//     window.addEventListener("click",()=>{
//       for (let m = i+1; m < star.length; m++) {
//         if(star[m].classList.contains("starHover")){
//           star[m].classList.remove("starHover")
//         }else{
//           star[m].classList.add("starHover")
//         }
//       }
//     });

//   })
 
  
// }

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", () => {
    // Ajouter la classe "starHover" à toutes les étoiles précédentes
    for (let j = 0; j <= i; j++) {
      star[j].classList.add("starHover");
    }

    // Supprimer la classe "starHover" des étoiles suivantes
    for (let k = i + 1; k < star.length; k++) {
      star[k].classList.remove("starHover");
    }
  });

  star[i].addEventListener("mouseover", () => {
    // Ajouter la classe "starHover" à toutes les étoiles précédentes
    for (let j = 0; j <= i; j++) {
      star[j].classList.add("starHover");
    }
  });

  star[i].addEventListener("mouseleave", () => {
    // Supprimer la classe "starHover" de toutes les étoiles
    for (let k = 0; k < star.length; k++) {
      star[k].classList.remove("starHover");
    }

    // Ajouter la classe "starHover" aux étoiles sélectionnées
    for (let j = 0; j <= i; j++) {
      if (star[j].classList.contains("selected")) {
        star[j].classList.add("starHover");
      }
    }
  });

  star[i].addEventListener("click", () => {
    // Supprimer la classe "selected" de toutes les étoiles
    for (let k = 0; k < star.length; k++) {
      star[k].classList.remove("selected");
    }
    // Ajouter la classe "selected" aux étoiles sélectionnées
    for (let j = 0; j <= i; j++) {
      star[j].classList.add("selected");
    }
  });
}











