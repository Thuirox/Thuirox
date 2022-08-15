import { debugAnimation } from "./const.js";

class AnimationController{

    constructor(){
        this.animations = [];
    }

    add(animation){
        if(typeof animation.startTime === "undefined"){
            console.log("! animation added to controller but not initialized");
        }
        this.animations.push(animation);
    }

    update(){
        let currentTime = Date.now();

        this.animations.forEach((animation) => {
            let timeDifference = currentTime - animation.startTime;

            if(timeDifference > animation.duration){
                animation.animationEnd(timeDifference);
            } else {
                animation.update(timeDifference);
            }

        });

        this.animations = this.animations.filter((animation) => {
            return !animation.ended;
        });
    }

}

const animationController = new AnimationController();

class Animation{

    constructor(start, end, duration, update_fct, end_fct, args){
        if(debugAnimation) console.log("new animation created");
        this.start = start;
        this.end = end;

        this.duration = duration;

        this.update_fct = update_fct;

        this.end_fct = end_fct;
        if(typeof this.end_fct === "undefined"){
            if(debugAnimation) console.log("end fct is undefined");
        }

        this.ended = false;

        this.args = args;

        this.isLooping = false;
    }

    animationStop(){
        this.ended = true;
    }

    setIsLooping(isLooping){
        this.isLooping = isLooping;
    }

    setParams(start, end, args){
        this.setStart(start);
        this.setEnd(end);
        this.setArgs(args);
    }

    setStart(start){
        this.start = start;
    }

    setEnd(end){
        this.end = end;
    }

    setArgs(args){
        this.args = args;
    }

    init(toAdd=true){
        this.startTime = Date.now();
        this.ended = false;
        if(toAdd){
            animationController.add(this);
        }
    }

    animationEnd(timeDifference){
        this.ended = true;
        if(typeof this.end_fct !== "undefined"){
            this.end_fct(this);
        } else {
            this.update(timeDifference);
        }

        if(this.isLooping){
            this.init(false);
        }
    }

    update(timeDifference){
        let ratio = timeDifference / this.duration;
        this.update_fct(ratio, this);
    }


}

class DifferedAnimation extends Animation{
    constructor(nextAnimation, differedDuration){
        super(null, null, differedDuration, 
            () => {}, 
            () => {
                nextAnimation.init();
                animationController.add(nextAnimation);
            }
        );
    }
}

let cameraAnimation = new Animation(0, 0,
    1000, 
    (ratio, animation) => {
        
        let position = {
            x: animation.start.x + (animation.end.x - animation.start.x) * ratio,
            y: animation.start.y + (animation.end.y - animation.start.y) * ratio,
            z: animation.start.z + (animation.end.z - animation.start.z) * ratio
        };
        animation.args.camera.position.set(position.x + animation.args.diff, position.y, position.z);
    }, 
    (animation) => {
        console.log("cam anim end");
        let position = animation.end;
        animation.args.camera.position.set(position.x + animation.args.diff, position.y, position.z);

    }, { 
        camera: null,
        diff: null
});

export { animationController, Animation, cameraAnimation, DifferedAnimation }