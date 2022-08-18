import { updateGyroOffset } from "./gyroControls.js";


function loadingScreenSetup(){
    
    const startButton = document.getElementById("loading-screen-text-start");
    const startButtonContainer = document.getElementById("loading-screen-text-start-container");
    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(()=>{
        startButton.style.opacity = "0.8";

        const startButtonAnimationTimeout = setTimeout(()=>{
            startButton.classList.add("start-button-animation");

        }, 2000)

        setTimeout(()=>{
            startButton.style.cursor = "pointer";

            loadingScreen.onclick = () => {
                clearTimeout(startButtonAnimationTimeout);
                let currentOpacity = getComputedStyle(startButton).opacity;
                startButton.style.opacity = currentOpacity;

                startButton.classList.remove("start-button-animation");

                startButtonContainer.style.opacity = 0;
            
                // Loading screen animation
                document.getElementById("loading-screen-break-strip__top").style.height = "100%";
                document.getElementById("loading-screen-break-strip__bottom").style.height = "100%";
                
                setTimeout(()=>{
                    updateGyroOffset()

                    document.getElementById("loading-screen-left-panel").style.left = "-100%";
                    document.getElementById("loading-screen-right-panel").style.left = "calc(100% + 5px)";
                    document.getElementById("loading-screen-text").style.bottom = "150%";
                    loadingScreen.style.pointerEvents = "none";
                    
                }, 1000)
            }
        }, 300);
    }, 700);
}

export { loadingScreenSetup }