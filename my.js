let arrfoto = [1,2,3,4,5,6,7,8,8,8,8,8]
let arrtext = ["Տնօրեն","Փոխտնորեն","Քարտուղար","Մենեջեր","Ինժիներ","Հաշվապահ",
" Տեստավորող","Օպերատոր"]
let arrfoto_lenght=arrfoto.length
let secret_foto = 0
while (arrfoto_lenght>8) {
  arrfoto_lenght=arrfoto_lenght-1
  secret_foto ++
}


const left = document.getElementById("leftdiv");

  

for (let i = 0; i < 8; i++) {
left.innerHTML += `<div class="profil" >
<img class="foto" src="img/${arrfoto[i]}.jpg" >
<p class="p_position" >${arrtext[i]}</p>
</div>`;
}

if (secret_foto>0) {
  

  left.innerHTML += `
  <div class="divaddfoto" > 
  
  <i  class="fa fa-chevron-circle-down" style="font-size:35px;color:red;margin: 5px; "></i>
   <H1>${secret_foto}</H1> </div>`
  
  }

 let arrname = ["Արամ Պողոսյան",8, "Հրայր Դավթյան","Արմեն Մինասյան","Հայկ Բեգլարյան" ]  
 let arrnaem_lenght =arrname.length
 let secret_question=0


 while (arrnaem_lenght>4) {
  arrnaem_lenght=arrnaem_lenght-1
  secret_question++
 }


 const waiting1 = document.getElementById("maindiv");
for (let i = 0; i < arrnaem_lenght; i++) {
    
    waiting1.innerHTML +=` <div class="waiting" >
    <div class="time" > <p>8:30</p> <p>9:00</p> </div>
    <p class="waiting_p" > հարց N1 - զեկուցող ${arrname[i]}</p>
    <p class="waiting_p" > Ընդունված է</p>
    <p class="waiting_p" >    «ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ԴՐԱՄԱՆԻՇԵՐԻ ՎՃԱՐՈՒՆԱԿՈՒԹՅԱՆ,
       ՀՆԱՄԱՇՈՒԹՅԱՆ ՀԱՏԿԱՆԻՇՆԵՐԸ: ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՏԱՐԱԾՔՈՒՄ ԳՈՐԾՈՂ  ԲԱՆԿԵՐՈՒՄ 
        ԿԱՆԽԻԿ ԴՐԱՄՈՎ ԿԱՏԱՐՎՈՂ ԳՈՐԾԱՌՆՈՒԹՅՈՒՆՆԵՐԸ» ԿԱՆՈՆԱԿԱՐԳ 9-Ը ՀԱՍՏԱՏԵԼՈՒ ՄԱՍԻՆ</p>
  </div> `


}
if (secret_question>0) {
  

waiting1.innerHTML += `
<div class="divadd" > 

<i  class="fa fa-chevron-circle-down" style="font-size:35px;color:red;margin: 5px; "></i>
 <H1>${secret_question}</H1> </div>`

}

