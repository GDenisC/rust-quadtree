let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
*/
class AABB {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_aabb_free(ptr);
    }
    /**
    * @returns {XY}
    */
    get min() {
        const ret = wasm.__wbg_get_aabb_min(this.__wbg_ptr);
        return XY.__wrap(ret);
    }
    /**
    * @param {XY} arg0
    */
    set min(arg0) {
        _assertClass(arg0, XY);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_aabb_min(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {XY}
    */
    get max() {
        const ret = wasm.__wbg_get_aabb_max(this.__wbg_ptr);
        return XY.__wrap(ret);
    }
    /**
    * @param {XY} arg0
    */
    set max(arg0) {
        _assertClass(arg0, XY);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_aabb_max(this.__wbg_ptr, ptr0);
    }
    /**
    * @param {XY} min
    * @param {XY} max
    */
    constructor(min, max) {
        _assertClass(min, XY);
        var ptr0 = min.__destroy_into_raw();
        _assertClass(max, XY);
        var ptr1 = max.__destroy_into_raw();
        const ret = wasm.aabb_new(ptr0, ptr1);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @param {XY} xy
    * @returns {boolean}
    */
    contains_point(xy) {
        _assertClass(xy, XY);
        const ret = wasm.aabb_contains_point(this.__wbg_ptr, xy.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {AABB} aabb
    * @returns {boolean}
    */
    contains_aabb(aabb) {
        _assertClass(aabb, AABB);
        const ret = wasm.aabb_contains_aabb(this.__wbg_ptr, aabb.__wbg_ptr);
        return ret !== 0;
    }
}
module.exports.AABB = AABB;
/**
*/
class QuadTree {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_quadtree_free(ptr);
    }
    /**
    * @param {AABB} bound
    */
    constructor(bound) {
        _assertClass(bound, AABB);
        var ptr0 = bound.__destroy_into_raw();
        const ret = wasm.quadtree_new(ptr0);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    * @param {XY} point
    * @returns {boolean}
    */
    insert(point) {
        _assertClass(point, XY);
        var ptr0 = point.__destroy_into_raw();
        const ret = wasm.quadtree_insert(this.__wbg_ptr, ptr0);
        return ret !== 0;
    }
    /**
    */
    clear() {
        wasm.quadtree_clear(this.__wbg_ptr);
    }
    /**
    */
    split() {
        wasm.quadtree_split(this.__wbg_ptr);
    }
    /**
    * @param {AABB} aabb
    * @returns {(XY)[]}
    */
    query(aabb) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(aabb, AABB);
            wasm.quadtree_query(retptr, this.__wbg_ptr, aabb.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {boolean}
    */
    has_children() {
        const ret = wasm.quadtree_has_children(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @returns {(XY)[]}
    */
    get_points() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.quadtree_get_points(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
module.exports.QuadTree = QuadTree;
/**
*/
class XY {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(XY.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_xy_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_xy_x(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_xy_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_xy_y(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_xy_y(this.__wbg_ptr, arg0);
    }
    /**
    * @param {number} x
    * @param {number} y
    */
    constructor(x, y) {
        const ret = wasm.xy_new(x, y);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
}
module.exports.XY = XY;

module.exports.__wbg_xy_new = function(arg0) {
    const ret = XY.__wrap(arg0);
    return addHeapObject(ret);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'quadtree_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

