import { QuadTree as RSQuadTree, AABB, Point, XY } from './quadtree';

export { AABB, Point, XY };

export interface QuadTreeObject {
    get rect(): Rect | AABB;
}

export class Rect extends AABB {
    constructor(x: number, y: number, width: number, height: number);
}

export class QuadTree extends RSQuadTree {
    constructor(bound: [number, number]);
    query(aabb: AABB | Rect | QuadTreeObject): Point[];
}