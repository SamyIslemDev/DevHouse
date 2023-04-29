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

const btn = document.querySelectorAll(".grow");
const pop = document.querySelectorAll("#services .popUpSliders");
btn[0].addEventListener("click", () => {
  console.log(5);
  pop[0].classList.add("bottom");
  document.body.classList.add("modal-open");
});


// là je vais m'occuper de la sortie du texte back 
const backBtn=document.querySelectorAll(".btnQuit span img");
const back=document.querySelectorAll(".btnQuit .back");

backBtn[0].addEventListener("mouseover", () => {
  console.log(5);
  back[0].classList.add("backLeft");
});
backBtn[0].addEventListener("mouseleave", () => {
  back[0].classList.remove("backLeft");
});

backBtn[0].addEventListener("click",()=>{
  pop[0].classList.remove("bottom");
  document.body.classList.remove("modal-open");

})

// deuxième slider 

btn[1].addEventListener("click", () => {
  console.log(5);
  pop[1].classList.add("bottom");
  document.body.classList.add("modal-open");
});


// là je vais m'occuper de la sortie du texte back 
// const backBtn=document.querySelector(".btnQuit span img");
// const back=document.querySelector(".btnQuit .back");

backBtn[1].addEventListener("mouseover", () => {
  console.log(5);
  back[1].classList.add("backLeft");
});
backBtn[1].addEventListener("mouseleave", () => {
  back[1].classList.remove("backLeft");
});

backBtn[1].addEventListener("click",()=>{
  pop[1].classList.remove("bottom");
  document.body.classList.remove("modal-open");

})


// 3ème slider

btn[2].addEventListener("click", () => {
  console.log(5);
  pop[2].classList.add("bottom");
  document.body.classList.add("modal-open");
});


// là je vais m'occuper de la sortie du texte back 
// const backBtn=document.querySelector(".btnQuit span img");
// const back=document.querySelector(".btnQuit .back");

backBtn[2].addEventListener("mouseover", () => {
  console.log(5);
  back[2].classList.add("backLeft");
});
backBtn[2].addEventListener("mouseleave", () => {
  back[2].classList.remove("backLeft");
});

backBtn[2].addEventListener("click",()=>{
  pop[2].classList.remove("bottom");
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




// là je vais m'occuper de l'affichage des formulaires 

const account=document.querySelector(".account");
const menuDeroulant=document.querySelector(".menuDeroulant");
const creation=document.querySelector(".creation");
const connexion=document.querySelector(".connexion");
const Formulaire=document.querySelector(".Formulaire");
const LogInForm=document.querySelector(".LogInForm");

account.addEventListener("click",()=>{
  menuDeroulant.classList.toggle("vanish");
  event.stopPropagation();


})


creation.addEventListener("click",()=>{
  Formulaire.classList.toggle("vanish");
  if(Formulaire.classList.contains("vanish")){
    document.body.classList.add("modal-open");
  }
  event.stopPropagation();

  
  
  
})


connexion.addEventListener("click",()=>{
  LogInForm.classList.toggle("vanish");
  if(LogInForm.classList.contains("vanish")){
    document.body.classList.add("modal-open");
  }
  event.stopPropagation();

  
  
  
})



document.addEventListener('click', function(event) {
  if (event.target.class !== 'menuDeroulant Formulaire') {
    if(menuDeroulant.classList.contains("vanish")){
      menuDeroulant.classList.remove("vanish");
    }
    if(Formulaire.classList.contains("vanish")){
      Formulaire.classList.remove("vanish");
      document.body.classList.remove("modal-open");
    }
    if(LogInForm.classList.contains("vanish")){
      LogInForm.classList.remove("vanish");
      document.body.classList.remove("modal-open");
    }

    // code à exécuter lorsque l'utilisateur clique sur un élément autre que celui à exclure
  }
});













