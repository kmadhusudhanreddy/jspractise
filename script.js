var rec  = document.querySelector("#center");
 rec.addEventListener("mousemove" , function(details){
     var location = rec.getBoundingClientRect();
     var insideLoc = details.clientX - location.left ;
    
     if(insideLoc<location.width/2){
       let redColor = gsap.utils.mapRange(0,location.width/2,255,0,insideLoc);
       gsap.to(rec ,{
        backgroundColor: `rgb(${redColor} , 0 , 0)`,
        ease:Power4,
       })
     }
     else{
        let blueColor = gsap.utils.mapRange(location.width/2,location.width,0,255,insideLoc);
       gsap.to(rec ,{
        backgroundColor: `rgb(0 , 0 , ${blueColor})`,
        ease:Power4,
       })
     }
 });

 rec.addEventListener("mouseleave",function(){
   gsap.to(rec , {
    backgroundColor:"white",
   })
 })