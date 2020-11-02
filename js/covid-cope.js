const newsfeed = document.querySelector(".section-newsfeed");

const xhr = new XMLHttpRequest();
xhr.open("GET","https://cryptic-ravine-96718.herokuapp.com/",true);
window.addEventListener("load",getNews);
function getNews(){
xhr.onload = ()=>{
    const loader = document.querySelector(".loader");
    if(xhr.status >= 200 && xhr.status <= 308){
        const res = JSON.parse(xhr.responseText);
        loader.style.display = "none";
        for(let i = 0; i<(res.news.length - 80 );i++){
            const title = res.news[i].title;
            const link = res.news[i].link;
            createElements(title,link);
        }
    }
}
xhr.send();
}

function createElements(title,link){
    const headline = document.createElement("span");
    headline.className = "news-headline";
    headline.innerText = title;
    newsfeed.appendChild(headline);
    const readmore = document.createElement("a");
    readmore.className = "readmore";
    readmore.innerText = "Read More";
    readmore.target = "_blank";
    readmore.href = link;
    newsfeed.appendChild(readmore);
}
