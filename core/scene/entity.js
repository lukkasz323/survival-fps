import { sumVector2 } from "../../utils/vector2.js";
import { Direction } from "./direction.js";
import { offsetByDirection } from "./offsetByDirection.js";
export class Entity {
    origin;
    health;
    attack;
    constructor(origin = { x: 0, y: 0 }) {
        this.origin = origin;
    }
    tryDirection(direction) {
        // for every entity
        // if entity.origin === checkedOrigin
        //      if entity is wall?
        // return
        //      else
        // this.interact(entity)
        const checkedOrigin = sumVector2(this.origin, offsetByDirection[Direction.North]);
        console.log(this.origin, checkedOrigin);
        switch (direction) {
            case Direction.North:
                this.origin.y--;
                break;
            case Direction.South:
                this.origin.y++;
                break;
            case Direction.West:
                this.origin.x--;
                break;
            case Direction.East:
                this.origin.x++;
                break;
        }
    }
    interact(entity) {
    }
}
