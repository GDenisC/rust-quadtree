import { QuadTree as RSQuadTree, AABB, Point } from './quadtree';

interface QuadTreeObject {
    get rect(): Rect | AABB;
}

class Rect extends AABB {
    constructor(x: number, y: number, width: number, height: number);
}

class QuadTree extends RSQuadTree {
    constructor(bound: [number, number]);
    query(aabb: AABB | Rect | QuadTreeObject): Point[];
    get points(): Point[];
}

export { QuadTree, QuadTreeObject, AABB, Rect, Point }