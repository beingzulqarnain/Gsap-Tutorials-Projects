
let tl = gsap.timeline();

tl.from("h2",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.2
})
tl.from("li",{
    opacity:0,
    y:-20,
    stagger:0.3
    
})