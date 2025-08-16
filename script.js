let dice=[ 0, 0, 0, 0, 0];
let figura=[ 0, 0, 0, 0, 0];
const obrazKostki = [null, "icons/1.png", "icons/2.png", "icons/3.png", "icons/4.png", "icons/5.png", "icons/6.png"]
let czyMoznaRzucac = true;
let wynik = 0;
let tura = 0;
const stanKostki = true;
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
 
}
    }
tura++;
if(tura>3){
        tura = 1;
        dice=[ 0, 0, 0, 0, 0];
        figura=[ 0, 0, 0, 0, 0];
        document.querySelectorAll('.dice-box.selected')
        .forEach(b => b.classList.remove('selected'));
       ;

    }
console.log(dice);
console.log(tura);
console.log(figura);

}

function hold0(el){
    if(tura < 3 && tura !== 0){
        const stanKostki = el.classList.toggle(`selected`);
        if(stanKostki && tura !==0) {
            dice[0] = "hold";
            console.log("klik");
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
            console.log("klik");
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
            console.log("klik");
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
            console.log("klik");
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
            console.log("klik");
            console.log(dice);
        }else{
            dice[4] = figura[4];
        }    
}}
/*function znajdowanieFigur(){
   for(let i = 0; i < 5; i++){
    figura[i] = 
   }
}*/
