const b1 = document.querySelector(".b-1");
const color =document.querySelector(".color")
//const colors = ["#7B68EE","#6A5ACD","#483D8B","#663399","#4B0082"];
const unreal = [
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"
]

b1.addEventListener("click",()=>{
let unrealColors = generateUnreal()//colors[getRandomColor()]
document.body.style.backgroundColor= unrealColors;
color.style.color = document.body.style.backgroundColor;
color.innerHTML =unrealColors;
});

function getRandomColor(){
    console.log(Math.floor(Math.random()*unreal.length))//colors.lenght
    return Math.floor(Math.random()*unreal.length);//colors.lenght
    
}
function generateUnreal(){
    let unrealColors="#"
    for (let i=0; i<6;i++){
        unrealColors += unreal[getRandomColor()]
    }
    console.log(unrealColors)
    return unrealColors
}
