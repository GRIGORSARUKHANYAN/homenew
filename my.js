// import { fluentButton, provideFluentDesignSystem } from '@fluentui/web-components';

// const { fillColor } = require("@fluentui/web-components");

// provideFluentDesignSystem().register(fluentButton());

// import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';

// provideFluentDesignSystem().register(allComponents);

console.log("asa");
let arrfoto = [1,2,3,4,5,6,7,8]
let arrtext = ["Տնօրեն","Փոխտնորեն","Քարտուղար","Մենեջեր","Ինժիներ","Հաշվապահ",
" Տեստավորող"]
let arrfoto_lenght=arrfoto.length
let secret_foto = 0
while (arrfoto_lenght>7) {
  arrfoto_lenght=arrfoto_lenght-1
  secret_foto ++
}
const left = document.getElementById("leftdiv");
for (let i = 0; i < 7; i++) {
left.innerHTML += `<div class="profil  " >
<img class="foto  " src="img/${arrfoto[i]}.jpg" >
<p class="p_position ms-depth-16 ms-fontSize-14 " >${arrtext[i]}</p>
</div>`;
}

if (secret_foto>0) {
  left.innerHTML += `
  <div class="divaddfoto" > 
  <i class="ms-Icon ms-Icon--DoubleChevronDown12  " aria-hidden="true" style="font-size:35px;color:neutralTertiaryAlt;margin: 5px; "></i>
   <H1>${secret_foto}</H1> </div>`
  
  }

 let arrname = ["Արամ Պողոսյան",8, "Հրայր Դավթյան","Արմեն Մինասյան","Հայկ Բեգլարյան" ]  
 let arrnaem_lenght =arrname.length
 let secret_question=0


 while (arrnaem_lenght>3) {
  arrnaem_lenght=arrnaem_lenght-1
  secret_question++
 }


 const waiting1 = document.getElementById("maindiv");
for (let i = 0; i < arrnaem_lenght; i++) {
    
    waiting1.innerHTML +=`
    <div class="bigshablon ms-depth-16	 ">
      <div class="waiting" >
      <p class="waiting_p ms-fontSize-14 " > հարց N1 - զեկուցող ${arrname[i]}</p>
      <p class="waiting_p ms-fontSize-14 " > Ընդունված է</p>
      <p class="waiting_p ms-fontSize-12 " >    «ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԴՐԱՄԱՆԻՇԵՐԻ ՎՃԱՐՈՒՆԱԿՈՒԹՅԱՆ,
        ՀՆԱՄԱՇՈՒԹՅԱՆ ՀԱՏԿԱՆԻՇՆԵՐԸ: ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՏԱՐԱԾՔՈՒՄ ԳՈՐԾՈՂ  ԲԱՆԿԵՐՈՒՄ 
          ԿԱՆԽԻԿ ԴՐԱՄՈՎ ԿԱՏԱՐՎՈՂ ԳՈՐԾԱՌՆՈՒԹՅՈՒՆՆԵՐԸ» ԿԱՆՈՆԱԿԱՐԳ 9-Ը ՀԱՍՏԱՏԵԼՈՒ ՄԱՍԻՆ</p>
          <div class="time" > <p>8:30</p> <p>9:00</p> </div>
    </div>
    </div>`


}
if (secret_question>0) {
waiting1.innerHTML += `

<div class="divadd" id="divadd"  > 
<i class="ms-Icon ms-Icon--DoubleChevronDown12  " aria-hidden="true" style="font-size:35px;color:neutralTertiaryAlt;margin: 5px; "></i>
<span class="divadd_span" >${secret_question}</span> </div>
`

}
function addfoto() {
  
}
// porcarkum\
function addfoto() {
  waiting1.innerHTML += `
  <div class="add-fotoclick"   >
       <div class="profil" >
         <img class="foto" src="img/1.jpg" >
         <p class="p_position" >kochum</p>
       </div>
  </div>

  `
}
const addlist= document.getElementById("divadd");
addlist.addEventListener("click", addfoto, true);


