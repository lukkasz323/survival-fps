import { Scene } from "./scene/scene.js";
export function updateGame(scene, input, deltaTime) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.calculateAverage());
    }
    // Keyboard
    const v = scene.player.entity.velocity;
    // Deceleration
    v.x = v.x / 1.2;
    v.y = v.y / 1.2;
    // Acceleration
    const keyCount = Number(input.keyW) + Number(input.keyS) + Number(input.keyA) + Number(input.keyD);
    let acceleration = 0;
    if (keyCount == 1)
        acceleration = scene.player.entity.speed;
    if (keyCount == 2)
        acceleration = scene.player.entity.speed * Scene.DIAGONAL;
    if (input.keyW)
        v.y -= acceleration;
    if (input.keyS)
        v.y += acceleration;
    if (input.keyA)
        v.x -= acceleration;
    if (input.keyD)
        v.x += acceleration;
    // Player movement
    scene.player.entity.origin.x += v.x;
    scene.player.entity.origin.y += v.y;
    scene.ticks++;
}
