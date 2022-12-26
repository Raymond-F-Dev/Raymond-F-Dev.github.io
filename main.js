let check = 0;

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


    }
    if(id == 'home2'){
        shrinkelement1 = document.getElementById('body4one')
        shrinkelement2 = document.getElementById('body4three');

    }
        
    if(id == 'home3'){
        shrinkelement1 = document.getElementById('body4one');
        shrinkelement2 = document.getElementById('body4two');

    }



    growelement.style.width = '200vw';

}


function shrink(id){
    growelement = document.getElementById(id);
    if(id == 'body4one'){
        shrinkelement1 = document.getElementById('body4two');
        shrinkelement2 = document.getElementById('body4three');


    }
    if(id == 'body4two'){
        shrinkelement1 = document.getElementById('body4one')
        shrinkelement2 = document.getElementById('body4three');

    }
        
    if(id == 'body4three'){
        shrinkelement1 = document.getElementById('body4one');
        shrinkelement2 = document.getElementById('body4two');

    }



    growelement.style.width = '33vw';
    shrinkelement1.style.width = '33vw';
    shrinkelement2.style.width = '33vw';
    
}

