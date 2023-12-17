const { QuadTree: RSQuadTree, AABB, XY } = require('./quadtree');

class Point extends XY {
    constructor(x, y) {
        super(x, y);
    }

    /**
     * @param { XY } xy
     */
    static from(xy) {
        return new Point(xy.get_x(), xy.get_y());
    }

    get x() {
        return this.get_x();
    }

    get y() {
        return this.get_y();
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Rect extends AABB {
    constructor(x1, y1, x2, y2) {
        super(new XY(x1, y1), new XY(x2, y2));
    }
}

class Circle extends XY {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    get aabb() {
        return new Rect(this.get_x() - this.radius / 2, this.get_y() - this.radius / 2, this.get_x() + this.radius / 2, this.get_y() + this.radius / 2);
    }
}

class QuadTree extends RSQuadTree {
    /**
     * @param {[number, number]} bound
     */
    constructor(bound) {
        super(new AABB(new XY(0, 0), new XY(bound[0], bound[1])));
    }

    /**
     * @param { Rect | Circle } aabb
     */
    query(aabb) {
        if (aabb instanceof Rect) {
            return super.query(aabb).map(p => Point.from(p));
        } else {
            return super.query(aabb.aabb).map(p => Point.from(p));
        }
    }

    get points() {
        return this.get_points().map(p => Point.from(p))
    }
}

module.exports = { Point, Rect, Circle, QuadTree };