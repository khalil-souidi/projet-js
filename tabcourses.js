
var el=document.getElementById('cnt');
function create(imag,titre,prix){

    let div=document.createElement('div'),
     img=document.createElement('img'),
     p=document.createElement('p'),
     span=document.createElement('span');

    img.src=imag;
    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));
  
    div.setAttribute('class', 'card cards');
    img.setAttribute('class','img');
    p.setAttribute('class', 'card_text');
    span.setAttribute('class', 'card_text');

    div.append(img);
    div.append(p);
    div.append(span);

el.append(div);

}
courses.forEach(e=>{
    create(e.image,e.title,e.price);
    
});


var pr=document.getElementById('pr');
function fct(){
document.getElementById('val').innerHTML=(pr.value)  ;
};

//filtrage

const sc =document.getElementById('sc');
const cards =document.querySelectorAll('.cards');

sc.addEventListener('keyup',(ev) => {
const lettre =ev.target.value;
cards.forEach((ev)=>{
    if(ev.textContent.indexOf(lettre)>=0) ev.style.display="block";
    else ev.style.display="none";
})
});

function fcall(){
    var i;
        for(i=0;i<courses.length;i++){
             cards[i].style.display="block";
        }
     };
function html(){
    var i;
        for(i=0;i<courses.length;i++){
            if(courses[i].category=="HTML") cards[i].style.display="block";
            else cards[i].style.display="none";
        }
     };

function css(){
        var i;
            for(i=0;i<courses.length;i++){
                if(courses[i].category=="CSS") cards[i].style.display="block";
                else cards[i].style.display="none";
            }
         };

function js(){
            var i;
                for(i=0;i<courses.length;i++){
                    if(courses[i].category=="JS") cards[i].style.display="block";
                    else cards[i].style.display="none";
                }
             };

function php(){
                var i;
                    for(i=0;i<courses.length;i++){
                        if(courses[i].category=="PHP") cards[i].style.display="block";
                        else cards[i].style.display="none";
                    }
                 };

 function valeur(){
                    var i;
                        for(i=0;i<courses.length;i++){
                            if(courses[i].price <= (pr.value)) cards[i].style.display="block";
                            else cards[i].style.display="none";
                        }
                     };



    