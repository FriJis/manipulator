export default class {
    constructor(el) {
        this.onscreen = undefined
        this.onend = undefined
        this.active = 0
        this.startPoint = {
            x: 0,
            y: 0
        }
        this.el = el
        document.addEventListener('touchstart', e => this.startHandler(e), {passive: false})
        document.addEventListener('touchend', e => this.endHandler(e), {passive: false})
        document.addEventListener('touchmove', e => this.moveHandler(e), {passive: false})
    }
    startHandler(e) {
        e.preventDefault()
        if(e.target == this.el) {
            this.active = 1
            this.setStartPoint(e.touches[0])
        }
        
    }
    endHandler(e) {
        e.preventDefault()
        this.active = 0
        if(typeof this.onend == 'function') {
            this.onend(e)
        }
    }
    moveHandler(e) {
        e.preventDefault()
        if(this.active && typeof this.onscreen == 'function') {
            this.onscreen({
                deltaX: e.touches[0].clientX - this.startPoint.x,
                deltaY: e.touches[0].clientY - this.startPoint.y
            })
            this.setStartPoint(e.touches[0])
        }
    }
    setStartPoint({clientX, clientY}) {
        this.startPoint = {
            x: clientX,
            y: clientY
        }
    }
}