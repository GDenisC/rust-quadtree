/* tslint:disable */
/* eslint-disable */
/**
*/
export class AABB {
  free(): void;
/**
* @param {XY} min
* @param {XY} max
*/
  constructor(min: XY, max: XY);
/**
* @param {Point} xy
* @returns {boolean}
*/
  contains_point(xy: Point): boolean;
/**
* @param {AABB} aabb
* @returns {boolean}
*/
  contains_aabb(aabb: AABB): boolean;
/**
*/
  max: XY;
/**
*/
  min: XY;
}
/**
*/
export class Point {
  free(): void;
/**
* @param {number} x
* @param {number} y
* @param {number} index
*/
  constructor(x: number, y: number, index: number);
/**
*/
  index: number;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class QuadTree {
  free(): void;
/**
* @param {AABB} bound
*/
  constructor(bound: AABB);
/**
* @param {Point} point
* @returns {boolean}
*/
  insert(point: Point): boolean;
/**
*/
  clear(): void;
/**
*/
  split(): void;
/**
* @param {AABB} aabb
* @returns {(Point)[]}
*/
  query(aabb: AABB): (Point)[];
/**
* @returns {boolean}
*/
  has_children(): boolean;
/**
* @returns {(Point)[]}
*/
  get_points(): (Point)[];
/**
* @returns {(AABB)[]}
*/
  get_view(): (AABB)[];
/**
*/
  bound: AABB;
}
/**
*/
export class XY {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
/**
*/
  x: number;
/**
*/
  y: number;
}
