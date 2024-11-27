import { FPSCounter } from "../../utils/fpsCounter.js";
import { Direction } from "./direction.js";
import { Entity } from "./entity.js";
import { Item } from "./item.js";
import { Player } from "./player.js";

export class Scene {
    gridSize: number = 32;
    fpsCounter = new FPSCounter();
    ticks: number = 0;
    items: Item[] = [];
    player = new Player();
    enemies: Entity[] = [];

    constructor() {
        this.player = new Player({x: 1, y: 1});
        this.enemies.push(new Entity({x: 3, y: 4}));
        this.enemies.push(new Entity({x: 12, y: 9}));

        console.log(this);
    }

    checkGrid() {

    }
}