$(document).ready(function(){

    // init controller
    var controller = new ScrollMagic.Controller();
        

    // pin ProjectImage
    var pinProjectImage = new ScrollMagic.Scene({
        triggerElement: "", 
        triggerHook: 0, 
        

    })
    .setPin("#header")
    .addTo(controller)



    // create a scene
    var ourScence = new ScrollMagic.Scene({
        triggerElement: "sectiontitle",
        
        triggerHook: 0.7

           
        
   
    })
    .setClassToggle("#resume", "fade-in") //add class to ProjectDescription
    .addIndicators()
    .addTo(controller); // assign the scene to the controller
});