let Play = ""
const allowDrop = (e)=>{
    if(e.target.hasChildNodes()){
        let child = e.target.childNodes[0]
        child.draggable = false;
        child.addEventListener("dragover" , ()=>{
              e.preventDefault()
        })
    }
    else{
        e.preventDefault();
    }
}
const drag = (e)=>{
    let parent = e.target.parentElement.parentElement.classList.value
    let elementClass = e.target.classList.value;
    if (parent == "drag" && elementClass !== Play ){
        e.dataTransfer.setData("text" , e.target.id)
    }else if (elementClass === Play){
        e.dataTransfer.setData("text" , "don't drop")
        window.alert("it's another player turn")
    }
}   
const drop = (e)=>{
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    let parentClass = e.target.parentElement.classList.value
    if(parentClass === "board"){
        e.target.appendChild(document.getElementById(data));
            let childClassDrop = document.getElementById(data).classList.value;
            Play = childClassDrop
    }else{
        window.alert("already have an item try another ")
    }
}

let dragCross =document.querySelectorAll(".cross")
let dragCircle =document.querySelectorAll(".circle")
let dropBox = document.querySelectorAll(".dropBox")
dragCross.forEach(cross=>{
    cross.addEventListener("dragstart" , drag)
})
dragCircle.forEach(circle=>{
    circle.addEventListener("dragstart" , drag)
})
dropBox.forEach((Box)=>{
    Box.addEventListener("drop" , drop)
    Box.addEventListener("dragover" , allowDrop)
})

 
  
let btn = document.querySelector(".reset")
btn.addEventListener("click" , (e)=>{
    location.reload()
})