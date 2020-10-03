function addHTML() {
    const elems = document.querySelectorAll("*");
    elems.forEach(elem=>{
        const html = elem.getAttribute("add-html");
        if(html){
            async function renderHTML(){
                const data = await fetch(html);
                const txt = await data.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(txt,"text/html");
                elem.innerHTML = doc.querySelector("body").innerHTML;
            }
            renderHTML()
        }

  })
}
  addHTML()