// Scrolling animations && Animations in general
const h1 =  document.querySelector("h1");

window.addEventListener("scroll",popout)

const header = document.querySelector("header");
const ul = document.querySelector("#nav-container");
 const covidques = document.querySelector(".covid_cope p:first-child");
        const covidBtn = document.querySelector(".covid-btn");
function popout(){
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const home = document.getElementById("home")
//    console.log(scrolled);
     if(scrolled >= 300 && scrolled < 618){
        if(window.innerWidth > 1176){
            document.querySelector("#intro img").style.animation = "fadeInRight 1.5s 1";
        }
     }
   
   if(scrolled >= 110 && scrolled < 618){
   }else{
        document.querySelector("h2").style.animation = "none";
   }
    
    if(scrolled >= 780 && scrolled < 1150){
covidBtn.style.animation = "bouncy 1s 0.5s 1";
   }else{
covidBtn.style.animation = "none";
    
   }
   
        
    
}

window.addEventListener("load",()=>{
h1.style.animation = "backInLeft 1s 1";
});















