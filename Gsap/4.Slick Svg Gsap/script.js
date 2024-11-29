const initialPath = `M 10 100 Q 500 100 990 100`;  
const finalPath = `M 10 100 Q 500 100 990 100`;  

const container = document.querySelector(".container");


container.addEventListener("mousemove",(e) => {
    const initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`;  
    gsap.to("svg path",{
        attr:{
            d:initialPath,
            duration:0.2,
            ease:"power3.out"
        }
    })  
});
container.addEventListener("mouseleave",(e) => {  
    gsap.to("svg path",{
        attr:{
            d:finalPath,
            duration:1.5,
            ease:"elastic.out(1,0.2)"
        }
    })  
});
