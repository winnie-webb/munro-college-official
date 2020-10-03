function toggleMenuBar(burger,navbar){
    let clicks = 1;
    burger.onclick = ()=>{
        if(clicks === 1){
    navbar.style.opacity = "1";
    navbar.style.height = "auto";
    navbar.style.display = "flex";
    clicks++
        }else if(clicks === 2){
     navbar.style.display = "none";
    navbar.style.opacity = "0";
    navbar.style.height = "0";
    clicks = 1;
        }
    }
}
window.addEventListener("load",()=>{
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector("#nav-container");
    if(burger && navbar !== null)toggleMenuBar(burger,navbar);
    else {
location.reload();
    }
});
