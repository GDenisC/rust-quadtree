import { QuadTree as RSQuadTree, AABB, XY } from './quadtree';

class Point extends XY {
    constructor(public x: number, public y: number);
    static from(xy: XY): Point;
    toString(): string;
}

class Rect extends AABB {
    constructor(x1: number, y1: number, x2: number, y2: number);
}

class Circle {
    constructor(public x: number, public y: number, public radius: number);
    get aabb(): Rect;
}

class QuadTree extends RSQuadTree {
    constructor(bound: [number, number]);
    query(aabb: Rect | Circle): Point[];
    get points(): Point[];
}

export { QuadTree, AABB, XY, Point, Rect, Circle }