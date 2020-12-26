export default new class {
    constructor() {
        this.onscreen = undefined
        this.active = 0
        this.startPoint = {
            x: 0,
            y: 0
        }
        document.addEventListener('touchstart', this.startHandler)
        document.addEventListener('touchend', this.endHandler)
        document.addEventListener('touchmove', this.moveHandler)
    }
    startHandler(e) {
        let touchbar = document.querySelector('.touchbar')
        if(e.target == touchbar) {
            this.active = 1
            this.setStartPoint(e.touches[0])
        }
        
    }
    endHandler(e) {
        this.active = 0
    }
    moveHandler(e) {
        if(this.active) {
            console.log(e.touches[0]);
        }
    }
    setStartPoint({clientX, clientY}) {
        this.startPoint = {
            x: clientX,
            y: clientY
        }
    }
}