const colors=[
    'crimson',
    'deeppink',
    'gold',
    'Lightgrey',
    'pink',
    'orange',
    'indigo'
];
colors.forEach(color=>{
    const button=document.createElement('button');
    document.querySelector('div.colors').appendChild(button);
    button.onclick=()=>{
    setColor(color);}
    button.setAttribute('data-color',color);
    button.style.backgroundColor=color;
})

document.body.onload=function(){
    var num=Math.floor(Math.random()*colors.length);
    var color=colors[num];
    setColor(color);
   
}

function setColor(color){
    document.body.style.backgroundColor=color;
    document.querySelector('#current-color').innerHTML=color;
    


    const currentActiveButton=document.querySelector('button.active');
    if (currentActiveButton!==null){
        currentActiveButton.classList.remove('active');
    }
    document.querySelector(`button[data-color=${color}]`).classList.add('active');
}