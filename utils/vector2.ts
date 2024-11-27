export type Vector2 = {
    x: number,
    y: number,
}

export function sumVector2(a: Vector2, b: Vector2): Vector2 {
    return {x: a.x + b.x, y: a.x + b.x}
} 