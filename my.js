// import { fluentButton, provideFluentDesignSystem } from '@fluentui/web-components';

// const { fillColor } = require("@fluentui/web-components");

// provideFluentDesignSystem().register(fluentButton());

// import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';

// provideFluentDesignSystem().register(allComponents);


$('.carousel').carousel({
  interval: 30000
})


let arrfoto = [1,2,3,4,5,6,7,8,9,10,11]
let arrtext = ["Տնօրեն","Փոխտնորեն","Քարտուղար","Մենեջեր","Ինժիներ","Հաշվապահ",
" Տեստավորող"]
let arrzekucox = [1,2,3,4,5]
let arrfoto_lenght=arrfoto.length
let secret_foto = 0
const left = document.getElementById("leftdiv");
let arrname = ["Արամ Պողոսյան",8, "Հրայր Դավթյան","Արմեն Մինասյան","Հայկ Բեգլարյան" ]  
 let arrnaem_lenght =arrname.length
 let secret_question=0
 const waiting1 = document.getElementById("maindiv");
 const addaprofilbig = document.getElementById("addaprofilbig");
 const delprofil= document.getElementById("delprofil");
 const addtextbig = document.getElementById("addtextbig");
 const deltext = document.getElementById("deltext");
 const divadd= document.getElementById("divadd");
 const addlist= document.getElementById("divaddfoto");
 const  addsecret= document.getElementById("addsecret");





 function addprofil() {
   while (arrfoto_lenght>7) {
   arrfoto_lenght=arrfoto_lenght-1
   secret_foto ++
   }
 const carusel1 = document.getElementById("carusel1");
 const carusel2 = document.getElementById("carusel2");


if (secret_foto==0) {
  

 for (let i = 0; i < 7; i++) {
  carusel1.innerHTML += `<div class="profil  " >
  <img class="foto  "src="img/${arrfoto[i]}.jpg" >
  <p class="p_position ms-depth-16 ms-fontSize-14 " >${arrtext[i]}</p>
  </div>`;
  }
}else
if (secret_foto>0) {


  
 for (let i = 0; i < 7; i++) {
  carusel1.innerHTML += `<div class="profil  " >
  <img class="foto  "src="img/${arrfoto[i]}.jpg" >
  <p class="p_position ms-depth-16 ms-fontSize-14 " >${arrtext[i]}</p>
  </div>`;
  }
  let l=7-secret_foto+1
  for (let i = 0; i < 7; i++) {
    carusel2.innerHTML += `<div class="profil  " >
    <img class="foto  "src="img/${arrfoto[i+l]}.jpg" >
    <p class="p_position ms-depth-16 ms-fontSize-14 " >${arrtext[i+l]}</p>
    </div>`;
    }
  //   addlist.innerHTML += `
  
  //  <H1>${secret_foto}</H1> </div>`
}
 }
 addprofil();




 const carusel5 = document.getElementById("carusel5");
 const carusel6 = document.getElementById("carusel6");

   

function addquestion() {
  while (arrnaem_lenght>3) {
  arrnaem_lenght=arrnaem_lenght-1
  secret_question++
  }
 let clasv=1
  for (let i = 0; i < arrnaem_lenght; i++) {
    
    carusel5.innerHTML +=`
    <div class="bigshablon${i} ms-depth-16" id="bigshablon${i}" >
      <div class="waiting" >
      <p class="  ms-fontSize-14 "   > հարց N${arrzekucox[i]} - զեկուցող ${arrname[i]}</p>
      <p class="  ms-fontSize-14 "  > Ընդունված է</p>
      <p class="  ms-fontSize-12 "  >    «ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԴՐԱՄԱՆԻՇԵՐԻ ՎՃԱՐՈՒՆԱԿՈՒԹՅԱՆ,
        ՀՆԱՄԱՇՈՒԹՅԱՆ ՀԱՏԿԱՆԻՇՆԵՐԸ: ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՏԱՐԱԾՔՈՒՄ ԳՈՐԾՈՂ  ԲԱՆԿԵՐՈՒՄ 
          ԿԱՆԽԻԿ ԴՐԱՄՈՎ ԿԱՏԱՐՎՈՂ ԳՈՐԾԱՌՆՈՒԹՅՈՒՆՆԵՐԸ» ԿԱՆՈՆԱԿԱՐԳ 9-Ը ՀԱՍՏԱՏԵԼՈՒ ՄԱՍԻՆ</p>
          <div class="time" > <p>8:30</p> <p>9:00</p> </div>
    </div>
    </div>`
    }


  function active1() {



    
  let bigshablon0=document.getElementById("bigshablon0");
  bigshablon0.setAttribute("class", "bigshablon1");
  let bigshablon1=document.getElementById("bigshablon1");
  bigshablon1.setAttribute("class", "bigshablon0");
}
setTimeout(active1,2* 2000);
function active2() {
  let bigshablon0=document.getElementById("bigshablon1");
  bigshablon0.setAttribute("class", "bigshablon1");
  let bigshablon1=document.getElementById("bigshablon2");
  bigshablon1.setAttribute("class", "bigshablon0");
 }
 setTimeout(active2,2* 3000);
 function active3() {
  let bigshablon0=document.getElementById("bigshablon2");
  bigshablon0.setAttribute("class", "bigshablon1");
  let bigshablon1=document.getElementById("bigshablon3");
  bigshablon1.setAttribute("class", "bigshablon0");
 }
 setTimeout(active3, 4000);

 function active4() {
  let bigshablon0=document.getElementById("bigshablon3");
  bigshablon0.setAttribute("class", "bigshablon1");
  let bigshablon1=document.getElementById("bigshablon4");
  bigshablon1.setAttribute("class", "bigshablon0");
 }
 setTimeout(active4, 5000);







   if(secret_question>0  ){
    let s=3-secret_question+1
  
  for (let i = 0; i < 3; i++) {
  
    carusel6.innerHTML += `
    <div class=" bigshablon${i+2} ms-depth-16	 " id="bigshablon${i+2}" >
      <div class="waiting" >
      <p class=" ms-fontSize-14 "   > հարց N${arrzekucox[i]+s} - զեկուցող ${arrname[i]+s}</p>
      <p class=" ms-fontSize-14 "  > Ընդունված է</p>
      <p class=" ms-fontSize-12 "   >    «ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԴՐԱՄԱՆԻՇԵՐԻ ՎՃԱՐՈՒՆԱԿՈՒԹՅԱՆ,
        ՀՆԱՄԱՇՈՒԹՅԱՆ ՀԱՏԿԱՆԻՇՆԵՐԸ: ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՏԱՐԱԾՔՈՒՄ ԳՈՐԾՈՂ  ԲԱՆԿԵՐՈՒՄ 
          ԿԱՆԽԻԿ ԴՐԱՄՈՎ ԿԱՏԱՐՎՈՂ ԳՈՐԾԱՌՆՈՒԹՅՈՒՆՆԵՐԸ» ԿԱՆՈՆԱԿԱՐԳ 9-Ը ՀԱՍՏԱՏԵԼՈՒ ՄԱՍԻՆ</p>
          <div class="time" > <p>8:30</p> <p>9:00</p> </div>
    </div>
    </div>`;
 


//  const  bigshablon= document.getElementById("bigshablon");

//    bigshablon.style.backgroundColor="red"

    

  }

  // addsecret.innerHTML += `
  // <h1  >${secret_question}</h1> `  

  

}



}
addquestion()


function addfoto() {
  addaprofilbig.style.display="flex"
}




function delprof() {
  addaprofilbig.style.display="none"
}
addaprofilbig.addEventListener("click", delprof, true)




// // // porcarkum\


