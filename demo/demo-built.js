!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('3');
  $__require('4')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("5", ["2", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2');
  module.exports = $__require('6').Object.keys;
  return module.exports;
});

$__System.registerDynamic("7", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('5'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("4", ["8", "6", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('8'),
      core = $__require('6'),
      fails = $__require('9');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("a", ["b", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('b');
  $__require('4')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

$__System.registerDynamic("c", ["d", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d');
  $__require('a');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("e", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('c'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('e')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("10", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("11", ["10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('10'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("12", ["d", "13", "14", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('d').getDesc,
      isObject = $__require('13'),
      anObject = $__require('14');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('15')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("16", ["8", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('8');
  $export($export.S, 'Object', {setPrototypeOf: $__require('12').set});
  return module.exports;
});

$__System.registerDynamic("17", ["16", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('16');
  module.exports = $__require('6').Object.setPrototypeOf;
  return module.exports;
});

$__System.registerDynamic("18", ["17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('17'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("19", ["11", "18"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('11')["default"];
  var _Object$setPrototypeOf = $__require('18')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("1a", ["1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('1b')["default"];
  exports["default"] = function(target, key, descriptors) {
    var _descriptor = descriptors[key];
    if (!_descriptor)
      return;
    var descriptor = {};
    for (var _key in _descriptor)
      descriptor[_key] = _descriptor[_key];
    descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined;
    _Object$defineProperty(target, key, descriptor);
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("1c", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('1c'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('1b')["default"];
  exports["default"] = (function() {
    function defineProperties(target, descriptors, initializers) {
      for (var i = 0; i < descriptors.length; i++) {
        var descriptor = descriptors[i];
        var decorators = descriptor.decorators;
        var key = descriptor.key;
        delete descriptor.key;
        delete descriptor.decorators;
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor || descriptor.initializer)
          descriptor.writable = true;
        if (decorators) {
          for (var f = 0; f < decorators.length; f++) {
            var decorator = decorators[f];
            if (typeof decorator === "function") {
              descriptor = decorator(target, key, descriptor) || descriptor;
            } else {
              throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
            }
          }
          if (descriptor.initializer !== undefined) {
            initializers[key] = descriptor;
            continue;
          }
        }
        _Object$defineProperty(target, key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps, protoInitializers);
      if (staticProps)
        defineProperties(Constructor, staticProps, staticInitializers);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register("1f", [], function (_export) {
	"use strict";

	_export("VoyaChartsTemplate", VoyaChartsTemplate);

	function VoyaChartsTemplate(el) {
		function render() {
			return "<div> I am a render div from voya charts </div>";
		}
		return {
			render: render
		};
	}

	return {
		setters: [],
		execute: function () {}
	};
});
$__System.registerDynamic("20", ["21", "22", "23", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('21'),
      ITERATOR = $__require('22')('iterator'),
      Iterators = $__require('23');
  module.exports = $__require('6').isIterable = function(it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  return module.exports;
});

$__System.registerDynamic("24", ["25", "26", "20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('25');
  $__require('26');
  module.exports = $__require('20');
  return module.exports;
});

$__System.registerDynamic("27", ["24"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('24'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("28", ["29", "27"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _getIterator = $__require('29')["default"];
  var _isIterable = $__require('27')["default"];
  exports["default"] = (function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr),
            _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["2a", "2b", "23", "b", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('2a'),
      step = $__require('2b'),
      Iterators = $__require('23'),
      toIObject = $__require('b');
  module.exports = $__require('2d')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("25", ["2c", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2c');
  var Iterators = $__require('23');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["2e", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('2e'),
      defined = $__require('30');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("31", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("32", ["33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('33');
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("35", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('9')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("33", ["d", "34", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      createDesc = $__require('34');
  module.exports = $__require('35') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("36", ["d", "34", "37", "33", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      descriptor = $__require('34'),
      setToStringTag = $__require('37'),
      IteratorPrototype = {};
  $__require('33')(IteratorPrototype, $__require('22')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("38", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("37", ["d", "38", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('d').setDesc,
      has = $__require('38'),
      TAG = $__require('22')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("2d", ["31", "8", "32", "33", "38", "23", "36", "37", "d", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('31'),
      $export = $__require('8'),
      redefine = $__require('32'),
      hide = $__require('33'),
      has = $__require('38'),
      Iterators = $__require('23'),
      $iterCreate = $__require('36'),
      setToStringTag = $__require('37'),
      getProto = $__require('d').getProto,
      ITERATOR = $__require('22')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("26", ["2f", "2d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('2f')(true);
  $__require('2d')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("14", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('13');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("21", ["39", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('39'),
      TAG = $__require('22')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("3a", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('3b'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("22", ["3a", "3c", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('3a')('wks'),
      uid = $__require('3c'),
      Symbol = $__require('3b').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("3d", ["21", "22", "23", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('21'),
      ITERATOR = $__require('22')('iterator'),
      Iterators = $__require('23');
  module.exports = $__require('6').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("3e", ["14", "3d", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('14'),
      get = $__require('3d');
  module.exports = $__require('6').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});

$__System.registerDynamic("3f", ["25", "26", "3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('25');
  $__require('26');
  module.exports = $__require('3e');
  return module.exports;
});

$__System.registerDynamic("29", ["3f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('3f'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("b", ["40", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('40'),
      defined = $__require('30');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("41", ["d", "b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      toIObject = $__require('b'),
      isEnum = $.isEnum;
  module.exports = function(isEntries) {
    return function(it) {
      var O = toIObject(it),
          keys = $.getKeys(O),
          length = keys.length,
          i = 0,
          result = [],
          key;
      while (length > i)
        if (isEnum.call(O, key = keys[i++])) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      return result;
    };
  };
  return module.exports;
});

$__System.registerDynamic("42", ["8", "41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('8'),
      $entries = $__require('41')(true);
  $export($export.S, 'Object', {entries: function entries(it) {
      return $entries(it);
    }});
  return module.exports;
});

$__System.registerDynamic("43", ["42", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('42');
  module.exports = $__require('6').Object.entries;
  return module.exports;
});

$__System.registerDynamic("44", ["43"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('43'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function preserveCamelCase(str) {
    var isLastCharLower = false;
    for (var i = 0; i < str.length; i++) {
      var c = str.charAt(i);
      if (isLastCharLower && (/[a-zA-Z]/).test(c) && c.toUpperCase() === c) {
        str = str.substr(0, i) + '-' + str.substr(i);
        isLastCharLower = false;
        i++;
      } else {
        isLastCharLower = (c.toLowerCase() === c);
      }
    }
    return str;
  }
  module.exports = function() {
    var str = [].map.call(arguments, function(str) {
      return str.trim();
    }).filter(function(str) {
      return str.length;
    }).join('-');
    if (!str.length) {
      return '';
    }
    if (str.length === 1) {
      return str;
    }
    if (!(/[_.\- ]+/).test(str)) {
      if (str === str.toUpperCase()) {
        return str.toLowerCase();
      }
      if (str[0] !== str[0].toLowerCase()) {
        return str[0].toLowerCase() + str.slice(1);
      }
      return str;
    }
    str = preserveCamelCase(str);
    return str.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
      return p1.toUpperCase();
    });
  };
  return module.exports;
});

$__System.registerDynamic("46", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('45');
  return module.exports;
});

$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(str, sep) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string');
    }
    sep = typeof sep === 'undefined' ? '_' : sep;
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2').toLowerCase();
  };
  return module.exports;
});

$__System.registerDynamic("48", ["47"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('47');
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("49", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("15", ["49"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('49');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("8", ["3b", "6", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('3b'),
      core = $__require('6'),
      ctx = $__require('15'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("30", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("3", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('30');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("40", ["39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('39');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("4a", ["d", "3", "40", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      toObject = $__require('3'),
      IObject = $__require('40');
  module.exports = $__require('9')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("4b", ["8", "4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('8');
  $export($export.S + $export.F, 'Object', {assign: $__require('4a')});
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("4c", ["4b", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('4b');
  module.exports = $__require('6').Object.assign;
  return module.exports;
});

$__System.registerDynamic("4d", ["4c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('4c'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('4e', ['4d'], function (_export) {
    var _Object$assign;

    function decorator(fn) {
        return function (options) {
            if (arguments.length <= 1) {
                return function (target, key, descriptor) {
                    _Object$assign(descriptor, options);

                    return fn.call(target, target, key, descriptor);
                };
            } else if (arguments.length === 3) {
                return fn.apply(arguments[0], arguments);
            } else {
                throw 'Illegal invocation of decorator';
            }
        };
    }

    /**
     * decorators take 3 arguments when invoked in a class definition
     * if it is invoked with less, this will return false
     * @returns {boolean}
     */

    function invokedAsDecorator() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return args.length === 3 || args.filter(function (item) {
            return typeof item === "function";
        }).length > 0;
    }

    /**
     * coerces a string value to a specified type
     * @param value
     * @param type
     * @returns {*}
     */

    function coerce(value, type) {
        switch (type) {
            case 'boolean':
                // if the attribute is present, with no value, it will evaluate to true
                // the attribute will only be false if it's value is "false" (case-insensitive)
                if (typeof value === 'string') {
                    return !/false/i.test(value);
                }
            case 'object':
                if (typeof value === 'string' && value !== '') {
                    value = JSON.parse(value);
                }
            case 'integer':
                if (typeof value === 'string') {
                    value = parseInt(value);
                }
            case 'float':
                if (typeof value === 'string') {
                    value = parseFloat(value);
                }
        }

        return value;
    }

    return {
        setters: [function (_d) {
            _Object$assign = _d['default'];
        }],
        execute: function () {
            /**
             * a function which wraps a passed decorator `fn`
             * allows you to do either:
             *   @property
             *   test = {}
             * OR
             *   @property()
             *   test = {}
             * OR
             *   @property({option1: true})
             *   test = {}
             *
             * it tacks on options to the descriptor object
             *
             * @param {Function} fn signature: (target, key, descriptor)
             * @returns {Function} method/property decorator
             */
            'use strict';

            _export('decorator', decorator);

            _export('invokedAsDecorator', invokedAsDecorator);

            _export('coerce', coerce);
        }
    };
});
$__System.register('4f', ['28', '29', '44', '46', '48', '4d', '4e'], function (_export) {
    var _slicedToArray, _getIterator, _Object$entries, camelcase, decamelize, _Object$assign, decorator, coerce, property, nullable, ui;

    /** Helper Methods **/
    function ensurePrototypeProperties(target) {
        if (!target._initializers && !target._attributes) {
            Object.defineProperty(target, '_initializers', {
                value: {},
                enumerable: false,
                writable: false,
                configurable: false
            });

            Object.defineProperty(target, '_attributes', {
                value: {},
                enumerable: false,
                writable: false,
                configurable: false
            });

            var createdCallback = target.createdCallback;
            target.createdCallback = function () {
                ensureInstanceProperties(this);

                // initializers first
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(_Object$entries(this._initializers)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _step$value = _slicedToArray(_step.value, 2);

                        var prop = _step$value[0];
                        var initializer = _step$value[1];

                        this._properties[prop] = initializer();
                    }

                    // then attribute values
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _getIterator(_Object$entries(this._attributes)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _step2$value = _slicedToArray(_step2.value, 2);

                        var prop = _step2$value[0];
                        var type = _step2$value[1];

                        var attr = decamelize(prop, '-');
                        var value = this.getAttribute(attr);
                        if (value != undefined) {
                            this._properties[prop] = coerce(this.getAttribute(attr), type);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (typeof createdCallback === 'function') {
                    return createdCallback.apply(this, arguments);
                }
            };

            var attributeChangedCallback = target.attributeChangedCallback;
            target.attributeChangedCallback = function (attr, oldValue, newValue) {
                var prop = camelcase(attr);

                if (prop in this._attributes) {
                    this[prop] = coerce(newValue, this._attributes[prop]);
                }

                if (typeof attributeChangedCallback === 'function') {
                    return attributeChangedCallback.apply(this, arguments);
                }
            };
        }
    }

    function ensureInstanceProperties(instance) {
        return instance._properties = instance._properties || {};
    }
    return {
        setters: [function (_) {
            _slicedToArray = _['default'];
        }, function (_2) {
            _getIterator = _2['default'];
        }, function (_3) {
            _Object$entries = _3['default'];
        }, function (_4) {
            camelcase = _4['default'];
        }, function (_5) {
            decamelize = _5['default'];
        }, function (_d) {
            _Object$assign = _d['default'];
        }, function (_e) {
            decorator = _e.decorator;
            coerce = _e.coerce;
        }],
        execute: function () {
            'use strict';

            property = decorator(function (target, key, descriptor) {
                ensurePrototypeProperties(target);

                // apply defaults
                descriptor = _Object$assign({
                    nullable: false,
                    synced: true, // if true, the html attribute value is synced to this property
                    type: undefined
                }, descriptor);

                // this ensures that ALL properties have an initializer, defaulting
                // to an initializer which returns undefined.
                // this is so all dev-defined properties will exist in the _properties hash
                // upon instantiation.
                target._initializers[key] = descriptor.initializer || function () {
                    return undefined;
                };

                // this is a list of all properties that are synced to HTML attributes
                // the type attribute only applies when the attribute is synced
                if (descriptor.synced) {
                    target._attributes[key] = descriptor.type || null;
                } else if (descriptor.type) {
                    console.warn('The `type` option is only available for properties using `synced: true`');
                }

                descriptor.configurable = false;
                descriptor.enumerable = true;
                delete descriptor.value;
                delete descriptor.initializer;
                delete descriptor.writable;

                descriptor.get = descriptor.get || function () {
                    var properties = ensureInstanceProperties(this);
                    return properties[key];
                };

                descriptor.set = descriptor.set || function (value) {
                    var properties = ensureInstanceProperties(this);
                    var oldValue = properties[key];
                    properties[key] = value;

                    if (typeof this.propertyChangedCallback === 'function' && oldValue !== value) {
                        this.propertyChangedCallback(key, oldValue, value);
                    }
                };

                if (descriptor.nullable === true) {
                    (function () {
                        var getter = descriptor.get;
                        descriptor.get = function () {
                            return getter.call(this) || null;
                        };
                    })();
                }

                return descriptor;
            });

            _export('property', property);

            nullable = decorator(function (target, key, descriptor) {
                descriptor.nullable = true;
                return descriptor;
            });

            _export('nullable', nullable);

            ui = decorator(function (target, key, descriptor) {
                if (!descriptor.selector) {
                    return console.warn('No \'selector\' option specified for @ui \'' + key + '\'');
                }

                return {
                    get: function get() {
                        return this.querySelector(descriptor.selector);
                    },
                    configurable: false,
                    enumerable: true
                };
            });

            _export('ui', ui);
        }
    };
});
$__System.register('50', ['19', 'f', '1a', '1d', '1e', '1f', '4f'], function (_export) {
	var _inherits, _get, _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, VoyaChartsTemplate, property, nullable, VoyaCharts;

	return {
		setters: [function (_) {
			_inherits = _['default'];
		}, function (_f) {
			_get = _f['default'];
		}, function (_a) {
			_defineDecoratedPropertyDescriptor = _a['default'];
		}, function (_d) {
			_createDecoratedClass = _d['default'];
		}, function (_e) {
			_classCallCheck = _e['default'];
		}, function (_f2) {
			VoyaChartsTemplate = _f2.VoyaChartsTemplate;
		}, function (_f3) {
			property = _f3.property;
			nullable = _f3.nullable;
		}],
		execute: function () {
			'use strict';

			VoyaCharts = (function (_ref) {
				var _instanceInitializers = {};

				_inherits(VoyaCharts, _ref);

				function VoyaCharts() {
					_classCallCheck(this, VoyaCharts);

					_get(Object.getPrototypeOf(VoyaCharts.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property0', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property1', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property2', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property3', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property4', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property5', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property6', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property7', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property8', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property9', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property10', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property11', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property12', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property13', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'property14', _instanceInitializers);
				}

				_createDecoratedClass(VoyaCharts, [{
					key: 'createdCallback',
					value: function createdCallback() {
						//STUB:: to enter in default values for your class instance

						this.template = VoyaChartsTemplate();
						this.render();
					}
				}, {
					key: 'render',

					//end voyaCharts getters and setters :: next line registers our eventBus

					value: function render() {
						this.innerHTML = this.template.render();
					}
				}, {
					key: 'propertyChangedCallback',
					value: function propertyChangedCallback(prop, oldValue, newValue) {
						// STUB:: to listen to property decorator change values

					}
				}, {
					key: 'template',
					decorators: [nullable, property],
					initializer: null,
					enumerable: true
				}, {
					key: 'property0',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property1',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property2',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property3',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property4',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property5',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property6',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property7',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property8',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property9',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property10',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property11',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property12',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property13',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'property14',
					decorators: [nullable, property],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}], null, _instanceInitializers);

				return VoyaCharts;
			})(HTMLElement || Element);

			document.registerElement('voya-charts', VoyaCharts);
		}
	};
});
$__System.registerDynamic("51", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Delegate;
  function Delegate(root) {
    this.listenerMap = [{}, {}];
    if (root) {
      this.root(root);
    }
    this.handle = Delegate.prototype.handle.bind(this);
  }
  Delegate.prototype.root = function(root) {
    var listenerMap = this.listenerMap;
    var eventType;
    if (this.rootElement) {
      for (eventType in listenerMap[1]) {
        if (listenerMap[1].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, true);
        }
      }
      for (eventType in listenerMap[0]) {
        if (listenerMap[0].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, false);
        }
      }
    }
    if (!root || !root.addEventListener) {
      if (this.rootElement) {
        delete this.rootElement;
      }
      return this;
    }
    this.rootElement = root;
    for (eventType in listenerMap[1]) {
      if (listenerMap[1].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, true);
      }
    }
    for (eventType in listenerMap[0]) {
      if (listenerMap[0].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, false);
      }
    }
    return this;
  };
  Delegate.prototype.captureForType = function(eventType) {
    return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
  };
  Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
    var root,
        listenerMap,
        matcher,
        matcherParam;
    if (!eventType) {
      throw new TypeError('Invalid event type: ' + eventType);
    }
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }
    if (useCapture === undefined) {
      useCapture = this.captureForType(eventType);
    }
    if (typeof handler !== 'function') {
      throw new TypeError('Handler must be a type of Function');
    }
    root = this.rootElement;
    listenerMap = this.listenerMap[useCapture ? 1 : 0];
    if (!listenerMap[eventType]) {
      if (root) {
        root.addEventListener(eventType, this.handle, useCapture);
      }
      listenerMap[eventType] = [];
    }
    if (!selector) {
      matcherParam = null;
      matcher = matchesRoot.bind(this);
    } else if (/^[a-z]+$/i.test(selector)) {
      matcherParam = selector;
      matcher = matchesTag;
    } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
      matcherParam = selector.slice(1);
      matcher = matchesId;
    } else {
      matcherParam = selector;
      matcher = matches;
    }
    listenerMap[eventType].push({
      selector: selector,
      handler: handler,
      matcher: matcher,
      matcherParam: matcherParam
    });
    return this;
  };
  Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
    var i,
        listener,
        listenerMap,
        listenerList,
        singleEventType;
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }
    if (useCapture === undefined) {
      this.off(eventType, selector, handler, true);
      this.off(eventType, selector, handler, false);
      return this;
    }
    listenerMap = this.listenerMap[useCapture ? 1 : 0];
    if (!eventType) {
      for (singleEventType in listenerMap) {
        if (listenerMap.hasOwnProperty(singleEventType)) {
          this.off(singleEventType, selector, handler);
        }
      }
      return this;
    }
    listenerList = listenerMap[eventType];
    if (!listenerList || !listenerList.length) {
      return this;
    }
    for (i = listenerList.length - 1; i >= 0; i--) {
      listener = listenerList[i];
      if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
        listenerList.splice(i, 1);
      }
    }
    if (!listenerList.length) {
      delete listenerMap[eventType];
      if (this.rootElement) {
        this.rootElement.removeEventListener(eventType, this.handle, useCapture);
      }
    }
    return this;
  };
  Delegate.prototype.handle = function(event) {
    var i,
        l,
        type = event.type,
        root,
        phase,
        listener,
        returned,
        listenerList = [],
        target,
        EVENTIGNORE = 'ftLabsDelegateIgnore';
    if (event[EVENTIGNORE] === true) {
      return;
    }
    target = event.target;
    if (target.nodeType === 3) {
      target = target.parentNode;
    }
    root = this.rootElement;
    phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2);
    switch (phase) {
      case 1:
        listenerList = this.listenerMap[1][type];
        break;
      case 2:
        if (this.listenerMap[0] && this.listenerMap[0][type])
          listenerList = listenerList.concat(this.listenerMap[0][type]);
        if (this.listenerMap[1] && this.listenerMap[1][type])
          listenerList = listenerList.concat(this.listenerMap[1][type]);
        break;
      case 3:
        listenerList = this.listenerMap[0][type];
        break;
    }
    l = listenerList.length;
    while (target && l) {
      for (i = 0; i < l; i++) {
        listener = listenerList[i];
        if (!listener) {
          break;
        }
        if (listener.matcher.call(target, listener.matcherParam, target)) {
          returned = this.fire(event, target, listener);
        }
        if (returned === false) {
          event[EVENTIGNORE] = true;
          event.preventDefault();
          return;
        }
      }
      if (target === root) {
        break;
      }
      l = listenerList.length;
      target = target.parentElement;
    }
  };
  Delegate.prototype.fire = function(event, target, listener) {
    return listener.handler.call(target, event, target);
  };
  var matches = (function(el) {
    if (!el)
      return;
    var p = el.prototype;
    return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
  }(Element));
  function matchesTag(tagName, element) {
    return tagName.toLowerCase() === element.tagName.toLowerCase();
  }
  function matchesRoot(selector, element) {
    if (this.rootElement === window)
      return element === document;
    return this.rootElement === element;
  }
  function matchesId(id, element) {
    return id === element.id;
  }
  Delegate.prototype.destroy = function() {
    this.off();
    this.root();
  };
  return module.exports;
});

$__System.registerDynamic("52", ["51"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Delegate = $__require('51');
  module.exports = function(root) {
    return new Delegate(root);
  };
  module.exports.Delegate = Delegate;
  return module.exports;
});

$__System.registerDynamic("53", ["52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('52');
  return module.exports;
});

$__System.register('1', ['7', '50', '53'], function (_export) {
	var _Object$keys, delegate, eventMethod;

	function appLoaded() {
		var menu = document.querySelector('.toolbar');
		var voyaCharts = document.querySelector('voya-charts');

		delegate(menu).on('click', "li", function (e) {
			console.log('this menu is here and ready for voya-charts to be  leveraged to display features to devs');
		});
	}
	return {
		setters: [function (_) {
			_Object$keys = _['default'];
		}, function (_2) {}, function (_3) {
			delegate = _3['default'];
		}],
		execute: function () {
			'use strict';

			eventMethod = addEventListener ? { addEventListener: "DOMContentLoaded" } : { attachEvent: "onload" };

			window[_Object$keys(eventMethod)[0]](eventMethod[_Object$keys(eventMethod)[0]], appLoaded);
		}
	};
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=demo-built.js.map