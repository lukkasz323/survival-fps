export class Input {
    canvas;
    screenOrigin;
    //worldOrigin: Vector2;
    keyW = false;
    keyS = false;
    keyA = false;
    keyD = false;
    showFPS = false;
    constructor(canvas) {
        this.canvas = canvas;
        console.log(this);
    }
    addEventListeners() {
        this.canvas.addEventListener("mousemove", (event) => this.#onMouseMove(event));
        this.canvas.addEventListener("mousedown", (event) => this.#onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event) => this.#onMouseUp(event));
        document.addEventListener("keydown", (event) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event) => this.#onKeyUp(event));
    }
    #onMouseMove(event) {
        const canvasBoundingClientRect = this.canvas.getBoundingClientRect();
        this.screenOrigin = {
            x: Math.floor(event.x - canvasBoundingClientRect.x + 1),
            y: event.y - Math.floor(canvasBoundingClientRect.y)
        };
        //this.worldOrigin = {x: this.screenOrigin.x + this.scene.camera.origin.x, y: this.screenOrigin.y + this.scene.camera.origin.y};
    }
    #onMouseDown(e) {
    }
    #onMouseUp(e) {
    }
    #onKeyDown(e) {
        switch (e.code) {
            case "KeyW":
                this.keyW = true;
                break;
            case "KeyS":
                this.keyS = true;
                break;
            case "KeyA":
                this.keyA = true;
                break;
            case "KeyD":
                this.keyD = true;
                break;
            case "Backquote":
                this.showFPS = !this.showFPS;
                break;
        }
    }
    #onKeyUp(e) {
        switch (e.code) {
            case "KeyW":
                this.keyW = false;
                break;
            case "KeyS":
                this.keyS = false;
                break;
            case "KeyA":
                this.keyA = false;
                break;
            case "KeyD":
                this.keyD = false;
                break;
        }
    }
}
