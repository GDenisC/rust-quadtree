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
* @param {XY} xy
* @returns {boolean}
*/
  contains_point(xy: XY): boolean;
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
export class QuadTree {
  free(): void;
/**
* @param {AABB} bound
*/
  constructor(bound: AABB);
/**
* @param {XY} point
* @returns {boolean}
*/
  insert(point: XY): boolean;
/**
*/
  clear(): void;
/**
*/
  split(): void;
/**
* @param {AABB} aabb
* @returns {(XY)[]}
*/
  query(aabb: AABB): (XY)[];
/**
* @returns {boolean}
*/
  has_children(): boolean;
/**
* @returns {(XY)[]}
*/
  get_points(): (XY)[];
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
