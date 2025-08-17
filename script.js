let dice=[ 0, 0, 0, 0, 0];
let figura=[ 0, 0, 0, 0, 0];
const obrazKostki = [null, "icons/1.png", "icons/2.png", "icons/3.png", "icons/4.png", "icons/5.png", "icons/6.png"]
let czyMoznaRzucac = true;
let wynik = 0;
let punkty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let tura = 0;
let kostki = [0, 0, 0, 0, 0, 0];
const stanKostki = true;
let szansa = 0;
function rzutKostkaLosowo(){ 
    return Math.floor(Math.random() * 6) + 1;
}

function rzutKoscmi(){
    for(let i = 0; i< 5; i++){
       
if(dice[i] !== "hold"){
    wynikKostki = rzutKostkaLosowo();
    dice[i] = wynikKostki
    figura[i] = wynikKostki
    const img = document.getElementById([i]);
    img.src = obrazKostki[wynikKostki];
    zliczanieKosci();
    znajdzFigury();
    przypisywanieWynikow()
    kostki = [0, 0, 0, 0, 0, 0];
}
    }
tura++;


if(tura > 3){
        tura = 0;
        dice=[ 0, 0, 0, 0, 0];
        figura=[ 0, 0, 0, 0, 0];
        document.querySelectorAll('.dice-box.selected')
        .forEach(b => b.classList.remove('selected'));
        kostki = [0, 0, 0, 0, 0, 0];
        return;
    }
      
console.log(dice);
console.log(tura);
console.log(figura);
console.log(`kostki ${kostki}`);
console.log(`punkty ${punkty}`);

}

function hold0(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[0] = "hold";
            console.log(" hold0");
            console.log(dice);
        }else{
            dice[0] = figura[0];
        }    
}}

function hold1(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[1] = "hold";
            console.log("klik hold1");
            console.log(dice);
        }else{
            dice[1] = figura[1];
        }    
}}

function hold2(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[2] = "hold";
            console.log("klik hold2");
            console.log(dice);
        }else{
            dice[2] = figura[2];
        }    
}}

function hold3(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[3] = "hold";
            console.log("klik hold3");
            console.log(dice);
        }else{
            dice[3] = figura[3];
        }    
}}

function hold4(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[4] = "hold";
            console.log("klik hold4");
            console.log(dice);
        }else{
            dice[4] = figura[4];
        }
         
}}
function zliczanieKosci(){
   for(let i = 0; i < 5; i++){
    if(figura[i] === 1){
        kostki[0] += 1; 
    }    
    if(figura[i] === 2){
        kostki[1] += 1; 
    }    
    if(figura[i] === 3){
        kostki[2] += 1; 
    }    
    if(figura[i] === 4){
        kostki[3] += 1; 
    }    
    if(figura[i] === 5){
        kostki[4] += 1; 
    }    
    if(figura[i] === 6){
        kostki[5] += 1; 
    }      
   }
   
}
function znajdzFigury(){
    if(kostki[0] !== 0){
      punkty[0] = kostki[0] * 1;  
    }
    if(kostki[1] !== 0){
      punkty[1] = kostki[1] * 2;  
    }
    if(kostki[2] !== 0){
      punkty[2] = kostki[2] * 3;  
    }
    if(kostki[3] !== 0){
      punkty[3] = kostki[3] * 4;  
    }
    if(kostki[4] !== 0){
      punkty[4] = kostki[4] * 5;  
    }
    if(kostki[5] !== 0){
      punkty[5] = kostki[5] * 6;  
    }
    
    
    for( let i = 0; i < 6; i++){
        if(kostki[i] >= 3){
            punkty[6] = ((i+1) * 10);
            console.log(`Trójka ${i + 1}`);
            for( let j = 0; j < 6; j++){
                if(kostki[j] === 2&& kostki[j] != kostki[i]){
                    punkty[8] = ((i + j) * 8);
                    console.log(`Full ${i+1} i ${j+1}`);
                }
            }
        }
    if(kostki[0] === 1 && kostki[1] === 1 && kostki[2] === 1 && kostki[3] === 1){
        punkty[9] = 75;
        console.log("Mały strit");
    }
    if(kostki[4] === 1 && kostki[1] === 1 && kostki[2] === 1 && kostki[3] === 1){
        punkty[9] = 75;
        console.log("Mały strit");
    }
     if(kostki[0] === 1 && kostki[1] === 1 && kostki[2] === 1 && kostki[3] === 1 && kostki[4] === 1){
        punkty[10] = 95;
        console.log("Duży  strit");
    }
        if(kostki[i] >= 4){
            punkty[7] = ((i+1) * 15);
            console.log(`Czwórka ${i + 1}`);
        }
        if(kostki[i] === 5){
            punkty[11] = ((i+10)*10);
            console.log("Generał");
        } 
    } 
    
    
}

function przypisywanieWynikow(){
    document.getElementById("jedynki").textContent = punkty[0];
    document.getElementById("dwojki").textContent = punkty[1];
    document.getElementById("trojki").textContent = punkty[2];
    document.getElementById("czworki").textContent = punkty[3];
    document.getElementById("piatki").textContent = punkty[4];
    document.getElementById("szostki").textContent = punkty[5];
    document.getElementById("trzyTeSame").textContent = punkty[6];
    document.getElementById("czteryTeSame").textContent = punkty[7];
    document.getElementById("full").textContent = punkty[8];
    document.getElementById("malyStrit").textContent = punkty[9];
    document.getElementById("duzyStrit").textContent = punkty[10];
    document.getElementById("general").textContent = punkty[11];
    document.getElementById("szansa").textContent = punkty[12];
    document.getElementById("sumaPkt").textContent = punkty[13];
 
}

