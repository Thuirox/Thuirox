
var move = false;
var domEvents;

window.addEventListener("mousedown", function(event){
    console.log("mouse down");
    move = false;
}, false);


window.addEventListener("mousemove", function(event){
    if(!move){
        console.log("mouse move");
        move = true;
    }
}, false);

function addInteraction(object, fct){
    domEvents.addEventListener(object, "mouseup", function(event){
        console.log("mouseup");
        if(!move){
            fct();
        }
    }, false);

    // Touchend not detected correctly. Using touchstart instead.
    domEvents.addEventListener(object, "touchstart", function(event){
        console.log("touchstart");
        fct();
    }, false);

}

function setupInteractions(domEvents_){
    domEvents = domEvents_;
}

export { addInteraction, setupInteractions }