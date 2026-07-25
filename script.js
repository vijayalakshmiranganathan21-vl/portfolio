/*==================================================
PRELOADER
==================================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("preloader");

    setTimeout(()=>{

        loader.style.display="none";

    },1000);

});


/*==================================================
TYPING EFFECT
==================================================*/

const typing=document.getElementById("typing");

const words=[
    "UI/UX Designer",
    "Graphic Designer",
    "Frontend Developer"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;


function typeEffect(){

    let currentWord=words[wordIndex];


    if(!deleting){

        typing.textContent=currentWord.substring(
            0,
            charIndex++
        );

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1000);

            return;

        }

    }

    else{

        typing.textContent=currentWord.substring(
            0,
            charIndex--
        );


        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }


    setTimeout(typeEffect,deleting?60:120);

}


typeEffect();



/*==================================================
CUSTOM CURSOR
==================================================*/


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";


});



const links=document.querySelectorAll("a,button");


links.forEach(link=>{


    link.addEventListener("mouseenter",()=>{

        cursor.style.transform="scale(2)";

    });


    link.addEventListener("mouseleave",()=>{

        cursor.style.transform="scale(1)";

    });


});



/*==================================================
SCROLL PROGRESS BAR
==================================================*/


window.addEventListener("scroll",()=>{


    let scrollTop=document.documentElement.scrollTop;

    let height=
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let progress=
    (scrollTop/height)*100;


    document.getElementById("progress-bar")
    .style.width=progress+"%";


});



/*==================================================
SCROLL REVEAL
==================================================*/


const revealElements=document.querySelectorAll(
".about-card,.stat-box,.timeline-content,.skill-card,.project-card,.edu-card,.certificate-card"
);



function reveal(){


    revealElements.forEach(element=>{


        let windowHeight=
        window.innerHeight;


        let elementTop=
        element.getBoundingClientRect().top;


        if(elementTop < windowHeight-100){

            element.style.opacity="1";

            element.style.transform="translateY(0)";

        }


    });


}


window.addEventListener(
"scroll",
reveal
);


reveal();



/*==================================================
SCROLL TO TOP
==================================================*/


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/*==================================================
MOBILE MENU
==================================================*/


const menuBtn=
document.querySelector(".menu-btn");


const nav=
document.querySelector("nav");



menuBtn.addEventListener("click",()=>{


    nav.classList.toggle("active");


});



/*==================================================
CLOSE MOBILE MENU
==================================================*/


document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});



/*==================================================
IMAGE 3D TILT EFFECT
==================================================*/


const imageBox=
document.querySelector(".image-box");



imageBox.addEventListener("mousemove",(e)=>{


    let x=
    (window.innerWidth/2-e.clientX)/25;


    let y=
    (window.innerHeight/2-e.clientY)/25;


    imageBox.style.transform=
    `rotateY(${x}deg) rotateX(${y}deg)`;


});


imageBox.addEventListener("mouseleave",()=>{


    imageBox.style.transform="rotateY(0) rotateX(0)";


});



/*==================================================
ACTIVE NAVIGATION
==================================================*/


const sections=
document.querySelectorAll("section");


const navLinks=
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let sectionTop=
        section.offsetTop-200;


        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.style.color="white";


        if(link.getAttribute("href")
        ==
        "#"+current){

            link.style.color="#60a5fa";

        }


    });


}); 