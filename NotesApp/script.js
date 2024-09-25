const btn = document.querySelector(".addtxt");
const container = document.querySelector(".container");

function UpdataStorage(){
    localStorage.setItem("notes", container.innerHTML)
}
function SetStorage(){
    container.innerHTML = localStorage.getItem("notes")
}
SetStorage()
btn.addEventListener("click", ()=>{
    let div = document.createElement("div")
    div.setAttribute("class", "notes");
    const p = document.createElement("p");
    p.setAttribute("class", "note");
    p.setAttribute("contenteditable", "true");
    //p.setAttribute("rows", "6")
    const delbtn = document.createElement("button");
         delbtn.setAttribute("id", "delBtn");
         delbtn.innerText = "Delete";
    container.appendChild(div).appendChild(delbtn);
    div.appendChild(p);
    UpdataStorage()
    
})

container.addEventListener("click", (e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === "BUTTON"){
        e.target.parentNode.remove();
        UpdataStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".note");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                UpdataStorage();
            }
        });
    }
})