let check = 0;

const proj1update = '<p class=body4one id=body4one style=transform:skewY(0deg);>1 details</p>';
const proj1orig = '<p class=body4one id=body4one style=transform:skewY(0deg);>Project 1</p>';
const proj2update = '<p class=body4one id=body4one style=transform:skewY(0deg);>2 details</p>';
const proj2orig = '<p class=body4one id=body4one style=transform:skewY(0deg);>Project 2</p>';
const proj3update = '<p class=body4one id=body4one style=transform:skewY(0deg);>asdasdf</p>';
const proj3orig = '<p class=body4one id=body4one style=transform:skewY(0deg);>Project 3</p>';

function scrollElement(id) {
    element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
    if(id != 'body'){
        check = 1;
        console.log(check)
    }
}

function changeText(){
    if(check == 1){
        document.getElementById('bodyleft').innerHTML='<div id=bodyleft2 class=bodyleft2>Thanks for visiting my corner of the galaxy.</div>'
        console.log('yes')
        check = 2;
    }
}

function expand(id){
    
    growelement = document.getElementById(id);
    if(id == 'body4one'){
        shrinkelement1 = document.getElementById('body4two');
        shrinkelement2 = document.getElementById('body4three');
        growelement.innerHTML =proj1update;

    }
    if(id == 'body4two'){
        shrinkelement1 = document.getElementById('body4one')
        shrinkelement2 = document.getElementById('body4three');
        growelement.innerHTML =proj2update;
    }
        
    if(id == 'body4three'){
        shrinkelement1 = document.getElementById('body4one');
        shrinkelement2 = document.getElementById('body4two');
        growelement.innerHTML = proj3update;
    }

    growelement.style.width = '200vw';


}



function shrink(id){
    growelement = document.getElementById(id);
    if(id == 'body4one'){
        shrinkelement1 = document.getElementById('body4two');
        shrinkelement2 = document.getElementById('body4three');
        growelement.innerHTML=proj1orig;

    }
    if(id == 'body4two'){
        shrinkelement1 = document.getElementById('body4one')
        shrinkelement2 = document.getElementById('body4three');
        growelement.innerHTML=proj2orig;
    }
        
    if(id == 'body4three'){
        shrinkelement1 = document.getElementById('body4one');
        shrinkelement2 = document.getElementById('body4two');
        growelement.innerHTML=proj3orig;
    }



    growelement.style.width = '33vw';
    shrinkelement1.style.width = '33vw';
    shrinkelement2.style.width = '33vw';
    
}

