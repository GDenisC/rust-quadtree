const { QuadTree: RSQuadTree, AABB, XY, Point } = require('./quadtree.js');

class Rect extends AABB {
    constructor(x, y, w, h) {
        super(new XY(x, y), new XY(x + w, y + h));
    }
}

class QuadTree extends RSQuadTree {
    constructor(bound) {
        super(new AABB(new XY(0, 0), new XY(bound[0], bound[1])));
    }

    query(aabb) {
        if (aabb instanceof Rect || aabb instanceof AABB) {
            return super.query(aabb);
        } else {
            const rect = aabb.aabb;
            if (!rect) {
                throw new Error(`rect of ${aabb} is null`);
            }
            return super.query(rect);
        }
    }
}

module.exports = { Point, XY, AABB, Rect, QuadTree };