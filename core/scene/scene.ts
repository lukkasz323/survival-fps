import { FPSCounter } from "../../utils/fpsCounter.js";
import { Direction } from "./direction.js";
import { Entity } from "./entity.js";
import { Item } from "./item.js";
import { Player } from "./player.js";

export class Scene {
    static DIAGONAL: number = 0.7071067811865475;

    gridSize: number = 32;
    fpsCounter = new FPSCounter();
    ticks: number = 0;
    items: Item[] = [];
    player = new Player();
    enemies: Entity[] = [];

    constructor() {
        this.player = new Player({x: 64, y: 64});
        this.enemies.push(new Entity({x: 256, y: 256}));
        this.enemies.push(new Entity({x: 192, y: 512}));

        console.log(this);
    }

    checkGrid() {

    }
}