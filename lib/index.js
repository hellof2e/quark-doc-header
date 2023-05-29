import '@docsearch/css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

var tslib_es6 = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var wrapNativeSuper = {exports: {}};

var getPrototypeOf = {exports: {}};

(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(getPrototypeOf);
var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf.exports);

var setPrototypeOf = {exports: {}};

(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(setPrototypeOf);

var isNativeFunction = {exports: {}};

(function (module) {
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(isNativeFunction);

var construct = {exports: {}};

var isNativeReflectConstruct = {exports: {}};

(function (module) {
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(isNativeReflectConstruct);

(function (module) {
  var setPrototypeOf$1 = setPrototypeOf.exports;
  var isNativeReflectConstruct$1 = isNativeReflectConstruct.exports;
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct$1()) {
      module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf$1(instance, Class.prototype);
        return instance;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
    return _construct.apply(null, arguments);
  }
  module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(construct);

(function (module) {
  var getPrototypeOf$1 = getPrototypeOf.exports;
  var setPrototypeOf$1 = setPrototypeOf.exports;
  var isNativeFunction$1 = isNativeFunction.exports;
  var construct$1 = construct.exports;
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction$1(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct$1(Class, arguments, getPrototypeOf$1(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf$1(Wrapper, Class);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _wrapNativeSuper(Class);
  }
  module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(wrapNativeSuper);
var _wrapNativeSuper = /*@__PURE__*/getDefaultExportFromCjs(wrapNativeSuper.exports);

var defineProperty = {exports: {}};

var toPropertyKey = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);

var toPrimitive = {exports: {}};

(function (module) {
  var _typeof$1 = _typeof.exports["default"];
  function _toPrimitive(input, hint) {
    if (_typeof$1(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toPrimitive);

(function (module) {
  var _typeof$1 = _typeof.exports["default"];
  var toPrimitive$1 = toPrimitive.exports;
  function _toPropertyKey(arg) {
    var key = toPrimitive$1(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }
  module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toPropertyKey);

(function (module) {
  var toPropertyKey$1 = toPropertyKey.exports;
  function _defineProperty(obj, key, value) {
    key = toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);
var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty.exports);

var classCallCheck = {exports: {}};

(function (module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(classCallCheck);
var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

var createClass = {exports: {}};

(function (module) {
  var toPropertyKey$1 = toPropertyKey.exports;
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(createClass);
var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

var assertThisInitialized = {exports: {}};

(function (module) {
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(assertThisInitialized);
var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized.exports);

var inherits = {exports: {}};

(function (module) {
  var setPrototypeOf$1 = setPrototypeOf.exports;
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) setPrototypeOf$1(subClass, superClass);
  }
  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(inherits);
var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits.exports);

var possibleConstructorReturn = {exports: {}};

(function (module) {
  var _typeof$1 = _typeof.exports["default"];
  var assertThisInitialized$1 = assertThisInitialized.exports;
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return assertThisInitialized$1(self);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(possibleConstructorReturn);
var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn.exports);

var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */
function assign(obj, props) {
  // @ts-ignore We change the type of `obj` to be `O & P`
  for (var i in props) obj[i] = props[i];
  return (/** @type {O & P} */obj
  );
}

/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {Node} node The node to remove
 */
function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;

/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {import('../internal').VNode} vnode The vnode that threw
 * the error that was caught (except for unmounting when this parameter
 * is the highest parent that was being unmounted)
 * @param {import('../internal').VNode} [oldVNode]
 * @param {import('../internal').ErrorInfo} [errorInfo]
 */
function _catchError(error, vnode, oldVNode, errorInfo) {
  /** @type {import('../internal').Component} */
  var component, ctor, handled;
  for (; vnode = vnode._parent;) {
    if ((component = vnode._component) && !component._processingException) {
      try {
        ctor = component.constructor;
        if (ctor && ctor.getDerivedStateFromError != null) {
          component.setState(ctor.getDerivedStateFromError(error));
          handled = component._dirty;
        }
        if (component.componentDidCatch != null) {
          component.componentDidCatch(error, errorInfo || {});
          handled = component._dirty;
        }

        // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
        if (handled) {
          return component._pendingError = component;
        }
      } catch (e) {
        error = e;
      }
    }
  }
  throw error;
}

/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {import('./internal').Options}
 */
var options = {
  _catchError: _catchError
};

var vnodeId = 0;

/**
 * Create an virtual node (used for JSX)
 * @param {import('./internal').VNode["type"]} type The node name or Component
 * constructor for this virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the virtual node
 * @returns {import('./internal').VNode}
 */
function createElement(type, props, children) {
  var normalizedProps = {},
    key,
    ref,
    i;
  for (i in props) {
    if (i == 'key') key = props[i];else if (i == 'ref') ref = props[i];else normalizedProps[i] = props[i];
  }
  if (arguments.length > 2) {
    normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
  }

  // If a Component VNode, check for and apply defaultProps
  // Note: type may be undefined in development, must never error here.
  if (typeof type == 'function' && type.defaultProps != null) {
    for (i in type.defaultProps) {
      if (normalizedProps[i] === undefined) {
        normalizedProps[i] = type.defaultProps[i];
      }
    }
  }
  return createVNode(type, normalizedProps, key, ref, null);
}

/**
 * Create a VNode (used internally by Preact)
 * @param {import('./internal').VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {import('./internal').VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {import('./internal').VNode}
 */
function createVNode(type, props, key, ref, original) {
  // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
  // Do not inline into createElement and coerceToVNode!
  var vnode = {
    type: type,
    props: props,
    key: key,
    ref: ref,
    _children: null,
    _parent: null,
    _depth: 0,
    _dom: null,
    // _nextDom must be initialized to undefined b/c it will eventually
    // be set to dom.nextSibling which can return `null` and it is important
    // to be able to distinguish between an uninitialized _nextDom and
    // a _nextDom that has been set to `null`
    _nextDom: undefined,
    _component: null,
    _hydrating: null,
    constructor: undefined,
    _original: original == null ? ++vnodeId : original
  };

  // Only invoke the vnode hook if this was *not* a direct copy:
  if (original == null && options.vnode != null) options.vnode(vnode);
  return vnode;
}
function createRef() {
  return {
    current: null
  };
}
function Fragment(props) {
  return props.children;
}

/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */
function Component(props, context) {
  this.props = props;
  this.context = context;
}

/**
 * Update component state and schedule a re-render.
 * @this {import('./internal').Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */
Component.prototype.setState = function (update, callback) {
  // only clone state when copying to nextState the first time.
  var s;
  if (this._nextState != null && this._nextState !== this.state) {
    s = this._nextState;
  } else {
    s = this._nextState = assign({}, this.state);
  }
  if (typeof update == 'function') {
    // Some libraries like `immer` mark the current state as readonly,
    // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
  }
  if (update) {
    assign(s, update);
  }

  // Skip update if updater function returned null
  if (update == null) return;
  if (this._vnode) {
    if (callback) {
      this._stateCallbacks.push(callback);
    }
    enqueueRender(this);
  }
};

/**
 * Immediately perform a synchronous re-render of the component
 * @this {import('./internal').Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */
Component.prototype.forceUpdate = function (callback) {
  if (this._vnode) {
    // Set render mode so that we can differentiate where the render request
    // is coming from. We need this because forceUpdate should never call
    // shouldComponentUpdate
    this._force = true;
    if (callback) this._renderCallbacks.push(callback);
    enqueueRender(this);
  }
};

/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {import('./index').ComponentChildren | void}
 */
Component.prototype.render = Fragment;

/**
 * @param {import('./internal').VNode} vnode
 * @param {number | null} [childIndex]
 */
function getDomSibling(vnode, childIndex) {
  if (childIndex == null) {
    // Use childIndex==null as a signal to resume the search from the vnode's sibling
    return vnode._parent ? getDomSibling(vnode._parent, vnode._parent._children.indexOf(vnode) + 1) : null;
  }
  var sibling;
  for (; childIndex < vnode._children.length; childIndex++) {
    sibling = vnode._children[childIndex];
    if (sibling != null && sibling._dom != null) {
      // Since updateParentDomPointers keeps _dom pointer correct,
      // we can rely on _dom to tell us if this subtree contains a
      // rendered DOM node, and what the first rendered DOM node is
      return sibling._dom;
    }
  }

  // If we get here, we have not found a DOM node in this vnode's children.
  // We must resume from this vnode's sibling (in it's parent _children array)
  // Only climb up and search the parent if we aren't searching through a DOM
  // VNode (meaning we reached the DOM parent of the original vnode that began
  // the search)
  return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}

/**
 * Trigger in-place re-rendering of a component.
 * @param {import('./internal').Component} component The component to rerender
 */
function renderComponent(component) {
  var vnode = component._vnode,
    oldDom = vnode._dom,
    parentDom = component._parentDom;
  if (parentDom) {
    var commitQueue = [];
    var oldVNode = assign({}, vnode);
    oldVNode._original = vnode._original + 1;
    diff(parentDom, vnode, oldVNode, component._globalContext, parentDom.ownerSVGElement !== undefined, vnode._hydrating != null ? [oldDom] : null, commitQueue, oldDom == null ? getDomSibling(vnode) : oldDom, vnode._hydrating);
    commitRoot(commitQueue, vnode);
    if (vnode._dom != oldDom) {
      updateParentDomPointers(vnode);
    }
  }
}

/**
 * @param {import('./internal').VNode} vnode
 */
function updateParentDomPointers(vnode) {
  if ((vnode = vnode._parent) != null && vnode._component != null) {
    vnode._dom = vnode._component.base = null;
    for (var i = 0; i < vnode._children.length; i++) {
      var child = vnode._children[i];
      if (child != null && child._dom != null) {
        vnode._dom = vnode._component.base = child._dom;
        break;
      }
    }
    return updateParentDomPointers(vnode);
  }
}

/**
 * The render queue
 * @type {Array<import('./internal').Component>}
 */
var rerenderQueue = [];

/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */

var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

/**
 * Enqueue a rerender of a component
 * @param {import('./internal').Component} c The component to rerender
 */
function enqueueRender(c) {
  if (!c._dirty && (c._dirty = true) && rerenderQueue.push(c) && !process$1._rerenderCount++ || prevDebounce !== options.debounceRendering) {
    prevDebounce = options.debounceRendering;
    (prevDebounce || defer)(process$1);
  }
}

/**
 * @param {import('./internal').Component} a
 * @param {import('./internal').Component} b
 */
var depthSort = function depthSort(a, b) {
  return a._vnode._depth - b._vnode._depth;
};

/** Flush the render queue by rerendering all queued components */
function process$1() {
  var c;
  rerenderQueue.sort(depthSort);
  // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
  // process() calls from getting scheduled while `queue` is still being consumed.
  while (c = rerenderQueue.shift()) {
    if (c._dirty) {
      var renderQueueLength = rerenderQueue.length;
      renderComponent(c);
      if (rerenderQueue.length > renderQueueLength) {
        // When i.e. rerendering a provider additional new items can be injected, we want to
        // keep the order from top to bottom with those new items so we can handle them in a
        // single pass
        rerenderQueue.sort(depthSort);
      }
    }
  }
  process$1._rerenderCount = 0;
}
process$1._rerenderCount = 0;

/**
 * Diff the children of a virtual node
 * @param {import('../internal').PreactElement} parentDom The DOM element whose
 * children are being diffed
 * @param {import('../internal').ComponentChildren[]} renderResult
 * @param {import('../internal').VNode} newParentVNode The new virtual
 * node whose children should be diff'ed against oldParentVNode
 * @param {import('../internal').VNode} oldParentVNode The old virtual
 * node whose children should be diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by getChildContext
 * @param {boolean} isSvg Whether or not this DOM node is an SVG node
 * @param {Array<import('../internal').PreactElement>} excessDomChildren
 * @param {Array<import('../internal').Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {import('../internal').PreactElement} oldDom The current attached DOM
 * element any new dom elements should be placed around. Likely `null` on first
 * render (except when hydrating). Can be a sibling DOM element when diffing
 * Fragments that have siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 */
function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
  var i, j, oldVNode, childVNode, newDom, firstChildDom, refs;

  // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
  // as EMPTY_OBJ._children should be `undefined`.
  var oldChildren = oldParentVNode && oldParentVNode._children || EMPTY_ARR;
  var oldChildrenLength = oldChildren.length;
  newParentVNode._children = [];
  for (i = 0; i < renderResult.length; i++) {
    childVNode = renderResult[i];
    if (childVNode == null || typeof childVNode == 'boolean' || typeof childVNode == 'function') {
      childVNode = newParentVNode._children[i] = null;
    }

    // If this newVNode is being reused (e.g. <div>{reuse}{reuse}</div>) in the same diff,
    // or we are rendering a component (e.g. setState) copy the oldVNodes so it can have
    // it's own DOM & etc. pointers
    else if (typeof childVNode == 'string' || typeof childVNode == 'number' ||
    // eslint-disable-next-line valid-typeof
    typeof childVNode == 'bigint') {
      childVNode = newParentVNode._children[i] = createVNode(null, childVNode, null, null, childVNode);
    } else if (Array.isArray(childVNode)) {
      childVNode = newParentVNode._children[i] = createVNode(Fragment, {
        children: childVNode
      }, null, null, null);
    } else if (childVNode._depth > 0) {
      // VNode is already in use, clone it. This can happen in the following
      // scenario:
      //   const reuse = <div />
      //   <div>{reuse}<span />{reuse}</div>
      childVNode = newParentVNode._children[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode._original);
    } else {
      childVNode = newParentVNode._children[i] = childVNode;
    }

    // Terser removes the `continue` here and wraps the loop body
    // in a `if (childVNode) { ... } condition
    if (childVNode == null) {
      continue;
    }
    childVNode._parent = newParentVNode;
    childVNode._depth = newParentVNode._depth + 1;

    // Check if we find a corresponding element in oldChildren.
    // If found, delete the array item by setting to `undefined`.
    // We use `undefined`, as `null` is reserved for empty placeholders
    // (holes).
    oldVNode = oldChildren[i];
    if (oldVNode === null || oldVNode && childVNode.key == oldVNode.key && childVNode.type === oldVNode.type) {
      oldChildren[i] = undefined;
    } else {
      // Either oldVNode === undefined or oldChildrenLength > 0,
      // so after this loop oldVNode == null or oldVNode is a valid value.
      for (j = 0; j < oldChildrenLength; j++) {
        oldVNode = oldChildren[j];
        // If childVNode is unkeyed, we only match similarly unkeyed nodes, otherwise we match by key.
        // We always match by type (in either case).
        if (oldVNode && childVNode.key == oldVNode.key && childVNode.type === oldVNode.type) {
          oldChildren[j] = undefined;
          break;
        }
        oldVNode = null;
      }
    }
    oldVNode = oldVNode || EMPTY_OBJ;

    // Morph the old element into the new one, but don't append it to the dom yet
    diff(parentDom, childVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating);
    newDom = childVNode._dom;
    if ((j = childVNode.ref) && oldVNode.ref != j) {
      if (!refs) refs = [];
      if (oldVNode.ref) refs.push(oldVNode.ref, null, childVNode);
      refs.push(j, childVNode._component || newDom, childVNode);
    }
    if (newDom != null) {
      if (firstChildDom == null) {
        firstChildDom = newDom;
      }
      if (typeof childVNode.type == 'function' && childVNode._children === oldVNode._children) {
        childVNode._nextDom = oldDom = reorderChildren(childVNode, oldDom, parentDom);
      } else {
        oldDom = placeChild(parentDom, childVNode, oldVNode, oldChildren, newDom, oldDom);
      }
      if (typeof newParentVNode.type == 'function') {
        // Because the newParentVNode is Fragment-like, we need to set it's
        // _nextDom property to the nextSibling of its last child DOM node.
        //
        // `oldDom` contains the correct value here because if the last child
        // is a Fragment-like, then oldDom has already been set to that child's _nextDom.
        // If the last child is a DOM VNode, then oldDom will be set to that DOM
        // node's nextSibling.
        newParentVNode._nextDom = oldDom;
      }
    } else if (oldDom && oldVNode._dom == oldDom && oldDom.parentNode != parentDom) {
      // The above condition is to handle null placeholders. See test in placeholder.test.js:
      // `efficiently replace null placeholders in parent rerenders`
      oldDom = getDomSibling(oldVNode);
    }
  }
  newParentVNode._dom = firstChildDom;

  // Remove remaining oldChildren if there are any.
  for (i = oldChildrenLength; i--;) {
    if (oldChildren[i] != null) {
      if (typeof newParentVNode.type == 'function' && oldChildren[i]._dom != null && oldChildren[i]._dom == newParentVNode._nextDom) {
        // If the newParentVNode.__nextDom points to a dom node that is about to
        // be unmounted, then get the next sibling of that vnode and set
        // _nextDom to it
        newParentVNode._nextDom = getLastDom(oldParentVNode).nextSibling;
      }
      unmount(oldChildren[i], oldChildren[i]);
    }
  }

  // Set refs only after unmount
  if (refs) {
    for (i = 0; i < refs.length; i++) {
      applyRef(refs[i], refs[++i], refs[++i]);
    }
  }
}
function reorderChildren(childVNode, oldDom, parentDom) {
  // Note: VNodes in nested suspended trees may be missing _children.
  var c = childVNode._children;
  var tmp = 0;
  for (; c && tmp < c.length; tmp++) {
    var vnode = c[tmp];
    if (vnode) {
      // We typically enter this code path on sCU bailout, where we copy
      // oldVNode._children to newVNode._children. If that is the case, we need
      // to update the old children's _parent pointer to point to the newVNode
      // (childVNode here).
      vnode._parent = childVNode;
      if (typeof vnode.type == 'function') {
        oldDom = reorderChildren(vnode, oldDom, parentDom);
      } else {
        oldDom = placeChild(parentDom, vnode, vnode, c, vnode._dom, oldDom);
      }
    }
  }
  return oldDom;
}
function placeChild(parentDom, childVNode, oldVNode, oldChildren, newDom, oldDom) {
  var nextDom;
  if (childVNode._nextDom !== undefined) {
    // Only Fragments or components that return Fragment like VNodes will
    // have a non-undefined _nextDom. Continue the diff from the sibling
    // of last DOM child of this child VNode
    nextDom = childVNode._nextDom;

    // Eagerly cleanup _nextDom. We don't need to persist the value because
    // it is only used by `diffChildren` to determine where to resume the diff after
    // diffing Components and Fragments. Once we store it the nextDOM local var, we
    // can clean up the property
    childVNode._nextDom = undefined;
  } else if (oldVNode == null || newDom != oldDom || newDom.parentNode == null) {
    outer: if (oldDom == null || oldDom.parentNode !== parentDom) {
      parentDom.appendChild(newDom);
      nextDom = null;
    } else {
      // `j<oldChildrenLength; j+=2` is an alternative to `j++<oldChildrenLength/2`
      for (var sibDom = oldDom, j = 0; (sibDom = sibDom.nextSibling) && j < oldChildren.length; j += 1) {
        if (sibDom == newDom) {
          break outer;
        }
      }
      parentDom.insertBefore(newDom, oldDom);
      nextDom = oldDom;
    }
  }

  // If we have pre-calculated the nextDOM node, use it. Else calculate it now
  // Strictly check for `undefined` here cuz `null` is a valid value of `nextDom`.
  // See more detail in create-element.js:createVNode
  if (nextDom !== undefined) {
    oldDom = nextDom;
  } else {
    oldDom = newDom.nextSibling;
  }
  return oldDom;
}

/**
 * @param {import('../internal').VNode} vnode
 */
function getLastDom(vnode) {
  if (vnode.type == null || typeof vnode.type === 'string') {
    return vnode._dom;
  }
  if (vnode._children) {
    for (var i = vnode._children.length - 1; i >= 0; i--) {
      var child = vnode._children[i];
      if (child) {
        var lastDom = getLastDom(child);
        if (lastDom) {
          return lastDom;
        }
      }
    }
  }
  return null;
}

/**
 * Diff the old and new properties of a VNode and apply changes to the DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to apply
 * changes to
 * @param {object} newProps The new props
 * @param {object} oldProps The old props
 * @param {boolean} isSvg Whether or not this node is an SVG node
 * @param {boolean} hydrate Whether or not we are in hydration mode
 */
function diffProps(dom, newProps, oldProps, isSvg, hydrate) {
  var i;
  for (i in oldProps) {
    if (i !== 'children' && i !== 'key' && !(i in newProps)) {
      setProperty(dom, i, null, oldProps[i], isSvg);
    }
  }
  for (i in newProps) {
    if ((!hydrate || typeof newProps[i] == 'function') && i !== 'children' && i !== 'key' && i !== 'value' && i !== 'checked' && oldProps[i] !== newProps[i]) {
      setProperty(dom, i, newProps[i], oldProps[i], isSvg);
    }
  }
}
function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value == null ? '' : value);
  } else if (value == null) {
    style[key] = '';
  } else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}

/**
 * Set a property value on a DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {boolean} isSvg Whether or not this DOM node is an SVG node or not
 */
function setProperty(dom, name, value, oldValue, isSvg) {
  var useCapture;
  o: if (name === 'style') {
    if (typeof value == 'string') {
      dom.style.cssText = value;
    } else {
      if (typeof oldValue == 'string') {
        dom.style.cssText = oldValue = '';
      }
      if (oldValue) {
        for (name in oldValue) {
          if (!(value && name in value)) {
            setStyle(dom.style, name, '');
          }
        }
      }
      if (value) {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  }
  // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
    useCapture = name !== (name = name.replace(/Capture$/, ''));

    // Infer correct casing for DOM built-in events:
    if (name.toLowerCase() in dom) name = name.toLowerCase().slice(2);else name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name + useCapture] = value;
    if (value) {
      if (!oldValue) {
        var handler = useCapture ? eventProxyCapture : eventProxy;
        dom.addEventListener(name, handler, useCapture);
      }
    } else {
      var _handler = useCapture ? eventProxyCapture : eventProxy;
      dom.removeEventListener(name, _handler, useCapture);
    }
  } else if (name !== 'dangerouslySetInnerHTML') {
    if (isSvg) {
      // Normalize incorrect prop usage for SVG:
      // - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
      // - className --> class
      name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
    } else if (name !== 'width' && name !== 'height' && name !== 'href' && name !== 'list' && name !== 'form' &&
    // Default value in browsers is `-1` and an empty string is
    // cast to `0` instead
    name !== 'tabIndex' && name !== 'download' && name in dom) {
      try {
        dom[name] = value == null ? '' : value;
        // labelled break is 1b smaller here than a return statement (sorry)
        break o;
      } catch (e) {}
    }

    // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.

    if (typeof value === 'function') ; else if (value != null && (value !== false || name.indexOf('-') != -1)) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy(e) {
  return this._listeners[e.type + false](options.event ? options.event(e) : e);
}
function eventProxyCapture(e) {
  return this._listeners[e.type + true](options.event ? options.event(e) : e);
}

/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {import('../internal').PreactElement} parentDom The parent of the DOM element
 * @param {import('../internal').VNode} newVNode The new virtual node
 * @param {import('../internal').VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by getChildContext
 * @param {boolean} isSvg Whether or not this element is an SVG node
 * @param {Array<import('../internal').PreactElement>} excessDomChildren
 * @param {Array<import('../internal').Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {import('../internal').PreactElement} oldDom The current attached DOM
 * element any new dom elements should be placed around. Likely `null` on first
 * render (except when hydrating). Can be a sibling DOM element when diffing
 * Fragments that have siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} [isHydrating] Whether or not we are in hydration
 */
function diff(parentDom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
  var tmp,
    newType = newVNode.type;

  // When passing through createElement it assigns the object
  // constructor as undefined. This to prevent JSON-injection.
  if (newVNode.constructor !== undefined) return null;

  // If the previous diff bailed out, resume creating/hydrating.
  if (oldVNode._hydrating != null) {
    isHydrating = oldVNode._hydrating;
    oldDom = newVNode._dom = oldVNode._dom;
    // if we resume, we want the tree to be "unlocked"
    newVNode._hydrating = null;
    excessDomChildren = [oldDom];
  }
  if (tmp = options._diff) tmp(newVNode);
  try {
    outer: if (typeof newType == 'function') {
      var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
      var newProps = newVNode.props;

      // Necessary for createContext api. Setting this property will pass
      // the context value as `this.context` just for this component.
      tmp = newType.contextType;
      var provider = tmp && globalContext[tmp._id];
      var componentContext = tmp ? provider ? provider.props.value : tmp._defaultValue : globalContext;

      // Get component and set it to `c`
      if (oldVNode._component) {
        c = newVNode._component = oldVNode._component;
        clearProcessingException = c._processingException = c._pendingError;
      } else {
        // Instantiate the new component
        if ('prototype' in newType && newType.prototype.render) {
          // @ts-ignore The check above verifies that newType is suppose to be constructed
          newVNode._component = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
        } else {
          // @ts-ignore Trust me, Component implements the interface we want
          newVNode._component = c = new Component(newProps, componentContext);
          c.constructor = newType;
          c.render = doRender;
        }
        if (provider) provider.sub(c);
        c.props = newProps;
        if (!c.state) c.state = {};
        c.context = componentContext;
        c._globalContext = globalContext;
        isNew = c._dirty = true;
        c._renderCallbacks = [];
        c._stateCallbacks = [];
      }

      // Invoke getDerivedStateFromProps
      if (c._nextState == null) {
        c._nextState = c.state;
      }
      if (newType.getDerivedStateFromProps != null) {
        if (c._nextState == c.state) {
          c._nextState = assign({}, c._nextState);
        }
        assign(c._nextState, newType.getDerivedStateFromProps(newProps, c._nextState));
      }
      oldProps = c.props;
      oldState = c.state;
      c._vnode = newVNode;

      // Invoke pre-render lifecycle methods
      if (isNew) {
        if (newType.getDerivedStateFromProps == null && c.componentWillMount != null) {
          c.componentWillMount();
        }
        if (c.componentDidMount != null) {
          c._renderCallbacks.push(c.componentDidMount);
        }
      } else {
        if (newType.getDerivedStateFromProps == null && newProps !== oldProps && c.componentWillReceiveProps != null) {
          c.componentWillReceiveProps(newProps, componentContext);
        }
        if (!c._force && c.shouldComponentUpdate != null && c.shouldComponentUpdate(newProps, c._nextState, componentContext) === false || newVNode._original === oldVNode._original) {
          // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
          if (newVNode._original !== oldVNode._original) {
            // When we are dealing with a bail because of sCU we have to update
            // the props, state and dirty-state.
            // when we are dealing with strict-equality we don't as the child could still
            // be dirtied see #3883
            c.props = newProps;
            c.state = c._nextState;
            c._dirty = false;
          }

          // In cases of bailing due to strict-equality we have to reset force as well
          c._force = false;
          newVNode._dom = oldVNode._dom;
          newVNode._children = oldVNode._children;
          newVNode._children.forEach(function (vnode) {
            if (vnode) vnode._parent = newVNode;
          });
          for (var i = 0; i < c._stateCallbacks.length; i++) {
            c._renderCallbacks.push(c._stateCallbacks[i]);
          }
          c._stateCallbacks = [];
          if (c._renderCallbacks.length) {
            commitQueue.push(c);
          }
          break outer;
        }
        if (c.componentWillUpdate != null) {
          c.componentWillUpdate(newProps, c._nextState, componentContext);
        }
        if (c.componentDidUpdate != null) {
          c._renderCallbacks.push(function () {
            c.componentDidUpdate(oldProps, oldState, snapshot);
          });
        }
      }
      c.context = componentContext;
      c.props = newProps;
      c._parentDom = parentDom;
      var renderHook = options._render,
        count = 0;
      if ('prototype' in newType && newType.prototype.render) {
        c.state = c._nextState;
        c._dirty = false;
        if (renderHook) renderHook(newVNode);
        tmp = c.render(c.props, c.state, c.context);
        for (var _i = 0; _i < c._stateCallbacks.length; _i++) {
          c._renderCallbacks.push(c._stateCallbacks[_i]);
        }
        c._stateCallbacks = [];
      } else {
        do {
          c._dirty = false;
          if (renderHook) renderHook(newVNode);
          tmp = c.render(c.props, c.state, c.context);

          // Handle setState called in render, see #2553
          c.state = c._nextState;
        } while (c._dirty && ++count < 25);
      }

      // Handle setState called in render, see #2553
      c.state = c._nextState;
      if (c.getChildContext != null) {
        globalContext = assign(assign({}, globalContext), c.getChildContext());
      }
      if (!isNew && c.getSnapshotBeforeUpdate != null) {
        snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
      }
      var isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
      var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
      diffChildren(parentDom, Array.isArray(renderResult) ? renderResult : [renderResult], newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating);
      c.base = newVNode._dom;

      // We successfully rendered this VNode, unset any stored hydration/bailout state:
      newVNode._hydrating = null;
      if (c._renderCallbacks.length) {
        commitQueue.push(c);
      }
      if (clearProcessingException) {
        c._pendingError = c._processingException = null;
      }
      c._force = false;
    } else if (excessDomChildren == null && newVNode._original === oldVNode._original) {
      newVNode._children = oldVNode._children;
      newVNode._dom = oldVNode._dom;
    } else {
      newVNode._dom = diffElementNodes(oldVNode._dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating);
    }
    if (tmp = options.diffed) tmp(newVNode);
  } catch (e) {
    newVNode._original = null;
    // if hydrating or creating initial tree, bailout preserves DOM:
    if (isHydrating || excessDomChildren != null) {
      newVNode._dom = oldDom;
      newVNode._hydrating = !!isHydrating;
      excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
      // ^ could possibly be simplified to:
      // excessDomChildren.length = 0;
    }

    options._catchError(e, newVNode, oldVNode);
  }
}

/**
 * @param {Array<import('../internal').Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {import('../internal').VNode} root
 */
function commitRoot(commitQueue, root) {
  if (options._commit) options._commit(root, commitQueue);
  commitQueue.some(function (c) {
    try {
      // @ts-ignore Reuse the commitQueue variable here so the type changes
      commitQueue = c._renderCallbacks;
      c._renderCallbacks = [];
      commitQueue.some(function (cb) {
        // @ts-ignore See above ts-ignore on commitQueue
        cb.call(c);
      });
    } catch (e) {
      options._catchError(e, c._vnode);
    }
  });
}

/**
 * Diff two virtual nodes representing DOM element
 * @param {import('../internal').PreactElement} dom The DOM element representing
 * the virtual nodes being diffed
 * @param {import('../internal').VNode} newVNode The new virtual node
 * @param {import('../internal').VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {boolean} isSvg Whether or not this DOM node is an SVG node
 * @param {*} excessDomChildren
 * @param {Array<import('../internal').Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @returns {import('../internal').PreactElement}
 */
function diffElementNodes(dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating) {
  var oldProps = oldVNode.props;
  var newProps = newVNode.props;
  var nodeType = newVNode.type;
  var i = 0;

  // Tracks entering and exiting SVG namespace when descending through the tree.
  if (nodeType === 'svg') isSvg = true;
  if (excessDomChildren != null) {
    for (; i < excessDomChildren.length; i++) {
      var child = excessDomChildren[i];

      // if newVNode matches an element in excessDomChildren or the `dom`
      // argument matches an element in excessDomChildren, remove it from
      // excessDomChildren so it isn't later removed in diffChildren
      if (child && 'setAttribute' in child === !!nodeType && (nodeType ? child.localName === nodeType : child.nodeType === 3)) {
        dom = child;
        excessDomChildren[i] = null;
        break;
      }
    }
  }
  if (dom == null) {
    if (nodeType === null) {
      // @ts-ignore createTextNode returns Text, we expect PreactElement
      return document.createTextNode(newProps);
    }
    if (isSvg) {
      dom = document.createElementNS('http://www.w3.org/2000/svg',
      // @ts-ignore We know `newVNode.type` is a string
      nodeType);
    } else {
      dom = document.createElement(
      // @ts-ignore We know `newVNode.type` is a string
      nodeType, newProps.is && newProps);
    }

    // we created a new parent, so none of the previously attached children can be reused:
    excessDomChildren = null;
    // we are creating a new node, so we can assume this is a new subtree (in case we are hydrating), this deopts the hydrate
    isHydrating = false;
  }
  if (nodeType === null) {
    // During hydration, we still have to split merged text from SSR'd HTML.
    if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) {
      dom.data = newProps;
    }
  } else {
    // If excessDomChildren was not null, repopulate it with the current element's children:
    excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
    oldProps = oldVNode.props || EMPTY_OBJ;
    var oldHtml = oldProps.dangerouslySetInnerHTML;
    var newHtml = newProps.dangerouslySetInnerHTML;

    // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
    // @TODO we should warn in debug mode when props don't match here.
    if (!isHydrating) {
      // But, if we are in a situation where we are using existing DOM (e.g. replaceNode)
      // we should read the existing DOM attributes to diff them
      if (excessDomChildren != null) {
        oldProps = {};
        for (i = 0; i < dom.attributes.length; i++) {
          oldProps[dom.attributes[i].name] = dom.attributes[i].value;
        }
      }
      if (newHtml || oldHtml) {
        // Avoid re-applying the same '__html' if it did not changed between re-render
        if (!newHtml || (!oldHtml || newHtml.__html != oldHtml.__html) && newHtml.__html !== dom.innerHTML) {
          dom.innerHTML = newHtml && newHtml.__html || '';
        }
      }
    }
    diffProps(dom, newProps, oldProps, isSvg, isHydrating);

    // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
    if (newHtml) {
      newVNode._children = [];
    } else {
      i = newVNode.props.children;
      diffChildren(dom, Array.isArray(i) ? i : [i], newVNode, oldVNode, globalContext, isSvg && nodeType !== 'foreignObject', excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode._children && getDomSibling(oldVNode, 0), isHydrating);

      // Remove children that are not part of any vnode.
      if (excessDomChildren != null) {
        for (i = excessDomChildren.length; i--;) {
          if (excessDomChildren[i] != null) removeNode(excessDomChildren[i]);
        }
      }
    }

    // (as above, don't diff props during hydration)
    if (!isHydrating) {
      if ('value' in newProps && (i = newProps.value) !== undefined && (
      // #2756 For the <progress>-element the initial value is 0,
      // despite the attribute not being present. When the attribute
      // is missing the progress bar is treated as indeterminate.
      // To fix that we'll always update it when it is 0 for progress elements
      i !== dom.value || nodeType === 'progress' && !i ||
      // This is only for IE 11 to fix <select> value not being updated.
      // To avoid a stale select value we need to set the option.value
      // again, which triggers IE11 to re-evaluate the select value
      nodeType === 'option' && i !== oldProps.value)) {
        setProperty(dom, 'value', i, oldProps.value, false);
      }
      if ('checked' in newProps && (i = newProps.checked) !== undefined && i !== dom.checked) {
        setProperty(dom, 'checked', i, oldProps.checked, false);
      }
    }
  }
  return dom;
}

/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {object|function} ref
 * @param {any} value
 * @param {import('../internal').VNode} vnode
 */
function applyRef(ref, value, vnode) {
  try {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  } catch (e) {
    options._catchError(e, vnode);
  }
}

/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {import('../internal').VNode} vnode The virtual node to unmount
 * @param {import('../internal').VNode} parentVNode The parent of the VNode that
 * initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */
function unmount(vnode, parentVNode, skipRemove) {
  var r;
  if (options.unmount) options.unmount(vnode);
  if (r = vnode.ref) {
    if (!r.current || r.current === vnode._dom) {
      applyRef(r, null, parentVNode);
    }
  }
  if ((r = vnode._component) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (e) {
        options._catchError(e, parentVNode);
      }
    }
    r.base = r._parentDom = null;
    vnode._component = undefined;
  }
  if (r = vnode._children) {
    for (var i = 0; i < r.length; i++) {
      if (r[i]) {
        unmount(r[i], parentVNode, skipRemove || typeof vnode.type !== 'function');
      }
    }
  }
  if (!skipRemove && vnode._dom != null) {
    removeNode(vnode._dom);
  }

  // Must be set to `undefined` to properly clean up `_nextDom`
  // for which `null` is a valid value. See comment in `create-element.js`
  vnode._parent = vnode._dom = vnode._nextDom = undefined;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
  return this.constructor(props, context);
}

/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * render into
 * @param {import('./internal').PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */
function render(vnode, parentDom, replaceNode) {
  if (options._root) options._root(vnode, parentDom);

  // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
  // hydration mode or not by passing the `hydrate` function instead of a DOM
  // element..
  var isHydrating = typeof replaceNode === 'function';

  // To be able to support calling `render()` multiple times on the same
  // DOM node, we need to obtain a reference to the previous tree. We do
  // this by assigning a new `_children` property to DOM nodes which points
  // to the last rendered tree. By default this property is not present, which
  // means that we are mounting a new tree for the first time.
  var oldVNode = isHydrating ? null : replaceNode && replaceNode._children || parentDom._children;
  vnode = (!isHydrating && replaceNode || parentDom)._children = createElement(Fragment, null, [vnode]);

  // List of effects that need to be called after diffing.
  var commitQueue = [];
  diff(parentDom,
  // Determine the new vnode tree and store it on the DOM element on
  // our custom `_children` property.
  vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.ownerSVGElement !== undefined, !isHydrating && replaceNode ? [replaceNode] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode._dom : parentDom.firstChild, isHydrating);

  // Flush all queued effects
  commitRoot(commitQueue, vnode);
}

var DblKeyMap = /*#__PURE__*/function () {
  function DblKeyMap() {
    _classCallCheck(this, DblKeyMap);
    _defineProperty(this, "map", new Map());
  }
  _createClass(DblKeyMap, [{
    key: "get",
    value: function get(key1, key2) {
      var subMap = this.map.get(key1);
      if (subMap) {
        return subMap.get(key2);
      }
    }
  }, {
    key: "set",
    value: function set(key1, key2, value) {
      var _subMap;
      var subMap = this.map.get(key1);
      if (!subMap) {
        subMap = new Map();
        this.map.set(key1, subMap);
      }
      (_subMap = subMap) === null || _subMap === void 0 ? void 0 : _subMap.set(key2, value);
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      this.map.forEach(function (subMap, key1) {
        subMap.forEach(function (value, key2) {
          cb(value, key1, key2);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(key1) {
      this.map["delete"](key1);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _this = this;
      this.map.forEach(function (_, key1) {
        _this.map["delete"](key1);
      });
    }
  }]);
  return DblKeyMap;
}();

var EventController = /*#__PURE__*/_createClass(function EventController() {
  var _this = this;
  _classCallCheck(this, EventController);
  _defineProperty(this, "eventMap", new DblKeyMap());
  _defineProperty(this, "bindListener", function (el, eventName, eventHandler) {
    if (!el || !eventName || !eventHandler) {
      return;
    }
    var list = _this.eventMap.get(el, eventName);
    if (!list) {
      list = new Set();
      _this.eventMap.set(el, eventName, list);
    }
    if (!list.has(eventHandler)) {
      list.add(eventHandler);
      el.addEventListener(eventName, eventHandler, true);
    }
  });
  _defineProperty(this, "removeAllListener", function () {
    _this.eventMap.forEach(function (list, el, eventName) {
      list.forEach(function (handler) {
        el.removeEventListener(eventName, handler);
      });
    });
    _this.eventMap.deleteAll();
  });
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var isEmpty = function isEmpty(val) {
  return !(val || val === false || val === 0);
};
var defaultConverter = function defaultConverter(value, type) {
  var newValue = value;
  switch (type) {
    case Number:
      newValue = isEmpty(value) ? value : Number(value);
      break;
    case Boolean:
      newValue = !([null, "false", false, undefined].indexOf(value) > -1);
      break;
  }
  return newValue;
};
var defaultPropertyDeclaration = {
  observed: true,
  type: String,
  converter: defaultConverter
};
var property = function property() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (target, name) {
    return target.constructor.createProperty(name, options);
  };
};
var state = function state() {
  return function (target, name) {
    return target.constructor.createState(name);
  };
};
var ElementProperties = new DblKeyMap();
var Descriptors = new DblKeyMap();
function customElement(params) {
  var _ref = typeof params === "string" ? {
      tag: params
    } : params,
    tag = _ref.tag,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? "" : _ref$style;
  return function (target) {
    var NewQuarkElement = /*#__PURE__*/function (_target) {
      _inherits(NewQuarkElement, _target);
      var _super = _createSuper(NewQuarkElement);
      function NewQuarkElement() {
        var _this;
        _classCallCheck(this, NewQuarkElement);
        _this = _super.call(this);
        var shadowRoot = _this.attachShadow({
          mode: "open"
        });
        if (shadowRoot) {
          var styleEl = document.createElement("style");
          styleEl.innerHTML = style;
          shadowRoot.append(styleEl);
        }
        Descriptors.forEach(function (descriptorCreator, constructor, propertyName) {
          if (constructor === target) {
            Object.defineProperty(_assertThisInitialized(_this), propertyName, descriptorCreator(_this[propertyName]));
          }
        });
        return _this;
      }
      _createClass(NewQuarkElement, null, [{
        key: "observedAttributes",
        get: function get() {
          var attributes = [];
          ElementProperties.forEach(function (elOption, constructor, elName) {
            if (constructor === target && elOption.observed) {
              attributes.push(elName);
            }
          });
          return attributes;
        }
      }, {
        key: "isBooleanProperty",
        value: function isBooleanProperty(propertyName) {
          var isBoolean = false;
          ElementProperties.forEach(function (elOption, constructor, elName) {
            if (constructor === target && elOption.type === Boolean && propertyName === elName) {
              isBoolean = true;
              return isBoolean;
            }
          });
          return isBoolean;
        }
      }]);
      return NewQuarkElement;
    }(target);
    if (!customElements.get(tag)) {
      customElements.define(tag, NewQuarkElement);
    }
  };
}
var QuarkElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(QuarkElement, _HTMLElement);
  var _super2 = _createSuper(QuarkElement);
  function QuarkElement() {
    var _this2;
    _classCallCheck(this, QuarkElement);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "eventController", new EventController());
    _defineProperty(_assertThisInitialized(_this2), "rootPatch", function (newRootVNode) {
      if (_this2.shadowRoot) {
        render(newRootVNode, _this2.shadowRoot);
      }
    });
    _defineProperty(_assertThisInitialized(_this2), "$on", function (eventName, eventHandler, el) {
      return _this2.eventController.bindListener(el || _assertThisInitialized(_this2), eventName, eventHandler);
    });
    return _this2;
  }
  _createClass(QuarkElement, [{
    key: "_render",
    value: function _render() {
      var newRootVNode = this.render();
      if (newRootVNode) {
        this.rootPatch(newRootVNode);
      }
    }
  }, {
    key: "_updateProperty",
    value: function _updateProperty() {
      var _this3 = this;
      this.constructor.observedAttributes.forEach(function (propertyName) {
        _this3[propertyName] = _this3[propertyName];
      });
    }
  }, {
    key: "_updateBooleanProperty",
    value: function _updateBooleanProperty(propertyName) {
      if (this.constructor.isBooleanProperty(propertyName)) {
        if (!this[propertyName]) {
          this[propertyName] = this[propertyName];
        }
      }
    }
  }, {
    key: "$emit",
    value: function $emit(eventName, customEventInit) {
      return this.dispatchEvent(new CustomEvent(eventName, Object.assign({
        bubbles: true
      }, customEventInit)));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(propName, oldValue, newValue) {
      return oldValue !== newValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propName, oldValue, newValue) {}
  }, {
    key: "render",
    value: function render() {
      return "";
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateProperty();
      this._render();
      if (typeof this.componentDidMount === "function") {
        this.componentDidMount();
      }
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, value) {
      var newValue = this[name] || value;
      if (typeof this.shouldComponentUpdate === "function") {
        if (!this.shouldComponentUpdate(name, oldValue, newValue)) {
          return;
        }
      }
      this._render();
      if (typeof this.componentDidUpdate === "function") {
        this.componentDidUpdate(name, oldValue, newValue);
      }
      if (value !== oldValue) {
        this._updateBooleanProperty(name);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (typeof this.componentWillUnmount === "function") {
        this.componentWillUnmount();
      }
      this.eventController.removeAllListener();
      this.rootPatch(null);
    }
  }], [{
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, options) {
      return function (defaultValue) {
        return {
          get: function get() {
            var val = this.getAttribute(name);
            if (!isEmpty(defaultValue)) {
              if (isEmpty(val) && (options.type !== Boolean || val !== "")) {
                return defaultValue;
              }
            }
            if (typeof options.converter === "function") {
              val = options.converter(val, options.type);
            }
            return val;
          },
          set: function set(value) {
            var val = value;
            if (typeof options.converter === "function") {
              val = options.converter(value, options.type);
            }
            if (val) {
              if (typeof val === "boolean") {
                this.setAttribute(name, "");
              } else {
                this.setAttribute(name, val);
              }
            } else {
              this.removeAttribute(name);
            }
          },
          configurable: true,
          enumerable: true
        };
      };
    }
  }, {
    key: "getStateDescriptor",
    value: function getStateDescriptor() {
      return function (defaultValue) {
        var _value = defaultValue;
        return {
          get: function get() {
            return _value;
          },
          set: function set(value) {
            _value = value;
            this._render();
          },
          configurable: true,
          enumerable: true
        };
      };
    }
  }, {
    key: "createProperty",
    value: function createProperty(name, options) {
      var newOpt = Object.assign({}, defaultPropertyDeclaration, options);
      ElementProperties.set(this, name, newOpt);
      Descriptors.set(this, name, this.getPropertyDescriptor(name, newOpt));
    }
  }, {
    key: "createState",
    value: function createState(name) {
      Descriptors.set(this, name, this.getStateDescriptor());
    }
  }]);
  return QuarkElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_defineProperty(QuarkElement, "h", createElement);

var css_248z = "* {\n  font-family: \"Inter var\", \"Inter\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Helvetica, Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";;\n}\nhtml, body, a, button, input {\n  outline: 0 none;\n  border: 0;\n  text-decoration: none;\n}\n\np {\n  margin: 0;\n}\n\na {\n  color: #4c4c52;\n  transition: all .25s;\n}\n\nbutton {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.header {\n  z-index: 30;\n  top: 0px;\n  position: sticky;\n  min-width: 860px;\n  width: 100%;\n  background: #fff;\n}\n.toper-bar,\n.left-bar {\n  display: flex;\n  align-items: center;\n}\n\n.menu-group {\n  display: flex;\n  gap: 2rem;\n}\n\n.left-bar a {\n  color: rgb(107 114 128);\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n\n\n.left-bar img {\n    height: 2rem;\n}\n\n.header >div {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.header  .container {\n  margin: 0 auto;\n  padding: 1.25rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--line-light);\n  background-color: var(--main-bg);\n}\n\n.nav-item a {\n  font-size: 14px;\n  color: var(--text-font-color-light);\n  font-family: var(--font-family-base);\n}\n\n.nav-item a:hover {\n  color: var(--nav-link-color);\n}\n\n.nav-item button {\n  color: var(--text-font-color-light, rgba(60, 60, 67, .92));\n  font-family: var(--font-family-base);\n  transition: color 0.5s;\n}\n\n.nav-item button:hover {\n  color: var(--nav-link-color);\n}\n\n.translations,\n.appearance,\n.social-links {\n  display: flex;\n}\n\n.translations:before ,\n.appearance:before ,\n.social-links:before  {\n    margin: 0 16px;\n    width: 1px;\n    height: 24px;\n    background-color: rgba(60, 60, 67, 0.12);\n    content: \"\";\n}\n\n.social-links,\n.translate-lang {\n  display: flex;\n  align-items: center;\n  color: var(--text-font-color-light);\n  font-family: var(--font-family-base);\n}\n\n.social-links a {\n  width: 40px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-font-color-light);\n  font-family: var(--font-family-base);\n}\n\n.social-links a:hover {\n  color: var(--nav-link-color);\n}\n.translate-lang:hover {\n  color: var(--nav-link-color);\n}\n\n.social-links svg,\n.translate-lang svg {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n\n.flyout {\n  position: relative;\n}\n.flyout a {\n  display: flex;\n  align-items: center;\n}\n\n.flyout svg {\n  margin-left: 4px;\n  width: 14pxpx;\n  height: 14px;\n  fill: currentColor;\n}\n.flyout-menu {\n  position: absolute;\n  top: calc(var(--nav-height) / 2 + 15px);\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-4px);\n  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;\n}\n\n.menu-wrap {\n  border-radius: 8px;\n  padding: 12px 0;\n  min-width: 192px;\n  border: 1px solid transparent;\n  background: var(--main-bg);\n  box-shadow: var(--main-shadow);\n  transition: background-color 0.5s;\n}\n\n.menu-items {\n  transition: border-color 0.5s;\n}\n\n.flyout-menu .menu-wrap .menu-item-group {\n  padding: 0 0 12px;\n}\n\n.menu-group-title {\n  padding: 0 18px;\n  line-height: 28px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #cacaca;\n  text-transform: uppercase;\n  transition: color 0.25s;\n}\n\n.menu-link {\n  display: block;\n  padding: 0 18px;\n  line-height: 28px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--c-text-1);\n  white-space: nowrap;\n  transition: color 0.25s;\n}\n\n.flyout:hover .flyout-menu,\n.flyout-button + .flyout-menu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n/* search css */\n:root {\n  --docsearch-primary-color: #5468ff;\n  --docsearch-text-color: #1c1e21;\n  --docsearch-spacing: 12px;\n  --docsearch-icon-stroke-width: 1.4;\n  --docsearch-highlight-color: var(--docsearch-primary-color);\n  --docsearch-muted-color: #969faf;\n  --docsearch-container-background: rgba(101,108,133,0.8);\n  --docsearch-logo-color: #5468ff;\n  --docsearch-modal-width: 560px;\n  --docsearch-modal-height: 600px;\n  --docsearch-modal-background: #f5f6f7;\n  --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;\n  --docsearch-searchbox-height: 56px;\n  --docsearch-searchbox-background: #ebedf0;\n  --docsearch-searchbox-focus-background: #fff;\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);\n  --docsearch-hit-height: 56px;\n  --docsearch-hit-color: #444950;\n  --docsearch-hit-active-color: #fff;\n  --docsearch-hit-background: #fff;\n  --docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;\n  --docsearch-key-gradient: linear-gradient(-225deg,#d5dbe4,#f8f8f8);\n  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);\n  --docsearch-footer-height: 44px;\n  --docsearch-footer-background: #fff;\n  --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12);\n}\n\n.DocSearch-Button-Container {\n  align-items: center;\n  display: flex;\n}\n\n.DocSearch-Button {\n  align-items: center;\n  background: var(--docsearch-searchbox-background, #969faf);\n  border: 0;\n  border-radius: 40px;\n  color: var(--docsearch-muted-color, #969faf);\n  cursor: pointer;\n  display: flex;\n  font-weight: 500;\n  height: 36px;\n  justify-content: space-between;\n  margin: 0 0 0 16px;\n  padding: 0 8px;\n  user-select: none;\n}\n\n.DocSearch-Button .DocSearch-Search-Icon {\n  color: var(--docsearch-text-color);\n}\n\n.DocSearch-Button-Placeholder {\n  font-size: 1rem;\n  padding: 0 12px 0 6px;\n}\n\n.DocSearch-Search-Icon {\n  stroke-width: 1.6;\n}\n\n.left-bar span {\n  display: flex;\n  align-items: center;\n  color: rgb(156 163 175);\n  font-size: 14px;\n}\n\n.DocSearch-Button-Keys {\n  display: flex;\n  min-width: calc(40px + 0.8em);\n}\n\n.DocSearch-Button-Key {\n  align-items: center;\n  background: var(--docsearch-key-gradient);\n  border-radius: 3px;\n  box-shadow: var(--docsearch-key-shadow);\n  color: var(--docsearch-muted-color);\n  display: flex;\n  height: 18px;\n  justify-content: center;\n  margin-right: 0.4em;\n  position: relative;\n  padding: 0 0 2px;\n  border: 0;\n  top: -1px;\n  width: 20px;\n}\n\n.DocSearch-Button:active, .DocSearch-Button:focus, .DocSearch-Button:hover {\n  background: var(--docsearch-searchbox-focus-background);\n  box-shadow: var(--docsearch-searchbox-shadow);\n  color: var(--docsearch-text-color);\n  outline: none;\n}";

// enjoy it
const template = document.createElement("template");
template.innerHTML = `<style>
    *,::after,::before{
      box-sizing:border-box
    }
    :host{
      contain:content;
      display:inline-block;
    }
    :host img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.75rem;
    }
    .toggle {
        position: relative;
        touch-action: pan-x;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }
    .toggle .track {
        width: 48px;
        height: 22px;
        padding: 0;
        border-radius: 30px;
        background-color: #313136;
        transition: all .2s ease;
        border: 1px solid rgba(82, 82, 89, .68);
    }
    .toggle .track .check, .toggle .track .x {
        position: absolute;
        width: 17px;
        height: 17px;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
    }
    .toggle .track .check {
        left: 5px;
        opacity: 0;
        transition: opacity .25s ease;
    }
    .toggle .track .x {
        right: 5px;
    }
    .toggle.dark .track .check, .toggle.dark .track .x{
        opacity: 1;
        transition: opacity .25s ease;
    }
    .toggle.dark .track .x {
        opacity: 0;
    }
    .toggle .thumb {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fafafa;
        box-sizing: border-box;
        transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
        transform: translateX(0);
    }
    .toggle.dark .thumb {
        transform: translateX(26px);
        border-color: #19ab27;
    }
  </style>
  <div class="toggle">
    <div class="track">
      <div class="check">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABlJJREFUWAm1V3tsFEUcntnXvXu0tBWo1ZZHihBjCEWqkHiNaMLDRKOtQSKaiCFKQtS/SbxiFCHGCIkmkBSMwZhQNTFoQZD0DFiwtCDFAkdDqBBBKFj63rvdnfH7zfVo5aFBj0l2Z/dm5vd98/0es8dYjlpr62azufnDQNZcU1PciMfjWvb9rvZSMk4Ayfb36pLH13189GC8LAtIRLLPt+pzwrCuLq4ISEv/gHmitrAwfPbEkXc/ad4dL6iujrvyX0jcitgd/yZlZqftP6995Mr5TVLa22Tn8XVX2g/XLSRjUu7Q79jonS7I7hS7/0oOb5VyqF52n98oj7esXX07EjlxwXWisRmSnm3b29TTM8iYrjmFBWExubxwY/uhNas4r/WySl1fc5cetDMd7ydl+lMJJRw5WC8ud62Xx5rfepzwxgZmbhUYNS5Stvsj4yo2GXJEFBVHWDBkfdbR9HpYBaaUajDnBLKKpl1xRKYcgGtMCqEzTaSnThk/SQT0uJqTqFNBmXMCsZE48DzRZRMBRjv1GHNdk3HBImF9ZUvTyxM40pMKVc4JZBXQOLOFoDeKSxdp6HIQcO4rjYT9fn0pjbz9GLt7BAAODmjSVReXUMFzNW5x5vfxp2mIxZjIuQKJxAmFa+is2DQJJQ0JyBVExNOYcJnPxx/6/utnijmP555ALEagKAGGnGn64QORBjARcIA/yJk7JMJBLRrNtybTvH88KGjCf2jK86bhzmMcwDKFZEQvbIhxFYhChoMWMzU2iWznlIBEVJOsP+1bdX/ALx9l7jApADeDAEcMkE90JnUmmGl4USKQ0xhoW3JB5XY0YrxYWhLwMZZypUyjDGH35AbNwgUGiFBPpuGbHCpAOV1ZGXf2f/taftAv31DyeymN2d1IhAFAwTOmnzF/kKcdh3me7CYCOVNgycju84u8DeVlwfFq9/ZlTfldYrMUjOlrkjkD+rU+WzCROkcEchIDHR011syZW9JHD7y07N6JvhWMpz3pugaTkB6lWFVCKkhck0zzeMp2utq+uHrmfxOgoCO/Z8CXPlEQ1bdH8wgvhSIkEG0ICcQeExIFGdimjvKka7btJFZuaXOammIGKUCFQ53j9EN1dYKWqHf0t2w407W2tgs6h89ZnImjB55flh81tt9XirjjDuSl+oIPRQ0iWPgNZ5GqTqbBe3vSzEl5n5PhWKwocyR2HlqYN61qV18WjYjE8JLARZPQsUSim8foIRYTlGr02Ly7piASFRtKJ4VfieYhxdS2JcDVMN6xVOKZyrCGm8b108lrLRVzvptLH7IoEFLFANes6KnDi+uxfmvFnF17oALq5u1agu3/YfHkcSFzeSggV5eXRfIB7CHNcO5SUI+Ih5Ir7f4MAV9IqdFzdZgNpZw1Gcs1mNvgGbTbqQ9/cz7ZuuhgyYRQ49ljTyWHhr2DwpNHHFf+5gnWZ3Bharo+0TD5dNMw5vv9RlVpSRDHK4TlnoukhtYApuOHejSZQuo5g/A9BysdKRCyLl6062fN37OXMDlvUJtUrtmxo0avrW3wTrYs3jJ9RvRVChrmSmanPMpX2OXMsmDGh6AiEIwBAlvkOqIdBy+8JyAz8pz7QxiDth4KDy5uAlwzrWTnwC8Vc4KVAMZ3YUZ+IqoIjP3h5KFFX1ZMy3uW+7RhEDHgTi0zC9rS7uhPCDiNrGFyqBeERtKN/B0YlyFCkw0NJ5C0Ojv7zvT1a1WV1TuvZDdL4NTgB7CASYpsen6gqvG5jmTf5qHedADgkBl3D0nkSgNhZACDyi0FUKZRr3IdRjgN4WPPoFMIIegIK3mqd38fS80mcJKelM4szNyzZtQbkchGePuBRS8Eg9pHU8ojRQpSqs+ajAIwTjjUMQ/nvTNM0kicwYxZIYMh/891DYi+fvedB+c1xsm4lDU6ya+Axtz+RiAzEVYbajQOpq17F0R9QevNcEhfcU+xvyQQUalGJBSesqOkgPQ4YNyUZL9fSvUPDjoNAwN8/dwFjaczNkc3ptaMud1EIDtGcmXTcefO2cGSvKIFfp/2JIJxlq7xEl3nVPM4fDeIbPkD16/ptNc0bDu7qxbsu0R2JGywWMIjF2ft3tjfloAyQAGXiOn8hrqwbVvMXzaO+QeHXP6nF0wvX74Hf4NGG5GPjSlYoyM3P/0FbCT6zvM/yYoAAAAASUVORK5CYII=" width="16" height="16" role="presentation" style="pointer-events: none;">
      </div>
      <div class="x">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABwNJREFUWAmtV1tsFFUY/s6Z2d22zLYlZakUCRVaQcqlWIiCiS1gTEB9UAO+GR9En3iQGI0xJiSiRB98MjEq8cEQTSBeHhQM0V7whtEGDWC90BYitxahtNtu25058/v/ZzvLbilawJNM5+yZ89+//1LgJhYRNLW1uDfBAvpGiIk2O5auvfFxqIH3ZJ8/u06GN6Z9+wVl5SjcD1IbZa/UPkPyYl2uR4dreoD2bnbYxTlBBRytkHXtAREphP5KuH4lddx9h70yxX05t7yYXwGb6W8nx1jibpl2rFlGBxcG9M18okOrn7Bnk/BAO/4bI0UeEE1zjBp3UmvjOxJXJdaKN/ZiIu4tOZrAb4aTdZAZArKmWeiiJZ6jt5tiagdCS9+6cgO1Ne6Mvhe+ixTIfyDVhipnK9p+P0Edqx9RW/YZtQVGmOLChRxNNlyPsTEgPQKMB3dbEHa0h1awYmQ83enTd2vmUtvKd1Glv2RkzBb+kZGRrKtjzG60Wguhd/lJZBingbcfWWe72vjT75bJDrhYtvA0hrurETDr5HyF2Knb1MM4ab//xIoOqueA0edRnkkinTyJdYvqLFDZO4zUPFCvVoDjJq4T7TE61IWh4x5KqxX5KVKkX8WZ/t2ov2cb3MHt4dhIyOxIJxJOOF6xRx/99BksXLoecWcXytILMNBDqKpnGZWPquYfPxY8iXGR9fK+SgFrgcRPXPjVqhehL+3EmZ5RGJQi1QBU8TPThQnOQzm+5UXGIcetUeEAfP13VwzpI+w1jGJWdSliNfvVhiMPiOsllJag4M/UGHiqM6dlBb2OTLKHHV6KkvogrJ4XhBWniWK/Gp1MQyf93FOeUXKmKk/FzJxbQtKLjFXYT4USupy8fQVir2ynVEBiZMG0qtOHMS/AW4Gwrk7BG3C1F0B5nqNKE0CME4MfVRLPnXkBKe+ipvoFhNQywOhdghvLi0F8ReyVXV4BKTBRbbe5f64zR/DHsdZw1hJfeWlHl/GNRJzDxrd5m192z78TMaVnKELZoINZS4BzQ7vtnZljSnha/pPCbkuxzXcupYwI5tIeCpGc0Yp9tWHZQy/rmYhRfNgg4bHJBYLzGkxsRJF4XKlE2jBOHNSv3kY7Tj6vthzPFl61BrYwqFlmEQhtSVXmLiksxLmtRgYXI1ULU61JJ4eVKmG3/5sCVgpbMT6OMJ2E08/29Xf3w6v4FnHdCjfWgXu/O8Z5mLdCkeRs2khHe1DqOtQwbHWTAnM5S2HNmhALYo5KjkPFrMMKjZl6HxhWIAb0BqE+/73GrBRQUsKYiBu4JX8ycI6wtw+i5ef3NZpsrKVSHYCP37jwGDgeE1SA0S/xtl5SU2fs1ApEp0qTLVRjgyycDSsLHMSwmFltZMStR3uLLg6BdLhDa5dC6ryU2pHBe1BVO9tUcwfitJt2CLJZUHoG6T7Op75u0IyK31TCPcwFqgPk/KCaD3dFOuZBCO7xvCT/j048b3I3c7F2+WuOW7qdgkucFYlcQ4qop3yzTX7WaKfOCccye3Ts1Etq0+a/BHCF1yPgF3tAUkR6OrtGmo6gl94qqcXKh3rDyrOkPa58URoWcov2Mo6M+0QjrqKB+b7++oMa9Sz+ZkM0mie6aAtnGUvhmxaI+TogPOSQedgWioGSHFLn3v4kLh4HRspNmOGv41k+55siLFp2z6xYeJjhljFcbmxJlr4ga06TbevSByz/glQq4BJx46/c+237PbBqEYKxX3HpmKZEnQnr65X20hqJYaNcLoFOLiJk2LuBbyg7Q0OEn+hm0P3honxFD6rdxYorKpeIoi4YSSvyQHQIbM5t4+YNxLj/OxhVOOE4585qGpjnq+wSx6Q9CtNxTjd5klB+g6Mv36r0+b9cZFi44WYkHdG2ZWb3TtOUOXyVAlKlpGvJIAJ3eBMyfYS5C0qRZGtC85j+4sOasDe9xznPYezhhO/2Q6eP2fSOvYHOjtuQ1a9Q1VKynVDaMc8E0tptdxUsTFpFIYjcZKcbnoaQTNdiqCwNlL4G7oziSqGnT1ALf34vhk4R5zU3qYV9ONp9K88RtouShE68JwaU8dFw5W617shWa9ykeaBIn2hcsvPgL00k45QdTCZuSVcTRNs+8fnyLvooQfR5iujAnR9bxfY2xOVOxFS8SK3Le0l48VyYu1M8HRe5JD8wKPTjYnifaK3Wfn/GChYQ8ZAi6WRzWgqLV5YrsVLnZaVSoXU1g9gOIDwFySiGi+Zdrnzr7J3r+SMuszlcQCRn8lNGcTuSy2jOI7o9mxjZo+vR3ej3tN+ifRSOyUTS0+VMOid93cCubeiy/6TImS0QxRSCq2vxKr45zV+FQnjWH6D2xg+E9EatLcLAdHTgtGGD80D6jM0+aOl4wJgO/f96R2aJKCQ3yvgftRhdFMOpd6oAAAAASUVORK5CYII=" width="16" height="16" role="presentation" style="pointer-events: none;">
      </div>
    </div>
    <div class="thumb"></div>
  </div>
`;

function turnDark() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function turnLight() {
  console.log("turn light");
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
class DarkLightMode extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const toggle = shadowRoot.querySelector(".toggle");

    if (localStorage.theme === "dark") {
      turnDark();
    } else if (localStorage.theme === "light") {
      toggle.classList.toggle("dark");
      turnLight();
    } else if (themeMedia.matches) {
      document.documentElement.classList.add("dark");
    }

    toggle.addEventListener("click", (e) => {
      toggle.classList.toggle("dark");

      if (toggle.classList.contains("dark")) {
        turnLight();
      } else {
        turnDark();
      }
    });
  }
}

customElements.define("dark-light-mode", DarkLightMode);

/*! @docsearch/js 3.4.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e));}));}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,f,p,m,d,h={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(e,t){for(var n in t)e[n]=t[n];return e}function b(e){var t=e.parentNode;t&&t.removeChild(e);}function g(e,t,n){var r,o,c,i=arguments,a={};for(c in t)"key"==c?r=t[c]:"ref"==c?o=t[c]:a[c]=t[c];if(arguments.length>3)for(n=[n],c=3;c<arguments.length;c++)n.push(i[c]);if(null!=n&&(a.children=n),"function"==typeof e&&null!=e.defaultProps)for(c in e.defaultProps)void 0===a[c]&&(a[c]=e.defaultProps[c]);return O(e,a,r,o,null)}function O(e,t,n,r,o){var c={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++s.__v:o};return null!=s.vnode&&s.vnode(c),c}function S(e){return e.children}function E(e,t){this.props=e,this.context=t;}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return "function"==typeof e.type?w(e):null}function j(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return j(e)}}function P(e){(!e.__d&&(e.__d=!0)&&f.push(e)&&!I.__r++||m!==s.debounceRendering)&&((m=s.debounceRendering)||p)(I);}function I(){for(var e;I.__r=f.length;)e=f.sort((function(e,t){return e.__v.__b-t.__v.__b})),f=[],e.some((function(e){var t,n,r,o,c,i;e.__d&&(c=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=_({},o)).__v=o.__v+1,L(i,o,r,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[c]:null,n,null==c?w(o):c,o.__h),q(n,o),o.__e!=c&&j(o)));}));}function k(e,t,n,r,o,c,i,a,u,l){var s,f,p,m,d,y,_,b=r&&r.__k||v,g=b.length;for(n.__k=[],s=0;s<t.length;s++)if(null!=(m=n.__k[s]=null==(m=t[s])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?O(null,m,null,null,m):Array.isArray(m)?O(S,{children:m},null,null,null):m.__b>0?O(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(p=b[s])||p&&m.key==p.key&&m.type===p.type)b[s]=void 0;else for(f=0;f<g;f++){if((p=b[f])&&m.key==p.key&&m.type===p.type){b[f]=void 0;break}p=null;}L(e,m,p=p||h,o,c,i,a,u,l),d=m.__e,(f=m.ref)&&p.ref!=f&&(_||(_=[]),p.ref&&_.push(p.ref,null,m),_.push(f,m.__c||d,m)),null!=d?(null==y&&(y=d),"function"==typeof m.type&&null!=m.__k&&m.__k===p.__k?m.__d=u=D(m,u,e):u=A(e,m,p,b,d,u),l||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&p.__e==u&&u.parentNode!=e&&(u=w(p));}for(n.__e=y,s=g;s--;)null!=b[s]&&("function"==typeof n.type&&null!=b[s].__e&&b[s].__e==n.__d&&(n.__d=w(r,s+1)),U(b[s],b[s]));if(_)for(s=0;s<_.length;s++)H(_[s],_[++s],_[++s]);}function D(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?D(o,t,n):A(n,o,o,e.__k,o.__e,t));return t}function C(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){C(e,t);})):t.push(e)),t}function A(e,t,n,r,o,c){var i,a,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=c||null==o.parentNode)e:if(null==c||c.parentNode!==e)e.appendChild(o),i=null;else {for(a=c,u=0;(a=a.nextSibling)&&u<r.length;u+=2)if(a==o)break e;e.insertBefore(o,c),i=c;}return void 0!==i?i:o.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||y.test(t)?n:n+"px";}function N(e,t,n,r,o){var c;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else {if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||x(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||x(e.style,t,n[t]);}else if("o"===t[0]&&"n"===t[1])c=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+c]=n,n?r||e.addEventListener(t,c?T:R,c):e.removeEventListener(t,c?T:R,c);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t));}}function R(e){this.l[e.type+!1](s.event?s.event(e):e);}function T(e){this.l[e.type+!0](s.event?s.event(e):e);}function L(e,t,n,r,o,c,i,a,u){var l,f,p,m,d,h,v,y,b,g,O,w=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,a=t.__e=n.__e,t.__h=null,c=[a]),(l=s.__b)&&l(t);try{e:if("function"==typeof w){if(y=t.props,b=(l=w.contextType)&&r[l.__c],g=l?b?b.props.value:l.__:r,n.__c?v=(f=t.__c=n.__c).__=f.__E:("prototype"in w&&w.prototype.render?t.__c=f=new w(y,g):(t.__c=f=new E(y,g),f.constructor=w,f.render=F),b&&b.sub(f),f.props=y,f.state||(f.state={}),f.context=g,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=_({},f.__s)),_(f.__s,w.getDerivedStateFromProps(y,f.__s))),m=f.props,d=f.state,p)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else {if(null==w.getDerivedStateFromProps&&y!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(y,g),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(y,f.__s,g)||t.__v===n.__v){f.props=y,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(y,f.__s,g),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,d,h);}));}f.context=g,f.props=y,f.state=f.__s,(l=s.__r)&&l(t),f.__d=!1,f.__v=t,f.__P=e,l=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=_(_({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(h=f.getSnapshotBeforeUpdate(m,d)),O=null!=l&&l.type===S&&null==l.key?l.props.children:l,k(e,Array.isArray(O)?O:[O],t,n,r,o,c,i,a,u),f.base=t.__e,t.__h=null,f.__h.length&&i.push(f),v&&(f.__E=f.__=null),f.__e=!1;}else null==c&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,r,o,c,i,u);(l=s.diffed)&&l(t);}catch(e){t.__v=null,(u||null!=c)&&(t.__e=a,t.__h=!!u,c[c.indexOf(a)]=null),s.__e(e,t,n);}}function q(e,t){s.__c&&s.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t);}));}catch(e){s.__e(e,t.__v);}}));}function M(e,t,n,r,o,c,i,a){var u,l,s,f,p=n.props,m=t.props,d=t.type,y=0;if("svg"===d&&(o=!0),null!=c)for(;y<c.length;y++)if((u=c[y])&&(u===e||(d?u.localName==d:3==u.nodeType))){e=u,c[y]=null;break}if(null==e){if(null===d)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,m.is&&m),c=null,a=!1;}if(null===d)p===m||a&&e.data===m||(e.data=m);else {if(c=c&&v.slice.call(e.childNodes),l=(p=n.props||h).dangerouslySetInnerHTML,s=m.dangerouslySetInnerHTML,!a){if(null!=c)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(s||l)&&(s&&(l&&s.__html==l.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""));}if(function(e,t,n,r,o){var c;for(c in n)"children"===c||"key"===c||c in t||N(e,c,null,n[c],r);for(c in t)o&&"function"!=typeof t[c]||"children"===c||"key"===c||"value"===c||"checked"===c||n[c]===t[c]||N(e,c,t[c],n[c],r);}(e,m,p,o,a),s)t.__k=[];else if(y=t.props.children,k(e,Array.isArray(y)?y:[y],t,n,r,o&&"foreignObject"!==d,c,i,e.firstChild,a),null!=c)for(y=c.length;y--;)null!=c[y]&&b(c[y]);a||("value"in m&&void 0!==(y=m.value)&&(y!==e.value||"progress"===d&&!y)&&N(e,"value",y,p.value,!1),"checked"in m&&void 0!==(y=m.checked)&&y!==e.checked&&N(e,"checked",y,p.checked,!1));}return e}function H(e,t,n){try{"function"==typeof e?e(t):e.current=t;}catch(e){s.__e(e,n);}}function U(e,t,n){var r,o,c;if(s.unmount&&s.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||H(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount();}catch(e){s.__e(e,t);}r.base=r.__P=null;}if(r=e.__k)for(c=0;c<r.length;c++)r[c]&&U(r[c],t,n);null!=o&&b(o);}function F(e,t,n){return this.constructor(e,n)}function B(e,t,n){var r,o,c;s.__&&s.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,c=[],L(t,e=(!r&&n||t).__k=g(S,null,[e]),o||h,h,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?v.slice.call(t.childNodes):null,c,!r&&n?n:o?o.__e:t.firstChild,r),q(c,e);}function V(e,t){B(e,t,V);}function W(e,t,n){var r,o,c,i=arguments,a=_({},e.props);for(c in t)"key"==c?r=t[c]:"ref"==c?o=t[c]:a[c]=t[c];if(arguments.length>3)for(n=[n],c=3;c<arguments.length;c++)n.push(i[c]);return null!=n&&(a.children=n),O(e.type,a,r||e.key,o||e.ref,null)}s={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t;}throw e},__v:0},E.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},n),this.props)),e&&_(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),P(this));},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this));},E.prototype.render=S,f=[],p="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I.__r=0,d=0;var K,z,J,$=0,Q=[],Z=s.__b,Y=s.__r,G=s.diffed,X=s.__c,ee=s.unmount;function te(e,t){s.__h&&s.__h(z,e,$||t),$=0;var n=z.__H||(z.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ne(e){return $=1,re(pe,e)}function re(e,t,n){var r=te(K++,2);return r.t=e,r.__c||(r.__=[n?n(t):pe(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}));}],r.__c=z),r.__}function oe(e,t){var n=te(K++,3);!s.__s&&fe(n.__H,t)&&(n.__=e,n.__H=t,z.__H.__h.push(n));}function ce(e,t){var n=te(K++,4);!s.__s&&fe(n.__H,t)&&(n.__=e,n.__H=t,z.__h.push(n));}function ie(e,t){var n=te(K++,7);return fe(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ae(){Q.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(le),e.__H.__h.forEach(se),e.__H.__h=[];}catch(t){e.__H.__h=[],s.__e(t,e.__v);}})),Q=[];}s.__b=function(e){z=null,Z&&Z(e);},s.__r=function(e){Y&&Y(e),K=0;var t=(z=e.__c).__H;t&&(t.__h.forEach(le),t.__h.forEach(se),t.__h=[]);},s.diffed=function(e){G&&G(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==Q.push(t)&&J===s.requestAnimationFrame||((J=s.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),ue&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,100);ue&&(t=requestAnimationFrame(n));})(ae)),z=void 0;},s.__c=function(e,t){t.some((function(e){try{e.__h.forEach(le),e.__h=e.__h.filter((function(e){return !e.__||se(e)}));}catch(n){t.some((function(e){e.__h&&(e.__h=[]);})),t=[],s.__e(n,e.__v);}})),X&&X(e,t);},s.unmount=function(e){ee&&ee(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(le);}catch(e){s.__e(e,t.__v);}};var ue="function"==typeof requestAnimationFrame;function le(e){var t=z;"function"==typeof e.__c&&e.__c(),z=t;}function se(e){var t=z;e.__c=e.__(),z=t;}function fe(e,t){return !e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function pe(e,t){return "function"==typeof t?t(e):t}function me(e,t){for(var n in t)e[n]=t[n];return e}function de(e,t){for(var n in e)if("__source"!==n&&!(n in t))return !0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return !0;return !1}function he(e){this.props=e;}(he.prototype=new E).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(e,t){return de(this.props,e)||de(this.state,t)};var ve=s.__b;s.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ve&&ve(e);};var ye="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var _e=function(e,t){return null==e?null:C(C(e).map(t))},be={map:_e,forEach:_e,count:function(e){return e?C(e).length:0},only:function(e){var t=C(e);if(1!==t.length)throw "Children.only";return t[0]},toArray:C},ge=s.__e;function Oe(){this.__u=0,this.t=null,this.__b=null;}function Se(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ee(){this.u=null,this.o=null;}s.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);ge(e,t,n);},(Oe.prototype=new E).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=Se(r.__v),c=!1,i=function(){c||(c=!0,n.componentWillUnmount=n.__c,o?o(a):a());};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){i(),n.__c&&n.__c();};var a=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},u=!0===t.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i);},Oe.prototype.componentWillUnmount=function(){this.t=[];},Oe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c();})),t.__c.__H=null),null!=(t=me({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P);}this.__b=null;}var o=t.__e&&g(S,null,e.fallback);return o&&(o.__h=null),[g(S,null,t.__e?null:e.children),o]};var we=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2];}};function je(e){return this.getChildContext=function(){return e.context},e.children}function Pe(e){var t=this,n=e.i;t.componentWillUnmount=function(){B(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e);},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e);},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e);}}),B(g(je,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount();}function Ie(e,t){return g(Pe,{__v:e,i:t})}(Ee.prototype=new E).__e=function(e){var t=this,n=Se(t.__v),r=t.o.get(e);return r[0]++,function(o){var c=function(){t.props.revealOrder?(r.push(o),we(t,e,r)):o();};n?n(c):c();}},Ee.prototype.render=function(e){this.u=null,this.o=new Map;var t=C(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ee.prototype.componentDidUpdate=Ee.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){we(e,n,t);}));};var ke="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,De=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ce=function(e){return ("undefined"!=typeof Symbol&&"symbol"==n(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Ae(e,t,n){return null==t.__k&&(t.textContent=""),B(e,t),"function"==typeof n&&n(),e?e.__c:null}E.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(E.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t});}});}));var xe=s.event;function Ne(){}function Re(){return this.cancelBubble}function Te(){return this.defaultPrevented}s.event=function(e){return xe&&(e=xe(e)),e.persist=Ne,e.isPropagationStopped=Re,e.isDefaultPrevented=Te,e.nativeEvent=e};var Le,qe={configurable:!0,get:function(){return this.class}},Me=s.vnode;s.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var o in r={},n){var c=n[o];"value"===o&&"defaultValue"in n&&null==c||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===c?c="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Ce(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():De.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===c&&(c=void 0),r[o]=c);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=C(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value);}))),"select"==t&&null!=r.defaultValue&&(r.value=C(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value;}))),e.props=r;}t&&n.class!=n.className&&(qe.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",qe)),e.$$typeof=ke,Me&&Me(e);};var He=s.__r;s.__r=function(e){He&&He(e),Le=e.__c;};var Ue={ReactCurrentDispatcher:{current:{readContext:function(e){return Le.__n[e.__c].props.value}}}};"object"==("undefined"==typeof performance?"undefined":n(performance))&&"function"==typeof performance.now&&performance.now.bind(performance);function Fe(e){return !!e&&e.$$typeof===ke}var Be={useState:ne,useReducer:re,useEffect:oe,useLayoutEffect:ce,useRef:function(e){return $=5,ie((function(){return {current:e}}),[])},useImperativeHandle:function(e,t,n){$=6,ce((function(){"function"==typeof e?e(t()):e&&(e.current=t());}),null==n?n:n.concat(e));},useMemo:ie,useCallback:function(e,t){return $=8,ie((function(){return e}),t)},useContext:function(e){var t=z.context[e.__c],n=te(K++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(z)),t.props.value):e.__},useDebugValue:function(e,t){s.useDebugValue&&s.useDebugValue(t?t(e):e);},version:"16.8.0",Children:be,render:Ae,hydrate:function(e,t,n){return V(e,t),"function"==typeof n&&n(),e?e.__c:null},unmountComponentAtNode:function(e){return !!e.__k&&(B(null,e),!0)},createPortal:Ie,createElement:g,createContext:function(e,t){var n={__c:t="__cC"+d++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(P);},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e);};}),e.children}};return n.Provider.__=n.Consumer.contextType=n},createFactory:function(e){return g.bind(null,e)},cloneElement:function(e){return Fe(e)?W.apply(null,arguments):e},createRef:function(){return {current:null}},Fragment:S,isValidElement:Fe,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:E,PureComponent:he,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return !r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:de(this.props,e)}function r(t){return this.shouldComponentUpdate=n,g(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t,r){var o=me({},t);return delete o.ref,e(o,(r=t.ref||r)&&("object"!=n(r)||"current"in r)?r:null)}return t.$$typeof=ye,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:S,Suspense:Oe,SuspenseList:Ee,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e;}),(function(e){r=e;})),r)throw r;if(!n)throw t;return g(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ue};function Ve(){return Be.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},Be.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function We(){return Be.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var Ke=["translations"];function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},ze.apply(this,arguments)}function Je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qe(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}var Ze=Be.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,o=Qe(e,Ke),c=r.buttonText,i=void 0===c?"Search":c,a=r.buttonAriaLabel,u=void 0===a?"Search":a,l=Je(ne(null),2),s=l[0],f=l[1];return oe((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?f("⌘"):f("Ctrl"));}),[]),Be.createElement("button",ze({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),Be.createElement("span",{className:"DocSearch-Button-Container"},Be.createElement(We,null),Be.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),Be.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&Be.createElement(Be.Fragment,null,Be.createElement("kbd",{className:"DocSearch-Button-Key"},"Ctrl"===s?Be.createElement(Ve,null):s),Be.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))}));function Ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xe(e){return Xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(e)}function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;if("production"===process.env.NODE_ENV||!e||"object"!==Xe(e))return e;if(t.has(e))return "[Circular]";var n=t.add(e);return Array.isArray(e)?e.map((function(e){return et(e,n)})):Object.fromEntries(Object.entries(e).map((function(e){var t=Ye(e,2);return [t[0],et(t[1],n)]})))}function tt(e){return e.reduce((function(e,t){return e.concat(t)}),[])}var nt=0;function rt(e){return 0===e.collections.length?0:e.collections.reduce((function(e,t){return e+t.items.length}),0)}function ot(e,t){if("production"!==process.env.NODE_ENV&&!e)throw new Error("[Autocomplete] ".concat("function"==typeof t?t():t))}var ct=function(){},it=[{segment:"autocomplete-core",version:"1.8.2"}],at={current:{}};function ut(e){"production"!==process.env.NODE_ENV&&function(e,t){if("production"!==process.env.NODE_ENV&&!e){var n=t.trim();at.current[n]||(at.current[n]=!0,console.warn("[Autocomplete] ".concat(n)));}}(!e.debug,"The `debug` option is meant for development debugging and should not be used in production.");}function lt(e,t){var n=t;return {then:function(t,r){return lt(e.then(ft(t,n,e),ft(r,n,e)),n)},catch:function(t){return lt(e.catch(ft(t,n,e)),n)},finally:function(t){return t&&n.onCancelList.push(t),lt(e.finally(ft(t&&function(){return n.onCancelList=[],t()},n,e)),n)},cancel:function(){n.isCanceled=!0;var e=n.onCancelList;n.onCancelList=[],e.forEach((function(e){e();}));},isCanceled:function(){return !0===n.isCanceled}}}function st(e){return lt(e,{isCanceled:!1,onCancelList:[]})}function ft(e,t,n){return e?function(n){return t.isCanceled?n:e(n)}:n}function pt(e,t,n,r){if(!n)return null;if(e<0&&(null===t||null!==r&&0===t))return n+e;var o=(null===t?-1:t)+e;return o<=-1||o>=n?null===r?null:0:o}function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(Object(n),!0).forEach((function(t){ht(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt(e){return vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vt(e)}function yt(e){var t=function(e){var t=e.collections.map((function(e){return e.items.length})).reduce((function(e,t,n){var r=(e[n-1]||0)+t;return e.push(r),e}),[]).reduce((function(t,n){return n<=e.activeItemId?t+1:t}),0);return e.collections[t]}(e);if(!t)return null;var n=t.items[function(e){for(var t=e.state,n=e.collection,r=!1,o=0,c=0;!1===r;){var i=t.collections[o];if(i===n){r=!0;break}c+=i.items.length,o++;}return t.activeItemId-c}({state:e,collection:t})],r=t.source;return {item:n,itemInputValue:r.getItemInputValue({item:n,state:e}),itemUrl:r.getItemUrl({item:n,state:e}),source:r}}var _t=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(n),!0).forEach((function(t){Ot(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wt(e,t,n){var r,o=t.initialState;return {getState:function(){return o},dispatch:function(r,c){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(Object(n),!0).forEach((function(t){Et(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}({},o);o=e(o,{type:r,props:t,payload:c}),n({state:o,prevState:i});},pendingRequests:(r=[],{add:function(e){return r.push(e),e.finally((function(){r=r.filter((function(t){return t!==e}));}))},cancelAll:function(){r.forEach((function(e){return e.cancel()}));},isEmpty:function(){return 0===r.length}})}}function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jt(Object(n),!0).forEach((function(t){It(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function It(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kt(e){return function(e){if(Array.isArray(e))return Dt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Dt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function At(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ct(Object(n),!0).forEach((function(t){xt(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function xt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nt(e,t){var n,r="undefined"!=typeof window?window:{},o=e.plugins||[];return At(At({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:r,shouldPanelOpen:function(e){return rt(e.state)>0},reshape:function(e){return e.sources}},e),{},{id:null!==(n=e.id)&&void 0!==n?n:"autocomplete-".concat(nt++),plugins:o,initialState:At({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},e.initialState),onStateChange:function(t){var n;null===(n=e.onStateChange)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onStateChange)||void 0===n?void 0:n.call(e,t)}));},onSubmit:function(t){var n;null===(n=e.onSubmit)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onSubmit)||void 0===n?void 0:n.call(e,t)}));},onReset:function(t){var n;null===(n=e.onReset)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onReset)||void 0===n?void 0:n.call(e,t)}));},getSources:function(n){return Promise.all([].concat(kt(o.map((function(e){return e.getSources}))),[e.getSources]).filter(Boolean).map((function(e){return function(e,t){var n=[];return Promise.resolve(e(t)).then((function(e){return ot(Array.isArray(e),(function(){return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(vt(e)),":\n\n").concat(JSON.stringify(et(e),null,2))})),Promise.all(e.filter((function(e){return Boolean(e)})).map((function(e){if(ot("string"==typeof e.sourceId,"A source must provide a `sourceId` string."),n.includes(e.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId)," is not unique."));n.push(e.sourceId);var t={getItemInputValue:function(e){return e.state.query},getItemUrl:function(){},onSelect:function(e){(0,e.setIsOpen)(!1);},onActive:ct,onResolve:ct};Object.keys(t).forEach((function(e){t[e].__default=!0;}));var r=dt(dt({},t),e);return Promise.resolve(r)})))}))}(e,n)}))).then((function(e){return tt(e)})).then((function(e){return e.map((function(e){return At(At({},e),{},{onSelect:function(n){e.onSelect(n),t.forEach((function(e){var t;return null===(t=e.onSelect)||void 0===t?void 0:t.call(e,n)}));},onActive:function(n){e.onActive(n),t.forEach((function(e){var t;return null===(t=e.onActive)||void 0===t?void 0:t.call(e,n)}));},onResolve:function(n){e.onResolve(n),t.forEach((function(e){var t;return null===(t=e.onResolve)||void 0===t?void 0:t.call(e,n)}));}})}))}))},navigator:At({navigate:function(e){var t=e.itemUrl;r.location.assign(t);},navigateNewTab:function(e){var t=e.itemUrl,n=r.open(t,"_blank","noopener");null==n||n.focus();},navigateNewWindow:function(e){var t=e.itemUrl;r.open(t,"_blank","noopener");}},e.navigator)})}function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Rt(Object(n),!0).forEach((function(t){Lt(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qt(e){return qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qt(e)}function Mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Mt(Object(n),!0).forEach((function(t){Ut(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ft(e){return function(e){if(Array.isArray(e))return Bt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vt(e){return Boolean(e.execute)}function Wt(e,t,n){if(o=e,Boolean(null==o?void 0:o.execute)){var r="algolia"===e.requesterId?Object.assign.apply(Object,[{}].concat(Ft(Object.keys(n.context).map((function(e){var t;return null===(t=n.context[e])||void 0===t?void 0:t.__algoliaSearchParameters}))))):{};return Ht(Ht({},e),{},{requests:e.queries.map((function(n){return {query:"algolia"===e.requesterId?Ht(Ht({},n),{},{params:Ht(Ht({},r),n.params)}):n,sourceId:t,transformResponse:e.transformResponse}}))})}var o;return {items:e,sourceId:t}}function Kt(e){var t=e.reduce((function(e,t){if(!Vt(t))return e.push(t),e;var n=t.searchClient,r=t.execute,o=t.requesterId,c=t.requests,i=e.find((function(e){return Vt(t)&&Vt(e)&&e.searchClient===n&&Boolean(o)&&e.requesterId===o}));if(i){var a;(a=i.items).push.apply(a,Ft(c));}else {var u={execute:r,requesterId:o,items:c,searchClient:n};e.push(u);}return e}),[]).map((function(e){if(!Vt(e))return Promise.resolve(e);var t=e,n=t.execute,r=t.items;return n({searchClient:t.searchClient,requests:r})}));return Promise.all(t).then((function(e){return tt(e)}))}function zt(e,t,n){return t.map((function(t){var r=e.filter((function(e){return e.sourceId===t.sourceId})),o=r.map((function(e){return e.items})),c=r[0].transformResponse,i=c?c(function(e){var t=e.map((function(e){var t;return gt(gt({},e),{},{hits:null===(t=e.hits)||void 0===t?void 0:t.map((function(t){return gt(gt({},t),{},{__autocomplete_indexName:e.index,__autocomplete_queryID:e.queryID})}))})}));return {results:t,hits:t.map((function(e){return e.hits})).filter(Boolean),facetHits:t.map((function(e){var t;return null===(t=e.facetHits)||void 0===t?void 0:t.map((function(e){return {label:e.value,count:e.count,_highlightResult:{label:{value:e.highlighted}}}}))})).filter(Boolean)}}(o)):o;return t.onResolve({source:t,results:o,items:i,state:n.getState()}),ot(Array.isArray(i),(function(){return 'The `getItems` function from source "'.concat(t.sourceId,'" must return an array of items but returned type ').concat(JSON.stringify(qt(i)),":\n\n").concat(JSON.stringify(et(i),null,2),".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")})),ot(i.every(Boolean),'The `getItems` function from source "'.concat(t.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")),{source:t,items:i}}))}var Jt=["event","nextState","props","query","refresh","store"];function $t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$t(Object(n),!0).forEach((function(t){Zt(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Zt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yt(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}var Gt,Xt,en,tn=null,nn=(Gt=-1,Xt=-1,en=void 0,function(e){var t=++Gt;return Promise.resolve(e).then((function(e){return en&&t<Xt?en:(Xt=t,en=e,e)}))});function rn(e){var t=e.event,n=e.nextState,r=void 0===n?{}:n,o=e.props,c=e.query,i=e.refresh,a=e.store,u=Yt(e,Jt);tn&&o.environment.clearTimeout(tn);var l=u.setCollections,s=u.setIsOpen,f=u.setQuery,p=u.setActiveItemId,m=u.setStatus;if(f(c),p(o.defaultActiveItemId),!c&&!1===o.openOnFocus){var d,h=a.getState().collections.map((function(e){return Qt(Qt({},e),{},{items:[]})}));m("idle"),l(h),s(null!==(d=r.isOpen)&&void 0!==d?d:o.shouldPanelOpen({state:a.getState()}));var v=st(nn(h).then((function(){return Promise.resolve()})));return a.pendingRequests.add(v)}m("loading"),tn=o.environment.setTimeout((function(){m("stalled");}),o.stallThreshold);var y=st(nn(o.getSources(Qt({query:c,refresh:i,state:a.getState()},u)).then((function(e){return Promise.all(e.map((function(e){return Promise.resolve(e.getItems(Qt({query:c,refresh:i,state:a.getState()},u))).then((function(t){return Wt(t,e.sourceId,a.getState())}))}))).then(Kt).then((function(t){return zt(t,e,a)})).then((function(e){return function(e){var t=e.collections,n=e.props,r=e.state,o=t.reduce((function(e,t){return Tt(Tt({},e),{},Lt({},t.source.sourceId,Tt(Tt({},t.source),{},{getItems:function(){return tt(t.items)}})))}),{}),c=n.plugins.reduce((function(e,t){return t.reshape?t.reshape(e):e}),{sourcesBySourceId:o,state:r}).sourcesBySourceId;return tt(n.reshape({sourcesBySourceId:c,sources:Object.values(c),state:r})).filter(Boolean).map((function(e){return {source:e,items:e.getItems()}}))}({collections:e,props:o,state:a.getState()})}))})))).then((function(e){var n;m("idle"),l(e);var f=o.shouldPanelOpen({state:a.getState()});s(null!==(n=r.isOpen)&&void 0!==n?n:o.openOnFocus&&!c&&f||f);var p=yt(a.getState());if(null!==a.getState().activeItemId&&p){var d=p.item,h=p.itemInputValue,v=p.itemUrl,y=p.source;y.onActive(Qt({event:t,item:d,itemInputValue:h,itemUrl:v,refresh:i,source:y,state:a.getState()},u));}})).finally((function(){m("idle"),tn&&o.environment.clearTimeout(tn);}));return a.pendingRequests.add(y)}var on=["event","props","refresh","store"];function cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cn(Object(n),!0).forEach((function(t){un(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function un(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ln(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}var sn=["props","refresh","store"],fn=["inputElement","formElement","panelElement"],pn=["inputElement"],mn=["inputElement","maxLength"],dn=["sourceIndex"],hn=["sourceIndex"],vn=["item","source","sourceIndex"];function yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function _n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yn(Object(n),!0).forEach((function(t){bn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function bn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gn(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function On(e){var t=e.props,n=e.refresh,r=e.store,o=gn(e,sn),c=function(e,t){return void 0!==t?"".concat(e,"-").concat(t):e};return {getEnvironmentProps:function(e){var n=e.inputElement,o=e.formElement,c=e.panelElement;function i(e){!r.getState().isOpen&&r.pendingRequests.isEmpty()||e.target===n||!1===[o,c].some((function(t){return n=t,r=e.target,n===r||n.contains(r);var n,r;}))&&(r.dispatch("blur",null),t.debug||r.pendingRequests.cancelAll());}return _n({onTouchStart:i,onMouseDown:i,onTouchMove:function(e){!1!==r.getState().isOpen&&n===t.environment.document.activeElement&&e.target!==n&&n.blur();}},gn(e,fn))},getRootProps:function(e){return _n({role:"combobox","aria-expanded":r.getState().isOpen,"aria-haspopup":"listbox","aria-owns":r.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label")},e)},getFormProps:function(e){e.inputElement;return _n({action:"",noValidate:!0,role:"search",onSubmit:function(c){var i;c.preventDefault(),t.onSubmit(_n({event:c,refresh:n,state:r.getState()},o)),r.dispatch("submit",null),null===(i=e.inputElement)||void 0===i||i.blur();},onReset:function(c){var i;c.preventDefault(),t.onReset(_n({event:c,refresh:n,state:r.getState()},o)),r.dispatch("reset",null),null===(i=e.inputElement)||void 0===i||i.focus();}},gn(e,pn))},getLabelProps:function(e){var n=e||{},r=n.sourceIndex,o=gn(n,dn);return _n({htmlFor:"".concat(c(t.id,r),"-input"),id:"".concat(c(t.id,r),"-label")},o)},getInputProps:function(e){var c;function i(e){(t.openOnFocus||Boolean(r.getState().query))&&rn(_n({event:e,props:t,query:r.getState().completion||r.getState().query,refresh:n,store:r},o)),r.dispatch("focus",null);}var a=e||{},u=(a.inputElement,a.maxLength),l=void 0===u?512:u,s=gn(a,mn),f=yt(r.getState()),p=function(e){return Boolean(e&&e.match(_t))}((null===(c=t.environment.navigator)||void 0===c?void 0:c.userAgent)||""),m=null!=f&&f.itemUrl&&!p?"go":"search";return _n({"aria-autocomplete":"both","aria-activedescendant":r.getState().isOpen&&null!==r.getState().activeItemId?"".concat(t.id,"-item-").concat(r.getState().activeItemId):void 0,"aria-controls":r.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label"),value:r.getState().completion||r.getState().query,id:"".concat(t.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:m,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:l,type:"search",onChange:function(e){rn(_n({event:e,props:t,query:e.currentTarget.value.slice(0,l),refresh:n,store:r},o));},onKeyDown:function(e){!function(e){var t=e.event,n=e.props,r=e.refresh,o=e.store,c=ln(e,on);if("ArrowUp"===t.key||"ArrowDown"===t.key){var i=function(){var e=n.environment.document.getElementById("".concat(n.id,"-item-").concat(o.getState().activeItemId));e&&(e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded(!1):e.scrollIntoView(!1));},a=function(){var e=yt(o.getState());if(null!==o.getState().activeItemId&&e){var n=e.item,i=e.itemInputValue,a=e.itemUrl,u=e.source;u.onActive(an({event:t,item:n,itemInputValue:i,itemUrl:a,refresh:r,source:u,state:o.getState()},c));}};t.preventDefault(),!1===o.getState().isOpen&&(n.openOnFocus||Boolean(o.getState().query))?rn(an({event:t,props:n,query:o.getState().query,refresh:r,store:o},c)).then((function(){o.dispatch(t.key,{nextActiveItemId:n.defaultActiveItemId}),a(),setTimeout(i,0);})):(o.dispatch(t.key,{}),a(),i());}else if("Escape"===t.key)t.preventDefault(),o.dispatch(t.key,null),o.pendingRequests.cancelAll();else if("Tab"===t.key)o.dispatch("blur",null),o.pendingRequests.cancelAll();else if("Enter"===t.key){if(null===o.getState().activeItemId||o.getState().collections.every((function(e){return 0===e.items.length})))return void(n.debug||o.pendingRequests.cancelAll());t.preventDefault();var u=yt(o.getState()),l=u.item,s=u.itemInputValue,f=u.itemUrl,p=u.source;if(t.metaKey||t.ctrlKey)void 0!==f&&(p.onSelect(an({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},c)),n.navigator.navigateNewTab({itemUrl:f,item:l,state:o.getState()}));else if(t.shiftKey)void 0!==f&&(p.onSelect(an({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},c)),n.navigator.navigateNewWindow({itemUrl:f,item:l,state:o.getState()}));else if(t.altKey);else {if(void 0!==f)return p.onSelect(an({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},c)),void n.navigator.navigate({itemUrl:f,item:l,state:o.getState()});rn(an({event:t,nextState:{isOpen:!1},props:n,query:s,refresh:r,store:o},c)).then((function(){p.onSelect(an({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},c));}));}}}(_n({event:e,props:t,refresh:n,store:r},o));},onFocus:i,onBlur:ct,onClick:function(n){e.inputElement!==t.environment.document.activeElement||r.getState().isOpen||i(n);}},s)},getPanelProps:function(e){return _n({onMouseDown:function(e){e.preventDefault();},onMouseLeave:function(){r.dispatch("mouseleave",null);}},e)},getListProps:function(e){var n=e||{},r=n.sourceIndex,o=gn(n,hn);return _n({role:"listbox","aria-labelledby":"".concat(c(t.id,r),"-label"),id:"".concat(c(t.id,r),"-list")},o)},getItemProps:function(e){var i=e.item,a=e.source,u=e.sourceIndex,l=gn(e,vn);return _n({id:"".concat(c(t.id,u),"-item-").concat(i.__autocomplete_id),role:"option","aria-selected":r.getState().activeItemId===i.__autocomplete_id,onMouseMove:function(e){if(i.__autocomplete_id!==r.getState().activeItemId){r.dispatch("mousemove",i.__autocomplete_id);var t=yt(r.getState());if(null!==r.getState().activeItemId&&t){var c=t.item,a=t.itemInputValue,u=t.itemUrl,l=t.source;l.onActive(_n({event:e,item:c,itemInputValue:a,itemUrl:u,refresh:n,source:l,state:r.getState()},o));}}},onMouseDown:function(e){e.preventDefault();},onClick:function(e){var c=a.getItemInputValue({item:i,state:r.getState()}),u=a.getItemUrl({item:i,state:r.getState()});(u?Promise.resolve():rn(_n({event:e,nextState:{isOpen:!1},props:t,query:c,refresh:n,store:r},o))).then((function(){a.onSelect(_n({event:e,item:i,itemInputValue:c,itemUrl:u,refresh:n,source:a,state:r.getState()},o));}));}},l)}}}function Sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function En(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Sn(Object(n),!0).forEach((function(t){wn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jn(e){var t,n,r,o,c=e.plugins,i=e.options,a=null===(t=((null===(n=i.__autocomplete_metadata)||void 0===n?void 0:n.userAgents)||[])[0])||void 0===t?void 0:t.segment,u=a?wn({},a,Object.keys((null===(r=i.__autocomplete_metadata)||void 0===r?void 0:r.options)||{})):{};return {plugins:c.map((function(e){return {name:e.name,options:Object.keys(e.__autocomplete_pluginOptions||[])}})),options:En({"autocomplete-core":Object.keys(i)},u),ua:it.concat((null===(o=i.__autocomplete_metadata)||void 0===o?void 0:o.userAgents)||[])}}function Pn(e){var t,n=e.state;return !1===n.isOpen||null===n.activeItemId?null:(null===(t=yt(n))||void 0===t?void 0:t.itemInputValue)||null}function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function kn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?In(Object(n),!0).forEach((function(t){Dn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Dn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cn=function(e,t){switch(t.type){case"setActiveItemId":case"mousemove":return kn(kn({},e),{},{activeItemId:t.payload});case"setQuery":return kn(kn({},e),{},{query:t.payload,completion:null});case"setCollections":return kn(kn({},e),{},{collections:t.payload});case"setIsOpen":return kn(kn({},e),{},{isOpen:t.payload});case"setStatus":return kn(kn({},e),{},{status:t.payload});case"setContext":return kn(kn({},e),{},{context:kn(kn({},e.context),t.payload)});case"ArrowDown":var n=kn(kn({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:pt(1,e.activeItemId,rt(e),t.props.defaultActiveItemId)});return kn(kn({},n),{},{completion:Pn({state:n})});case"ArrowUp":var r=kn(kn({},e),{},{activeItemId:pt(-1,e.activeItemId,rt(e),t.props.defaultActiveItemId)});return kn(kn({},r),{},{completion:Pn({state:r})});case"Escape":return e.isOpen?kn(kn({},e),{},{activeItemId:null,isOpen:!1,completion:null}):kn(kn({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return kn(kn({},e),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return kn(kn({},e),{},{activeItemId:!0===t.props.openOnFocus?t.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return kn(kn({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case"blur":return t.props.debug?e:kn(kn({},e),{},{isOpen:!1,activeItemId:null});case"mouseleave":return kn(kn({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return ot(!1,"The reducer action ".concat(JSON.stringify(t.type)," is not supported.")),e}};function An(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?An(Object(n),!0).forEach((function(t){Nn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e){ut(e);var t=[],n=Nt(e,t),r=wt(Cn,n,(function(e){var t=e.prevState,r=e.state;n.onStateChange(xn({prevState:t,state:r,refresh:i,navigator:n.navigator},o));})),o=function(e){var t=e.store;return {setActiveItemId:function(e){t.dispatch("setActiveItemId",e);},setQuery:function(e){t.dispatch("setQuery",e);},setCollections:function(e){var n=0,r=e.map((function(e){return Pt(Pt({},e),{},{items:tt(e.items).map((function(e){return Pt(Pt({},e),{},{__autocomplete_id:n++})}))})}));t.dispatch("setCollections",r);},setIsOpen:function(e){t.dispatch("setIsOpen",e);},setStatus:function(e){t.dispatch("setStatus",e);},setContext:function(e){t.dispatch("setContext",e);}}}({store:r}),c=On(xn({props:n,refresh:i,store:r,navigator:n.navigator},o));function i(){return rn(xn({event:new Event("input"),nextState:{isOpen:r.getState().isOpen},props:n,navigator:n.navigator,query:r.getState().query,refresh:i,store:r},o))}return n.plugins.forEach((function(e){var r;return null===(r=e.subscribe)||void 0===r?void 0:r.call(e,xn(xn({},o),{},{navigator:n.navigator,refresh:i,onSelect:function(e){t.push({onSelect:e});},onActive:function(e){t.push({onActive:e});},onResolve:function(e){t.push({onResolve:e});}}))})),function(e){var t,n,r=e.metadata,o=e.environment;if(null===(t=o.navigator)||void 0===t||null===(n=t.userAgent)||void 0===n?void 0:n.includes("Algolia Crawler")){var c=o.document.createElement("meta"),i=o.document.querySelector("head");c.name="algolia:metadata",setTimeout((function(){c.content=JSON.stringify(r),i.appendChild(c);}),0);}}({metadata:jn({plugins:n.plugins,options:e}),environment:n.environment}),xn(xn({refresh:i,navigator:n.navigator},c),o)}function Tn(e){var t=e.translations,n=(void 0===t?{}:t).searchByText,r=void 0===n?"Search by":n;return Be.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},Be.createElement("span",{className:"DocSearch-Label"},r),Be.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},Be.createElement("defs",null,Be.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),Be.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),Be.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),Be.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),Be.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),Be.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),Be.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),Be.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),Be.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),Be.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function Ln(e){return Be.createElement("svg",{width:"15",height:"15","aria-label":e.ariaLabel,role:"img"},Be.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function qn(e){var t=e.translations,n=void 0===t?{}:t,r=n.selectText,o=void 0===r?"to select":r,c=n.selectKeyAriaLabel,i=void 0===c?"Enter key":c,a=n.navigateText,u=void 0===a?"to navigate":a,l=n.navigateUpKeyAriaLabel,s=void 0===l?"Arrow up":l,f=n.navigateDownKeyAriaLabel,p=void 0===f?"Arrow down":f,m=n.closeText,d=void 0===m?"to close":m,h=n.closeKeyAriaLabel,v=void 0===h?"Escape key":h,y=n.searchByText,_=void 0===y?"Search by":y;return Be.createElement(Be.Fragment,null,Be.createElement("div",{className:"DocSearch-Logo"},Be.createElement(Tn,{translations:{searchByText:_}})),Be.createElement("ul",{className:"DocSearch-Commands"},Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(Ln,{ariaLabel:i},Be.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),Be.createElement("span",{className:"DocSearch-Label"},o)),Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(Ln,{ariaLabel:p},Be.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(Ln,{ariaLabel:s},Be.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),Be.createElement("span",{className:"DocSearch-Label"},u)),Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(Ln,{ariaLabel:v},Be.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),Be.createElement("span",{className:"DocSearch-Label"},d))))}function Mn(e){var t=e.hit,n=e.children;return Be.createElement("a",{href:t.url},n)}function Hn(){return Be.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},Be.createElement("g",{fill:"none",fillRule:"evenodd"},Be.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},Be.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),Be.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},Be.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function Un(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),Be.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function Fn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Bn(){return Be.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),Be.createElement("path",{d:"M8 17l-6-6 6-6"})))}var Vn=function(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function Wn(e){switch(e.type){case"lvl1":return Be.createElement(Vn,null);case"content":return Be.createElement(zn,null);default:return Be.createElement(Kn,null)}}function Kn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function zn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Jn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function $n(){return Be.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function Qn(){return Be.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function Zn(e){var t=e.translations,n=void 0===t?{}:t,r=n.titleText,o=void 0===r?"Unable to fetch results":r,c=n.helpText,i=void 0===c?"You might want to check your network connection.":c;return Be.createElement("div",{className:"DocSearch-ErrorScreen"},Be.createElement("div",{className:"DocSearch-Screen-Icon"},Be.createElement($n,null)),Be.createElement("p",{className:"DocSearch-Title"},o),Be.createElement("p",{className:"DocSearch-Help"},i))}var Yn=["translations"];function Gn(e){return function(e){if(Array.isArray(e))return Xn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function er(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function tr(e){var t=e.translations,n=void 0===t?{}:t,r=er(e,Yn),o=n.noResultsText,c=void 0===o?"No results for":o,i=n.suggestedQueryText,a=void 0===i?"Try searching for":i,u=n.reportMissingResultsText,l=void 0===u?"Believe this query should return results?":u,s=n.reportMissingResultsLinkText,f=void 0===s?"Let us know.":s,p=r.state.context.searchSuggestions;return Be.createElement("div",{className:"DocSearch-NoResults"},Be.createElement("div",{className:"DocSearch-Screen-Icon"},Be.createElement(Qn,null)),Be.createElement("p",{className:"DocSearch-Title"},c,' "',Be.createElement("strong",null,r.state.query),'"'),p&&p.length>0&&Be.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},Be.createElement("p",{className:"DocSearch-Help"},a,":"),Be.createElement("ul",null,p.slice(0,3).reduce((function(e,t){return [].concat(Gn(e),[Be.createElement("li",{key:t},Be.createElement("button",{className:"DocSearch-Prefill",key:t,type:"button",onClick:function(){r.setQuery(t.toLowerCase()+" "),r.refresh(),r.inputRef.current.focus();}},t))])}),[]))),r.getMissingResultsUrl&&Be.createElement("p",{className:"DocSearch-Help"},"".concat(l," "),Be.createElement("a",{href:r.getMissingResultsUrl({query:r.state.query}),target:"_blank",rel:"noopener noreferrer"},f)))}var nr=["hit","attribute","tagName"];function rr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function or(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rr(Object(n),!0).forEach((function(t){cr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ir(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function ar(e,t){return t.split(".").reduce((function(e,t){return null!=e&&e[t]?e[t]:null}),e)}function ur(e){var t=e.hit,n=e.attribute,r=e.tagName;return g(void 0===r?"span":r,or(or({},ir(e,nr)),{},{dangerouslySetInnerHTML:{__html:ar(t,"_snippetResult.".concat(n,".value"))||ar(t,n)}}))}function lr(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return sr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sr(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sr(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fr(){return fr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},fr.apply(this,arguments)}function pr(e){return e.collection&&0!==e.collection.items.length?Be.createElement("section",{className:"DocSearch-Hits"},Be.createElement("div",{className:"DocSearch-Hit-source"},e.title),Be.createElement("ul",e.getListProps(),e.collection.items.map((function(t,n){return Be.createElement(mr,fr({key:[e.title,t.objectID].join(":"),item:t,index:n},e))})))):null}function mr(e){var t=e.item,n=e.index,r=e.renderIcon,o=e.renderAction,c=e.getItemProps,i=e.onItemClick,a=e.collection,u=e.hitComponent,l=lr(Be.useState(!1),2),s=l[0],f=l[1],p=lr(Be.useState(!1),2),m=p[0],d=p[1],h=Be.useRef(null),v=u;return Be.createElement("li",fr({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",s&&"DocSearch-Hit--deleting",m&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){h.current&&h.current();}},c({item:t,source:a.source,onClick:function(e){i(t,e);}})),Be.createElement(v,{hit:t},Be.createElement("div",{className:"DocSearch-Hit-Container"},r({item:t,index:n}),t.hierarchy[t.type]&&"lvl1"===t.type&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(ur,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&Be.createElement(ur,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&("lvl2"===t.type||"lvl3"===t.type||"lvl4"===t.type||"lvl5"===t.type||"lvl6"===t.type)&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(ur,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),Be.createElement(ur,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),"content"===t.type&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(ur,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),Be.createElement(ur,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),o({item:t,runDeleteTransition:function(e){f(!0),h.current=e;},runFavoriteTransition:function(e){d(!0),h.current=e;}}))))}function dr(e,t,n){return e.reduce((function(e,r){var o=t(r);return e.hasOwnProperty(o)||(e[o]=[]),e[o].length<(n||5)&&e[o].push(r),e}),{})}function hr(e){return e}function vr(e){return 1===e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function yr(){}var _r=/(<mark>|<\/mark>)/g,br=RegExp(_r.source);function gr(e){var t,n,r,o,c,i=e;if(!i.__docsearch_parent&&!e._highlightResult)return e.hierarchy.lvl0;var a=((i.__docsearch_parent?null===(t=i.__docsearch_parent)||void 0===t||null===(n=t._highlightResult)||void 0===n||null===(r=n.hierarchy)||void 0===r?void 0:r.lvl0:null===(o=e._highlightResult)||void 0===o||null===(c=o.hierarchy)||void 0===c?void 0:c.lvl0)||{}).value;return a&&br.test(a)?a.replace(_r,""):a}function Or(){return Or=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},Or.apply(this,arguments)}function Sr(e){return Be.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.collections.map((function(t){if(0===t.items.length)return null;var n=gr(t.items[0]);return Be.createElement(pr,Or({},e,{key:t.source.sourceId,title:n,collection:t,renderIcon:function(e){var n,r=e.item,o=e.index;return Be.createElement(Be.Fragment,null,r.__docsearch_parent&&Be.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.__docsearch_parent!==(null===(n=t.items[o+1])||void 0===n?void 0:n.__docsearch_parent)?Be.createElement("path",{d:"M8 6v21M20 27H8.3"}):Be.createElement("path",{d:"M8 6v42M20 27H8.3"}))),Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(Wn,{type:r.type})))},renderAction:function(){return Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement(Bn,null))}}))})),e.resultsFooterComponent&&Be.createElement("section",{className:"DocSearch-HitsFooter"},Be.createElement(e.resultsFooterComponent,{state:e.state})))}var Er=["translations"];function wr(){return wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},wr.apply(this,arguments)}function jr(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Pr(e){var t=e.translations,n=void 0===t?{}:t,r=jr(e,Er),o=n.recentSearchesTitle,c=void 0===o?"Recent":o,i=n.noRecentSearchesText,a=void 0===i?"No recent searches":i,u=n.saveRecentSearchButtonTitle,l=void 0===u?"Save this search":u,s=n.removeRecentSearchButtonTitle,f=void 0===s?"Remove this search from history":s,p=n.favoriteSearchesTitle,m=void 0===p?"Favorite":p,d=n.removeFavoriteSearchButtonTitle,h=void 0===d?"Remove this search from favorites":d;return "idle"===r.state.status&&!1===r.hasCollections?r.disableUserPersonalization?null:Be.createElement("div",{className:"DocSearch-StartScreen"},Be.createElement("p",{className:"DocSearch-Help"},a)):!1===r.hasCollections?null:Be.createElement("div",{className:"DocSearch-Dropdown-Container"},Be.createElement(pr,wr({},r,{title:c,collection:r.state.collections[0],renderIcon:function(){return Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(Un,null))},renderAction:function(e){var t=e.item,n=e.runFavoriteTransition,o=e.runDeleteTransition;return Be.createElement(Be.Fragment,null,Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:l,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.add(t),r.recentSearches.remove(t),r.refresh();}));}},Be.createElement(Jn,null))),Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:f,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),o((function(){r.recentSearches.remove(t),r.refresh();}));}},Be.createElement(Fn,null))))}})),Be.createElement(pr,wr({},r,{title:m,collection:r.state.collections[1],renderIcon:function(){return Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(Jn,null))},renderAction:function(e){var t=e.item,n=e.runDeleteTransition;return Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:h,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.remove(t),r.refresh();}));}},Be.createElement(Fn,null)))}})))}var Ir=["translations"];function kr(){return kr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},kr.apply(this,arguments)}function Dr(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}var Cr=Be.memo((function(e){var t=e.translations,n=void 0===t?{}:t,r=Dr(e,Ir);if("error"===r.state.status)return Be.createElement(Zn,{translations:null==n?void 0:n.errorScreen});var o=r.state.collections.some((function(e){return e.items.length>0}));return r.state.query?!1===o?Be.createElement(tr,kr({},r,{translations:null==n?void 0:n.noResultsScreen})):Be.createElement(Sr,r):Be.createElement(Pr,kr({},r,{hasCollections:o,translations:null==n?void 0:n.startScreen}))}),(function(e,t){return "loading"===t.state.status||"stalled"===t.state.status})),Ar=["translations"];function xr(){return xr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},xr.apply(this,arguments)}function Nr(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Rr(e){var t=e.translations,n=void 0===t?{}:t,r=Nr(e,Ar),o=n.resetButtonTitle,c=void 0===o?"Clear the query":o,i=n.resetButtonAriaLabel,a=void 0===i?"Clear the query":i,u=n.cancelButtonText,l=void 0===u?"Cancel":u,s=n.cancelButtonAriaLabel,f=void 0===s?"Cancel":s,p=r.getFormProps({inputElement:r.inputRef.current}).onReset;return Be.useEffect((function(){r.autoFocus&&r.inputRef.current&&r.inputRef.current.focus();}),[r.autoFocus,r.inputRef]),Be.useEffect((function(){r.isFromSelection&&r.inputRef.current&&r.inputRef.current.select();}),[r.isFromSelection,r.inputRef]),Be.createElement(Be.Fragment,null,Be.createElement("form",{className:"DocSearch-Form",onSubmit:function(e){e.preventDefault();},onReset:p},Be.createElement("label",xr({className:"DocSearch-MagnifierLabel"},r.getLabelProps()),Be.createElement(We,null)),Be.createElement("div",{className:"DocSearch-LoadingIndicator"},Be.createElement(Hn,null)),Be.createElement("input",xr({className:"DocSearch-Input",ref:r.inputRef},r.getInputProps({inputElement:r.inputRef.current,autoFocus:r.autoFocus,maxLength:64}))),Be.createElement("button",{type:"reset",title:c,className:"DocSearch-Reset","aria-label":a,hidden:!r.state.query},Be.createElement(Fn,null))),Be.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":f,onClick:r.onClose},l))}var Tr=["_highlightResult","_snippetResult"];function Lr(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function qr(e){return !1===function(){var e="__TEST_KEY__";try{return localStorage.setItem(e,""),localStorage.removeItem(e),!0}catch(e){return !1}}()?{setItem:function(){},getItem:function(){return []}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}function Mr(e){var t=e.key,n=e.limit,r=void 0===n?5:n,o=qr(t),c=o.getItem().slice(0,r);return {add:function(e){var t=e,n=(t._highlightResult,t._snippetResult,Lr(t,Tr)),i=c.findIndex((function(e){return e.objectID===n.objectID}));i>-1&&c.splice(i,1),c.unshift(n),c=c.slice(0,r),o.setItem(c);},remove:function(e){c=c.filter((function(t){return t.objectID!==e.objectID})),o.setItem(c);},getAll:function(){return c}}}var Hr=["facetName","facetQuery"];function Ur(e){var t,n="algoliasearch-client-js-".concat(e.key),r=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},o=function(){return JSON.parse(r().getItem(n)||"{}")};return {get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var n=JSON.stringify(e),r=o()[n];return Promise.all([r||t(),void 0!==r])})).then((function(e){var t=i(e,2),r=t[0],o=t[1];return Promise.all([r,o||n.miss(r)])})).then((function(e){return i(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var c=o();return c[JSON.stringify(e)]=t,r().setItem(n,JSON.stringify(c)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],r().setItem(n,JSON.stringify(t));}))},clear:function(){return Promise.resolve().then((function(){r().removeItem(n);}))}}}function Fr(e){var t=a(e.caches),n=t.shift();return void 0===n?{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return t().then((function(e){return Promise.all([e,n.miss(e)])})).then((function(e){return i(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(e,r,o).catch((function(){return Fr({caches:t}).get(e,r,o)}))},set:function(e,r){return n.set(e,r).catch((function(){return Fr({caches:t}).set(e,r)}))},delete:function(e){return n.delete(e).catch((function(){return Fr({caches:t}).delete(e)}))},clear:function(){return n.clear().catch((function(){return Fr({caches:t}).clear()}))}}}function Br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return {get:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},c=JSON.stringify(n);if(c in t)return Promise.resolve(e.serializable?JSON.parse(t[c]):t[c]);var i=r(),a=o&&o.miss||function(){return Promise.resolve()};return i.then((function(e){return a(e)})).then((function(){return i}))},set:function(n,r){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(r):r,Promise.resolve(r)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function Vr(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r;}return e}function Wr(e,t){return t?(Object.keys(t).forEach((function(n){e[n]=t[n](e);})),e):e}function Kr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(n[o++])}))}var zr={WithinQueryParameters:0,WithinHeaders:1};function Jr(e,t){var n=e||{},r=n.data||{};return Object.keys(n).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(r[e]=n[e]);})),{data:Object.entries(r).length>0?r:void 0,timeout:n.timeout||t,headers:n.headers||{},queryParameters:n.queryParameters||{},cacheable:n.cacheable}}var $r={Read:1,Write:2,Any:3},Qr=1,Zr=2,Yr=3;function Gr(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qr;return t(t({},e),{},{status:n,lastUpdate:Date.now()})}function Xr(e){return "string"==typeof e?{protocol:"https",url:e,accept:$r.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||$r.Any}}var eo="GET",to="POST";function no(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(Gr(t))}))}))).then((function(e){var n=e.filter((function(e){return function(e){return e.status===Qr||Date.now()-e.lastUpdate>12e4}(e)})),r=e.filter((function(e){return function(e){return e.status===Yr&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(n),a(r));return {getTimeout:function(e,t){return (0===r.length&&0===e?1:r.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return Xr(e)})):t}}))}function ro(e,n,r,o){var c=[],i=function(e,n){if(e.method===eo||void 0===e.data&&void 0===n.data)return;var r=Array.isArray(e.data)?e.data:t(t({},e.data),n.data);return JSON.stringify(r)}(r,o),u=function(e,n){var r=t(t({},e.headers),n.headers),o={};return Object.keys(r).forEach((function(e){var t=r[e];o[e.toLowerCase()]=t;})),o}(e,o),l=r.method,s=r.method!==eo?{}:t(t({},r.data),o.data),f=t(t(t({"x-algolia-agent":e.userAgent.value},e.queryParameters),s),o.queryParameters),p=0,m=function t(n,a){var s=n.pop();if(void 0===s)throw {name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:ao(c)};var m={data:i,headers:u,method:l,url:co(s,r.path,f),connectTimeout:a(p,e.timeouts.connect),responseTimeout:a(p,o.timeout)},d=function(e){var t={request:m,response:e,host:s,triesLeft:n.length};return c.push(t),t},h={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return {name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(r){var o=d(r);return r.isTimedOut&&p++,Promise.all([e.logger.info("Retryable failure",uo(o)),e.hostsCache.set(s,Gr(s,r.isTimedOut?Yr:Zr))]).then((function(){return t(n,a)}))},onFail:function(e){throw d(e),function(e,t){var n=e.content,r=e.status,o=n;try{o=JSON.parse(n).message;}catch(e){}return function(e,t,n){return {name:"ApiError",message:e,status:t,transporterStackTrace:n}}(o,r,t)}(e,ao(c))}};return e.requester.send(m).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,n=e.status;return !t&&0==~~n}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,h)}))};return no(e.hostsCache,n).then((function(e){return m(a(e.statelessHosts).reverse(),e.getTimeout)}))}function oo(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var n="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return -1===t.value.indexOf(n)&&(t.value="".concat(t.value).concat(n)),t}};return t}function co(e,t,n){var r=io(n),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return r.length&&(o+="?".concat(r)),o}function io(e){return Object.keys(e).map((function(t){return Kr("%s=%s",t,(n=e[t],"[object Object]"===Object.prototype.toString.call(n)||"[object Array]"===Object.prototype.toString.call(n)?JSON.stringify(e[t]):e[t]));var n;})).join("&")}function ao(e){return e.map((function(e){return uo(e)}))}function uo(e){var n=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return t(t({},e),{},{request:t(t({},e.request),{},{headers:t(t({},e.request.headers),n)})})}var lo=function(e){var n=e.appId,r=function(e,t,n){var r={"x-algolia-api-key":n,"x-algolia-application-id":t};return {headers:function(){return e===zr.WithinHeaders?r:{}},queryParameters:function(){return e===zr.WithinQueryParameters?r:{}}}}(void 0!==e.authMode?e.authMode:zr.WithinHeaders,n,e.apiKey),o=function(e){var t=e.hostsCache,n=e.logger,r=e.requester,o=e.requestsCache,c=e.responsesCache,a=e.timeouts,u=e.userAgent,l=e.hosts,s=e.queryParameters,f={hostsCache:t,logger:n,requester:r,requestsCache:o,responsesCache:c,timeouts:a,userAgent:u,headers:e.headers,queryParameters:s,hosts:l.map((function(e){return Xr(e)})),read:function(e,t){var n=Jr(t,f.timeouts.read),r=function(){return ro(f,f.hosts.filter((function(e){return 0!=(e.accept&$r.Read)})),e,n)};if(!0!==(void 0!==n.cacheable?n.cacheable:e.cacheable))return r();var o={request:e,mappedRequestOptions:n,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(o,(function(){return f.requestsCache.get(o,(function(){return f.requestsCache.set(o,r()).then((function(e){return Promise.all([f.requestsCache.delete(o),e])}),(function(e){return Promise.all([f.requestsCache.delete(o),Promise.reject(e)])})).then((function(e){var t=i(e,2);return t[0],t[1]}))}))}),{miss:function(e){return f.responsesCache.set(o,e)}})},write:function(e,t){return ro(f,f.hosts.filter((function(e){return 0!=(e.accept&$r.Write)})),e,Jr(t,f.timeouts.write))}};return f}(t(t({hosts:[{url:"".concat(n,"-dsn.algolia.net"),accept:$r.Read},{url:"".concat(n,".algolia.net"),accept:$r.Write}].concat(Vr([{url:"".concat(n,"-1.algolianet.com")},{url:"".concat(n,"-2.algolianet.com")},{url:"".concat(n,"-3.algolianet.com")}]))},e),{},{headers:t(t(t({},r.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:t(t({},r.queryParameters()),e.queryParameters)})),c={transporter:o,appId:n,addAlgoliaAgent:function(e,t){o.userAgent.add({segment:e,version:t});},clearCache:function(){return Promise.all([o.requestsCache.clear(),o.responsesCache.clear()]).then((function(){}))}};return Wr(c,e.methods)},so=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={transporter:e.transporter,appId:e.appId,indexName:t};return Wr(r,n.methods)}},fo=function(e){return function(n,r){var o=n.map((function(e){return t(t({},e),{},{params:io(e.params||{})})}));return e.transporter.read({method:to,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},r)}},po=function(e){return function(n,r){return Promise.all(n.map((function(n){var o=n.params,i=o.facetName,a=o.facetQuery,u=c(o,Hr);return so(e)(n.indexName,{methods:{searchForFacetValues:vo}}).searchForFacetValues(i,a,t(t({},r),u))})))}},mo=function(e){return function(t,n,r){return e.transporter.read({method:to,path:Kr("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:n},cacheable:!0},r)}},ho=function(e){return function(t,n){return e.transporter.read({method:to,path:Kr("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},n)}},vo=function(e){return function(t,n,r){return e.transporter.read({method:to,path:Kr("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:n},cacheable:!0},r)}},yo=1,_o=2,bo=3;function go(e,n,r){var o,c={appId:e,apiKey:n,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return n.setRequestHeader(t,e.headers[t])}));var r,o=function(e,r){return setTimeout((function(){n.abort(),t({status:0,content:r,isTimedOut:!0});}),1e3*e)},c=o(e.connectTimeout,"Connection timeout");n.onreadystatechange=function(){n.readyState>n.OPENED&&void 0===r&&(clearTimeout(c),r=o(e.responseTimeout,"Socket timeout"));},n.onerror=function(){0===n.status&&(clearTimeout(c),clearTimeout(r),t({content:n.responseText||"Network request failed",status:n.status,isTimedOut:!1}));},n.onload=function(){clearTimeout(c),clearTimeout(r),t({content:n.responseText,status:n.status,isTimedOut:!1});},n.send(e.data);}))}},logger:(o=bo,{debug:function(e,t){return yo>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return _o>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:Br(),requestsCache:Br({serializable:!1}),hostsCache:Fr({caches:[Ur({key:"".concat("4.8.5","-").concat(e)}),Br()]}),userAgent:oo("4.8.5").add({segment:"Browser",version:"lite"}),authMode:zr.WithinQueryParameters};return lo(t(t(t({},c),r),{},{methods:{search:fo,searchForFacetValues:po,multipleQueries:fo,multipleSearchForFacetValues:po,initIndex:function(e){return function(t){return so(e)(t,{methods:{search:ho,searchForFacetValues:vo,findAnswers:mo}})}}}}))}go.version="4.8.5";var Oo=["footer","searchBox"];function So(){return So=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},So.apply(this,arguments)}function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function wo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Eo(Object(n),!0).forEach((function(t){jo(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function jo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Po(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Io(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Io(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Io(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ko(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Do(e){var t=e.appId,n=e.apiKey,r=e.indexName,o=e.placeholder,c=void 0===o?"Search docs":o,i=e.searchParameters,a=e.maxResultsPerGroup,u=e.onClose,l=void 0===u?yr:u,s=e.transformItems,f=void 0===s?hr:s,p=e.hitComponent,m=void 0===p?Mn:p,d=e.resultsFooterComponent,h=void 0===d?function(){return null}:d,v=e.navigator,y=e.initialScrollY,_=void 0===y?0:y,b=e.transformSearchClient,g=void 0===b?hr:b,O=e.disableUserPersonalization,S=void 0!==O&&O,E=e.initialQuery,w=void 0===E?"":E,j=e.translations,P=void 0===j?{}:j,I=e.getMissingResultsUrl,k=P.footer,D=P.searchBox,C=ko(P,Oo),A=Po(Be.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),x=A[0],N=A[1],R=Be.useRef(null),T=Be.useRef(null),L=Be.useRef(null),q=Be.useRef(null),M=Be.useRef(null),H=Be.useRef(10),U=Be.useRef("undefined"!=typeof window?window.getSelection().toString().slice(0,64):"").current,F=Be.useRef(w||U).current,B=function(e,t,n){return Be.useMemo((function(){var r=go(e,t);return r.addAlgoliaAgent("docsearch","3.4.0"),!1===/docsearch.js \(.*\)/.test(r.transporter.userAgent.value)&&r.addAlgoliaAgent("docsearch-react","3.4.0"),n(r)}),[e,t,n])}(t,n,g),V=Be.useRef(Mr({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(r),limit:10})).current,W=Be.useRef(Mr({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(r),limit:0===V.getAll().length?7:4})).current,K=Be.useCallback((function(e){if(!S){var t="content"===e.type?e.__docsearch_parent:e;t&&-1===V.getAll().findIndex((function(e){return e.objectID===t.objectID}))&&W.add(t);}}),[V,W,S]),z=Be.useMemo((function(){return Rn({id:"docsearch",defaultActiveItemId:0,placeholder:c,openOnFocus:!0,initialState:{query:F,context:{searchSuggestions:[]}},navigator:v,onStateChange:function(e){N(e.state);},getSources:function(e){var t=e.query,n=e.state,o=e.setContext,c=e.setStatus;return t?B.search([{query:t,indexName:r,params:wo({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(H.current),"hierarchy.lvl2:".concat(H.current),"hierarchy.lvl3:".concat(H.current),"hierarchy.lvl4:".concat(H.current),"hierarchy.lvl5:".concat(H.current),"hierarchy.lvl6:".concat(H.current),"content:".concat(H.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},i)}]).catch((function(e){throw "RetryError"===e.name&&c("error"),e})).then((function(e){var t=e.results[0],r=t.hits,c=t.nbHits,i=dr(r,(function(e){return gr(e)}),a);return n.context.searchSuggestions.length<Object.keys(i).length&&o({searchSuggestions:Object.keys(i)}),o({nbHits:c}),Object.values(i).map((function(e,t){return {sourceId:"hits".concat(t),onSelect:function(e){var t=e.item,n=e.event;K(t),vr(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return Object.values(dr(e,(function(e){return e.hierarchy.lvl1}),a)).map(f).map((function(e){return e.map((function(t){return wo(wo({},t),{},{__docsearch_parent:"lvl1"!==t.type&&e.find((function(e){return "lvl1"===e.type&&e.hierarchy.lvl1===t.hierarchy.lvl1}))})}))})).flat()}}}))})):S?[]:[{sourceId:"recentSearches",onSelect:function(e){var t=e.item,n=e.event;K(t),vr(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return W.getAll()}},{sourceId:"favoriteSearches",onSelect:function(e){var t=e.item,n=e.event;K(t),vr(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return V.getAll()}}]}})}),[r,i,a,B,l,W,V,K,F,c,v,f,S]),J=z.getEnvironmentProps,$=z.getRootProps,Q=z.refresh;return function(e){var t=e.getEnvironmentProps,n=e.panelElement,r=e.formElement,o=e.inputElement;Be.useEffect((function(){if(n&&r&&o){var e=t({panelElement:n,formElement:r,inputElement:o}),c=e.onTouchStart,i=e.onTouchMove;return window.addEventListener("touchstart",c),window.addEventListener("touchmove",i),function(){window.removeEventListener("touchstart",c),window.removeEventListener("touchmove",i);}}}),[t,n,r,o]);}({getEnvironmentProps:J,panelElement:q.current,formElement:L.current,inputElement:M.current}),function(e){var t=e.container;Be.useEffect((function(){if(t){var e=t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),n=e[0],r=e[e.length-1];return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o);}}function o(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus()));}}),[t]);}({container:R.current}),Be.useEffect((function(){return document.body.classList.add("DocSearch--active"),function(){var e,t;document.body.classList.remove("DocSearch--active"),null===(e=(t=window).scrollTo)||void 0===e||e.call(t,0,_);}}),[]),Be.useEffect((function(){window.matchMedia("(max-width: 768px)").matches&&(H.current=5);}),[]),Be.useEffect((function(){q.current&&(q.current.scrollTop=0);}),[x.query]),Be.useEffect((function(){F.length>0&&(Q(),M.current&&M.current.focus());}),[F,Q]),Be.useEffect((function(){function e(){if(T.current){var e=.01*window.innerHeight;T.current.style.setProperty("--docsearch-vh","".concat(e,"px"));}}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e);}}),[]),Be.createElement("div",So({ref:R},$({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container","stalled"===x.status&&"DocSearch-Container--Stalled","error"===x.status&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(e){e.target===e.currentTarget&&l();}}),Be.createElement("div",{className:"DocSearch-Modal",ref:T},Be.createElement("header",{className:"DocSearch-SearchBar",ref:L},Be.createElement(Rr,So({},z,{state:x,autoFocus:0===F.length,inputRef:M,isFromSelection:Boolean(F)&&F===U,translations:D,onClose:l}))),Be.createElement("div",{className:"DocSearch-Dropdown",ref:q},Be.createElement(Cr,So({},z,{indexName:r,state:x,hitComponent:m,resultsFooterComponent:h,disableUserPersonalization:S,recentSearches:W,favoriteSearches:V,inputRef:M,translations:C,getMissingResultsUrl:I,onItemClick:function(e,t){K(e),vr(t)||l();}}))),Be.createElement("footer",{className:"DocSearch-Footer"},Be.createElement(qn,{translations:k}))))}function Co(){return Co=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},Co.apply(this,arguments)}function Ao(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e;}finally{try{i||null==n.return||n.return();}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return xo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xo(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xo(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function No(e){var t,n,r=Be.useRef(null),o=Ao(Be.useState(!1),2),c=o[0],i=o[1],a=Ao(Be.useState((null==e?void 0:e.initialQuery)||void 0),2),u=a[0],l=a[1],s=Be.useCallback((function(){i(!0);}),[i]),f=Be.useCallback((function(){i(!1);}),[i]);return function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,c=e.searchButtonRef;Be.useEffect((function(){function e(e){var i;(27===e.keyCode&&t||"k"===(null===(i=e.key)||void 0===i?void 0:i.toLowerCase())&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e);}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e);}}),[t,n,r,o,c]);}({isOpen:c,onOpen:s,onClose:f,onInput:Be.useCallback((function(e){i(!0),l(e.key);}),[i,l]),searchButtonRef:r}),Be.createElement(Be.Fragment,null,Be.createElement(Ze,{ref:r,translations:null==e||null===(t=e.translations)||void 0===t?void 0:t.button,onClick:s}),c&&Ie(Be.createElement(Do,Co({},e,{initialScrollY:window.scrollY,initialQuery:u,translations:null==e||null===(n=e.translations)||void 0===n?void 0:n.modal,onClose:f})),document.body))}function Ro(e){Ae(Be.createElement(No,o({},e,{transformSearchClient:function(t){return t.addAlgoliaAgent("docsearch.js","3.4.0"),e.transformSearchClient?e.transformSearchClient(t):t}})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return "string"==typeof e?t.document.querySelector(e):e}(e.container,e.environment));}

const langs = {
  "zh-CN": {
    ecosystem: "生态系统",
    docsTitle: "组件库文档",
    docs: "组件库文档",
    officialLibrary: "官方工具",
    stack: "用 Quark 构建跨技术栈组件",
    noFrame: "用 Quark 构建无框架应用（Beta）",
    resources: "资源",
    vscodePlugin: "VSCode 插件",
    help: "帮助",
    gitHubDiscussions: "GitHub 论坛",
    stacks: ["Vue", "React"]
  },
  "en-US": {
    ecosystem: "Ecosystem",
    docsTitle: "Docs",
    docs: "Docs",
    officialLibrary: "Offical Tools",
    stack: "Building cross-technology-stack components with Quark",
    noFrame: "Building frameworkless applications with Quark (Beta)",
    resources: "RESOURCES",
    vscodePlugin: "VSCode Plugin",
    help: "HELP",
    gitHubDiscussions: "GitHub Discussions",
    stacks: ["Vue", "React"]
  }
};
let MyComponent = class MyComponent extends QuarkElement {
  #isZhLang;
  #ecosystemLangs;
  #isSearchShow;
  searchRef = createRef();
  constructor() {
    super();
    this.#isZhLang = localStorage.getItem("language") === "zh-CN";
    this.#ecosystemLangs = this.#isZhLang ? langs["zh-CN"] : langs["en-US"];
    this.#isSearchShow = true;
  }
  componentDidMount() {
    const container = this.searchRef.current;
    if (location.host.indexOf("vue-quarkdesign") > -1) {
      Ro({
        container,
        appId: "EA4BY59U66",
        indexName: localStorage.getItem("language") === "en-US" ? "ENDoc" : "CNDoc",
        apiKey: "5d1fd7c976a98a74421011f1374dd200"
      });
    } else if (location.host.indexOf("react-quarkdesign") > -1) {
      Ro({
        container,
        appId: "EA4BY59U66",
        indexName: localStorage.getItem("language") === "en-US" ? "react-ENDoc" : "react-CNDoc",
        apiKey: "5d1fd7c976a98a74421011f1374dd200"
      });
    }
  }
  _switchLang = () => {
    let href = "";
    if (localStorage.getItem("language") === "en-US") {
      localStorage.setItem("language", "zh-CN");
      href = location.href.replace("en-US", "zh-CN");
    } else {
      localStorage.setItem("language", "en-US");
      href = location.href.replace("zh-CN", "en-US");
    }
    location.href = href;
    window.location.reload();
  };
  render() {
    return QuarkElement.h(Fragment, null, QuarkElement.h("header", {
      class: "header"
    }, QuarkElement.h("div", null, QuarkElement.h("div", {
      class: "container"
    }, QuarkElement.h("div", {
      class: "left-bar"
    }, QuarkElement.h("a", {
      href: "/"
    }, QuarkElement.h("img", {
      src: "https://quark.hellobike.com/assets/quark-logo.f9a6a307.png",
      alt: ""
    })), QuarkElement.h("div", {
      ref: this.searchRef,
      id: "docsearch"
    })), QuarkElement.h("div", {
      class: "toper-bar"
    }, QuarkElement.h("div", {
      class: "menu-group"
    }, QuarkElement.h("div", {
      class: "nav-item flyout"
    }, QuarkElement.h("button", {
      type: "button"
    }, QuarkElement.h("span", null, this.#ecosystemLangs.docs), QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24",
      class: "flyout-button-text-icon"
    }, QuarkElement.h("path", {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
    }))), QuarkElement.h("div", {
      class: "flyout-menu"
    }, QuarkElement.h("div", {
      class: "menu-wrap"
    }, QuarkElement.h("div", {
      class: "menu-items"
    }, QuarkElement.h("div", {
      class: "menu-item-group"
    }, QuarkElement.h("p", {
      class: "menu-group-title"
    }, this.#ecosystemLangs.docsTitle), this.#ecosystemLangs.stacks.map(item => QuarkElement.h("a", {
      key: item,
      class: "link menu-link",
      href: `https://${item}-quarkdesign.hellobike.com/#/${this.#isZhLang ? 'zh-CN' : 'en-US'}/component/button`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, item, " ", this.#isZhLang ? "文档" : "documentation", QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      class: "link-icon"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
    })))), QuarkElement.h("p", {
      class: "link menu-link",
      style: "color: #aaa"
    }, "Angular (Work in progress)"), QuarkElement.h("p", {
      class: "link menu-link",
      style: "color: #aaa"
    }, "Svelte (Work in progress)"), QuarkElement.h("p", {
      class: "link menu-link",
      style: "color: #aaa"
    }, "Javascript (Work in progress)")))))), QuarkElement.h("div", {
      class: "nav-item menu"
    }, QuarkElement.h("a", {
      target: "_blank",
      href: "https://quark-playground.hellobike.com/#/hello-world"
    }, "Playground")), QuarkElement.h("div", {
      class: "nav-item flyout"
    }, QuarkElement.h("button", {
      type: "button"
    }, QuarkElement.h("span", null, this.#ecosystemLangs.ecosystem), QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24",
      class: "flyout-button-text-icon"
    }, QuarkElement.h("path", {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
    }))), QuarkElement.h("div", {
      class: "flyout-menu"
    }, QuarkElement.h("div", {
      class: "menu-wrap"
    }, QuarkElement.h("div", {
      class: "menu-items"
    }, QuarkElement.h("div", {
      class: "menu-item-group"
    }, QuarkElement.h("p", {
      class: "menu-group-title"
    }, this.#ecosystemLangs.officialLibrary), QuarkElement.h("a", {
      class: "link menu-link",
      href: "https://quark.hellobike.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, this.#ecosystemLangs.stack, QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      class: "link-icon"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
    }))), QuarkElement.h("a", {
      class: "link menu-link",
      href: "https://github.com/hellof2e/quark-cli",
      target: "_blank",
      rel: "noopener noreferrer"
    }, this.#ecosystemLangs.noFrame, QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      class: "link-icon"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
    })))), QuarkElement.h("div", {
      class: "menu-item-group"
    }, QuarkElement.h("p", {
      class: "menu-group-title"
    }, this.#ecosystemLangs.resources), QuarkElement.h("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      class: "link menu-link",
      href: "https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension"
    }, this.#ecosystemLangs.vscodePlugin, QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      class: "link-icon"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
    })))), QuarkElement.h("div", {
      class: "menu-item-group"
    }, QuarkElement.h("p", {
      class: "menu-group-title"
    }, this.#ecosystemLangs.help), QuarkElement.h("a", {
      class: "link menu-link",
      href: "https://github.com/hellof2e/quark-design/discussions",
      target: "_blank",
      rel: "noopener noreferrer"
    }, this.#ecosystemLangs.gitHubDiscussions, QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      class: "link-icon"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
    }))))))))), QuarkElement.h("div", {
      class: "translations"
    }, QuarkElement.h("a", {
      class: "translate-lang",
      href: "javascript:void(0);",
      onClick: this._switchLang
    }, QuarkElement.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24"
    }, QuarkElement.h("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), QuarkElement.h("path", {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v"
    })))), QuarkElement.h("div", {
      class: "appearance"
    }, QuarkElement.h("dark-light-mode", null)), QuarkElement.h("div", {
      class: "social-links"
    }, QuarkElement.h("a", {
      href: "https://github.com/hellof2e/quark-design/discussions",
      class: "github-link",
      target: "_blank"
    }, QuarkElement.h("svg", {
      t: "1679995277175",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "5433",
      width: "200",
      height: "200"
    }, QuarkElement.h("path", {
      d: "M860.16 430.08c0-223.744-192-402.944-431.616-402.944C191.488 27.136 0 209.408 0 430.08c0 73.728 22.528 143.872 57.344 201.216l-41.472 140.8c-9.728 35.328 9.728 51.2 41.472 41.472l134.144-44.544c67.072 41.472 146.944 64 233.472 64 243.2 3.072 435.2-179.2 435.2-402.944z m-214.528-54.272c28.672 0 54.272 25.6 54.272 54.272s-25.6 54.272-54.272 54.272-54.272-25.6-54.272-54.272 25.6-54.272 54.272-54.272zM214.016 484.352c-28.672 0-54.272-25.6-54.272-54.272s25.6-54.272 54.272-54.272 54.272 25.6 54.272 54.272-22.016 54.272-54.272 54.272z m163.328-54.272c0-28.672 25.6-54.272 54.272-54.272s54.272 25.6 54.272 54.272-25.6 54.272-54.272 54.272-54.272-22.528-54.272-54.272z m0 0",
      "p-id": "5434"
    }), QuarkElement.h("path", {
      d: "M965.632 794.624c35.328-60.928 57.344-128 57.344-201.216 0-112.128-48.128-210.944-124.928-284.672 12.8 38.4 18.944 79.872 18.944 124.928v35.328c18.944 38.4 28.672 82.944 28.672 128 0 57.344-15.872 112.128-44.544 159.744l-18.944 28.672 9.728 35.328 15.872 54.272-51.2-15.872-35.328-12.8-31.744 18.944c-57.344 35.328-124.928 54.272-192 54.272-51.2 0-99.328-9.728-140.8-28.672H437.76c-54.272 0-108.544-9.728-156.672-25.6 79.872 79.872 192 131.072 320 131.072 86.528 0 166.4-25.6 233.472-64l143.872 48.128c28.672 9.728 44.544-6.144 35.328-35.328l-48.128-150.528z m0 0",
      "p-id": "5435"
    }))), QuarkElement.h("a", {
      href: "https://github.com/hellof2e/quark-design",
      class: "github-link",
      target: "_blank"
    }, QuarkElement.h("svg", {
      viewBox: "0 0 16 16",
      fill: "currentColor"
    }, QuarkElement.h("path", {
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    })))))))));
  }
};
MyComponent = __decorate([customElement({
  tag: "quark-doc-header",
  style: css_248z
})], MyComponent);
var MyComponent$1 = MyComponent;

export { MyComponent$1 as MyComponent };
