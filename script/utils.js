function isMobile(){
    // Check if the user is usign a mobile device. https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    let isMobile;

    // First method working on all devices.
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    isMobile = toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });


    // Seconde method. Not compatible with all devices. 
    // Especially problematic for Iphone using Safari and WebView Android when the site opens up there.
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData
    
    // isMobile = navigator.userAgentData.mobile;

    return isMobile;
}

function addRandomness(value, portion=0.1){
    const valPortion = value * portion;
    const portionToRemove = valPortion / 2;

    return value - portionToRemove + valPortion * Math.random();
}


class Chain{
    constructor(){
        this.next = null;
        this.previous = null;
    }

    setPrevious(previous, toSet = true){
        this.removePrevious();
        this.previous = previous;
        if(toSet){
            this.previous.setNext(this, false);
        }
    }

    setNext(next, toSet = true){
        this.next = next;
        if(toSet){
            this.next.setPrevious(this, false);
        }
    }

    removeNext(toSet = true){
        if(toSet && this.next != null){
            this.next.removePrevious(false);
        }
        this.next = null;
    }

    removePrevious(toSet = true){
        if(toSet && this.previous != null){
            this.previous.removeNext(false);
        }
        this.previous = null;
    }
}

export { isMobile, Chain, addRandomness }