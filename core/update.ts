import { Direction } from "./scene/direction.js";
import { Input } from "./scene/input.js";
import { Item } from "./scene/item.js";
import { Scene } from "./scene/scene.js";

export function updateGame(scene: Scene, input: Input, deltaTime: number) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.calculateAverage());
    }

    scene.items.push(Item.Generate());

    // Keyboard
    if (scene.ticks % 2 == 0) {
        if (input.keyW || input.keyS || input.keyA || input.keyD) {
            if (input.keyW && !input.keyS) scene.player.entity.tryDirection(Direction.North);
            else if (input.keyS && !input.keyW) scene.player.entity.tryDirection(Direction.South);
            else if (input.keyA && !input.keyD) scene.player.entity.tryDirection(Direction.West);
            else if (input.keyD && !input.keyA) scene.player.entity.tryDirection(Direction.East);
        }
    }

    scene.ticks++;
}