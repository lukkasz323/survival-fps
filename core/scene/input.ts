import { Vector2 } from "../../utils/vector2";

export class Input {
    screenOrigin: Vector2;
    //worldOrigin: Vector2;

    keyW: boolean = false;
    keyS: boolean = false;
    keyA: boolean = false;
    keyD: boolean = false;

    showFPS: boolean = false;
    
    constructor(public canvas: HTMLCanvasElement) {
        console.log(this);
    }

    addEventListeners() {
        this.canvas.addEventListener("mousemove", (event: PointerEvent) => this.#onMouseMove(event));
        this.canvas.addEventListener("mousedown", (event: PointerEvent) => this.#onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event: PointerEvent) => this.#onMouseUp(event));
        document.addEventListener("keydown", (event: KeyboardEvent) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event: KeyboardEvent) => this.#onKeyUp(event));
    }

    #onMouseMove(event: PointerEvent): void {
        const canvasBoundingClientRect: DOMRect = this.canvas.getBoundingClientRect();

        this.screenOrigin = {
            x: Math.floor(event.x - canvasBoundingClientRect.x + 1),
            y: event.y - Math.floor(canvasBoundingClientRect.y)
        };

        //this.worldOrigin = {x: this.screenOrigin.x + this.scene.camera.origin.x, y: this.screenOrigin.y + this.scene.camera.origin.y};
    }

    #onMouseDown(e: PointerEvent) {
    }

    #onMouseUp(e: PointerEvent) {
    }

    #onKeyDown(e: KeyboardEvent) {
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

    #onKeyUp(e: KeyboardEvent) {
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