// TimeLine IN GSAP 

let tl = gsap.timeline();

tl.to("#box1",{
    x:1240,
    backgroundColor:'green',
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:'50%'
    
});
tl.to("#box2",{
   x:1240,
   duration:1.5,
   scale:0.5,
});
tl.to("#box3",{
    x:1240,
    duration:1.5,
    scale:0.3,
 });

























// gsap.to("#box1",{
//      x:1240,
//      backgroundColor:'green',
//      duration:1.5,
//      delay:1,
//      rotate:360,
// });
// gsap.to("#box2",{
//     x:1240,
//     backgroundColor:'red',
//     duration:1.5,
//     delay:2.5,
//     rotate:260,
// });
// gsap.to("#box3",{
//     x:1240,
//     backgroundColor:'#ff34ee',
//     duration:1.5,
//     delay:4,
//     scale:0.5,
// });







// yoyoConcept 
// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
//     delay:1,
//     borderRadius:'50%',
//     backgroundColor:'blue'
    

// })




// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     delay:0.2,
//     stagger:-2,
//     yoyo:true,
//     y:30,

// })




// gsap.to("#box1",{
//     x:1120,
//     backgroundColor:"green",
//     duration:4,
//     borderRadius:"50%",
//     rotate:360, 
//     scale:0.5,

// });
// gsap.to("#box2",{
//     x:800,
//     // y:400,
//     backgroundColor:"red",
//     duration:10,
    
// });