/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_aabb_free(a: number): void;
export function __wbg_get_aabb_min(a: number): number;
export function __wbg_set_aabb_min(a: number, b: number): void;
export function __wbg_get_aabb_max(a: number): number;
export function __wbg_set_aabb_max(a: number, b: number): void;
export function aabb_new(a: number, b: number): number;
export function aabb_contains_point(a: number, b: number): number;
export function aabb_contains_aabb(a: number, b: number): number;
export function __wbg_quadtree_free(a: number): void;
export function quadtree_new(a: number): number;
export function quadtree_insert(a: number, b: number): number;
export function quadtree_clear(a: number): void;
export function quadtree_split(a: number): void;
export function quadtree_query(a: number, b: number, c: number): void;
export function quadtree_has_children(a: number): number;
export function quadtree_get_points(a: number, b: number): void;
export function __wbg_xy_free(a: number): void;
export function __wbg_get_xy_x(a: number): number;
export function __wbg_set_xy_x(a: number, b: number): void;
export function __wbg_get_xy_y(a: number): number;
export function __wbg_set_xy_y(a: number, b: number): void;
export function xy_new(a: number, b: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
