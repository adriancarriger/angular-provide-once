(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs/Observable"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs/Observable", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["angular-provide-once"] = factory(require("rxjs/Observable"), require("rxjs/Subject"));
	else
		root["angular-provide-once"] = factory(root["rxjs/Observable"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_65__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ exports["l"] = scheduleMicroTask;
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return _global; });
/* harmony export (immutable) */ exports["j"] = getTypeNameForDebugging;
/* harmony export (immutable) */ exports["d"] = isPresent;
/* harmony export (immutable) */ exports["c"] = isBlank;
/* unused harmony export isStrictStringMap */
/* unused harmony export isDate */
/* harmony export (immutable) */ exports["b"] = stringify;
/* unused harmony export NumberWrapper */
/* harmony export (immutable) */ exports["i"] = looseIdentical;
/* harmony export (immutable) */ exports["e"] = isJsObject;
/* harmony export (immutable) */ exports["g"] = print;
/* harmony export (immutable) */ exports["h"] = warn;
/* unused harmony export setValueOnPath */
/* harmony export (immutable) */ exports["f"] = getSymbolIterator;
/* harmony export (immutable) */ exports["k"] = isPrimitive;
/* unused harmony export escapeRegExp */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var /** @type {?} */ globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = (self);
    }
    else {
        globalScope = (global);
    }
}
else {
    globalScope = (window);
}
/**
 * @param {?} fn
 * @return {?}
 */
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var /** @type {?} */ _global = globalScope;

/**
 * @param {?} type
 * @return {?}
 */
function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
/**
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj != null;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj == null;
}
var /** @type {?} */ STRING_MAP_PROTO = Object.getPrototypeOf({});
/**
 * @param {?} obj
 * @return {?}
 */
function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
/**
 * @param {?} token
 * @return {?}
 */
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return "" + token.overriddenName;
    }
    if (token.name) {
        return "" + token.name;
    }
    var /** @type {?} */ res = token.toString();
    var /** @type {?} */ newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    NumberWrapper.parseIntAutoRadix = function (text) {
        var /** @type {?} */ result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    return NumberWrapper;
}());
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
/**
 * @param {?} o
 * @return {?}
 */
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
/**
 * @param {?} obj
 * @return {?}
 */
function print(obj) {
    // tslint:disable-next-line:no-console
    console.log(obj);
}
/**
 * @param {?} obj
 * @return {?}
 */
function warn(obj) {
    console.warn(obj);
}
/**
 * @param {?} global
 * @param {?} path
 * @param {?} value
 * @return {?}
 */
function setValueOnPath(global, path, value) {
    var /** @type {?} */ parts = path.split('.');
    var /** @type {?} */ obj = global;
    while (parts.length > 1) {
        var /** @type {?} */ name_1 = parts.shift();
        if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
            obj = obj[name_1];
        }
        else {
            obj = obj[name_1] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var /** @type {?} */ _symbolIterator = null;
/**
 * @return {?}
 */
function getSymbolIterator() {
    if (!_symbolIterator) {
        if (((globalScope)).Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var /** @type {?} */ keys = Object.getOwnPropertyNames(Map.prototype);
            for (var /** @type {?} */ i = 0; i < keys.length; ++i) {
                var /** @type {?} */ key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    ((Map)).prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPrimitive(obj) {
    return !isJsObject(obj);
}
/**
 * @param {?} s
 * @return {?}
 */
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = unimplemented;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return BaseError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return WrappedError; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license undefined
  * Copyright Google Inc. All Rights Reserved.
  * *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://angular.io/license
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @stable
 */
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    /**
     * @param {?} message
     */
    function BaseError(message) {
        _super.call(this, message);
        // Errors don't use current this, instead they create a new instance.
        // We have to do forward all of our api to the nativeInstance.
        // TODO(bradfordcsmith): Remove this hack when
        //     google/closure-compiler/issues/2102 is fixed.
        var nativeError = new Error(message);
        this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
        /**
         * @return {?}
         */
        get: function () { return this._nativeError.message; },
        /**
         * @param {?} message
         * @return {?}
         */
        set: function (message) { this._nativeError.message = message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
        /**
         * @return {?}
         */
        get: function () { return this._nativeError.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
        /**
         * @return {?}
         */
        get: function () { return ((this._nativeError)).stack; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { ((this._nativeError)).stack = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BaseError.prototype.toString = function () { return this._nativeError.toString(); };
    return BaseError;
}(Error));
function BaseError_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseError.prototype._nativeError;
}
/**
 * @stable
 */
var WrappedError = (function (_super) {
    __extends(WrappedError, _super);
    /**
     * @param {?} message
     * @param {?} error
     */
    function WrappedError(message, error) {
        _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
        this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
        /**
         * @return {?}
         */
        get: function () {
            return (((this.originalError instanceof Error ? this.originalError : this._nativeError)))
                .stack;
        },
        enumerable: true,
        configurable: true
    });
    return WrappedError;
}(BaseError));
function WrappedError_tsickle_Closure_declarations() {
    /** @type {?} */
    WrappedError.prototype.originalError;
}
//# sourceMappingURL=errors.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_metadata__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di_forward_ref__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di_injector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__di_reflective_injector__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__di_reflective_provider__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__di_reflective_key__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__di_opaque_token__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["a"]; });
/* unused harmony reexport Self */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["f"]; });
/* unused harmony reexport Host */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["b"]; });
/* unused harmony reexport forwardRef */
/* unused harmony reexport resolveForwardRef */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__di_injector__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__di_reflective_injector__["a"]; });
/* unused harmony reexport ResolvedReflectiveFactory */
/* unused harmony reexport ReflectiveKey */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__di_opaque_token__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */







//# sourceMappingURL=di.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* unused harmony export Class */
/* harmony export (immutable) */ exports["b"] = makeDecorator;
/* harmony export (immutable) */ exports["a"] = makeParamDecorator;
/* harmony export (immutable) */ exports["c"] = makePropDecorator;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var /** @type {?} */ _nextClassId = 0;
var /** @type {?} */ Reflect = __WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */].Reflect;
/**
 * @param {?} annotation
 * @return {?}
 */
function extractAnnotation(annotation) {
    if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
        // it is a decorator, extract annotation
        annotation = annotation.annotation;
    }
    return annotation;
}
/**
 * @param {?} fnOrArray
 * @param {?} key
 * @return {?}
 */
function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
        fnOrArray === Number || fnOrArray === Array) {
        throw new Error("Can not use native " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fnOrArray) + " as constructor");
    }
    if (typeof fnOrArray === 'function') {
        return fnOrArray;
    }
    if (Array.isArray(fnOrArray)) {
        var /** @type {?} */ annotations = fnOrArray;
        var /** @type {?} */ annoLength = annotations.length - 1;
        var /** @type {?} */ fn = fnOrArray[annoLength];
        if (typeof fn !== 'function') {
            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fn) + "'");
        }
        if (annoLength != fn.length) {
            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fn));
        }
        var /** @type {?} */ paramsAnnotations = [];
        for (var /** @type {?} */ i = 0, /** @type {?} */ ii = annotations.length - 1; i < ii; i++) {
            var /** @type {?} */ paramAnnotations = [];
            paramsAnnotations.push(paramAnnotations);
            var /** @type {?} */ annotation = annotations[i];
            if (Array.isArray(annotation)) {
                for (var /** @type {?} */ j = 0; j < annotation.length; j++) {
                    paramAnnotations.push(extractAnnotation(annotation[j]));
                }
            }
            else if (typeof annotation === 'function') {
                paramAnnotations.push(extractAnnotation(annotation));
            }
            else {
                paramAnnotations.push(annotation);
            }
        }
        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
        return fn;
    }
    throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fnOrArray) + "'");
}
/**
 *  Provides a way for expressing ES6 classes with parameter annotations in ES5.
  * *
  * ## Basic Example
  * *
  * ```
  * var Greeter = ng.Class({
  * constructor: function(name) {
  * this.name = name;
  * },
  * *
  * greet: function() {
  * alert('Hello ' + this.name + '!');
  * }
  * });
  * ```
  * *
  * is equivalent to ES6:
  * *
  * ```
  * class Greeter {
  * constructor(name) {
  * this.name = name;
  * }
  * *
  * greet() {
  * alert('Hello ' + this.name + '!');
  * }
  * }
  * ```
  * *
  * or equivalent to ES5:
  * *
  * ```
  * var Greeter = function (name) {
  * this.name = name;
  * }
  * *
  * Greeter.prototype.greet = function () {
  * alert('Hello ' + this.name + '!');
  * }
  * ```
  * *
  * ### Example with parameter annotations
  * *
  * ```
  * var MyService = ng.Class({
  * constructor: [String, [new Optional(), Service], function(name, myService) {
  * ...
  * }]
  * });
  * ```
  * *
  * is equivalent to ES6:
  * *
  * ```
  * class MyService {
  * constructor(name: string, @Optional() myService: Service) {
  * ...
  * }
  * }
  * ```
  * *
  * ### Example with inheritance
  * *
  * ```
  * var Shape = ng.Class({
  * constructor: (color) {
  * this.color = color;
  * }
  * });
  * *
  * var Square = ng.Class({
  * extends: Shape,
  * constructor: function(color, size) {
  * Shape.call(this, color);
  * this.size = size;
  * }
  * });
  * ```
 * @param {?} clsDef
 * @return {?}
 */
function Class(clsDef) {
    var /** @type {?} */ constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var /** @type {?} */ proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
        if (typeof clsDef.extends === 'function') {
            ((constructor)).prototype = proto =
                Object.create(((clsDef.extends)).prototype);
        }
        else {
            throw new Error("Class definition 'extends' property must be a constructor function was: " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(clsDef.extends));
        }
    }
    for (var key in clsDef) {
        if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
            proto[key] = applyParams(clsDef[key], key);
        }
    }
    if (this && this.annotations instanceof Array) {
        Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    var /** @type {?} */ constructorName = constructor['name'];
    if (!constructorName || constructorName === 'constructor') {
        ((constructor))['overriddenName'] = "class" + _nextClassId++;
    }
    return (constructor);
}
/**
 * @param {?} name
 * @param {?} props
 * @param {?=} parentClass
 * @param {?=} chainFn
 * @return {?}
 */
function makeDecorator(name, props, parentClass, chainFn) {
    if (chainFn === void 0) { chainFn = null; }
    var /** @type {?} */ metaCtor = makeMetadataCtor([props]);
    /**
     * @param {?} objOrType
     * @return {?}
     */
    function DecoratorFactory(objOrType) {
        if (!(Reflect && Reflect.getOwnMetadata)) {
            throw 'reflect-metadata shim is required when using class decorators';
        }
        if (this instanceof DecoratorFactory) {
            metaCtor.call(this, objOrType);
            return this;
        }
        var /** @type {?} */ annotationInstance = new ((DecoratorFactory))(objOrType);
        var /** @type {?} */ chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
        chainAnnotation.push(annotationInstance);
        var /** @type {?} */ TypeDecorator = (function TypeDecorator(cls) {
            var /** @type {?} */ annotations = Reflect.getOwnMetadata('annotations', cls) || [];
            annotations.push(annotationInstance);
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        });
        TypeDecorator.annotations = chainAnnotation;
        TypeDecorator.Class = Class;
        if (chainFn)
            chainFn(TypeDecorator);
        return TypeDecorator;
    }
    if (parentClass) {
        DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    DecoratorFactory.prototype.toString = function () { return ("@" + name); };
    ((DecoratorFactory)).annotationCls = DecoratorFactory;
    return DecoratorFactory;
}
/**
 * @param {?} props
 * @return {?}
 */
function makeMetadataCtor(props) {
    return function ctor() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        props.forEach(function (prop, i) {
            var /** @type {?} */ argVal = args[i];
            if (Array.isArray(prop)) {
                // plain parameter
                _this[prop[0]] = argVal === undefined ? prop[1] : argVal;
            }
            else {
                for (var propName in prop) {
                    _this[propName] =
                        argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
                }
            }
        });
    };
}
/**
 * @param {?} name
 * @param {?} props
 * @param {?=} parentClass
 * @return {?}
 */
function makeParamDecorator(name, props, parentClass) {
    var /** @type {?} */ metaCtor = makeMetadataCtor(props);
    /**
     * @param {...?} args
     * @return {?}
     */
    function ParamDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this instanceof ParamDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }
        var /** @type {?} */ annotationInstance = new ((_a = ((ParamDecoratorFactory))).bind.apply(_a, [void 0].concat(args)))();
        ((ParamDecorator)).annotation = annotationInstance;
        return ParamDecorator;
        /**
         * @param {?} cls
         * @param {?} unusedKey
         * @param {?} index
         * @return {?}
         */
        function ParamDecorator(cls, unusedKey, index) {
            var /** @type {?} */ parameters = Reflect.getOwnMetadata('parameters', cls) || [];
            // there might be gaps if some in between parameters do not have annotations.
            // we pad with nulls.
            while (parameters.length <= index) {
                parameters.push(null);
            }
            parameters[index] = parameters[index] || [];
            parameters[index].push(annotationInstance);
            Reflect.defineMetadata('parameters', parameters, cls);
            return cls;
        }
        var _a;
    }
    if (parentClass) {
        ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.toString = function () { return ("@" + name); };
    ((ParamDecoratorFactory)).annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
}
/**
 * @param {?} name
 * @param {?} props
 * @param {?=} parentClass
 * @return {?}
 */
function makePropDecorator(name, props, parentClass) {
    var /** @type {?} */ metaCtor = makeMetadataCtor(props);
    /**
     * @param {...?} args
     * @return {?}
     */
    function PropDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this instanceof PropDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }
        var /** @type {?} */ decoratorInstance = new ((_a = ((PropDecoratorFactory))).bind.apply(_a, [void 0].concat(args)))();
        return function PropDecorator(target, name) {
            var /** @type {?} */ meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
            meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
            meta[name].unshift(decoratorInstance);
            Reflect.defineMetadata('propMetadata', meta, target.constructor);
        };
        var _a;
    }
    if (parentClass) {
        PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    PropDecoratorFactory.prototype.toString = function () { return ("@" + name); };
    ((PropDecoratorFactory)).annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
}
//# sourceMappingURL=decorators.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return THROW_IF_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Injector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var /** @type {?} */ _THROW_IF_NOT_FOUND = new Object();
var /** @type {?} */ THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
var _NullInjector = (function () {
    function _NullInjector() {
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    _NullInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = _THROW_IF_NOT_FOUND; }
        if (notFoundValue === _THROW_IF_NOT_FOUND) {
            throw new Error("No provider for " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(token) + "!");
        }
        return notFoundValue;
    };
    return _NullInjector;
}());
/**
 *  ```
  * const injector: Injector = ...;
  * injector.get(...);
  * ```
  * *
  * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
  * *
  * ### Example
  * *
  * {@example core/di/ts/injector_spec.ts region='Injector'}
  * *
  * `Injector` returns itself when given `Injector` as a token:
  * {@example core/di/ts/injector_spec.ts region='injectInjector'}
  * *
 * @abstract
 */
var Injector = (function () {
    function Injector() {
    }
    /**
     *  Retrieves an instance from the injector based on the provided token.
      * If not found:
      * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
      * Injector.THROW_IF_NOT_FOUND is given
      * - Returns the `notFoundValue` otherwise
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    Injector.prototype.get = function (token, notFoundValue) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    Injector.NULL = new _NullInjector();
    return Injector;
}());
function Injector_tsickle_Closure_declarations() {
    /** @type {?} */
    Injector.THROW_IF_NOT_FOUND;
    /** @type {?} */
    Injector.NULL;
}
//# sourceMappingURL=injector.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Optional; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Injectable; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Self; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return SkipSelf; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return Host; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Inject decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Inject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Inject', [['token', undefined]]);
/**
 * Optional decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Optional = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Optional', []);
/**
 * Injectable decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Injectable = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["b" /* makeDecorator */])('Injectable', []));
/**
 * Self decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Self = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Self', []);
/**
 * SkipSelf decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ SkipSelf = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('SkipSelf', []);
/**
 * Host decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Host = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Host', []);
//# sourceMappingURL=metadata.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return StringMapWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ListWrapper; });
/* harmony export (immutable) */ exports["a"] = isListLikeIterable;
/* harmony export (immutable) */ exports["c"] = areIterablesEqual;
/* harmony export (immutable) */ exports["b"] = iterateListLike;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 *  Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    /**
     * @param {?} m1
     * @param {?} m2
     * @return {?}
     */
    StringMapWrapper.merge = function (m1, m2) {
        var /** @type {?} */ m = {};
        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
            var k = _a[_i];
            m[k] = m1[k];
        }
        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
            var k = _c[_b];
            m[k] = m2[k];
        }
        return m;
    };
    /**
     * @param {?} m1
     * @param {?} m2
     * @return {?}
     */
    StringMapWrapper.equals = function (m1, m2) {
        var /** @type {?} */ k1 = Object.keys(m1);
        var /** @type {?} */ k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        for (var /** @type {?} */ i = 0; i < k1.length; i++) {
            var /** @type {?} */ key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
}());
var ListWrapper = (function () {
    function ListWrapper() {
    }
    /**
     * @param {?} arr
     * @param {?} condition
     * @return {?}
     */
    ListWrapper.findLast = function (arr, condition) {
        for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
            if (condition(arr[i])) {
                return arr[i];
            }
        }
        return null;
    };
    /**
     * @param {?} list
     * @param {?} items
     * @return {?}
     */
    ListWrapper.removeAll = function (list, items) {
        for (var /** @type {?} */ i = 0; i < items.length; ++i) {
            var /** @type {?} */ index = list.indexOf(items[i]);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
    };
    /**
     * @param {?} list
     * @param {?} el
     * @return {?}
     */
    ListWrapper.remove = function (list, el) {
        var /** @type {?} */ index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var /** @type {?} */ i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    /**
     * @param {?} list
     * @return {?}
     */
    ListWrapper.flatten = function (list) {
        return list.reduce(function (flat, item) {
            var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
            return ((flat)).concat(flatItem);
        }, []);
    };
    return ListWrapper;
}());
/**
 * @param {?} obj
 * @return {?}
 */
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["e" /* isJsObject */])(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])() in obj); // JS Iterable have a Symbol.iterator prop
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} comparator
 * @return {?}
 */
function areIterablesEqual(a, b, comparator) {
    var /** @type {?} */ iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
    var /** @type {?} */ iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
    while (true) {
        var /** @type {?} */ item1 = iterator1.next();
        var /** @type {?} */ item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
/**
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var /** @type {?} */ i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var /** @type {?} */ iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
        var /** @type {?} */ item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
//# sourceMappingURL=collection.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ComponentStillLoadingError; });
/* unused harmony export ModuleWithComponentFactories */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Compiler; });
/* unused harmony export COMPILER_OPTIONS */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompilerFactory; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 *  Indicates that a component is still being loaded in a synchronous compile.
  * *
 */
var ComponentStillLoadingError = (function (_super) {
    __extends(ComponentStillLoadingError, _super);
    /**
     * @param {?} compType
     */
    function ComponentStillLoadingError(compType) {
        _super.call(this, "Can't compile synchronously as " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* stringify */])(compType) + " is still being loaded!");
        this.compType = compType;
    }
    return ComponentStillLoadingError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
function ComponentStillLoadingError_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentStillLoadingError.prototype.compType;
}
/**
 *  Combination of NgModuleFactory and ComponentFactorys.
  * *
 */
var ModuleWithComponentFactories = (function () {
    /**
     * @param {?} ngModuleFactory
     * @param {?} componentFactories
     */
    function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
        this.ngModuleFactory = ngModuleFactory;
        this.componentFactories = componentFactories;
    }
    return ModuleWithComponentFactories;
}());
function ModuleWithComponentFactories_tsickle_Closure_declarations() {
    /** @type {?} */
    ModuleWithComponentFactories.prototype.ngModuleFactory;
    /** @type {?} */
    ModuleWithComponentFactories.prototype.componentFactories;
}
/**
 * @return {?}
 */
function _throwError() {
    throw new Error("Runtime compiler is not loaded");
}
/**
 *  Low-level service for running the angular compiler during runtime
  * to create {@link ComponentFactory}s, which
  * can later be used to create and render a Component instance.
  * *
  * Each `@NgModule` provides an own `Compiler` to its injector,
  * that will use the directives/pipes of the ng module for compilation
  * of components.
 */
var Compiler = (function () {
    function Compiler() {
    }
    /**
     *  Compiles the given NgModule and all of its components. All templates of the components listed
      * in `entryComponents`
      * have to be inlined. Otherwise throws a {@link ComponentStillLoadingError}.
     * @param {?} moduleType
     * @return {?}
     */
    Compiler.prototype.compileModuleSync = function (moduleType) { throw _throwError(); };
    /**
     *  Compiles the given NgModule and all of its components
     * @param {?} moduleType
     * @return {?}
     */
    Compiler.prototype.compileModuleAsync = function (moduleType) { throw _throwError(); };
    /**
     *  Same as {@link compileModuleSync} but also creates ComponentFactories for all components.
     * @param {?} moduleType
     * @return {?}
     */
    Compiler.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
        throw _throwError();
    };
    /**
     *  Same as {@link compileModuleAsync} but also creates ComponentFactories for all components.
     * @param {?} moduleType
     * @return {?}
     */
    Compiler.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
        throw _throwError();
    };
    /**
     *  Exposes the CSS-style selectors that have been used in `ngContent` directives within
      * the template of the given component.
      * This is used by the `upgrade` library to compile the appropriate transclude content
      * in the Angular 1 wrapper component.
     * @param {?} component
     * @return {?}
     */
    Compiler.prototype.getNgContentSelectors = function (component) { throw _throwError(); };
    /**
     *  Clears all caches.
     * @return {?}
     */
    Compiler.prototype.clearCache = function () { };
    /**
     *  Clears the cache for the given component/ngModule.
     * @param {?} type
     * @return {?}
     */
    Compiler.prototype.clearCacheFor = function (type) { };
    return Compiler;
}());
/**
 * Token to provide CompilerOptions in the platform injector.
 *
 * @experimental
 */
var /** @type {?} */ COMPILER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('compilerOptions');
/**
 *  A factory for creating a Compiler
  * *
 * @abstract
 */
var CompilerFactory = (function () {
    function CompilerFactory() {
    }
    /**
     * @abstract
     * @param {?=} options
     * @return {?}
     */
    CompilerFactory.prototype.createCompiler = function (options) { };
    return CompilerFactory;
}());
//# sourceMappingURL=compiler.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* unused harmony export APP_ID */
/* unused harmony export _appIdRandomProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return APP_ID_RANDOM_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PLATFORM_INITIALIZER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return APP_BOOTSTRAP_LISTENER; });
/* unused harmony export PACKAGE_ROOT_URL */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 * @experimental
 */
var /** @type {?} */ APP_ID = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('AppId');
/**
 * @return {?}
 */
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 * @experimental
 */
var /** @type {?} */ APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: /** @type {?} */ ([]),
};
/**
 * @return {?}
 */
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 * @experimental
 */
var /** @type {?} */ PLATFORM_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('Platform Initializer');
/**
 * All callbacks provided via this token will be called for every component that is bootstrapped.
 * Signature of the callback:
 *
 * `(componentRef: ComponentRef) => void`.
 *
 * @experimental
 */
var /** @type {?} */ APP_BOOTSTRAP_LISTENER = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('appBootstrapListener');
/**
 * A token which indicates the root directory of the application
 * @experimental
 */
var /** @type {?} */ PACKAGE_ROOT_URL = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('Application Packages Root URL');
//# sourceMappingURL=application_tokens.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differs_default_keyvalue_differ__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_detection_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_detector_ref__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(11);
/* unused harmony export keyValDiff */
/* unused harmony export iterableDiff */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return defaultIterableDiffers; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return defaultKeyValueDiffers; });
/* unused harmony reexport SimpleChange */
/* unused harmony reexport UNINITIALIZED */
/* unused harmony reexport ValueUnwrapper */
/* unused harmony reexport WrappedValue */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__change_detection_util__["b"]; });
/* unused harmony reexport looseIdentical */
/* unused harmony reexport ChangeDetectorRef */
/* unused harmony reexport ChangeDetectionStrategy */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["b"]; });
/* unused harmony reexport isDefaultChangeDetectionStrategy */
/* unused harmony reexport CollectionChangeRecord */
/* unused harmony reexport DefaultIterableDifferFactory */
/* unused harmony reexport DefaultIterableDiffer */
/* unused harmony reexport KeyValueChangeRecord */
/* unused harmony reexport DefaultKeyValueDifferFactory */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












/**
 * Structural diffing for `Object`s and `Map`s.
 */
var /** @type {?} */ keyValDiff = [new __WEBPACK_IMPORTED_MODULE_1__differs_default_keyvalue_differ__["a" /* DefaultKeyValueDifferFactory */]()];
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
var /** @type {?} */ iterableDiff = [new __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__["a" /* DefaultIterableDifferFactory */]()];
var /** @type {?} */ defaultIterableDiffers = new __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__["a" /* IterableDiffers */](iterableDiff);
var /** @type {?} */ defaultKeyValueDiffers = new __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__["a" /* KeyValueDiffers */](keyValDiff);
//# sourceMappingURL=change_detection.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UNINITIALIZED; });
/* harmony export (immutable) */ exports["b"] = devModeEqual;
/* unused harmony export WrappedValue */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ValueUnwrapper; });
/* unused harmony export SimpleChange */
/* unused harmony reexport looseIdentical */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var /** @type {?} */ UNINITIALIZED = {
    toString: function () { return 'CD_INIT_VALUE'; }
};
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function devModeEqual(a, b) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(b)) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["c" /* areIterablesEqual */])(a, b, devModeEqual);
    }
    else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["k" /* isPrimitive */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(b) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["k" /* isPrimitive */])(b)) {
        return true;
    }
    else {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(a, b);
    }
}
/**
 *  Indicates that the result of a {@link Pipe} transformation has changed even though the
  * reference
  * has not changed.
  * *
  * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
  * *
  * Example:
  * *
  * ```
  * if (this._latestValue === this._latestReturnedValue) {
  * return this._latestReturnedValue;
  * } else {
  * this._latestReturnedValue = this._latestValue;
  * return WrappedValue.wrap(this._latestValue); // this will force update
  * }
  * ```
 */
var WrappedValue = (function () {
    /**
     * @param {?} wrapped
     */
    function WrappedValue(wrapped) {
        this.wrapped = wrapped;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    WrappedValue.wrap = function (value) { return new WrappedValue(value); };
    return WrappedValue;
}());
function WrappedValue_tsickle_Closure_declarations() {
    /** @type {?} */
    WrappedValue.prototype.wrapped;
}
/**
 *  Helper class for unwrapping WrappedValue s
 */
var ValueUnwrapper = (function () {
    function ValueUnwrapper() {
        this.hasWrappedValue = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValueUnwrapper.prototype.unwrap = function (value) {
        if (value instanceof WrappedValue) {
            this.hasWrappedValue = true;
            return value.wrapped;
        }
        return value;
    };
    /**
     * @return {?}
     */
    ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
    return ValueUnwrapper;
}());
function ValueUnwrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    ValueUnwrapper.prototype.hasWrappedValue;
}
/**
 *  Represents a basic change from a previous to a new value.
 */
var SimpleChange = (function () {
    /**
     * @param {?} previousValue
     * @param {?} currentValue
     */
    function SimpleChange(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
    }
    /**
     *  Check whether the new value is the first value assigned.
     * @return {?}
     */
    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === UNINITIALIZED; };
    return SimpleChange;
}());
function SimpleChange_tsickle_Closure_declarations() {
    /** @type {?} */
    SimpleChange.prototype.previousValue;
    /** @type {?} */
    SimpleChange.prototype.currentValue;
}
//# sourceMappingURL=change_detection_util.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChangeDetectionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ChangeDetectorStatus; });
/* harmony export (immutable) */ exports["c"] = isDefaultChangeDetectionStrategy;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ChangeDetectionStrategy = {};
ChangeDetectionStrategy.OnPush = 0;
ChangeDetectionStrategy.Default = 1;
ChangeDetectionStrategy[ChangeDetectionStrategy.OnPush] = "OnPush";
ChangeDetectionStrategy[ChangeDetectionStrategy.Default] = "Default";
var ChangeDetectorStatus = {};
ChangeDetectorStatus.CheckOnce = 0;
ChangeDetectorStatus.Checked = 1;
ChangeDetectorStatus.CheckAlways = 2;
ChangeDetectorStatus.Detached = 3;
ChangeDetectorStatus.Errored = 4;
ChangeDetectorStatus.Destroyed = 5;
ChangeDetectorStatus[ChangeDetectorStatus.CheckOnce] = "CheckOnce";
ChangeDetectorStatus[ChangeDetectorStatus.Checked] = "Checked";
ChangeDetectorStatus[ChangeDetectorStatus.CheckAlways] = "CheckAlways";
ChangeDetectorStatus[ChangeDetectorStatus.Detached] = "Detached";
ChangeDetectorStatus[ChangeDetectorStatus.Errored] = "Errored";
ChangeDetectorStatus[ChangeDetectorStatus.Destroyed] = "Destroyed";
/**
 * @param {?} changeDetectionStrategy
 * @return {?}
 */
function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["c" /* isBlank */])(changeDetectionStrategy) ||
        changeDetectionStrategy === ChangeDetectionStrategy.Default;
}
//# sourceMappingURL=constants.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* unused harmony export NoComponentFactoryError */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentFactoryResolver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CodegenComponentFactoryResolver; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * @stable
 */
var NoComponentFactoryError = (function (_super) {
    __extends(NoComponentFactoryError, _super);
    /**
     * @param {?} component
     */
    function NoComponentFactoryError(component) {
        _super.call(this, "No component factory found for " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(component));
        this.component = component;
    }
    return NoComponentFactoryError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
function NoComponentFactoryError_tsickle_Closure_declarations() {
    /** @type {?} */
    NoComponentFactoryError.prototype.component;
}
var _NullComponentFactoryResolver = (function () {
    function _NullComponentFactoryResolver() {
    }
    /**
     * @param {?} component
     * @return {?}
     */
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        throw new NoComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
}());
/**
 * @abstract
 */
var ComponentFactoryResolver = (function () {
    function ComponentFactoryResolver() {
    }
    /**
     * @abstract
     * @param {?} component
     * @return {?}
     */
    ComponentFactoryResolver.prototype.resolveComponentFactory = function (component) { };
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
}());
function ComponentFactoryResolver_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentFactoryResolver.NULL;
}
var CodegenComponentFactoryResolver = (function () {
    /**
     * @param {?} factories
     * @param {?} _parent
     */
    function CodegenComponentFactoryResolver(factories, _parent) {
        this._parent = _parent;
        this._factories = new Map();
        for (var i = 0; i < factories.length; i++) {
            var factory = factories[i];
            this._factories.set(factory.componentType, factory);
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        var /** @type {?} */ result = this._factories.get(component);
        if (!result) {
            result = this._parent.resolveComponentFactory(component);
        }
        return result;
    };
    return CodegenComponentFactoryResolver;
}());
function CodegenComponentFactoryResolver_tsickle_Closure_declarations() {
    /** @type {?} */
    CodegenComponentFactoryResolver.prototype._factories;
    /** @type {?} */
    CodegenComponentFactoryResolver.prototype._parent;
}
//# sourceMappingURL=component_factory_resolver.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementRef; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * @security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
 * [Security Guide](http://g.co/ng/security).
 *
 * @stable
 */
// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
// i.e. users have to ask for what they need. With that, we can build better analysis tools
// and could do better codegen in the future.
var ElementRef = (function () {
    /**
     * @param {?} nativeElement
     */
    function ElementRef(nativeElement) {
        this.nativeElement = nativeElement;
    }
    return ElementRef;
}());
function ElementRef_tsickle_Closure_declarations() {
    /**
     * The underlying native element or `null` if direct access to native elements is not supported
     * (e.g. when the application runs in a web worker).
     * *
     * <div class="callout is-critical">
     * <header>Use with caution</header>
     * <p>
     * Use this API as the last resort when direct access to DOM is needed. Use templating and
     * data-binding provided by Angular instead. Alternatively you take a look at {@link Renderer}
     * which provides API that can safely be used even when direct access to native elements is not
     * supported.
     * </p>
     * <p>
     * Relying on direct DOM access creates tight coupling between your application and rendering
     * layers which will make it impossible to separate the two and deploy your application into a
     * web worker.
     * </p>
     * </div>
     * @type {?}
     */
    ElementRef.prototype.nativeElement;
}
//# sourceMappingURL=element_ref.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewType; });
var ViewType = {};
ViewType.HOST = 0;
ViewType.COMPONENT = 1;
ViewType.EMBEDDED = 2;
ViewType[ViewType.HOST] = "HOST";
ViewType[ViewType.COMPONENT] = "COMPONENT";
ViewType[ViewType.EMBEDDED] = "EMBEDDED";
//# sourceMappingURL=view_type.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__security__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__version__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewUtils", function() { return ViewUtils; });
/* harmony export (immutable) */ exports["createRenderComponentType"] = createRenderComponentType;
/* harmony export (immutable) */ exports["addToArray"] = addToArray;
/* harmony export (immutable) */ exports["interpolate"] = interpolate;
/* harmony export (immutable) */ exports["inlineInterpolate"] = inlineInterpolate;
/* harmony export (immutable) */ exports["checkBinding"] = checkBinding;
/* harmony export (immutable) */ exports["castByValue"] = castByValue;
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_ARRAY", function() { return EMPTY_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_MAP", function() { return EMPTY_MAP; });
/* harmony export (immutable) */ exports["pureProxy1"] = pureProxy1;
/* harmony export (immutable) */ exports["pureProxy2"] = pureProxy2;
/* harmony export (immutable) */ exports["pureProxy3"] = pureProxy3;
/* harmony export (immutable) */ exports["pureProxy4"] = pureProxy4;
/* harmony export (immutable) */ exports["pureProxy5"] = pureProxy5;
/* harmony export (immutable) */ exports["pureProxy6"] = pureProxy6;
/* harmony export (immutable) */ exports["pureProxy7"] = pureProxy7;
/* harmony export (immutable) */ exports["pureProxy8"] = pureProxy8;
/* harmony export (immutable) */ exports["pureProxy9"] = pureProxy9;
/* harmony export (immutable) */ exports["pureProxy10"] = pureProxy10;
/* harmony export (immutable) */ exports["setBindingDebugInfoForChanges"] = setBindingDebugInfoForChanges;
/* harmony export (immutable) */ exports["setBindingDebugInfo"] = setBindingDebugInfo;
/* harmony export (immutable) */ exports["createRenderElement"] = createRenderElement;
/* harmony export (immutable) */ exports["selectOrCreateRenderHostElement"] = selectOrCreateRenderHostElement;
/* harmony export (immutable) */ exports["subscribeToRenderElement"] = subscribeToRenderElement;
/* harmony export (immutable) */ exports["noop"] = noop;
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray2", function() { return InlineArray2; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray4", function() { return InlineArray4; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray8", function() { return InlineArray8; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray16", function() { return InlineArray16; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArrayDynamic", function() { return InlineArrayDynamic; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_INLINE_ARRAY", function() { return EMPTY_INLINE_ARRAY; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









var ViewUtils = (function () {
    /**
     * @param {?} _renderer
     * @param {?} sanitizer
     * @param {?} animationQueue
     */
    function ViewUtils(_renderer, sanitizer, animationQueue) {
        this._renderer = _renderer;
        this.animationQueue = animationQueue;
        this._nextCompTypeId = 0;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} renderComponentType
     * @return {?}
     */
    ViewUtils.prototype.renderComponent = function (renderComponentType) {
        return this._renderer.renderComponent(renderComponentType);
    };
    ViewUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ViewUtils.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__render_api__["a" /* RootRenderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_6__security__["a" /* Sanitizer */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__["a" /* AnimationQueue */], },
    ]; };
    return ViewUtils;
}());
function ViewUtils_tsickle_Closure_declarations() {
    /** @type {?} */
    ViewUtils.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ViewUtils.ctorParameters;
    /** @type {?} */
    ViewUtils.prototype.sanitizer;
    /** @type {?} */
    ViewUtils.prototype._nextCompTypeId;
    /** @type {?} */
    ViewUtils.prototype._renderer;
    /** @type {?} */
    ViewUtils.prototype.animationQueue;
}
var /** @type {?} */ nextRenderComponentTypeId = 0;
/**
 * @param {?} templateUrl
 * @param {?} slotCount
 * @param {?} encapsulation
 * @param {?} styles
 * @param {?} animations
 * @return {?}
 */
function createRenderComponentType(templateUrl, slotCount, encapsulation, styles, animations) {
    return new __WEBPACK_IMPORTED_MODULE_5__render_api__["b" /* RenderComponentType */]("" + nextRenderComponentTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
}
/**
 * @param {?} e
 * @param {?} array
 * @return {?}
 */
function addToArray(e, array) {
    array.push(e);
}
/**
 * @param {?} valueCount
 * @param {?} constAndInterp
 * @return {?}
 */
function interpolate(valueCount, constAndInterp) {
    var /** @type {?} */ result = '';
    for (var /** @type {?} */ i = 0; i < valueCount * 2; i = i + 2) {
        result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
    }
    return result + constAndInterp[valueCount * 2];
}
/**
 * @param {?} valueCount
 * @param {?} c0
 * @param {?} a1
 * @param {?} c1
 * @param {?=} a2
 * @param {?=} c2
 * @param {?=} a3
 * @param {?=} c3
 * @param {?=} a4
 * @param {?=} c4
 * @param {?=} a5
 * @param {?=} c5
 * @param {?=} a6
 * @param {?=} c6
 * @param {?=} a7
 * @param {?=} c7
 * @param {?=} a8
 * @param {?=} c8
 * @param {?=} a9
 * @param {?=} c9
 * @return {?}
 */
function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
        case 1:
            return c0 + _toStringWithNull(a1) + c1;
        case 2:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
        case 3:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3;
        case 4:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4;
        case 5:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
        case 6:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
        case 7:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7;
        case 8:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
        case 9:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
        default:
            throw new Error("Does not support more than 9 expressions");
    }
}
/**
 * @param {?} v
 * @return {?}
 */
function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
}
/**
 * @param {?} throwOnChange
 * @param {?} oldValue
 * @param {?} newValue
 * @return {?}
 */
function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection__["a" /* devModeEqual */])(oldValue, newValue)) {
            throw new __WEBPACK_IMPORTED_MODULE_8__errors__["a" /* ExpressionChangedAfterItHasBeenCheckedError */](oldValue, newValue);
        }
        return false;
    }
    else {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(oldValue, newValue);
    }
}
/**
 * @param {?} input
 * @param {?} value
 * @return {?}
 */
function castByValue(input, value) {
    return (input);
}
var /** @type {?} */ EMPTY_ARRAY = [];
var /** @type {?} */ EMPTY_MAP = {};
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy1(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0)) {
            v0 = p0;
            result = fn(p0);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy2(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var /** @type {?} */ v1 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1)) {
            v0 = p0;
            v1 = p1;
            result = fn(p0, p1);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy3(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var /** @type {?} */ v1 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var /** @type {?} */ v2 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            result = fn(p0, p1, p2);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy4(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3;
    v0 = v1 = v2 = v3 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            result = fn(p0, p1, p2, p3);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy5(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4;
    v0 = v1 = v2 = v3 = v4 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            result = fn(p0, p1, p2, p3, p4);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy6(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4, /** @type {?} */ v5;
    v0 = v1 = v2 = v3 = v4 = v5 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v5, p5)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            result = fn(p0, p1, p2, p3, p4, p5);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy7(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4, /** @type {?} */ v5, /** @type {?} */ v6;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v6, p6)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            result = fn(p0, p1, p2, p3, p4, p5, p6);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy8(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4, /** @type {?} */ v5, /** @type {?} */ v6, /** @type {?} */ v7;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v7, p7)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy9(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4, /** @type {?} */ v5, /** @type {?} */ v6, /** @type {?} */ v7, /** @type {?} */ v8;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v7, p7) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v8, p8)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            v8 = p8;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
        }
        return result;
    };
}
/**
 * @param {?} fn
 * @return {?}
 */
function pureProxy10(fn) {
    var /** @type {?} */ result;
    var /** @type {?} */ v0, /** @type {?} */ v1, /** @type {?} */ v2, /** @type {?} */ v3, /** @type {?} */ v4, /** @type {?} */ v5, /** @type {?} */ v6, /** @type {?} */ v7, /** @type {?} */ v8, /** @type {?} */ v9;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = __WEBPACK_IMPORTED_MODULE_2__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v7, p7) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v8, p8) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["i" /* looseIdentical */])(v9, p9)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            v8 = p8;
            v9 = p9;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
        }
        return result;
    };
}
/**
 * @param {?} renderer
 * @param {?} el
 * @param {?} changes
 * @return {?}
 */
function setBindingDebugInfoForChanges(renderer, el, changes) {
    Object.keys(changes).forEach(function (propName) {
        setBindingDebugInfo(renderer, el, propName, changes[propName].currentValue);
    });
}
/**
 * @param {?} renderer
 * @param {?} el
 * @param {?} propName
 * @param {?} value
 * @return {?}
 */
function setBindingDebugInfo(renderer, el, propName, value) {
    try {
        renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), value ? value.toString() : null);
    }
    catch (e) {
        renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), '[ERROR] Exception while trying to serialize the value');
    }
}
var /** @type {?} */ CAMEL_CASE_REGEXP = /([A-Z])/g;
/**
 * @param {?} input
 * @return {?}
 */
function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i - 0] = arguments[_i];
        }
        return '-' + m[1].toLowerCase();
    });
}
/**
 * @param {?} renderer
 * @param {?} parentElement
 * @param {?} name
 * @param {?} attrs
 * @param {?=} debugInfo
 * @return {?}
 */
function createRenderElement(renderer, parentElement, name, attrs, debugInfo) {
    var /** @type {?} */ el = renderer.createElement(parentElement, name, debugInfo);
    for (var /** @type {?} */ i = 0; i < attrs.length; i += 2) {
        renderer.setElementAttribute(el, attrs.get(i), attrs.get(i + 1));
    }
    return el;
}
/**
 * @param {?} renderer
 * @param {?} elementName
 * @param {?} attrs
 * @param {?} rootSelectorOrNode
 * @param {?=} debugInfo
 * @return {?}
 */
function selectOrCreateRenderHostElement(renderer, elementName, attrs, rootSelectorOrNode, debugInfo) {
    var /** @type {?} */ hostElement;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["d" /* isPresent */])(rootSelectorOrNode)) {
        hostElement = renderer.selectRootElement(rootSelectorOrNode, debugInfo);
        for (var /** @type {?} */ i = 0; i < attrs.length; i += 2) {
            renderer.setElementAttribute(hostElement, attrs.get(i), attrs.get(i + 1));
        }
        renderer.setElementAttribute(hostElement, 'ng-version', __WEBPACK_IMPORTED_MODULE_7__version__["a" /* VERSION */].full);
    }
    else {
        hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
    }
    return hostElement;
}
/**
 * @param {?} view
 * @param {?} element
 * @param {?} eventNamesAndTargets
 * @param {?} listener
 * @return {?}
 */
function subscribeToRenderElement(view, element, eventNamesAndTargets, listener) {
    var /** @type {?} */ disposables = createEmptyInlineArray(eventNamesAndTargets.length / 2);
    for (var /** @type {?} */ i = 0; i < eventNamesAndTargets.length; i += 2) {
        var /** @type {?} */ eventName = eventNamesAndTargets.get(i);
        var /** @type {?} */ eventTarget = eventNamesAndTargets.get(i + 1);
        var /** @type {?} */ disposable = void 0;
        if (eventTarget) {
            disposable = view.renderer.listenGlobal(eventTarget, eventName, listener.bind(view, eventTarget + ":" + eventName));
        }
        else {
            disposable = view.renderer.listen(element, eventName, listener.bind(view, eventName));
        }
        disposables.set(i / 2, disposable);
    }
    return disposeInlineArray.bind(null, disposables);
}
/**
 * @param {?} disposables
 * @return {?}
 */
function disposeInlineArray(disposables) {
    for (var /** @type {?} */ i = 0; i < disposables.length; i++) {
        disposables.get(i)();
    }
}
/**
 * @return {?}
 */
function noop() { }
/**
 * @param {?} length
 * @return {?}
 */
function createEmptyInlineArray(length) {
    var /** @type {?} */ ctor;
    if (length <= 2) {
        ctor = InlineArray2;
    }
    else if (length <= 4) {
        ctor = InlineArray4;
    }
    else if (length <= 8) {
        ctor = InlineArray8;
    }
    else if (length <= 16) {
        ctor = InlineArray16;
    }
    else {
        ctor = InlineArrayDynamic;
    }
    return new ctor(length);
}
var InlineArray0 = (function () {
    function InlineArray0() {
        this.length = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArray0.prototype.get = function (index) { return undefined; };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArray0.prototype.set = function (index, value) { };
    return InlineArray0;
}());
function InlineArray0_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArray0.prototype.length;
}
var InlineArray2 = (function () {
    /**
     * @param {?} length
     * @param {?=} _v0
     * @param {?=} _v1
     */
    function InlineArray2(length, _v0, _v1) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArray2.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            default:
                return undefined;
        }
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArray2.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
        }
    };
    return InlineArray2;
}());
function InlineArray2_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArray2.prototype.length;
    /** @type {?} */
    InlineArray2.prototype._v0;
    /** @type {?} */
    InlineArray2.prototype._v1;
}
var InlineArray4 = (function () {
    /**
     * @param {?} length
     * @param {?=} _v0
     * @param {?=} _v1
     * @param {?=} _v2
     * @param {?=} _v3
     */
    function InlineArray4(length, _v0, _v1, _v2, _v3) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArray4.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            default:
                return undefined;
        }
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArray4.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
        }
    };
    return InlineArray4;
}());
function InlineArray4_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArray4.prototype.length;
    /** @type {?} */
    InlineArray4.prototype._v0;
    /** @type {?} */
    InlineArray4.prototype._v1;
    /** @type {?} */
    InlineArray4.prototype._v2;
    /** @type {?} */
    InlineArray4.prototype._v3;
}
var InlineArray8 = (function () {
    /**
     * @param {?} length
     * @param {?=} _v0
     * @param {?=} _v1
     * @param {?=} _v2
     * @param {?=} _v3
     * @param {?=} _v4
     * @param {?=} _v5
     * @param {?=} _v6
     * @param {?=} _v7
     */
    function InlineArray8(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
        this._v4 = _v4;
        this._v5 = _v5;
        this._v6 = _v6;
        this._v7 = _v7;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArray8.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            case 4:
                return this._v4;
            case 5:
                return this._v5;
            case 6:
                return this._v6;
            case 7:
                return this._v7;
            default:
                return undefined;
        }
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArray8.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
            case 4:
                this._v4 = value;
                break;
            case 5:
                this._v5 = value;
                break;
            case 6:
                this._v6 = value;
                break;
            case 7:
                this._v7 = value;
                break;
        }
    };
    return InlineArray8;
}());
function InlineArray8_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArray8.prototype.length;
    /** @type {?} */
    InlineArray8.prototype._v0;
    /** @type {?} */
    InlineArray8.prototype._v1;
    /** @type {?} */
    InlineArray8.prototype._v2;
    /** @type {?} */
    InlineArray8.prototype._v3;
    /** @type {?} */
    InlineArray8.prototype._v4;
    /** @type {?} */
    InlineArray8.prototype._v5;
    /** @type {?} */
    InlineArray8.prototype._v6;
    /** @type {?} */
    InlineArray8.prototype._v7;
}
var InlineArray16 = (function () {
    /**
     * @param {?} length
     * @param {?=} _v0
     * @param {?=} _v1
     * @param {?=} _v2
     * @param {?=} _v3
     * @param {?=} _v4
     * @param {?=} _v5
     * @param {?=} _v6
     * @param {?=} _v7
     * @param {?=} _v8
     * @param {?=} _v9
     * @param {?=} _v10
     * @param {?=} _v11
     * @param {?=} _v12
     * @param {?=} _v13
     * @param {?=} _v14
     * @param {?=} _v15
     */
    function InlineArray16(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
        this._v4 = _v4;
        this._v5 = _v5;
        this._v6 = _v6;
        this._v7 = _v7;
        this._v8 = _v8;
        this._v9 = _v9;
        this._v10 = _v10;
        this._v11 = _v11;
        this._v12 = _v12;
        this._v13 = _v13;
        this._v14 = _v14;
        this._v15 = _v15;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArray16.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            case 4:
                return this._v4;
            case 5:
                return this._v5;
            case 6:
                return this._v6;
            case 7:
                return this._v7;
            case 8:
                return this._v8;
            case 9:
                return this._v9;
            case 10:
                return this._v10;
            case 11:
                return this._v11;
            case 12:
                return this._v12;
            case 13:
                return this._v13;
            case 14:
                return this._v14;
            case 15:
                return this._v15;
            default:
                return undefined;
        }
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArray16.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
            case 4:
                this._v4 = value;
                break;
            case 5:
                this._v5 = value;
                break;
            case 6:
                this._v6 = value;
                break;
            case 7:
                this._v7 = value;
                break;
            case 8:
                this._v8 = value;
                break;
            case 9:
                this._v9 = value;
                break;
            case 10:
                this._v10 = value;
                break;
            case 11:
                this._v11 = value;
                break;
            case 12:
                this._v12 = value;
                break;
            case 13:
                this._v13 = value;
                break;
            case 14:
                this._v14 = value;
                break;
            case 15:
                this._v15 = value;
                break;
        }
    };
    return InlineArray16;
}());
function InlineArray16_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArray16.prototype.length;
    /** @type {?} */
    InlineArray16.prototype._v0;
    /** @type {?} */
    InlineArray16.prototype._v1;
    /** @type {?} */
    InlineArray16.prototype._v2;
    /** @type {?} */
    InlineArray16.prototype._v3;
    /** @type {?} */
    InlineArray16.prototype._v4;
    /** @type {?} */
    InlineArray16.prototype._v5;
    /** @type {?} */
    InlineArray16.prototype._v6;
    /** @type {?} */
    InlineArray16.prototype._v7;
    /** @type {?} */
    InlineArray16.prototype._v8;
    /** @type {?} */
    InlineArray16.prototype._v9;
    /** @type {?} */
    InlineArray16.prototype._v10;
    /** @type {?} */
    InlineArray16.prototype._v11;
    /** @type {?} */
    InlineArray16.prototype._v12;
    /** @type {?} */
    InlineArray16.prototype._v13;
    /** @type {?} */
    InlineArray16.prototype._v14;
    /** @type {?} */
    InlineArray16.prototype._v15;
}
var InlineArrayDynamic = (function () {
    /**
     * @param {?} length
     * @param {...?} values
     */
    function InlineArrayDynamic(length) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        this.length = length;
        this._values = values;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    InlineArrayDynamic.prototype.get = function (index) { return this._values[index]; };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    InlineArrayDynamic.prototype.set = function (index, value) { this._values[index] = value; };
    return InlineArrayDynamic;
}());
function InlineArrayDynamic_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineArrayDynamic.prototype._values;
    /** @type {?} */
    InlineArrayDynamic.prototype.length;
}
var /** @type {?} */ EMPTY_INLINE_ARRAY = new InlineArray0();
//# sourceMappingURL=view_utils.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wtf_impl__ = __webpack_require__(90);
/* unused harmony export wtfEnabled */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return wtfCreateScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return wtfLeave; });
/* unused harmony export wtfStartTimeRange */
/* unused harmony export wtfEndTimeRange */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * True if WTF is enabled.
 */
var /** @type {?} */ wtfEnabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wtf_impl__["a" /* detectWTF */])();
/**
 * @param {?=} arg0
 * @param {?=} arg1
 * @return {?}
 */
function noopScope(arg0, arg1) {
    return null;
}
/**
 * Create trace scope.
 *
 * Scopes must be strictly nested and are analogous to stack frames, but
 * do not have to follow the stack frames. Instead it is recommended that they follow logical
 * nesting. You may want to use
 * [Event
 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
 * as they are defined in WTF.
 *
 * Used to mark scope entry. The return value is used to leave the scope.
 *
 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
 *
 *     someMethod() {
 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
 *        // DO SOME WORK HERE
 *        return wtfLeave(s, 123); // Return value 123
 *     }
 *
 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
 * negatively impact the performance of your application. For this reason we recommend that
 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
 * exception, will produce incorrect trace, but presence of exception signifies logic error which
 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
 * an exception is expected during normal execution while profiling.
 *
 * @experimental
 */
var /** @type {?} */ wtfCreateScope = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["b" /* createScope */] : function (signature, flags) { return noopScope; };
/**
 * Used to mark end of Scope.
 *
 * - `scope` to end.
 * - `returnValue` (optional) to be passed to the WTF.
 *
 * Returns the `returnValue for easy chaining.
 * @experimental
 */
var /** @type {?} */ wtfLeave = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["c" /* leave */] : function (s, r) { return r; };
/**
 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
 * enabled.
 *
 *     someMethod() {
 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
 *        var future = new Future.delay(5).then((_) {
 *          wtfEndTimeRange(s);
 *        });
 *     }
 * @experimental
 */
var /** @type {?} */ wtfStartTimeRange = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["d" /* startTimeRange */] : function (rangeType, action) { return null; };
/**
 * Ends a async time range operation.
 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
 * enabled.
 * @experimental
 */
var /** @type {?} */ wtfEndTimeRange = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["e" /* endTimeRange */] : function (r) { return null; };
//# sourceMappingURL=profile.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_async__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgZone; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 *  An injectable service for executing work inside or outside of the Angular zone.
  * *
  * The most common use of this service is to optimize performance when starting a work consisting of
  * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
  * Angular. Such tasks can be kicked off via {@link runOutsideAngular} and if needed, these tasks
  * can reenter the Angular zone via {@link run}.
  * *
  * <!-- TODO: add/fix links to:
  * - docs explaining zones and the use of zones in Angular and change-detection
  * - link to runOutsideAngular/run (throughout this file!)
  * -->
  * *
  * ### Example
  * ```
  * import {Component, NgZone} from '@angular/core';
  * import {NgIf} from '@angular/common';
  * *
  * selector: 'ng-zone-demo'.
  * template: `
  * <h2>Demo: NgZone</h2>
  * *
  * <p>Progress: {{progress}}%</p>
  * <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
  * *
  * <button (click)="processWithinAngularZone()">Process within Angular zone</button>
  * <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
  * `,
  * })
  * export class NgZoneDemo {
  * progress: number = 0;
  * label: string;
  * *
  * constructor(private _ngZone: NgZone) {}
  * *
  * // Loop inside the Angular zone
  * // so the UI DOES refresh after each setTimeout cycle
  * processWithinAngularZone() {
  * this.label = 'inside';
  * this.progress = 0;
  * this._increaseProgress(() => console.log('Inside Done!'));
  * }
  * *
  * // Loop outside of the Angular zone
  * // so the UI DOES NOT refresh after each setTimeout cycle
  * processOutsideOfAngularZone() {
  * this.label = 'outside';
  * this.progress = 0;
  * this._ngZone.runOutsideAngular(() => {
  * this._increaseProgress(() => {
  * // reenter the Angular zone and display done
  * this._ngZone.run(() => {console.log('Outside Done!') });
  * }}));
  * }
  * *
  * _increaseProgress(doneCallback: () => void) {
  * this.progress += 1;
  * console.log(`Current progress: ${this.progress}%`);
  * *
  * if (this.progress < 100) {
  * window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
  * } else {
  * doneCallback();
  * }
  * }
  * }
  * ```
 */
var NgZone = (function () {
    /**
     * @param {?} __0
     */
    function NgZone(_a) {
        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
        this._hasPendingMicrotasks = false;
        this._hasPendingMacrotasks = false;
        this._isStable = true;
        this._nesting = 0;
        this._onUnstable = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onMicrotaskEmpty = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onStable = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onErrorEvents = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        if (typeof Zone == 'undefined') {
            throw new Error('Angular requires Zone.js prolyfill.');
        }
        Zone.assertZonePatched();
        this.outer = this.inner = Zone.current;
        if (Zone['wtfZoneSpec']) {
            this.inner = this.inner.fork(Zone['wtfZoneSpec']);
        }
        if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
            this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
        }
        this.forkInnerZoneWithAngularBehavior();
    }
    /**
     * @return {?}
     */
    NgZone.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
    /**
     * @return {?}
     */
    NgZone.assertInAngularZone = function () {
        if (!NgZone.isInAngularZone()) {
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
    };
    /**
     * @return {?}
     */
    NgZone.assertNotInAngularZone = function () {
        if (NgZone.isInAngularZone()) {
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
    };
    /**
     *  Executes the `fn` function synchronously within the Angular zone and returns value returned by
      * the function.
      * *
      * Running functions via `run` allows you to reenter Angular zone from a task that was executed
      * outside of the Angular zone (typically started via {@link runOutsideAngular}).
      * *
      * Any future tasks or microtasks scheduled from within this function will continue executing from
      * within the Angular zone.
      * *
      * If a synchronous error happens it will be rethrown and not reported via `onError`.
     * @param {?} fn
     * @return {?}
     */
    NgZone.prototype.run = function (fn) { return this.inner.run(fn); };
    /**
     *  Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
      * rethrown.
     * @param {?} fn
     * @return {?}
     */
    NgZone.prototype.runGuarded = function (fn) { return this.inner.runGuarded(fn); };
    /**
     *  Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
      * the function.
      * *
      * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
      * doesn't trigger Angular change-detection or is subject to Angular's error handling.
      * *
      * Any future tasks or microtasks scheduled from within this function will continue executing from
      * outside of the Angular zone.
      * *
      * Use {@link run} to reenter the Angular zone and do work that updates the application model.
     * @param {?} fn
     * @return {?}
     */
    NgZone.prototype.runOutsideAngular = function (fn) { return this.outer.run(fn); };
    Object.defineProperty(NgZone.prototype, "onUnstable", {
        /**
         *  Notifies when code enters Angular Zone. This gets fired first on VM Turn.
         * @return {?}
         */
        get: function () { return this._onUnstable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
        /**
         *  Notifies when there is no more microtasks enqueue in the current VM Turn.
          * This is a hint for Angular to do change detection, which may enqueue more microtasks.
          * For this reason this event can fire multiple times per VM Turn.
         * @return {?}
         */
        get: function () { return this._onMicrotaskEmpty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onStable", {
        /**
         *  Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
          * implies we are about to relinquish VM turn.
          * This event gets called just once.
         * @return {?}
         */
        get: function () { return this._onStable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onError", {
        /**
         *  Notify that an error has been delivered.
         * @return {?}
         */
        get: function () { return this._onErrorEvents; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "isStable", {
        /**
         *  Whether there are no outstanding microtasks or macrotasks.
         * @return {?}
         */
        get: function () { return this._isStable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
        /**
         * @return {?}
         */
        get: function () { return this._hasPendingMicrotasks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
        /**
         * @return {?}
         */
        get: function () { return this._hasPendingMacrotasks; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgZone.prototype.checkStable = function () {
        var _this = this;
        if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
            try {
                this._nesting++;
                this._onMicrotaskEmpty.emit(null);
            }
            finally {
                this._nesting--;
                if (!this._hasPendingMicrotasks) {
                    try {
                        this.runOutsideAngular(function () { return _this._onStable.emit(null); });
                    }
                    finally {
                        this._isStable = true;
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgZone.prototype.forkInnerZoneWithAngularBehavior = function () {
        var _this = this;
        this.inner = this.inner.fork({
            name: 'angular',
            properties: /** @type {?} */ ({ 'isAngularZone': true }),
            onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
                try {
                    _this.onEnter();
                    return delegate.invokeTask(target, task, applyThis, applyArgs);
                }
                finally {
                    _this.onLeave();
                }
            },
            onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
                try {
                    _this.onEnter();
                    return delegate.invoke(target, callback, applyThis, applyArgs, source);
                }
                finally {
                    _this.onLeave();
                }
            },
            onHasTask: function (delegate, current, target, hasTaskState) {
                delegate.hasTask(target, hasTaskState);
                if (current === target) {
                    // We are only interested in hasTask events which originate from our zone
                    // (A child hasTask event is not interesting to us)
                    if (hasTaskState.change == 'microTask') {
                        _this.setHasMicrotask(hasTaskState.microTask);
                    }
                    else if (hasTaskState.change == 'macroTask') {
                        _this.setHasMacrotask(hasTaskState.macroTask);
                    }
                }
            },
            onHandleError: function (delegate, current, target, error) {
                delegate.handleError(target, error);
                _this.triggerError(error);
                return false;
            }
        });
    };
    /**
     * @return {?}
     */
    NgZone.prototype.onEnter = function () {
        this._nesting++;
        if (this._isStable) {
            this._isStable = false;
            this._onUnstable.emit(null);
        }
    };
    /**
     * @return {?}
     */
    NgZone.prototype.onLeave = function () {
        this._nesting--;
        this.checkStable();
    };
    /**
     * @param {?} hasMicrotasks
     * @return {?}
     */
    NgZone.prototype.setHasMicrotask = function (hasMicrotasks) {
        this._hasPendingMicrotasks = hasMicrotasks;
        this.checkStable();
    };
    /**
     * @param {?} hasMacrotasks
     * @return {?}
     */
    NgZone.prototype.setHasMacrotask = function (hasMacrotasks) { this._hasPendingMacrotasks = hasMacrotasks; };
    /**
     * @param {?} error
     * @return {?}
     */
    NgZone.prototype.triggerError = function (error) { this._onErrorEvents.emit(error); };
    return NgZone;
}());
function NgZone_tsickle_Closure_declarations() {
    /** @type {?} */
    NgZone.prototype.outer;
    /** @type {?} */
    NgZone.prototype.inner;
    /** @type {?} */
    NgZone.prototype._hasPendingMicrotasks;
    /** @type {?} */
    NgZone.prototype._hasPendingMacrotasks;
    /** @type {?} */
    NgZone.prototype._isStable;
    /** @type {?} */
    NgZone.prototype._nesting;
    /** @type {?} */
    NgZone.prototype._onUnstable;
    /** @type {?} */
    NgZone.prototype._onMicrotaskEmpty;
    /** @type {?} */
    NgZone.prototype._onStable;
    /** @type {?} */
    NgZone.prototype._onErrorEvents;
}
//# sourceMappingURL=ng_zone.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AnimationPlayer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoOpAnimationPlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @abstract
 */
var AnimationPlayer = (function () {
    function AnimationPlayer() {
    }
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    AnimationPlayer.prototype.onDone = function (fn) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    AnimationPlayer.prototype.onStart = function (fn) { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.init = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.hasStarted = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.play = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.pause = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.restart = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.finish = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.destroy = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.reset = function () { };
    /**
     * @abstract
     * @param {?} p
     * @return {?}
     */
    AnimationPlayer.prototype.setPosition = function (p) { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationPlayer.prototype.getPosition = function () { };
    Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
        /**
         * @param {?} player
         * @return {?}
         */
        set: function (player) { throw new Error('NOT IMPLEMENTED: Base Class'); },
        enumerable: true,
        configurable: true
    });
    return AnimationPlayer;
}());
var NoOpAnimationPlayer = (function () {
    function NoOpAnimationPlayer() {
        var _this = this;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._started = false;
        this.parentPlayer = null;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
    }
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype._onFinish = function () {
        this._onDoneFns.forEach(function (fn) { return fn(); });
        this._onDoneFns = [];
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.init = function () { };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.play = function () {
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
        }
        this._started = true;
    };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.pause = function () { };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.restart = function () { };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.finish = function () { this._onFinish(); };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.destroy = function () { };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.reset = function () { };
    /**
     * @param {?} p
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.setPosition = function (p) { };
    /**
     * @return {?}
     */
    NoOpAnimationPlayer.prototype.getPosition = function () { return 0; };
    return NoOpAnimationPlayer;
}());
function NoOpAnimationPlayer_tsickle_Closure_declarations() {
    /** @type {?} */
    NoOpAnimationPlayer.prototype._onDoneFns;
    /** @type {?} */
    NoOpAnimationPlayer.prototype._onStartFns;
    /** @type {?} */
    NoOpAnimationPlayer.prototype._started;
    /** @type {?} */
    NoOpAnimationPlayer.prototype.parentPlayer;
}
//# sourceMappingURL=animation_player.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_util_lang__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di__ = __webpack_require__(2);
/* unused harmony export APP_INITIALIZER */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationInitStatus; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * A function that will be executed when an application is initialized.
 * @experimental
 */
var /** @type {?} */ APP_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_1__di__["a" /* OpaqueToken */]('Application Initializer');
/**
 *  A class that reflects the state of running {@link APP_INITIALIZER}s.
  * *
 */
var ApplicationInitStatus = (function () {
    /**
     * @param {?} appInits
     */
    function ApplicationInitStatus(appInits) {
        var _this = this;
        this._done = false;
        var asyncInitPromises = [];
        if (appInits) {
            for (var i = 0; i < appInits.length; i++) {
                var initResult = appInits[i]();
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_util_lang__["a" /* isPromise */])(initResult)) {
                    asyncInitPromises.push(initResult);
                }
            }
        }
        this._donePromise = Promise.all(asyncInitPromises).then(function () { _this._done = true; });
        if (asyncInitPromises.length === 0) {
            this._done = true;
        }
    }
    Object.defineProperty(ApplicationInitStatus.prototype, "done", {
        /**
         * @return {?}
         */
        get: function () { return this._done; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
        /**
         * @return {?}
         */
        get: function () { return this._donePromise; },
        enumerable: true,
        configurable: true
    });
    ApplicationInitStatus.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ApplicationInitStatus.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__di__["c" /* Inject */], args: [APP_INITIALIZER,] }, { type: __WEBPACK_IMPORTED_MODULE_1__di__["d" /* Optional */] },] },
    ]; };
    return ApplicationInitStatus;
}());
function ApplicationInitStatus_tsickle_Closure_declarations() {
    /** @type {?} */
    ApplicationInitStatus.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ApplicationInitStatus.ctorParameters;
    /** @type {?} */
    ApplicationInitStatus.prototype._donePromise;
    /** @type {?} */
    ApplicationInitStatus.prototype._done;
}
//# sourceMappingURL=application_init.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_error_handler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_util_lang__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__application_init__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__application_tokens__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__console__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__linker_compiler__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__linker_component_factory_resolver__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__testability_testability__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__ = __webpack_require__(17);
/* unused harmony export enableProdMode */
/* unused harmony export isDevMode */
/* unused harmony export NgProbeToken */
/* unused harmony export createPlatform */
/* harmony export (immutable) */ exports["c"] = createPlatformFactory;
/* unused harmony export assertPlatform */
/* unused harmony export destroyPlatform */
/* unused harmony export getPlatform */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return PlatformRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlatformRef_; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ApplicationRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ApplicationRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};















var /** @type {?} */ _devMode = true;
var /** @type {?} */ _runModeLocked = false;
var /** @type {?} */ _platform;
/**
 *  Disable Angular's development mode, which turns off assertions and other
  * checks within the framework.
  * *
  * One important assertion this disables verifies that a change detection pass
  * does not result in additional changes to any bindings (also known as
  * unidirectional data flow).
  * *
 * @return {?}
 */
function enableProdMode() {
    if (_runModeLocked) {
        throw new Error('Cannot enable prod mode after platform setup.');
    }
    _devMode = false;
}
/**
 *  Returns whether Angular is in development mode. After called once,
  * the value is locked and won't change any more.
  * *
  * By default, this is true, unless a user calls `enableProdMode` before calling this.
  * *
 * @return {?}
 */
function isDevMode() {
    _runModeLocked = true;
    return _devMode;
}
/**
 *  A token for third-party components that can register themselves with NgProbe.
  * *
 */
var NgProbeToken = (function () {
    /**
     * @param {?} name
     * @param {?} token
     */
    function NgProbeToken(name, token) {
        this.name = name;
        this.token = token;
    }
    return NgProbeToken;
}());
function NgProbeToken_tsickle_Closure_declarations() {
    /** @type {?} */
    NgProbeToken.prototype.name;
    /** @type {?} */
    NgProbeToken.prototype.token;
}
/**
 *  Creates a platform.
  * Platforms have to be eagerly created via this function.
  * *
 * @param {?} injector
 * @return {?}
 */
function createPlatform(injector) {
    if (_platform && !_platform.destroyed) {
        throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
    }
    _platform = injector.get(PlatformRef);
    var /** @type {?} */ inits = (injector.get(__WEBPACK_IMPORTED_MODULE_6__application_tokens__["a" /* PLATFORM_INITIALIZER */], null));
    if (inits)
        inits.forEach(function (init) { return init(); });
    return _platform;
}
/**
 *  Creates a factory for a platform
  * *
 * @param {?} parentPlaformFactory
 * @param {?} name
 * @param {?=} providers
 * @return {?}
 */
function createPlatformFactory(parentPlaformFactory, name, providers) {
    if (providers === void 0) { providers = []; }
    var /** @type {?} */ marker = new __WEBPACK_IMPORTED_MODULE_8__di__["a" /* OpaqueToken */]("Platform: " + name);
    return function (extraProviders) {
        if (extraProviders === void 0) { extraProviders = []; }
        if (!getPlatform()) {
            if (parentPlaformFactory) {
                parentPlaformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
            }
            else {
                createPlatform(__WEBPACK_IMPORTED_MODULE_8__di__["f" /* ReflectiveInjector */].resolveAndCreate(providers.concat(extraProviders).concat({ provide: marker, useValue: true })));
            }
        }
        return assertPlatform(marker);
    };
}
/**
 *  Checks that there currently is a platform
  * which contains the given token as a provider.
  * *
 * @param {?} requiredToken
 * @return {?}
 */
function assertPlatform(requiredToken) {
    var /** @type {?} */ platform = getPlatform();
    if (!platform) {
        throw new Error('No platform exists!');
    }
    if (!platform.injector.get(requiredToken, null)) {
        throw new Error('A platform with a different configuration has been created. Please destroy it first.');
    }
    return platform;
}
/**
 *  Destroy the existing platform.
  * *
 * @return {?}
 */
function destroyPlatform() {
    if (_platform && !_platform.destroyed) {
        _platform.destroy();
    }
}
/**
 *  Returns the current platform.
  * *
 * @return {?}
 */
function getPlatform() {
    return _platform && !_platform.destroyed ? _platform : null;
}
/**
 *  The Angular platform is the entry point for Angular on a web page. Each page
  * has exactly one platform, and services (such as reflection) which are common
  * to every Angular application running on the page are bound in its scope.
  * *
  * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
  * explicitly by calling {@link createPlatform}().
  * *
 * @abstract
 */
var PlatformRef = (function () {
    function PlatformRef() {
    }
    /**
     *  Creates an instance of an `@NgModule` for the given platform
      * for offline compilation.
      * *
      * ## Simple Example
      * *
      * ```typescript
      * my_module.ts:
      * *
      * imports: [BrowserModule]
      * })
      * class MyModule {}
      * *
      * main.ts:
      * import {MyModuleNgFactory} from './my_module.ngfactory';
      * import {platformBrowser} from '@angular/platform-browser';
      * *
      * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
      * ```
      * *
     * @param {?} moduleFactory
     * @return {?}
     */
    PlatformRef.prototype.bootstrapModuleFactory = function (moduleFactory) {
        throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])();
    };
    /**
     *  Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
      * *
      * ## Simple Example
      * *
      * ```typescript
      * imports: [BrowserModule]
      * })
      * class MyModule {}
      * *
      * let moduleRef = platformBrowser().bootstrapModule(MyModule);
      * ```
     * @param {?} moduleType
     * @param {?=} compilerOptions
     * @return {?}
     */
    PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
        if (compilerOptions === void 0) { compilerOptions = []; }
        throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])();
    };
    /**
     *  Register a listener to be called when the platform is disposed.
     * @abstract
     * @param {?} callback
     * @return {?}
     */
    PlatformRef.prototype.onDestroy = function (callback) { };
    Object.defineProperty(PlatformRef.prototype, "injector", {
        /**
         *  Retrieve the platform {@link Injector}, which is the parent injector for
          * every Angular application on the page and provides singleton providers.
         * @return {?}
         */
        get: function () { throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     *  Destroy the Angular platform and all Angular applications on the page.
     * @abstract
     * @return {?}
     */
    PlatformRef.prototype.destroy = function () { };
    Object.defineProperty(PlatformRef.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return PlatformRef;
}());
/**
 * @param {?} errorHandler
 * @param {?} callback
 * @return {?}
 */
function _callAndReportToErrorHandler(errorHandler, callback) {
    try {
        var /** @type {?} */ result = callback();
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__src_util_lang__["a" /* isPromise */])(result)) {
            return result.catch(function (e) {
                errorHandler.handleError(e);
                // rethrow as the exception handler might not do it
                throw e;
            });
        }
        return result;
    }
    catch (e) {
        errorHandler.handleError(e);
        // rethrow as the exception handler might not do it
        throw e;
    }
}
var PlatformRef_ = (function (_super) {
    __extends(PlatformRef_, _super);
    /**
     * @param {?} _injector
     */
    function PlatformRef_(_injector) {
        _super.call(this);
        this._injector = _injector;
        this._modules = [];
        this._destroyListeners = [];
        this._destroyed = false;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    PlatformRef_.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this._injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformRef_.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { return this._destroyed; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PlatformRef_.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error('The platform has already been destroyed!');
        }
        this._modules.slice().forEach(function (module) { return module.destroy(); });
        this._destroyListeners.forEach(function (listener) { return listener(); });
        this._destroyed = true;
    };
    /**
     * @param {?} moduleFactory
     * @return {?}
     */
    PlatformRef_.prototype.bootstrapModuleFactory = function (moduleFactory) {
        return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
    };
    /**
     * @param {?} moduleFactory
     * @param {?} ngZone
     * @return {?}
     */
    PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function (moduleFactory, ngZone) {
        var _this = this;
        // Note: We need to create the NgZone _before_ we instantiate the module,
        // as instantiating the module creates some providers eagerly.
        // So we create a mini parent injector that just contains the new NgZone and
        // pass that as parent to the NgModuleFactory.
        if (!ngZone)
            ngZone = new __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */]({ enableLongStackTrace: isDevMode() });
        // Attention: Don't use ApplicationRef.run here,
        // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
        return ngZone.run(function () {
            var /** @type {?} */ ngZoneInjector = __WEBPACK_IMPORTED_MODULE_8__di__["f" /* ReflectiveInjector */].resolveAndCreate([{ provide: __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */], useValue: ngZone }], _this.injector);
            var /** @type {?} */ moduleRef = (moduleFactory.create(ngZoneInjector));
            var /** @type {?} */ exceptionHandler = moduleRef.injector.get(__WEBPACK_IMPORTED_MODULE_0__src_error_handler__["a" /* ErrorHandler */], null);
            if (!exceptionHandler) {
                throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            }
            moduleRef.onDestroy(function () { return __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(_this._modules, moduleRef); });
            ngZone.onError.subscribe({ next: function (error) { exceptionHandler.handleError(error); } });
            return _callAndReportToErrorHandler(exceptionHandler, function () {
                var /** @type {?} */ initStatus = moduleRef.injector.get(__WEBPACK_IMPORTED_MODULE_5__application_init__["a" /* ApplicationInitStatus */]);
                return initStatus.donePromise.then(function () {
                    _this._moduleDoBootstrap(moduleRef);
                    return moduleRef;
                });
            });
        });
    };
    /**
     * @param {?} moduleType
     * @param {?=} compilerOptions
     * @return {?}
     */
    PlatformRef_.prototype.bootstrapModule = function (moduleType, compilerOptions) {
        if (compilerOptions === void 0) { compilerOptions = []; }
        return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
    };
    /**
     * @param {?} moduleType
     * @param {?=} compilerOptions
     * @param {?} ngZone
     * @param {?=} componentFactoryCallback
     * @return {?}
     */
    PlatformRef_.prototype._bootstrapModuleWithZone = function (moduleType, compilerOptions, ngZone, componentFactoryCallback) {
        var _this = this;
        if (compilerOptions === void 0) { compilerOptions = []; }
        var /** @type {?} */ compilerFactory = this.injector.get(__WEBPACK_IMPORTED_MODULE_9__linker_compiler__["a" /* CompilerFactory */]);
        var /** @type {?} */ compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
        // ugly internal api hack: generate host component factories for all declared components and
        // pass the factories into the callback - this is used by UpdateAdapter to get hold of all
        // factories.
        if (componentFactoryCallback) {
            return compiler.compileModuleAndAllComponentsAsync(moduleType)
                .then(function (_a) {
                var ngModuleFactory = _a.ngModuleFactory, componentFactories = _a.componentFactories;
                componentFactoryCallback(componentFactories);
                return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
            });
        }
        return compiler.compileModuleAsync(moduleType)
            .then(function (moduleFactory) { return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone); });
    };
    /**
     * @param {?} moduleRef
     * @return {?}
     */
    PlatformRef_.prototype._moduleDoBootstrap = function (moduleRef) {
        var /** @type {?} */ appRef = moduleRef.injector.get(ApplicationRef);
        if (moduleRef.bootstrapFactories.length > 0) {
            moduleRef.bootstrapFactories.forEach(function (compFactory) { return appRef.bootstrap(compFactory); });
        }
        else if (moduleRef.instance.ngDoBootstrap) {
            moduleRef.instance.ngDoBootstrap(appRef);
        }
        else {
            throw new Error(("The module " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__src_facade_lang__["b" /* stringify */])(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") +
                "Please define one of these.");
        }
    };
    PlatformRef_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    PlatformRef_.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["g" /* Injector */], },
    ]; };
    return PlatformRef_;
}(PlatformRef));
function PlatformRef__tsickle_Closure_declarations() {
    /** @type {?} */
    PlatformRef_.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    PlatformRef_.ctorParameters;
    /** @type {?} */
    PlatformRef_.prototype._modules;
    /** @type {?} */
    PlatformRef_.prototype._destroyListeners;
    /** @type {?} */
    PlatformRef_.prototype._destroyed;
    /** @type {?} */
    PlatformRef_.prototype._injector;
}
/**
 *  A reference to an Angular application running on a page.
  * *
  * For more about Angular applications, see the documentation for {@link bootstrap}.
  * *
 * @abstract
 */
var ApplicationRef = (function () {
    function ApplicationRef() {
    }
    /**
     *  Bootstrap a new component at the root level of the application.
      * *
      * ### Bootstrap process
      * *
      * When bootstrapping a new root component into an application, Angular mounts the
      * specified application component onto DOM elements identified by the [componentType]'s
      * selector and kicks off automatic change detection to finish initializing the component.
      * *
      * ### Example
      * {@example core/ts/platform/platform.ts region='longform'}
     * @abstract
     * @param {?} componentFactory
     * @return {?}
     */
    ApplicationRef.prototype.bootstrap = function (componentFactory) { };
    /**
     *  Invoke this method to explicitly process change detection and its side-effects.
      * *
      * In development mode, `tick()` also performs a second change detection cycle to ensure that no
      * further changes are detected. If additional changes are picked up during this second cycle,
      * bindings in the app have side-effects that cannot be resolved in a single change detection
      * pass.
      * In this case, Angular throws an error, since an Angular application can only have one change
      * detection pass during which all change detection must complete.
     * @abstract
     * @return {?}
     */
    ApplicationRef.prototype.tick = function () { };
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
        /**
         *  Get a list of component types registered to this application.
          * This list is populated even before the component is created.
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "components", {
        /**
         *  Get a list of components registered to this application.
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     *  Attaches a view so that it will be dirty checked.
      * The view will be automatically detached when it is destroyed.
      * This will throw if the view is already attached to a ViewContainer.
     * @param {?} view
     * @return {?}
     */
    ApplicationRef.prototype.attachView = function (view) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); };
    /**
     *  Detaches a view from dirty checking again.
     * @param {?} view
     * @return {?}
     */
    ApplicationRef.prototype.detachView = function (view) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); };
    Object.defineProperty(ApplicationRef.prototype, "viewCount", {
        /**
         *  Returns the number of attached views.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return ApplicationRef;
}());
var ApplicationRef_ = (function (_super) {
    __extends(ApplicationRef_, _super);
    /**
     * @param {?} _zone
     * @param {?} _console
     * @param {?} _injector
     * @param {?} _exceptionHandler
     * @param {?} _componentFactoryResolver
     * @param {?} _initStatus
     * @param {?} _testabilityRegistry
     * @param {?} _testability
     */
    function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
        var _this = this;
        _super.call(this);
        this._zone = _zone;
        this._console = _console;
        this._injector = _injector;
        this._exceptionHandler = _exceptionHandler;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initStatus = _initStatus;
        this._testabilityRegistry = _testabilityRegistry;
        this._testability = _testability;
        this._bootstrapListeners = [];
        this._rootComponents = [];
        this._rootComponentTypes = [];
        this._views = [];
        this._runningTick = false;
        this._enforceNoNewChanges = false;
        this._enforceNoNewChanges = isDevMode();
        this._zone.onMicrotaskEmpty.subscribe({ next: function () { _this._zone.run(function () { _this.tick(); }); } });
    }
    /**
     * @param {?} viewRef
     * @return {?}
     */
    ApplicationRef_.prototype.attachView = function (viewRef) {
        var /** @type {?} */ view = ((viewRef)).internalView;
        this._views.push(view);
        view.attachToAppRef(this);
    };
    /**
     * @param {?} viewRef
     * @return {?}
     */
    ApplicationRef_.prototype.detachView = function (viewRef) {
        var /** @type {?} */ view = ((viewRef)).internalView;
        __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(this._views, view);
        view.detach();
    };
    /**
     * @param {?} componentOrFactory
     * @return {?}
     */
    ApplicationRef_.prototype.bootstrap = function (componentOrFactory) {
        var _this = this;
        if (!this._initStatus.done) {
            throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
        }
        var /** @type {?} */ componentFactory;
        if (componentOrFactory instanceof __WEBPACK_IMPORTED_MODULE_10__linker_component_factory__["a" /* ComponentFactory */]) {
            componentFactory = componentOrFactory;
        }
        else {
            componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
        }
        this._rootComponentTypes.push(componentFactory.componentType);
        var /** @type {?} */ compRef = componentFactory.create(this._injector, [], componentFactory.selector);
        compRef.onDestroy(function () { _this._unloadComponent(compRef); });
        var /** @type {?} */ testability = compRef.injector.get(__WEBPACK_IMPORTED_MODULE_13__testability_testability__["a" /* Testability */], null);
        if (testability) {
            compRef.injector.get(__WEBPACK_IMPORTED_MODULE_13__testability_testability__["b" /* TestabilityRegistry */])
                .registerApplication(compRef.location.nativeElement, testability);
        }
        this._loadComponent(compRef);
        if (isDevMode()) {
            this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
        }
        return compRef;
    };
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ApplicationRef_.prototype._loadComponent = function (componentRef) {
        this.attachView(componentRef.hostView);
        this.tick();
        this._rootComponents.push(componentRef);
        // Get the listeners lazily to prevent DI cycles.
        var /** @type {?} */ listeners = (this._injector.get(__WEBPACK_IMPORTED_MODULE_6__application_tokens__["b" /* APP_BOOTSTRAP_LISTENER */], [])
            .concat(this._bootstrapListeners));
        listeners.forEach(function (listener) { return listener(componentRef); });
    };
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ApplicationRef_.prototype._unloadComponent = function (componentRef) {
        this.detachView(componentRef.hostView);
        __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(this._rootComponents, componentRef);
    };
    /**
     * @return {?}
     */
    ApplicationRef_.prototype.tick = function () {
        if (this._runningTick) {
            throw new Error('ApplicationRef.tick is called recursively');
        }
        var /** @type {?} */ scope = ApplicationRef_._tickScope();
        try {
            this._runningTick = true;
            this._views.forEach(function (view) { return view.ref.detectChanges(); });
            if (this._enforceNoNewChanges) {
                this._views.forEach(function (view) { return view.ref.checkNoChanges(); });
            }
        }
        finally {
            this._runningTick = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* wtfLeave */])(scope);
        }
    };
    /**
     * @return {?}
     */
    ApplicationRef_.prototype.ngOnDestroy = function () {
        // TODO(alxhub): Dispose of the NgZone.
        this._views.slice().forEach(function (view) { return view.destroy(); });
    };
    Object.defineProperty(ApplicationRef_.prototype, "viewCount", {
        /**
         * @return {?}
         */
        get: function () { return this._views.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
        /**
         * @return {?}
         */
        get: function () { return this._rootComponentTypes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "components", {
        /**
         * @return {?}
         */
        get: function () { return this._rootComponents; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    ApplicationRef_._tickScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["b" /* wtfCreateScope */])('ApplicationRef#tick()');
    ApplicationRef_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ApplicationRef_.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__console__["a" /* Console */], },
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["g" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__src_error_handler__["a" /* ErrorHandler */], },
        { type: __WEBPACK_IMPORTED_MODULE_11__linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__application_init__["a" /* ApplicationInitStatus */], },
        { type: __WEBPACK_IMPORTED_MODULE_13__testability_testability__["b" /* TestabilityRegistry */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_8__di__["d" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_13__testability_testability__["a" /* Testability */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_8__di__["d" /* Optional */] },] },
    ]; };
    return ApplicationRef_;
}(ApplicationRef));
function ApplicationRef__tsickle_Closure_declarations() {
    /** @type {?} */
    ApplicationRef_._tickScope;
    /** @type {?} */
    ApplicationRef_.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ApplicationRef_.ctorParameters;
    /** @type {?} */
    ApplicationRef_.prototype._bootstrapListeners;
    /** @type {?} */
    ApplicationRef_.prototype._rootComponents;
    /** @type {?} */
    ApplicationRef_.prototype._rootComponentTypes;
    /** @type {?} */
    ApplicationRef_.prototype._views;
    /** @type {?} */
    ApplicationRef_.prototype._runningTick;
    /** @type {?} */
    ApplicationRef_.prototype._enforceNoNewChanges;
    /** @type {?} */
    ApplicationRef_.prototype._zone;
    /** @type {?} */
    ApplicationRef_.prototype._console;
    /** @type {?} */
    ApplicationRef_.prototype._injector;
    /** @type {?} */
    ApplicationRef_.prototype._exceptionHandler;
    /** @type {?} */
    ApplicationRef_.prototype._componentFactoryResolver;
    /** @type {?} */
    ApplicationRef_.prototype._initStatus;
    /** @type {?} */
    ApplicationRef_.prototype._testabilityRegistry;
    /** @type {?} */
    ApplicationRef_.prototype._testability;
}
//# sourceMappingURL=application_ref.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultIterableDifferFactory; });
/* unused harmony export DefaultIterableDiffer */
/* unused harmony export CollectionChangeRecord */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DefaultIterableDifferFactory = (function () {
    function DefaultIterableDifferFactory() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    DefaultIterableDifferFactory.prototype.supports = function (obj) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(obj); };
    /**
     * @param {?} cdRef
     * @param {?=} trackByFn
     * @return {?}
     */
    DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
        return new DefaultIterableDiffer(trackByFn);
    };
    return DefaultIterableDifferFactory;
}());
var /** @type {?} */ trackByIdentity = function (index, item) { return item; };
/**
 * @stable
 */
var DefaultIterableDiffer = (function () {
    /**
     * @param {?=} _trackByFn
     */
    function DefaultIterableDiffer(_trackByFn) {
        this._trackByFn = _trackByFn;
        this._length = null;
        this._collection = null;
        this._linkedRecords = null;
        this._unlinkedRecords = null;
        this._previousItHead = null;
        this._itHead = null;
        this._itTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._movesHead = null;
        this._movesTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
        this._identityChangesHead = null;
        this._identityChangesTail = null;
        this._trackByFn = this._trackByFn || trackByIdentity;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
        /**
         * @return {?}
         */
        get: function () { return this._collection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
        /**
         * @return {?}
         */
        get: function () { return this._length; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._itHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachOperation = function (fn) {
        var /** @type {?} */ nextIt = this._itHead;
        var /** @type {?} */ nextRemove = this._removalsHead;
        var /** @type {?} */ addRemoveOffset = 0;
        var /** @type {?} */ moveOffsets = null;
        while (nextIt || nextRemove) {
            // Figure out which is the next record to process
            // Order: remove, add, move
            var /** @type {?} */ record = !nextRemove ||
                nextIt &&
                    nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ?
                nextIt :
                nextRemove;
            var /** @type {?} */ adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
            var /** @type {?} */ currentIndex = record.currentIndex;
            // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
            if (record === nextRemove) {
                addRemoveOffset--;
                nextRemove = nextRemove._nextRemoved;
            }
            else {
                nextIt = nextIt._next;
                if (record.previousIndex == null) {
                    addRemoveOffset++;
                }
                else {
                    // INVARIANT:  currentIndex < previousIndex
                    if (!moveOffsets)
                        moveOffsets = [];
                    var /** @type {?} */ localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
                    var /** @type {?} */ localCurrentIndex = currentIndex - addRemoveOffset;
                    if (localMovePreviousIndex != localCurrentIndex) {
                        for (var /** @type {?} */ i = 0; i < localMovePreviousIndex; i++) {
                            var /** @type {?} */ offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
                            var /** @type {?} */ index = offset + i;
                            if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                                moveOffsets[i] = offset + 1;
                            }
                        }
                        var /** @type {?} */ previousIndex = record.previousIndex;
                        moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
                    }
                }
            }
            if (adjPreviousIndex !== currentIndex) {
                fn(record, adjPreviousIndex, currentIndex);
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._movesHead; record !== null; record = record._nextMoved) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
        var /** @type {?} */ record;
        for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
            fn(record);
        }
    };
    /**
     * @param {?} collection
     * @return {?}
     */
    DefaultIterableDiffer.prototype.diff = function (collection) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["c" /* isBlank */])(collection))
            collection = [];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(collection)) {
            throw new Error("Error trying to diff '" + collection + "'");
        }
        if (this.check(collection)) {
            return this;
        }
        else {
            return null;
        }
    };
    /**
     * @return {?}
     */
    DefaultIterableDiffer.prototype.onDestroy = function () { };
    /**
     * @param {?} collection
     * @return {?}
     */
    DefaultIterableDiffer.prototype.check = function (collection) {
        var _this = this;
        this._reset();
        var /** @type {?} */ record = this._itHead;
        var /** @type {?} */ mayBeDirty = false;
        var /** @type {?} */ index;
        var /** @type {?} */ item;
        var /** @type {?} */ itemTrackBy;
        if (Array.isArray(collection)) {
            var /** @type {?} */ list = collection;
            this._length = collection.length;
            for (var /** @type {?} */ index_1 = 0; index_1 < this._length; index_1++) {
                item = list[index_1];
                itemTrackBy = this._trackByFn(index_1, item);
                if (record === null || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, itemTrackBy)) {
                    record = this._mismatch(record, item, itemTrackBy, index_1);
                    mayBeDirty = true;
                }
                else {
                    if (mayBeDirty) {
                        // TODO(misko): can we limit this to duplicates only?
                        record = this._verifyReinsertion(record, item, itemTrackBy, index_1);
                    }
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                        this._addIdentityChange(record, item);
                }
                record = record._next;
            }
        }
        else {
            index = 0;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["b" /* iterateListLike */])(collection, function (item /** TODO #9100 */) {
                itemTrackBy = _this._trackByFn(index, item);
                if (record === null || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, itemTrackBy)) {
                    record = _this._mismatch(record, item, itemTrackBy, index);
                    mayBeDirty = true;
                }
                else {
                    if (mayBeDirty) {
                        // TODO(misko): can we limit this to duplicates only?
                        record = _this._verifyReinsertion(record, item, itemTrackBy, index);
                    }
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                        _this._addIdentityChange(record, item);
                }
                record = record._next;
                index++;
            });
            this._length = index;
        }
        this._truncate(record);
        this._collection = collection;
        return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
        /**
         * @return {?}
         */
        get: function () {
            return this._additionsHead !== null || this._movesHead !== null ||
                this._removalsHead !== null || this._identityChangesHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Reset the state of the change objects to show no changes. This means set previousKey to
      * currentKey, and clear all of the queues (additions, moves, removals).
      * Set the previousIndexes of moved and added items to their currentIndexes
      * Reset the list of additions, moves and removals
      * *
     * @return {?}
     */
    DefaultIterableDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var /** @type {?} */ record = void 0;
            var /** @type {?} */ nextRecord = void 0;
            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                record.previousIndex = record.currentIndex;
            }
            this._additionsHead = this._additionsTail = null;
            for (record = this._movesHead; record !== null; record = nextRecord) {
                record.previousIndex = record.currentIndex;
                nextRecord = record._nextMoved;
            }
            this._movesHead = this._movesTail = null;
            this._removalsHead = this._removalsTail = null;
            this._identityChangesHead = this._identityChangesTail = null;
        }
    };
    /**
     *  This is the core function which handles differences between collections.
      * *
      * - `record` is the record which we saw at this position last time. If null then it is a new
      * item.
      * - `item` is the current item in the collection
      * - `index` is the position of the item in the collection
      * *
     * @param {?} record
     * @param {?} item
     * @param {?} itemTrackBy
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
        // The previous record after which we will append the current one.
        var /** @type {?} */ previousRecord;
        if (record === null) {
            previousRecord = this._itTail;
        }
        else {
            previousRecord = record._prev;
            // Remove the record from the collection since we know it does not match the item.
            this._remove(record);
        }
        // Attempt to see if we have seen the item before.
        record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
        if (record !== null) {
            // We have seen this before, we need to move it forward in the collection.
            // But first we need to check if identity changed, so we can update in view if necessary
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                this._addIdentityChange(record, item);
            this._moveAfter(record, previousRecord, index);
        }
        else {
            // Never seen it, check evicted list.
            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
            if (record !== null) {
                // It is an item which we have evicted earlier: reinsert it back into the list.
                // But first we need to check if identity changed, so we can update in view if necessary
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                    this._addIdentityChange(record, item);
                this._reinsertAfter(record, previousRecord, index);
            }
            else {
                // It is a new item: add it.
                record =
                    this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
            }
        }
        return record;
    };
    /**
     *  This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
      * *
      * Use case: `[a, a]` => `[b, a, a]`
      * *
      * If we did not have this check then the insertion of `b` would:
      * 1) evict first `a`
      * 2) insert `b` at `0` index.
      * 3) leave `a` at index `1` as is. <-- this is wrong!
      * 3) reinsert `a` at index 2. <-- this is wrong!
      * *
      * The correct behavior is:
      * 1) evict first `a`
      * 2) insert `b` at `0` index.
      * 3) reinsert `a` at index 1.
      * 3) move `a` at from `1` to `2`.
      * *
      * *
      * Double check that we have not evicted a duplicate item. We need to check if the item type may
      * have already been removed:
      * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
      * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
      * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
      * at the end.
      * *
     * @param {?} record
     * @param {?} item
     * @param {?} itemTrackBy
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
        var /** @type {?} */ reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
        if (reinsertRecord !== null) {
            record = this._reinsertAfter(reinsertRecord, record._prev, index);
        }
        else if (record.currentIndex != index) {
            record.currentIndex = index;
            this._addToMoves(record, index);
        }
        return record;
    };
    /**
     *  Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
      * *
      * - `record` The first excess {@link CollectionChangeRecord}.
      * *
     * @param {?} record
     * @return {?}
     */
    DefaultIterableDiffer.prototype._truncate = function (record) {
        // Anything after that needs to be removed;
        while (record !== null) {
            var /** @type {?} */ nextRecord = record._next;
            this._addToRemovals(this._unlink(record));
            record = nextRecord;
        }
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.clear();
        }
        if (this._additionsTail !== null) {
            this._additionsTail._nextAdded = null;
        }
        if (this._movesTail !== null) {
            this._movesTail._nextMoved = null;
        }
        if (this._itTail !== null) {
            this._itTail._next = null;
        }
        if (this._removalsTail !== null) {
            this._removalsTail._nextRemoved = null;
        }
        if (this._identityChangesTail !== null) {
            this._identityChangesTail._nextIdentityChange = null;
        }
    };
    /**
     * @param {?} record
     * @param {?} prevRecord
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.remove(record);
        }
        var /** @type {?} */ prev = record._prevRemoved;
        var /** @type {?} */ next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /**
     * @param {?} record
     * @param {?} prevRecord
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
        this._unlink(record);
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /**
     * @param {?} record
     * @param {?} prevRecord
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
        this._insertAfter(record, prevRecord, index);
        if (this._additionsTail === null) {
            // todo(vicb)
            // assert(this._additionsHead === null);
            this._additionsTail = this._additionsHead = record;
        }
        else {
            // todo(vicb)
            // assert(_additionsTail._nextAdded === null);
            // assert(record._nextAdded === null);
            this._additionsTail = this._additionsTail._nextAdded = record;
        }
        return record;
    };
    /**
     * @param {?} record
     * @param {?} prevRecord
     * @param {?} index
     * @return {?}
     */
    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
        // todo(vicb)
        // assert(record != prevRecord);
        // assert(record._next === null);
        // assert(record._prev === null);
        var /** @type {?} */ next = prevRecord === null ? this._itHead : prevRecord._next;
        // todo(vicb)
        // assert(next != record);
        // assert(prevRecord != record);
        record._next = next;
        record._prev = prevRecord;
        if (next === null) {
            this._itTail = record;
        }
        else {
            next._prev = record;
        }
        if (prevRecord === null) {
            this._itHead = record;
        }
        else {
            prevRecord._next = record;
        }
        if (this._linkedRecords === null) {
            this._linkedRecords = new _DuplicateMap();
        }
        this._linkedRecords.put(record);
        record.currentIndex = index;
        return record;
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultIterableDiffer.prototype._remove = function (record) {
        return this._addToRemovals(this._unlink(record));
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultIterableDiffer.prototype._unlink = function (record) {
        if (this._linkedRecords !== null) {
            this._linkedRecords.remove(record);
        }
        var /** @type {?} */ prev = record._prev;
        var /** @type {?} */ next = record._next;
        // todo(vicb)
        // assert((record._prev = null) === null);
        // assert((record._next = null) === null);
        if (prev === null) {
            this._itHead = next;
        }
        else {
            prev._next = next;
        }
        if (next === null) {
            this._itTail = prev;
        }
        else {
            next._prev = prev;
        }
        return record;
    };
    /**
     * @param {?} record
     * @param {?} toIndex
     * @return {?}
     */
    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
        // todo(vicb)
        // assert(record._nextMoved === null);
        if (record.previousIndex === toIndex) {
            return record;
        }
        if (this._movesTail === null) {
            // todo(vicb)
            // assert(_movesHead === null);
            this._movesTail = this._movesHead = record;
        }
        else {
            // todo(vicb)
            // assert(_movesTail._nextMoved === null);
            this._movesTail = this._movesTail._nextMoved = record;
        }
        return record;
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
        if (this._unlinkedRecords === null) {
            this._unlinkedRecords = new _DuplicateMap();
        }
        this._unlinkedRecords.put(record);
        record.currentIndex = null;
        record._nextRemoved = null;
        if (this._removalsTail === null) {
            // todo(vicb)
            // assert(_removalsHead === null);
            this._removalsTail = this._removalsHead = record;
            record._prevRemoved = null;
        }
        else {
            // todo(vicb)
            // assert(_removalsTail._nextRemoved === null);
            // assert(record._nextRemoved === null);
            record._prevRemoved = this._removalsTail;
            this._removalsTail = this._removalsTail._nextRemoved = record;
        }
        return record;
    };
    /**
     * @param {?} record
     * @param {?} item
     * @return {?}
     */
    DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
        record.item = item;
        if (this._identityChangesTail === null) {
            this._identityChangesTail = this._identityChangesHead = record;
        }
        else {
            this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
        }
        return record;
    };
    /**
     * @return {?}
     */
    DefaultIterableDiffer.prototype.toString = function () {
        var /** @type {?} */ list = [];
        this.forEachItem(function (record /** TODO #9100 */) { return list.push(record); });
        var /** @type {?} */ previous = [];
        this.forEachPreviousItem(function (record /** TODO #9100 */) { return previous.push(record); });
        var /** @type {?} */ additions = [];
        this.forEachAddedItem(function (record /** TODO #9100 */) { return additions.push(record); });
        var /** @type {?} */ moves = [];
        this.forEachMovedItem(function (record /** TODO #9100 */) { return moves.push(record); });
        var /** @type {?} */ removals = [];
        this.forEachRemovedItem(function (record /** TODO #9100 */) { return removals.push(record); });
        var /** @type {?} */ identityChanges = [];
        this.forEachIdentityChange(function (record /** TODO #9100 */) { return identityChanges.push(record); });
        return 'collection: ' + list.join(', ') + '\n' +
            'previous: ' + previous.join(', ') + '\n' +
            'additions: ' + additions.join(', ') + '\n' +
            'moves: ' + moves.join(', ') + '\n' +
            'removals: ' + removals.join(', ') + '\n' +
            'identityChanges: ' + identityChanges.join(', ') + '\n';
    };
    return DefaultIterableDiffer;
}());
function DefaultIterableDiffer_tsickle_Closure_declarations() {
    /** @type {?} */
    DefaultIterableDiffer.prototype._length;
    /** @type {?} */
    DefaultIterableDiffer.prototype._collection;
    /** @type {?} */
    DefaultIterableDiffer.prototype._linkedRecords;
    /** @type {?} */
    DefaultIterableDiffer.prototype._unlinkedRecords;
    /** @type {?} */
    DefaultIterableDiffer.prototype._previousItHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._itHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._itTail;
    /** @type {?} */
    DefaultIterableDiffer.prototype._additionsHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._additionsTail;
    /** @type {?} */
    DefaultIterableDiffer.prototype._movesHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._movesTail;
    /** @type {?} */
    DefaultIterableDiffer.prototype._removalsHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._removalsTail;
    /** @type {?} */
    DefaultIterableDiffer.prototype._identityChangesHead;
    /** @type {?} */
    DefaultIterableDiffer.prototype._identityChangesTail;
    /** @type {?} */
    DefaultIterableDiffer.prototype._trackByFn;
}
/**
 * @stable
 */
var CollectionChangeRecord = (function () {
    /**
     * @param {?} item
     * @param {?} trackById
     */
    function CollectionChangeRecord(item, trackById) {
        this.item = item;
        this.trackById = trackById;
        this.currentIndex = null;
        this.previousIndex = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._prev = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._prevDup = null;
        /** @internal */
        this._nextDup = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextMoved = null;
        /** @internal */
        this._nextIdentityChange = null;
    }
    /**
     * @return {?}
     */
    CollectionChangeRecord.prototype.toString = function () {
        return this.previousIndex === this.currentIndex ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.item) :
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.item) + '[' +
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.previousIndex) + '->' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
}());
function CollectionChangeRecord_tsickle_Closure_declarations() {
    /** @type {?} */
    CollectionChangeRecord.prototype.currentIndex;
    /** @type {?} */
    CollectionChangeRecord.prototype.previousIndex;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextPrevious;
    /** @type {?} */
    CollectionChangeRecord.prototype._prev;
    /** @type {?} */
    CollectionChangeRecord.prototype._next;
    /** @type {?} */
    CollectionChangeRecord.prototype._prevDup;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextDup;
    /** @type {?} */
    CollectionChangeRecord.prototype._prevRemoved;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextRemoved;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextAdded;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextMoved;
    /** @type {?} */
    CollectionChangeRecord.prototype._nextIdentityChange;
    /** @type {?} */
    CollectionChangeRecord.prototype.item;
    /** @type {?} */
    CollectionChangeRecord.prototype.trackById;
}
// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
var _DuplicateItemRecordList = (function () {
    function _DuplicateItemRecordList() {
        /** @internal */
        this._head = null;
        /** @internal */
        this._tail = null;
    }
    /**
     *  Append the record to the list of duplicates.
      * *
      * Note: by design all records in the list of duplicates hold the same value in record.item.
     * @param {?} record
     * @return {?}
     */
    _DuplicateItemRecordList.prototype.add = function (record) {
        if (this._head === null) {
            this._head = this._tail = record;
            record._nextDup = null;
            record._prevDup = null;
        }
        else {
            // todo(vicb)
            // assert(record.item ==  _head.item ||
            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
            this._tail._nextDup = record;
            record._prevDup = this._tail;
            record._nextDup = null;
            this._tail = record;
        }
    };
    /**
     * @param {?} trackById
     * @param {?} afterIndex
     * @return {?}
     */
    _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
        var /** @type {?} */ record;
        for (record = this._head; record !== null; record = record._nextDup) {
            if ((afterIndex === null || afterIndex < record.currentIndex) &&
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, trackById)) {
                return record;
            }
        }
        return null;
    };
    /**
     *  Remove one {@link CollectionChangeRecord} from the list of duplicates.
      * *
      * Returns whether the list of duplicates is empty.
     * @param {?} record
     * @return {?}
     */
    _DuplicateItemRecordList.prototype.remove = function (record) {
        // todo(vicb)
        // assert(() {
        //  // verify that the record being removed is in the list.
        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
        //    if (identical(cursor, record)) return true;
        //  }
        //  return false;
        //});
        var /** @type {?} */ prev = record._prevDup;
        var /** @type {?} */ next = record._nextDup;
        if (prev === null) {
            this._head = next;
        }
        else {
            prev._nextDup = next;
        }
        if (next === null) {
            this._tail = prev;
        }
        else {
            next._prevDup = prev;
        }
        return this._head === null;
    };
    return _DuplicateItemRecordList;
}());
function _DuplicateItemRecordList_tsickle_Closure_declarations() {
    /** @type {?} */
    _DuplicateItemRecordList.prototype._head;
    /** @type {?} */
    _DuplicateItemRecordList.prototype._tail;
}
var _DuplicateMap = (function () {
    function _DuplicateMap() {
        this.map = new Map();
    }
    /**
     * @param {?} record
     * @return {?}
     */
    _DuplicateMap.prototype.put = function (record) {
        var /** @type {?} */ key = record.trackById;
        var /** @type {?} */ duplicates = this.map.get(key);
        if (!duplicates) {
            duplicates = new _DuplicateItemRecordList();
            this.map.set(key, duplicates);
        }
        duplicates.add(record);
    };
    /**
     *  Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
      * have already iterated over, we use the afterIndex to pretend it is not there.
      * *
      * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
      * have any more `a`s needs to return the last `a` not the first or second.
     * @param {?} trackById
     * @param {?=} afterIndex
     * @return {?}
     */
    _DuplicateMap.prototype.get = function (trackById, afterIndex) {
        if (afterIndex === void 0) { afterIndex = null; }
        var /** @type {?} */ key = trackById;
        var /** @type {?} */ recordList = this.map.get(key);
        return recordList ? recordList.get(trackById, afterIndex) : null;
    };
    /**
     *  Removes a {@link CollectionChangeRecord} from the list of duplicates.
      * *
      * The list of duplicates also is removed from the map if it gets empty.
     * @param {?} record
     * @return {?}
     */
    _DuplicateMap.prototype.remove = function (record) {
        var /** @type {?} */ key = record.trackById;
        var /** @type {?} */ recordList = this.map.get(key);
        // Remove the list of duplicates when it gets empty
        if (recordList.remove(record)) {
            this.map.delete(key);
        }
        return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
        /**
         * @return {?}
         */
        get: function () { return this.map.size === 0; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
    /**
     * @return {?}
     */
    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.map) + ')'; };
    return _DuplicateMap;
}());
function _DuplicateMap_tsickle_Closure_declarations() {
    /** @type {?} */
    _DuplicateMap.prototype.map;
}
/**
 * @param {?} item
 * @param {?} addRemoveOffset
 * @param {?} moveOffsets
 * @return {?}
 */
function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    var /** @type {?} */ previousIndex = item.previousIndex;
    if (previousIndex === null)
        return previousIndex;
    var /** @type {?} */ moveOffset = 0;
    if (moveOffsets && previousIndex < moveOffsets.length) {
        moveOffset = moveOffsets[previousIndex];
    }
    return previousIndex + addRemoveOffset + moveOffset;
}
//# sourceMappingURL=default_iterable_differ.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Console; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var Console = (function () {
    function Console() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    Console.prototype.log = function (message) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["g" /* print */])(message); };
    /**
     * @param {?} message
     * @return {?}
     */
    Console.prototype.warn = function (message) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* warn */])(message); };
    Console.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Console.ctorParameters = function () { return []; };
    return Console;
}());
function Console_tsickle_Closure_declarations() {
    /** @type {?} */
    Console.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Console.ctorParameters;
}
//# sourceMappingURL=console.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* unused harmony export forwardRef */
/* harmony export (immutable) */ exports["a"] = resolveForwardRef;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 *  Allows to refer to references which are not yet defined.
  * *
  * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
  * DI is declared,
  * but not yet defined. It is also used when the `token` which we use when creating a query is not
  * yet defined.
  * *
  * ### Example
  * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @param {?} forwardRefFn
 * @return {?}
 */
function forwardRef(forwardRefFn) {
    ((forwardRefFn)).__forward_ref__ = forwardRef;
    ((forwardRefFn)).toString = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this()); };
    return (((forwardRefFn)));
}
/**
 *  Lazily retrieves the reference value from a forwardRef.
  * *
  * Acts as the identity function when given a non-forward-ref value.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
  * *
  * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
  * *
  * See: {@link forwardRef}
 * @param {?} type
 * @return {?}
 */
function resolveForwardRef(type) {
    if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') &&
        type.__forward_ref__ === forwardRef) {
        return ((type))();
    }
    else {
        return type;
    }
}
//# sourceMappingURL=forward_ref.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OpaqueToken; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Creates a token that can be used in a DI Provider.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
 *
 * ```typescript
 * var t = new OpaqueToken("value");
 *
 * var injector = Injector.resolveAndCreate([
 *   {provide: t, useValue: "bindingValue"}
 * ]);
 *
 * expect(injector.get(t)).toEqual("bindingValue");
 * ```
 *
 * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
 * caused by multiple providers using the same string as two different tokens.
 *
 * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
 * error messages.
 * @stable
 */
// so that metadata is gathered for this class
var OpaqueToken = (function () {
    /**
     * @param {?} _desc
     */
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    /**
     * @return {?}
     */
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__metadata__["a" /* Injectable */] },
    ];
    /** @nocollapse */
    OpaqueToken.ctorParameters = function () { return [
        null,
    ]; };
    return OpaqueToken;
}());
function OpaqueToken_tsickle_Closure_declarations() {
    /** @type {?} */
    OpaqueToken.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    OpaqueToken.ctorParameters;
    /** @type {?} */
    OpaqueToken.prototype._desc;
}
//# sourceMappingURL=opaque_token.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forward_ref__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectiveKey; });
/* unused harmony export KeyRegistry */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 *  A unique object used for retrieving items from the {@link ReflectiveInjector}.
  * *
  * Keys have:
  * - a system-wide unique `id`.
  * - a `token`.
  * *
  * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
  * the
  * injector to store created objects in a more efficient way.
  * *
  * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
  * resolving
  * providers.
 */
var ReflectiveKey = (function () {
    /**
     *  Private
     * @param {?} token
     * @param {?} id
     */
    function ReflectiveKey(token, id) {
        this.token = token;
        this.id = id;
        if (!token) {
            throw new Error('Token must be defined!');
        }
    }
    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
        /**
         *  Returns a stringified token.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.token); },
        enumerable: true,
        configurable: true
    });
    /**
     *  Retrieves a `Key` for a token.
     * @param {?} token
     * @return {?}
     */
    ReflectiveKey.get = function (token) {
        return _globalKeyRegistry.get(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__forward_ref__["a" /* resolveForwardRef */])(token));
    };
    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
        /**
         * @return {?} the number of keys registered in the system.
         */
        get: function () { return _globalKeyRegistry.numberOfKeys; },
        enumerable: true,
        configurable: true
    });
    return ReflectiveKey;
}());
function ReflectiveKey_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveKey.prototype.token;
    /** @type {?} */
    ReflectiveKey.prototype.id;
}
/**
 * @internal
 */
var KeyRegistry = (function () {
    function KeyRegistry() {
        this._allKeys = new Map();
    }
    /**
     * @param {?} token
     * @return {?}
     */
    KeyRegistry.prototype.get = function (token) {
        if (token instanceof ReflectiveKey)
            return token;
        if (this._allKeys.has(token)) {
            return this._allKeys.get(token);
        }
        var /** @type {?} */ newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
        this._allKeys.set(token, newKey);
        return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
        /**
         * @return {?}
         */
        get: function () { return this._allKeys.size; },
        enumerable: true,
        configurable: true
    });
    return KeyRegistry;
}());
function KeyRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    KeyRegistry.prototype._allKeys;
}
var /** @type {?} */ _globalKeyRegistry = new KeyRegistry();
//# sourceMappingURL=reflective_key.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forward_ref__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reflective_errors__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reflective_key__ = __webpack_require__(25);
/* unused harmony export ReflectiveDependency */
/* unused harmony export ResolvedReflectiveProvider_ */
/* unused harmony export ResolvedReflectiveFactory */
/* harmony export (immutable) */ exports["a"] = resolveReflectiveProviders;
/* unused harmony export mergeResolvedReflectiveProviders */
/* harmony export (immutable) */ exports["b"] = constructDependencies;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 *  `Dependency` is used by the framework to extend DI.
  * This is internal to Angular and should not be used directly.
 */
var ReflectiveDependency = (function () {
    /**
     * @param {?} key
     * @param {?} optional
     * @param {?} lowerBoundVisibility
     * @param {?} upperBoundVisibility
     * @param {?} properties
     */
    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
        this.key = key;
        this.optional = optional;
        this.lowerBoundVisibility = lowerBoundVisibility;
        this.upperBoundVisibility = upperBoundVisibility;
        this.properties = properties;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    ReflectiveDependency.fromKey = function (key) {
        return new ReflectiveDependency(key, false, null, null, []);
    };
    return ReflectiveDependency;
}());
function ReflectiveDependency_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveDependency.prototype.key;
    /** @type {?} */
    ReflectiveDependency.prototype.optional;
    /** @type {?} */
    ReflectiveDependency.prototype.lowerBoundVisibility;
    /** @type {?} */
    ReflectiveDependency.prototype.upperBoundVisibility;
    /** @type {?} */
    ReflectiveDependency.prototype.properties;
}
var /** @type {?} */ _EMPTY_LIST = [];
var ResolvedReflectiveProvider_ = (function () {
    /**
     * @param {?} key
     * @param {?} resolvedFactories
     * @param {?} multiProvider
     */
    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
        this.key = key;
        this.resolvedFactories = resolvedFactories;
        this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
        /**
         * @return {?}
         */
        get: function () { return this.resolvedFactories[0]; },
        enumerable: true,
        configurable: true
    });
    return ResolvedReflectiveProvider_;
}());
function ResolvedReflectiveProvider__tsickle_Closure_declarations() {
    /** @type {?} */
    ResolvedReflectiveProvider_.prototype.key;
    /** @type {?} */
    ResolvedReflectiveProvider_.prototype.resolvedFactories;
    /** @type {?} */
    ResolvedReflectiveProvider_.prototype.multiProvider;
}
/**
 *  An internal resolved representation of a factory function created by resolving {@link
  * Provider}.
 */
var ResolvedReflectiveFactory = (function () {
    /**
     * @param {?} factory
     * @param {?} dependencies
     */
    function ResolvedReflectiveFactory(factory, dependencies) {
        this.factory = factory;
        this.dependencies = dependencies;
    }
    return ResolvedReflectiveFactory;
}());
function ResolvedReflectiveFactory_tsickle_Closure_declarations() {
    /**
     * Factory function which can return an instance of an object represented by a key.
     * @type {?}
     */
    ResolvedReflectiveFactory.prototype.factory;
    /**
     * Arguments (dependencies) to the `factory` function.
     * @type {?}
     */
    ResolvedReflectiveFactory.prototype.dependencies;
}
/**
 *  Resolve a single provider.
 * @param {?} provider
 * @return {?}
 */
function resolveReflectiveFactory(provider) {
    var /** @type {?} */ factoryFn;
    var /** @type {?} */ resolvedDeps;
    if (provider.useClass) {
        var /** @type {?} */ useClass = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__forward_ref__["a" /* resolveForwardRef */])(provider.useClass);
        factoryFn = __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__["a" /* reflector */].factory(useClass);
        resolvedDeps = _dependenciesFor(useClass);
    }
    else if (provider.useExisting) {
        factoryFn = function (aliasInstance) { return aliasInstance; };
        resolvedDeps = [ReflectiveDependency.fromKey(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(provider.useExisting))];
    }
    else if (provider.useFactory) {
        factoryFn = provider.useFactory;
        resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
    }
    else {
        factoryFn = function () { return provider.useValue; };
        resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
}
/**
 *  Converts the {@link Provider} into {@link ResolvedProvider}.
  * *
  * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
  * convenience provider syntax.
 * @param {?} provider
 * @return {?}
 */
function resolveReflectiveProvider(provider) {
    return new ResolvedReflectiveProvider_(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
}
/**
 *  Resolve a list of Providers.
 * @param {?} providers
 * @return {?}
 */
function resolveReflectiveProviders(providers) {
    var /** @type {?} */ normalized = _normalizeProviders(providers, []);
    var /** @type {?} */ resolved = normalized.map(resolveReflectiveProvider);
    var /** @type {?} */ resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
    return Array.from(resolvedProviderMap.values());
}
/**
 *  Merges a list of ResolvedProviders into a list where
  * each key is contained exactly once and multi providers
  * have been merged.
 * @param {?} providers
 * @param {?} normalizedProvidersMap
 * @return {?}
 */
function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
    for (var /** @type {?} */ i = 0; i < providers.length; i++) {
        var /** @type {?} */ provider = providers[i];
        var /** @type {?} */ existing = normalizedProvidersMap.get(provider.key.id);
        if (existing) {
            if (provider.multiProvider !== existing.multiProvider) {
                throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["a" /* MixingMultiProvidersWithRegularProvidersError */](existing, provider);
            }
            if (provider.multiProvider) {
                for (var /** @type {?} */ j = 0; j < provider.resolvedFactories.length; j++) {
                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
                }
            }
            else {
                normalizedProvidersMap.set(provider.key.id, provider);
            }
        }
        else {
            var /** @type {?} */ resolvedProvider = void 0;
            if (provider.multiProvider) {
                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
            }
            else {
                resolvedProvider = provider;
            }
            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
        }
    }
    return normalizedProvidersMap;
}
/**
 * @param {?} providers
 * @param {?} res
 * @return {?}
 */
function _normalizeProviders(providers, res) {
    providers.forEach(function (b) {
        if (b instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */]) {
            res.push({ provide: b, useClass: b });
        }
        else if (b && typeof b == 'object' && ((b)).provide !== undefined) {
            res.push(/** @type {?} */ (b));
        }
        else if (b instanceof Array) {
            _normalizeProviders(b, res);
        }
        else {
            throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["b" /* InvalidProviderError */](b);
        }
    });
    return res;
}
/**
 * @param {?} typeOrFunc
 * @param {?} dependencies
 * @return {?}
 */
function constructDependencies(typeOrFunc, dependencies) {
    if (!dependencies) {
        return _dependenciesFor(typeOrFunc);
    }
    else {
        var /** @type {?} */ params_1 = dependencies.map(function (t) { return [t]; });
        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params_1); });
    }
}
/**
 * @param {?} typeOrFunc
 * @return {?}
 */
function _dependenciesFor(typeOrFunc) {
    var /** @type {?} */ params = __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__["a" /* reflector */].parameters(typeOrFunc);
    if (!params)
        return [];
    if (params.some(function (p) { return p == null; })) {
        throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["c" /* NoAnnotationError */](typeOrFunc, params);
    }
    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
}
/**
 * @param {?} typeOrFunc
 * @param {?} metadata
 * @param {?} params
 * @return {?}
 */
function _extractToken(typeOrFunc, metadata, params) {
    var /** @type {?} */ depProps = [];
    var /** @type {?} */ token = null;
    var /** @type {?} */ optional = false;
    if (!Array.isArray(metadata)) {
        if (metadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* Inject */]) {
            return _createDependency(metadata.token, optional, null, null, depProps);
        }
        else {
            return _createDependency(metadata, optional, null, null, depProps);
        }
    }
    var /** @type {?} */ lowerBoundVisibility = null;
    var /** @type {?} */ upperBoundVisibility = null;
    for (var /** @type {?} */ i = 0; i < metadata.length; ++i) {
        var /** @type {?} */ paramMetadata = metadata[i];
        if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */]) {
            token = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* Inject */]) {
            token = paramMetadata.token;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["c" /* Optional */]) {
            optional = true;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* Self */]) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* Host */]) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["f" /* SkipSelf */]) {
            lowerBoundVisibility = paramMetadata;
        }
    }
    token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__forward_ref__["a" /* resolveForwardRef */])(token);
    if (token != null) {
        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    }
    else {
        throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["c" /* NoAnnotationError */](typeOrFunc, params);
    }
}
/**
 * @param {?} token
 * @param {?} optional
 * @param {?} lowerBoundVisibility
 * @param {?} upperBoundVisibility
 * @param {?} depProps
 * @return {?}
 */
function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new ReflectiveDependency(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
}
//# sourceMappingURL=reflective_provider.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EventEmitter; });
/* unused harmony reexport Observable */
/* unused harmony reexport Subject */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 *  Use by directives and components to emit custom Events.
  * *
  * ### Examples
  * *
  * In the following example, `Zippy` alternatively emits `open` and `close` events when its
  * title gets clicked:
  * *
  * ```
  * selector: 'zippy',
  * template: `
  * <div class="zippy">
  * <div (click)="toggle()">Toggle</div>
  * <div [hidden]="!visible">
  * <ng-content></ng-content>
  * </div>
  * </div>`})
  * export class Zippy {
  * visible: boolean = true;
  * @Output() open: EventEmitter<any> = new EventEmitter();
  * @Output() close: EventEmitter<any> = new EventEmitter();
  * *
  * toggle() {
  * this.visible = !this.visible;
  * if (this.visible) {
  * this.open.emit(null);
  * } else {
  * this.close.emit(null);
  * }
  * }
  * }
  * ```
  * *
  * The events payload can be accessed by the parameter `$event` on the components output event
  * handler:
  * *
  * ```
  * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
  * ```
  * *
  * Uses Rx.Observable but provides an adapter to make it work as specified here:
  * https://github.com/jhusain/observable-spec
  * *
  * Once a reference implementation of the spec is available, switch to it.
 */
var EventEmitter = (function (_super) {
    __extends(EventEmitter, _super);
    /**
     *  Creates an instance of [EventEmitter], which depending on [isAsync],
      * delivers events synchronously or asynchronously.
     * @param {?=} isAsync
     */
    function EventEmitter(isAsync) {
        if (isAsync === void 0) { isAsync = false; }
        _super.call(this);
        this.__isAsync = isAsync;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    /**
     * @param {?=} generatorOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
        var /** @type {?} */ schedulerFn;
        var /** @type {?} */ errorFn = function (err) { return null; };
        var /** @type {?} */ completeFn = function () { return null; };
        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this.__isAsync ? function (value) {
                setTimeout(function () { return generatorOrNext.next(value); });
            } : function (value) { generatorOrNext.next(value); };
            if (generatorOrNext.error) {
                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                    function (err) { generatorOrNext.error(err); };
            }
            if (generatorOrNext.complete) {
                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                    function () { generatorOrNext.complete(); };
            }
        }
        else {
            schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
                function (value) { generatorOrNext(value); };
            if (error) {
                errorFn =
                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
            }
            if (complete) {
                completeFn =
                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
            }
        }
        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));
function EventEmitter_tsickle_Closure_declarations() {
    /** @type {?} */
    EventEmitter.prototype.__isAsync;
}
//# sourceMappingURL=async.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_utils__ = __webpack_require__(15);
/* unused harmony export ComponentRef */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ComponentRef_; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentFactory; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 *  Represents an instance of a Component created via a {@link ComponentFactory}.
  * *
  * `ComponentRef` provides access to the Component Instance as well other objects related to this
  * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
  * method.
 * @abstract
 */
var ComponentRef = (function () {
    function ComponentRef() {
    }
    Object.defineProperty(ComponentRef.prototype, "location", {
        /**
         *  Location of the Host Element of this Component Instance.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "injector", {
        /**
         *  The injector on which the component instance exists.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "instance", {
        /**
         *  The instance of the Component.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "hostView", {
        /**
         *  The {@link ViewRef} of the Host View of this Component instance.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
        /**
         *  The {@link ChangeDetectorRef} of the Component instance.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "componentType", {
        /**
         *  The component type.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    /**
     *  Destroys the component instance and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    ComponentRef.prototype.destroy = function () { };
    /**
     *  Allows to register a callback that will be called when the component is destroyed.
     * @abstract
     * @param {?} callback
     * @return {?}
     */
    ComponentRef.prototype.onDestroy = function (callback) { };
    return ComponentRef;
}());
var ComponentRef_ = (function (_super) {
    __extends(ComponentRef_, _super);
    /**
     * @param {?} _index
     * @param {?} _parentView
     * @param {?} _nativeElement
     * @param {?} _component
     */
    function ComponentRef_(_index, _parentView, _nativeElement, _component) {
        _super.call(this);
        this._index = _index;
        this._parentView = _parentView;
        this._nativeElement = _nativeElement;
        this._component = _component;
    }
    Object.defineProperty(ComponentRef_.prototype, "location", {
        /**
         * @return {?}
         */
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__element_ref__["a" /* ElementRef */](this._nativeElement); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this._parentView.injector(this._index); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "instance", {
        /**
         * @return {?}
         */
        get: function () { return this._component; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "hostView", {
        /**
         * @return {?}
         */
        get: function () { return this._parentView.ref; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
        /**
         * @return {?}
         */
        get: function () { return this._parentView.ref; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "componentType", {
        /**
         * @return {?}
         */
        get: function () { return (this._component.constructor); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ComponentRef_.prototype.destroy = function () { this._parentView.detachAndDestroy(); };
    /**
     * @param {?} callback
     * @return {?}
     */
    ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
    return ComponentRef_;
}(ComponentRef));
function ComponentRef__tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentRef_.prototype._index;
    /** @type {?} */
    ComponentRef_.prototype._parentView;
    /** @type {?} */
    ComponentRef_.prototype._nativeElement;
    /** @type {?} */
    ComponentRef_.prototype._component;
}
/**
 * @experimental
 */
var /** @type {?} */ EMPTY_CONTEXT = new Object();
/**
 * @stable
 */
var ComponentFactory = (function () {
    /**
     * @param {?} selector
     * @param {?} _viewClass
     * @param {?} _componentType
     */
    function ComponentFactory(selector, _viewClass, _componentType) {
        this.selector = selector;
        this._viewClass = _viewClass;
        this._componentType = _componentType;
    }
    Object.defineProperty(ComponentFactory.prototype, "componentType", {
        /**
         * @return {?}
         */
        get: function () { return this._componentType; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Creates a new component.
     * @param {?} injector
     * @param {?=} projectableNodes
     * @param {?=} rootSelectorOrNode
     * @return {?}
     */
    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
        if (projectableNodes === void 0) { projectableNodes = null; }
        if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
        var /** @type {?} */ vu = injector.get(__WEBPACK_IMPORTED_MODULE_2__view_utils__["ViewUtils"]);
        if (!projectableNodes) {
            projectableNodes = [];
        }
        var /** @type {?} */ hostView = new this._viewClass(vu, null, null, null);
        return hostView.createHostView(rootSelectorOrNode, injector, projectableNodes);
    };
    return ComponentFactory;
}());
function ComponentFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentFactory.prototype.selector;
    /** @type {?} */
    ComponentFactory.prototype._viewClass;
    /** @type {?} */
    ComponentFactory.prototype._componentType;
}
//# sourceMappingURL=component_factory.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflection_capabilities__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflector__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return reflector; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__reflector__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * The {@link Reflector} used internally in Angular to access metadata
 * about symbols.
 */
var /** @type {?} */ reflector = new __WEBPACK_IMPORTED_MODULE_1__reflector__["a" /* Reflector */](new __WEBPACK_IMPORTED_MODULE_0__reflection_capabilities__["a" /* ReflectionCapabilities */]());
//# sourceMappingURL=reflection.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectorReader; });
/**
 *  Provides read-only access to reflection data about symbols. Used internally by Angular
  * to power dependency injection and compilation.
 * @abstract
 */
var ReflectorReader = (function () {
    function ReflectorReader() {
    }
    /**
     * @abstract
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectorReader.prototype.parameters = function (typeOrFunc) { };
    /**
     * @abstract
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectorReader.prototype.annotations = function (typeOrFunc) { };
    /**
     * @abstract
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectorReader.prototype.propMetadata = function (typeOrFunc) { };
    /**
     * @abstract
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectorReader.prototype.importUri = function (typeOrFunc) { };
    /**
     * @abstract
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} runtime
     * @return {?}
     */
    ReflectorReader.prototype.resolveIdentifier = function (name, moduleUrl, runtime) { };
    /**
     * @abstract
     * @param {?} identifier
     * @param {?} name
     * @return {?}
     */
    ReflectorReader.prototype.resolveEnum = function (identifier, name) { };
    return ReflectorReader;
}());
//# sourceMappingURL=reflector_reader.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RenderComponentType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return RenderDebugInfo; });
/* unused harmony export Renderer */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RootRenderer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @experimental
 */
// TODO (matsko): add typing for the animation function
var RenderComponentType = (function () {
    /**
     * @param {?} id
     * @param {?} templateUrl
     * @param {?} slotCount
     * @param {?} encapsulation
     * @param {?} styles
     * @param {?} animations
     */
    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
        this.id = id;
        this.templateUrl = templateUrl;
        this.slotCount = slotCount;
        this.encapsulation = encapsulation;
        this.styles = styles;
        this.animations = animations;
    }
    return RenderComponentType;
}());
function RenderComponentType_tsickle_Closure_declarations() {
    /** @type {?} */
    RenderComponentType.prototype.id;
    /** @type {?} */
    RenderComponentType.prototype.templateUrl;
    /** @type {?} */
    RenderComponentType.prototype.slotCount;
    /** @type {?} */
    RenderComponentType.prototype.encapsulation;
    /** @type {?} */
    RenderComponentType.prototype.styles;
    /** @type {?} */
    RenderComponentType.prototype.animations;
}
/**
 * @abstract
 */
var RenderDebugInfo = (function () {
    function RenderDebugInfo() {
    }
    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "component", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "references", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "context", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "source", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return RenderDebugInfo;
}());
/**
 * @abstract
 */
var Renderer = (function () {
    function Renderer() {
    }
    /**
     * @abstract
     * @param {?} selectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    Renderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) { };
    /**
     * @abstract
     * @param {?} parentElement
     * @param {?} name
     * @param {?=} debugInfo
     * @return {?}
     */
    Renderer.prototype.createElement = function (parentElement, name, debugInfo) { };
    /**
     * @abstract
     * @param {?} hostElement
     * @return {?}
     */
    Renderer.prototype.createViewRoot = function (hostElement) { };
    /**
     * @abstract
     * @param {?} parentElement
     * @param {?=} debugInfo
     * @return {?}
     */
    Renderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) { };
    /**
     * @abstract
     * @param {?} parentElement
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    Renderer.prototype.createText = function (parentElement, value, debugInfo) { };
    /**
     * @abstract
     * @param {?} parentElement
     * @param {?} nodes
     * @return {?}
     */
    Renderer.prototype.projectNodes = function (parentElement, nodes) { };
    /**
     * @abstract
     * @param {?} node
     * @param {?} viewRootNodes
     * @return {?}
     */
    Renderer.prototype.attachViewAfter = function (node, viewRootNodes) { };
    /**
     * @abstract
     * @param {?} viewRootNodes
     * @return {?}
     */
    Renderer.prototype.detachView = function (viewRootNodes) { };
    /**
     * @abstract
     * @param {?} hostElement
     * @param {?} viewAllNodes
     * @return {?}
     */
    Renderer.prototype.destroyView = function (hostElement, viewAllNodes) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    Renderer.prototype.listen = function (renderElement, name, callback) { };
    /**
     * @abstract
     * @param {?} target
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    Renderer.prototype.listenGlobal = function (target, name, callback) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    Renderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} attributeName
     * @param {?} attributeValue
     * @return {?}
     */
    Renderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) { };
    /**
     *  Used only in debug mode to serialize property changes to dom nodes as attributes.
     * @abstract
     * @param {?} renderElement
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    Renderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */
    Renderer.prototype.setElementClass = function (renderElement, className, isAdd) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    Renderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) { };
    /**
     * @abstract
     * @param {?} renderElement
     * @param {?} methodName
     * @param {?=} args
     * @return {?}
     */
    Renderer.prototype.invokeElementMethod = function (renderElement, methodName, args) { };
    /**
     * @abstract
     * @param {?} renderNode
     * @param {?} text
     * @return {?}
     */
    Renderer.prototype.setText = function (renderNode, text) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} startingStyles
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    Renderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) { };
    return Renderer;
}());
/**
 *  Injectable service that provides a low-level interface for modifying the UI.
  * *
  * Use this service to bypass Angular's templating and make custom UI changes that can't be
  * expressed declaratively. For example if you need to set a property or an attribute whose name is
  * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
  * respectively.
  * *
  * If you are implementing a custom renderer, you must implement this interface.
  * *
  * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 * @abstract
 */
var RootRenderer = (function () {
    function RootRenderer() {
    }
    /**
     * @abstract
     * @param {?} componentType
     * @return {?}
     */
    RootRenderer.prototype.renderComponent = function (componentType) { };
    return RootRenderer;
}());
//# sourceMappingURL=api.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Testability; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TestabilityRegistry; });
/* unused harmony export setTestabilityGetter */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  The Testability service provides testing hooks that can be accessed from
  * the browser and by services such as Protractor. Each bootstrapped Angular
  * application on the page will have an instance of Testability.
 */
var Testability = (function () {
    /**
     * @param {?} _ngZone
     */
    function Testability(_ngZone) {
        this._ngZone = _ngZone;
        /** @internal */
        this._pendingCount = 0;
        /** @internal */
        this._isZoneStable = true;
        /**
         * Whether any work was done since the last 'whenStable' callback. This is
         * useful to detect if this could have potentially destabilized another
         * component while it is stabilizing.
         * @internal
         */
        this._didWork = false;
        /** @internal */
        this._callbacks = [];
        this._watchAngularEvents();
    }
    /**
     * @return {?}
     */
    Testability.prototype._watchAngularEvents = function () {
        var _this = this;
        this._ngZone.onUnstable.subscribe({
            next: function () {
                _this._didWork = true;
                _this._isZoneStable = false;
            }
        });
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.subscribe({
                next: function () {
                    __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__["a" /* NgZone */].assertNotInAngularZone();
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["l" /* scheduleMicroTask */])(function () {
                        _this._isZoneStable = true;
                        _this._runCallbacksIfReady();
                    });
                }
            });
        });
    };
    /**
     * @return {?}
     */
    Testability.prototype.increasePendingRequestCount = function () {
        this._pendingCount += 1;
        this._didWork = true;
        return this._pendingCount;
    };
    /**
     * @return {?}
     */
    Testability.prototype.decreasePendingRequestCount = function () {
        this._pendingCount -= 1;
        if (this._pendingCount < 0) {
            throw new Error('pending async requests below zero');
        }
        this._runCallbacksIfReady();
        return this._pendingCount;
    };
    /**
     * @return {?}
     */
    Testability.prototype.isStable = function () {
        return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
    };
    /**
     * @return {?}
     */
    Testability.prototype._runCallbacksIfReady = function () {
        var _this = this;
        if (this.isStable()) {
            // Schedules the call backs in a new frame so that it is always async.
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["l" /* scheduleMicroTask */])(function () {
                while (_this._callbacks.length !== 0) {
                    (_this._callbacks.pop())(_this._didWork);
                }
                _this._didWork = false;
            });
        }
        else {
            // Not Ready
            this._didWork = true;
        }
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    Testability.prototype.whenStable = function (callback) {
        this._callbacks.push(callback);
        this._runCallbacksIfReady();
    };
    /**
     * @return {?}
     */
    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
    /**
     * @deprecated use findProviders
     * @param {?} using
     * @param {?} provider
     * @param {?} exactMatch
     * @return {?}
     */
    Testability.prototype.findBindings = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    /**
     * @param {?} using
     * @param {?} provider
     * @param {?} exactMatch
     * @return {?}
     */
    Testability.prototype.findProviders = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    Testability.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Testability.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__["a" /* NgZone */], },
    ]; };
    return Testability;
}());
function Testability_tsickle_Closure_declarations() {
    /** @type {?} */
    Testability.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Testability.ctorParameters;
    /** @type {?} */
    Testability.prototype._pendingCount;
    /** @type {?} */
    Testability.prototype._isZoneStable;
    /**
     * Whether any work was done since the last 'whenStable' callback. This is
     * useful to detect if this could have potentially destabilized another
     * component while it is stabilizing.
     * @type {?}
     */
    Testability.prototype._didWork;
    /** @type {?} */
    Testability.prototype._callbacks;
    /** @type {?} */
    Testability.prototype._ngZone;
}
/**
 *  A global registry of {@link Testability} instances for specific elements.
 */
var TestabilityRegistry = (function () {
    function TestabilityRegistry() {
        /** @internal */
        this._applications = new Map();
        _testabilityGetter.addToWindow(this);
    }
    /**
     * @param {?} token
     * @param {?} testability
     * @return {?}
     */
    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
        this._applications.set(token, testability);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
    /**
     * @return {?}
     */
    TestabilityRegistry.prototype.getAllTestabilities = function () { return Array.from(this._applications.values()); };
    /**
     * @return {?}
     */
    TestabilityRegistry.prototype.getAllRootElements = function () { return Array.from(this._applications.keys()); };
    /**
     * @param {?} elem
     * @param {?=} findInAncestors
     * @return {?}
     */
    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
        if (findInAncestors === void 0) { findInAncestors = true; }
        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    TestabilityRegistry.ctorParameters = function () { return []; };
    return TestabilityRegistry;
}());
function TestabilityRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    TestabilityRegistry.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TestabilityRegistry.ctorParameters;
    /** @type {?} */
    TestabilityRegistry.prototype._applications;
}
var _NoopGetTestability = (function () {
    function _NoopGetTestability() {
    }
    /**
     * @param {?} registry
     * @return {?}
     */
    _NoopGetTestability.prototype.addToWindow = function (registry) { };
    /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
        return null;
    };
    return _NoopGetTestability;
}());
/**
 *  Set the {@link GetTestability} implementation used by the Angular testing framework.
 * @param {?} getter
 * @return {?}
 */
function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
}
var /** @type {?} */ _testabilityGetter = new _NoopGetTestability();
//# sourceMappingURL=testability.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Type; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @whatItDoes Represents a type that a Component or other object is instances of.
 *
 * @description
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @stable
 */
var /** @type {?} */ Type = Function;
//# sourceMappingURL=type.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isPromise;
/**
 * @license undefined
  * Copyright Google Inc. All Rights Reserved.
  * *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://angular.io/license
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
//# sourceMappingURL=lang.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FILL_STYLE_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ANY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return EMPTY_STATE; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var /** @type {?} */ FILL_STYLE_FLAG = 'true'; // TODO (matsko): change to boolean
var /** @type {?} */ ANY_STATE = '*';
var /** @type {?} */ DEFAULT_STATE = '*';
var /** @type {?} */ EMPTY_STATE = 'void';
//# sourceMappingURL=animation_constants.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationGroupPlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var AnimationGroupPlayer = (function () {
    /**
     * @param {?} _players
     */
    function AnimationGroupPlayer(_players) {
        var _this = this;
        this._players = _players;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.parentPlayer = null;
        var count = 0;
        var total = this._players.length;
        if (total == 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
        }
        else {
            this._players.forEach(function (player) {
                player.parentPlayer = _this;
                player.onDone(function () {
                    if (++count >= total) {
                        _this._onFinish();
                    }
                });
            });
        }
    }
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationGroupPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationGroupPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.play = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this.parentPlayer)) {
            this.init();
        }
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._players.forEach(function (player) { return player.play(); });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.pause = function () { this._players.forEach(function (player) { return player.pause(); }); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.restart = function () { this._players.forEach(function (player) { return player.restart(); }); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.finish = function () {
        this._onFinish();
        this._players.forEach(function (player) { return player.finish(); });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._onFinish();
            this._players.forEach(function (player) { return player.destroy(); });
            this._destroyed = true;
        }
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.reset = function () {
        this._players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    AnimationGroupPlayer.prototype.setPosition = function (p) {
        this._players.forEach(function (player) { player.setPosition(p); });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.getPosition = function () {
        var /** @type {?} */ min = 0;
        this._players.forEach(function (player) {
            var /** @type {?} */ p = player.getPosition();
            min = Math.min(p, min);
        });
        return min;
    };
    Object.defineProperty(AnimationGroupPlayer.prototype, "players", {
        /**
         * @return {?}
         */
        get: function () { return this._players; },
        enumerable: true,
        configurable: true
    });
    return AnimationGroupPlayer;
}());
function AnimationGroupPlayer_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationGroupPlayer.prototype._onDoneFns;
    /** @type {?} */
    AnimationGroupPlayer.prototype._onStartFns;
    /** @type {?} */
    AnimationGroupPlayer.prototype._finished;
    /** @type {?} */
    AnimationGroupPlayer.prototype._started;
    /** @type {?} */
    AnimationGroupPlayer.prototype._destroyed;
    /** @type {?} */
    AnimationGroupPlayer.prototype.parentPlayer;
    /** @type {?} */
    AnimationGroupPlayer.prototype._players;
}
//# sourceMappingURL=animation_group_player.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_metadata__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zone_ng_zone__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationQueue; });


var AnimationQueue = (function () {
    /**
     * @param {?} _zone
     */
    function AnimationQueue(_zone) {
        this._zone = _zone;
        this.entries = [];
    }
    /**
     * @param {?} player
     * @return {?}
     */
    AnimationQueue.prototype.enqueue = function (player) { this.entries.push(player); };
    /**
     * @return {?}
     */
    AnimationQueue.prototype.flush = function () {
        var _this = this;
        // given that each animation player may set aside
        // microtasks and rely on DOM-based events, this
        // will cause Angular to run change detection after
        // each request. This sidesteps the issue. If a user
        // hooks into an animation via (@anim.start) or (@anim.done)
        // then those methods will automatically trigger change
        // detection by wrapping themselves inside of a zone
        if (this.entries.length) {
            this._zone.runOutsideAngular(function () {
                // this code is wrapped into a single promise such that the
                // onStart and onDone player callbacks are triggered outside
                // of the digest cycle of animations
                Promise.resolve(null).then(function () { return _this._triggerAnimations(); });
            });
        }
    };
    /**
     * @return {?}
     */
    AnimationQueue.prototype._triggerAnimations = function () {
        __WEBPACK_IMPORTED_MODULE_1__zone_ng_zone__["a" /* NgZone */].assertNotInAngularZone();
        while (this.entries.length) {
            var /** @type {?} */ player = this.entries.shift();
            // in the event that an animation throws an error then we do
            // not want to re-run animations on any previous animations
            // if they have already been kicked off beforehand
            if (!player.hasStarted()) {
                player.play();
            }
        }
    };
    AnimationQueue.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di_metadata__["a" /* Injectable */] },
    ];
    /** @nocollapse */
    AnimationQueue.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__zone_ng_zone__["a" /* NgZone */], },
    ]; };
    return AnimationQueue;
}());
function AnimationQueue_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationQueue.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AnimationQueue.ctorParameters;
    /** @type {?} */
    AnimationQueue.prototype.entries;
    /** @type {?} */
    AnimationQueue.prototype._zone;
}
//# sourceMappingURL=animation_queue.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_player__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationSequencePlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var AnimationSequencePlayer = (function () {
    /**
     * @param {?} _players
     */
    function AnimationSequencePlayer(_players) {
        var _this = this;
        this._players = _players;
        this._currentIndex = 0;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.parentPlayer = null;
        this._players.forEach(function (player) { player.parentPlayer = _this; });
        this._onNext(false);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    AnimationSequencePlayer.prototype._onNext = function (start) {
        var _this = this;
        if (this._finished)
            return;
        if (this._players.length == 0) {
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
        }
        else if (this._currentIndex >= this._players.length) {
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
            this._onFinish();
        }
        else {
            var /** @type {?} */ player = this._players[this._currentIndex++];
            player.onDone(function () { return _this._onNext(true); });
            this._activePlayer = player;
            if (start) {
                player.play();
            }
        }
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationSequencePlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationSequencePlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.play = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this.parentPlayer)) {
            this.init();
        }
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._activePlayer.play();
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.pause = function () { this._activePlayer.pause(); };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.restart = function () {
        this.reset();
        if (this._players.length > 0) {
            this._players[0].restart();
        }
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.reset = function () {
        this._players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.finish = function () {
        this._onFinish();
        this._players.forEach(function (player) { return player.finish(); });
    };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._onFinish();
            this._players.forEach(function (player) { return player.destroy(); });
            this._destroyed = true;
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
        }
    };
    /**
     * @param {?} p
     * @return {?}
     */
    AnimationSequencePlayer.prototype.setPosition = function (p) { this._players[0].setPosition(p); };
    /**
     * @return {?}
     */
    AnimationSequencePlayer.prototype.getPosition = function () { return this._players[0].getPosition(); };
    Object.defineProperty(AnimationSequencePlayer.prototype, "players", {
        /**
         * @return {?}
         */
        get: function () { return this._players; },
        enumerable: true,
        configurable: true
    });
    return AnimationSequencePlayer;
}());
function AnimationSequencePlayer_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationSequencePlayer.prototype._currentIndex;
    /** @type {?} */
    AnimationSequencePlayer.prototype._activePlayer;
    /** @type {?} */
    AnimationSequencePlayer.prototype._onDoneFns;
    /** @type {?} */
    AnimationSequencePlayer.prototype._onStartFns;
    /** @type {?} */
    AnimationSequencePlayer.prototype._finished;
    /** @type {?} */
    AnimationSequencePlayer.prototype._started;
    /** @type {?} */
    AnimationSequencePlayer.prototype._destroyed;
    /** @type {?} */
    AnimationSequencePlayer.prototype.parentPlayer;
    /** @type {?} */
    AnimationSequencePlayer.prototype._players;
}
//# sourceMappingURL=animation_sequence_player.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationTransitionEvent; });
/**
 *  An instance of this class is returned as an event parameter when an animation
  * callback is captured for an animation either during the start or done phase.
  * *
  * ```typescript
  * host: {
  * '[@myAnimationTrigger]': 'someExpression',
  * '(@myAnimationTrigger.start)': 'captureStartEvent($event)',
  * '(@myAnimationTrigger.done)': 'captureDoneEvent($event)',
  * },
  * animations: [
  * trigger("myAnimationTrigger", [
  * // ...
  * ])
  * ]
  * })
  * class MyComponent {
  * someExpression: any = false;
  * captureStartEvent(event: AnimationTransitionEvent) {
  * // the toState, fromState and totalTime data is accessible from the event variable
  * }
  * *
  * captureDoneEvent(event: AnimationTransitionEvent) {
  * // the toState, fromState and totalTime data is accessible from the event variable
  * }
  * }
  * ```
  * *
 */
var AnimationTransitionEvent = (function () {
    /**
     * @param {?} __0
     */
    function AnimationTransitionEvent(_a) {
        var fromState = _a.fromState, toState = _a.toState, totalTime = _a.totalTime, phaseName = _a.phaseName;
        this.fromState = fromState;
        this.toState = toState;
        this.totalTime = totalTime;
        this.phaseName = phaseName;
    }
    return AnimationTransitionEvent;
}());
function AnimationTransitionEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationTransitionEvent.prototype.fromState;
    /** @type {?} */
    AnimationTransitionEvent.prototype.toState;
    /** @type {?} */
    AnimationTransitionEvent.prototype.totalTime;
    /** @type {?} */
    AnimationTransitionEvent.prototype.phaseName;
}
//# sourceMappingURL=animation_transition_event.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AUTO_STYLE; });
/* unused harmony export AnimationEntryMetadata */
/* unused harmony export AnimationStateMetadata */
/* unused harmony export AnimationStateDeclarationMetadata */
/* unused harmony export AnimationStateTransitionMetadata */
/* unused harmony export AnimationMetadata */
/* unused harmony export AnimationKeyframesSequenceMetadata */
/* unused harmony export AnimationStyleMetadata */
/* unused harmony export AnimationAnimateMetadata */
/* unused harmony export AnimationWithStepsMetadata */
/* unused harmony export AnimationSequenceMetadata */
/* unused harmony export AnimationGroupMetadata */
/* unused harmony export animate */
/* unused harmony export group */
/* unused harmony export sequence */
/* unused harmony export style */
/* unused harmony export state */
/* unused harmony export keyframes */
/* unused harmony export transition */
/* unused harmony export trigger */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @experimental Animation support is experimental.
 */
var /** @type {?} */ AUTO_STYLE = '*';
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link trigger trigger
  * animation function} is called.
  * *
 */
var AnimationEntryMetadata = (function () {
    /**
     * @param {?} name
     * @param {?} definitions
     */
    function AnimationEntryMetadata(name, definitions) {
        this.name = name;
        this.definitions = definitions;
    }
    return AnimationEntryMetadata;
}());
function AnimationEntryMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationEntryMetadata.prototype.name;
    /** @type {?} */
    AnimationEntryMetadata.prototype.definitions;
}
/**
 * @abstract
 */
var AnimationStateMetadata = (function () {
    function AnimationStateMetadata() {
    }
    return AnimationStateMetadata;
}());
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link state state animation
  * function} is called.
  * *
 */
var AnimationStateDeclarationMetadata = (function (_super) {
    __extends(AnimationStateDeclarationMetadata, _super);
    /**
     * @param {?} stateNameExpr
     * @param {?} styles
     */
    function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
        _super.call(this);
        this.stateNameExpr = stateNameExpr;
        this.styles = styles;
    }
    return AnimationStateDeclarationMetadata;
}(AnimationStateMetadata));
function AnimationStateDeclarationMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationStateDeclarationMetadata.prototype.stateNameExpr;
    /** @type {?} */
    AnimationStateDeclarationMetadata.prototype.styles;
}
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the
  * {@link transition transition animation function} is called.
  * *
 */
var AnimationStateTransitionMetadata = (function (_super) {
    __extends(AnimationStateTransitionMetadata, _super);
    /**
     * @param {?} stateChangeExpr
     * @param {?} steps
     */
    function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
        _super.call(this);
        this.stateChangeExpr = stateChangeExpr;
        this.steps = steps;
    }
    return AnimationStateTransitionMetadata;
}(AnimationStateMetadata));
function AnimationStateTransitionMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationStateTransitionMetadata.prototype.stateChangeExpr;
    /** @type {?} */
    AnimationStateTransitionMetadata.prototype.steps;
}
/**
 * @abstract
 */
var AnimationMetadata = (function () {
    function AnimationMetadata() {
    }
    return AnimationMetadata;
}());
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link keyframes keyframes
  * animation function} is called.
  * *
 */
var AnimationKeyframesSequenceMetadata = (function (_super) {
    __extends(AnimationKeyframesSequenceMetadata, _super);
    /**
     * @param {?} steps
     */
    function AnimationKeyframesSequenceMetadata(steps) {
        _super.call(this);
        this.steps = steps;
    }
    return AnimationKeyframesSequenceMetadata;
}(AnimationMetadata));
function AnimationKeyframesSequenceMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationKeyframesSequenceMetadata.prototype.steps;
}
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link style style animation
  * function} is called.
  * *
 */
var AnimationStyleMetadata = (function (_super) {
    __extends(AnimationStyleMetadata, _super);
    /**
     * @param {?} styles
     * @param {?=} offset
     */
    function AnimationStyleMetadata(styles, offset) {
        if (offset === void 0) { offset = null; }
        _super.call(this);
        this.styles = styles;
        this.offset = offset;
    }
    return AnimationStyleMetadata;
}(AnimationMetadata));
function AnimationStyleMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationStyleMetadata.prototype.styles;
    /** @type {?} */
    AnimationStyleMetadata.prototype.offset;
}
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link animate animate
  * animation function} is called.
  * *
 */
var AnimationAnimateMetadata = (function (_super) {
    __extends(AnimationAnimateMetadata, _super);
    /**
     * @param {?} timings
     * @param {?} styles
     */
    function AnimationAnimateMetadata(timings, styles) {
        _super.call(this);
        this.timings = timings;
        this.styles = styles;
    }
    return AnimationAnimateMetadata;
}(AnimationMetadata));
function AnimationAnimateMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationAnimateMetadata.prototype.timings;
    /** @type {?} */
    AnimationAnimateMetadata.prototype.styles;
}
/**
 * @abstract
 */
var AnimationWithStepsMetadata = (function (_super) {
    __extends(AnimationWithStepsMetadata, _super);
    function AnimationWithStepsMetadata() {
        _super.call(this);
    }
    Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
        enumerable: true,
        configurable: true
    });
    return AnimationWithStepsMetadata;
}(AnimationMetadata));
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link sequence sequence
  * animation function} is called.
  * *
 */
var AnimationSequenceMetadata = (function (_super) {
    __extends(AnimationSequenceMetadata, _super);
    /**
     * @param {?} _steps
     */
    function AnimationSequenceMetadata(_steps) {
        _super.call(this);
        this._steps = _steps;
    }
    Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
        /**
         * @return {?}
         */
        get: function () { return this._steps; },
        enumerable: true,
        configurable: true
    });
    return AnimationSequenceMetadata;
}(AnimationWithStepsMetadata));
function AnimationSequenceMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationSequenceMetadata.prototype._steps;
}
/**
 *  Metadata representing the entry of animations.
  * Instances of this class are provided via the animation DSL when the {@link group group animation
  * function} is called.
  * *
 */
var AnimationGroupMetadata = (function (_super) {
    __extends(AnimationGroupMetadata, _super);
    /**
     * @param {?} _steps
     */
    function AnimationGroupMetadata(_steps) {
        _super.call(this);
        this._steps = _steps;
    }
    Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
        /**
         * @return {?}
         */
        get: function () { return this._steps; },
        enumerable: true,
        configurable: true
    });
    return AnimationGroupMetadata;
}(AnimationWithStepsMetadata));
function AnimationGroupMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationGroupMetadata.prototype._steps;
}
/**
 *  `animate` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `animate` specifies an animation step that will apply the provided `styles` data for a given
  * amount of
  * time based on the provided `timing` expression value. Calls to `animate` are expected to be
  * used within {@link sequence an animation sequence}, {@link group group}, or {@link transition
  * transition}.
  * *
  * ### Usage
  * *
  * The `animate` function accepts two input parameters: `timing` and `styles`:
  * *
  * - `timing` is a string based value that can be a combination of a duration with optional
  * delay and easing values. The format for the expression breaks down to `duration delay easing`
  * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
  * delay=100, easing=ease-out`.
  * If a numeric value is provided then that will be used as the `duration` value in millisecond
  * form.
  * - `styles` is the style input data which can either be a call to {@link style style} or {@link
  * keyframes keyframes}.
  * If left empty then the styles from the destination state will be collected and used (this is
  * useful when
  * describing an animation step that will complete an animation by {@link
  * transition#the-final-animate-call animating to the final state}).
  * *
  * ```typescript
  * // various functions for specifying timing data
  * animate(500, style(...))
  * animate("1s", style(...))
  * animate("100ms 0.5s", style(...))
  * animate("5s ease", style(...))
  * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
  * *
  * // either style() of keyframes() can be used
  * animate(500, style({ background: "red" }))
  * animate(500, keyframes([
  * style({ background: "blue" })),
  * style({ background: "red" }))
  * ])
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} timing
 * @param {?=} styles
 * @return {?}
 */
function animate(timing, styles) {
    if (styles === void 0) { styles = null; }
    var /** @type {?} */ stylesEntry = styles;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(stylesEntry)) {
        var /** @type {?} */ EMPTY_STYLE = {};
        stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
    }
    return new AnimationAnimateMetadata(timing, stylesEntry);
}
/**
 *  `group` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `group` specifies a list of animation steps that are all run in parallel. Grouped animations
  * are useful when a series of styles must be animated/closed off
  * at different statrting/ending times.
  * *
  * The `group` function can either be used within a {@link sequence sequence} or a {@link transition
  * transition}
  * and it will only continue to the next instruction once all of the inner animation steps
  * have completed.
  * *
  * ### Usage
  * *
  * The `steps` data that is passed into the `group` animation function can either consist
  * of {@link style style} or {@link animate animate} function calls. Each call to `style()` or
  * `animate()`
  * within a group will be executed instantly (use {@link keyframes keyframes} or a
  * {@link animate#usage animate() with a delay value} to offset styles to be applied at a later
  * time).
  * *
  * ```typescript
  * group([
  * animate("1s", { background: "black" }))
  * animate("2s", { color: "white" }))
  * ])
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} steps
 * @return {?}
 */
function group(steps) {
    return new AnimationGroupMetadata(steps);
}
/**
 *  `sequence` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used
  * by default when an array is passed as animation data into {@link transition transition}.)
  * *
  * The `sequence` function can either be used within a {@link group group} or a {@link transition
  * transition}
  * and it will only continue to the next instruction once each of the inner animation steps
  * have completed.
  * *
  * To perform animation styling in parallel with other animation steps then
  * have a look at the {@link group group} animation function.
  * *
  * ### Usage
  * *
  * The `steps` data that is passed into the `sequence` animation function can either consist
  * of {@link style style} or {@link animate animate} function calls. A call to `style()` will apply
  * the
  * provided styling data immediately while a call to `animate()` will apply its styling
  * data over a given time depending on its timing data.
  * *
  * ```typescript
  * sequence([
  * style({ opacity: 0 })),
  * animate("1s", { opacity: 1 }))
  * ])
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} steps
 * @return {?}
 */
function sequence(steps) {
    return new AnimationSequenceMetadata(steps);
}
/**
 *  `style` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `style` declares a key/value object containing CSS properties/styles that can then
  * be used for {@link state animation states}, within an {@link sequence animation sequence}, or as
  * styling data for both {@link animate animate} and {@link keyframes keyframes}.
  * *
  * ### Usage
  * *
  * `style` takes in a key/value string map as data and expects one or more CSS property/value
  * pairs to be defined.
  * *
  * ```typescript
  * // string values are used for css properties
  * style({ background: "red", color: "blue" })
  * *
  * // numerical (pixel) values are also supported
  * style({ width: 100, height: 0 })
  * ```
  * *
  * #### Auto-styles (using `*`)
  * *
  * When an asterix (`*`) character is used as a value then it will be detected from the element
  * being animated
  * and applied as animation data when the animation starts.
  * *
  * This feature proves useful for a state depending on layout and/or environment factors; in such
  * cases
  * the styles are calculated just before the animation starts.
  * *
  * ```typescript
  * // the steps below will animate from 0 to the
  * // actual height of the element
  * style({ height: 0 }),
  * animate("1s", style({ height: "*" }))
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} tokens
 * @return {?}
 */
function style(tokens) {
    var /** @type {?} */ input;
    var /** @type {?} */ offset = null;
    if (typeof tokens === 'string') {
        input = [(tokens)];
    }
    else {
        if (Array.isArray(tokens)) {
            input = (tokens);
        }
        else {
            input = [(tokens)];
        }
        input.forEach(function (entry) {
            var /** @type {?} */ entryOffset = ((entry) /** TODO #9100 */)['offset'];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(entryOffset)) {
                offset = offset == null ? parseFloat(entryOffset) : offset;
            }
        });
    }
    return new AnimationStyleMetadata(input, offset);
}
/**
 *  `state` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `state` declares an animation state within the given trigger. When a state is
  * active within a component then its associated styles will persist on
  * the element that the trigger is attached to (even when the animation ends).
  * *
  * To animate between states, have a look at the animation {@link transition transition}
  * DSL function. To register states to an animation trigger please have a look
  * at the {@link trigger trigger} function.
  * *
  * #### The `void` state
  * *
  * The `void` state value is a reserved word that angular uses to determine when the element is not
  * apart
  * of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
  * associated element
  * is void).
  * *
  * #### The `*` (default) state
  * *
  * The `*` state (when styled) is a fallback state that will be used if
  * the state that is being animated is not declared within the trigger.
  * *
  * ### Usage
  * *
  * `state` will declare an animation state with its associated styles
  * within the given trigger.
  * *
  * - `stateNameExpr` can be one or more state names separated by commas.
  * - `styles` refers to the {@link style styling data} that will be persisted on the element once
  * the state
  * has been reached.
  * *
  * ```typescript
  * // "void" is a reserved name for a state and is used to represent
  * // the state in which an element is detached from from the application.
  * state("void", style({ height: 0 }))
  * *
  * // user-defined states
  * state("closed", style({ height: 0 }))
  * state("open, visible", style({ height: "*" }))
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} stateNameExpr
 * @param {?} styles
 * @return {?}
 */
function state(stateNameExpr, styles) {
    return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
}
/**
 *  `keyframes` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `keyframes` specifies a collection of {@link style style} entries each optionally characterized
  * by an `offset` value.
  * *
  * ### Usage
  * *
  * The `keyframes` animation function is designed to be used alongside the {@link animate animate}
  * animation function. Instead of applying animations from where they are
  * currently to their destination, keyframes can describe how each style entry is applied
  * and at what point within the animation arc (much like CSS Keyframe Animations do).
  * *
  * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at
  * what percentage of the animate time the styles will be applied.
  * *
  * ```typescript
  * // the provided offset values describe when each backgroundColor value is applied.
  * animate("5s", keyframes([
  * style({ backgroundColor: "red", offset: 0 }),
  * style({ backgroundColor: "blue", offset: 0.2 }),
  * style({ backgroundColor: "orange", offset: 0.3 }),
  * style({ backgroundColor: "black", offset: 1 })
  * ]))
  * ```
  * *
  * Alternatively, if there are no `offset` values used within the style entries then the offsets
  * will
  * be calculated automatically.
  * *
  * ```typescript
  * animate("5s", keyframes([
  * style({ backgroundColor: "red" }) // offset = 0
  * style({ backgroundColor: "blue" }) // offset = 0.33
  * style({ backgroundColor: "orange" }) // offset = 0.66
  * style({ backgroundColor: "black" }) // offset = 1
  * ]))
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} steps
 * @return {?}
 */
function keyframes(steps) {
    return new AnimationKeyframesSequenceMetadata(steps);
}
/**
 *  `transition` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `transition` declares the {@link sequence sequence of animation steps} that will be run when the
  * provided
  * `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 => state2`
  * which consists
  * of two known states (use an asterix (`*`) to refer to a dynamic starting and/or ending state).
  * *
  * Animation transitions are placed within an {@link trigger animation trigger}. For an transition
  * to animate to
  * a state value and persist its styles then one or more {@link state animation states} is expected
  * to be defined.
  * *
  * ### Usage
  * *
  * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
  * what the
  * previous state is and what the current state has become. In other words, if a transition is
  * defined that
  * matches the old/current state criteria then the associated animation will be triggered.
  * *
  * ```typescript
  * // all transition/state changes are defined within an animation trigger
  * trigger("myAnimationTrigger", [
  * // if a state is defined then its styles will be persisted when the
  * // animation has fully completed itself
  * state("on", style({ background: "green" })),
  * state("off", style({ background: "grey" })),
  * *
  * // a transition animation that will be kicked off when the state value
  * // bound to "myAnimationTrigger" changes from "on" to "off"
  * transition("on => off", animate(500)),
  * *
  * // it is also possible to do run the same animation for both directions
  * transition("on <=> off", animate(500)),
  * *
  * // or to define multiple states pairs separated by commas
  * transition("on => off, off => void", animate(500)),
  * *
  * // this is a catch-all state change for when an element is inserted into
  * // the page and the destination state is unknown
  * transition("void => *", [
  * style({ opacity: 0 }),
  * animate(500)
  * ]),
  * *
  * // this will capture a state change between any states
  * transition("* => *", animate("1s 0s")),
  * ])
  * ```
  * *
  * The template associated with this component will make use of the `myAnimationTrigger`
  * animation trigger by binding to an element within its template code.
  * *
  * ```html
  * <!-- somewhere inside of my-component-tpl.html -->
  * <div [@myAnimationTrigger]="myStatusExp">...</div>
  * ```
  * *
  * #### The final `animate` call
  * *
  * If the final step within the transition steps is a call to `animate()` that **only**
  * uses a timing value with **no style data** then it will be automatically used as the final
  * animation
  * arc for the element to animate itself to the final state. This involves an automatic mix of
  * adding/removing CSS styles so that the element will be in the exact state it should be for the
  * applied state to be presented correctly.
  * *
  * ```
  * // start off by hiding the element, but make sure that it animates properly to whatever state
  * // is currently active for "myAnimationTrigger"
  * transition("void => *", [
  * style({ opacity: 0 }),
  * animate(500)
  * ])
  * ```
  * *
  * ### Transition Aliases (`:enter` and `:leave`)
  * *
  * Given that enter (insertion) and leave (removal) animations are so common,
  * the `transition` function accepts both `:enter` and `:leave` values which
  * are aliases for the `void => *` and `* => void` state changes.
  * *
  * ```
  * transition(":enter", [
  * style({ opacity: 0 }),
  * animate(500, style({ opacity: 1 }))
  * ])
  * transition(":leave", [
  * animate(500, style({ opacity: 0 }))
  * ])
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} stateChangeExpr
 * @param {?} steps
 * @return {?}
 */
function transition(stateChangeExpr, steps) {
    var /** @type {?} */ animationData = Array.isArray(steps) ? new AnimationSequenceMetadata(steps) : steps;
    return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
}
/**
 *  `trigger` is an animation-specific function that is designed to be used inside of Angular2's
  * animation
  * DSL language. If this information is new, please navigate to the
  * {@link Component#animations-anchor component animations metadata
  * page} to gain a better understanding of how animations in Angular2 are used.
  * *
  * `trigger` Creates an animation trigger which will a list of {@link state state} and {@link
  * transition transition}
  * entries that will be evaluated when the expression bound to the trigger changes.
  * *
  * Triggers are registered within the component annotation data under the
  * {@link Component#animations-anchor animations section}. An animation trigger can
  * be placed on an element within a template by referencing the name of the
  * trigger followed by the expression value that the trigger is bound to
  * (in the form of `[@triggerName]="expression"`.
  * *
  * ### Usage
  * *
  * `trigger` will create an animation trigger reference based on the provided `name` value.
  * The provided `animation` value is expected to be an array consisting of {@link state state} and
  * {@link transition transition}
  * declarations.
  * *
  * ```typescript
  * selector: 'my-component',
  * templateUrl: 'my-component-tpl.html',
  * animations: [
  * trigger("myAnimationTrigger", [
  * state(...),
  * state(...),
  * transition(...),
  * transition(...)
  * ])
  * ]
  * })
  * class MyComponent {
  * myStatusExp = "something";
  * }
  * ```
  * *
  * The template associated with this component will make use of the `myAnimationTrigger`
  * animation trigger by binding to an element within its template code.
  * *
  * ```html
  * <!-- somewhere inside of my-component-tpl.html -->
  * <div [@myAnimationTrigger]="myStatusExp">...</div>
  * ```
  * *
  * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
  * *
  * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
  * *
 * @param {?} name
 * @param {?} animation
 * @return {?}
 */
function trigger(name, animation) {
    return new AnimationEntryMetadata(name, animation);
}
//# sourceMappingURL=metadata.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChangeDetectorRef; });
/**
 * @abstract
 */
var ChangeDetectorRef = (function () {
    function ChangeDetectorRef() {
    }
    /**
     *  Marks all {@link ChangeDetectionStrategy#OnPush} ancestors as to be checked.
      * *
      * <!-- TODO: Add a link to a chapter on OnPush components -->
      * *
      * ### Example ([live demo](http://plnkr.co/edit/GC512b?p=preview))
      * *
      * ```typescript
      * selector: 'cmp',
      * changeDetection: ChangeDetectionStrategy.OnPush,
      * template: `Number of ticks: {{numberOfTicks}}`
      * })
      * class Cmp {
      * numberOfTicks = 0;
      * *
      * constructor(ref: ChangeDetectorRef) {
      * setInterval(() => {
      * this.numberOfTicks ++
      * // the following is required, otherwise the view will not be updated
      * this.ref.markForCheck();
      * }, 1000);
      * }
      * }
      * *
      * selector: 'app',
      * changeDetection: ChangeDetectionStrategy.OnPush,
      * template: `
      * <cmp><cmp>
      * `,
      * })
      * class App {
      * }
      * ```
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.markForCheck = function () { };
    /**
     *  Detaches the change detector from the change detector tree.
      * *
      * The detached change detector will not be checked until it is reattached.
      * *
      * This can also be used in combination with {@link ChangeDetectorRef#detectChanges} to implement
      * local change
      * detection checks.
      * *
      * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
      * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
      * *
      * ### Example
      * *
      * The following example defines a component with a large list of readonly data.
      * Imagine the data changes constantly, many times per second. For performance reasons,
      * we want to check and update the list every five seconds. We can do that by detaching
      * the component's change detector and doing a local check every five seconds.
      * *
      * ```typescript
      * class DataProvider {
      * // in a real application the returned data will be different every time
      * get data() {
      * return [1,2,3,4,5];
      * }
      * }
      * *
      * selector: 'giant-list',
      * template: `
      * <li *ngFor="let d of dataProvider.data">Data {{d}}</lig>
      * `,
      * })
      * class GiantList {
      * constructor(private ref: ChangeDetectorRef, private dataProvider:DataProvider) {
      * ref.detach();
      * setInterval(() => {
      * this.ref.detectChanges();
      * }, 5000);
      * }
      * }
      * *
      * selector: 'app',
      * providers: [DataProvider],
      * template: `
      * <giant-list><giant-list>
      * `,
      * })
      * class App {
      * }
      * ```
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.detach = function () { };
    /**
     *  Checks the change detector and its children.
      * *
      * This can also be used in combination with {@link ChangeDetectorRef#detach} to implement local
      * change detection
      * checks.
      * *
      * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
      * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
      * *
      * ### Example
      * *
      * The following example defines a component with a large list of readonly data.
      * Imagine, the data changes constantly, many times per second. For performance reasons,
      * we want to check and update the list every five seconds.
      * *
      * We can do that by detaching the component's change detector and doing a local change detection
      * check
      * every five seconds.
      * *
      * See {@link ChangeDetectorRef#detach} for more information.
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.detectChanges = function () { };
    /**
     *  Checks the change detector and its children, and throws if any changes are detected.
      * *
      * This is used in development mode to verify that running change detection doesn't introduce
      * other changes.
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.checkNoChanges = function () { };
    /**
     *  Reattach the change detector to the change detector tree.
      * *
      * This also marks OnPush ancestors as to be checked. This reattached change detector will be
      * checked during the next change detection run.
      * *
      * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
      * *
      * ### Example ([live demo](http://plnkr.co/edit/aUhZha?p=preview))
      * *
      * The following example creates a component displaying `live` data. The component will detach
      * its change detector from the main change detector tree when the component's live property
      * is set to false.
      * *
      * ```typescript
      * class DataProvider {
      * data = 1;
      * *
      * constructor() {
      * setInterval(() => {
      * this.data = this.data * 2;
      * }, 500);
      * }
      * }
      * *
      * selector: 'live-data',
      * inputs: ['live'],
      * template: 'Data: {{dataProvider.data}}'
      * })
      * class LiveData {
      * constructor(private ref: ChangeDetectorRef, private dataProvider:DataProvider) {}
      * *
      * set live(value) {
      * if (value)
      * this.ref.reattach();
      * else
      * this.ref.detach();
      * }
      * }
      * *
      * selector: 'app',
      * providers: [DataProvider],
      * template: `
      * Live Update: <input type="checkbox" [(ngModel)]="live">
      * <live-data [live]="live"><live-data>
      * `,
      * })
      * class App {
      * live = true;
      * }
      * ```
     * @abstract
     * @return {?}
     */
    ChangeDetectorRef.prototype.reattach = function () { };
    return ChangeDetectorRef;
}());
//# sourceMappingURL=change_detector_ref.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultKeyValueDifferFactory; });
/* unused harmony export DefaultKeyValueDiffer */
/* unused harmony export KeyValueChangeRecord */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var DefaultKeyValueDifferFactory = (function () {
    function DefaultKeyValueDifferFactory() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["e" /* isJsObject */])(obj); };
    /**
     * @param {?} cdRef
     * @return {?}
     */
    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
    return DefaultKeyValueDifferFactory;
}());
var DefaultKeyValueDiffer = (function () {
    function DefaultKeyValueDiffer() {
        this._records = new Map();
        this._mapHead = null;
        this._previousMapHead = null;
        this._changesHead = null;
        this._changesTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
        /**
         * @return {?}
         */
        get: function () {
            return this._additionsHead !== null || this._changesHead !== null ||
                this._removalsHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._mapHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
        var /** @type {?} */ record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    /**
     * @param {?} map
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.diff = function (map) {
        if (!map) {
            map = new Map();
        }
        else if (!(map instanceof Map || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["e" /* isJsObject */])(map))) {
            throw new Error("Error trying to diff '" + map + "'");
        }
        return this.check(map) ? this : null;
    };
    /**
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
    /**
     * @param {?} map
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.check = function (map) {
        var _this = this;
        this._reset();
        var /** @type {?} */ records = this._records;
        var /** @type {?} */ oldSeqRecord = this._mapHead;
        var /** @type {?} */ lastOldSeqRecord = null;
        var /** @type {?} */ lastNewSeqRecord = null;
        var /** @type {?} */ seqChanged = false;
        this._forEach(map, function (value, key) {
            var /** @type {?} */ newSeqRecord;
            if (oldSeqRecord && key === oldSeqRecord.key) {
                newSeqRecord = oldSeqRecord;
                _this._maybeAddToChanges(newSeqRecord, value);
            }
            else {
                seqChanged = true;
                if (oldSeqRecord !== null) {
                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
                    _this._addToRemovals(oldSeqRecord);
                }
                if (records.has(key)) {
                    newSeqRecord = records.get(key);
                    _this._maybeAddToChanges(newSeqRecord, value);
                }
                else {
                    newSeqRecord = new KeyValueChangeRecord(key);
                    records.set(key, newSeqRecord);
                    newSeqRecord.currentValue = value;
                    _this._addToAdditions(newSeqRecord);
                }
            }
            if (seqChanged) {
                if (_this._isInRemovals(newSeqRecord)) {
                    _this._removeFromRemovals(newSeqRecord);
                }
                if (lastNewSeqRecord == null) {
                    _this._mapHead = newSeqRecord;
                }
                else {
                    lastNewSeqRecord._next = newSeqRecord;
                }
            }
            lastOldSeqRecord = oldSeqRecord;
            lastNewSeqRecord = newSeqRecord;
            oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
        });
        this._truncate(lastOldSeqRecord, oldSeqRecord);
        return this.isDirty;
    };
    /**
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var /** @type {?} */ record = void 0;
            // Record the state of the mapping
            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._changesHead; record !== null; record = record._nextChanged) {
                record.previousValue = record.currentValue;
            }
            for (record = this._additionsHead; record != null; record = record._nextAdded) {
                record.previousValue = record.currentValue;
            }
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = this._removalsTail = null;
        }
    };
    /**
     * @param {?} lastRecord
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
        while (record !== null) {
            if (lastRecord === null) {
                this._mapHead = null;
            }
            else {
                lastRecord._next = null;
            }
            var /** @type {?} */ nextRecord = record._next;
            this._addToRemovals(record);
            lastRecord = record;
            record = nextRecord;
        }
        for (var /** @type {?} */ rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
            rec.previousValue = rec.currentValue;
            rec.currentValue = null;
            this._records.delete(rec.key);
        }
    };
    /**
     * @param {?} record
     * @param {?} newValue
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._maybeAddToChanges = function (record, newValue) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["i" /* looseIdentical */])(newValue, record.currentValue)) {
            record.previousValue = record.currentValue;
            record.currentValue = newValue;
            this._addToChanges(record);
        }
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
        return record === this._removalsHead || record._nextRemoved !== null ||
            record._prevRemoved !== null;
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
        if (this._removalsHead === null) {
            this._removalsHead = this._removalsTail = record;
        }
        else {
            this._removalsTail._nextRemoved = record;
            record._prevRemoved = this._removalsTail;
            this._removalsTail = record;
        }
    };
    /**
     * @param {?} prev
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
        var /** @type {?} */ next = record._next;
        if (prev === null) {
            this._mapHead = next;
        }
        else {
            prev._next = next;
        }
        record._next = null;
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
        var /** @type {?} */ prev = record._prevRemoved;
        var /** @type {?} */ next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        record._prevRemoved = record._nextRemoved = null;
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
        if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = record;
        }
        else {
            this._additionsTail._nextAdded = record;
            this._additionsTail = record;
        }
    };
    /**
     * @param {?} record
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
        if (this._changesHead === null) {
            this._changesHead = this._changesTail = record;
        }
        else {
            this._changesTail._nextChanged = record;
            this._changesTail = record;
        }
    };
    /**
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype.toString = function () {
        var /** @type {?} */ items = [];
        var /** @type {?} */ previous = [];
        var /** @type {?} */ changes = [];
        var /** @type {?} */ additions = [];
        var /** @type {?} */ removals = [];
        var /** @type {?} */ record;
        for (record = this._mapHead; record !== null; record = record._next) {
            items.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            previous.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            changes.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            additions.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            removals.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        return 'map: ' + items.join(', ') + '\n' +
            'previous: ' + previous.join(', ') + '\n' +
            'additions: ' + additions.join(', ') + '\n' +
            'changes: ' + changes.join(', ') + '\n' +
            'removals: ' + removals.join(', ') + '\n';
    };
    /**
     * @param {?} obj
     * @param {?} fn
     * @return {?}
     */
    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
        if (obj instanceof Map) {
            obj.forEach(fn);
        }
        else {
            Object.keys(obj).forEach(function (k) { return fn(obj[k], k); });
        }
    };
    return DefaultKeyValueDiffer;
}());
function DefaultKeyValueDiffer_tsickle_Closure_declarations() {
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._records;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._mapHead;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._previousMapHead;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._changesHead;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._changesTail;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._additionsHead;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._additionsTail;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._removalsHead;
    /** @type {?} */
    DefaultKeyValueDiffer.prototype._removalsTail;
}
/**
 * @stable
 */
var KeyValueChangeRecord = (function () {
    /**
     * @param {?} key
     */
    function KeyValueChangeRecord(key) {
        this.key = key;
        this.previousValue = null;
        this.currentValue = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextChanged = null;
    }
    /**
     * @return {?}
     */
    KeyValueChangeRecord.prototype.toString = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["i" /* looseIdentical */])(this.previousValue, this.currentValue) ?
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.key) :
            (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.key) + '[' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.previousValue) + '->' +
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.currentValue) + ']');
    };
    return KeyValueChangeRecord;
}());
function KeyValueChangeRecord_tsickle_Closure_declarations() {
    /** @type {?} */
    KeyValueChangeRecord.prototype.previousValue;
    /** @type {?} */
    KeyValueChangeRecord.prototype.currentValue;
    /** @type {?} */
    KeyValueChangeRecord.prototype._nextPrevious;
    /** @type {?} */
    KeyValueChangeRecord.prototype._next;
    /** @type {?} */
    KeyValueChangeRecord.prototype._nextAdded;
    /** @type {?} */
    KeyValueChangeRecord.prototype._nextRemoved;
    /** @type {?} */
    KeyValueChangeRecord.prototype._prevRemoved;
    /** @type {?} */
    KeyValueChangeRecord.prototype._nextChanged;
    /** @type {?} */
    KeyValueChangeRecord.prototype.key;
}
//# sourceMappingURL=default_keyvalue_differ.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IterableDiffers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 *  A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
 */
var IterableDiffers = (function () {
    /**
     * @param {?} factories
     */
    function IterableDiffers(factories) {
        this.factories = factories;
    }
    /**
     * @param {?} factories
     * @param {?=} parent
     * @return {?}
     */
    IterableDiffers.create = function (factories, parent) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(parent)) {
            var /** @type {?} */ copied = parent.factories.slice();
            factories = factories.concat(copied);
            return new IterableDiffers(factories);
        }
        else {
            return new IterableDiffers(factories);
        }
    };
    /**
     *  Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
      * inherited {@link IterableDiffers} instance with the provided factories and return a new
      * {@link IterableDiffers} instance.
      * *
      * The following example shows how to extend an existing list of factories,
      * which will only be applied to the injector for this component and its children.
      * This step is all that's required to make a new {@link IterableDiffer} available.
      * *
      * ### Example
      * *
      * ```
      * viewProviders: [
      * IterableDiffers.extend([new ImmutableListDiffer()])
      * ]
      * })
      * ```
     * @param {?} factories
     * @return {?}
     */
    IterableDiffers.extend = function (factories) {
        return {
            provide: IterableDiffers,
            useFactory: function (parent) {
                if (!parent) {
                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new Error('Cannot extend IterableDiffers without a parent injector');
                }
                return IterableDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[IterableDiffers, new __WEBPACK_IMPORTED_MODULE_0__di__["e" /* SkipSelf */](), new __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */]()]]
        };
    };
    /**
     * @param {?} iterable
     * @return {?}
     */
    IterableDiffers.prototype.find = function (iterable) {
        var /** @type {?} */ factory = this.factories.find(function (f) { return f.supports(iterable); });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(factory)) {
            return factory;
        }
        else {
            throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["j" /* getTypeNameForDebugging */])(iterable) + "'");
        }
    };
    return IterableDiffers;
}());
function IterableDiffers_tsickle_Closure_declarations() {
    /** @type {?} */
    IterableDiffers.prototype.factories;
}
//# sourceMappingURL=iterable_differs.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeyValueDiffers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 *  A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 */
var KeyValueDiffers = (function () {
    /**
     * @param {?} factories
     */
    function KeyValueDiffers(factories) {
        this.factories = factories;
    }
    /**
     * @param {?} factories
     * @param {?=} parent
     * @return {?}
     */
    KeyValueDiffers.create = function (factories, parent) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(parent)) {
            var /** @type {?} */ copied = parent.factories.slice();
            factories = factories.concat(copied);
            return new KeyValueDiffers(factories);
        }
        else {
            return new KeyValueDiffers(factories);
        }
    };
    /**
     *  Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
      * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
      * {@link KeyValueDiffers} instance.
      * *
      * The following example shows how to extend an existing list of factories,
      * which will only be applied to the injector for this component and its children.
      * This step is all that's required to make a new {@link KeyValueDiffer} available.
      * *
      * ### Example
      * *
      * ```
      * viewProviders: [
      * KeyValueDiffers.extend([new ImmutableMapDiffer()])
      * ]
      * })
      * ```
     * @param {?} factories
     * @return {?}
     */
    KeyValueDiffers.extend = function (factories) {
        return {
            provide: KeyValueDiffers,
            useFactory: function (parent) {
                if (!parent) {
                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                }
                return KeyValueDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[KeyValueDiffers, new __WEBPACK_IMPORTED_MODULE_0__di__["e" /* SkipSelf */](), new __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */]()]]
        };
    };
    /**
     * @param {?} kv
     * @return {?}
     */
    KeyValueDiffers.prototype.find = function (kv) {
        var /** @type {?} */ factory = this.factories.find(function (f) { return f.supports(kv); });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(factory)) {
            return factory;
        }
        else {
            throw new Error("Cannot find a differ supporting object '" + kv + "'");
        }
    };
    return KeyValueDiffers;
}());
function KeyValueDiffers_tsickle_Closure_declarations() {
    /** @type {?} */
    KeyValueDiffers.prototype.factories;
}
//# sourceMappingURL=keyvalue_differs.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return EventListener; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return DebugNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugElement; });
/* unused harmony export asNativeElements */
/* harmony export (immutable) */ exports["c"] = getDebugNode;
/* unused harmony export getAllDebugNodes */
/* harmony export (immutable) */ exports["b"] = indexDebugNode;
/* harmony export (immutable) */ exports["e"] = removeDebugNodeFromIndex;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventListener = (function () {
    /**
     * @param {?} name
     * @param {?} callback
     */
    function EventListener(name, callback) {
        this.name = name;
        this.callback = callback;
    }
    ;
    return EventListener;
}());
function EventListener_tsickle_Closure_declarations() {
    /** @type {?} */
    EventListener.prototype.name;
    /** @type {?} */
    EventListener.prototype.callback;
}
/**
 * @experimental All debugging apis are currently experimental.
 */
var DebugNode = (function () {
    /**
     * @param {?} nativeNode
     * @param {?} parent
     * @param {?} _debugInfo
     */
    function DebugNode(nativeNode, parent, _debugInfo) {
        this._debugInfo = _debugInfo;
        this.nativeNode = nativeNode;
        if (parent && parent instanceof DebugElement) {
            parent.addChild(this);
        }
        else {
            this.parent = null;
        }
        this.listeners = [];
    }
    Object.defineProperty(DebugNode.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this._debugInfo ? this._debugInfo.injector : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "componentInstance", {
        /**
         * @return {?}
         */
        get: function () { return this._debugInfo ? this._debugInfo.component : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "context", {
        /**
         * @return {?}
         */
        get: function () { return this._debugInfo ? this._debugInfo.context : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "references", {
        /**
         * @return {?}
         */
        get: function () {
            return this._debugInfo ? this._debugInfo.references : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "providerTokens", {
        /**
         * @return {?}
         */
        get: function () { return this._debugInfo ? this._debugInfo.providerTokens : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "source", {
        /**
         * @return {?}
         */
        get: function () { return this._debugInfo ? this._debugInfo.source : null; },
        enumerable: true,
        configurable: true
    });
    return DebugNode;
}());
function DebugNode_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugNode.prototype.nativeNode;
    /** @type {?} */
    DebugNode.prototype.listeners;
    /** @type {?} */
    DebugNode.prototype.parent;
    /** @type {?} */
    DebugNode.prototype._debugInfo;
}
/**
 * @experimental All debugging apis are currently experimental.
 */
var DebugElement = (function (_super) {
    __extends(DebugElement, _super);
    /**
     * @param {?} nativeNode
     * @param {?} parent
     * @param {?} _debugInfo
     */
    function DebugElement(nativeNode, parent, _debugInfo) {
        _super.call(this, nativeNode, parent, _debugInfo);
        this.properties = {};
        this.attributes = {};
        this.classes = {};
        this.styles = {};
        this.childNodes = [];
        this.nativeElement = nativeNode;
    }
    /**
     * @param {?} child
     * @return {?}
     */
    DebugElement.prototype.addChild = function (child) {
        if (child) {
            this.childNodes.push(child);
            child.parent = this;
        }
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DebugElement.prototype.removeChild = function (child) {
        var /** @type {?} */ childIndex = this.childNodes.indexOf(child);
        if (childIndex !== -1) {
            child.parent = null;
            this.childNodes.splice(childIndex, 1);
        }
    };
    /**
     * @param {?} child
     * @param {?} newChildren
     * @return {?}
     */
    DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
        var /** @type {?} */ siblingIndex = this.childNodes.indexOf(child);
        if (siblingIndex !== -1) {
            var /** @type {?} */ previousChildren = this.childNodes.slice(0, siblingIndex + 1);
            var /** @type {?} */ nextChildren = this.childNodes.slice(siblingIndex + 1);
            this.childNodes = previousChildren.concat(newChildren, nextChildren);
            for (var /** @type {?} */ i = 0; i < newChildren.length; ++i) {
                var /** @type {?} */ newChild = newChildren[i];
                if (newChild.parent) {
                    newChild.parent.removeChild(newChild);
                }
                newChild.parent = this;
            }
        }
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.query = function (predicate) {
        var /** @type {?} */ results = this.queryAll(predicate);
        return results[0] || null;
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.queryAll = function (predicate) {
        var /** @type {?} */ matches = [];
        _queryElementChildren(this, predicate, matches);
        return matches;
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.queryAllNodes = function (predicate) {
        var /** @type {?} */ matches = [];
        _queryNodeChildren(this, predicate, matches);
        return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
        /**
         * @return {?}
         */
        get: function () {
            return (this.childNodes.filter(function (node) { return node instanceof DebugElement; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} eventName
     * @param {?} eventObj
     * @return {?}
     */
    DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
        this.listeners.forEach(function (listener) {
            if (listener.name == eventName) {
                listener.callback(eventObj);
            }
        });
    };
    return DebugElement;
}(DebugNode));
function DebugElement_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugElement.prototype.name;
    /** @type {?} */
    DebugElement.prototype.properties;
    /** @type {?} */
    DebugElement.prototype.attributes;
    /** @type {?} */
    DebugElement.prototype.classes;
    /** @type {?} */
    DebugElement.prototype.styles;
    /** @type {?} */
    DebugElement.prototype.childNodes;
    /** @type {?} */
    DebugElement.prototype.nativeElement;
}
/**
 * @param {?} debugEls
 * @return {?}
 */
function asNativeElements(debugEls) {
    return debugEls.map(function (el) { return el.nativeElement; });
}
/**
 * @param {?} element
 * @param {?} predicate
 * @param {?} matches
 * @return {?}
 */
function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function (node) {
        if (node instanceof DebugElement) {
            if (predicate(node)) {
                matches.push(node);
            }
            _queryElementChildren(node, predicate, matches);
        }
    });
}
/**
 * @param {?} parentNode
 * @param {?} predicate
 * @param {?} matches
 * @return {?}
 */
function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
        parentNode.childNodes.forEach(function (node) {
            if (predicate(node)) {
                matches.push(node);
            }
            if (node instanceof DebugElement) {
                _queryNodeChildren(node, predicate, matches);
            }
        });
    }
}
// Need to keep the nodes in a global Map so that multiple angular apps are supported.
var /** @type {?} */ _nativeNodeToDebugNode = new Map();
/**
 * @param {?} nativeNode
 * @return {?}
 */
function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode);
}
/**
 * @return {?}
 */
function getAllDebugNodes() {
    return Array.from(_nativeNodeToDebugNode.values());
}
/**
 * @param {?} node
 * @return {?}
 */
function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
}
/**
 * @param {?} node
 * @return {?}
 */
function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
}
//# sourceMappingURL=debug_node.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AbstractProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return NoProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return CyclicDependencyError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return InstantiationError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return InvalidProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NoAnnotationError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return OutOfBoundsError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MixingMultiProvidersWithRegularProvidersError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * @param {?} keys
 * @return {?}
 */
function findFirstClosedCycle(keys) {
    var /** @type {?} */ res = [];
    for (var /** @type {?} */ i = 0; i < keys.length; ++i) {
        if (res.indexOf(keys[i]) > -1) {
            res.push(keys[i]);
            return res;
        }
        res.push(keys[i]);
    }
    return res;
}
/**
 * @param {?} keys
 * @return {?}
 */
function constructResolvingPath(keys) {
    if (keys.length > 1) {
        var /** @type {?} */ reversed = findFirstClosedCycle(keys.slice().reverse());
        var /** @type {?} */ tokenStrs = reversed.map(function (k) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(k.token); });
        return ' (' + tokenStrs.join(' -> ') + ')';
    }
    return '';
}
/**
 *  Base class for all errors arising from misconfigured providers.
 */
var AbstractProviderError = (function (_super) {
    __extends(AbstractProviderError, _super);
    /**
     * @param {?} injector
     * @param {?} key
     * @param {?} constructResolvingMessage
     */
    function AbstractProviderError(injector, key, constructResolvingMessage) {
        _super.call(this, 'DI Error');
        this.keys = [key];
        this.injectors = [injector];
        this.constructResolvingMessage = constructResolvingMessage;
        this.message = this.constructResolvingMessage(this.keys);
    }
    /**
     * @param {?} injector
     * @param {?} key
     * @return {?}
     */
    AbstractProviderError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
        this.message = this.constructResolvingMessage(this.keys);
    };
    return AbstractProviderError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
function AbstractProviderError_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractProviderError.prototype.message;
    /** @type {?} */
    AbstractProviderError.prototype.keys;
    /** @type {?} */
    AbstractProviderError.prototype.injectors;
    /** @type {?} */
    AbstractProviderError.prototype.constructResolvingMessage;
}
/**
 *  Thrown when trying to retrieve a dependency by key from {@link Injector}, but the
  * {@link Injector} does not have a {@link Provider} for the given key.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
  * *
  * ```typescript
  * class A {
  * constructor(b:B) {}
  * }
  * *
  * expect(() => Injector.resolveAndCreate([A])).toThrowError();
  * ```
 */
var NoProviderError = (function (_super) {
    __extends(NoProviderError, _super);
    /**
     * @param {?} injector
     * @param {?} key
     */
    function NoProviderError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            var first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(keys[0].token);
            return "No provider for " + first + "!" + constructResolvingPath(keys);
        });
    }
    return NoProviderError;
}(AbstractProviderError));
/**
 *  Thrown when dependencies form a cycle.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
  * *
  * ```typescript
  * var injector = Injector.resolveAndCreate([
  * {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
  * {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
  * ]);
  * *
  * expect(() => injector.get("one")).toThrowError();
  * ```
  * *
  * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
 */
var CyclicDependencyError = (function (_super) {
    __extends(CyclicDependencyError, _super);
    /**
     * @param {?} injector
     * @param {?} key
     */
    function CyclicDependencyError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
        });
    }
    return CyclicDependencyError;
}(AbstractProviderError));
/**
 *  Thrown when a constructing type returns with an Error.
  * *
  * The `InstantiationError` class contains the original error plus the dependency graph which caused
  * this object to be instantiated.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
  * *
  * ```typescript
  * class A {
  * constructor() {
  * throw new Error('message');
  * }
  * }
  * *
  * var injector = Injector.resolveAndCreate([A]);
  * try {
  * injector.get(A);
  * } catch (e) {
  * expect(e instanceof InstantiationError).toBe(true);
  * expect(e.originalException.message).toEqual("message");
  * expect(e.originalStack).toBeDefined();
  * }
  * ```
 */
var InstantiationError = (function (_super) {
    __extends(InstantiationError, _super);
    /**
     * @param {?} injector
     * @param {?} originalException
     * @param {?} originalStack
     * @param {?} key
     */
    function InstantiationError(injector, originalException, originalStack, key) {
        _super.call(this, 'DI Error', originalException);
        this.keys = [key];
        this.injectors = [injector];
    }
    /**
     * @param {?} injector
     * @param {?} key
     * @return {?}
     */
    InstantiationError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "message", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.keys[0].token);
            return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
        /**
         * @return {?}
         */
        get: function () { return this.keys[0]; },
        enumerable: true,
        configurable: true
    });
    return InstantiationError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["c" /* WrappedError */]));
function InstantiationError_tsickle_Closure_declarations() {
    /** @type {?} */
    InstantiationError.prototype.keys;
    /** @type {?} */
    InstantiationError.prototype.injectors;
}
/**
 *  Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
  * creation.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
  * *
  * ```typescript
  * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
  * ```
 */
var InvalidProviderError = (function (_super) {
    __extends(InvalidProviderError, _super);
    /**
     * @param {?} provider
     */
    function InvalidProviderError(provider) {
        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
    }
    return InvalidProviderError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 *  Thrown when the class has no annotation information.
  * *
  * Lack of annotation information prevents the {@link Injector} from determining which dependencies
  * need to be injected into the constructor.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
  * *
  * ```typescript
  * class A {
  * constructor(b) {}
  * }
  * *
  * expect(() => Injector.resolveAndCreate([A])).toThrowError();
  * ```
  * *
  * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
  * *
  * ```typescript
  * class B {}
  * *
  * class A {
  * constructor(b:B) {} // no information about the parameter types of A is available at runtime.
  * }
  * *
  * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
  * ```
 */
var NoAnnotationError = (function (_super) {
    __extends(NoAnnotationError, _super);
    /**
     * @param {?} typeOrFunc
     * @param {?} params
     */
    function NoAnnotationError(typeOrFunc, params) {
        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    /**
     * @param {?} typeOrFunc
     * @param {?} params
     * @return {?}
     */
    NoAnnotationError._genMessage = function (typeOrFunc, params) {
        var /** @type {?} */ signature = [];
        for (var /** @type {?} */ i = 0, /** @type {?} */ ii = params.length; i < ii; i++) {
            var /** @type {?} */ parameter = params[i];
            if (!parameter || parameter.length == 0) {
                signature.push('?');
            }
            else {
                signature.push(parameter.map(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */]).join(' '));
            }
        }
        return 'Cannot resolve all parameters for \'' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(typeOrFunc) + '\'(' +
            signature.join(', ') + '). ' +
            'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' +
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(typeOrFunc) + '\' is decorated with Injectable.';
    };
    return NoAnnotationError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 *  Thrown when getting an object by index.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
  * *
  * ```typescript
  * class A {}
  * *
  * var injector = Injector.resolveAndCreate([A]);
  * *
  * expect(() => injector.getAt(100)).toThrowError();
  * ```
 */
var OutOfBoundsError = (function (_super) {
    __extends(OutOfBoundsError, _super);
    /**
     * @param {?} index
     */
    function OutOfBoundsError(index) {
        _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 *  Thrown when a multi provider and a regular provider are bound to the same token.
  * *
  * ### Example
  * *
  * ```typescript
  * expect(() => Injector.resolveAndCreate([
  * { provide: "Strings", useValue: "string1", multi: true},
  * { provide: "Strings", useValue: "string2", multi: false}
  * ])).toThrowError();
  * ```
 */
var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
    /**
     * @param {?} provider1
     * @param {?} provider2
     */
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
        _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' +
            provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
//# sourceMappingURL=reflective_errors.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorHandler; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  *
  * *
  * The default implementation of `ErrorHandler` prints error messages to the `console`. To
  * intercept error handling, write a custom exception handler that replaces this default as
  * appropriate for your app.
  * *
  * ### Example
  * *
  * ```
  * class MyErrorHandler implements ErrorHandler {
  * handleError(error) {
  * // do something with the exception
  * }
  * }
  * *
  * providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
  * })
  * class MyModule {}
  * ```
  * *
 */
var ErrorHandler = (function () {
    /**
     * @param {?=} rethrowError
     */
    function ErrorHandler(rethrowError) {
        if (rethrowError === void 0) { rethrowError = true; }
        /**
         * @internal
         */
        this._console = console;
        this.rethrowError = rethrowError;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandler.prototype.handleError = function (error) {
        var /** @type {?} */ originalError = this._findOriginalError(error);
        var /** @type {?} */ originalStack = this._findOriginalStack(error);
        var /** @type {?} */ context = this._findContext(error);
        this._console.error("EXCEPTION: " + this._extractMessage(error));
        if (originalError) {
            this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
        }
        if (originalStack) {
            this._console.error('ORIGINAL STACKTRACE:');
            this._console.error(originalStack);
        }
        if (context) {
            this._console.error('ERROR CONTEXT:');
            this._console.error(context);
        }
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        if (this.rethrowError)
            throw error;
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandler.prototype._extractMessage = function (error) {
        return error instanceof Error ? error.message : error.toString();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandler.prototype._findContext = function (error) {
        if (error) {
            return error.context ? error.context :
                this._findContext(((error)).originalError);
        }
        return null;
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandler.prototype._findOriginalError = function (error) {
        var /** @type {?} */ e = ((error)).originalError;
        while (e && ((e)).originalError) {
            e = ((e)).originalError;
        }
        return e;
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandler.prototype._findOriginalStack = function (error) {
        if (!(error instanceof Error))
            return null;
        var /** @type {?} */ e = error;
        var /** @type {?} */ stack = e.stack;
        while (e instanceof Error && ((e)).originalError) {
            e = ((e)).originalError;
            if (e instanceof Error && e.stack) {
                stack = e.stack;
            }
        }
        return stack;
    };
    return ErrorHandler;
}());
function ErrorHandler_tsickle_Closure_declarations() {
    /** @type {?} */
    ErrorHandler.prototype._console;
    /** @type {?} */
    ErrorHandler.prototype.rethrowError;
}
//# sourceMappingURL=error_handler.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LOCALE_ID; });
/* unused harmony export TRANSLATIONS */
/* unused harmony export TRANSLATIONS_FORMAT */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @experimental i18n support is experimental.
 */
var /** @type {?} */ LOCALE_ID = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('LocaleId');
/**
 * @experimental i18n support is experimental.
 */
var /** @type {?} */ TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('Translations');
/**
 * @experimental i18n support is experimental.
 */
var /** @type {?} */ TRANSLATIONS_FORMAT = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('TranslationsFormat');
//# sourceMappingURL=tokens.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_type__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return StaticNodeDebugInfo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugContext; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var StaticNodeDebugInfo = (function () {
    /**
     * @param {?} providerTokens
     * @param {?} componentToken
     * @param {?} refTokens
     */
    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
        this.providerTokens = providerTokens;
        this.componentToken = componentToken;
        this.refTokens = refTokens;
    }
    return StaticNodeDebugInfo;
}());
function StaticNodeDebugInfo_tsickle_Closure_declarations() {
    /** @type {?} */
    StaticNodeDebugInfo.prototype.providerTokens;
    /** @type {?} */
    StaticNodeDebugInfo.prototype.componentToken;
    /** @type {?} */
    StaticNodeDebugInfo.prototype.refTokens;
}
var DebugContext = (function () {
    /**
     * @param {?} _view
     * @param {?} _nodeIndex
     * @param {?} _tplRow
     * @param {?} _tplCol
     */
    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
        this._view = _view;
        this._nodeIndex = _nodeIndex;
        this._tplRow = _tplRow;
        this._tplCol = _tplCol;
    }
    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
        /**
         * @return {?}
         */
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "context", {
        /**
         * @return {?}
         */
        get: function () { return this._view.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "component", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ staticNodeInfo = this._staticNodeInfo;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo.componentToken)) {
                return this.injector.get(staticNodeInfo.componentToken);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ componentView = this._view;
            while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(componentView.parentView) && componentView.type !== __WEBPACK_IMPORTED_MODULE_1__view_type__["a" /* ViewType */].COMPONENT) {
                componentView = (componentView.parentView);
            }
            return componentView.parentElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this._view.injector(this._nodeIndex); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "renderNode", {
        /**
         * @return {?}
         */
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._nodeIndex) && this._view.allNodes) {
                return this._view.allNodes[this._nodeIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "providerTokens", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ staticNodeInfo = this._staticNodeInfo;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "source", {
        /**
         * @return {?}
         */
        get: function () {
            return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "references", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            var /** @type {?} */ varValues = {};
            var /** @type {?} */ staticNodeInfo = this._staticNodeInfo;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo)) {
                var /** @type {?} */ refs_1 = staticNodeInfo.refTokens;
                Object.keys(refs_1).forEach(function (refName) {
                    var /** @type {?} */ refToken = refs_1[refName];
                    var /** @type {?} */ varValue;
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["c" /* isBlank */])(refToken)) {
                        varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
                    }
                    else {
                        varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
                    }
                    varValues[refName] = varValue;
                });
            }
            return varValues;
        },
        enumerable: true,
        configurable: true
    });
    return DebugContext;
}());
function DebugContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugContext.prototype._view;
    /** @type {?} */
    DebugContext.prototype._nodeIndex;
    /** @type {?} */
    DebugContext.prototype._tplRow;
    /** @type {?} */
    DebugContext.prototype._tplCol;
}
//# sourceMappingURL=debug_context.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExpressionChangedAfterItHasBeenCheckedError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ViewWrappedError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ViewDestroyedError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 *  An error thrown if application changes model breaking the top-down data flow.
  * *
  * This exception is only thrown in dev mode.
  * *
  * <!-- TODO: Add a link once the dev mode option is configurable -->
  * *
  * ### Example
  * *
  * ```typescript
  * selector: 'parent',
  * template: '<child [prop]="parentProp"></child>',
  * })
  * class Parent {
  * parentProp = 'init';
  * }
  * *
  * class Child {
  * constructor(public parent: Parent) {}
  * *
  * set prop(v) {
  * // this updates the parent property, which is disallowed during change detection
  * // this will result in ExpressionChangedAfterItHasBeenCheckedError
  * this.parent.parentProp = 'updated';
  * }
  * }
  * ```
 */
var ExpressionChangedAfterItHasBeenCheckedError = (function (_super) {
    __extends(ExpressionChangedAfterItHasBeenCheckedError, _super);
    /**
     * @param {?} oldValue
     * @param {?} currValue
     */
    function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
        var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
        if (oldValue === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection_util__["a" /* UNINITIALIZED */]) {
            msg +=
                " It seems like the view has been created after its parent and its children have been dirty checked." +
                    " Has it been created in a change detection hook ?";
        }
        _super.call(this, msg);
    }
    return ExpressionChangedAfterItHasBeenCheckedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
/**
 *  Thrown when an exception was raised during view creation, change detection or destruction.
  * *
  * This error wraps the original exception to attach additional contextual information that can
  * be useful for debugging.
 */
var ViewWrappedError = (function (_super) {
    __extends(ViewWrappedError, _super);
    /**
     * @param {?} originalError
     * @param {?} context
     */
    function ViewWrappedError(originalError, context) {
        _super.call(this, "Error in " + context.source, originalError);
        this.context = context;
    }
    return ViewWrappedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["c" /* WrappedError */]));
function ViewWrappedError_tsickle_Closure_declarations() {
    /**
     * DebugContext
     * @type {?}
     */
    ViewWrappedError.prototype.context;
}
/**
 *  Thrown when a destroyed view is used.
  * *
  * This error indicates a bug in the framework.
  * *
  * This is an internal Angular error.
 */
var ViewDestroyedError = (function (_super) {
    __extends(ViewDestroyedError, _super);
    /**
     * @param {?} details
     */
    function ViewDestroyedError(details) {
        _super.call(this, "Attempt to use a destroyed view: " + details);
    }
    return ViewDestroyedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
//# sourceMappingURL=errors.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_injector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__ = __webpack_require__(12);
/* unused harmony export NgModuleRef */
/* unused harmony export NgModuleFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgModuleInjector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 *  Represents an instance of an NgModule created via a {@link NgModuleFactory}.
  * *
  * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
  * NgModule Instance.
  * *
 * @abstract
 */
var NgModuleRef = (function () {
    function NgModuleRef() {
    }
    Object.defineProperty(NgModuleRef.prototype, "injector", {
        /**
         *  The injector that contains all of the providers of the NgModule.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
        /**
         *  The ComponentFactoryResolver to get hold of the ComponentFactories
          * declared in the `entryComponents` property of the module.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "instance", {
        /**
         *  The NgModule instance.
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    /**
     *  Destroys the module instance and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    NgModuleRef.prototype.destroy = function () { };
    /**
     *  Allows to register a callback that will be called when the module is destroyed.
     * @abstract
     * @param {?} callback
     * @return {?}
     */
    NgModuleRef.prototype.onDestroy = function (callback) { };
    return NgModuleRef;
}());
/**
 * @experimental
 */
var NgModuleFactory = (function () {
    /**
     * @param {?} _injectorClass
     * @param {?} _moduleType
     */
    function NgModuleFactory(_injectorClass, _moduleType) {
        this._injectorClass = _injectorClass;
        this._moduleType = _moduleType;
    }
    Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
        /**
         * @return {?}
         */
        get: function () { return this._moduleType; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} parentInjector
     * @return {?}
     */
    NgModuleFactory.prototype.create = function (parentInjector) {
        if (!parentInjector) {
            parentInjector = __WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */].NULL;
        }
        var /** @type {?} */ instance = new this._injectorClass(parentInjector);
        instance.create();
        return instance;
    };
    return NgModuleFactory;
}());
function NgModuleFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    NgModuleFactory.prototype._injectorClass;
    /** @type {?} */
    NgModuleFactory.prototype._moduleType;
}
var /** @type {?} */ _UNDEFINED = new Object();
/**
 * @abstract
 */
var NgModuleInjector = (function (_super) {
    __extends(NgModuleInjector, _super);
    /**
     * @param {?} parent
     * @param {?} factories
     * @param {?} bootstrapFactories
     */
    function NgModuleInjector(parent, factories, bootstrapFactories) {
        _super.call(this, factories, parent.get(__WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */].NULL));
        this.parent = parent;
        this.bootstrapFactories = bootstrapFactories;
        this._destroyListeners = [];
        this._destroyed = false;
    }
    /**
     * @return {?}
     */
    NgModuleInjector.prototype.create = function () { this.instance = this.createInternal(); };
    /**
     * @abstract
     * @return {?}
     */
    NgModuleInjector.prototype.createInternal = function () { };
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    NgModuleInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_0__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        if (token === __WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */] || token === __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */]) {
            return this;
        }
        var /** @type {?} */ result = this.getInternal(token, _UNDEFINED);
        return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
    };
    /**
     * @abstract
     * @param {?} token
     * @param {?} notFoundValue
     * @return {?}
     */
    NgModuleInjector.prototype.getInternal = function (token, notFoundValue) { };
    Object.defineProperty(NgModuleInjector.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgModuleInjector.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error("The ng module " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* stringify */])(this.instance.constructor) + " has already been destroyed.");
        }
        this._destroyed = true;
        this.destroyInternal();
        this._destroyListeners.forEach(function (listener) { return listener(); });
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    NgModuleInjector.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
    /**
     * @abstract
     * @return {?}
     */
    NgModuleInjector.prototype.destroyInternal = function () { };
    return NgModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["b" /* CodegenComponentFactoryResolver */]));
function NgModuleInjector_tsickle_Closure_declarations() {
    /** @type {?} */
    NgModuleInjector.prototype._destroyListeners;
    /** @type {?} */
    NgModuleInjector.prototype._destroyed;
    /** @type {?} */
    NgModuleInjector.prototype.instance;
    /** @type {?} */
    NgModuleInjector.prototype.parent;
    /** @type {?} */
    NgModuleInjector.prototype.bootstrapFactories;
}
//# sourceMappingURL=ng_module_factory.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export NgModuleFactoryLoader */
/* harmony export (immutable) */ exports["a"] = registerModuleFactory;
/* unused harmony export clearModulesForTest */
/* unused harmony export getModuleFactory */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *  Used to load ng module factories.
 * @abstract
 */
var NgModuleFactoryLoader = (function () {
    function NgModuleFactoryLoader() {
    }
    /**
     * @abstract
     * @param {?} path
     * @return {?}
     */
    NgModuleFactoryLoader.prototype.load = function (path) { };
    return NgModuleFactoryLoader;
}());
var /** @type {?} */ moduleFactories = new Map();
/**
 *  Registers a loaded module. Should only be called from generated NgModuleFactory code.
 * @param {?} id
 * @param {?} factory
 * @return {?}
 */
function registerModuleFactory(id, factory) {
    var /** @type {?} */ existing = moduleFactories.get(id);
    if (existing) {
        throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
    }
    moduleFactories.set(id, factory);
}
/**
 * @return {?}
 */
function clearModulesForTest() {
    moduleFactories = new Map();
}
/**
 *  Returns the NgModuleFactory with the given id, if it exists and has been loaded.
  * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
  * cannot be found.
 * @param {?} id
 * @return {?}
 */
function getModuleFactory(id) {
    var /** @type {?} */ factory = moduleFactories.get(id);
    if (!factory)
        throw new Error("No module with ID " + id + " loaded");
    return factory;
}
//# sourceMappingURL=ng_module_factory_loader.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_ref__ = __webpack_require__(13);
/* unused harmony export TemplateRef */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 *  Represents an Embedded Template that can be used to instantiate Embedded Views.
  * *
  * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
  * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
  * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
  * `TemplateRef` from a Component or a Directive via {@link Query}.
  * *
  * To instantiate Embedded Views based on a Template, use
  * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
  * View Container.
 * @abstract
 */
var TemplateRef = (function () {
    function TemplateRef() {
    }
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} context
     * @return {?}
     */
    TemplateRef.prototype.createEmbeddedView = function (context) { };
    return TemplateRef;
}());
var TemplateRef_ = (function (_super) {
    __extends(TemplateRef_, _super);
    /**
     * @param {?} _parentView
     * @param {?} _nodeIndex
     * @param {?} _nativeElement
     */
    function TemplateRef_(_parentView, _nodeIndex, _nativeElement) {
        _super.call(this);
        this._parentView = _parentView;
        this._nodeIndex = _nodeIndex;
        this._nativeElement = _nativeElement;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    TemplateRef_.prototype.createEmbeddedView = function (context) {
        var /** @type {?} */ view = this._parentView.createEmbeddedViewInternal(this._nodeIndex);
        view.create(context || ({}));
        return view.ref;
    };
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
        /**
         * @return {?}
         */
        get: function () { return new __WEBPACK_IMPORTED_MODULE_0__element_ref__["a" /* ElementRef */](this._nativeElement); },
        enumerable: true,
        configurable: true
    });
    return TemplateRef_;
}(TemplateRef));
function TemplateRef__tsickle_Closure_declarations() {
    /** @type {?} */
    TemplateRef_.prototype._parentView;
    /** @type {?} */
    TemplateRef_.prototype._nodeIndex;
    /** @type {?} */
    TemplateRef_.prototype._nativeElement;
}
//# sourceMappingURL=template_ref.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(16);
/* unused harmony export ViewContainerRef */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewContainerRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  Represents a container where one or more Views can be attached.
  * *
  * The container can contain two kinds of Views. Host Views, created by instantiating a
  * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
  * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
  * *
  * The location of the View Container within the containing View is specified by the Anchor
  * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
  * have a single View Container.
  * *
  * Root elements of Views attached to this container become siblings of the Anchor Element in
  * the Rendered View.
  * *
  * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
  * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
 * @abstract
 */
var ViewContainerRef = (function () {
    function ViewContainerRef() {
    }
    Object.defineProperty(ViewContainerRef.prototype, "element", {
        /**
         *  Anchor element that specifies the location of this container in the containing View.
          * <!-- TODO: rename to anchorElement -->
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
        /**
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    /**
     *  Destroys all Views in this container.
     * @abstract
     * @return {?}
     */
    ViewContainerRef.prototype.clear = function () { };
    /**
     *  Returns the {@link ViewRef} for the View located in this container at the specified index.
     * @abstract
     * @param {?} index
     * @return {?}
     */
    ViewContainerRef.prototype.get = function (index) { };
    Object.defineProperty(ViewContainerRef.prototype, "length", {
        /**
         *  Returns the number of Views currently attached to this container.
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     *  Instantiates an Embedded View based on the {@link TemplateRef `templateRef`} and inserts it
      * into this container at the specified `index`.
      * *
      * If `index` is not specified, the new View will be inserted as the last View in the container.
      * *
      * Returns the {@link ViewRef} for the newly created View.
     * @abstract
     * @param {?} templateRef
     * @param {?=} context
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef.prototype.createEmbeddedView = function (templateRef, context, index) { };
    /**
     *  Instantiates a single {@link Component} and inserts its Host View into this container at the
      * specified `index`.
      * *
      * The component is instantiated using its {@link ComponentFactory} which can be
      * obtained via {@link ComponentFactoryResolver#resolveComponentFactory}.
      * *
      * If `index` is not specified, the new View will be inserted as the last View in the container.
      * *
      * You can optionally specify the {@link Injector} that will be used as parent for the Component.
      * *
      * Returns the {@link ComponentRef} of the Host View created for the newly instantiated Component.
     * @abstract
     * @param {?} componentFactory
     * @param {?=} index
     * @param {?=} injector
     * @param {?=} projectableNodes
     * @return {?}
     */
    ViewContainerRef.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) { };
    /**
     *  Inserts a View identified by a {@link ViewRef} into the container at the specified `index`.
      * *
      * If `index` is not specified, the new View will be inserted as the last View in the container.
      * *
      * Returns the inserted {@link ViewRef}.
     * @abstract
     * @param {?} viewRef
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef.prototype.insert = function (viewRef, index) { };
    /**
     *  Moves a View identified by a {@link ViewRef} into the container at the specified `index`.
      * *
      * Returns the inserted {@link ViewRef}.
     * @abstract
     * @param {?} viewRef
     * @param {?} currentIndex
     * @return {?}
     */
    ViewContainerRef.prototype.move = function (viewRef, currentIndex) { };
    /**
     *  Returns the index of the View, specified via {@link ViewRef}, within the current container or
      * `-1` if this container doesn't contain the View.
     * @abstract
     * @param {?} viewRef
     * @return {?}
     */
    ViewContainerRef.prototype.indexOf = function (viewRef) { };
    /**
     *  Destroys a View attached to this container at the specified `index`.
      * *
      * If `index` is not specified, the last View in the container will be removed.
     * @abstract
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef.prototype.remove = function (index) { };
    /**
     *  Use along with {@link #insert} to move a View within the current container.
      * *
      * If the `index` param is omitted, the last {@link ViewRef} is detached.
     * @abstract
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef.prototype.detach = function (index) { };
    return ViewContainerRef;
}());
var ViewContainerRef_ = (function () {
    /**
     * @param {?} _element
     */
    function ViewContainerRef_(_element) {
        this._element = _element;
        /** @internal */
        this._createComponentInContainerScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#createComponent()');
        /** @internal */
        this._insertScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#insert()');
        /** @internal */
        this._removeScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#remove()');
        /** @internal */
        this._detachScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#detach()');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ views = this._element.nestedViews;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(views) ? views.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
        /**
         * @return {?}
         */
        get: function () { return this._element.elementRef; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this._element.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
        /**
         * @return {?}
         */
        get: function () { return this._element.parentInjector; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} templateRef
     * @param {?=} context
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
        if (context === void 0) { context = null; }
        if (index === void 0) { index = -1; }
        var /** @type {?} */ viewRef = templateRef.createEmbeddedView(context);
        this.insert(viewRef, index);
        return viewRef;
    };
    /**
     * @param {?} componentFactory
     * @param {?=} index
     * @param {?=} injector
     * @param {?=} projectableNodes
     * @return {?}
     */
    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
        if (index === void 0) { index = -1; }
        if (injector === void 0) { injector = null; }
        if (projectableNodes === void 0) { projectableNodes = null; }
        var /** @type {?} */ s = this._createComponentInContainerScope();
        var /** @type {?} */ contextInjector = injector || this._element.parentInjector;
        var /** @type {?} */ componentRef = componentFactory.create(contextInjector, projectableNodes);
        this.insert(componentRef.hostView, index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, componentRef);
    };
    /**
     * @param {?} viewRef
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef_.prototype.insert = function (viewRef, index) {
        if (index === void 0) { index = -1; }
        var /** @type {?} */ s = this._insertScope();
        if (index == -1)
            index = this.length;
        var /** @type {?} */ viewRef_ = (viewRef);
        this._element.attachView(viewRef_.internalView, index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, viewRef_);
    };
    /**
     * @param {?} viewRef
     * @param {?} currentIndex
     * @return {?}
     */
    ViewContainerRef_.prototype.move = function (viewRef, currentIndex) {
        var /** @type {?} */ s = this._insertScope();
        if (currentIndex == -1)
            return;
        var /** @type {?} */ viewRef_ = (viewRef);
        this._element.moveView(viewRef_.internalView, currentIndex);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, viewRef_);
    };
    /**
     * @param {?} viewRef
     * @return {?}
     */
    ViewContainerRef_.prototype.indexOf = function (viewRef) {
        return this._element.nestedViews.indexOf(((viewRef)).internalView);
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef_.prototype.remove = function (index) {
        if (index === void 0) { index = -1; }
        var /** @type {?} */ s = this._removeScope();
        if (index == -1)
            index = this.length - 1;
        var /** @type {?} */ view = this._element.detachView(index);
        view.destroy();
        // view is intentionally not returned to the client.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s);
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    ViewContainerRef_.prototype.detach = function (index) {
        if (index === void 0) { index = -1; }
        var /** @type {?} */ s = this._detachScope();
        if (index == -1)
            index = this.length - 1;
        var /** @type {?} */ view = this._element.detachView(index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, view.ref);
    };
    /**
     * @return {?}
     */
    ViewContainerRef_.prototype.clear = function () {
        for (var /** @type {?} */ i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    };
    return ViewContainerRef_;
}());
function ViewContainerRef__tsickle_Closure_declarations() {
    /** @type {?} */
    ViewContainerRef_.prototype._createComponentInContainerScope;
    /** @type {?} */
    ViewContainerRef_.prototype._insertScope;
    /** @type {?} */
    ViewContainerRef_.prototype._removeScope;
    /** @type {?} */
    ViewContainerRef_.prototype._detachScope;
    /** @type {?} */
    ViewContainerRef_.prototype._element;
}
//# sourceMappingURL=view_container_ref.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detector_ref__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_detection_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_errors__ = __webpack_require__(1);
/* unused harmony export ViewRef */
/* unused harmony export EmbeddedViewRef */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * @abstract
 */
var ViewRef = (function (_super) {
    __extends(ViewRef, _super);
    function ViewRef() {
        _super.apply(this, arguments);
    }
    /**
     *  Destroys the view and all of the data structures associated with it.
     * @abstract
     * @return {?}
     */
    ViewRef.prototype.destroy = function () { };
    Object.defineProperty(ViewRef.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} callback
     * @return {?}
     */
    ViewRef.prototype.onDestroy = function (callback) { };
    return ViewRef;
}(__WEBPACK_IMPORTED_MODULE_0__change_detection_change_detector_ref__["a" /* ChangeDetectorRef */]));
/**
 *  Represents an Angular View.
  * *
  * <!-- TODO: move the next two paragraphs to the dev guide -->
  * A View is a fundamental building block of the application UI. It is the smallest grouping of
  * Elements which are created and destroyed together.
  * *
  * Properties of elements in a View can change, but the structure (number and order) of elements in
  * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
  * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
  * <!-- /TODO -->
  * *
  * ### Example
  * *
  * Given this template...
  * *
  * ```
  * Count: {{items.length}}
  * <ul>
  * <li *ngFor="let  item of items">{{item}}</li>
  * </ul>
  * ```
  * *
  * We have two {@link TemplateRef}s:
  * *
  * Outer {@link TemplateRef}:
  * ```
  * Count: {{items.length}}
  * <ul>
  * <template ngFor let-item [ngForOf]="items"></template>
  * </ul>
  * ```
  * *
  * Inner {@link TemplateRef}:
  * ```
  * <li>{{item}}</li>
  * ```
  * *
  * Notice that the original template is broken down into two separate {@link TemplateRef}s.
  * *
  * The outer/inner {@link TemplateRef}s are then assembled into views like so:
  * *
  * ```
  * <!-- ViewRef: outer-0 -->
  * Count: 2
  * <ul>
  * <template view-container-ref></template>
  * <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
  * <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
  * </ul>
  * <!-- /ViewRef: outer-0 -->
  * ```
 * @abstract
 */
var EmbeddedViewRef = (function (_super) {
    __extends(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
        /**
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
        /**
         * @return {?}
         */
        get: function () { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])()); },
        enumerable: true,
        configurable: true
    });
    ;
    return EmbeddedViewRef;
}(ViewRef));
var ViewRef_ = (function () {
    /**
     * @param {?} _view
     * @param {?} animationQueue
     */
    function ViewRef_(_view, animationQueue) {
        this._view = _view;
        this.animationQueue = animationQueue;
        this._view = _view;
        this._originalMode = this._view.cdMode;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
        /**
         * @return {?}
         */
        get: function () { return this._view; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
        /**
         * @return {?}
         */
        get: function () { return this._view.flatRootNodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "context", {
        /**
         * @return {?}
         */
        get: function () { return this._view.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { return this._view.destroyed; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
    /**
     * @return {?}
     */
    ViewRef_.prototype.detach = function () { this._view.cdMode = __WEBPACK_IMPORTED_MODULE_1__change_detection_constants__["b" /* ChangeDetectorStatus */].Detached; };
    /**
     * @return {?}
     */
    ViewRef_.prototype.detectChanges = function () {
        this._view.detectChanges(false);
        this.animationQueue.flush();
    };
    /**
     * @return {?}
     */
    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
    /**
     * @return {?}
     */
    ViewRef_.prototype.reattach = function () {
        this._view.cdMode = this._originalMode;
        this.markForCheck();
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    ViewRef_.prototype.onDestroy = function (callback) {
        if (!this._view.disposables) {
            this._view.disposables = [];
        }
        this._view.disposables.push(callback);
    };
    /**
     * @return {?}
     */
    ViewRef_.prototype.destroy = function () { this._view.detachAndDestroy(); };
    return ViewRef_;
}());
function ViewRef__tsickle_Closure_declarations() {
    /** @type {?} */
    ViewRef_.prototype._originalMode;
    /** @type {?} */
    ViewRef_.prototype._view;
    /** @type {?} */
    ViewRef_.prototype.animationQueue;
}
//# sourceMappingURL=view_ref.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata_di__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_directives__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__metadata_view__ = __webpack_require__(58);
/* unused harmony reexport Attribute */
/* unused harmony reexport ContentChild */
/* unused harmony reexport ContentChildren */
/* unused harmony reexport Query */
/* unused harmony reexport ViewChild */
/* unused harmony reexport ViewChildren */
/* unused harmony reexport ANALYZE_FOR_ENTRY_COMPONENTS */
/* unused harmony reexport Component */
/* unused harmony reexport Directive */
/* unused harmony reexport HostBinding */
/* unused harmony reexport HostListener */
/* unused harmony reexport Input */
/* unused harmony reexport Output */
/* unused harmony reexport Pipe */
/* unused harmony reexport OnDestroy */
/* unused harmony reexport AfterContentInit */
/* unused harmony reexport AfterViewChecked */
/* unused harmony reexport AfterViewInit */
/* unused harmony reexport DoCheck */
/* unused harmony reexport OnChanges */
/* unused harmony reexport AfterContentChecked */
/* unused harmony reexport OnInit */
/* unused harmony reexport CUSTOM_ELEMENTS_SCHEMA */
/* unused harmony reexport NO_ERRORS_SCHEMA */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__["a"]; });
/* unused harmony reexport ViewEncapsulation */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





//# sourceMappingURL=metadata.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LifecycleHooks; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LIFECYCLE_HOOKS_VALUES; });
/* unused harmony export OnChanges */
/* unused harmony export OnInit */
/* unused harmony export DoCheck */
/* unused harmony export OnDestroy */
/* unused harmony export AfterContentInit */
/* unused harmony export AfterContentChecked */
/* unused harmony export AfterViewInit */
/* unused harmony export AfterViewChecked */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var LifecycleHooks = {};
LifecycleHooks.OnInit = 0;
LifecycleHooks.OnDestroy = 1;
LifecycleHooks.DoCheck = 2;
LifecycleHooks.OnChanges = 3;
LifecycleHooks.AfterContentInit = 4;
LifecycleHooks.AfterContentChecked = 5;
LifecycleHooks.AfterViewInit = 6;
LifecycleHooks.AfterViewChecked = 7;
LifecycleHooks[LifecycleHooks.OnInit] = "OnInit";
LifecycleHooks[LifecycleHooks.OnDestroy] = "OnDestroy";
LifecycleHooks[LifecycleHooks.DoCheck] = "DoCheck";
LifecycleHooks[LifecycleHooks.OnChanges] = "OnChanges";
LifecycleHooks[LifecycleHooks.AfterContentInit] = "AfterContentInit";
LifecycleHooks[LifecycleHooks.AfterContentChecked] = "AfterContentChecked";
LifecycleHooks[LifecycleHooks.AfterViewInit] = "AfterViewInit";
LifecycleHooks[LifecycleHooks.AfterViewChecked] = "AfterViewChecked";
var /** @type {?} */ LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
/**
 *  {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}
  * *
  * `ngOnChanges` is called right after the data-bound properties have been checked and before view
  * and content children are checked if at least one of them has changed.
  * The `changes` parameter contains the changed properties.
  * *
  * See {@linkDocs guide/lifecycle-hooks#onchanges "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var OnChanges = (function () {
    function OnChanges() {
    }
    /**
     * @abstract
     * @param {?} changes
     * @return {?}
     */
    OnChanges.prototype.ngOnChanges = function (changes) { };
    return OnChanges;
}());
/**
 *  initialized.
  * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}
  * *
  * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
  * first time, and before any of its children have been checked. It is invoked only once when the
  * directive is instantiated.
  * *
  * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var OnInit = (function () {
    function OnInit() {
    }
    /**
     * @abstract
     * @return {?}
     */
    OnInit.prototype.ngOnInit = function () { };
    return OnInit;
}());
/**
 *  {@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}
  * *
  * `ngDoCheck` gets called to check the changes in the directives in addition to the default
  * algorithm. The default change detection algorithm looks for differences by comparing
  * bound-property values by reference across change detection runs.
  * *
  * Note that a directive typically should not use both `DoCheck` and {@link OnChanges} to respond to
  * changes on the same input, as `ngOnChanges` will continue to be called when the default change
  * detector detects changes.
  * *
  * See {@link KeyValueDiffers} and {@link IterableDiffers} for implementing custom dirty checking
  * for collections.
  * *
  * See {@linkDocs guide/lifecycle-hooks#docheck "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var DoCheck = (function () {
    function DoCheck() {
    }
    /**
     * @abstract
     * @return {?}
     */
    DoCheck.prototype.ngDoCheck = function () { };
    return DoCheck;
}());
/**
 *  {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}
  * *
  * `ngOnDestroy` callback is typically used for any custom cleanup that needs to occur when the
  * instance is destroyed.
  * *
  * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var OnDestroy = (function () {
    function OnDestroy() {
    }
    /**
     * @abstract
     * @return {?}
     */
    OnDestroy.prototype.ngOnDestroy = function () { };
    return OnDestroy;
}());
/**
 *  *
  * initialized.
  * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}
  * *
  * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var AfterContentInit = (function () {
    function AfterContentInit() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AfterContentInit.prototype.ngAfterContentInit = function () { };
    return AfterContentInit;
}());
/**
 *  {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}
  * *
  * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var AfterContentChecked = (function () {
    function AfterContentChecked() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AfterContentChecked.prototype.ngAfterContentChecked = function () { };
    return AfterContentChecked;
}());
/**
 *  initialized.
  * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}
  * *
  * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var AfterViewInit = (function () {
    function AfterViewInit() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AfterViewInit.prototype.ngAfterViewInit = function () { };
    return AfterViewInit;
}());
/**
 *  {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}
  * *
  * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
  * *
 * @abstract
 */
var AfterViewChecked = (function () {
    function AfterViewChecked() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AfterViewChecked.prototype.ngAfterViewChecked = function () { };
    return AfterViewChecked;
}());
//# sourceMappingURL=lifecycle_hooks.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export ViewEncapsulation */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewMetadata; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ViewEncapsulation = {};
ViewEncapsulation.Emulated = 0;
ViewEncapsulation.Native = 1;
ViewEncapsulation.None = 2;
ViewEncapsulation[ViewEncapsulation.Emulated] = "Emulated";
ViewEncapsulation[ViewEncapsulation.Native] = "Native";
ViewEncapsulation[ViewEncapsulation.None] = "None";
/**
 *  Metadata properties available for configuring Views.
  * *
  * For details on the `@Component` annotation, see {@link Component}.
  * *
  * ### Example
  * *
  * ```
  * selector: 'greet',
  * template: 'Hello {{name}}!',
  * })
  * class Greet {
  * name: string;
  * *
  * constructor() {
  * this.name = 'World';
  * }
  * }
  * ```
  * *
 * @deprecated Use Component instead.
  * *
  * {@link Component}
 */
var ViewMetadata = (function () {
    /**
     * @param {?=} __0
     */
    function ViewMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls, animations = _b.animations, interpolation = _b.interpolation;
        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.encapsulation = encapsulation;
        this.animations = animations;
        this.interpolation = interpolation;
    }
    return ViewMetadata;
}());
function ViewMetadata_tsickle_Closure_declarations() {
    /**
     * {@link Component.templateUrl}
     * @type {?}
     */
    ViewMetadata.prototype.templateUrl;
    /**
     * {@link Component.template}
     * @type {?}
     */
    ViewMetadata.prototype.template;
    /**
     * {@link Component.stylesUrl}
     * @type {?}
     */
    ViewMetadata.prototype.styleUrls;
    /**
     * {@link Component.styles}
     * @type {?}
     */
    ViewMetadata.prototype.styles;
    /**
     * {@link Component.encapsulation}
     * @type {?}
     */
    ViewMetadata.prototype.encapsulation;
    /**
     * {@link Component.animation}
     * @type {?}
     */
    ViewMetadata.prototype.animations;
    /**
     * {@link Component.interpolation}
     * @type {?}
     */
    ViewMetadata.prototype.interpolation;
}
//# sourceMappingURL=view.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(33);
/* unused harmony export DELEGATE_CTOR */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectionCapabilities; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * Attention: This regex has to hold even if the code is minified!
 */
var /** @type {?} */ DELEGATE_CTOR = /^function\s+\S+\(\)\s*{\s*("use strict";)?\s*(return\s+)?\S+\.apply\(this,\s*arguments\)/;
var ReflectionCapabilities = (function () {
    /**
     * @param {?=} reflect
     */
    function ReflectionCapabilities(reflect) {
        this._reflect = reflect || __WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */].Reflect;
    }
    /**
     * @return {?}
     */
    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
    /**
     * @param {?} t
     * @return {?}
     */
    ReflectionCapabilities.prototype.factory = function (t) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return new (t.bind.apply(t, [void 0].concat(args)))();
    }; };
    /**
     * @param {?} paramTypes
     * @param {?} paramAnnotations
     * @return {?}
     */
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
        var /** @type {?} */ result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var /** @type {?} */ i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (paramAnnotations && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    /**
     * @param {?} type
     * @param {?} parentCtor
     * @return {?}
     */
    ReflectionCapabilities.prototype._ownParameters = function (type, parentCtor) {
        // If we have no decorators, we only have function.length as metadata.
        // In that case, to detect whether a child class declared an own constructor or not,
        // we need to look inside of that constructor to check whether it is
        // just calling the parent.
        // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
        // that sets 'design:paramtypes' to []
        // if a class inherits from another class but has no ctor declared itself.
        if (DELEGATE_CTOR.exec(type.toString())) {
            return null;
        }
        // Prefer the direct API.
        if (((type)).parameters && ((type)).parameters !== parentCtor.parameters) {
            return ((type)).parameters;
        }
        // API of tsickle for lowering decorators to properties on the class.
        var /** @type {?} */ tsickleCtorParams = ((type)).ctorParameters;
        if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
            // Newer tsickle uses a function closure
            // Retain the non-function case for compatibility with older tsickle
            var /** @type {?} */ ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
            var /** @type {?} */ paramTypes = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
            var /** @type {?} */ paramAnnotations = ctorParameters.map(function (ctorParam) {
                return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
            });
            return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
        // API for metadata created by invoking the decorators.
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._reflect) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._reflect.getOwnMetadata)) {
            var /** @type {?} */ paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
            var /** @type {?} */ paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
            if (paramTypes || paramAnnotations) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // If a class has no decorators, at least create metadata
        // based on function.length.
        // Note: We know that this is a real constructor as we checked
        // the content of the constructor above.
        return new Array(((type.length))).fill(undefined);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ReflectionCapabilities.prototype.parameters = function (type) {
        // Note: only report metadata if we have at least one class decorator
        // to stay in sync with the static reflector.
        var /** @type {?} */ parentCtor = Object.getPrototypeOf(type.prototype).constructor;
        var /** @type {?} */ parameters = this._ownParameters(type, parentCtor);
        if (!parameters && parentCtor !== Object) {
            parameters = this.parameters(parentCtor);
        }
        return parameters || [];
    };
    /**
     * @param {?} typeOrFunc
     * @param {?} parentCtor
     * @return {?}
     */
    ReflectionCapabilities.prototype._ownAnnotations = function (typeOrFunc, parentCtor) {
        // Prefer the direct API.
        if (((typeOrFunc)).annotations && ((typeOrFunc)).annotations !== parentCtor.annotations) {
            var /** @type {?} */ annotations = ((typeOrFunc)).annotations;
            if (typeof annotations === 'function' && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (((typeOrFunc)).decorators && ((typeOrFunc)).decorators !== parentCtor.decorators) {
            return convertTsickleDecoratorIntoMetadata(((typeOrFunc)).decorators);
        }
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getOwnMetadata) {
            return this._reflect.getOwnMetadata('annotations', typeOrFunc);
        }
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
        var /** @type {?} */ parentCtor = Object.getPrototypeOf(typeOrFunc.prototype).constructor;
        var /** @type {?} */ ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
        var /** @type {?} */ parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
        return parentAnnotations.concat(ownAnnotations);
    };
    /**
     * @param {?} typeOrFunc
     * @param {?} parentCtor
     * @return {?}
     */
    ReflectionCapabilities.prototype._ownPropMetadata = function (typeOrFunc, parentCtor) {
        // Prefer the direct API.
        if (((typeOrFunc)).propMetadata &&
            ((typeOrFunc)).propMetadata !== parentCtor.propMetadata) {
            var /** @type {?} */ propMetadata = ((typeOrFunc)).propMetadata;
            if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (((typeOrFunc)).propDecorators &&
            ((typeOrFunc)).propDecorators !== parentCtor.propDecorators) {
            var /** @type {?} */ propDecorators_1 = ((typeOrFunc)).propDecorators;
            var /** @type {?} */ propMetadata_1 = ({});
            Object.keys(propDecorators_1).forEach(function (prop) {
                propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
            });
            return propMetadata_1;
        }
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getOwnMetadata) {
            return this._reflect.getOwnMetadata('propMetadata', typeOrFunc);
        }
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
        var /** @type {?} */ parentCtor = Object.getPrototypeOf(typeOrFunc.prototype).constructor;
        var /** @type {?} */ propMetadata = {};
        if (parentCtor !== Object) {
            var /** @type {?} */ parentPropMetadata_1 = this.propMetadata(parentCtor);
            Object.keys(parentPropMetadata_1).forEach(function (propName) {
                propMetadata[propName] = parentPropMetadata_1[propName];
            });
        }
        var /** @type {?} */ ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
        if (ownPropMetadata) {
            Object.keys(ownPropMetadata).forEach(function (propName) {
                var /** @type {?} */ decorators = [];
                if (propMetadata.hasOwnProperty(propName)) {
                    decorators.push.apply(decorators, propMetadata[propName]);
                }
                decorators.push.apply(decorators, ownPropMetadata[propName]);
                propMetadata[propName] = decorators;
            });
        }
        return propMetadata;
    };
    /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    ReflectionCapabilities.prototype.hasLifecycleHook = function (type, lcProperty) {
        return type instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */] && lcProperty in type.prototype;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ReflectionCapabilities.prototype.getter = function (name) { return ((new Function('o', 'return o.' + name + ';'))); };
    /**
     * @param {?} name
     * @return {?}
     */
    ReflectionCapabilities.prototype.setter = function (name) {
        return ((new Function('o', 'v', 'return o.' + name + ' = v;')));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ReflectionCapabilities.prototype.method = function (name) {
        var /** @type {?} */ functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
        return ((new Function('o', 'args', functionBody)));
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ReflectionCapabilities.prototype.importUri = function (type) {
        // StaticSymbol
        if (typeof type === 'object' && type['filePath']) {
            return type['filePath'];
        }
        // Runtime type
        return "./" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(type);
    };
    /**
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} runtime
     * @return {?}
     */
    ReflectionCapabilities.prototype.resolveIdentifier = function (name, moduleUrl, runtime) { return runtime; };
    /**
     * @param {?} enumIdentifier
     * @param {?} name
     * @return {?}
     */
    ReflectionCapabilities.prototype.resolveEnum = function (enumIdentifier, name) { return enumIdentifier[name]; };
    return ReflectionCapabilities;
}());
function ReflectionCapabilities_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectionCapabilities.prototype._reflect;
}
/**
 * @param {?} decoratorInvocations
 * @return {?}
 */
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
        return [];
    }
    return decoratorInvocations.map(function (decoratorInvocation) {
        var /** @type {?} */ decoratorType = decoratorInvocation.type;
        var /** @type {?} */ annotationCls = decoratorType.annotationCls;
        var /** @type {?} */ annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
        return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
}
//# sourceMappingURL=reflection_capabilities.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflector_reader__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Reflector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 *  Provides access to reflection data about symbols. Used internally by Angular
  * to power dependency injection and compilation.
 */
var Reflector = (function (_super) {
    __extends(Reflector, _super);
    /**
     * @param {?} reflectionCapabilities
     */
    function Reflector(reflectionCapabilities) {
        _super.call(this);
        this.reflectionCapabilities = reflectionCapabilities;
    }
    /**
     * @param {?} caps
     * @return {?}
     */
    Reflector.prototype.updateCapabilities = function (caps) { this.reflectionCapabilities = caps; };
    /**
     * @param {?} type
     * @return {?}
     */
    Reflector.prototype.factory = function (type) { return this.reflectionCapabilities.factory(type); };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    Reflector.prototype.parameters = function (typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    Reflector.prototype.annotations = function (typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    Reflector.prototype.propMetadata = function (typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    Reflector.prototype.hasLifecycleHook = function (type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    Reflector.prototype.getter = function (name) { return this.reflectionCapabilities.getter(name); };
    /**
     * @param {?} name
     * @return {?}
     */
    Reflector.prototype.setter = function (name) { return this.reflectionCapabilities.setter(name); };
    /**
     * @param {?} name
     * @return {?}
     */
    Reflector.prototype.method = function (name) { return this.reflectionCapabilities.method(name); };
    /**
     * @param {?} type
     * @return {?}
     */
    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
    /**
     * @param {?} name
     * @param {?} moduleUrl
     * @param {?} runtime
     * @return {?}
     */
    Reflector.prototype.resolveIdentifier = function (name, moduleUrl, runtime) {
        return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
    };
    /**
     * @param {?} identifier
     * @param {?} name
     * @return {?}
     */
    Reflector.prototype.resolveEnum = function (identifier, name) {
        return this.reflectionCapabilities.resolveEnum(identifier, name);
    };
    return Reflector;
}(__WEBPACK_IMPORTED_MODULE_0__reflector_reader__["a" /* ReflectorReader */]));
function Reflector_tsickle_Closure_declarations() {
    /** @type {?} */
    Reflector.prototype.reflectionCapabilities;
}
//# sourceMappingURL=reflector.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export SecurityContext */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Sanitizer; });
var SecurityContext = {};
SecurityContext.NONE = 0;
SecurityContext.HTML = 1;
SecurityContext.STYLE = 2;
SecurityContext.SCRIPT = 3;
SecurityContext.URL = 4;
SecurityContext.RESOURCE_URL = 5;
SecurityContext[SecurityContext.NONE] = "NONE";
SecurityContext[SecurityContext.HTML] = "HTML";
SecurityContext[SecurityContext.STYLE] = "STYLE";
SecurityContext[SecurityContext.SCRIPT] = "SCRIPT";
SecurityContext[SecurityContext.URL] = "URL";
SecurityContext[SecurityContext.RESOURCE_URL] = "RESOURCE_URL";
/**
 *  Sanitizer is used by the views to sanitize potentially dangerous values.
  * *
 * @abstract
 */
var Sanitizer = (function () {
    function Sanitizer() {
    }
    /**
     * @abstract
     * @param {?} context
     * @param {?} value
     * @return {?}
     */
    Sanitizer.prototype.sanitize = function (context, value) { };
    return Sanitizer;
}());
//# sourceMappingURL=security.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export Version */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VERSION; });
/**
 *  *
 */
var Version = (function () {
    /**
     * @param {?} full
     */
    function Version(full) {
        this.full = full;
    }
    Object.defineProperty(Version.prototype, "major", {
        /**
         * @return {?}
         */
        get: function () { return this.full.split('.')[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        /**
         * @return {?}
         */
        get: function () { return this.full.split('.')[1]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "patch", {
        /**
         * @return {?}
         */
        get: function () { return this.full.split('.').slice(2).join('.'); },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
function Version_tsickle_Closure_declarations() {
    /** @type {?} */
    Version.prototype.full;
}
/**
 * @stable
 */
var /** @type {?} */ VERSION = new Version('2.3.1');
//# sourceMappingURL=version.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 64 */
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 64;


/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_provide_once__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_provide_once__["a"]; });



/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(75);
/* unused harmony reexport Class */
/* unused harmony reexport assertPlatform */
/* unused harmony reexport destroyPlatform */
/* unused harmony reexport getPlatform */
/* unused harmony reexport PlatformRef */
/* unused harmony reexport ApplicationRef */
/* unused harmony reexport enableProdMode */
/* unused harmony reexport isDevMode */
/* unused harmony reexport createPlatformFactory */
/* unused harmony reexport NgProbeToken */
/* unused harmony reexport APP_ID */
/* unused harmony reexport PACKAGE_ROOT_URL */
/* unused harmony reexport PLATFORM_INITIALIZER */
/* unused harmony reexport APP_BOOTSTRAP_LISTENER */
/* unused harmony reexport APP_INITIALIZER */
/* unused harmony reexport ApplicationInitStatus */
/* unused harmony reexport DebugElement */
/* unused harmony reexport DebugNode */
/* unused harmony reexport asNativeElements */
/* unused harmony reexport getDebugNode */
/* unused harmony reexport Testability */
/* unused harmony reexport TestabilityRegistry */
/* unused harmony reexport setTestabilityGetter */
/* unused harmony reexport TRANSLATIONS */
/* unused harmony reexport TRANSLATIONS_FORMAT */
/* unused harmony reexport LOCALE_ID */
/* unused harmony reexport ApplicationModule */
/* unused harmony reexport wtfCreateScope */
/* unused harmony reexport wtfLeave */
/* unused harmony reexport wtfStartTimeRange */
/* unused harmony reexport wtfEndTimeRange */
/* unused harmony reexport Type */
/* unused harmony reexport EventEmitter */
/* unused harmony reexport ErrorHandler */
/* unused harmony reexport AnimationTransitionEvent */
/* unused harmony reexport AnimationPlayer */
/* unused harmony reexport Sanitizer */
/* unused harmony reexport SecurityContext */
/* unused harmony reexport ANALYZE_FOR_ENTRY_COMPONENTS */
/* unused harmony reexport Attribute */
/* unused harmony reexport ContentChild */
/* unused harmony reexport ContentChildren */
/* unused harmony reexport Query */
/* unused harmony reexport ViewChild */
/* unused harmony reexport ViewChildren */
/* unused harmony reexport Component */
/* unused harmony reexport Directive */
/* unused harmony reexport HostBinding */
/* unused harmony reexport HostListener */
/* unused harmony reexport Input */
/* unused harmony reexport Output */
/* unused harmony reexport Pipe */
/* unused harmony reexport AfterContentChecked */
/* unused harmony reexport AfterContentInit */
/* unused harmony reexport AfterViewChecked */
/* unused harmony reexport AfterViewInit */
/* unused harmony reexport DoCheck */
/* unused harmony reexport OnChanges */
/* unused harmony reexport OnDestroy */
/* unused harmony reexport OnInit */
/* unused harmony reexport CUSTOM_ELEMENTS_SCHEMA */
/* unused harmony reexport NO_ERRORS_SCHEMA */
/* unused harmony reexport NgModule */
/* unused harmony reexport ViewEncapsulation */
/* unused harmony reexport Version */
/* unused harmony reexport VERSION */
/* unused harmony reexport createPlatform */
/* unused harmony reexport forwardRef */
/* unused harmony reexport resolveForwardRef */
/* unused harmony reexport Injector */
/* unused harmony reexport ReflectiveInjector */
/* unused harmony reexport ResolvedReflectiveFactory */
/* unused harmony reexport ReflectiveKey */
/* unused harmony reexport OpaqueToken */
/* unused harmony reexport Inject */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["a"]; });
/* unused harmony reexport Injectable */
/* unused harmony reexport Self */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["b"]; });
/* unused harmony reexport Host */
/* unused harmony reexport NgZone */
/* unused harmony reexport RenderComponentType */
/* unused harmony reexport Renderer */
/* unused harmony reexport RootRenderer */
/* unused harmony reexport COMPILER_OPTIONS */
/* unused harmony reexport Compiler */
/* unused harmony reexport CompilerFactory */
/* unused harmony reexport ModuleWithComponentFactories */
/* unused harmony reexport ComponentFactory */
/* unused harmony reexport ComponentRef */
/* unused harmony reexport ComponentFactoryResolver */
/* unused harmony reexport ElementRef */
/* unused harmony reexport NgModuleFactory */
/* unused harmony reexport NgModuleRef */
/* unused harmony reexport NgModuleFactoryLoader */
/* unused harmony reexport getModuleFactory */
/* unused harmony reexport QueryList */
/* unused harmony reexport SystemJsNgModuleLoader */
/* unused harmony reexport SystemJsNgModuleLoaderConfig */
/* unused harmony reexport TemplateRef */
/* unused harmony reexport ViewContainerRef */
/* unused harmony reexport EmbeddedViewRef */
/* unused harmony reexport ViewRef */
/* unused harmony reexport ChangeDetectionStrategy */
/* unused harmony reexport ChangeDetectorRef */
/* unused harmony reexport CollectionChangeRecord */
/* unused harmony reexport DefaultIterableDiffer */
/* unused harmony reexport IterableDiffers */
/* unused harmony reexport KeyValueChangeRecord */
/* unused harmony reexport KeyValueDiffers */
/* unused harmony reexport SimpleChange */
/* unused harmony reexport WrappedValue */
/* unused harmony reexport platformCore */
/* unused harmony reexport __core_private__ */
/* unused harmony reexport AUTO_STYLE */
/* unused harmony reexport AnimationEntryMetadata */
/* unused harmony reexport AnimationStateMetadata */
/* unused harmony reexport AnimationStateDeclarationMetadata */
/* unused harmony reexport AnimationStateTransitionMetadata */
/* unused harmony reexport AnimationMetadata */
/* unused harmony reexport AnimationKeyframesSequenceMetadata */
/* unused harmony reexport AnimationStyleMetadata */
/* unused harmony reexport AnimationAnimateMetadata */
/* unused harmony reexport AnimationWithStepsMetadata */
/* unused harmony reexport AnimationSequenceMetadata */
/* unused harmony reexport AnimationGroupMetadata */
/* unused harmony reexport animate */
/* unused harmony reexport group */
/* unused harmony reexport sequence */
/* unused harmony reexport style */
/* unused harmony reexport state */
/* unused harmony reexport keyframes */
/* unused harmony reexport transition */
/* unused harmony reexport trigger */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the core package.
 */

//# sourceMappingURL=index.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationKeyframe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationKeyframe = (function () {
    /**
     * @param {?} offset
     * @param {?} styles
     */
    function AnimationKeyframe(offset, styles) {
        this.offset = offset;
        this.styles = styles;
    }
    return AnimationKeyframe;
}());
function AnimationKeyframe_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationKeyframe.prototype.offset;
    /** @type {?} */
    AnimationKeyframe.prototype.styles;
}
//# sourceMappingURL=animation_keyframe.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(40);
/* harmony export (immutable) */ exports["a"] = prepareFinalAnimationStyles;
/* harmony export (immutable) */ exports["b"] = balanceAnimationKeyframes;
/* harmony export (immutable) */ exports["d"] = clearStyles;
/* harmony export (immutable) */ exports["f"] = collectAndResolveStyles;
/* harmony export (immutable) */ exports["e"] = renderStyles;
/* harmony export (immutable) */ exports["c"] = flattenStyles;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @param {?} previousStyles
 * @param {?} newStyles
 * @param {?=} nullValue
 * @return {?}
 */
function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
    if (nullValue === void 0) { nullValue = null; }
    var /** @type {?} */ finalStyles = {};
    Object.keys(newStyles).forEach(function (prop) {
        var /** @type {?} */ value = newStyles[prop];
        finalStyles[prop] = value == __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */] ? nullValue : value.toString();
    });
    Object.keys(previousStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(finalStyles[prop])) {
            finalStyles[prop] = nullValue;
        }
    });
    return finalStyles;
}
/**
 * @param {?} collectedStyles
 * @param {?} finalStateStyles
 * @param {?} keyframes
 * @return {?}
 */
function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
    var /** @type {?} */ limit = keyframes.length - 1;
    var /** @type {?} */ firstKeyframe = keyframes[0];
    // phase 1: copy all the styles from the first keyframe into the lookup map
    var /** @type {?} */ flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
    var /** @type {?} */ extraFirstKeyframeStyles = {};
    var /** @type {?} */ hasExtraFirstStyles = false;
    Object.keys(collectedStyles).forEach(function (prop) {
        var /** @type {?} */ value = (collectedStyles[prop]);
        // if the style is already defined in the first keyframe then
        // we do not replace it.
        if (!flatenedFirstKeyframeStyles[prop]) {
            flatenedFirstKeyframeStyles[prop] = value;
            extraFirstKeyframeStyles[prop] = value;
            hasExtraFirstStyles = true;
        }
    });
    var /** @type {?} */ keyframeCollectedStyles = __WEBPACK_IMPORTED_MODULE_0__facade_collection__["e" /* StringMapWrapper */].merge({}, flatenedFirstKeyframeStyles);
    // phase 2: normalize the final keyframe
    var /** @type {?} */ finalKeyframe = keyframes[limit];
    finalKeyframe.styles.styles.unshift(finalStateStyles);
    var /** @type {?} */ flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
    var /** @type {?} */ extraFinalKeyframeStyles = {};
    var /** @type {?} */ hasExtraFinalStyles = false;
    Object.keys(keyframeCollectedStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(flatenedFinalKeyframeStyles[prop])) {
            extraFinalKeyframeStyles[prop] = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
            hasExtraFinalStyles = true;
        }
    });
    if (hasExtraFinalStyles) {
        finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
    }
    Object.keys(flatenedFinalKeyframeStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(flatenedFirstKeyframeStyles[prop])) {
            extraFirstKeyframeStyles[prop] = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
            hasExtraFirstStyles = true;
        }
    });
    if (hasExtraFirstStyles) {
        firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
    }
    collectAndResolveStyles(collectedStyles, [finalStateStyles]);
    return keyframes;
}
/**
 * @param {?} styles
 * @return {?}
 */
function clearStyles(styles) {
    var /** @type {?} */ finalStyles = {};
    Object.keys(styles).forEach(function (key) { finalStyles[key] = null; });
    return finalStyles;
}
/**
 * @param {?} collection
 * @param {?} styles
 * @return {?}
 */
function collectAndResolveStyles(collection, styles) {
    return styles.map(function (entry) {
        var /** @type {?} */ stylesObj = {};
        Object.keys(entry).forEach(function (prop) {
            var /** @type {?} */ value = entry[prop];
            if (value == __WEBPACK_IMPORTED_MODULE_2__animation_constants__["a" /* FILL_STYLE_FLAG */]) {
                value = collection[prop];
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(value)) {
                    value = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
                }
            }
            collection[prop] = value;
            stylesObj[prop] = value;
        });
        return stylesObj;
    });
}
/**
 * @param {?} element
 * @param {?} renderer
 * @param {?} styles
 * @return {?}
 */
function renderStyles(element, renderer, styles) {
    Object.keys(styles).forEach(function (prop) { renderer.setElementStyle(element, prop, styles[prop]); });
}
/**
 * @param {?} styles
 * @return {?}
 */
function flattenStyles(styles) {
    var /** @type {?} */ finalStyles = {};
    styles.forEach(function (entry) {
        Object.keys(entry).forEach(function (prop) { finalStyles[prop] = (entry[prop]); });
    });
    return finalStyles;
}
//# sourceMappingURL=animation_style_util.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationStyles; });
/**
 * @license undefined
  * Copyright Google Inc. All Rights Reserved.
  * *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://angular.io/license
 */
var AnimationStyles = (function () {
    /**
     * @param {?} styles
     */
    function AnimationStyles(styles) {
        this.styles = styles;
    }
    return AnimationStyles;
}());
function AnimationStyles_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationStyles.prototype.styles;
}
//# sourceMappingURL=animation_styles.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_transition_event__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationTransition; });

var AnimationTransition = (function () {
    /**
     * @param {?} _player
     * @param {?} _fromState
     * @param {?} _toState
     * @param {?} _totalTime
     */
    function AnimationTransition(_player, _fromState, _toState, _totalTime) {
        this._player = _player;
        this._fromState = _fromState;
        this._toState = _toState;
        this._totalTime = _totalTime;
    }
    /**
     * @param {?} phaseName
     * @return {?}
     */
    AnimationTransition.prototype._createEvent = function (phaseName) {
        return new __WEBPACK_IMPORTED_MODULE_0__animation_transition_event__["a" /* AnimationTransitionEvent */]({
            fromState: this._fromState,
            toState: this._toState,
            totalTime: this._totalTime,
            phaseName: phaseName
        });
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    AnimationTransition.prototype.onStart = function (callback) {
        var _this = this;
        var /** @type {?} */ fn = (Zone.current.wrap(function () { return callback(_this._createEvent('start')); }, 'player.onStart'));
        this._player.onStart(fn);
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    AnimationTransition.prototype.onDone = function (callback) {
        var _this = this;
        var /** @type {?} */ fn = (Zone.current.wrap(function () { return callback(_this._createEvent('done')); }, 'player.onDone'));
        this._player.onDone(fn);
    };
    return AnimationTransition;
}());
function AnimationTransition_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationTransition.prototype._player;
    /** @type {?} */
    AnimationTransition.prototype._fromState;
    /** @type {?} */
    AnimationTransition.prototype._toState;
    /** @type {?} */
    AnimationTransition.prototype._totalTime;
}
//# sourceMappingURL=animation_transition.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewAnimationMap; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ViewAnimationMap = (function () {
    function ViewAnimationMap() {
        this._map = new Map();
        this._allPlayers = [];
    }
    /**
     * @param {?} element
     * @param {?} animationName
     * @return {?}
     */
    ViewAnimationMap.prototype.find = function (element, animationName) {
        var /** @type {?} */ playersByAnimation = this._map.get(element);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(playersByAnimation)) {
            return playersByAnimation[animationName];
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ViewAnimationMap.prototype.findAllPlayersByElement = function (element) {
        var /** @type {?} */ el = this._map.get(element);
        return el ? Object.keys(el).map(function (k) { return el[k]; }) : [];
    };
    /**
     * @param {?} element
     * @param {?} animationName
     * @param {?} player
     * @return {?}
     */
    ViewAnimationMap.prototype.set = function (element, animationName, player) {
        var /** @type {?} */ playersByAnimation = this._map.get(element);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(playersByAnimation)) {
            playersByAnimation = {};
        }
        var /** @type {?} */ existingEntry = playersByAnimation[animationName];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(existingEntry)) {
            this.remove(element, animationName);
        }
        playersByAnimation[animationName] = player;
        this._allPlayers.push(player);
        this._map.set(element, playersByAnimation);
    };
    /**
     * @return {?}
     */
    ViewAnimationMap.prototype.getAllPlayers = function () { return this._allPlayers; };
    /**
     * @param {?} element
     * @param {?} animationName
     * @param {?=} targetPlayer
     * @return {?}
     */
    ViewAnimationMap.prototype.remove = function (element, animationName, targetPlayer) {
        if (targetPlayer === void 0) { targetPlayer = null; }
        var /** @type {?} */ playersByAnimation = this._map.get(element);
        if (playersByAnimation) {
            var /** @type {?} */ player = playersByAnimation[animationName];
            if (!targetPlayer || player === targetPlayer) {
                delete playersByAnimation[animationName];
                var /** @type {?} */ index = this._allPlayers.indexOf(player);
                this._allPlayers.splice(index, 1);
                if (Object.keys(playersByAnimation).length === 0) {
                    this._map.delete(element);
                }
            }
        }
    };
    return ViewAnimationMap;
}());
function ViewAnimationMap_tsickle_Closure_declarations() {
    /** @type {?} */
    ViewAnimationMap.prototype._map;
    /** @type {?} */
    ViewAnimationMap.prototype._allPlayers;
}
//# sourceMappingURL=view_animation_map.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_init__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_ref__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_tokens__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_detection_change_detection__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__i18n_tokens__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linker_compiler__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linker_view_utils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__metadata__ = __webpack_require__(56);
/* unused harmony export _iterableDiffersFactory */
/* unused harmony export _keyValueDiffersFactory */
/* unused harmony export ApplicationModule */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @return {?}
 */
function _iterableDiffersFactory() {
    return __WEBPACK_IMPORTED_MODULE_4__change_detection_change_detection__["b" /* defaultIterableDiffers */];
}
/**
 * @return {?}
 */
function _keyValueDiffersFactory() {
    return __WEBPACK_IMPORTED_MODULE_4__change_detection_change_detection__["c" /* defaultKeyValueDiffers */];
}
/**
 *  This module includes the providers of @angular/core that are needed
  * to bootstrap components via `ApplicationRef`.
  * *
 */
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_8__metadata__["a" /* NgModule */], args: [{
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_2__application_ref__["d" /* ApplicationRef_ */],
                        { provide: __WEBPACK_IMPORTED_MODULE_2__application_ref__["e" /* ApplicationRef */], useExisting: __WEBPACK_IMPORTED_MODULE_2__application_ref__["d" /* ApplicationRef_ */] },
                        __WEBPACK_IMPORTED_MODULE_1__application_init__["a" /* ApplicationInitStatus */],
                        __WEBPACK_IMPORTED_MODULE_6__linker_compiler__["b" /* Compiler */],
                        __WEBPACK_IMPORTED_MODULE_3__application_tokens__["c" /* APP_ID_RANDOM_PROVIDER */],
                        __WEBPACK_IMPORTED_MODULE_7__linker_view_utils__["ViewUtils"],
                        __WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__["a" /* AnimationQueue */],
                        { provide: __WEBPACK_IMPORTED_MODULE_4__change_detection_change_detection__["d" /* IterableDiffers */], useFactory: _iterableDiffersFactory },
                        { provide: __WEBPACK_IMPORTED_MODULE_4__change_detection_change_detection__["e" /* KeyValueDiffers */], useFactory: _keyValueDiffersFactory },
                        { provide: __WEBPACK_IMPORTED_MODULE_5__i18n_tokens__["a" /* LOCALE_ID */], useValue: 'en-US' },
                    ]
                },] },
    ];
    /** @nocollapse */
    ApplicationModule.ctorParameters = function () { return []; };
    return ApplicationModule;
}());
function ApplicationModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ApplicationModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ApplicationModule.ctorParameters;
}
//# sourceMappingURL=application_module.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__ = __webpack_require__(9);
/* unused harmony reexport ChangeDetectionStrategy */
/* unused harmony reexport ChangeDetectorRef */
/* unused harmony reexport CollectionChangeRecord */
/* unused harmony reexport DefaultIterableDiffer */
/* unused harmony reexport IterableDiffers */
/* unused harmony reexport KeyValueChangeRecord */
/* unused harmony reexport KeyValueDiffers */
/* unused harmony reexport SimpleChange */
/* unused harmony reexport WrappedValue */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */

//# sourceMappingURL=change_detection.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application_ref__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__application_tokens__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__application_init__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__zone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__render__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__linker__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__debug_debug_node__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__testability_testability__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_detection__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__platform_core_providers__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__i18n_tokens__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__application_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__type__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__facade_async__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_handler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_private_export__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__animation_metadata__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__animation_animation_transition_event__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__animation_animation_player__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__security__ = __webpack_require__(61);
/* unused harmony reexport ANALYZE_FOR_ENTRY_COMPONENTS */
/* unused harmony reexport ContentChild */
/* unused harmony reexport ContentChildren */
/* unused harmony reexport Query */
/* unused harmony reexport ViewChild */
/* unused harmony reexport ViewChildren */
/* unused harmony reexport Component */
/* unused harmony reexport Directive */
/* unused harmony reexport HostBinding */
/* unused harmony reexport HostListener */
/* unused harmony reexport Input */
/* unused harmony reexport Output */
/* unused harmony reexport Pipe */
/* unused harmony reexport AfterContentChecked */
/* unused harmony reexport AfterContentInit */
/* unused harmony reexport AfterViewChecked */
/* unused harmony reexport AfterViewInit */
/* unused harmony reexport DoCheck */
/* unused harmony reexport OnChanges */
/* unused harmony reexport OnDestroy */
/* unused harmony reexport OnInit */
/* unused harmony reexport CUSTOM_ELEMENTS_SCHEMA */
/* unused harmony reexport NO_ERRORS_SCHEMA */
/* unused harmony reexport NgModule */
/* unused harmony reexport ViewEncapsulation */
/* unused harmony reexport Attribute */
/* unused harmony reexport Version */
/* unused harmony reexport VERSION */
/* unused harmony reexport Class */
/* unused harmony reexport forwardRef */
/* unused harmony reexport resolveForwardRef */
/* unused harmony reexport Injector */
/* unused harmony reexport ReflectiveInjector */
/* unused harmony reexport ResolvedReflectiveFactory */
/* unused harmony reexport ReflectiveKey */
/* unused harmony reexport OpaqueToken */
/* unused harmony reexport Inject */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__di__["d"]; });
/* unused harmony reexport Injectable */
/* unused harmony reexport Self */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__di__["e"]; });
/* unused harmony reexport Host */
/* unused harmony reexport createPlatform */
/* unused harmony reexport getPlatform */
/* unused harmony reexport destroyPlatform */
/* unused harmony reexport PlatformRef */
/* unused harmony reexport ApplicationRef */
/* unused harmony reexport enableProdMode */
/* unused harmony reexport isDevMode */
/* unused harmony reexport createPlatformFactory */
/* unused harmony reexport NgProbeToken */
/* unused harmony reexport assertPlatform */
/* unused harmony reexport APP_ID */
/* unused harmony reexport PACKAGE_ROOT_URL */
/* unused harmony reexport PLATFORM_INITIALIZER */
/* unused harmony reexport APP_BOOTSTRAP_LISTENER */
/* unused harmony reexport APP_INITIALIZER */
/* unused harmony reexport ApplicationInitStatus */
/* unused harmony reexport NgZone */
/* unused harmony reexport RenderComponentType */
/* unused harmony reexport Renderer */
/* unused harmony reexport RootRenderer */
/* unused harmony reexport COMPILER_OPTIONS */
/* unused harmony reexport Compiler */
/* unused harmony reexport CompilerFactory */
/* unused harmony reexport ModuleWithComponentFactories */
/* unused harmony reexport ComponentFactory */
/* unused harmony reexport ComponentRef */
/* unused harmony reexport ComponentFactoryResolver */
/* unused harmony reexport ElementRef */
/* unused harmony reexport NgModuleFactory */
/* unused harmony reexport NgModuleRef */
/* unused harmony reexport NgModuleFactoryLoader */
/* unused harmony reexport getModuleFactory */
/* unused harmony reexport QueryList */
/* unused harmony reexport SystemJsNgModuleLoader */
/* unused harmony reexport SystemJsNgModuleLoaderConfig */
/* unused harmony reexport TemplateRef */
/* unused harmony reexport ViewContainerRef */
/* unused harmony reexport EmbeddedViewRef */
/* unused harmony reexport ViewRef */
/* unused harmony reexport DebugElement */
/* unused harmony reexport asNativeElements */
/* unused harmony reexport getDebugNode */
/* unused harmony reexport DebugNode */
/* unused harmony reexport Testability */
/* unused harmony reexport setTestabilityGetter */
/* unused harmony reexport TestabilityRegistry */
/* unused harmony reexport ChangeDetectionStrategy */
/* unused harmony reexport ChangeDetectorRef */
/* unused harmony reexport CollectionChangeRecord */
/* unused harmony reexport DefaultIterableDiffer */
/* unused harmony reexport IterableDiffers */
/* unused harmony reexport KeyValueChangeRecord */
/* unused harmony reexport KeyValueDiffers */
/* unused harmony reexport SimpleChange */
/* unused harmony reexport WrappedValue */
/* unused harmony reexport platformCore */
/* unused harmony reexport TRANSLATIONS */
/* unused harmony reexport LOCALE_ID */
/* unused harmony reexport TRANSLATIONS_FORMAT */
/* unused harmony reexport ApplicationModule */
/* unused harmony reexport wtfLeave */
/* unused harmony reexport wtfStartTimeRange */
/* unused harmony reexport wtfEndTimeRange */
/* unused harmony reexport wtfCreateScope */
/* unused harmony reexport Type */
/* unused harmony reexport EventEmitter */
/* unused harmony reexport ErrorHandler */
/* unused harmony reexport __core_private__ */
/* unused harmony reexport AUTO_STYLE */
/* unused harmony reexport AnimationEntryMetadata */
/* unused harmony reexport AnimationStateMetadata */
/* unused harmony reexport AnimationStateDeclarationMetadata */
/* unused harmony reexport AnimationStateTransitionMetadata */
/* unused harmony reexport AnimationMetadata */
/* unused harmony reexport AnimationKeyframesSequenceMetadata */
/* unused harmony reexport AnimationStyleMetadata */
/* unused harmony reexport AnimationAnimateMetadata */
/* unused harmony reexport AnimationWithStepsMetadata */
/* unused harmony reexport AnimationSequenceMetadata */
/* unused harmony reexport AnimationGroupMetadata */
/* unused harmony reexport animate */
/* unused harmony reexport group */
/* unused harmony reexport sequence */
/* unused harmony reexport style */
/* unused harmony reexport state */
/* unused harmony reexport keyframes */
/* unused harmony reexport transition */
/* unused harmony reexport trigger */
/* unused harmony reexport AnimationTransitionEvent */
/* unused harmony reexport AnimationPlayer */
/* unused harmony reexport Sanitizer */
/* unused harmony reexport SecurityContext */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public core APIs.
 */

























//# sourceMappingURL=core.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_animation_group_player__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animation_keyframe__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_animation_sequence_player__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_animation_styles__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_animation_transition__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__application_tokens__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__console__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__debug_debug_renderer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__di_reflective_provider__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__linker_compiler__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__linker_component_factory_resolver__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__linker_ng_module_factory__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__linker_ng_module_factory_loader__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__linker_template_ref__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__linker_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__linker_view_container__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__linker_view_type__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__linker_view_utils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__metadata_view__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reflection_reflection_capabilities__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__reflection_reflector_reader__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__render_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__util_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__util_lang__ = __webpack_require__(34);
/* unused harmony export __core_private__ */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

































var /** @type {?} */ __core_private__ = {
    isDefaultChangeDetectionStrategy: __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__["c" /* isDefaultChangeDetectionStrategy */],
    ChangeDetectorStatus: __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__["b" /* ChangeDetectorStatus */],
    constructDependencies: __WEBPACK_IMPORTED_MODULE_13__di_reflective_provider__["b" /* constructDependencies */],
    LifecycleHooks: __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__["a" /* LifecycleHooks */],
    LIFECYCLE_HOOKS_VALUES: __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__["b" /* LIFECYCLE_HOOKS_VALUES */],
    ReflectorReader: __WEBPACK_IMPORTED_MODULE_29__reflection_reflector_reader__["a" /* ReflectorReader */],
    CodegenComponentFactoryResolver: __WEBPACK_IMPORTED_MODULE_16__linker_component_factory_resolver__["b" /* CodegenComponentFactoryResolver */],
    ComponentRef_: __WEBPACK_IMPORTED_MODULE_15__linker_component_factory__["b" /* ComponentRef_ */],
    ViewContainer: __WEBPACK_IMPORTED_MODULE_22__linker_view_container__["a" /* ViewContainer */],
    AppView: __WEBPACK_IMPORTED_MODULE_21__linker_view__["a" /* AppView */],
    DebugAppView: __WEBPACK_IMPORTED_MODULE_21__linker_view__["b" /* DebugAppView */],
    NgModuleInjector: __WEBPACK_IMPORTED_MODULE_18__linker_ng_module_factory__["a" /* NgModuleInjector */],
    registerModuleFactory: __WEBPACK_IMPORTED_MODULE_19__linker_ng_module_factory_loader__["a" /* registerModuleFactory */],
    ViewType: __WEBPACK_IMPORTED_MODULE_23__linker_view_type__["a" /* ViewType */],
    view_utils: __WEBPACK_IMPORTED_MODULE_24__linker_view_utils__,
    ViewMetadata: __WEBPACK_IMPORTED_MODULE_26__metadata_view__["a" /* ViewMetadata */],
    DebugContext: __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__["a" /* DebugContext */],
    StaticNodeDebugInfo: __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__["b" /* StaticNodeDebugInfo */],
    devModeEqual: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["b" /* devModeEqual */],
    UNINITIALIZED: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["a" /* UNINITIALIZED */],
    ValueUnwrapper: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["c" /* ValueUnwrapper */],
    RenderDebugInfo: __WEBPACK_IMPORTED_MODULE_30__render_api__["c" /* RenderDebugInfo */],
    TemplateRef_: __WEBPACK_IMPORTED_MODULE_20__linker_template_ref__["a" /* TemplateRef_ */],
    ReflectionCapabilities: __WEBPACK_IMPORTED_MODULE_28__reflection_reflection_capabilities__["a" /* ReflectionCapabilities */],
    makeDecorator: __WEBPACK_IMPORTED_MODULE_31__util_decorators__["b" /* makeDecorator */],
    DebugDomRootRenderer: __WEBPACK_IMPORTED_MODULE_12__debug_debug_renderer__["a" /* DebugDomRootRenderer */],
    Console: __WEBPACK_IMPORTED_MODULE_11__console__["a" /* Console */],
    reflector: __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__["a" /* reflector */],
    Reflector: __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__["b" /* Reflector */],
    NoOpAnimationPlayer: __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__["a" /* NoOpAnimationPlayer */],
    AnimationPlayer: __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__["b" /* AnimationPlayer */],
    AnimationSequencePlayer: __WEBPACK_IMPORTED_MODULE_4__animation_animation_sequence_player__["a" /* AnimationSequencePlayer */],
    AnimationGroupPlayer: __WEBPACK_IMPORTED_MODULE_1__animation_animation_group_player__["a" /* AnimationGroupPlayer */],
    AnimationKeyframe: __WEBPACK_IMPORTED_MODULE_2__animation_animation_keyframe__["a" /* AnimationKeyframe */],
    prepareFinalAnimationStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["a" /* prepareFinalAnimationStyles */],
    balanceAnimationKeyframes: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["b" /* balanceAnimationKeyframes */],
    flattenStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["c" /* flattenStyles */],
    clearStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["d" /* clearStyles */],
    renderStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["e" /* renderStyles */],
    collectAndResolveStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["f" /* collectAndResolveStyles */],
    APP_ID_RANDOM_PROVIDER: __WEBPACK_IMPORTED_MODULE_8__application_tokens__["c" /* APP_ID_RANDOM_PROVIDER */],
    AnimationStyles: __WEBPACK_IMPORTED_MODULE_6__animation_animation_styles__["a" /* AnimationStyles */],
    ANY_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["b" /* ANY_STATE */],
    DEFAULT_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["c" /* DEFAULT_STATE */],
    EMPTY_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["d" /* EMPTY_STATE */],
    FILL_STYLE_FLAG: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["a" /* FILL_STYLE_FLAG */],
    ComponentStillLoadingError: __WEBPACK_IMPORTED_MODULE_14__linker_compiler__["c" /* ComponentStillLoadingError */],
    isPromise: __WEBPACK_IMPORTED_MODULE_32__util_lang__["a" /* isPromise */],
    AnimationTransition: __WEBPACK_IMPORTED_MODULE_7__animation_animation_transition__["a" /* AnimationTransition */]
};
//# sourceMappingURL=core_private_export.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug_node__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugDomRootRenderer; });
/* unused harmony export DebugDomRenderer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DebugDomRootRenderer = (function () {
    /**
     * @param {?} _delegate
     */
    function DebugDomRootRenderer(_delegate) {
        this._delegate = _delegate;
    }
    /**
     * @param {?} componentProto
     * @return {?}
     */
    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
        return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
    };
    return DebugDomRootRenderer;
}());
function DebugDomRootRenderer_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugDomRootRenderer.prototype._delegate;
}
var DebugDomRenderer = (function () {
    /**
     * @param {?} _delegate
     */
    function DebugDomRenderer(_delegate) {
        this._delegate = _delegate;
    }
    /**
     * @param {?} selectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
        var /** @type {?} */ nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
        var /** @type {?} */ debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */](nativeEl, null, debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return nativeEl;
    };
    /**
     * @param {?} parentElement
     * @param {?} name
     * @param {?=} debugInfo
     * @return {?}
     */
    DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
        var /** @type {?} */ nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
        var /** @type {?} */ debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */](nativeEl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        debugEl.name = name;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return nativeEl;
    };
    /**
     * @param {?} hostElement
     * @return {?}
     */
    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
    /**
     * @param {?} parentElement
     * @param {?=} debugInfo
     * @return {?}
     */
    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
        var /** @type {?} */ comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
        var /** @type {?} */ debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["d" /* DebugNode */](comment, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return comment;
    };
    /**
     * @param {?} parentElement
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
        var /** @type {?} */ text = this._delegate.createText(parentElement, value, debugInfo);
        var /** @type {?} */ debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["d" /* DebugNode */](text, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return text;
    };
    /**
     * @param {?} parentElement
     * @param {?} nodes
     * @return {?}
     */
    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
        var /** @type {?} */ debugParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugParent) && debugParent instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            var /** @type {?} */ debugElement_1 = debugParent;
            nodes.forEach(function (node) { debugElement_1.addChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node)); });
        }
        this._delegate.projectNodes(parentElement, nodes);
    };
    /**
     * @param {?} node
     * @param {?} viewRootNodes
     * @return {?}
     */
    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
        var /** @type {?} */ debugNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode)) {
            var /** @type {?} */ debugParent = debugNode.parent;
            if (viewRootNodes.length > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugParent)) {
                var /** @type {?} */ debugViewRootNodes_1 = [];
                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes_1.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(rootNode)); });
                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes_1);
            }
        }
        this._delegate.attachViewAfter(node, viewRootNodes);
    };
    /**
     * @param {?} viewRootNodes
     * @return {?}
     */
    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
        viewRootNodes.forEach(function (node) {
            var /** @type {?} */ debugNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode.parent)) {
                debugNode.parent.removeChild(debugNode);
            }
        });
        this._delegate.detachView(viewRootNodes);
    };
    /**
     * @param {?} hostElement
     * @param {?} viewAllNodes
     * @return {?}
     */
    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
        viewAllNodes = viewAllNodes || [];
        viewAllNodes.forEach(function (node) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["e" /* removeDebugNodeFromIndex */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node)); });
        this._delegate.destroyView(hostElement, viewAllNodes);
    };
    /**
     * @param {?} renderElement
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
        var /** @type {?} */ debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl)) {
            debugEl.listeners.push(new __WEBPACK_IMPORTED_MODULE_1__debug_node__["f" /* EventListener */](name, callback));
        }
        return this._delegate.listen(renderElement, name, callback);
    };
    /**
     * @param {?} target
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
        return this._delegate.listenGlobal(target, name, callback);
    };
    /**
     * @param {?} renderElement
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
        var /** @type {?} */ debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.properties[propertyName] = propertyValue;
        }
        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
    };
    /**
     * @param {?} renderElement
     * @param {?} attributeName
     * @param {?} attributeValue
     * @return {?}
     */
    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
        var /** @type {?} */ debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.attributes[attributeName] = attributeValue;
        }
        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
    };
    /**
     * @param {?} renderElement
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    };
    /**
     * @param {?} renderElement
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */
    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
        var /** @type {?} */ debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.classes[className] = isAdd;
        }
        this._delegate.setElementClass(renderElement, className, isAdd);
    };
    /**
     * @param {?} renderElement
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
        var /** @type {?} */ debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.styles[styleName] = styleValue;
        }
        this._delegate.setElementStyle(renderElement, styleName, styleValue);
    };
    /**
     * @param {?} renderElement
     * @param {?} methodName
     * @param {?=} args
     * @return {?}
     */
    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
        this._delegate.invokeElementMethod(renderElement, methodName, args);
    };
    /**
     * @param {?} renderNode
     * @param {?} text
     * @return {?}
     */
    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
    /**
     * @param {?} element
     * @param {?} startingStyles
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    DebugDomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
    };
    return DebugDomRenderer;
}());
function DebugDomRenderer_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugDomRenderer.prototype._delegate;
}
//# sourceMappingURL=debug_renderer.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reflective_errors__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reflective_key__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reflective_provider__ = __webpack_require__(26);
/* unused harmony export ReflectiveProtoInjectorInlineStrategy */
/* unused harmony export ReflectiveProtoInjectorDynamicStrategy */
/* unused harmony export ReflectiveProtoInjector */
/* unused harmony export ReflectiveInjectorInlineStrategy */
/* unused harmony export ReflectiveInjectorDynamicStrategy */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectiveInjector; });
/* unused harmony export ReflectiveInjector_ */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






// Threshold for the dynamic version
var /** @type {?} */ _MAX_CONSTRUCTION_COUNTER = 10;
var /** @type {?} */ UNDEFINED = new Object();
var ReflectiveProtoInjectorInlineStrategy = (function () {
    /**
     * @param {?} protoEI
     * @param {?} providers
     */
    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
        this.provider0 = null;
        this.provider1 = null;
        this.provider2 = null;
        this.provider3 = null;
        this.provider4 = null;
        this.provider5 = null;
        this.provider6 = null;
        this.provider7 = null;
        this.provider8 = null;
        this.provider9 = null;
        this.keyId0 = null;
        this.keyId1 = null;
        this.keyId2 = null;
        this.keyId3 = null;
        this.keyId4 = null;
        this.keyId5 = null;
        this.keyId6 = null;
        this.keyId7 = null;
        this.keyId8 = null;
        this.keyId9 = null;
        var length = providers.length;
        if (length > 0) {
            this.provider0 = providers[0];
            this.keyId0 = providers[0].key.id;
        }
        if (length > 1) {
            this.provider1 = providers[1];
            this.keyId1 = providers[1].key.id;
        }
        if (length > 2) {
            this.provider2 = providers[2];
            this.keyId2 = providers[2].key.id;
        }
        if (length > 3) {
            this.provider3 = providers[3];
            this.keyId3 = providers[3].key.id;
        }
        if (length > 4) {
            this.provider4 = providers[4];
            this.keyId4 = providers[4].key.id;
        }
        if (length > 5) {
            this.provider5 = providers[5];
            this.keyId5 = providers[5].key.id;
        }
        if (length > 6) {
            this.provider6 = providers[6];
            this.keyId6 = providers[6].key.id;
        }
        if (length > 7) {
            this.provider7 = providers[7];
            this.keyId7 = providers[7].key.id;
        }
        if (length > 8) {
            this.provider8 = providers[8];
            this.keyId8 = providers[8].key.id;
        }
        if (length > 9) {
            this.provider9 = providers[9];
            this.keyId9 = providers[9].key.id;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
        if (index == 0)
            return this.provider0;
        if (index == 1)
            return this.provider1;
        if (index == 2)
            return this.provider2;
        if (index == 3)
            return this.provider3;
        if (index == 4)
            return this.provider4;
        if (index == 5)
            return this.provider5;
        if (index == 6)
            return this.provider6;
        if (index == 7)
            return this.provider7;
        if (index == 8)
            return this.provider8;
        if (index == 9)
            return this.provider9;
        throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
    };
    /**
     * @param {?} injector
     * @return {?}
     */
    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
        return new ReflectiveInjectorInlineStrategy(injector, this);
    };
    return ReflectiveProtoInjectorInlineStrategy;
}());
function ReflectiveProtoInjectorInlineStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider0;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider1;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider2;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider3;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider4;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider5;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider6;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider7;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider8;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.provider9;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId0;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId1;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId2;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId3;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId4;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId5;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId6;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId7;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId8;
    /** @type {?} */
    ReflectiveProtoInjectorInlineStrategy.prototype.keyId9;
}
var ReflectiveProtoInjectorDynamicStrategy = (function () {
    /**
     * @param {?} protoInj
     * @param {?} providers
     */
    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
        this.providers = providers;
        var len = providers.length;
        this.keyIds = new Array(len);
        for (var i = 0; i < len; i++) {
            this.keyIds[i] = providers[i].key.id;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
        if (index < 0 || index >= this.providers.length) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
        }
        return this.providers[index];
    };
    /**
     * @param {?} ei
     * @return {?}
     */
    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
        return new ReflectiveInjectorDynamicStrategy(this, ei);
    };
    return ReflectiveProtoInjectorDynamicStrategy;
}());
function ReflectiveProtoInjectorDynamicStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveProtoInjectorDynamicStrategy.prototype.keyIds;
    /** @type {?} */
    ReflectiveProtoInjectorDynamicStrategy.prototype.providers;
}
var ReflectiveProtoInjector = (function () {
    /**
     * @param {?} providers
     */
    function ReflectiveProtoInjector(providers) {
        this.numberOfProviders = providers.length;
        this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
            new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
            new ReflectiveProtoInjectorInlineStrategy(this, providers);
    }
    /**
     * @param {?} providers
     * @return {?}
     */
    ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
        return new ReflectiveProtoInjector(providers);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
        return this._strategy.getProviderAtIndex(index);
    };
    return ReflectiveProtoInjector;
}());
function ReflectiveProtoInjector_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveProtoInjector.prototype._strategy;
    /** @type {?} */
    ReflectiveProtoInjector.prototype.numberOfProviders;
}
var ReflectiveInjectorInlineStrategy = (function () {
    /**
     * @param {?} injector
     * @param {?} protoStrategy
     */
    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
        this.injector = injector;
        this.protoStrategy = protoStrategy;
        this.obj0 = UNDEFINED;
        this.obj1 = UNDEFINED;
        this.obj2 = UNDEFINED;
        this.obj3 = UNDEFINED;
        this.obj4 = UNDEFINED;
        this.obj5 = UNDEFINED;
        this.obj6 = UNDEFINED;
        this.obj7 = UNDEFINED;
        this.obj8 = UNDEFINED;
        this.obj9 = UNDEFINED;
    }
    /**
     * @return {?}
     */
    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
        return this.injector._new(provider);
    };
    /**
     * @param {?} keyId
     * @return {?}
     */
    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
        var /** @type {?} */ p = this.protoStrategy;
        var /** @type {?} */ inj = this.injector;
        if (p.keyId0 === keyId) {
            if (this.obj0 === UNDEFINED) {
                this.obj0 = inj._new(p.provider0);
            }
            return this.obj0;
        }
        if (p.keyId1 === keyId) {
            if (this.obj1 === UNDEFINED) {
                this.obj1 = inj._new(p.provider1);
            }
            return this.obj1;
        }
        if (p.keyId2 === keyId) {
            if (this.obj2 === UNDEFINED) {
                this.obj2 = inj._new(p.provider2);
            }
            return this.obj2;
        }
        if (p.keyId3 === keyId) {
            if (this.obj3 === UNDEFINED) {
                this.obj3 = inj._new(p.provider3);
            }
            return this.obj3;
        }
        if (p.keyId4 === keyId) {
            if (this.obj4 === UNDEFINED) {
                this.obj4 = inj._new(p.provider4);
            }
            return this.obj4;
        }
        if (p.keyId5 === keyId) {
            if (this.obj5 === UNDEFINED) {
                this.obj5 = inj._new(p.provider5);
            }
            return this.obj5;
        }
        if (p.keyId6 === keyId) {
            if (this.obj6 === UNDEFINED) {
                this.obj6 = inj._new(p.provider6);
            }
            return this.obj6;
        }
        if (p.keyId7 === keyId) {
            if (this.obj7 === UNDEFINED) {
                this.obj7 = inj._new(p.provider7);
            }
            return this.obj7;
        }
        if (p.keyId8 === keyId) {
            if (this.obj8 === UNDEFINED) {
                this.obj8 = inj._new(p.provider8);
            }
            return this.obj8;
        }
        if (p.keyId9 === keyId) {
            if (this.obj9 === UNDEFINED) {
                this.obj9 = inj._new(p.provider9);
            }
            return this.obj9;
        }
        return UNDEFINED;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
        if (index == 0)
            return this.obj0;
        if (index == 1)
            return this.obj1;
        if (index == 2)
            return this.obj2;
        if (index == 3)
            return this.obj3;
        if (index == 4)
            return this.obj4;
        if (index == 5)
            return this.obj5;
        if (index == 6)
            return this.obj6;
        if (index == 7)
            return this.obj7;
        if (index == 8)
            return this.obj8;
        if (index == 9)
            return this.obj9;
        throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
    };
    /**
     * @return {?}
     */
    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
    return ReflectiveInjectorInlineStrategy;
}());
function ReflectiveInjectorInlineStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj0;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj1;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj2;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj3;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj4;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj5;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj6;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj7;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj8;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.obj9;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.injector;
    /** @type {?} */
    ReflectiveInjectorInlineStrategy.prototype.protoStrategy;
}
var ReflectiveInjectorDynamicStrategy = (function () {
    /**
     * @param {?} protoStrategy
     * @param {?} injector
     */
    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
        this.protoStrategy = protoStrategy;
        this.injector = injector;
        this.objs = new Array(protoStrategy.providers.length).fill(UNDEFINED);
    }
    /**
     * @return {?}
     */
    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
        return this.injector._new(provider);
    };
    /**
     * @param {?} keyId
     * @return {?}
     */
    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
        var /** @type {?} */ p = this.protoStrategy;
        for (var /** @type {?} */ i = 0; i < p.keyIds.length; i++) {
            if (p.keyIds[i] === keyId) {
                if (this.objs[i] === UNDEFINED) {
                    this.objs[i] = this.injector._new(p.providers[i]);
                }
                return this.objs[i];
            }
        }
        return UNDEFINED;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
        if (index < 0 || index >= this.objs.length) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
        }
        return this.objs[index];
    };
    /**
     * @return {?}
     */
    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
    return ReflectiveInjectorDynamicStrategy;
}());
function ReflectiveInjectorDynamicStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveInjectorDynamicStrategy.prototype.objs;
    /** @type {?} */
    ReflectiveInjectorDynamicStrategy.prototype.protoStrategy;
    /** @type {?} */
    ReflectiveInjectorDynamicStrategy.prototype.injector;
}
/**
 *  A ReflectiveDependency injection container used for instantiating objects and resolving
  * dependencies.
  * *
  * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
  * constructor dependencies.
  * *
  * In typical use, application code asks for the dependencies in the constructor and they are
  * resolved by the `Injector`.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
  * *
  * The following example creates an `Injector` configured to create `Engine` and `Car`.
  * *
  * ```typescript
  * class Engine {
  * }
  * *
  * class Car {
  * constructor(public engine:Engine) {}
  * }
  * *
  * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
  * var car = injector.get(Car);
  * expect(car instanceof Car).toBe(true);
  * expect(car.engine instanceof Engine).toBe(true);
  * ```
  * *
  * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
  * resolve all of the object's dependencies automatically.
  * *
 * @abstract
 */
var ReflectiveInjector = (function () {
    function ReflectiveInjector() {
    }
    /**
     *  Turns an array of provider definitions into an array of resolved providers.
      * *
      * A resolution is a process of flattening multiple nested arrays and converting individual
      * providers into an array of {@link ResolvedReflectiveProvider}s.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
      * *
      * ```typescript
      * class Engine {
      * }
      * *
      * class Car {
      * constructor(public engine:Engine) {}
      * }
      * *
      * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
      * *
      * expect(providers.length).toEqual(2);
      * *
      * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
      * expect(providers[0].key.displayName).toBe("Car");
      * expect(providers[0].dependencies.length).toEqual(1);
      * expect(providers[0].factory).toBeDefined();
      * *
      * expect(providers[1].key.displayName).toBe("Engine");
      * });
      * ```
      * *
      * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector.resolve = function (providers) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reflective_provider__["a" /* resolveReflectiveProviders */])(providers);
    };
    /**
     *  Resolves an array of providers and creates an injector from those providers.
      * *
      * The passed-in providers can be an array of `Type`, {@link Provider},
      * or a recursive array of more providers.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
      * *
      * ```typescript
      * class Engine {
      * }
      * *
      * class Car {
      * constructor(public engine:Engine) {}
      * }
      * *
      * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
      * expect(injector.get(Car) instanceof Car).toBe(true);
      * ```
      * *
      * This function is slower than the corresponding `fromResolvedProviders`
      * because it needs to resolve the passed-in providers first.
      * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
     * @param {?} providers
     * @param {?=} parent
     * @return {?}
     */
    ReflectiveInjector.resolveAndCreate = function (providers, parent) {
        if (parent === void 0) { parent = null; }
        var /** @type {?} */ ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
    };
    /**
     *  Creates an injector from previously resolved providers.
      * *
      * This API is the recommended way to construct injectors in performance-sensitive parts.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
      * *
      * ```typescript
      * class Engine {
      * }
      * *
      * class Car {
      * constructor(public engine:Engine) {}
      * }
      * *
      * var providers = ReflectiveInjector.resolve([Car, Engine]);
      * var injector = ReflectiveInjector.fromResolvedProviders(providers);
      * expect(injector.get(Car) instanceof Car).toBe(true);
      * ```
     * @param {?} providers
     * @param {?=} parent
     * @return {?}
     */
    ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
        if (parent === void 0) { parent = null; }
        return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
    };
    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
        /**
         *  Parent of this injector.
          * *
          * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
          * -->
          * *
          * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
          * *
          * ```typescript
          * var parent = ReflectiveInjector.resolveAndCreate([]);
          * var child = parent.resolveAndCreateChild([]);
          * expect(child.parent).toBe(parent);
          * ```
         * @return {?}
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    /**
     *  Resolves an array of providers and creates a child injector from those providers.
      * *
      * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
      * -->
      * *
      * The passed-in providers can be an array of `Type`, {@link Provider},
      * or a recursive array of more providers.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
      * *
      * ```typescript
      * class ParentProvider {}
      * class ChildProvider {}
      * *
      * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
      * var child = parent.resolveAndCreateChild([ChildProvider]);
      * *
      * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
      * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
      * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
      * ```
      * *
      * This function is slower than the corresponding `createChildFromResolved`
      * because it needs to resolve the passed-in providers first.
      * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    /**
     *  Creates a child injector from previously resolved providers.
      * *
      * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
      * -->
      * *
      * This API is the recommended way to construct injectors in performance-sensitive parts.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
      * *
      * ```typescript
      * class ParentProvider {}
      * class ChildProvider {}
      * *
      * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
      * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
      * *
      * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
      * var child = parent.createChildFromResolved(childProviders);
      * *
      * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
      * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
      * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
      * ```
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])();
    };
    /**
     *  Resolves a provider and instantiates an object in the context of the injector.
      * *
      * The created object does not get cached by the injector.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
      * *
      * ```typescript
      * class Engine {
      * }
      * *
      * class Car {
      * constructor(public engine:Engine) {}
      * }
      * *
      * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
      * *
      * var car = injector.resolveAndInstantiate(Car);
      * expect(car.engine).toBe(injector.get(Engine));
      * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
      * ```
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    /**
     *  Instantiates an object using a resolved provider in the context of the injector.
      * *
      * The created object does not get cached by the injector.
      * *
      * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
      * *
      * ```typescript
      * class Engine {
      * }
      * *
      * class Car {
      * constructor(public engine:Engine) {}
      * }
      * *
      * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
      * var carProvider = ReflectiveInjector.resolve([Car])[0];
      * var car = injector.instantiateResolved(carProvider);
      * expect(car.engine).toBe(injector.get(Engine));
      * expect(car).not.toBe(injector.instantiateResolved(carProvider));
      * ```
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector.prototype.instantiateResolved = function (provider) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    /**
     * @abstract
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ReflectiveInjector.prototype.get = function (token, notFoundValue) { };
    return ReflectiveInjector;
}());
var ReflectiveInjector_ = (function () {
    /**
     *  Private
     * @param {?} _proto
     * @param {?=} _parent
     */
    function ReflectiveInjector_(_proto /* ProtoInjector */, _parent) {
        if (_parent === void 0) { _parent = null; }
        /** @internal */
        this._constructionCounter = 0;
        this._proto = _proto;
        this._parent = _parent;
        this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]; }
        return this._getByKey(__WEBPACK_IMPORTED_MODULE_4__reflective_key__["a" /* ReflectiveKey */].get(token), null, null, notFoundValue);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
        /**
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
        /**
         *  Internal. Do not use.
          * We return `any` not to export the InjectorStrategy type.
         * @return {?}
         */
        get: function () { return this._strategy; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
        var /** @type {?} */ ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return this.createChildFromResolved(ResolvedReflectiveProviders);
    };
    /**
     * @param {?} providers
     * @return {?}
     */
    ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
        var /** @type {?} */ proto = new ReflectiveProtoInjector(providers);
        var /** @type {?} */ inj = new ReflectiveInjector_(proto);
        inj._parent = this;
        return inj;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
        return this._instantiateProvider(provider);
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector_.prototype._new = function (provider) {
        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["e" /* CyclicDependencyError */](this, provider.key);
        }
        return this._instantiateProvider(provider);
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
        if (provider.multiProvider) {
            var /** @type {?} */ res = new Array(provider.resolvedFactories.length);
            for (var /** @type {?} */ i = 0; i < provider.resolvedFactories.length; ++i) {
                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
            }
            return res;
        }
        else {
            return this._instantiate(provider, provider.resolvedFactories[0]);
        }
    };
    /**
     * @param {?} provider
     * @param {?} ResolvedReflectiveFactory
     * @return {?}
     */
    ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
        var /** @type {?} */ factory = ResolvedReflectiveFactory.factory;
        var /** @type {?} */ deps = ResolvedReflectiveFactory.dependencies;
        var /** @type {?} */ length = deps.length;
        var /** @type {?} */ d0;
        var /** @type {?} */ d1;
        var /** @type {?} */ d2;
        var /** @type {?} */ d3;
        var /** @type {?} */ d4;
        var /** @type {?} */ d5;
        var /** @type {?} */ d6;
        var /** @type {?} */ d7;
        var /** @type {?} */ d8;
        var /** @type {?} */ d9;
        var /** @type {?} */ d10;
        var /** @type {?} */ d11;
        var /** @type {?} */ d12;
        var /** @type {?} */ d13;
        var /** @type {?} */ d14;
        var /** @type {?} */ d15;
        var /** @type {?} */ d16;
        var /** @type {?} */ d17;
        var /** @type {?} */ d18;
        var /** @type {?} */ d19;
        try {
            d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
            d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
            d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
            d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
            d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
            d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
            d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
            d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
            d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
            d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
            d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
            d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
            d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
            d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
            d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
            d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
            d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
            d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
            d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
            d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
        }
        catch (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["f" /* AbstractProviderError */] || e instanceof __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["g" /* InstantiationError */]) {
                e.addKey(this, provider.key);
            }
            throw e;
        }
        var /** @type {?} */ obj;
        try {
            switch (length) {
                case 0:
                    obj = factory();
                    break;
                case 1:
                    obj = factory(d0);
                    break;
                case 2:
                    obj = factory(d0, d1);
                    break;
                case 3:
                    obj = factory(d0, d1, d2);
                    break;
                case 4:
                    obj = factory(d0, d1, d2, d3);
                    break;
                case 5:
                    obj = factory(d0, d1, d2, d3, d4);
                    break;
                case 6:
                    obj = factory(d0, d1, d2, d3, d4, d5);
                    break;
                case 7:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
                    break;
                case 8:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
                    break;
                case 9:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
                    break;
                case 10:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
                    break;
                case 11:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
                    break;
                case 12:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
                    break;
                case 13:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
                    break;
                case 14:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
                    break;
                case 15:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
                    break;
                case 16:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
                    break;
                case 17:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
                    break;
                case 18:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
                    break;
                case 19:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
                    break;
                case 20:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
                    break;
                default:
                    throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
            }
        }
        catch (e) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["g" /* InstantiationError */](this, e, e.stack, provider.key);
        }
        return obj;
    };
    /**
     * @param {?} provider
     * @param {?} dep
     * @return {?}
     */
    ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]);
    };
    /**
     * @param {?} key
     * @param {?} lowerBoundVisibility
     * @param {?} upperBoundVisibility
     * @param {?} notFoundValue
     * @return {?}
     */
    ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
        if (key === INJECTOR_KEY) {
            return this;
        }
        if (upperBoundVisibility instanceof __WEBPACK_IMPORTED_MODULE_2__metadata__["d" /* Self */]) {
            return this._getByKeySelf(key, notFoundValue);
        }
        else {
            return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
        }
    };
    /**
     * @param {?} key
     * @param {?} notFoundValue
     * @return {?}
     */
    ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
        if (notFoundValue !== __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]) {
            return notFoundValue;
        }
        else {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["h" /* NoProviderError */](this, key);
        }
    };
    /**
     * @param {?} key
     * @param {?} notFoundValue
     * @return {?}
     */
    ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
        var /** @type {?} */ obj = this._strategy.getObjByKeyId(key.id);
        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
    };
    /**
     * @param {?} key
     * @param {?} notFoundValue
     * @param {?} lowerBoundVisibility
     * @return {?}
     */
    ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
        var /** @type {?} */ inj;
        if (lowerBoundVisibility instanceof __WEBPACK_IMPORTED_MODULE_2__metadata__["f" /* SkipSelf */]) {
            inj = this._parent;
        }
        else {
            inj = this;
        }
        while (inj instanceof ReflectiveInjector_) {
            var /** @type {?} */ inj_ = (inj);
            var /** @type {?} */ obj = inj_._strategy.getObjByKeyId(key.id);
            if (obj !== UNDEFINED)
                return obj;
            inj = inj_._parent;
        }
        if (inj !== null) {
            return inj.get(key.token, notFoundValue);
        }
        else {
            return this._throwOrNull(key, notFoundValue);
        }
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ providers = _mapProviders(this, function (b) { return ' "' + b.key.displayName + '" '; })
                .join(', ');
            return "ReflectiveInjector(providers: [" + providers + "])";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
    return ReflectiveInjector_;
}());
function ReflectiveInjector__tsickle_Closure_declarations() {
    /** @type {?} */
    ReflectiveInjector_.prototype._strategy;
    /** @type {?} */
    ReflectiveInjector_.prototype._constructionCounter;
    /** @type {?} */
    ReflectiveInjector_.prototype._proto;
    /** @type {?} */
    ReflectiveInjector_.prototype._parent;
}
var /** @type {?} */ INJECTOR_KEY = __WEBPACK_IMPORTED_MODULE_4__reflective_key__["a" /* ReflectiveKey */].get(__WEBPACK_IMPORTED_MODULE_1__injector__["b" /* Injector */]);
/**
 * @param {?} injector
 * @param {?} fn
 * @return {?}
 */
function _mapProviders(injector, fn) {
    var /** @type {?} */ res = new Array(injector._proto.numberOfProviders);
    for (var /** @type {?} */ i = 0; i < injector._proto.numberOfProviders; ++i) {
        res[i] = fn(injector._proto.getProviderAtIndex(i));
    }
    return res;
}
//# sourceMappingURL=reflective_injector.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linker_compiler__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linker_component_factory_resolver__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linker_element_ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linker_ng_module_factory__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linker_ng_module_factory_loader__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linker_query_list__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linker_system_js_ng_module_factory_loader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linker_template_ref__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__linker_view_container_ref__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__linker_view_ref__ = __webpack_require__(55);
/* unused harmony reexport COMPILER_OPTIONS */
/* unused harmony reexport CompilerFactory */
/* unused harmony reexport ModuleWithComponentFactories */
/* unused harmony reexport Compiler */
/* unused harmony reexport ComponentFactory */
/* unused harmony reexport ComponentRef */
/* unused harmony reexport ComponentFactoryResolver */
/* unused harmony reexport ElementRef */
/* unused harmony reexport NgModuleFactory */
/* unused harmony reexport NgModuleRef */
/* unused harmony reexport NgModuleFactoryLoader */
/* unused harmony reexport getModuleFactory */
/* unused harmony reexport QueryList */
/* unused harmony reexport SystemJsNgModuleLoader */
/* unused harmony reexport SystemJsNgModuleLoaderConfig */
/* unused harmony reexport TemplateRef */
/* unused harmony reexport ViewContainerRef */
/* unused harmony reexport EmbeddedViewRef */
/* unused harmony reexport ViewRef */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for compiler











//# sourceMappingURL=linker.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_animation_sequence_player__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_view_animation_map__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationViewContext; });



var AnimationViewContext = (function () {
    /**
     * @param {?} _animationQueue
     */
    function AnimationViewContext(_animationQueue) {
        this._animationQueue = _animationQueue;
        this._players = new __WEBPACK_IMPORTED_MODULE_2__animation_view_animation_map__["a" /* ViewAnimationMap */]();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    AnimationViewContext.prototype.onAllActiveAnimationsDone = function (callback) {
        var /** @type {?} */ activeAnimationPlayers = this._players.getAllPlayers();
        // we check for the length to avoid having GroupAnimationPlayer
        // issue an unnecessary microtask when zero players are passed in
        if (activeAnimationPlayers.length) {
            new __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__["a" /* AnimationGroupPlayer */](activeAnimationPlayers).onDone(function () { return callback(); });
        }
        else {
            callback();
        }
    };
    /**
     * @param {?} element
     * @param {?} animationName
     * @param {?} player
     * @return {?}
     */
    AnimationViewContext.prototype.queueAnimation = function (element, animationName, player) {
        var _this = this;
        this._animationQueue.enqueue(player);
        this._players.set(element, animationName, player);
        player.onDone(function () { return _this._players.remove(element, animationName, player); });
    };
    /**
     * @param {?} element
     * @param {?=} animationName
     * @return {?}
     */
    AnimationViewContext.prototype.getAnimationPlayers = function (element, animationName) {
        if (animationName === void 0) { animationName = null; }
        var /** @type {?} */ players = [];
        if (animationName) {
            var /** @type {?} */ currentPlayer = this._players.find(element, animationName);
            if (currentPlayer) {
                _recursePlayers(currentPlayer, players);
            }
        }
        else {
            this._players.findAllPlayersByElement(element).forEach(function (player) { return _recursePlayers(player, players); });
        }
        return players;
    };
    return AnimationViewContext;
}());
function AnimationViewContext_tsickle_Closure_declarations() {
    /** @type {?} */
    AnimationViewContext.prototype._players;
    /** @type {?} */
    AnimationViewContext.prototype._animationQueue;
}
/**
 * @param {?} player
 * @param {?} collectedPlayers
 * @return {?}
 */
function _recursePlayers(player, collectedPlayers) {
    if ((player instanceof __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__["a" /* AnimationGroupPlayer */]) || (player instanceof __WEBPACK_IMPORTED_MODULE_1__animation_animation_sequence_player__["a" /* AnimationSequencePlayer */])) {
        player.players.forEach(function (player) { return _recursePlayers(player, collectedPlayers); });
    }
    else {
        collectedPlayers.push(player);
    }
}
//# sourceMappingURL=animation_view_context.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_injector__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementInjector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var ElementInjector = (function (_super) {
    __extends(ElementInjector, _super);
    /**
     * @param {?} _view
     * @param {?} _nodeIndex
     */
    function ElementInjector(_view, _nodeIndex) {
        _super.call(this);
        this._view = _view;
        this._nodeIndex = _nodeIndex;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ElementInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_0__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
    };
    return ElementInjector;
}(__WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */]));
function ElementInjector_tsickle_Closure_declarations() {
    /** @type {?} */
    ElementInjector.prototype._view;
    /** @type {?} */
    ElementInjector.prototype._nodeIndex;
}
//# sourceMappingURL=element_injector.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_async__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(0);
/* unused harmony export QueryList */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  An unmodifiable list of items that Angular keeps up to date when the state
  * of the application changes.
  * *
  * The type of object that {@link Query} and {@link ViewQueryMetadata} provide.
  * *
  * Implements an iterable interface, therefore it can be used in both ES6
  * javascript `for (var i of items)` loops as well as in Angular templates with
  * `*ngFor="let i of myList"`.
  * *
  * Changes can be observed by subscribing to the changes `Observable`.
  * *
  * NOTE: In the future this class will implement an `Observable` interface.
  * *
  * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
  * ```typescript
  * class Container {
  * @ViewChildren(Item) items:QueryList<Item>;
  * }
  * ```
 */
var QueryList = (function () {
    function QueryList() {
        this._dirty = true;
        this._results = [];
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */]();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
        /**
         * @return {?}
         */
        get: function () { return this._emitter; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
        /**
         * @return {?}
         */
        get: function () { return this._results.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
        /**
         * @return {?}
         */
        get: function () { return this._results[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
        /**
         * @return {?}
         */
        get: function () { return this._results[this.length - 1]; },
        enumerable: true,
        configurable: true
    });
    /**
     *  See
      * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     * @param {?} fn
     * @return {?}
     */
    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
    /**
     *  See
      * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     * @param {?} fn
     * @return {?}
     */
    QueryList.prototype.filter = function (fn) {
        return this._results.filter(fn);
    };
    /**
     *  See
      * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     * @param {?} fn
     * @return {?}
     */
    QueryList.prototype.find = function (fn) { return this._results.find(fn); };
    /**
     *  See
      * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     * @param {?} fn
     * @param {?} init
     * @return {?}
     */
    QueryList.prototype.reduce = function (fn, init) {
        return this._results.reduce(fn, init);
    };
    /**
     *  See
      * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     * @param {?} fn
     * @return {?}
     */
    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
    /**
     *  See
      * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     * @param {?} fn
     * @return {?}
     */
    QueryList.prototype.some = function (fn) {
        return this._results.some(fn);
    };
    /**
     * @return {?}
     */
    QueryList.prototype.toArray = function () { return this._results.slice(); };
    /**
     * @return {?}
     */
    QueryList.prototype[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["f" /* getSymbolIterator */])()] = function () { return ((this._results))[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["f" /* getSymbolIterator */])()](); };
    /**
     * @return {?}
     */
    QueryList.prototype.toString = function () { return this._results.toString(); };
    /**
     * @param {?} res
     * @return {?}
     */
    QueryList.prototype.reset = function (res) {
        this._results = __WEBPACK_IMPORTED_MODULE_1__facade_collection__["d" /* ListWrapper */].flatten(res);
        this._dirty = false;
    };
    /**
     * @return {?}
     */
    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
    /**
     *  internal
     * @return {?}
     */
    QueryList.prototype.setDirty = function () { this._dirty = true; };
    Object.defineProperty(QueryList.prototype, "dirty", {
        /**
         *  internal
         * @return {?}
         */
        get: function () { return this._dirty; },
        enumerable: true,
        configurable: true
    });
    return QueryList;
}());
function QueryList_tsickle_Closure_declarations() {
    /** @type {?} */
    QueryList.prototype._dirty;
    /** @type {?} */
    QueryList.prototype._results;
    /** @type {?} */
    QueryList.prototype._emitter;
}
//# sourceMappingURL=query_list.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compiler__ = __webpack_require__(7);
/* unused harmony export SystemJsNgModuleLoaderConfig */
/* unused harmony export SystemJsNgModuleLoader */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var /** @type {?} */ _SEPARATOR = '#';
var /** @type {?} */ FACTORY_CLASS_SUFFIX = 'NgFactory';
/**
 *  Configuration for SystemJsNgModuleLoader.
  * token.
  * *
 * @abstract
 */
var SystemJsNgModuleLoaderConfig = (function () {
    function SystemJsNgModuleLoaderConfig() {
    }
    return SystemJsNgModuleLoaderConfig;
}());
function SystemJsNgModuleLoaderConfig_tsickle_Closure_declarations() {
    /**
     * Prefix to add when computing the name of the factory module for a given module name.
     * @type {?}
     */
    SystemJsNgModuleLoaderConfig.prototype.factoryPathPrefix;
    /**
     * Suffix to add when computing the name of the factory module for a given module name.
     * @type {?}
     */
    SystemJsNgModuleLoaderConfig.prototype.factoryPathSuffix;
}
var /** @type {?} */ DEFAULT_CONFIG = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory',
};
/**
 *  NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
 */
var SystemJsNgModuleLoader = (function () {
    /**
     * @param {?} _compiler
     * @param {?=} config
     */
    function SystemJsNgModuleLoader(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || DEFAULT_CONFIG;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    SystemJsNgModuleLoader.prototype.load = function (path) {
        var /** @type {?} */ offlineMode = this._compiler instanceof __WEBPACK_IMPORTED_MODULE_1__compiler__["b" /* Compiler */];
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    SystemJsNgModuleLoader.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__(64)(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    /**
     * @param {?} path
     * @return {?}
     */
    SystemJsNgModuleLoader.prototype.loadFactory = function (path) {
        var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
        var /** @type {?} */ factoryClassSuffix = FACTORY_CLASS_SUFFIX;
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__(64)(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return checkNotEmpty(factory, module, exportName); });
    };
    SystemJsNgModuleLoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    SystemJsNgModuleLoader.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__compiler__["b" /* Compiler */], },
        { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */] },] },
    ]; };
    return SystemJsNgModuleLoader;
}());
function SystemJsNgModuleLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    SystemJsNgModuleLoader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SystemJsNgModuleLoader.ctorParameters;
    /** @type {?} */
    SystemJsNgModuleLoader.prototype._config;
    /** @type {?} */
    SystemJsNgModuleLoader.prototype._compiler;
}
/**
 * @param {?} value
 * @param {?} modulePath
 * @param {?} exportName
 * @return {?}
 */
function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
}
//# sourceMappingURL=system_js_ng_module_factory_loader.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di_injector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_view_context__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__debug_context__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__element_injector__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__errors__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_ref__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_type__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_utils__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DebugAppView; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};











var /** @type {?} */ _scope_check = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["b" /* wtfCreateScope */])("AppView#check(ascii id)");
/**
 * @experimental
 */
var /** @type {?} */ EMPTY_CONTEXT = new Object();
var /** @type {?} */ UNDEFINED = new Object();
/**
 *  Cost of making objects: http://jsperf.com/instantiate-size-of-object
  * *
 * @abstract
 */
var AppView = (function () {
    /**
     * @param {?} clazz
     * @param {?} componentType
     * @param {?} type
     * @param {?} viewUtils
     * @param {?} parentView
     * @param {?} parentIndex
     * @param {?} parentElement
     * @param {?} cdMode
     * @param {?=} declaredViewContainer
     */
    function AppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentElement, cdMode, declaredViewContainer) {
        if (declaredViewContainer === void 0) { declaredViewContainer = null; }
        this.clazz = clazz;
        this.componentType = componentType;
        this.type = type;
        this.viewUtils = viewUtils;
        this.parentView = parentView;
        this.parentIndex = parentIndex;
        this.parentElement = parentElement;
        this.cdMode = cdMode;
        this.declaredViewContainer = declaredViewContainer;
        this.numberOfChecks = 0;
        this.ref = new __WEBPACK_IMPORTED_MODULE_8__view_ref__["a" /* ViewRef_ */](this, viewUtils.animationQueue);
        if (type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT || type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
            this.renderer = viewUtils.renderComponent(componentType);
        }
        else {
            this.renderer = parentView.renderer;
        }
        this._directRenderer = this.renderer.directRenderer;
    }
    Object.defineProperty(AppView.prototype, "animationContext", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._animationContext) {
                this._animationContext = new __WEBPACK_IMPORTED_MODULE_4__animation_view_context__["a" /* AnimationViewContext */](this.viewUtils.animationQueue);
            }
            return this._animationContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppView.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { return this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} context
     * @return {?}
     */
    AppView.prototype.create = function (context) {
        this.context = context;
        return this.createInternal(null);
    };
    /**
     * @param {?} rootSelectorOrNode
     * @param {?} hostInjector
     * @param {?} projectableNodes
     * @return {?}
     */
    AppView.prototype.createHostView = function (rootSelectorOrNode, hostInjector, projectableNodes) {
        this.context = (EMPTY_CONTEXT);
        this._hasExternalHostElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(rootSelectorOrNode);
        this._hostInjector = hostInjector;
        this._hostProjectableNodes = projectableNodes;
        return this.createInternal(rootSelectorOrNode);
    };
    /**
     *  Overwritten by implementations.
      * Returns the ComponentRef for the host element for ViewType.HOST.
     * @param {?} rootSelectorOrNode
     * @return {?}
     */
    AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
    /**
     *  Overwritten by implementations.
     * @param {?} templateNodeIndex
     * @return {?}
     */
    AppView.prototype.createEmbeddedViewInternal = function (templateNodeIndex) { return null; };
    /**
     * @param {?} lastRootNode
     * @param {?} allNodes
     * @param {?} disposables
     * @return {?}
     */
    AppView.prototype.init = function (lastRootNode, allNodes, disposables) {
        this.lastRootNode = lastRootNode;
        this.allNodes = allNodes;
        this.disposables = disposables;
        if (this.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT) {
            this.dirtyParentQueriesInternal();
        }
    };
    /**
     * @param {?} token
     * @param {?} nodeIndex
     * @param {?=} notFoundValue
     * @return {?}
     */
    AppView.prototype.injectorGet = function (token, nodeIndex, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_1__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        var /** @type {?} */ result = UNDEFINED;
        var /** @type {?} */ view = this;
        while (result === UNDEFINED) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(nodeIndex)) {
                result = view.injectorGetInternal(token, nodeIndex, UNDEFINED);
            }
            if (result === UNDEFINED && view.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
                result = view._hostInjector.get(token, notFoundValue);
            }
            nodeIndex = view.parentIndex;
            view = view.parentView;
        }
        return result;
    };
    /**
     *  Overwritten by implementations
     * @param {?} token
     * @param {?} nodeIndex
     * @param {?} notFoundResult
     * @return {?}
     */
    AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
        return notFoundResult;
    };
    /**
     * @param {?} nodeIndex
     * @return {?}
     */
    AppView.prototype.injector = function (nodeIndex) { return new __WEBPACK_IMPORTED_MODULE_6__element_injector__["a" /* ElementInjector */](this, nodeIndex); };
    /**
     * @return {?}
     */
    AppView.prototype.detachAndDestroy = function () {
        if (this.viewContainer) {
            this.viewContainer.detachView(this.viewContainer.nestedViews.indexOf(this));
        }
        else if (this.appRef) {
            this.appRef.detachView(this.ref);
        }
        else if (this._hasExternalHostElement) {
            this.detach();
        }
        this.destroy();
    };
    /**
     * @return {?}
     */
    AppView.prototype.destroy = function () {
        var _this = this;
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed) {
            return;
        }
        var /** @type {?} */ hostElement = this.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT ? this.parentElement : null;
        if (this.disposables) {
            for (var /** @type {?} */ i = 0; i < this.disposables.length; i++) {
                this.disposables[i]();
            }
        }
        this.destroyInternal();
        this.dirtyParentQueriesInternal();
        if (this._animationContext) {
            this._animationContext.onAllActiveAnimationsDone(function () { return _this.renderer.destroyView(hostElement, _this.allNodes); });
        }
        else {
            this.renderer.destroyView(hostElement, this.allNodes);
        }
        this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed;
    };
    /**
     *  Overwritten by implementations
     * @return {?}
     */
    AppView.prototype.destroyInternal = function () { };
    /**
     *  Overwritten by implementations
     * @return {?}
     */
    AppView.prototype.detachInternal = function () { };
    /**
     * @return {?}
     */
    AppView.prototype.detach = function () {
        var _this = this;
        this.detachInternal();
        if (this._animationContext) {
            this._animationContext.onAllActiveAnimationsDone(function () { return _this._renderDetach(); });
        }
        else {
            this._renderDetach();
        }
        if (this.declaredViewContainer && this.declaredViewContainer !== this.viewContainer &&
            this.declaredViewContainer.projectedViews) {
            var /** @type {?} */ projectedViews = this.declaredViewContainer.projectedViews;
            var /** @type {?} */ index = projectedViews.indexOf(this);
            // perf: pop is faster than splice!
            if (index >= projectedViews.length - 1) {
                projectedViews.pop();
            }
            else {
                projectedViews.splice(index, 1);
            }
        }
        this.appRef = null;
        this.viewContainer = null;
        this.dirtyParentQueriesInternal();
    };
    /**
     * @return {?}
     */
    AppView.prototype._renderDetach = function () {
        if (this._directRenderer) {
            this.visitRootNodesInternal(this._directRenderer.remove, null);
        }
        else {
            this.renderer.detachView(this.flatRootNodes);
        }
    };
    /**
     * @param {?} appRef
     * @return {?}
     */
    AppView.prototype.attachToAppRef = function (appRef) {
        if (this.viewContainer) {
            throw new Error('This view is already attached to a ViewContainer!');
        }
        this.appRef = appRef;
        this.dirtyParentQueriesInternal();
    };
    /**
     * @param {?} viewContainer
     * @param {?} prevView
     * @return {?}
     */
    AppView.prototype.attachAfter = function (viewContainer, prevView) {
        if (this.appRef) {
            throw new Error('This view is already attached directly to the ApplicationRef!');
        }
        this._renderAttach(viewContainer, prevView);
        this.viewContainer = viewContainer;
        if (this.declaredViewContainer && this.declaredViewContainer !== viewContainer) {
            if (!this.declaredViewContainer.projectedViews) {
                this.declaredViewContainer.projectedViews = [];
            }
            this.declaredViewContainer.projectedViews.push(this);
        }
        this.dirtyParentQueriesInternal();
    };
    /**
     * @param {?} viewContainer
     * @param {?} prevView
     * @return {?}
     */
    AppView.prototype.moveAfter = function (viewContainer, prevView) {
        this._renderAttach(viewContainer, prevView);
        this.dirtyParentQueriesInternal();
    };
    /**
     * @param {?} viewContainer
     * @param {?} prevView
     * @return {?}
     */
    AppView.prototype._renderAttach = function (viewContainer, prevView) {
        var /** @type {?} */ prevNode = prevView ? prevView.lastRootNode : viewContainer.nativeElement;
        if (this._directRenderer) {
            var /** @type {?} */ nextSibling = this._directRenderer.nextSibling(prevNode);
            if (nextSibling) {
                this.visitRootNodesInternal(this._directRenderer.insertBefore, nextSibling);
            }
            else {
                var /** @type {?} */ parentElement = this._directRenderer.parentElement(prevNode);
                if (parentElement) {
                    this.visitRootNodesInternal(this._directRenderer.appendChild, parentElement);
                }
            }
        }
        else {
            this.renderer.attachViewAfter(prevNode, this.flatRootNodes);
        }
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
        /**
         * @return {?}
         */
        get: function () { return this.ref; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ nodes = [];
            this.visitRootNodesInternal(__WEBPACK_IMPORTED_MODULE_10__view_utils__["addToArray"], nodes);
            return nodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} parentElement
     * @param {?} ngContentIndex
     * @return {?}
     */
    AppView.prototype.projectNodes = function (parentElement, ngContentIndex) {
        if (this._directRenderer) {
            this.visitProjectedNodes(ngContentIndex, this._directRenderer.appendChild, parentElement);
        }
        else {
            var /** @type {?} */ nodes = [];
            this.visitProjectedNodes(ngContentIndex, __WEBPACK_IMPORTED_MODULE_10__view_utils__["addToArray"], nodes);
            this.renderer.projectNodes(parentElement, nodes);
        }
    };
    /**
     * @param {?} ngContentIndex
     * @param {?} cb
     * @param {?} c
     * @return {?}
     */
    AppView.prototype.visitProjectedNodes = function (ngContentIndex, cb, c) {
        switch (this.type) {
            case __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].EMBEDDED:
                this.parentView.visitProjectedNodes(ngContentIndex, cb, c);
                break;
            case __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT:
                if (this.parentView.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
                    var /** @type {?} */ nodes = this.parentView._hostProjectableNodes[ngContentIndex] || [];
                    for (var /** @type {?} */ i = 0; i < nodes.length; i++) {
                        cb(nodes[i], c);
                    }
                }
                else {
                    this.parentView.visitProjectableNodesInternal(this.parentIndex, ngContentIndex, cb, c);
                }
                break;
        }
    };
    /**
     *  Overwritten by implementations
     * @param {?} cb
     * @param {?} c
     * @return {?}
     */
    AppView.prototype.visitRootNodesInternal = function (cb, c) { };
    /**
     *  Overwritten by implementations
     * @param {?} nodeIndex
     * @param {?} ngContentIndex
     * @param {?} cb
     * @param {?} c
     * @return {?}
     */
    AppView.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, c) { };
    /**
     *  Overwritten by implementations
     * @return {?}
     */
    AppView.prototype.dirtyParentQueriesInternal = function () { };
    /**
     * @param {?} throwOnChange
     * @return {?}
     */
    AppView.prototype.internalDetectChanges = function (throwOnChange) {
        if (this.cdMode !== __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Detached) {
            this.detectChanges(throwOnChange);
        }
    };
    /**
     * @param {?} throwOnChange
     * @return {?}
     */
    AppView.prototype.detectChanges = function (throwOnChange) {
        var /** @type {?} */ s = _scope_check(this.clazz);
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked ||
            this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Errored)
            return;
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed) {
            this.throwDestroyedError('detectChanges');
        }
        this.detectChangesInternal(throwOnChange);
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce)
            this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked;
        this.numberOfChecks++;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* wtfLeave */])(s);
    };
    /**
     *  Overwritten by implementations
     * @param {?} throwOnChange
     * @return {?}
     */
    AppView.prototype.detectChangesInternal = function (throwOnChange) { };
    /**
     * @return {?}
     */
    AppView.prototype.markAsCheckOnce = function () { this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce; };
    /**
     * @return {?}
     */
    AppView.prototype.markPathToRootAsCheckOnce = function () {
        var /** @type {?} */ c = this;
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(c) && c.cdMode !== __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Detached) {
            if (c.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked) {
                c.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce;
            }
            if (c.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT) {
                c = c.parentView;
            }
            else {
                c = c.viewContainer ? c.viewContainer.parentView : null;
            }
        }
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    AppView.prototype.eventHandler = function (cb) {
        return cb;
    };
    /**
     * @param {?} details
     * @return {?}
     */
    AppView.prototype.throwDestroyedError = function (details) { throw new __WEBPACK_IMPORTED_MODULE_7__errors__["b" /* ViewDestroyedError */](details); };
    return AppView;
}());
function AppView_tsickle_Closure_declarations() {
    /** @type {?} */
    AppView.prototype.ref;
    /** @type {?} */
    AppView.prototype.lastRootNode;
    /** @type {?} */
    AppView.prototype.allNodes;
    /** @type {?} */
    AppView.prototype.disposables;
    /** @type {?} */
    AppView.prototype.viewContainer;
    /** @type {?} */
    AppView.prototype.appRef;
    /** @type {?} */
    AppView.prototype.numberOfChecks;
    /** @type {?} */
    AppView.prototype.renderer;
    /** @type {?} */
    AppView.prototype._hasExternalHostElement;
    /** @type {?} */
    AppView.prototype._hostInjector;
    /** @type {?} */
    AppView.prototype._hostProjectableNodes;
    /** @type {?} */
    AppView.prototype._animationContext;
    /** @type {?} */
    AppView.prototype._directRenderer;
    /** @type {?} */
    AppView.prototype.context;
    /** @type {?} */
    AppView.prototype.clazz;
    /** @type {?} */
    AppView.prototype.componentType;
    /** @type {?} */
    AppView.prototype.type;
    /** @type {?} */
    AppView.prototype.viewUtils;
    /** @type {?} */
    AppView.prototype.parentView;
    /** @type {?} */
    AppView.prototype.parentIndex;
    /** @type {?} */
    AppView.prototype.parentElement;
    /** @type {?} */
    AppView.prototype.cdMode;
    /** @type {?} */
    AppView.prototype.declaredViewContainer;
}
var DebugAppView = (function (_super) {
    __extends(DebugAppView, _super);
    /**
     * @param {?} clazz
     * @param {?} componentType
     * @param {?} type
     * @param {?} viewUtils
     * @param {?} parentView
     * @param {?} parentIndex
     * @param {?} parentNode
     * @param {?} cdMode
     * @param {?} staticNodeDebugInfos
     * @param {?=} declaredViewContainer
     */
    function DebugAppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, staticNodeDebugInfos, declaredViewContainer) {
        if (declaredViewContainer === void 0) { declaredViewContainer = null; }
        _super.call(this, clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, declaredViewContainer);
        this.staticNodeDebugInfos = staticNodeDebugInfos;
        this._currentDebugContext = null;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    DebugAppView.prototype.create = function (context) {
        this._resetDebug();
        try {
            return _super.prototype.create.call(this, context);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @param {?} rootSelectorOrNode
     * @param {?} injector
     * @param {?=} projectableNodes
     * @return {?}
     */
    DebugAppView.prototype.createHostView = function (rootSelectorOrNode, injector, projectableNodes) {
        if (projectableNodes === void 0) { projectableNodes = null; }
        this._resetDebug();
        try {
            return _super.prototype.createHostView.call(this, rootSelectorOrNode, injector, projectableNodes);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @param {?} token
     * @param {?} nodeIndex
     * @param {?=} notFoundResult
     * @return {?}
     */
    DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
        this._resetDebug();
        try {
            return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @return {?}
     */
    DebugAppView.prototype.detach = function () {
        this._resetDebug();
        try {
            _super.prototype.detach.call(this);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @return {?}
     */
    DebugAppView.prototype.destroy = function () {
        this._resetDebug();
        try {
            _super.prototype.destroy.call(this);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @param {?} throwOnChange
     * @return {?}
     */
    DebugAppView.prototype.detectChanges = function (throwOnChange) {
        this._resetDebug();
        try {
            _super.prototype.detectChanges.call(this, throwOnChange);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    /**
     * @return {?}
     */
    DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
    /**
     * @param {?} nodeIndex
     * @param {?} rowNum
     * @param {?} colNum
     * @return {?}
     */
    DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
        return this._currentDebugContext = new __WEBPACK_IMPORTED_MODULE_5__debug_context__["a" /* DebugContext */](this, nodeIndex, rowNum, colNum);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DebugAppView.prototype._rethrowWithContext = function (e) {
        if (!(e instanceof __WEBPACK_IMPORTED_MODULE_7__errors__["c" /* ViewWrappedError */])) {
            if (!(e instanceof __WEBPACK_IMPORTED_MODULE_7__errors__["a" /* ExpressionChangedAfterItHasBeenCheckedError */])) {
                this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Errored;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(this._currentDebugContext)) {
                throw new __WEBPACK_IMPORTED_MODULE_7__errors__["c" /* ViewWrappedError */](e, this._currentDebugContext);
            }
        }
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    DebugAppView.prototype.eventHandler = function (cb) {
        var _this = this;
        var /** @type {?} */ superHandler = _super.prototype.eventHandler.call(this, cb);
        return function (eventName, event) {
            _this._resetDebug();
            try {
                return superHandler.call(_this, eventName, event);
            }
            catch (e) {
                _this._rethrowWithContext(e);
                throw e;
            }
        };
    };
    return DebugAppView;
}(AppView));
function DebugAppView_tsickle_Closure_declarations() {
    /** @type {?} */
    DebugAppView.prototype._currentDebugContext;
    /** @type {?} */
    DebugAppView.prototype.staticNodeDebugInfos;
}
//# sourceMappingURL=view.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_container_ref__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_type__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewContainer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 *  A ViewContainer is created for elements that have a ViewContainerRef
  * to keep track of the nested views.
 */
var ViewContainer = (function () {
    /**
     * @param {?} index
     * @param {?} parentIndex
     * @param {?} parentView
     * @param {?} nativeElement
     */
    function ViewContainer(index, parentIndex, parentView, nativeElement) {
        this.index = index;
        this.parentIndex = parentIndex;
        this.parentView = parentView;
        this.nativeElement = nativeElement;
    }
    Object.defineProperty(ViewContainer.prototype, "elementRef", {
        /**
         * @return {?}
         */
        get: function () { return new __WEBPACK_IMPORTED_MODULE_0__element_ref__["a" /* ElementRef */](this.nativeElement); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "vcRef", {
        /**
         * @return {?}
         */
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__view_container_ref__["a" /* ViewContainerRef_ */](this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "parentInjector", {
        /**
         * @return {?}
         */
        get: function () { return this.parentView.injector(this.parentIndex); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "injector", {
        /**
         * @return {?}
         */
        get: function () { return this.parentView.injector(this.index); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} throwOnChange
     * @return {?}
     */
    ViewContainer.prototype.detectChangesInNestedViews = function (throwOnChange) {
        if (this.nestedViews) {
            for (var /** @type {?} */ i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].detectChanges(throwOnChange);
            }
        }
    };
    /**
     * @return {?}
     */
    ViewContainer.prototype.destroyNestedViews = function () {
        if (this.nestedViews) {
            for (var /** @type {?} */ i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].destroy();
            }
        }
    };
    /**
     * @param {?} cb
     * @param {?} c
     * @return {?}
     */
    ViewContainer.prototype.visitNestedViewRootNodes = function (cb, c) {
        if (this.nestedViews) {
            for (var /** @type {?} */ i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].visitRootNodesInternal(cb, c);
            }
        }
    };
    /**
     * @param {?} nestedViewClass
     * @param {?} callback
     * @return {?}
     */
    ViewContainer.prototype.mapNestedViews = function (nestedViewClass, callback) {
        var /** @type {?} */ result = [];
        if (this.nestedViews) {
            for (var /** @type {?} */ i = 0; i < this.nestedViews.length; i++) {
                var /** @type {?} */ nestedView = this.nestedViews[i];
                if (nestedView.clazz === nestedViewClass) {
                    result.push(callback(nestedView));
                }
            }
        }
        if (this.projectedViews) {
            for (var /** @type {?} */ i = 0; i < this.projectedViews.length; i++) {
                var /** @type {?} */ projectedView = this.projectedViews[i];
                if (projectedView.clazz === nestedViewClass) {
                    result.push(callback(projectedView));
                }
            }
        }
        return result;
    };
    /**
     * @param {?} view
     * @param {?} currentIndex
     * @return {?}
     */
    ViewContainer.prototype.moveView = function (view, currentIndex) {
        var /** @type {?} */ previousIndex = this.nestedViews.indexOf(view);
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        var /** @type {?} */ nestedViews = this.nestedViews;
        if (nestedViews == null) {
            nestedViews = [];
            this.nestedViews = nestedViews;
        }
        nestedViews.splice(previousIndex, 1);
        nestedViews.splice(currentIndex, 0, view);
        var /** @type {?} */ prevView = currentIndex > 0 ? nestedViews[currentIndex - 1] : null;
        view.moveAfter(this, prevView);
    };
    /**
     * @param {?} view
     * @param {?} viewIndex
     * @return {?}
     */
    ViewContainer.prototype.attachView = function (view, viewIndex) {
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        var /** @type {?} */ nestedViews = this.nestedViews;
        if (nestedViews == null) {
            nestedViews = [];
            this.nestedViews = nestedViews;
        }
        // perf: array.push is faster than array.splice!
        if (viewIndex >= nestedViews.length) {
            nestedViews.push(view);
        }
        else {
            nestedViews.splice(viewIndex, 0, view);
        }
        var /** @type {?} */ prevView = viewIndex > 0 ? nestedViews[viewIndex - 1] : null;
        view.attachAfter(this, prevView);
    };
    /**
     * @param {?} viewIndex
     * @return {?}
     */
    ViewContainer.prototype.detachView = function (viewIndex) {
        var /** @type {?} */ view = this.nestedViews[viewIndex];
        // perf: array.pop is faster than array.splice!
        if (viewIndex >= this.nestedViews.length - 1) {
            this.nestedViews.pop();
        }
        else {
            this.nestedViews.splice(viewIndex, 1);
        }
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        view.detach();
        return view;
    };
    return ViewContainer;
}());
function ViewContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ViewContainer.prototype.nestedViews;
    /** @type {?} */
    ViewContainer.prototype.projectedViews;
    /** @type {?} */
    ViewContainer.prototype.index;
    /** @type {?} */
    ViewContainer.prototype.parentIndex;
    /** @type {?} */
    ViewContainer.prototype.parentView;
    /** @type {?} */
    ViewContainer.prototype.nativeElement;
}
//# sourceMappingURL=view_container.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_decorators__ = __webpack_require__(3);
/* unused harmony export ANALYZE_FOR_ENTRY_COMPONENTS */
/* unused harmony export Attribute */
/* unused harmony export Query */
/* unused harmony export ContentChildren */
/* unused harmony export ContentChild */
/* unused harmony export ViewChildren */
/* unused harmony export ViewChild */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * This token can be used to create a virtual provider that will populate the
 * `entryComponents` fields of components and ng modules based on its `useValue`.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) will be added to the `entryComponents` property.
 *
 * ### Example
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on the router configuration which refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * @NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * @experimental
 */
var /** @type {?} */ ANALYZE_FOR_ENTRY_COMPONENTS = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('AnalyzeForEntryComponents');
/**
 * Attribute decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Attribute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["a" /* makeParamDecorator */])('Attribute', [['attributeName', undefined]]);
/**
 *  Base class for query metadata.
  * *
  * See {@link ContentChildren}, {@link ContentChild}, {@link ViewChildren}, {@link ViewChild} for
  * more information.
  * *
 * @abstract
 */
var Query = (function () {
    function Query() {
    }
    return Query;
}());
/**
 * ContentChildren decorator and metadata.
 *
 *  @stable
 *  @Annotation
 */
var /** @type {?} */ ContentChildren = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('ContentChildren', [
    ['selector', undefined], {
        first: false,
        isViewQuery: false,
        descendants: false,
        read: undefined,
    }
], Query));
/**
 * @whatItDoes Configures a content query.
 *
 * @howToUse
 *
 * {@example core/di/ts/contentChild/content_child_howto.ts region='HowTo'}
 *
 * @description
 *
 * You can use ContentChild to get the first element or the directive matching the selector from the
 * content DOM. If the content DOM changes, and a new child matches the selector,
 * the property will be updated.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * **Metadata Properties**:
 *
 * * **selector** - the directive type or the name used for querying.
 * * **read** - read a different token from the queried element.
 *
 * Let's look at an example:
 *
 * {@example core/di/ts/contentChild/content_child_example.ts region='Component'}
 *
 * **npm package**: `@angular/core`
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ ContentChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('ContentChild', [
    ['selector', undefined], {
        first: true,
        isViewQuery: false,
        descendants: true,
        read: undefined,
    }
], Query);
/**
 * @whatItDoes Configures a view query.
 *
 * @howToUse
 *
 * {@example core/di/ts/viewChildren/view_children_howto.ts region='HowTo'}
 *
 * @description
 *
 * You can use ViewChildren to get the {@link QueryList} of elements or directives from the
 * view DOM. Any time a child element is added, removed, or moved, the query list will be updated,
 * and the changes observable of the query list will emit a new value.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * **Metadata Properties**:
 *
 * * **selector** - the directive type or the name used for querying.
 * * **read** - read a different token from the queried elements.
 *
 * Let's look at an example:
 *
 * {@example core/di/ts/viewChildren/view_children_example.ts region='Component'}
 *
 * **npm package**: `@angular/core`
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ ViewChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('ViewChildren', [
    ['selector', undefined], {
        first: false,
        isViewQuery: true,
        descendants: true,
        read: undefined,
    }
], Query);
/**
 * ViewChild decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ ViewChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('ViewChild', [
    ['selector', undefined], {
        first: true,
        isViewQuery: true,
        descendants: true,
        read: undefined,
    }
], Query);
//# sourceMappingURL=di.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_decorators__ = __webpack_require__(3);
/* unused harmony export Directive */
/* unused harmony export Component */
/* unused harmony export Pipe */
/* unused harmony export Input */
/* unused harmony export Output */
/* unused harmony export HostBinding */
/* unused harmony export HostListener */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * Directive decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Directive = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makeDecorator */])('Directive', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    providers: undefined,
    exportAs: undefined,
    queries: undefined
}));
/**
 * Component decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Component = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makeDecorator */])('Component', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    exportAs: undefined,
    moduleId: undefined,
    providers: undefined,
    viewProviders: undefined,
    changeDetection: __WEBPACK_IMPORTED_MODULE_0__change_detection_constants__["a" /* ChangeDetectionStrategy */].Default,
    queries: undefined,
    templateUrl: undefined,
    template: undefined,
    styleUrls: undefined,
    styles: undefined,
    animations: undefined,
    encapsulation: undefined,
    interpolation: undefined,
    entryComponents: undefined
}, Directive));
/**
 * Pipe decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Pipe = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makeDecorator */])('Pipe', {
    name: undefined,
    pure: true,
}));
/**
 * Input decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('Input', [['bindingPropertyName', undefined]]);
/**
 * Output decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ Output = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('Output', [['bindingPropertyName', undefined]]);
/**
 * HostBinding decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ HostBinding = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('HostBinding', [['hostPropertyName', undefined]]);
/**
 * HostListener decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ HostListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makePropDecorator */])('HostListener', [['eventName', undefined], ['args', []]]);
//# sourceMappingURL=directives.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(3);
/* unused harmony export CUSTOM_ELEMENTS_SCHEMA */
/* unused harmony export NO_ERRORS_SCHEMA */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Defines a schema that will allow:
 * - any non-Angular elements with a `-` in their name,
 * - any properties on elements with a `-` in their name which is the common rule for custom
 * elements.
 *
 * @stable
 */
var /** @type {?} */ CUSTOM_ELEMENTS_SCHEMA = {
    name: 'custom-elements'
};
/**
 * Defines a schema that will allow any property on any element.
 *
 * @experimental
 */
var /** @type {?} */ NO_ERRORS_SCHEMA = {
    name: 'no-errors-schema'
};
/**
 * NgModule decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var /** @type {?} */ NgModule = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["b" /* makeDecorator */])('NgModule', {
    providers: undefined,
    declarations: undefined,
    imports: undefined,
    exports: undefined,
    entryComponents: undefined,
    bootstrap: undefined,
    schemas: undefined,
    id: undefined,
}));
//# sourceMappingURL=ng_module.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_ref__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__console__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reflection_reflector_reader__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testability_testability__ = __webpack_require__(32);
/* unused harmony export platformCore */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @return {?}
 */
function _reflector() {
    return __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["a" /* reflector */];
}
var /** @type {?} */ _CORE_PLATFORM_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__application_ref__["a" /* PlatformRef_ */],
    { provide: __WEBPACK_IMPORTED_MODULE_0__application_ref__["b" /* PlatformRef */], useExisting: __WEBPACK_IMPORTED_MODULE_0__application_ref__["a" /* PlatformRef_ */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["b" /* Reflector */], useFactory: _reflector, deps: [] },
    { provide: __WEBPACK_IMPORTED_MODULE_3__reflection_reflector_reader__["a" /* ReflectorReader */], useExisting: __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["b" /* Reflector */] },
    __WEBPACK_IMPORTED_MODULE_4__testability_testability__["b" /* TestabilityRegistry */],
    __WEBPACK_IMPORTED_MODULE_1__console__["a" /* Console */],
];
/**
 * This platform has to be included in any other platform
 *
 * @experimental
 */
var /** @type {?} */ platformCore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__application_ref__["c" /* createPlatformFactory */])(null, 'core', _CORE_PLATFORM_PROVIDERS);
//# sourceMappingURL=platform_core_providers.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = detectWTF;
/* harmony export (immutable) */ exports["b"] = createScope;
/* harmony export (immutable) */ exports["c"] = leave;
/* harmony export (immutable) */ exports["d"] = startTimeRange;
/* harmony export (immutable) */ exports["e"] = endTimeRange;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var /** @type {?} */ trace;
var /** @type {?} */ events;
/**
 * @return {?}
 */
function detectWTF() {
    var /** @type {?} */ wtf = ((__WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */]) /** TODO #9100 */)['wtf'];
    if (wtf) {
        trace = wtf['trace'];
        if (trace) {
            events = trace['events'];
            return true;
        }
    }
    return false;
}
/**
 * @param {?} signature
 * @param {?=} flags
 * @return {?}
 */
function createScope(signature, flags) {
    if (flags === void 0) { flags = null; }
    return events.createScope(signature, flags);
}
/**
 * @param {?} scope
 * @param {?=} returnValue
 * @return {?}
 */
function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
}
/**
 * @param {?} rangeType
 * @param {?} action
 * @return {?}
 */
function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
}
/**
 * @param {?} range
 * @return {?}
 */
function endTimeRange(range) {
    trace.endTimeRange(range);
}
//# sourceMappingURL=wtf_impl.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_api__ = __webpack_require__(31);
/* unused harmony reexport RenderComponentType */
/* unused harmony reexport Renderer */
/* unused harmony reexport RootRenderer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for render

//# sourceMappingURL=render.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(3);
/* unused harmony reexport Class */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for util

//# sourceMappingURL=util.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zone_ng_zone__ = __webpack_require__(17);
/* unused harmony reexport NgZone */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for Zone

//# sourceMappingURL=zone.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export isPresent */
/* unused harmony export isType */
/* unused harmony export DELEGATE_CTOR */
/* unused harmony export MinimalReflector */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return reflector; });
function isPresent(obj) {
    return obj != null;
}
function isType(v) {
    return typeof v === 'function';
}
/**
 * Attention: This regex has to hold even if the code is minified!
 */
var DELEGATE_CTOR = /^function\s+\S+\(\)\s*{\s*("use strict";)?\s*(return\s+)?(\S+\s+!==\s+null\s+&&\s+)?\S+\.apply\(this,\s*arguments\)/;
var MinimalReflector = (function () {
    function MinimalReflector(reflect) {
        this._reflect = reflect || global.Reflect;
    }
    MinimalReflector.prototype.factory = function (t) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return new (t.bind.apply(t, [void 0].concat(args)))();
    }; };
    /** @internal */
    MinimalReflector.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] !== Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (paramAnnotations && isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    MinimalReflector.prototype._ownParameters = function (type, parentCtor) {
        // If we have no decorators, we only have function.length as metadata.
        // In that case, to detect whether a child class declared an own constructor or not,
        // we need to look inside of that constructor to check whether it is
        // just calling the parent.
        // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
        // that sets 'design:paramtypes' to []
        // if a class inherits from another class but has no ctor declared itself.
        if (DELEGATE_CTOR.exec(type.toString())) {
            return null;
        }
        // Prefer the direct API.
        if (type.parameters && type.parameters !== parentCtor.parameters) {
            return type.parameters;
        }
        // API of tsickle for lowering decorators to properties on the class.
        var tsickleCtorParams = type.ctorParameters;
        if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
            // Newer tsickle uses a function closure
            // Retain the non-function case for compatibility with older tsickle
            var ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
            var paramTypes = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
            var paramAnnotations = ctorParameters.map(function (ctorParam) {
                return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
            });
            return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
        // API for metadata created by invoking the decorators.
        if (isPresent(this._reflect) && isPresent(this._reflect.getOwnMetadata)) {
            var paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
            var paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
            if (paramTypes || paramAnnotations) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // If a class has no decorators, at least create metadata
        // based on function.length.
        // Note: We know that this is a real constructor as we checked
        // the content of the constructor above.
        return new Array(type.length).fill(undefined);
    };
    MinimalReflector.prototype.parameters = function (type) {
        // Note: only report metadata if we have at least one class decorator
        // to stay in sync with the static reflector.
        if (!isType(type)) {
            return [];
        }
        var parentCtor = getParentCtor(type);
        var parameters = this._ownParameters(type, parentCtor);
        if (!parameters && parentCtor !== Object) {
            parameters = this.parameters(parentCtor);
        }
        return parameters || [];
    };
    return MinimalReflector;
}());
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
        return [];
    }
    return decoratorInvocations.map(function (decoratorInvocation) {
        var decoratorType = decoratorInvocation.type;
        var annotationCls = decoratorType.annotationCls;
        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
        return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
}
function getParentCtor(ctor) {
    var parentProto = Object.getPrototypeOf(ctor.prototype);
    var parentCtor = parentProto ? parentProto.constructor : null;
    // Note: We always use `Object` as the null value
    // to simplify checking later on.
    return parentCtor || Object;
}
var reflector = new MinimalReflector();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minimal_reflector__ = __webpack_require__(94);
/* harmony export (immutable) */ exports["a"] = ProvideOnce;


function ProvideOnce(input) {
    var _this = this;
    return {
        provide: input,
        deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* SkipSelf */](), input]].concat(__WEBPACK_IMPORTED_MODULE_1__minimal_reflector__["a" /* reflector */].parameters(input)),
        useFactory: function (parent) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return parent || __WEBPACK_IMPORTED_MODULE_1__minimal_reflector__["a" /* reflector */].factory(input).apply(_this, args.slice());
        }
    };
}


/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(66);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ProvideOnce", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });



/***/ }
/******/ ]);
});