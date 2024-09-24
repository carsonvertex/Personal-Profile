module.exports = {

"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "errorPrefix": ()=>errorPrefix,
    "generatedAttribute": ()=>generatedAttribute,
    "halfRandom": ()=>halfRandom,
    "millisecondsToSeconds": ()=>millisecondsToSeconds,
    "mouseDownEvent": ()=>mouseDownEvent,
    "mouseLeaveEvent": ()=>mouseLeaveEvent,
    "mouseMoveEvent": ()=>mouseMoveEvent,
    "mouseOutEvent": ()=>mouseOutEvent,
    "mouseUpEvent": ()=>mouseUpEvent,
    "percentDenominator": ()=>percentDenominator,
    "resizeEvent": ()=>resizeEvent,
    "touchCancelEvent": ()=>touchCancelEvent,
    "touchEndEvent": ()=>touchEndEvent,
    "touchMoveEvent": ()=>touchMoveEvent,
    "touchStartEvent": ()=>touchStartEvent,
    "visibilityChangeEvent": ()=>visibilityChangeEvent
});
const generatedAttribute = "generated";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchEndEvent = "touchend";
const touchMoveEvent = "touchmove";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";
const errorPrefix = "tsParticles - Error";
const percentDenominator = 100;
const halfRandom = 0.5;
const millisecondsToSeconds = 1000;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveDirection": ()=>MoveDirection
});
var MoveDirection;
(function(MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
    MoveDirection["outside"] = "outside";
    MoveDirection["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isArray": ()=>isArray,
    "isBoolean": ()=>isBoolean,
    "isFunction": ()=>isFunction,
    "isNumber": ()=>isNumber,
    "isObject": ()=>isObject,
    "isString": ()=>isString
});
function isBoolean(arg) {
    return typeof arg === "boolean";
}
function isString(arg) {
    return typeof arg === "string";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isFunction(arg) {
    return typeof arg === "function";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
    return Array.isArray(arg);
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Vector": ()=>Vector,
    "Vector3d": ()=>Vector3d
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const origin = {
    x: 0,
    y: 0,
    z: 0
}, squareExp = 2, inverseFactorNumerator = 1.0;
class Vector3d {
    constructor(xOrCoords, y, z){
        this._updateFromAngle = (angle, length)=>{
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(xOrCoords) && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            const coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : origin.z;
        } else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z ?? origin.z;
        } else {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} Vector3d not initialized correctly`);
        }
    }
    static get origin() {
        return Vector3d.create(origin.x, origin.y, origin.z);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this._updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
        this._updateFromAngle(this.angle, length);
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    copy() {
        return Vector3d.clone(this);
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }
    getLengthSq() {
        return this.x ** squareExp + this.y ** squareExp;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }
    normalize() {
        const length = this.length, noLength = 0;
        if (length != noLength) {
            this.multTo(inverseFactorNumerator / length);
        }
    }
    rotate(angle) {
        return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), origin.z);
    }
    setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : origin.z;
    }
    sub(v) {
        return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
}
class Vector extends Vector3d {
    constructor(xOrCoords, y){
        super(xOrCoords, y, origin.z);
    }
    static get origin() {
        return Vector.create(origin.x, origin.y);
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addEasing": ()=>addEasing,
    "animate": ()=>animate,
    "calcExactPositionOrRandomFromSize": ()=>calcExactPositionOrRandomFromSize,
    "calcExactPositionOrRandomFromSizeRanged": ()=>calcExactPositionOrRandomFromSizeRanged,
    "calcPositionFromSize": ()=>calcPositionFromSize,
    "calcPositionOrRandomFromSize": ()=>calcPositionOrRandomFromSize,
    "calcPositionOrRandomFromSizeRanged": ()=>calcPositionOrRandomFromSizeRanged,
    "cancelAnimation": ()=>cancelAnimation,
    "clamp": ()=>clamp,
    "collisionVelocity": ()=>collisionVelocity,
    "degToRad": ()=>degToRad,
    "getDistance": ()=>getDistance,
    "getDistances": ()=>getDistances,
    "getEasing": ()=>getEasing,
    "getParticleBaseVelocity": ()=>getParticleBaseVelocity,
    "getParticleDirectionAngle": ()=>getParticleDirectionAngle,
    "getRandom": ()=>getRandom,
    "getRangeMax": ()=>getRangeMax,
    "getRangeMin": ()=>getRangeMin,
    "getRangeValue": ()=>getRangeValue,
    "mix": ()=>mix,
    "parseAlpha": ()=>parseAlpha,
    "randomInRange": ()=>randomInRange,
    "setAnimationFunctions": ()=>setAnimationFunctions,
    "setRandom": ()=>setRandom,
    "setRangeValue": ()=>setRangeValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
let _random = Math.random;
const _animationLoop = {
    nextFrame: (cb)=>requestAnimationFrame(cb),
    cancel: (idx)=>cancelAnimationFrame(idx)
}, easingFunctions = new Map(), double = 2, doublePI = Math.PI * double;
function addEasing(name, easing) {
    if (easingFunctions.get(name)) {
        return;
    }
    easingFunctions.set(name, easing);
}
function getEasing(name) {
    return easingFunctions.get(name) ?? ((value)=>value);
}
function setRandom(rnd = Math.random) {
    _random = rnd;
}
function getRandom() {
    const min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
}
function setAnimationFunctions(nextFrame, cancel) {
    _animationLoop.nextFrame = (callback)=>nextFrame(callback);
    _animationLoop.cancel = (handle)=>cancel(handle);
}
function animate(fn) {
    return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
    const max = getRangeMax(r), minOffset = 0;
    let min = getRangeMin(r);
    if (max === min) {
        min = minOffset;
    }
    return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : value.min;
}
function getRangeMax(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : value.max;
}
function setRangeValue(source, value) {
    if (source === value || value === undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(source)) {
        return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
    } : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp = 2;
    return {
        dx: dx,
        dy: dy,
        distance: Math.sqrt(dx ** squareExp + dy ** squareExp)
    };
}
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
function degToRad(degrees) {
    const PIDeg = 180;
    return degrees * Math.PI / PIDeg;
}
function getParticleDirectionAngle(direction, position, center) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(direction)) {
        return degToRad(direction);
    }
    const empty = 0, half = 0.5, quarter = 0.25, threeQuarter = half + quarter;
    switch(direction){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].top:
            return -Math.PI * half;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].topRight:
            return -Math.PI * quarter;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].right:
            return empty;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].bottomRight:
            return Math.PI * quarter;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].bottom:
            return Math.PI * half;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].bottomLeft:
            return Math.PI * threeQuarter;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].left:
            return Math.PI;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].topLeft:
            return -Math.PI * threeQuarter;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].inside:
            return Math.atan2(center.y - position.y, center.x - position.x);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].outside:
            return Math.atan2(position.y - center.y, position.x - center.x);
        default:
            return getRandom() * doublePI;
    }
}
function getParticleBaseVelocity(direction) {
    const baseVelocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector"].origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
    const double = 2;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector"].create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * double * m2 / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
    return data.position?.x !== undefined && data.position.y !== undefined ? {
        x: data.position.x * data.size.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"],
        y: data.position.y * data.size.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"]
    } : undefined;
}
function calcPositionOrRandomFromSize(data) {
    return {
        x: (data.position?.x ?? getRandom() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"]) * data.size.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"],
        y: (data.position?.y ?? getRandom() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"]) * data.size.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"]
    };
}
function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcPositionOrRandomFromSize({
        size: data.size,
        position
    });
}
function calcExactPositionOrRandomFromSize(data) {
    return {
        x: data.position?.x ?? getRandom() * data.size.width,
        y: data.position?.y ?? getRandom() * data.size.height
    };
}
function calcExactPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcExactPositionOrRandomFromSize({
        size: data.size,
        position
    });
}
function parseAlpha(input) {
    const defaultAlpha = 1;
    if (!input) {
        return defaultAlpha;
    }
    return input.endsWith("%") ? parseFloat(input) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] : parseFloat(input);
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/AnimationMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimationMode": ()=>AnimationMode
});
var AnimationMode;
(function(AnimationMode) {
    AnimationMode["auto"] = "auto";
    AnimationMode["increase"] = "increase";
    AnimationMode["decrease"] = "decrease";
    AnimationMode["random"] = "random";
})(AnimationMode || (AnimationMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/AnimationStatus.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimationStatus": ()=>AnimationStatus
});
var AnimationStatus;
(function(AnimationStatus) {
    AnimationStatus["increasing"] = "increasing";
    AnimationStatus["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DestroyType": ()=>DestroyType
});
var DestroyType;
(function(DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/OutModeDirection.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OutModeDirection": ()=>OutModeDirection
});
var OutModeDirection;
(function(OutModeDirection) {
    OutModeDirection["bottom"] = "bottom";
    OutModeDirection["left"] = "left";
    OutModeDirection["right"] = "right";
    OutModeDirection["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PixelMode": ()=>PixelMode
});
var PixelMode;
(function(PixelMode) {
    PixelMode["precise"] = "precise";
    PixelMode["percent"] = "percent";
})(PixelMode || (PixelMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/StartValueType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StartValueType": ()=>StartValueType
});
var StartValueType;
(function(StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
    StartValueType["random"] = "random";
})(StartValueType || (StartValueType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "areBoundsInside": ()=>areBoundsInside,
    "arrayRandomIndex": ()=>arrayRandomIndex,
    "calculateBounds": ()=>calculateBounds,
    "circleBounce": ()=>circleBounce,
    "circleBounceDataFromParticle": ()=>circleBounceDataFromParticle,
    "deepExtend": ()=>deepExtend,
    "divMode": ()=>divMode,
    "divModeExecute": ()=>divModeExecute,
    "executeOnSingleOrMultiple": ()=>executeOnSingleOrMultiple,
    "findItemFromSingleOrMultiple": ()=>findItemFromSingleOrMultiple,
    "getLogger": ()=>getLogger,
    "getPosition": ()=>getPosition,
    "getSize": ()=>getSize,
    "hasMatchMedia": ()=>hasMatchMedia,
    "initParticleNumericAnimationValue": ()=>initParticleNumericAnimationValue,
    "isDivModeEnabled": ()=>isDivModeEnabled,
    "isInArray": ()=>isInArray,
    "isPointInside": ()=>isPointInside,
    "isSsr": ()=>isSsr,
    "itemFromArray": ()=>itemFromArray,
    "itemFromSingleOrMultiple": ()=>itemFromSingleOrMultiple,
    "loadFont": ()=>loadFont,
    "rectBounce": ()=>rectBounce,
    "safeIntersectionObserver": ()=>safeIntersectionObserver,
    "safeMatchMedia": ()=>safeMatchMedia,
    "safeMutationObserver": ()=>safeMutationObserver,
    "setLogger": ()=>setLogger,
    "singleDivModeExecute": ()=>singleDivModeExecute,
    "updateAnimation": ()=>updateAnimation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/AnimationMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/AnimationStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/OutModeDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/StartValueType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
const _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};
function setLogger(logger) {
    _logger.debug = logger.debug || _logger.debug;
    _logger.error = logger.error || _logger.error;
    _logger.info = logger.info || _logger.info;
    _logger.log = logger.log || _logger.log;
    _logger.verbose = logger.verbose || _logger.verbose;
    _logger.warning = logger.warning || _logger.warning;
}
function getLogger() {
    return _logger;
}
function rectSideBounce(data) {
    const res = {
        bounced: false
    }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data, half = 0.5, minVelocity = 0;
    if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
        return res;
    }
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half && velocity > minVelocity || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half && velocity < minVelocity) {
        res.velocity = velocity * -factor;
        res.bounced = true;
    }
    return res;
}
function checkSelector(element, selectors) {
    const res = executeOnSingleOrMultiple(selectors, (selector)=>{
        return element.matches(selector);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(res) ? res.some((t)=>t) : res;
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
        return;
    }
    return matchMedia(query);
}
function safeIntersectionObserver(callback) {
    if (isSsr() || typeof IntersectionObserver === "undefined") {
        return;
    }
    return new IntersectionObserver(callback);
}
function safeMutationObserver(callback) {
    if (isSsr() || typeof MutationObserver === "undefined") {
        return;
    }
    return new MutationObserver(callback);
}
function isInArray(value, array) {
    const invalidIndex = -1;
    return value === array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(array) && array.indexOf(value) > invalidIndex;
}
async function loadFont(font, weight) {
    try {
        await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch  {}
}
function arrayRandomIndex(array) {
    return Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
    const minRadius = 0;
    return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom) {
        inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutModeDirection"].left)) {
        inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutModeDirection"].right)) {
        inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutModeDirection"].top)) {
        inside = bounds.bottom > offset.y;
    }
    return inside;
}
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
    };
}
function deepExtend(destination, ...sources) {
    for (const source of sources){
        if (source === undefined || source === null) {
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(source)) {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(destination) || !destination || !Array.isArray(destination))) {
            destination = [];
        } else if (!sourceIsArray && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(destination) || !destination || Array.isArray(destination))) {
            destination = {};
        }
        for(const key in source){
            if (key === "__proto__") {
                continue;
            }
            const sourceDict = source, value = sourceDict[key], destDict = destination;
            destDict[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(value) && Array.isArray(value) ? value.map((v)=>deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, (t)=>t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, (div)=>{
        const divMode = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) {
            singleDivModeExecute(div, callback);
        }
    });
}
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, (selector)=>{
        callback(selector, div);
    });
}
function divMode(divs, element) {
    if (!element || !divs) {
        return;
    }
    return findItemFromSingleOrMultiple(divs, (div)=>{
        return checkSelector(element, div.selectors);
    });
}
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector"].create((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(p.options.bounce.horizontal.value), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(p.options.bounce.vertical.value))
    };
}
function circleBounce(p1, p2) {
    const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [
        p1.position,
        p2.position
    ], { dx: xDist, dy: yDist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistances"])(pos2, pos1), minimumDistance = 0;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) {
        return;
    }
    const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collisionVelocity"])(u1, u2, m1, m2), v2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collisionVelocity"])(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
        pSide: {
            min: bounds.left,
            max: bounds.right
        },
        pOtherSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        rectSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        rectOtherSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        velocity: particle.velocity.x,
        factor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(bounceOptions.horizontal.value)
    });
    if (resH.bounced) {
        if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
        }
        if (resH.position !== undefined) {
            particle.position.x = resH.position;
        }
    }
    const resV = rectSideBounce({
        pSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        pOtherSide: {
            min: bounds.left,
            max: bounds.right
        },
        rectSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        rectOtherSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        velocity: particle.velocity.y,
        factor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(bounceOptions.vertical.value)
    });
    if (resV.bounced) {
        if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
        }
        if (resV.position !== undefined) {
            particle.position.y = resV.position;
        }
    }
}
function executeOnSingleOrMultiple(obj, callback) {
    const defaultIndex = 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(obj) ? obj.map((item, index)=>callback(item, index)) : callback(obj, defaultIndex);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(obj)) {
        return obj.find((t, index)=>callback(t, index));
    }
    const defaultIndex = 0;
    return callback(obj, defaultIndex) ? obj : undefined;
}
function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
        enable: animationOptions.enable,
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(options.value) * pxRatio,
        max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeMax"])(valueRange) * pxRatio,
        min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeMin"])(valueRange) * pxRatio,
        loops: 0,
        maxLoops: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.count),
        time: 0
    }, decayOffset = 1;
    if (animationOptions.enable) {
        res.decay = decayOffset - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.decay);
        switch(animationOptions.mode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationMode"].increase:
                res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationMode"].decrease:
                res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationMode"].random:
                res.status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])() >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["halfRandom"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                break;
        }
        const autoStatus = animationOptions.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationMode"].auto;
        switch(animationOptions.startValue){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StartValueType"].min:
                res.value = res.min;
                if (autoStatus) {
                    res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StartValueType"].max:
                res.value = res.max;
                if (autoStatus) {
                    res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StartValueType"].random:
            default:
                res.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])(res);
                if (autoStatus) {
                    res.status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])() >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["halfRandom"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                }
                break;
        }
    }
    res.initialValue = res.value;
    return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PixelMode"].percent;
    if (!isPercent) {
        const { mode: _, ...rest } = positionOrSize;
        return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
        return {
            x: positionOrSize.x / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.width,
            y: positionOrSize.y / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.height
        };
    } else {
        return {
            width: positionOrSize.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.width,
            height: positionOrSize.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.height
        };
    }
}
function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
}
function getSize(size, canvasSize) {
    return getPositionOrSize(size, canvasSize);
}
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch(destroyType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DestroyType"].max:
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DestroyType"].min:
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minDecay = 1;
    if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) {
        return;
    }
    const velocity = (data.velocity ?? minVelocity) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
    if (!data.time) {
        data.time = 0;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
        data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
        return;
    }
    switch(data.status){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing:
            if (data.value >= maxValue) {
                if (changeDirection) {
                    data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                } else {
                    data.value -= maxValue;
                }
                if (!data.loops) {
                    data.loops = minLoops;
                }
                data.loops++;
            } else {
                data.value += velocity;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing:
            if (data.value <= minValue) {
                if (changeDirection) {
                    data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                } else {
                    data.value += maxValue;
                }
                if (!data.loops) {
                    data.loops = minLoops;
                }
                data.loops++;
            } else {
                data.value -= velocity;
            }
    }
    if (data.velocity && decay !== identity) {
        data.velocity *= decay;
    }
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) {
        data.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(data.value, minValue, maxValue);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/AlterType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AlterType": ()=>AlterType
});
var AlterType;
(function(AlterType) {
    AlterType["darken"] = "darken";
    AlterType["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addColorManager": ()=>addColorManager,
    "colorMix": ()=>colorMix,
    "colorToHsl": ()=>colorToHsl,
    "colorToRgb": ()=>colorToRgb,
    "getHslAnimationFromHsl": ()=>getHslAnimationFromHsl,
    "getHslFromAnimation": ()=>getHslFromAnimation,
    "getLinkColor": ()=>getLinkColor,
    "getLinkRandomColor": ()=>getLinkRandomColor,
    "getRandomRgbColor": ()=>getRandomRgbColor,
    "getStyleFromHsl": ()=>getStyleFromHsl,
    "getStyleFromRgb": ()=>getStyleFromRgb,
    "hslToRgb": ()=>hslToRgb,
    "hslaToRgba": ()=>hslaToRgba,
    "rangeColorToHsl": ()=>rangeColorToHsl,
    "rangeColorToRgb": ()=>rangeColorToRgb,
    "rgbToHsl": ()=>rgbToHsl,
    "stringToAlpha": ()=>stringToAlpha,
    "stringToRgb": ()=>stringToRgb,
    "updateColor": ()=>updateColor,
    "updateColorValue": ()=>updateColorValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/AnimationStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 4] = "a";
})(RgbIndexes || (RgbIndexes = {}));
const randomColorValue = "random", midColorValue = "mid", colorManagers = new Map();
function addColorManager(manager) {
    colorManagers.set(manager.key, manager);
}
function stringToRgba(input) {
    for (const [, manager] of colorManagers){
        if (input.startsWith(manager.stringPrefix)) {
            return manager.parseString(input);
        }
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a)=>{
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed), radix = 16, defaultAlpha = 1, alphaFactor = 0xff;
    return result ? {
        a: result[RgbIndexes.a] !== undefined ? parseInt(result[RgbIndexes.a], radix) / alphaFactor : defaultAlpha,
        b: parseInt(result[RgbIndexes.b], radix),
        g: parseInt(result[RgbIndexes.g], radix),
        r: parseInt(result[RgbIndexes.r], radix)
    } : undefined;
}
function rangeColorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(input) ? {
        value: input
    } : input;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(color.value)) {
        return colorToRgb(color.value, index, useIndex);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(color.value)) {
        return rangeColorToRgb({
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromArray"])(color.value, index, useIndex)
        });
    }
    for (const [, manager] of colorManagers){
        const res = manager.handleRangeColor(color);
        if (res) {
            return res;
        }
    }
}
function colorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(input) ? {
        value: input
    } : input;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(color.value)) {
        return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(color.value)) {
        return colorToRgb({
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromArray"])(color.value, index, useIndex)
        });
    }
    for (const [, manager] of colorManagers){
        const res = manager.handleColor(color);
        if (res) {
            return res;
        }
    }
}
function colorToHsl(color, index, useIndex = true) {
    const rgb = colorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rangeColorToHsl(color, index, useIndex = true) {
    const rgb = rangeColorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rgbToHsl(color) {
    const rgbMax = 255, hMax = 360, sMax = 100, lMax = 100, hMin = 0, sMin = 0, hPhase = 60, half = 0.5, double = 2, r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: hMin,
        l: (max + min) * half,
        s: sMin
    };
    if (max !== min) {
        res.s = res.l < half ? (max - min) / (max + min) : (max - min) / (double - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? double + (b1 - r1) / (max - min) : double * double + (r1 - g1) / (max - min);
    }
    res.l *= lMax;
    res.s *= sMax;
    res.h *= hPhase;
    if (res.h < hMin) {
        res.h += hMax;
    }
    if (res.h >= hMax) {
        res.h -= hMax;
    }
    return res;
}
function stringToAlpha(input) {
    return stringToRgba(input)?.a;
}
function stringToRgb(input) {
    return stringToRgba(input);
}
function hslToRgb(hsl) {
    const hMax = 360, sMax = 100, lMax = 100, sMin = 0, lMin = 0, h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax, rgbFactor = 255, triple = 3;
    if (s === sMin) {
        const grayscaleValue = Math.round(lNormalized * rgbFactor);
        return {
            r: grayscaleValue,
            g: grayscaleValue,
            b: grayscaleValue
        };
    }
    const half = 0.5, double = 2, channel = (temp1, temp2, temp3)=>{
        const temp3Min = 0, temp3Max = 1, sextuple = 6;
        if (temp3 < temp3Min) {
            temp3++;
        }
        if (temp3 > temp3Max) {
            temp3--;
        }
        if (temp3 * sextuple < temp3Max) {
            return temp1 + (temp2 - temp1) * sextuple * temp3;
        }
        if (temp3 * double < temp3Max) {
            return temp2;
        }
        if (temp3 * triple < temp3Max * double) {
            const temp3Offset = double / triple;
            return temp1 + (temp2 - temp1) * (temp3Offset - temp3) * sextuple;
        }
        return temp1;
    }, sNormalizedOffset = 1, temp1 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = double * lNormalized - temp1, phaseNumerator = 1, phaseThird = phaseNumerator / triple, red = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized)), blue = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized - phaseThird));
    return {
        r: Math.round(red),
        g: Math.round(green),
        b: Math.round(blue)
    };
}
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
    };
}
function getRandomRgbColor(min) {
    const defaultMin = 0, fixedMin = min ?? defaultMin, rgbMax = 256;
    return {
        b: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, rgbMax))),
        g: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, rgbMax))),
        r: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, rgbMax)))
    };
}
function getStyleFromRgb(color, opacity) {
    const defaultOpacity = 1;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? defaultOpacity})`;
}
function getStyleFromHsl(color, opacity) {
    const defaultOpacity = 1;
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? defaultOpacity})`;
}
function colorMix(color1, color2, size1, size2) {
    let rgb1 = color1, rgb2 = color2;
    if (rgb1.r === undefined) {
        rgb1 = hslToRgb(color1);
    }
    if (rgb2.r === undefined) {
        rgb2 = hslToRgb(color2);
    }
    return {
        b: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mix"])(rgb1.b, rgb2.b, size1, size2),
        g: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mix"])(rgb1.g, rgb2.g, size1, size2),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mix"])(rgb1.r, rgb2.r, size1, size2)
    };
}
function getLinkColor(p1, p2, linkColor) {
    if (linkColor === randomColorValue) {
        return getRandomRgbColor();
    } else if (linkColor === midColorValue) {
        const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
        if (sourceColor && destColor && p2) {
            return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        } else {
            const hslColor = sourceColor ?? destColor;
            if (hslColor) {
                return hslToRgb(hslColor);
            }
        }
    } else {
        return linkColor;
    }
}
function getLinkRandomColor(optColor, blink, consent) {
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(optColor) ? optColor : optColor.value;
    if (color === randomColorValue) {
        if (consent) {
            return rangeColorToRgb({
                value: color
            });
        }
        if (blink) {
            return randomColorValue;
        }
        return midColorValue;
    } else if (color === midColorValue) {
        return midColorValue;
    } else {
        return rangeColorToRgb({
            value: color
        });
    }
}
function getHslFromAnimation(animation) {
    return animation !== undefined ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
    } : undefined;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
        h: {
            enable: false,
            value: hsl.h
        },
        s: {
            enable: false,
            value: hsl.s
        },
        l: {
            enable: false,
            value: hsl.l
        }
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    const defaultVelocity = 0, decayOffset = 1, defaultLoops = 0, defaultTime = 0;
    if (colorValue.enable) {
        colorValue.velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.speed) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percentDenominator"] * reduceFactor;
        colorValue.decay = decayOffset - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.decay);
        colorValue.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
        colorValue.loops = defaultLoops;
        colorValue.maxLoops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.count);
        colorValue.time = defaultTime;
        colorValue.delayTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        if (!colorAnimation.sync) {
            colorValue.velocity *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])();
            colorValue.value *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])();
        }
        colorValue.initialValue = colorValue.value;
        colorValue.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(colorAnimation.offset);
    } else {
        colorValue.velocity = defaultVelocity;
    }
}
function updateColorValue(data, range, decrease, delta) {
    const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) {
        return;
    }
    if (!data.time) {
        data.time = 0;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
        data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
        return;
    }
    const offset = data.offset ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity, max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeMax"])(range), min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeMin"])(range);
    if (!decrease || data.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing) {
        data.value += velocity;
        if (data.value > max) {
            if (!data.loops) {
                data.loops = 0;
            }
            data.loops++;
            if (decrease) {
                data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
            } else {
                data.value -= max;
            }
        }
    } else {
        data.value -= velocity;
        const minValue = 0;
        if (data.value < minValue) {
            if (!data.loops) {
                data.loops = 0;
            }
            data.loops++;
            data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
        }
    }
    if (data.velocity && decay !== identity) {
        data.velocity *= decay;
    }
    data.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(data.value, min, max);
}
function updateColor(color, delta) {
    if (!color) {
        return;
    }
    const { h, s, l } = color;
    const ranges = {
        h: {
            min: 0,
            max: 360
        },
        s: {
            min: 0,
            max: 100
        },
        l: {
            min: 0,
            max: 100
        }
    };
    if (h) {
        updateColorValue(h, ranges.h, false, delta);
    }
    if (s) {
        updateColorValue(s, ranges.s, true, delta);
    }
    if (l) {
        updateColorValue(l, ranges.l, true, delta);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/CanvasUtils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "alterHsl": ()=>alterHsl,
    "clear": ()=>clear,
    "drawEffect": ()=>drawEffect,
    "drawLine": ()=>drawLine,
    "drawParticle": ()=>drawParticle,
    "drawParticlePlugin": ()=>drawParticlePlugin,
    "drawPlugin": ()=>drawPlugin,
    "drawShape": ()=>drawShape,
    "drawShapeAfterDraw": ()=>drawShapeAfterDraw,
    "paintBase": ()=>paintBase,
    "paintImage": ()=>paintImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/AlterType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const origin = {
    x: 0,
    y: 0
}, defaultTransform = {
    a: 1,
    b: 0,
    c: 0,
    d: 1
};
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
    context.fillRect(origin.x, origin.y, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
    if (!image) {
        return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, origin.x, origin.y, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
function clear(context, dimension) {
    context.clearRect(origin.x, origin.y, dimension.width, dimension.height);
}
function drawParticle(data) {
    const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data, pos = particle.getPosition(), defaultAngle = 0, angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : defaultAngle), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle)
    }, rotating = !!angle, identity = 1, transformData = {
        a: rotateData.cos * (transform.a ?? defaultTransform.a),
        b: rotating ? rotateData.sin * (transform.b ?? identity) : transform.b ?? defaultTransform.b,
        c: rotating ? -rotateData.sin * (transform.c ?? identity) : transform.c ?? defaultTransform.c,
        d: rotateData.cos * (transform.d ?? defaultTransform.d)
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
    }
    const minStrokeWidth = 0, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
    }
    const drawData = {
        container,
        context,
        particle,
        radius,
        opacity,
        delta,
        transformData,
        strokeWidth
    };
    drawShape(drawData);
    drawShapeAfterDraw(drawData);
    drawEffect(drawData);
    context.globalCompositeOperation = "source-over";
    context.resetTransform();
}
function drawEffect(data) {
    const { container, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.effect) {
        return;
    }
    const drawer = container.effectDrawers.get(particle.effect);
    if (!drawer) {
        return;
    }
    drawer.draw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
}
function drawShape(data) {
    const { container, context, particle, radius, opacity, delta, strokeWidth, transformData } = data, minStrokeWidth = 0;
    if (!particle.shape) {
        return;
    }
    const drawer = container.shapeDrawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    context.beginPath();
    drawer.draw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
    if (particle.shapeClose) {
        context.closePath();
    }
    if (strokeWidth > minStrokeWidth) {
        context.stroke();
    }
    if (particle.shapeFill) {
        context.fill();
    }
}
function drawShapeAfterDraw(data) {
    const { container, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.shape) {
        return;
    }
    const drawer = container.shapeDrawers.get(particle.shape);
    if (!drawer?.afterDraw) {
        return;
    }
    drawer.afterDraw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
}
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
        return;
    }
    plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
    const lFactor = 1;
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlterType"].darken ? -lFactor : lFactor) * value
    };
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Canvas.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Canvas": ()=>Canvas
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/CanvasUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key], defaultValue = 1;
    if (newValue !== undefined) {
        factor[key] = (factor[key] ?? defaultValue) * newValue;
    }
}
function setStyle(canvas, style, important = false) {
    if (!style) {
        return;
    }
    const element = canvas;
    if (!element) {
        return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
        return;
    }
    for(const key in style){
        const value = style[key];
        if (!value) {
            continue;
        }
        elementStyle.setProperty(key, value, important ? "important" : "");
    }
}
class Canvas {
    constructor(container){
        this.container = container;
        this._applyPostDrawUpdaters = (particle)=>{
            for (const updater of this._postDrawUpdaters){
                updater.afterDraw?.(particle);
            }
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform)=>{
            for (const updater of this._preDrawUpdaters){
                if (updater.getColorStyles) {
                    const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                    if (fill) {
                        colorStyles.fill = fill;
                    }
                    if (stroke) {
                        colorStyles.stroke = stroke;
                    }
                }
                if (updater.getTransformValues) {
                    const updaterTransform = updater.getTransformValues(particle);
                    for(const key in updaterTransform){
                        setTransformValue(transform, updaterTransform, key);
                    }
                }
                updater.beforeDraw?.(particle);
            }
        };
        this._applyResizePlugins = ()=>{
            for (const plugin of this._resizePlugins){
                plugin.resize?.();
            }
        };
        this._getPluginParticleColors = (particle)=>{
            let fColor, sColor;
            for (const plugin of this._colorPlugins){
                if (!fColor && plugin.particleFillColor) {
                    fColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(plugin.particleFillColor(particle));
                }
                if (!sColor && plugin.particleStrokeColor) {
                    sColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(plugin.particleStrokeColor(particle));
                }
                if (fColor && sColor) {
                    break;
                }
            }
            return [
                fColor,
                sColor
            ];
        };
        this._initCover = async ()=>{
            const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
            if (color) {
                const coverRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(color);
                if (coverRgb) {
                    const coverColor = {
                        ...coverRgb,
                        a: cover.opacity
                    };
                    this._coverColorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(coverColor, coverColor.a);
                }
            } else {
                await new Promise((resolve, reject)=>{
                    if (!cover.image) {
                        return;
                    }
                    const img = document.createElement("img");
                    img.addEventListener("load", ()=>{
                        this._coverImage = {
                            image: img,
                            opacity: cover.opacity
                        };
                        resolve();
                    });
                    img.addEventListener("error", (evt)=>{
                        reject(evt.error);
                    });
                    img.src = cover.image;
                });
            }
        };
        this._initStyle = ()=>{
            const element = this.element, options = this.container.actualOptions;
            if (!element) {
                return;
            }
            if (this._fullScreen) {
                this._originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, element.style);
                this._setFullScreenStyle();
            } else {
                this._resetOriginalStyle();
            }
            for(const key in options.style){
                if (!key || !options.style) {
                    continue;
                }
                const value = options.style[key];
                if (!value) {
                    continue;
                }
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = async ()=>{
            const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
            if (!trail.enable) {
                return;
            }
            const factorNumerator = 1, opacity = factorNumerator / trail.length;
            if (trailFill.color) {
                const fillColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(trailFill.color);
                if (!fillColor) {
                    return;
                }
                this._trailFill = {
                    color: {
                        ...fillColor
                    },
                    opacity
                };
            } else {
                await new Promise((resolve, reject)=>{
                    if (!trailFill.image) {
                        return;
                    }
                    const img = document.createElement("img");
                    img.addEventListener("load", ()=>{
                        this._trailFill = {
                            image: img,
                            opacity
                        };
                        resolve();
                    });
                    img.addEventListener("error", (evt)=>{
                        reject(evt.error);
                    });
                    img.src = trailFill.image;
                });
            }
        };
        this._paintBase = (baseColor)=>{
            this.draw((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paintBase"])(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity)=>{
            this.draw((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paintImage"])(ctx, this.size, image, opacity));
        };
        this._repairStyle = ()=>{
            const element = this.element;
            if (!element) {
                return;
            }
            this._safeMutationObserver((observer)=>observer.disconnect());
            this._initStyle();
            this.initBackground();
            this._safeMutationObserver((observer)=>{
                if (!element || !(element instanceof Node)) {
                    return;
                }
                observer.observe(element, {
                    attributes: true
                });
            });
        };
        this._resetOriginalStyle = ()=>{
            const element = this.element, originalStyle = this._originalStyle;
            if (!(element && originalStyle)) {
                return;
            }
            setStyle(element, originalStyle);
        };
        this._safeMutationObserver = (callback)=>{
            if (!this._mutationObserver) {
                return;
            }
            callback(this._mutationObserver);
        };
        this._setFullScreenStyle = ()=>{
            const element = this.element;
            if (!element) {
                return;
            }
            const radix = 10;
            setStyle(element, {
                position: "fixed",
                zIndex: this.container.actualOptions.fullScreen.zIndex.toString(radix),
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            }, true);
        };
        this.size = {
            height: 0,
            width: 0
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill, minimumLength = 0;
        if (options.backgroundMask.enable) {
            this.paint();
        } else if (trail.enable && trail.length > minimumLength && trailFill) {
            if (trailFill.color) {
                this._paintBase((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(trailFill.color, trailFill.opacity));
            } else if (trailFill.image) {
                this._paintImage(trailFill.image, trailFill.opacity);
            }
        } else if (options.clear) {
            this.draw((ctx)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(ctx, this.size);
            });
        }
    }
    destroy() {
        this.stop();
        if (this._generated) {
            const element = this.element;
            element?.remove();
        } else {
            this._resetOriginalStyle();
        }
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        const ctx = this._context;
        if (!ctx) {
            return;
        }
        return cb(ctx);
    }
    drawAsync(cb) {
        const ctx = this._context;
        if (!ctx) {
            return undefined;
        }
        return cb(ctx);
    }
    drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) {
            return;
        }
        const radius = particle.getRadius(), minimumSize = 0;
        if (radius <= minimumSize) {
            return;
        }
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) {
            fColor = pfColor;
        }
        if (!sColor) {
            sColor = psColor;
        }
        if (!fColor && !sColor) {
            return;
        }
        this.draw((ctx)=>{
            const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactorOffset = 1, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, defaultOpacity = 1, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? defaultOpacity, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(fColor, zOpacity) : undefined
            };
            colorStyles.stroke = sColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawParticle"])({
                container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawParticlePlugin"])(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawPlugin"])(ctx, plugin, delta));
    }
    async init() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMutationObserver"])((records)=>{
            for (const record of records){
                if (record.type === "attributes" && record.attributeName === "style") {
                    this._repairStyle();
                }
            }
        });
        this.resize();
        this._initStyle();
        await this._initCover();
        try {
            await this._initTrail();
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogger"])().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs)=>{
            if (!this.element || !(this.element instanceof Node)) {
                return;
            }
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) {
            return;
        }
        const elementStyle = element.style;
        if (!elementStyle) {
            return;
        }
        if (background.color) {
            const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(background.color);
            elementStyle.backgroundColor = color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(color, background.opacity) : "";
        } else {
            elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins){
            if (plugin.resize) {
                this._resizePlugins.push(plugin);
            }
            if (plugin.particleFillColor ?? plugin.particleStrokeColor) {
                this._colorPlugins.push(plugin);
            }
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters){
            if (updater.afterDraw) {
                this._postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
                this._preDrawUpdaters.push(updater);
            }
        }
    }
    loadCanvas(canvas) {
        if (this._generated && this.element) {
            this.element.remove();
        }
        this._generated = canvas.dataset && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"] in canvas.dataset ? canvas.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]] === "true" : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs)=>{
            if (!this.element || !(this.element instanceof Node)) {
                return;
            }
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx)=>{
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(ctx, this.size);
                if (this._coverImage) {
                    this._paintImage(this._coverImage.image, this._coverImage.opacity);
                } else if (this._coverColorStyle) {
                    this._paintBase(this._coverColorStyle);
                } else {
                    this._paintBase();
                }
            } else {
                this._paintBase();
            }
        });
    }
    resize() {
        if (!this.element) {
            return false;
        }
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
            width: this.element.offsetWidth * pxRatio,
            height: this.element.offsetHeight * pxRatio
        };
        if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
            return false;
        }
        const oldSize = {
            ...size
        };
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) {
            container.particles.setResizeFactor({
                width: size.width / oldSize.width,
                height: size.height / oldSize.height
            });
        }
        return true;
    }
    stop() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = undefined;
        this.draw((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])(ctx, this.size));
    }
    async windowResize() {
        if (!this.element || !this.resize()) {
            return;
        }
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) {
            await container.refresh();
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/InteractivityDetect.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InteractivityDetect": ()=>InteractivityDetect
});
var InteractivityDetect;
(function(InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/EventListeners.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EventListeners": ()=>EventListeners
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/InteractivityDetect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const double = 2;
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = {
            passive: true
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBoolean"])(options)) {
            addOptions.capture = options;
        } else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container){
        this.container = container;
        this._doMouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions;
            if (this._canPush) {
                const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) {
                    return;
                }
                mouseInteractivity.clickPosition = {
                    ...mousePos
                };
                mouseInteractivity.clickTime = new Date().getTime();
                const onClick = options.interactivity.events.onClick;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(onClick.mode, (mode)=>this.container.handleClickMode(mode));
            }
            if (e.type === "touchend") {
                const touchDelay = 500;
                setTimeout(()=>this._mouseTouchFinish(), touchDelay);
            }
        };
        this._handleThemeChange = (e)=>{
            const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme)=>theme.name === themeName);
            if (theme?.default.auto) {
                void container.loadTheme(themeName);
            }
        };
        this._handleVisibilityChange = ()=>{
            const container = this.container, options = container.actualOptions;
            this._mouseTouchFinish();
            if (!options.pauseOnBlur) {
                return;
            }
            if (document?.hidden) {
                container.pageHidden = true;
                container.pause();
            } else {
                container.pageHidden = false;
                if (container.animationStatus) {
                    void container.play(true);
                } else {
                    void container.draw(true);
                }
            }
        };
        this._handleWindowResize = ()=>{
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
                delete this._resizeTimeout;
            }
            const handleResize = async ()=>{
                const canvas = this.container.canvas;
                await canvas?.windowResize();
            };
            this._resizeTimeout = setTimeout(()=>void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]);
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            const interactivityEl = container.interactivity.element;
            if (!interactivityEl) {
                return;
            }
            const html = interactivityEl, canvasEl = container.canvas.element;
            if (canvasEl) {
                canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
            }
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
                return;
            }
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseMoveEvent"], handlers.mouseMove, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchStartEvent"], handlers.touchStart, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchMoveEvent"], handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchEndEvent"], handlers.touchEnd, add);
            } else {
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchEndEvent"], handlers.touchEndClick, add);
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseUpEvent"], handlers.mouseUp, add);
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseDownEvent"], handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchCancelEvent"], handlers.touchCancel, add);
        };
        this._manageListeners = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container.canvas.element;
            let mouseLeaveTmpEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseLeaveEvent"];
            if (detectType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractivityDetect"].window) {
                container.interactivity.element = window;
                mouseLeaveTmpEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseOutEvent"];
            } else if (detectType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractivityDetect"].parent && canvasEl) {
                container.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
            } else {
                container.interactivity.element = canvasEl;
            }
            this._manageMediaMatch(add);
            this._manageResize(add);
            this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) {
                manageListener(document, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visibilityChangeEvent"], handlers.visibilityChange, add, false);
            }
        };
        this._manageMediaMatch = (add)=>{
            const handlers = this._handlers, mediaMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMatchMedia"])("(prefers-color-scheme: dark)");
            if (!mediaMatch) {
                return;
            }
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) {
                return;
            }
            if (add) {
                mediaMatch.addListener(handlers.oldThemeChange);
            } else {
                mediaMatch.removeListener(handlers.oldThemeChange);
            }
        };
        this._manageResize = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            if (!options.interactivity.events.resize) {
                return;
            }
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeEvent"], handlers.resize, add);
                return;
            }
            const canvasEl = container.canvas.element;
            if (this._resizeObserver && !add) {
                if (canvasEl) {
                    this._resizeObserver.unobserve(canvasEl);
                }
                this._resizeObserver.disconnect();
                delete this._resizeObserver;
            } else if (!this._resizeObserver && add && canvasEl) {
                this._resizeObserver = new ResizeObserver((entries)=>{
                    const entry = entries.find((e)=>e.target === canvasEl);
                    if (!entry) {
                        return;
                    }
                    this._handleWindowResize();
                });
                this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = ()=>{
            const { interactivity } = this.container;
            if (!interactivity) {
                return;
            }
            const { mouse } = interactivity;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions, { mouse } = container.interactivity;
            mouse.inside = true;
            let handled = false;
            const mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) {
                return;
            }
            for (const [, plugin] of container.plugins){
                if (!plugin.clickPositionValid) {
                    continue;
                }
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
            if (!handled) {
                this._doMouseTouchClick(e);
            }
            mouse.clicking = false;
        };
        this._mouseTouchFinish = ()=>{
            const interactivity = this.container.interactivity;
            if (!interactivity) {
                return;
            }
            const mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseLeaveEvent"];
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = (e)=>{
            const container = this.container, options = container.actualOptions, interactivity = container.interactivity, canvasEl = container.canvas.element;
            if (!interactivity?.element) {
                return;
            }
            interactivity.mouse.inside = true;
            let pos;
            if (e.type.startsWith("pointer")) {
                this._canPush = true;
                const mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        const clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top
                        };
                    }
                } else if (options.interactivity.detectsOn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractivityDetect"].parent) {
                    const source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + double * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + double * sourceRect.top - (targetRect.top + canvasRect.top)
                        };
                    } else {
                        pos = {
                            x: mouseEvent.offsetX ?? mouseEvent.clientX,
                            y: mouseEvent.offsetY ?? mouseEvent.clientY
                        };
                    }
                } else if (mouseEvent.target === canvasEl) {
                    pos = {
                        x: mouseEvent.offsetX ?? mouseEvent.clientX,
                        y: mouseEvent.offsetY ?? mouseEvent.clientY
                    };
                }
            } else {
                this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    const touchEvent = e, lengthOffset = 1, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect(), defaultCoordinate = 0;
                    pos = {
                        x: lastTouch.clientX - (canvasRect.left ?? defaultCoordinate),
                        y: lastTouch.clientY - (canvasRect.top ?? defaultCoordinate)
                    };
                }
            }
            const pxRatio = container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseMoveEvent"];
        };
        this._touchEnd = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches){
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchFinish();
        };
        this._touchEndClick = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches){
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchClick(e);
        };
        this._touchStart = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches){
                this._touches.set(touch.identifier, performance.now());
            }
            this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: ()=>this._mouseDown(),
            mouseLeave: ()=>this._mouseTouchFinish(),
            mouseMove: (e)=>this._mouseTouchMove(e),
            mouseUp: (e)=>this._mouseTouchClick(e),
            touchStart: (e)=>this._touchStart(e),
            touchMove: (e)=>this._mouseTouchMove(e),
            touchEnd: (e)=>this._touchEnd(e),
            touchCancel: (e)=>this._touchEnd(e),
            touchEndClick: (e)=>this._touchEndClick(e),
            visibilityChange: ()=>this._handleVisibilityChange(),
            themeChange: (e)=>this._handleThemeChange(e),
            oldThemeChange: (e)=>this._handleThemeChange(e),
            resize: ()=>{
                this._handleWindowResize();
            }
        };
    }
    addListeners() {
        this._manageListeners(true);
    }
    removeListeners() {
        this._manageListeners(false);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EventType": ()=>EventType
});
var EventType;
(function(EventType) {
    EventType["configAdded"] = "configAdded";
    EventType["containerInit"] = "containerInit";
    EventType["particlesSetup"] = "particlesSetup";
    EventType["containerStarted"] = "containerStarted";
    EventType["containerStopped"] = "containerStopped";
    EventType["containerDestroyed"] = "containerDestroyed";
    EventType["containerPaused"] = "containerPaused";
    EventType["containerPlay"] = "containerPlay";
    EventType["containerBuilt"] = "containerBuilt";
    EventType["particleAdded"] = "particleAdded";
    EventType["particleDestroyed"] = "particleDestroyed";
    EventType["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OptionsColor": ()=>OptionsColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class OptionsColor {
    constructor(){
        this.value = "";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(data) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(data)) {
                color.load({
                    value: data
                });
            } else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        if (data?.value === undefined) {
            return;
        }
        this.value = data.value;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Background/Background.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Background": ()=>Background
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class Background {
    constructor(){
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BackgroundMaskCover": ()=>BackgroundMaskCover
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class BackgroundMaskCover {
    constructor(){
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BackgroundMask": ()=>BackgroundMask
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class BackgroundMask {
    constructor(){
        this.composite = "destination-out";
        this.cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundMaskCover"]();
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.composite !== undefined) {
            this.composite = data.composite;
        }
        if (data.cover !== undefined) {
            const cover = data.cover, color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(data.cover) ? {
                color: data.cover
            } : data.cover;
            this.cover.load(cover.color !== undefined || cover.image !== undefined ? cover : {
                color: color
            });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/FullScreen/FullScreen.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FullScreen": ()=>FullScreen
});
class FullScreen {
    constructor(){
        this.enable = true;
        this.zIndex = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ClickEvent": ()=>ClickEvent
});
class ClickEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DivType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DivType": ()=>DivType
});
var DivType;
(function(DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType || (DivType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/DivEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DivEvent": ()=>DivEvent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DivType.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class DivEvent {
    constructor(){
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DivType"].circle;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Parallax.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Parallax": ()=>Parallax
});
class Parallax {
    constructor(){
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HoverEvent": ()=>HoverEvent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Parallax.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class HoverEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
        this.parallax = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parallax"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ResizeEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ResizeEvent": ()=>ResizeEvent
});
class ResizeEvent {
    constructor(){
        this.delay = 0.5;
        this.enable = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Events.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Events": ()=>Events
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/DivEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ResizeEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
class Events {
    constructor(){
        this.onClick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClickEvent"]();
        this.onDiv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DivEvent"]();
        this.onHover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverEvent"]();
        this.resize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeEvent"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.onClick.load(data.onClick);
        const onDiv = data.onDiv;
        if (onDiv !== undefined) {
            this.onDiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(onDiv, (t)=>{
                const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DivEvent"]();
                tmp.load(t);
                return tmp;
            });
        }
        this.onHover.load(data.onHover);
        this.resize.load(data.resize);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Modes/Modes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Modes": ()=>Modes
});
class Modes {
    constructor(engine, container){
        this._engine = engine;
        this._container = container;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (!this._container) {
            return;
        }
        const interactors = this._engine.interactors.get(this._container);
        if (!interactors) {
            return;
        }
        for (const interactor of interactors){
            if (!interactor.loadModeOptions) {
                continue;
            }
            interactor.loadModeOptions(this, data);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Interactivity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Interactivity": ()=>Interactivity
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/InteractivityDetect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Modes/Modes.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class Interactivity {
    constructor(engine, container){
        this.detectsOn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractivityDetect"].window;
        this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Events"]();
        this.modes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modes"](engine, container);
    }
    load(data) {
        if (!data) {
            return;
        }
        const detectsOn = data.detectsOn;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ManualParticle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ManualParticle": ()=>ManualParticle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const defaultPosition = 50;
class ManualParticle {
    load(data) {
        if (!data) {
            return;
        }
        if (data.position) {
            this.position = {
                x: data.position.x ?? defaultPosition,
                y: data.position.y ?? defaultPosition,
                mode: data.position.mode ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PixelMode"].percent
            };
        }
        if (data.options) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ResponsiveMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ResponsiveMode": ()=>ResponsiveMode
});
var ResponsiveMode;
(function(ResponsiveMode) {
    ResponsiveMode["screen"] = "screen";
    ResponsiveMode["canvas"] = "canvas";
})(ResponsiveMode || (ResponsiveMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Responsive.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Responsive": ()=>Responsive
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ResponsiveMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Responsive {
    constructor(){
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveMode"].canvas;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.mode !== undefined) {
            if (data.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen) {
                this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen;
            } else {
                this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveMode"].canvas;
            }
        }
        if (data.options !== undefined) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ThemeMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeMode": ()=>ThemeMode
});
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["any"] = "any";
    ThemeMode["dark"] = "dark";
    ThemeMode["light"] = "light";
})(ThemeMode || (ThemeMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/ThemeDefault.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeDefault": ()=>ThemeDefault
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ThemeMode.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ThemeDefault {
    constructor(){
        this.auto = false;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].any;
        this.value = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.auto !== undefined) {
            this.auto = data.auto;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/Theme.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Theme": ()=>Theme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/ThemeDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Theme {
    constructor(){
        this.name = "";
        this.default = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeDefault"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== undefined) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimationOptions": ()=>AnimationOptions,
    "RangedAnimationOptions": ()=>RangedAnimationOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/AnimationMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/StartValueType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class AnimationOptions {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.decay);
        }
        if (data.delay !== undefined) {
            this.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.delay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
class RangedAnimationOptions extends AnimationOptions {
    constructor(){
        super();
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationMode"].auto;
        this.startValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StartValueType"].random;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ColorAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ColorAnimation": ()=>ColorAnimation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class ColorAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationOptions"] {
    constructor(){
        super();
        this.offset = 0;
        this.sync = true;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.offset);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/HslAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HslAnimation": ()=>HslAnimation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ColorAnimation.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class HslAnimation {
    constructor(){
        this.h = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorAnimation"]();
        this.s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorAnimation"]();
        this.l = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorAnimation"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimatableColor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimatableColor": ()=>AnimatableColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/HslAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class AnimatableColor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"] {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HslAnimation"]();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(data) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(data)) {
                color.load({
                    value: data
                });
            } else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
            } else {
                this.animation.load(data.animation);
            }
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/CollisionMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CollisionMode": ()=>CollisionMode
});
var CollisionMode;
(function(CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CollisionsAbsorb": ()=>CollisionsAbsorb
});
class CollisionsAbsorb {
    constructor(){
        this.speed = 2;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CollisionsOverlap": ()=>CollisionsOverlap
});
class CollisionsOverlap {
    constructor(){
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.retries !== undefined) {
            this.retries = data.retries;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimationValueWithRandom": ()=>AnimationValueWithRandom,
    "RangedAnimationValueWithRandom": ()=>RangedAnimationValueWithRandom,
    "ValueWithRandom": ()=>ValueWithRandom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class ValueWithRandom {
    constructor(){
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.value !== undefined) {
            this.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.value);
        }
    }
}
class AnimationValueWithRandom extends ValueWithRandom {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationOptions"]();
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}
class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangedAnimationOptions"]();
    }
    load(data) {
        super.load(data);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesBounceFactor": ()=>ParticlesBounceFactor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ParticlesBounceFactor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueWithRandom"] {
    constructor(){
        super();
        this.value = 1;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesBounce": ()=>ParticlesBounce
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ParticlesBounce {
    constructor(){
        this.horizontal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesBounceFactor"]();
        this.vertical = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesBounceFactor"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/Collisions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Collisions": ()=>Collisions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/CollisionMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
class Collisions {
    constructor(){
        this.absorb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CollisionsAbsorb"]();
        this.bounce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesBounce"]();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CollisionMode"].bounce;
        this.overlap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CollisionsOverlap"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.maxSpeed);
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Effect/Effect.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Effect": ()=>Effect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class Effect {
    constructor(){
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = [];
    }
    load(data) {
        if (!data) {
            return;
        }
        const options = data.options;
        if (options !== undefined) {
            for(const effect in options){
                const item = options[effect];
                if (item) {
                    this.options[effect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])(this.options[effect] ?? {}, item);
                }
            }
        }
        if (data.close !== undefined) {
            this.close = data.close;
        }
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAngle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveAngle": ()=>MoveAngle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveAngle {
    constructor(){
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.offset);
        }
        if (data.value !== undefined) {
            this.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.value);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAttract.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveAttract": ()=>MoveAttract
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveAttract {
    constructor(){
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000
        };
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.rotate) {
            const rotateX = data.rotate.x;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            const rotateY = data.rotate.y;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveCenter.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveCenter": ()=>MoveCenter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveCenter {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PixelMode"].percent;
        this.radius = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.x !== undefined) {
            this.x = data.x;
        }
        if (data.y !== undefined) {
            this.y = data.y;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveGravity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveGravity": ()=>MoveGravity
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveGravity {
    constructor(){
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.inverse !== undefined) {
            this.inverse = data.inverse;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.maxSpeed);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Path/MovePath.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MovePath": ()=>MovePath
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class MovePath {
    constructor(){
        this.clamp = true;
        this.delay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueWithRandom"]();
        this.enable = false;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.clamp !== undefined) {
            this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])(this.options, data.options);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveTrailFill.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveTrailFill": ()=>MoveTrailFill
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveTrailFill {
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveTrail.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MoveTrail": ()=>MoveTrail
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrailFill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveTrailFill.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class MoveTrail {
    constructor(){
        this.enable = false;
        this.length = 10;
        this.fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrailFill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveTrailFill"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.fill !== undefined) {
            this.fill.load(data.fill);
        }
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OutMode": ()=>OutMode
});
var OutMode;
(function(OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["none"] = "none";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
    OutMode["split"] = "split";
})(OutMode || (OutMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/OutModes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OutModes": ()=>OutModes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class OutModes {
    constructor(){
        this.default = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutMode"].out;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Spin.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Spin": ()=>Spin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Spin {
    constructor(){
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.position) {
            this.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.position);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Move.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Move": ()=>Move
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAngle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAttract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveCenter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveGravity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Path/MovePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveTrail.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/OutModes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Spin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
class Move {
    constructor(){
        this.angle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveAngle"]();
        this.attract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveAttract"]();
        this.center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveCenter"]();
        this.decay = 0;
        this.distance = {};
        this.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveGravity"]();
        this.path = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MovePath"]();
        this.outModes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutModes"]();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spin"]();
        this.straight = false;
        this.trail = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveTrail"]();
        this.vibrate = false;
        this.warp = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.angle.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(data.angle) ? {
            value: data.angle
        } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== undefined) {
            this.decay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.decay);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.distance !== undefined) {
            this.distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(data.distance) ? {
                horizontal: data.distance,
                vertical: data.distance
            } : {
                ...data.distance
            };
        }
        if (data.drift !== undefined) {
            this.drift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.drift);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outModes = data.outModes;
        if (outModes !== undefined) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(outModes)) {
                this.outModes.load(outModes);
            } else {
                this.outModes.load({
                    default: outModes
                });
            }
        }
        this.path.load(data.path);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.speed !== undefined) {
            this.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OpacityAnimation": ()=>OpacityAnimation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class OpacityAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangedAnimationOptions"] {
    constructor(){
        super();
        this.destroy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DestroyType"].none;
        this.speed = 2;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/Opacity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Opacity": ()=>Opacity
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Opacity extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangedAnimationValueWithRandom"] {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpacityAnimation"]();
        this.value = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        const animation = data.animation;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesDensity": ()=>ParticlesDensity
});
class ParticlesDensity {
    constructor(){
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const width = data.width;
        if (width !== undefined) {
            this.width = width;
        }
        const height = data.height;
        if (height !== undefined) {
            this.height = height;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/LimitMode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LimitMode": ()=>LimitMode
});
var LimitMode;
(function(LimitMode) {
    LimitMode["delete"] = "delete";
    LimitMode["wait"] = "wait";
})(LimitMode || (LimitMode = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesNumberLimit": ()=>ParticlesNumberLimit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/LimitMode.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ParticlesNumberLimit {
    constructor(){
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitMode"].delete;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesNumber": ()=>ParticlesNumber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class ParticlesNumber {
    constructor(){
        this.density = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesDensity"]();
        this.limit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesNumberLimit"]();
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.density.load(data.density);
        this.limit.load(data.limit);
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shadow.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Shadow": ()=>Shadow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class Shadow {
    constructor(){
        this.blur = 0;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0
        };
        this.color.value = "#000";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shape/Shape.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Shape": ()=>Shape
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class Shape {
    constructor(){
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
    }
    load(data) {
        if (!data) {
            return;
        }
        const options = data.options;
        if (options !== undefined) {
            for(const shape in options){
                const item = options[shape];
                if (item) {
                    this.options[shape] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])(this.options[shape] ?? {}, item);
                }
            }
        }
        if (data.close !== undefined) {
            this.close = data.close;
        }
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/SizeAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SizeAnimation": ()=>SizeAnimation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class SizeAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangedAnimationOptions"] {
    constructor(){
        super();
        this.destroy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DestroyType"].none;
        this.speed = 5;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/Size.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Size": ()=>Size
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/SizeAnimation.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Size extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangedAnimationValueWithRandom"] {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SizeAnimation"]();
        this.value = 3;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Stroke.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Stroke": ()=>Stroke
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimatableColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Stroke {
    constructor(){
        this.width = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatableColor"].create(this.color, data.color);
        }
        if (data.width !== undefined) {
            this.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.width);
        }
        if (data.opacity !== undefined) {
            this.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.opacity);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ZIndex": ()=>ZIndex
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ZIndex extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueWithRandom"] {
    constructor(){
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.opacityRate !== undefined) {
            this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== undefined) {
            this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== undefined) {
            this.velocityRate = data.velocityRate;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ParticlesOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesOptions": ()=>ParticlesOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimatableColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/Collisions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Effect$2f$Effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Effect/Effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Move.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/Opacity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shape/Shape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/Size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Stroke.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
class ParticlesOptions {
    constructor(engine, container){
        this._engine = engine;
        this._container = container;
        this.bounce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesBounce"]();
        this.collisions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collisions"]();
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatableColor"]();
        this.color.value = "#fff";
        this.effect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Effect$2f$Effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"]();
        this.groups = {};
        this.move = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Move"]();
        this.number = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesNumber"]();
        this.opacity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Opacity"]();
        this.reduceDuplicates = false;
        this.shadow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shadow"]();
        this.shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
        this.size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Size"]();
        this.stroke = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stroke"]();
        this.zIndex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZIndex"]();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.groups !== undefined) {
            for (const group of Object.keys(data.groups)){
                if (!Object.hasOwn(data.groups, group)) {
                    continue;
                }
                const item = data.groups[group];
                if (item !== undefined) {
                    this.groups[group] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])(this.groups[group] ?? {}, item);
                }
            }
        }
        if (data.reduceDuplicates !== undefined) {
            this.reduceDuplicates = data.reduceDuplicates;
        }
        this.bounce.load(data.bounce);
        this.color.load(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatableColor"].create(this.color, data.color));
        this.effect.load(data.effect);
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        this.collisions.load(data.collisions);
        if (data.interactivity !== undefined) {
            this.interactivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.interactivity);
        }
        const strokeToLoad = data.stroke;
        if (strokeToLoad) {
            this.stroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(strokeToLoad, (t)=>{
                const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stroke"]();
                tmp.load(t);
                return tmp;
            });
        }
        if (this._container) {
            const updaters = this._engine.updaters.get(this._container);
            if (updaters) {
                for (const updater of updaters){
                    if (updater.loadOptions) {
                        updater.loadOptions(this, data);
                    }
                }
            }
            const interactors = this._engine.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors){
                    if (interactor.loadParticlesOptions) {
                        interactor.loadParticlesOptions(this, data);
                    }
                }
            }
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "loadOptions": ()=>loadOptions,
    "loadParticlesOptions": ()=>loadParticlesOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ParticlesOptions.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr){
        options.load(sourceOptions);
    }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
    const options = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticlesOptions"](engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Options.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Options": ()=>Options
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Background/Background.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/FullScreen/FullScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Interactivity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ManualParticle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Responsive.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ResponsiveMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/Theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ThemeMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
class Options {
    constructor(engine, container){
        this._findDefaultTheme = (mode)=>{
            return this.themes.find((theme)=>theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme)=>theme.default.value && theme.default.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].any);
        };
        this._importPreset = (preset)=>{
            this.load(this._engine.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Background"]();
        this.backgroundMask = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundMask"]();
        this.clear = true;
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FullScreen"]();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Interactivity"](engine, container);
        this.manualParticles = [];
        this.particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadParticlesOptions"])(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.preset !== undefined) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.preset, (preset)=>this._importPreset(preset));
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.clear !== undefined) {
            this.clear = data.clear;
        }
        if (data.key !== undefined) {
            this.key = data.key;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        if (data.delay !== undefined) {
            this.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.delay);
        }
        const detectRetina = data.detectRetina;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        if (data.duration !== undefined) {
            this.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(data.duration);
        }
        const fpsLimit = data.fpsLimit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== undefined) {
            this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== undefined) {
            this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = data.fullScreen;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBoolean"])(fullScreen)) {
            this.fullScreen.enable = fullScreen;
        } else {
            this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles) {
            this.manualParticles = data.manualParticles.map((t)=>{
                const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManualParticle"]();
                tmp.load(t);
                return tmp;
            });
        }
        this.particles.load(data.particles);
        this.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])(this.style, data.style);
        this._engine.loadOptions(this, data);
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
        const interactors = this._engine.interactors.get(this._container);
        if (interactors) {
            for (const interactor of interactors){
                if (interactor.loadOptions) {
                    interactor.loadOptions(this, data);
                }
            }
        }
        if (data.responsive !== undefined) {
            for (const responsive of data.responsive){
                const optResponsive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Responsive"]();
                optResponsive.load(responsive);
                this.responsive.push(optResponsive);
            }
        }
        this.responsive.sort((a, b)=>a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) {
            for (const theme of data.themes){
                const existingTheme = this.themes.find((t)=>t.name === theme.name);
                if (!existingTheme) {
                    const optTheme = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"]();
                    optTheme.load(theme);
                    this.themes.push(optTheme);
                } else {
                    existingTheme.load(theme);
                }
            }
        }
        this.defaultThemes.dark = this._findDefaultTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].dark)?.name;
        this.defaultThemes.light = this._findDefaultTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].light)?.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t)=>t.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions?.options);
        return responsiveOptions?.maxWidth;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme)=>theme.name === name);
            if (chosenTheme) {
                this.load(chosenTheme.options);
            }
        } else {
            const mediaMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeMatchMedia"])("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch?.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].dark : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].light);
            if (defaultTheme) {
                this.load(defaultTheme.options);
            }
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/InteractorType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InteractorType": ()=>InteractorType
});
var InteractorType;
(function(InteractorType) {
    InteractorType["external"] = "external";
    InteractorType["particles"] = "particles";
})(InteractorType || (InteractorType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/InteractionManager.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InteractionManager": ()=>InteractionManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/InteractorType.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class InteractionManager {
    constructor(engine, container){
        this.container = container;
        this._engine = engine;
        this._interactors = [];
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    externalInteract(delta) {
        for (const interactor of this._externalInteractors){
            if (interactor.isEnabled()) {
                interactor.interact(delta);
            }
        }
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors){
            interactor.handleClickMode?.(mode);
        }
    }
    async init() {
        this._interactors = await this._engine.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors){
            switch(interactor.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractorType"].external:
                    this._externalInteractors.push(interactor);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractorType"].particles:
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors){
            interactor.clear(particle, delta);
        }
        for (const interactor of this._particleInteractors){
            if (interactor.isEnabled(particle)) {
                interactor.interact(particle, delta);
            }
        }
    }
    reset(particle) {
        for (const interactor of this._externalInteractors){
            if (interactor.isEnabled()) {
                interactor.reset(particle);
            }
        }
        for (const interactor of this._particleInteractors){
            if (interactor.isEnabled(particle)) {
                interactor.reset(particle);
            }
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/ParticleOutType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticleOutType": ()=>ParticleOutType
});
var ParticleOutType;
(function(ParticleOutType) {
    ParticleOutType["normal"] = "normal";
    ParticleOutType["inside"] = "inside";
    ParticleOutType["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Particle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Particle": ()=>Particle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Interactivity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/ParticleOutType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/CanvasUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultRetryCount = 0, double = 2, half = 0.5, squareExp = 2, randomString = "random";
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    if (!effectData) {
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({
        close: effectOptions.close,
        fill: effectOptions.fill
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    if (!shapeData) {
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepExtend"])({
        close: shapeOptions.close,
        fill: shapeOptions.fill
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInArray"])(data.outMode, data.checkModes)) {
        return;
    }
    const diameter = data.radius * double;
    if (data.coord > data.maxCoord - diameter) {
        data.setCb(-data.radius);
    } else if (data.coord < diameter) {
        data.setCb(data.radius);
    }
}
class Particle {
    constructor(engine, container){
        this.container = container;
        this._calcPosition = (container, position, zIndex, tryCount = defaultRetryCount)=>{
            for (const [, plugin] of container.plugins){
                const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
                if (pluginPos) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3d"].create(pluginPos.x, pluginPos.y, zIndex);
                }
            }
            const canvasSize = container.canvas.size, exactPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExactPositionOrRandomFromSize"])({
                size: canvasSize,
                position: position
            }), pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3d"].create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutMode"].bounce
                    ],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: (value)=>pos.x += value,
                    radius
                });
            }, fixVertical = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutMode"].bounce
                    ],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: (value)=>pos.y += value,
                    radius
                });
            };
            fixHorizontal(outModes.left ?? outModes.default);
            fixHorizontal(outModes.right ?? outModes.default);
            fixVertical(outModes.top ?? outModes.default);
            fixVertical(outModes.bottom ?? outModes.default);
            if (this._checkOverlap(pos, tryCount)) {
                const increment = 1;
                return this._calcPosition(container, undefined, zIndex, tryCount + increment);
            }
            return pos;
        };
        this._calculateVelocity = ()=>{
            const baseVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParticleBaseVelocity"])(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
            if (moveOptions.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].inside || moveOptions.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].outside) {
                return res;
            }
            const rad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degToRad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.angle.value)), radOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degToRad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.angle.offset)), range = {
                left: radOffset - rad * half,
                right: radOffset + rad * half
            };
            if (!moveOptions.straight) {
                res.angle += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRangeValue"])(range.left, range.right));
            }
            if (moveOptions.random && typeof moveOptions.speed === "number") {
                res.length *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])();
            }
            return res;
        };
        this._checkOverlap = (pos, tryCount = defaultRetryCount)=>{
            const collisionsOptions = this.options.collisions, radius = this.getRadius();
            if (!collisionsOptions.enable) {
                return false;
            }
            const overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) {
                return false;
            }
            const retries = overlapOptions.retries, minRetries = 0;
            if (retries >= minRetries && tryCount > retries) {
                throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} particle is overlapping and can't be placed`);
            }
            return !!this.container.particles.find((particle)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistance"])(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color)=>{
            if (!color || !this.roll || !this.backColor && !this.roll.alter) {
                return color;
            }
            const rollFactor = 1, none = 0, backFactor = this.roll.horizontal && this.roll.vertical ? double * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double;
            if (!rolled) {
                return color;
            }
            if (this.backColor) {
                return this.backColor;
            }
            if (this.roll.alter) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alterHsl"])(color, this.roll.alter.type, this.roll.alter.value);
            }
            return color;
        };
        this._initPosition = (position)=>{
            const container = this.container, zIndexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(this.options.zIndex.value), minZ = 0;
            this.position = this._calcPosition(container, position, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(zIndexValue, minZ, container.zLayers));
            this.initialPosition = this.position.copy();
            const canvasSize = container.canvas.size, defaultRadius = 0;
            this.moveCenter = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPosition"])(this.options.move.center, canvasSize),
                radius: this.options.move.center.radius ?? defaultRadius,
                mode: this.options.move.center.mode ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PixelMode"].percent
            };
            this.direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParticleDirectionAngle"])(this.options.move.direction, this.position, this.moveCenter);
            switch(this.options.move.direction){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].inside:
                    this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleOutType"].inside;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].outside:
                    this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleOutType"].outside;
                    break;
            }
            this.offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector"].origin;
        };
        this._engine = engine;
    }
    destroy(override) {
        if (this.unbreakable || this.destroyed) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
        shapeDrawer?.particleDestroy?.(this);
        for (const [, plugin] of container.plugins){
            plugin.particleDestroyed?.(this, override);
        }
        for (const updater of container.particles.updaters){
            updater.particleDestroyed?.(this, override);
        }
        pathGenerator?.reset(this);
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].particleDestroyed, {
            container: this.container,
            data: {
                particle: this
            }
        });
    }
    draw(delta) {
        const container = this.container, canvas = container.canvas;
        for (const [, plugin] of container.plugins){
            canvas.drawParticlePlugin(plugin, this, delta);
        }
        canvas.drawParticle(this, delta);
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHslFromAnimation"])(this.color));
    }
    getMass() {
        return this.getRadius() ** squareExp * Math.PI * half;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        };
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHslFromAnimation"])(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.effectClose = true;
        this.effectFill = true;
        this.shapeClose = true;
        this.shapeFill = true;
        this.pathRotation = false;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.isRotating = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {}
        };
        this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleOutType"].normal;
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadParticlesOptions"])(this._engine, container, mainOptions.particles), { reduceDuplicates } = particlesOptions, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
        this.effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(effectType, this.id, reduceDuplicates);
        this.shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(shapeType, this.id, reduceDuplicates);
        const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
        if (overrideOptions) {
            if (overrideOptions.effect?.type) {
                const overrideEffectType = overrideOptions.effect.type, effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(overrideEffectType, this.id, reduceDuplicates);
                if (effect) {
                    this.effect = effect;
                    effectOptions.load(overrideOptions.effect);
                }
            }
            if (overrideOptions.shape?.type) {
                const overrideShapeType = overrideOptions.shape.type, shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(overrideShapeType, this.id, reduceDuplicates);
                if (shape) {
                    this.shape = shape;
                    shapeOptions.load(overrideOptions.shape);
                }
            }
        }
        if (this.effect === randomString) {
            const availableEffects = [
                ...this.container.effectDrawers.keys()
            ];
            this.effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
        }
        if (this.shape === randomString) {
            const availableShapes = [
                ...this.container.shapeDrawers.keys()
            ];
            this.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
        }
        this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
        this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const effectData = this.effectData;
        if (effectData) {
            particlesOptions.load(effectData.particles);
        }
        const shapeData = this.shapeData;
        if (shapeData) {
            particlesOptions.load(shapeData.particles);
        }
        const interactivity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Interactivity"](engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.effectFill = effectData?.fill ?? particlesOptions.effect.fill;
        this.effectClose = effectData?.close ?? particlesOptions.effect.close;
        this.shapeFill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(pathOptions.delay.value) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
                this.pathGenerator.init(container);
            }
        }
        container.retina.initParticle(this);
        this.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initParticleNumericAnimationValue"])(this.options.size, pxRatio);
        this.bubble = {
            inRange: false
        };
        this.slow = {
            inRange: false,
            factor: 1
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        const decayOffset = 1;
        this.moveDecay = decayOffset - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(this.options.move.decay);
        const particles = container.particles;
        particles.setLastZIndex(this.position.z);
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let effectDrawer = container.effectDrawers.get(this.effect);
        if (!effectDrawer) {
            effectDrawer = this._engine.getEffectDrawer(this.effect);
            if (effectDrawer) {
                container.effectDrawers.set(this.effect, effectDrawer);
            }
        }
        if (effectDrawer?.loadEffect) {
            effectDrawer.loadEffect(this);
        }
        let shapeDrawer = container.shapeDrawers.get(this.shape);
        if (!shapeDrawer) {
            shapeDrawer = this._engine.getShapeDrawer(this.shape);
            if (shapeDrawer) {
                container.shapeDrawers.set(this.shape, shapeDrawer);
            }
        }
        if (shapeDrawer?.loadShape) {
            shapeDrawer.loadShape(this);
        }
        const sideCountFunc = shapeDrawer?.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        this.spawning = false;
        this.shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this.options.shadow.color);
        for (const updater of particles.updaters){
            updater.init(this);
        }
        for (const mover of particles.movers){
            mover.init?.(this);
        }
        effectDrawer?.particleInit?.(container, this);
        shapeDrawer?.particleInit?.(container, this);
        for (const [, plugin] of container.plugins){
            plugin.particleCreated?.(this);
        }
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        for (const updater of this.container.particles.updaters){
            updater.reset?.(this);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Point.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Point": ()=>Point
});
class Point {
    constructor(position, particle){
        this.position = position;
        this.particle = particle;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RangeType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RangeType": ()=>RangeType
});
var RangeType;
(function(RangeType) {
    RangeType["circle"] = "circle";
    RangeType["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Ranges.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BaseRange": ()=>BaseRange,
    "Circle": ()=>Circle,
    "Rectangle": ()=>Rectangle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RangeType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const squareExp = 2;
class BaseRange {
    constructor(x, y, type){
        this.position = {
            x: x,
            y: y
        };
        this.type = type;
    }
}
class Circle extends BaseRange {
    constructor(x, y, radius){
        super(x, y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangeType"].circle);
        this.radius = radius;
    }
    contains(point) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistance"])(point, this.position) <= this.radius;
    }
    intersects(range) {
        const pos1 = this.position, pos2 = range.position, distPos = {
            x: Math.abs(pos2.x - pos1.x),
            y: Math.abs(pos2.y - pos1.y)
        }, r = this.radius;
        if (range instanceof Circle || range.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangeType"].circle) {
            const circleRange = range, rSum = r + circleRange.radius, dist = Math.sqrt(distPos.x ** squareExp + distPos.y ** squareExp);
            return rSum > dist;
        } else if (range instanceof Rectangle || range.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangeType"].rectangle) {
            const rectRange = range, { width, height } = rectRange.size, edges = Math.pow(distPos.x - width, squareExp) + Math.pow(distPos.y - height, squareExp);
            return edges <= r ** squareExp || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
        }
        return false;
    }
}
class Rectangle extends BaseRange {
    constructor(x, y, width, height){
        super(x, y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RangeType"].rectangle);
        this.size = {
            height: height,
            width: width
        };
    }
    contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        if (range instanceof Circle) {
            return range.intersects(this);
        }
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : {
            width: 0,
            height: 0
        }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/QuadTree.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "QuadTree": ()=>QuadTree
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Ranges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const half = 0.5, double = 2, subdivideCount = 4;
class QuadTree {
    constructor(rectangle, capacity){
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = ()=>{
            const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity } = this;
            for(let i = 0; i < subdivideCount; i++){
                const fixedIndex = i % double;
                this._subs.push(new QuadTree(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rectangle"](x + width * half * fixedIndex, y + height * half * (Math.round(i * half) - fixedIndex), width * half, height * half), capacity));
            }
            this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    insert(point) {
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) {
            this._subdivide();
        }
        return this._subs.some((sub)=>sub.insert(point));
    }
    query(range, check) {
        const res = [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        for (const p of this._points){
            if (!range.contains(p.position) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistance"])(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
                continue;
            }
            res.push(p.particle);
        }
        if (this._divided) {
            for (const sub of this._subs){
                res.push(...sub.query(range, check));
            }
        }
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Circle"](position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rectangle"](position.x, position.y, size.width, size.height), check);
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Particles.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Particles": ()=>Particles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$InteractionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/InteractionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/LimitMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Particle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Particle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Point.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/QuadTree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Ranges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
const qTreeCapacity = 4, squareExp = 2, defaultRemoveQuantity = 1;
const qTreeRectangle = (canvasSize)=>{
    const { height, width } = canvasSize, posOffset = -0.25, sizeFactor = 1.5;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rectangle"](posOffset * width, posOffset * height, sizeFactor * width, sizeFactor * height);
};
class Particles {
    constructor(engine, container){
        this._addToPool = (...particles)=>{
            this._pool.push(...particles);
        };
        this._applyDensity = (options, manualCount, group)=>{
            const numberOptions = options.number;
            if (!options.number.density?.enable) {
                if (group === undefined) {
                    this._limit = numberOptions.limit.value;
                } else if (numberOptions.limit) {
                    this._groupLimits.set(group, numberOptions.limit.value);
                }
                return;
            }
            const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, minLimit = 0, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t)=>t.group === group).length);
            if (group === undefined) {
                this._limit = numberOptions.limit.value * densityFactor;
            } else {
                this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
            }
            if (particlesCount < particlesNumber) {
                this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            } else if (particlesCount > particlesNumber) {
                this.removeQuantity(particlesCount - particlesNumber, group);
            }
        };
        this._initDensityFactor = (densityOptions)=>{
            const container = this._container, defaultFactor = 1;
            if (!container.canvas.element || !densityOptions.enable) {
                return defaultFactor;
            }
            const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
            return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
        };
        this._pushParticle = (position, overrideOptions, group, initializer)=>{
            try {
                let particle = this._pool.pop();
                if (!particle) {
                    particle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Particle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Particle"](this._engine, this._container);
                }
                particle.init(this._nextId, position, overrideOptions, group);
                let canAdd = true;
                if (initializer) {
                    canAdd = initializer(particle);
                }
                if (!canAdd) {
                    return;
                }
                this._array.push(particle);
                this._zArray.push(particle);
                this._nextId++;
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].particleAdded, {
                    container: this._container,
                    data: {
                        particle
                    }
                });
                return particle;
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogger"])().warning(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} adding particle: ${e}`);
            }
        };
        this._removeParticle = (index, group, override)=>{
            const particle = this._array[index];
            if (!particle || particle.group !== group) {
                return false;
            }
            const zIdx = this._zArray.indexOf(particle), deleteCount = 1;
            this._array.splice(index, deleteCount);
            this._zArray.splice(zIdx, deleteCount);
            particle.destroy(override);
            this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].particleRemoved, {
                container: this._container,
                data: {
                    particle
                }
            });
            this._addToPool(particle);
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this._pool = [];
        this._limit = 0;
        this._groupLimits = new Map();
        this._needsSort = false;
        this._lastZIndex = 0;
        this._interactionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$InteractionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractionManager"](engine, container);
        this._pluginsInitialized = false;
        const canvasSize = container.canvas.size;
        this.quadTree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuadTree"](qTreeRectangle(canvasSize), qTreeCapacity);
        this.movers = [];
        this.updaters = [];
    }
    get count() {
        return this._array.length;
    }
    addManualParticles() {
        const container = this._container, options = container.actualOptions;
        options.manualParticles.forEach((p)=>this.addParticle(p.position ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPosition"])(p.position, container.canvas.size) : undefined, p.options));
    }
    addParticle(position, overrideOptions, group, initializer) {
        const limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === undefined ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count, minLimit = 0;
        if (limit > minLimit) {
            switch(limitMode){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitMode"].delete:
                    {
                        const countOffset = 1, minCount = 0, countToRemove = currentCount + countOffset - limit;
                        if (countToRemove > minCount) {
                            this.removeQuantity(countToRemove);
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitMode"].wait:
                    if (currentCount >= limit) {
                        return;
                    }
                    break;
            }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this._array = [];
        this._zArray = [];
        this._pluginsInitialized = false;
    }
    destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    draw(delta) {
        const container = this._container, canvas = container.canvas;
        canvas.clear();
        this.update(delta);
        for (const [, plugin] of container.plugins){
            canvas.drawPlugin(plugin, delta);
        }
        for (const p of this._zArray){
            p.draw(delta);
        }
    }
    filter(condition) {
        return this._array.filter(condition);
    }
    find(condition) {
        return this._array.find(condition);
    }
    get(index) {
        return this._array[index];
    }
    handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
    }
    async init() {
        const container = this._container, options = container.actualOptions;
        this._lastZIndex = 0;
        this._needsSort = false;
        await this.initPlugins();
        let handled = false;
        for (const [, plugin] of container.plugins){
            handled = plugin.particlesInitialization?.() ?? handled;
            if (handled) {
                break;
            }
        }
        this.addManualParticles();
        if (!handled) {
            const particlesOptions = options.particles, groups = particlesOptions.groups;
            for(const group in groups){
                const groupOptions = groups[group];
                for(let i = this.count, j = 0; j < groupOptions.number?.value && i < particlesOptions.number.value; i++, j++){
                    this.addParticle(undefined, groupOptions, group);
                }
            }
            for(let i = this.count; i < particlesOptions.number.value; i++){
                this.addParticle();
            }
        }
    }
    async initPlugins() {
        if (this._pluginsInitialized) {
            return;
        }
        const container = this._container;
        this.movers = await this._engine.getMovers(container, true);
        this.updaters = await this._engine.getUpdaters(container, true);
        await this._interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators){
            pathGenerator.init(container);
        }
    }
    push(nb, mouse, overrideOptions, group) {
        for(let i = 0; i < nb; i++){
            this.addParticle(mouse?.position, overrideOptions, group);
        }
    }
    async redraw() {
        this.clear();
        await this.init();
        this.draw({
            value: 0,
            factor: 0
        });
    }
    remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = defaultRemoveQuantity, group, override) {
        const minIndex = 0;
        if (index < minIndex || index > this.count) {
            return;
        }
        let deleted = 0;
        for(let i = index; deleted < quantity && i < this.count; i++){
            if (this._removeParticle(i--, group, override)) {
                deleted++;
            }
        }
    }
    removeQuantity(quantity, group) {
        const defaultIndex = 0;
        this.removeAt(defaultIndex, quantity, group);
    }
    setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups, manualCount = 0;
        for(const group in groups){
            this._applyDensity(groups[group], manualCount, group);
        }
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    setLastZIndex(zIndex) {
        this._lastZIndex = zIndex;
        this._needsSort = this._needsSort || this._lastZIndex < zIndex;
    }
    setResizeFactor(factor) {
        this._resizeFactor = factor;
    }
    update(delta) {
        const container = this._container, particlesToDelete = new Set();
        this.quadTree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuadTree"](qTreeRectangle(container.canvas.size), qTreeCapacity);
        for (const [, pathGenerator] of container.pathGenerators){
            pathGenerator.update();
        }
        for (const [, plugin] of container.plugins){
            plugin.update?.(delta);
        }
        const resizeFactor = this._resizeFactor;
        for (const particle of this._array){
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            this._interactionManager.reset(particle);
            for (const [, plugin] of this._container.plugins){
                if (particle.destroyed) {
                    break;
                }
                plugin.particleUpdate?.(particle, delta);
            }
            for (const mover of this.movers){
                if (mover.isEnabled(particle)) {
                    mover.move(particle, delta);
                }
            }
            if (particle.destroyed) {
                particlesToDelete.add(particle);
                continue;
            }
            this.quadTree.insert(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Point"](particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
            const checkDelete = (p)=>!particlesToDelete.has(p);
            this._array = this.filter(checkDelete);
            this._zArray = this._zArray.filter(checkDelete);
            for (const particle of particlesToDelete){
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].particleRemoved, {
                    container: this._container,
                    data: {
                        particle
                    }
                });
            }
            this._addToPool(...particlesToDelete);
        }
        this._interactionManager.externalInteract(delta);
        for (const particle of this._array){
            for (const updater of this.updaters){
                updater.update(particle, delta);
            }
            if (!particle.destroyed && !particle.spawning) {
                this._interactionManager.particlesInteract(particle, delta);
            }
        }
        delete this._resizeFactor;
        if (this._needsSort) {
            const zArray = this._zArray;
            zArray.sort((a, b)=>b.position.z - a.position.z || a.id - b.id);
            const lengthOffset = 1;
            this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
            this._needsSort = false;
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Retina.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Retina": ()=>Retina
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const defaultRatio = 1, defaultReduceFactor = 1;
class Retina {
    constructor(container){
        this.container = container;
        this.pixelRatio = defaultRatio;
        this.reduceFactor = defaultReduceFactor;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSsr"])() ? defaultRatio : window.devicePixelRatio;
        this.reduceFactor = defaultReduceFactor;
        const ratio = this.pixelRatio, canvas = container.canvas;
        if (canvas.element) {
            const element = canvas.element;
            canvas.size.width = element.offsetWidth * ratio;
            canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.moveDrift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.drift) * ratio;
        props.moveSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.gravity.maxSpeed) * ratio;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Container.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Container": ()=>Container
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Canvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Canvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$EventListeners$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/EventListeners.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Options.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Particles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Particles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Retina$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Retina.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
function guardCheck(container) {
    return container && !container.destroyed;
}
const defaultFps = 60;
function initDelta(value, fpsLimit = defaultFps, smooth = false) {
    return {
        value,
        factor: smooth ? defaultFps / fpsLimit : defaultFps * value / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]
    };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Options"](engine, container);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadOptions"])(options, ...sourceOptionsArr);
    return options;
}
class Container {
    constructor(engine, id, sourceOptions){
        this._intersectionManager = (entries)=>{
            if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
                return;
            }
            for (const entry of entries){
                if (entry.target !== this.interactivity.element) {
                    continue;
                }
                if (entry.isIntersecting) {
                    void this.play();
                } else {
                    this.pause();
                }
            }
        };
        this._nextFrame = (timestamp)=>{
            try {
                if (!this._smooth && this._lastFrameTime !== undefined && timestamp < this._lastFrameTime + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"] / this.fpsLimit) {
                    this.draw(false);
                    return;
                }
                this._lastFrameTime ??= timestamp;
                const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
                this.addLifeTime(delta.value);
                this._lastFrameTime = timestamp;
                if (delta.value > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]) {
                    this.draw(false);
                    return;
                }
                this.particles.draw(delta);
                if (!this.alive()) {
                    this.destroy();
                    return;
                }
                if (this.animationStatus) {
                    this.draw(false);
                }
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogger"])().error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} in animation loop`, e);
            }
        };
        this._engine = engine;
        this.id = Symbol(id);
        this.fpsLimit = 120;
        this._smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this._lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._clickHandlers = new Map();
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Retina$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Retina"](this);
        this.canvas = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Canvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Canvas"](this);
        this.particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Particles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Particles"](this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false
            }
        };
        this.plugins = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$EventListeners$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventListeners"](this);
        this._intersectionObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeIntersectionObserver"])((entries)=>this._intersectionManager(entries));
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerBuilt, {
            container: this
        });
    }
    get animationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) {
            return;
        }
        const el = this.interactivity.element;
        if (!el) {
            return;
        }
        const clickOrTouchHandler = (e, pos, radius)=>{
            if (!guardCheck(this)) {
                return;
            }
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        }, clickHandler = (e)=>{
            if (!guardCheck(this)) {
                return;
            }
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY
            }, radius = 1;
            clickOrTouchHandler(e, pos, radius);
        }, touchStartHandler = ()=>{
            if (!guardCheck(this)) {
                return;
            }
            touched = true;
            touchMoved = false;
        }, touchMoveHandler = ()=>{
            if (!guardCheck(this)) {
                return;
            }
            touchMoved = true;
        }, touchEndHandler = (e)=>{
            if (!guardCheck(this)) {
                return;
            }
            if (touched && !touchMoved) {
                const touchEvent = e, lengthOffset = 1;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - lengthOffset];
                    if (!lastTouch) {
                        return;
                    }
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, minCoordinate = 0, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        }, touchCancelHandler = ()=>{
            if (!guardCheck(this)) {
                return;
            }
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        this._clickHandlers.set("click", clickHandler);
        this._clickHandlers.set("touchstart", touchStartHandler);
        this._clickHandlers.set("touchmove", touchMoveHandler);
        this._clickHandlers.set("touchend", touchEndHandler);
        this._clickHandlers.set("touchcancel", touchCancelHandler);
        for (const [key, handler] of this._clickHandlers){
            el.addEventListener(key, handler);
        }
    }
    addLifeTime(value) {
        this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
            return false;
        }
        this.pathGenerators.set(key, generator);
        return true;
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration;
    }
    clearClickHandlers() {
        if (!guardCheck(this)) {
            return;
        }
        for (const [key, handler] of this._clickHandlers){
            this.interactivity.element?.removeEventListener(key, handler);
        }
        this._clickHandlers.clear();
    }
    destroy(remove = true) {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        this.clearClickHandlers();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, effectDrawer] of this.effectDrawers){
            effectDrawer.destroy?.(this);
        }
        for (const [, shapeDrawer] of this.shapeDrawers){
            shapeDrawer.destroy?.(this);
        }
        for (const key of this.effectDrawers.keys()){
            this.effectDrawers.delete(key);
        }
        for (const key of this.shapeDrawers.keys()){
            this.shapeDrawers.delete(key);
        }
        this._engine.clearPlugins(this);
        this.destroyed = true;
        if (remove) {
            const mainArr = this._engine.items, idx = mainArr.findIndex((t)=>t === this), minIndex = 0;
            if (idx >= minIndex) {
                const deleteCount = 1;
                mainArr.splice(idx, deleteCount);
            }
        }
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerDestroyed, {
            container: this
        });
    }
    draw(force) {
        if (!guardCheck(this)) {
            return;
        }
        let refreshTime = force;
        const frame = (timestamp)=>{
            if (refreshTime) {
                this._lastFrameTime = undefined;
                refreshTime = false;
            }
            this._nextFrame(timestamp);
        };
        this._drawAnimationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])((timestamp)=>frame(timestamp));
    }
    async export(type, options = {}) {
        for (const [, plugin] of this.plugins){
            if (!plugin.export) {
                continue;
            }
            const res = await plugin.export(type, options);
            if (!res.supported) {
                continue;
            }
            return res.blob;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogger"])().error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} - Export plugin with type ${type} not found`);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) {
            return;
        }
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins){
            plugin.handleClickMode?.(mode);
        }
    }
    async init() {
        if (!guardCheck(this)) {
            return;
        }
        const effects = this._engine.getSupportedEffects();
        for (const type of effects){
            const drawer = this._engine.getEffectDrawer(type);
            if (drawer) {
                this.effectDrawers.set(type, drawer);
            }
        }
        const shapes = this._engine.getSupportedShapes();
        for (const type of shapes){
            const drawer = this._engine.getShapeDrawer(type);
            if (drawer) {
                this.shapeDrawers.set(type, drawer);
            }
        }
        await this.particles.initPlugins();
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = await this._engine.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins){
            this.plugins.set(id, plugin);
        }
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        const { zLayers, duration, delay, fpsLimit, smooth } = this.actualOptions;
        this.zLayers = zLayers;
        this._duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(duration) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        this._delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        this._lifeTime = 0;
        const defaultFpsLimit = 120, minFpsLimit = 0;
        this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
        this._smooth = smooth;
        for (const [, drawer] of this.effectDrawers){
            await drawer.init?.(this);
        }
        for (const [, drawer] of this.shapeDrawers){
            await drawer.init?.(this);
        }
        for (const [, plugin] of this.plugins){
            await plugin.init?.();
        }
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerInit, {
            container: this
        });
        await this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins){
            plugin.particlesSetup?.();
        }
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].particlesSetup, {
            container: this
        });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) {
            return;
        }
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) {
            return;
        }
        if (this._drawAnimationFrame !== undefined) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelAnimation"])(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) {
            return;
        }
        for (const [, plugin] of this.plugins){
            plugin.pause?.();
        }
        if (!this.pageHidden) {
            this._paused = true;
        }
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerPaused, {
            container: this
        });
    }
    play(force) {
        if (!guardCheck(this)) {
            return;
        }
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) {
            this._paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins){
                if (plugin.play) {
                    plugin.play();
                }
            }
        }
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerPlay, {
            container: this
        });
        this.draw(needsUpdate ?? false);
    }
    async refresh() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        return this.start();
    }
    async reset(sourceOptions) {
        if (!guardCheck(this)) {
            return;
        }
        this._initialSourceOptions = sourceOptions;
        this._sourceOptions = sourceOptions;
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        return this.refresh();
    }
    async start() {
        if (!guardCheck(this) || this.started) {
            return;
        }
        await this.init();
        this.started = true;
        await new Promise((resolve)=>{
            const start = async ()=>{
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
                    this._intersectionObserver.observe(this.interactivity.element);
                }
                for (const [, plugin] of this.plugins){
                    await plugin.start?.();
                }
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerStarted, {
                    container: this
                });
                this.play();
                resolve();
            };
            this._delayTimeout = setTimeout(()=>void start(), this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) {
            return;
        }
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.unobserve(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins){
            plugin.stop?.();
        }
        for (const key of this.plugins.keys()){
            this.plugins.delete(key);
        }
        this._sourceOptions = this._options;
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].containerStopped, {
            container: this
        });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this._responsiveMaxWidth === newMaxWidth) {
            return false;
        }
        this._responsiveMaxWidth = newMaxWidth;
        return true;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/EventDispatcher.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EventDispatcher": ()=>EventDispatcher
});
class EventDispatcher {
    constructor(){
        this._listeners = new Map();
    }
    addEventListener(type, listener) {
        this.removeEventListener(type, listener);
        let arr = this._listeners.get(type);
        if (!arr) {
            arr = [];
            this._listeners.set(type, arr);
        }
        arr.push(listener);
    }
    dispatchEvent(type, args) {
        const listeners = this._listeners.get(type);
        listeners?.forEach((handler)=>handler(args));
    }
    hasEventListener(type) {
        return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
        if (!type) {
            this._listeners = new Map();
        } else {
            this._listeners.delete(type);
        }
    }
    removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) {
            return;
        }
        const length = arr.length, idx = arr.indexOf(listener), minIndex = 0;
        if (idx < minIndex) {
            return;
        }
        const deleteCount = 1;
        if (length === deleteCount) {
            this._listeners.delete(type);
        } else {
            arr.splice(idx, deleteCount);
        }
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Engine.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Engine": ()=>Engine
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$EventDispatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/EventDispatcher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function getItemsFromInitializer(container, map, initializers, force = false) {
    let res = map.get(container);
    if (!res || force) {
        res = await Promise.all([
            ...initializers.values()
        ].map((t)=>t(container)));
        map.set(container, res);
    }
    return res;
}
async function getDataFromUrl(data) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(data.url, data.index);
    if (!url) {
        return data.fallback;
    }
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogger"])().error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} ${response.status} while retrieving config file`);
    return data.fallback;
}
const generatedTrue = "true", generatedFalse = "false", canvasTag = "canvas", getCanvasFromContainer = (domContainer)=>{
    let canvasEl;
    if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag) {
        canvasEl = domContainer;
        if (!canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]]) {
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]] = generatedFalse;
        }
    } else {
        const existingCanvases = domContainer.getElementsByTagName(canvasTag);
        if (existingCanvases.length) {
            const firstIndex = 0;
            canvasEl = existingCanvases[firstIndex];
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]] = generatedFalse;
        } else {
            canvasEl = document.createElement(canvasTag);
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]] = generatedTrue;
            domContainer.appendChild(canvasEl);
        }
    }
    const fullPercent = "100%";
    if (!canvasEl.style.width) {
        canvasEl.style.width = fullPercent;
    }
    if (!canvasEl.style.height) {
        canvasEl.style.height = fullPercent;
    }
    return canvasEl;
}, getDomContainer = (id, source)=>{
    let domContainer = source ?? document.getElementById(id);
    if (domContainer) {
        return domContainer;
    }
    domContainer = document.createElement("div");
    domContainer.id = id;
    domContainer.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatedAttribute"]] = generatedTrue;
    document.body.append(domContainer);
    return domContainer;
};
class Engine {
    constructor(){
        this._configs = new Map();
        this._domArray = [];
        this._eventDispatcher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$EventDispatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventDispatcher"]();
        this._initialized = false;
        this.plugins = [];
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map()
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this.pathGenerators = new Map();
    }
    get configs() {
        const res = {};
        for (const [name, config] of this._configs){
            res[name] = config;
        }
        return res;
    }
    get items() {
        return this._domArray;
    }
    get version() {
        return "3.5.0";
    }
    addConfig(config) {
        const key = config.key ?? config.name ?? "default";
        this._configs.set(key, config);
        this._eventDispatcher.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].configAdded, {
            data: {
                name: key,
                config
            }
        });
    }
    async addEffect(effect, drawer, refresh = true) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(effect, (type)=>{
            if (!this.getEffectDrawer(type)) {
                this.effectDrawers.set(type, drawer);
            }
        });
        await this.refresh(refresh);
    }
    addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer, refresh = true) {
        this._initializers.interactors.set(name, interactorInitializer);
        await this.refresh(refresh);
    }
    async addMover(name, moverInitializer, refresh = true) {
        this._initializers.movers.set(name, moverInitializer);
        await this.refresh(refresh);
    }
    async addParticleUpdater(name, updaterInitializer, refresh = true) {
        this._initializers.updaters.set(name, updaterInitializer);
        await this.refresh(refresh);
    }
    async addPathGenerator(name, generator, refresh = true) {
        if (!this.getPathGenerator(name)) {
            this.pathGenerators.set(name, generator);
        }
        await this.refresh(refresh);
    }
    async addPlugin(plugin, refresh = true) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
        await this.refresh(refresh);
    }
    async addPreset(preset, options, override = false, refresh = true) {
        if (override || !this.getPreset(preset)) {
            this.presets.set(preset, options);
        }
        await this.refresh(refresh);
    }
    async addShape(drawer, refresh = true) {
        for (const validType of drawer.validTypes){
            if (this.getShapeDrawer(validType)) {
                continue;
            }
            this.shapeDrawers.set(validType, drawer);
        }
        await this.refresh(refresh);
    }
    clearPlugins(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
    }
    dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
        return this.items;
    }
    domItem(index) {
        return this.item(index);
    }
    async getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of this.plugins){
            if (plugin.needsPlugin(container.actualOptions)) {
                res.set(plugin.id, await plugin.getPlugin(container));
            }
        }
        return res;
    }
    getEffectDrawer(type) {
        return this.effectDrawers.get(type);
    }
    async getInteractors(container, force = false) {
        return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    }
    async getMovers(container, force = false) {
        return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
        return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
        return this.plugins.find((t)=>t.id === plugin);
    }
    getPreset(preset) {
        return this.presets.get(preset);
    }
    getShapeDrawer(type) {
        return this.shapeDrawers.get(type);
    }
    getSupportedEffects() {
        return this.effectDrawers.keys();
    }
    getSupportedShapes() {
        return this.shapeDrawers.keys();
    }
    async getUpdaters(container, force = false) {
        return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    }
    init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
    }
    item(index) {
        const { items } = this, item = items[index];
        if (!item || item.destroyed) {
            const deleteCount = 1;
            items.splice(index, deleteCount);
            return;
        }
        return item;
    }
    async load(params) {
        const randomFactor = 10000, id = params.id ?? params.element?.id ?? `tsparticles${Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandom"])() * randomFactor)}`, { index, url } = params, options = url ? await getDataFromUrl({
            fallback: params.options,
            url,
            index
        }) : params.options;
        const currentOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(options, index), { items } = this, oldIndex = items.findIndex((v)=>v.id.description === id), minIndex = 0, newItem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"](this, id, currentOptions);
        if (oldIndex >= minIndex) {
            const old = this.item(oldIndex), one = 1, none = 0, deleteCount = old ? one : none;
            if (old && !old.destroyed) {
                old.destroy(false);
            }
            items.splice(oldIndex, deleteCount, newItem);
        } else {
            items.push(newItem);
        }
        const domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
    }
    loadOptions(options, sourceOptions) {
        this.plugins.forEach((plugin)=>plugin.loadOptions?.(options, sourceOptions));
    }
    loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) {
            return;
        }
        updaters.forEach((updater)=>updater.loadOptions?.(options, ...sourceOptions));
    }
    async refresh(refresh = true) {
        if (!refresh) {
            return;
        }
        await Promise.all(this.items.map((t)=>t.refresh()));
    }
    removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
    }
    setOnClickHandler(callback) {
        const { items } = this;
        if (!items.length) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorPrefix"]} can only set click handlers after calling tsParticles.load()`);
        }
        items.forEach((item)=>item.addClickHandler(callback));
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/HslColorManager.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HslColorManager": ()=>HslColorManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var HslIndexes;
(function(HslIndexes) {
    HslIndexes[HslIndexes["h"] = 1] = "h";
    HslIndexes[HslIndexes["s"] = 2] = "s";
    HslIndexes[HslIndexes["l"] = 3] = "l";
    HslIndexes[HslIndexes["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
class HslColorManager {
    constructor(){
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToRgb"])(hslColor);
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToRgb"])({
                h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.h),
                l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.l),
                s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.s)
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
        return result ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslaToRgba"])({
            a: result.length > minLength ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAlpha"])(result[HslIndexes.a]) : defaultAlpha,
            h: parseInt(result[HslIndexes.h], radix),
            l: parseInt(result[HslIndexes.l], radix),
            s: parseInt(result[HslIndexes.s], radix)
        }) : undefined;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/RgbColorManager.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RgbColorManager": ()=>RgbColorManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 5] = "a";
})(RgbIndexes || (RgbIndexes = {}));
class RgbColorManager {
    constructor(){
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.r),
                g: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.g),
                b: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.b)
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha = 1;
        return result ? {
            a: result.length > minLength ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAlpha"])(result[RgbIndexes.a]) : defaultAlpha,
            b: parseInt(result[RgbIndexes.b], radix),
            g: parseInt(result[RgbIndexes.g], radix),
            r: parseInt(result[RgbIndexes.r], radix)
        } : undefined;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/init.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "init": ()=>init
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$HslColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/HslColorManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$RgbColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/RgbColorManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function init() {
    const rgbColorManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$RgbColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RgbColorManager"](), hslColorManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$HslColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HslColorManager"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addColorManager"])(rgbColorManager);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addColorManager"])(hslColorManager);
    const engine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"]();
    engine.init();
    return engine;
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/ExternalInteractorBase.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ExternalInteractorBase": ()=>ExternalInteractorBase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/InteractorType.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ExternalInteractorBase {
    constructor(container){
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractorType"].external;
        this.container = container;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/ParticlesInteractorBase.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ParticlesInteractorBase": ()=>ParticlesInteractorBase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/InteractorType.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ParticlesInteractorBase {
    constructor(container){
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractorType"].particles;
        this.container = container;
    }
}

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/RotateDirection.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RotateDirection": ()=>RotateDirection
});
var RotateDirection;
(function(RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/GradientType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GradientType": ()=>GradientType
});
var GradientType;
(function(GradientType) {
    GradientType["linear"] = "linear";
    GradientType["radial"] = "radial";
    GradientType["random"] = "random";
})(GradientType || (GradientType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EasingType.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EasingType": ()=>EasingType
});
var EasingType;
(function(EasingType) {
    EasingType["easeInBack"] = "ease-in-back";
    EasingType["easeInCirc"] = "ease-in-circ";
    EasingType["easeInCubic"] = "ease-in-cubic";
    EasingType["easeInLinear"] = "ease-in-linear";
    EasingType["easeInQuad"] = "ease-in-quad";
    EasingType["easeInQuart"] = "ease-in-quart";
    EasingType["easeInQuint"] = "ease-in-quint";
    EasingType["easeInExpo"] = "ease-in-expo";
    EasingType["easeInSine"] = "ease-in-sine";
    EasingType["easeOutBack"] = "ease-out-back";
    EasingType["easeOutCirc"] = "ease-out-circ";
    EasingType["easeOutCubic"] = "ease-out-cubic";
    EasingType["easeOutLinear"] = "ease-out-linear";
    EasingType["easeOutQuad"] = "ease-out-quad";
    EasingType["easeOutQuart"] = "ease-out-quart";
    EasingType["easeOutQuint"] = "ease-out-quint";
    EasingType["easeOutExpo"] = "ease-out-expo";
    EasingType["easeOutSine"] = "ease-out-sine";
    EasingType["easeInOutBack"] = "ease-in-out-back";
    EasingType["easeInOutCirc"] = "ease-in-out-circ";
    EasingType["easeInOutCubic"] = "ease-in-out-cubic";
    EasingType["easeInOutLinear"] = "ease-in-out-linear";
    EasingType["easeInOutQuad"] = "ease-in-out-quad";
    EasingType["easeInOutQuart"] = "ease-in-out-quart";
    EasingType["easeInOutQuint"] = "ease-in-out-quint";
    EasingType["easeInOutExpo"] = "ease-in-out-expo";
    EasingType["easeInOutSine"] = "ease-in-out-sine";
})(EasingType || (EasingType = {}));

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/exports.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/exports.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/ExternalInteractorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/ParticlesInteractorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Point.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Ranges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Utils/Vectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/RotateDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Directions/OutModeDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/AnimationMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/CollisionMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/LimitMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/PixelMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ThemeMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Modes/ResponsiveMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/AlterType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DestroyType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$GradientType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/GradientType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/InteractorType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/ParticleOutType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/StartValueType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/DivType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EasingType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/Types/EventType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/AnimationStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Enums/InteractivityDetect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimatableColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/AnimationOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Background/Background.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ColorAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/FullScreen/FullScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/HslAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/DivEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/Parallax.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Events/ResizeEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Interactivity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Interactivity/Modes/Modes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ManualParticle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Options.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/OptionsColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/Collisions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ParticlesOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Stroke.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAttract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Move.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveAngle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveCenter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveGravity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/OutModes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Path/MovePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/Spin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Move/MoveTrail.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/Opacity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Shape/Shape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/Size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/Size/SizeAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Responsive.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/Theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/Theme/ThemeDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Classes/ValueWithRandom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/CanvasUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/ColorUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$HslColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/HslColorManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/NumberUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/OptionsUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$RgbColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/RgbColorManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/TypeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/exports.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/Colors.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IBounds.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IBubbleParticleData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ICircleBouncer.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IColorManager.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IContainerInteractivity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IContainerPlugin.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ICoordinates.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDelta.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDimension.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDistance.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDrawParticleParams.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IEffectDrawer.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IExternalInteractor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IInteractor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ILoadParams.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IMouseData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IMovePathGenerator.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleColorStyle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleHslAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleLife.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleMover.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleRetinaProps.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleRoll.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleTransformValues.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleUpdater.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleValueAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticlesInteractor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IPlugin.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IPositionFromSizeParams.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IRangeValue.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IRectSideResult.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeDrawData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeDrawer.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeValues.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ISlowParticleData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ITrailFillData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Background/IBackground.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/BackgroundMask/IBackgroundMask.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/FullScreen/IFullScreen.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimatable.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimatableColor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IColorAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IHslAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IManualParticle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptionLoader.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptionsColor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IResponsive.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IValueWithRandom.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IClickEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IDivEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IEvents.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IHoverEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IParallax.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IResizeEvent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Modes/IModeDiv.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Modes/IModes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/IInteractivity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Bounce/IParticlesBounce.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Effect/IEffect.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IParticlesOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IShadow.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IStroke.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveAttract.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMove.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveAngle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveCenter.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveGravity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/Path/IMovePath.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IOutModes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/ISpin.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveTrail.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesDensity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesNumber.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesNumberLimit.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Opacity/IOpacity.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Shape/IShape.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Size/ISize.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Size/ISizeAnimation.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/ZIndex/IZIndex.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Theme/ITheme.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Theme/IThemeDefault.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/CustomEventArgs.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/CustomEventListener.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ExportResult.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ISourceOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ParticlesGroups.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/PathOptions.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RangeValue.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RecursivePartial.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ShapeData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/SingleOrMultiple.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/export-types.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/export-types.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$Colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/Colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IBounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IBounds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IBubbleParticleData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IBubbleParticleData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$ICircleBouncer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ICircleBouncer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IColorManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IColorManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IContainerInteractivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IContainerInteractivity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IContainerPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IContainerPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$ICoordinates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ICoordinates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IDelta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDelta.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IDimension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDimension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IDrawParticleParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IDrawParticleParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IEffectDrawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IEffectDrawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IExternalInteractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IExternalInteractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IInteractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IInteractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$ILoadParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ILoadParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IMouseData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IMouseData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IMovePathGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IMovePathGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleColorStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleColorStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleHslAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleHslAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleLife$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleLife.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleMover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleMover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleRetinaProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleRetinaProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleRoll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleRoll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleTransformValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleTransformValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleUpdater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleUpdater.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticleValueAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticleValueAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IParticlesInteractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IParticlesInteractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IPositionFromSizeParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IPositionFromSizeParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IRangeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IRangeValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IRectSideResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IRectSideResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IShapeDrawData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeDrawData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IShapeDrawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeDrawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$IShapeValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/IShapeValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$ISlowParticleData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ISlowParticleData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Core$2f$Interfaces$2f$ITrailFillData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Core/Interfaces/ITrailFillData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Background$2f$IBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Background/IBackground.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$BackgroundMask$2f$IBackgroundMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/BackgroundMask/IBackgroundMask.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$BackgroundMask$2f$IBackgroundMaskCover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$FullScreen$2f$IFullScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/FullScreen/IFullScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IAnimatable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimatable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IAnimatableColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimatableColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IColorAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IColorAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IHslAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IHslAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IManualParticle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IManualParticle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IOptionLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptionLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IOptionsColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IOptionsColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IResponsive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IResponsive.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$IValueWithRandom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/IValueWithRandom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IClickEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IClickEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IDivEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IDivEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IHoverEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IHoverEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IParallax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IParallax.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IResizeEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Events/IResizeEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Modes$2f$IModeDiv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Modes/IModeDiv.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$Modes$2f$IModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/Modes/IModes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Interactivity$2f$IInteractivity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Interactivity/IInteractivity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Bounce$2f$IParticlesBounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Bounce/IParticlesBounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisionsAbsorb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisionsOverlap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Effect$2f$IEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Effect/IEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$IParticlesOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IParticlesOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$IShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IShadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$IStroke$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/IStroke.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveAttract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveAttract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveAngle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveAngle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveCenter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveGravity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveGravity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$Path$2f$IMovePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/Path/IMovePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IOutModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IOutModes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$ISpin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/ISpin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveTrail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Move/IMoveTrail.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesDensity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesDensity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesNumberLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Number/IParticlesNumberLimit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Opacity$2f$IOpacity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Opacity/IOpacity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Opacity$2f$IOpacityAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Shape$2f$IShape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Shape/IShape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Size$2f$ISize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Size/ISize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$Size$2f$ISizeAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/Size/ISizeAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Particles$2f$ZIndex$2f$IZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Particles/ZIndex/IZIndex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Theme$2f$ITheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Theme/ITheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Options$2f$Interfaces$2f$Theme$2f$IThemeDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Options/Interfaces/Theme/IThemeDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$CustomEventArgs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/CustomEventArgs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$CustomEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/CustomEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$ExportResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ExportResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$ISourceOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ISourceOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$ParticlesGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ParticlesGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$PathOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/PathOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RangeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RangeValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$RecursivePartial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/RecursivePartial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$ShapeData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/ShapeData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Types$2f$SingleOrMultiple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Types/SingleOrMultiple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$export$2d$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/export-types.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/index.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "tsParticles": ()=>tsParticles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/init.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const tsParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"])();
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSsr"])()) {
    window.tsParticles = tsParticles;
}
;
;
;

})()),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/index.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/init.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$Utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/Utils/Utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/exports.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$export$2d$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/export-types.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$5$2e$0$2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tsparticles+engine@3.5.0/node_modules/@tsparticles/engine/esm/index.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=362c0_%40tsparticles_engine_esm_0ab847._.js.map