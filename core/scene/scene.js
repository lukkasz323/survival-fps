import { FPSCounter } from "../../utils/fpsCounter.js";
import { Entity } from "./entity.js";
import { Player } from "./player.js";
export class Scene {
    gridSize = 32;
    fpsCounter = new FPSCounter();
    ticks = 0;
    items = [];
    player = new Player();
    enemies = [];
    constructor() {
        this.player = new Player({ x: 1, y: 1 });
        this.enemies.push(new Entity({ x: 3, y: 4 }));
        this.enemies.push(new Entity({ x: 12, y: 9 }));
        console.log(this);
    }
    checkGrid() {
    }
}
