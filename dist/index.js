function Yd(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var fs = { exports: {} }, En = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function dv() {
  if (Td) return En;
  Td = 1;
  var v = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function A(f, C, B) {
    var V = null;
    if (B !== void 0 && (V = "" + B), C.key !== void 0 && (V = "" + C.key), "key" in C) {
      B = {};
      for (var I in C)
        I !== "key" && (B[I] = C[I]);
    } else B = C;
    return C = B.ref, {
      $$typeof: v,
      type: f,
      key: V,
      ref: C !== void 0 ? C : null,
      props: B
    };
  }
  return En.Fragment = T, En.jsx = A, En.jsxs = A, En;
}
var _d;
function mv() {
  return _d || (_d = 1, fs.exports = dv()), fs.exports;
}
var i = mv(), os = { exports: {} }, F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function vv() {
  if (Md) return F;
  Md = 1;
  var v = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), V = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), Z = Symbol.iterator;
  function W(d) {
    return d === null || typeof d != "object" ? null : (d = Z && d[Z] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var ue = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, G = Object.assign, O = {};
  function K(d, M, H) {
    this.props = d, this.context = M, this.refs = O, this.updater = H || ue;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(d, M) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, M, "setState");
  }, K.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function J() {
  }
  J.prototype = K.prototype;
  function Q(d, M, H) {
    this.props = d, this.context = M, this.refs = O, this.updater = H || ue;
  }
  var Se = Q.prototype = new J();
  Se.constructor = Q, G(Se, K.prototype), Se.isPureReactComponent = !0;
  var Ae = Array.isArray;
  function g() {
  }
  var p = { H: null, A: null, T: null, S: null }, _e = Object.prototype.hasOwnProperty;
  function ze(d, M, H) {
    var q = H.ref;
    return {
      $$typeof: v,
      type: d,
      key: M,
      ref: q !== void 0 ? q : null,
      props: H
    };
  }
  function Ce(d, M) {
    return ze(d.type, M, d.props);
  }
  function Be(d) {
    return typeof d == "object" && d !== null && d.$$typeof === v;
  }
  function qe(d) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(H) {
      return M[H];
    });
  }
  var Ot = /\/+/g;
  function et(d, M) {
    return typeof d == "object" && d !== null && d.key != null ? qe("" + d.key) : M.toString(36);
  }
  function Oe(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(g, g) : (d.status = "pending", d.then(
          function(M) {
            d.status === "pending" && (d.status = "fulfilled", d.value = M);
          },
          function(M) {
            d.status === "pending" && (d.status = "rejected", d.reason = M);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function j(d, M, H, q, P) {
    var le = typeof d;
    (le === "undefined" || le === "boolean") && (d = null);
    var ve = !1;
    if (d === null) ve = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case v:
            case T:
              ve = !0;
              break;
            case X:
              return ve = d._init, j(
                ve(d._payload),
                M,
                H,
                q,
                P
              );
          }
      }
    if (ve)
      return P = P(d), ve = q === "" ? "." + et(d, 0) : q, Ae(P) ? (H = "", ve != null && (H = ve.replace(Ot, "$&/") + "/"), j(P, M, H, "", function(Oa) {
        return Oa;
      })) : P != null && (Be(P) && (P = Ce(
        P,
        H + (P.key == null || d && d.key === P.key ? "" : ("" + P.key).replace(
          Ot,
          "$&/"
        ) + "/") + ve
      )), M.push(P)), 1;
    ve = 0;
    var Ie = q === "" ? "." : q + ":";
    if (Ae(d))
      for (var Re = 0; Re < d.length; Re++)
        q = d[Re], le = Ie + et(q, Re), ve += j(
          q,
          M,
          H,
          le,
          P
        );
    else if (Re = W(d), typeof Re == "function")
      for (d = Re.call(d), Re = 0; !(q = d.next()).done; )
        q = q.value, le = Ie + et(q, Re++), ve += j(
          q,
          M,
          H,
          le,
          P
        );
    else if (le === "object") {
      if (typeof d.then == "function")
        return j(
          Oe(d),
          M,
          H,
          q,
          P
        );
      throw M = String(d), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function R(d, M, H) {
    if (d == null) return d;
    var q = [], P = 0;
    return j(d, q, "", "", function(le) {
      return M.call(H, le, P++);
    }), q;
  }
  function $(d) {
    if (d._status === -1) {
      var M = d._result;
      M = M(), M.then(
        function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = H);
        },
        function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = H);
        }
      ), d._status === -1 && (d._status = 0, d._result = M);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var xe = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, Ne = {
    map: R,
    forEach: function(d, M, H) {
      R(
        d,
        function() {
          M.apply(this, arguments);
        },
        H
      );
    },
    count: function(d) {
      var M = 0;
      return R(d, function() {
        M++;
      }), M;
    },
    toArray: function(d) {
      return R(d, function(M) {
        return M;
      }) || [];
    },
    only: function(d) {
      if (!Be(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return F.Activity = _, F.Children = Ne, F.Component = K, F.Fragment = A, F.Profiler = C, F.PureComponent = Q, F.StrictMode = f, F.Suspense = U, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = p, F.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return p.H.useMemoCache(d);
    }
  }, F.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, F.cacheSignal = function() {
    return null;
  }, F.cloneElement = function(d, M, H) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var q = G({}, d.props), P = d.key;
    if (M != null)
      for (le in M.key !== void 0 && (P = "" + M.key), M)
        !_e.call(M, le) || le === "key" || le === "__self" || le === "__source" || le === "ref" && M.ref === void 0 || (q[le] = M[le]);
    var le = arguments.length - 2;
    if (le === 1) q.children = H;
    else if (1 < le) {
      for (var ve = Array(le), Ie = 0; Ie < le; Ie++)
        ve[Ie] = arguments[Ie + 2];
      q.children = ve;
    }
    return ze(d.type, P, q);
  }, F.createContext = function(d) {
    return d = {
      $$typeof: V,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: B,
      _context: d
    }, d;
  }, F.createElement = function(d, M, H) {
    var q, P = {}, le = null;
    if (M != null)
      for (q in M.key !== void 0 && (le = "" + M.key), M)
        _e.call(M, q) && q !== "key" && q !== "__self" && q !== "__source" && (P[q] = M[q]);
    var ve = arguments.length - 2;
    if (ve === 1) P.children = H;
    else if (1 < ve) {
      for (var Ie = Array(ve), Re = 0; Re < ve; Re++)
        Ie[Re] = arguments[Re + 2];
      P.children = Ie;
    }
    if (d && d.defaultProps)
      for (q in ve = d.defaultProps, ve)
        P[q] === void 0 && (P[q] = ve[q]);
    return ze(d, le, P);
  }, F.createRef = function() {
    return { current: null };
  }, F.forwardRef = function(d) {
    return { $$typeof: I, render: d };
  }, F.isValidElement = Be, F.lazy = function(d) {
    return {
      $$typeof: X,
      _payload: { _status: -1, _result: d },
      _init: $
    };
  }, F.memo = function(d, M) {
    return {
      $$typeof: S,
      type: d,
      compare: M === void 0 ? null : M
    };
  }, F.startTransition = function(d) {
    var M = p.T, H = {};
    p.T = H;
    try {
      var q = d(), P = p.S;
      P !== null && P(H, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(g, xe);
    } catch (le) {
      xe(le);
    } finally {
      M !== null && H.types !== null && (M.types = H.types), p.T = M;
    }
  }, F.unstable_useCacheRefresh = function() {
    return p.H.useCacheRefresh();
  }, F.use = function(d) {
    return p.H.use(d);
  }, F.useActionState = function(d, M, H) {
    return p.H.useActionState(d, M, H);
  }, F.useCallback = function(d, M) {
    return p.H.useCallback(d, M);
  }, F.useContext = function(d) {
    return p.H.useContext(d);
  }, F.useDebugValue = function() {
  }, F.useDeferredValue = function(d, M) {
    return p.H.useDeferredValue(d, M);
  }, F.useEffect = function(d, M) {
    return p.H.useEffect(d, M);
  }, F.useEffectEvent = function(d) {
    return p.H.useEffectEvent(d);
  }, F.useId = function() {
    return p.H.useId();
  }, F.useImperativeHandle = function(d, M, H) {
    return p.H.useImperativeHandle(d, M, H);
  }, F.useInsertionEffect = function(d, M) {
    return p.H.useInsertionEffect(d, M);
  }, F.useLayoutEffect = function(d, M) {
    return p.H.useLayoutEffect(d, M);
  }, F.useMemo = function(d, M) {
    return p.H.useMemo(d, M);
  }, F.useOptimistic = function(d, M) {
    return p.H.useOptimistic(d, M);
  }, F.useReducer = function(d, M, H) {
    return p.H.useReducer(d, M, H);
  }, F.useRef = function(d) {
    return p.H.useRef(d);
  }, F.useState = function(d) {
    return p.H.useState(d);
  }, F.useSyncExternalStore = function(d, M, H) {
    return p.H.useSyncExternalStore(
      d,
      M,
      H
    );
  }, F.useTransition = function() {
    return p.H.useTransition();
  }, F.version = "19.2.4", F;
}
var Ad;
function gs() {
  return Ad || (Ad = 1, os.exports = vv()), os.exports;
}
var D = gs();
const hv = /* @__PURE__ */ Yd(D);
var ds = { exports: {} }, Tn = {}, ms = { exports: {} }, vs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function yv() {
  return Cd || (Cd = 1, (function(v) {
    function T(j, R) {
      var $ = j.length;
      j.push(R);
      e: for (; 0 < $; ) {
        var xe = $ - 1 >>> 1, Ne = j[xe];
        if (0 < C(Ne, R))
          j[xe] = R, j[$] = Ne, $ = xe;
        else break e;
      }
    }
    function A(j) {
      return j.length === 0 ? null : j[0];
    }
    function f(j) {
      if (j.length === 0) return null;
      var R = j[0], $ = j.pop();
      if ($ !== R) {
        j[0] = $;
        e: for (var xe = 0, Ne = j.length, d = Ne >>> 1; xe < d; ) {
          var M = 2 * (xe + 1) - 1, H = j[M], q = M + 1, P = j[q];
          if (0 > C(H, $))
            q < Ne && 0 > C(P, H) ? (j[xe] = P, j[q] = $, xe = q) : (j[xe] = H, j[M] = $, xe = M);
          else if (q < Ne && 0 > C(P, $))
            j[xe] = P, j[q] = $, xe = q;
          else break e;
        }
      }
      return R;
    }
    function C(j, R) {
      var $ = j.sortIndex - R.sortIndex;
      return $ !== 0 ? $ : j.id - R.id;
    }
    if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      v.unstable_now = function() {
        return B.now();
      };
    } else {
      var V = Date, I = V.now();
      v.unstable_now = function() {
        return V.now() - I;
      };
    }
    var U = [], S = [], X = 1, _ = null, Z = 3, W = !1, ue = !1, G = !1, O = !1, K = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function Se(j) {
      for (var R = A(S); R !== null; ) {
        if (R.callback === null) f(S);
        else if (R.startTime <= j)
          f(S), R.sortIndex = R.expirationTime, T(U, R);
        else break;
        R = A(S);
      }
    }
    function Ae(j) {
      if (G = !1, Se(j), !ue)
        if (A(U) !== null)
          ue = !0, g || (g = !0, qe());
        else {
          var R = A(S);
          R !== null && Oe(Ae, R.startTime - j);
        }
    }
    var g = !1, p = -1, _e = 5, ze = -1;
    function Ce() {
      return O ? !0 : !(v.unstable_now() - ze < _e);
    }
    function Be() {
      if (O = !1, g) {
        var j = v.unstable_now();
        ze = j;
        var R = !0;
        try {
          e: {
            ue = !1, G && (G = !1, J(p), p = -1), W = !0;
            var $ = Z;
            try {
              t: {
                for (Se(j), _ = A(U); _ !== null && !(_.expirationTime > j && Ce()); ) {
                  var xe = _.callback;
                  if (typeof xe == "function") {
                    _.callback = null, Z = _.priorityLevel;
                    var Ne = xe(
                      _.expirationTime <= j
                    );
                    if (j = v.unstable_now(), typeof Ne == "function") {
                      _.callback = Ne, Se(j), R = !0;
                      break t;
                    }
                    _ === A(U) && f(U), Se(j);
                  } else f(U);
                  _ = A(U);
                }
                if (_ !== null) R = !0;
                else {
                  var d = A(S);
                  d !== null && Oe(
                    Ae,
                    d.startTime - j
                  ), R = !1;
                }
              }
              break e;
            } finally {
              _ = null, Z = $, W = !1;
            }
            R = void 0;
          }
        } finally {
          R ? qe() : g = !1;
        }
      }
    }
    var qe;
    if (typeof Q == "function")
      qe = function() {
        Q(Be);
      };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), et = Ot.port2;
      Ot.port1.onmessage = Be, qe = function() {
        et.postMessage(null);
      };
    } else
      qe = function() {
        K(Be, 0);
      };
    function Oe(j, R) {
      p = K(function() {
        j(v.unstable_now());
      }, R);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, v.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _e = 0 < j ? Math.floor(1e3 / j) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, v.unstable_next = function(j) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = Z;
      }
      var $ = Z;
      Z = R;
      try {
        return j();
      } finally {
        Z = $;
      }
    }, v.unstable_requestPaint = function() {
      O = !0;
    }, v.unstable_runWithPriority = function(j, R) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = Z;
      Z = j;
      try {
        return R();
      } finally {
        Z = $;
      }
    }, v.unstable_scheduleCallback = function(j, R, $) {
      var xe = v.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? xe + $ : xe) : $ = xe, j) {
        case 1:
          var Ne = -1;
          break;
        case 2:
          Ne = 250;
          break;
        case 5:
          Ne = 1073741823;
          break;
        case 4:
          Ne = 1e4;
          break;
        default:
          Ne = 5e3;
      }
      return Ne = $ + Ne, j = {
        id: X++,
        callback: R,
        priorityLevel: j,
        startTime: $,
        expirationTime: Ne,
        sortIndex: -1
      }, $ > xe ? (j.sortIndex = $, T(S, j), A(U) === null && j === A(S) && (G ? (J(p), p = -1) : G = !0, Oe(Ae, $ - xe))) : (j.sortIndex = Ne, T(U, j), ue || W || (ue = !0, g || (g = !0, qe()))), j;
    }, v.unstable_shouldYield = Ce, v.unstable_wrapCallback = function(j) {
      var R = Z;
      return function() {
        var $ = Z;
        Z = R;
        try {
          return j.apply(this, arguments);
        } finally {
          Z = $;
        }
      };
    };
  })(vs)), vs;
}
var Od;
function xv() {
  return Od || (Od = 1, ms.exports = yv()), ms.exports;
}
var hs = { exports: {} }, Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function bv() {
  if (Ud) return Fe;
  Ud = 1;
  var v = gs();
  function T(U) {
    var S = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++)
        S += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return "Minified React error #" + U + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var f = {
    d: {
      f: A,
      r: function() {
        throw Error(T(522));
      },
      D: A,
      C: A,
      L: A,
      m: A,
      X: A,
      S: A,
      M: A
    },
    p: 0,
    findDOMNode: null
  }, C = Symbol.for("react.portal");
  function B(U, S, X) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: _ == null ? null : "" + _,
      children: U,
      containerInfo: S,
      implementation: X
    };
  }
  var V = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(U, S) {
    if (U === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Fe.createPortal = function(U, S) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(T(299));
    return B(U, S, null, X);
  }, Fe.flushSync = function(U) {
    var S = V.T, X = f.p;
    try {
      if (V.T = null, f.p = 2, U) return U();
    } finally {
      V.T = S, f.p = X, f.d.f();
    }
  }, Fe.preconnect = function(U, S) {
    typeof U == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, f.d.C(U, S));
  }, Fe.prefetchDNS = function(U) {
    typeof U == "string" && f.d.D(U);
  }, Fe.preinit = function(U, S) {
    if (typeof U == "string" && S && typeof S.as == "string") {
      var X = S.as, _ = I(X, S.crossOrigin), Z = typeof S.integrity == "string" ? S.integrity : void 0, W = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      X === "style" ? f.d.S(
        U,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: _,
          integrity: Z,
          fetchPriority: W
        }
      ) : X === "script" && f.d.X(U, {
        crossOrigin: _,
        integrity: Z,
        fetchPriority: W,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Fe.preinitModule = function(U, S) {
    if (typeof U == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var X = I(
            S.as,
            S.crossOrigin
          );
          f.d.M(U, {
            crossOrigin: X,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && f.d.M(U);
  }, Fe.preload = function(U, S) {
    if (typeof U == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var X = S.as, _ = I(X, S.crossOrigin);
      f.d.L(U, X, {
        crossOrigin: _,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Fe.preloadModule = function(U, S) {
    if (typeof U == "string")
      if (S) {
        var X = I(S.as, S.crossOrigin);
        f.d.m(U, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: X,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else f.d.m(U);
  }, Fe.requestFormReset = function(U) {
    f.d.r(U);
  }, Fe.unstable_batchedUpdates = function(U, S) {
    return U(S);
  }, Fe.useFormState = function(U, S, X) {
    return V.H.useFormState(U, S, X);
  }, Fe.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, Fe.version = "19.2.4", Fe;
}
var Dd;
function gv() {
  if (Dd) return hs.exports;
  Dd = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (T) {
        console.error(T);
      }
  }
  return v(), hs.exports = bv(), hs.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function pv() {
  if (Rd) return Tn;
  Rd = 1;
  var v = xv(), T = gs(), A = gv();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function B(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function V(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function I(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (B(e) !== e)
      throw Error(f(188));
  }
  function S(e) {
    var t = e.alternate;
    if (!t) {
      if (t = B(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return U(n), e;
          if (u === a) return U(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            c = !0, l = n, a = u;
            break;
          }
          if (s === a) {
            c = !0, a = n, l = u;
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              c = !0, l = u, a = n;
              break;
            }
            if (s === a) {
              c = !0, a = u, l = n;
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function X(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = X(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign, Z = Symbol.for("react.element"), W = Symbol.for("react.transitional.element"), ue = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ze = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function qe(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ot = Symbol.for("react.client.reference");
  function et(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ot ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case K:
        return "Profiler";
      case O:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case g:
        return "SuspenseList";
      case ze:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ue:
          return "Portal";
        case Q:
          return e.displayName || "Context";
        case J:
          return (e._context.displayName || "Context") + ".Consumer";
        case Se:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case p:
          return t = e.displayName || null, t !== null ? t : et(e.type) || "Memo";
        case _e:
          t = e._payload, e = e._init;
          try {
            return et(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, j = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xe = [], Ne = -1;
  function d(e) {
    return { current: e };
  }
  function M(e) {
    0 > Ne || (e.current = xe[Ne], xe[Ne] = null, Ne--);
  }
  function H(e, t) {
    Ne++, xe[Ne] = e.current, e.current = t;
  }
  var q = d(null), P = d(null), le = d(null), ve = d(null);
  function Ie(e, t) {
    switch (H(le, t), H(P, e), H(q, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? $o(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = $o(t), e = Wo(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    M(q), H(q, e);
  }
  function Re() {
    M(q), M(P), M(le);
  }
  function Oa(e) {
    e.memoizedState !== null && H(ve, e);
    var t = q.current, l = Wo(t, e.type);
    t !== l && (H(P, e), H(q, l));
  }
  function _n(e) {
    P.current === e && (M(q), M(P)), ve.current === e && (M(ve), Sn._currentValue = $);
  }
  var Ku, js;
  function El(e) {
    if (Ku === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ku = t && t[1] || "", js = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ku + e + js;
  }
  var ku = !1;
  function Ju(e, t) {
    if (!e || ku) return "";
    ku = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (b) {
                  var x = b;
                }
                Reflect.construct(e, [], E);
              } else {
                try {
                  E.call();
                } catch (b) {
                  x = b;
                }
                e.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                x = b;
              }
              (E = e()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (b) {
            if (b && x && typeof b.stack == "string")
              return [b.stack, x.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), c = u[0], s = u[1];
      if (c && s) {
        var r = c.split(`
`), y = s.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === y.length)
          for (a = r.length - 1, n = y.length - 1; 1 <= a && 0 <= n && r[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== y[n]) {
                  var N = `
` + r[a].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ku = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? El(l) : "";
  }
  function Ld(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return El(e.type);
      case 16:
        return El("Lazy");
      case 13:
        return e.child !== t && t !== null ? El("Suspense Fallback") : El("Suspense");
      case 19:
        return El("SuspenseList");
      case 0:
      case 15:
        return Ju(e.type, !1);
      case 11:
        return Ju(e.type.render, !1);
      case 1:
        return Ju(e.type, !0);
      case 31:
        return El("Activity");
      default:
        return "";
    }
  }
  function zs(e) {
    try {
      var t = "", l = null;
      do
        t += Ld(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $u = Object.prototype.hasOwnProperty, Wu = v.unstable_scheduleCallback, Fu = v.unstable_cancelCallback, Zd = v.unstable_shouldYield, Vd = v.unstable_requestPaint, st = v.unstable_now, Kd = v.unstable_getCurrentPriorityLevel, Es = v.unstable_ImmediatePriority, Ts = v.unstable_UserBlockingPriority, Mn = v.unstable_NormalPriority, kd = v.unstable_LowPriority, _s = v.unstable_IdlePriority, Jd = v.log, $d = v.unstable_setDisableYieldValue, Ua = null, rt = null;
  function el(e) {
    if (typeof Jd == "function" && $d(e), rt && typeof rt.setStrictMode == "function")
      try {
        rt.setStrictMode(Ua, e);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : Id, Wd = Math.log, Fd = Math.LN2;
  function Id(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wd(e) / Fd | 0) | 0;
  }
  var An = 256, Cn = 262144, On = 4194304;
  function Tl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Un(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Tl(a) : (c &= s, c !== 0 ? n = Tl(c) : l || (l = s & ~e, l !== 0 && (n = Tl(l))))) : (s = a & ~u, s !== 0 ? n = Tl(s) : c !== 0 ? n = Tl(c) : l || (l = a & ~e, l !== 0 && (n = Tl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function Da(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Pd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ms() {
    var e = On;
    return On <<= 1, (On & 62914560) === 0 && (On = 4194304), e;
  }
  function Iu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ra(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function em(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var s = e.entanglements, r = e.expirationTimes, y = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var N = 31 - ft(l), E = 1 << N;
      s[N] = 0, r[N] = -1;
      var x = y[N];
      if (x !== null)
        for (y[N] = null, N = 0; N < x.length; N++) {
          var b = x[N];
          b !== null && (b.lane &= -536870913);
        }
      l &= ~E;
    }
    a !== 0 && As(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function As(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ft(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Cs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ft(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function Os(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Pu(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Pu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ec(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Us() {
    var e = R.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gd(e.type));
  }
  function Ds(e, t) {
    var l = R.p;
    try {
      return R.p = e, t();
    } finally {
      R.p = l;
    }
  }
  var tl = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + tl, tt = "__reactProps$" + tl, Kl = "__reactContainer$" + tl, tc = "__reactEvents$" + tl, tm = "__reactListeners$" + tl, lm = "__reactHandles$" + tl, Rs = "__reactResources$" + tl, Ha = "__reactMarker$" + tl;
  function lc(e) {
    delete e[Ke], delete e[tt], delete e[tc], delete e[tm], delete e[lm];
  }
  function kl(e) {
    var t = e[Ke];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Kl] || l[Ke]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = ad(e); e !== null; ) {
            if (l = e[Ke]) return l;
            e = ad(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Jl(e) {
    if (e = e[Ke] || e[Kl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function wa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function $l(e) {
    var t = e[Rs];
    return t || (t = e[Rs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ze(e) {
    e[Ha] = !0;
  }
  var Hs = /* @__PURE__ */ new Set(), ws = {};
  function _l(e, t) {
    Wl(e, t), Wl(e + "Capture", t);
  }
  function Wl(e, t) {
    for (ws[e] = t, e = 0; e < t.length; e++)
      Hs.add(t[e]);
  }
  var am = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Bs = {}, qs = {};
  function nm(e) {
    return $u.call(qs, e) ? !0 : $u.call(Bs, e) ? !1 : am.test(e) ? qs[e] = !0 : (Bs[e] = !0, !1);
  }
  function Dn(e, t, l) {
    if (nm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Rn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function wt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function bt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ys(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function um(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          l = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ac(e) {
    if (!e._valueTracker) {
      var t = Ys(e) ? "checked" : "value";
      e._valueTracker = um(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Gs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Ys(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Hn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var cm = /[\n"\\]/g;
  function gt(e) {
    return e.replace(
      cm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function nc(e, t, l, a, n, u, c, s) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + bt(t)) : e.value !== "" + bt(t) && (e.value = "" + bt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? uc(e, c, bt(t)) : l != null ? uc(e, c, bt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + bt(s) : e.removeAttribute("name");
  }
  function Xs(e, t, l, a, n, u, c, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ac(e);
        return;
      }
      l = l != null ? "" + bt(l) : "", t = t != null ? "" + bt(t) : l, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), ac(e);
  }
  function uc(e, t, l) {
    t === "number" && Hn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Fl(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + bt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qs(e, t, l) {
    if (t != null && (t = "" + bt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + bt(l) : "";
  }
  function Ls(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Oe(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = bt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ac(e);
  }
  function Il(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var im = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Zs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || im.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Vs(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && Zs(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Zs(e, u, t[u]);
  }
  function cc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var sm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), rm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wn(e) {
    return rm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Bt() {
  }
  var ic = null;
  function sc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Pl = null, ea = null;
  function Ks(e) {
    var t = Jl(e);
    if (t && (e = t.stateNode)) {
      var l = e[tt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (nc(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[tt] || null;
                if (!n) throw Error(f(90));
                nc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Gs(a);
          }
          break e;
        case "textarea":
          Qs(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Fl(e, !!l.multiple, t, !1);
      }
    }
  }
  var rc = !1;
  function ks(e, t, l) {
    if (rc) return e(t, l);
    rc = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (rc = !1, (Pl !== null || ea !== null) && (ju(), Pl && (t = Pl, e = ea, ea = Pl = null, Ks(t), e)))
        for (t = 0; t < e.length; t++) Ks(e[t]);
    }
  }
  function Ba(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[tt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, t, typeof l)
      );
    return l;
  }
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fc = !1;
  if (qt)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          fc = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      fc = !1;
    }
  var ll = null, oc = null, Bn = null;
  function Js() {
    if (Bn) return Bn;
    var e, t = oc, l = t.length, a, n = "value" in ll ? ll.value : ll.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++) ;
    return Bn = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function qn(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yn() {
    return !0;
  }
  function $s() {
    return !1;
  }
  function lt(e) {
    function t(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (l = e[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Yn : $s, this.isPropagationStopped = $s, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Yn);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Yn);
      },
      persist: function() {
      },
      isPersistent: Yn
    }), t;
  }
  var Ml = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gn = lt(Ml), Ya = _({}, Ml, { view: 0, detail: 0 }), fm = lt(Ya), dc, mc, Ga, Xn = _({}, Ya, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? (dc = e.screenX - Ga.screenX, mc = e.screenY - Ga.screenY) : mc = dc = 0, Ga = e), dc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : mc;
    }
  }), Ws = lt(Xn), om = _({}, Xn, { dataTransfer: 0 }), dm = lt(om), mm = _({}, Ya, { relatedTarget: 0 }), vc = lt(mm), vm = _({}, Ml, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hm = lt(vm), ym = _({}, Ml, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), xm = lt(ym), bm = _({}, Ml, { data: 0 }), Fs = lt(bm), gm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, pm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Nm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Sm[e]) ? !!t[e] : !1;
  }
  function hc() {
    return Nm;
  }
  var jm = _({}, Ya, {
    key: function(e) {
      if (e.key) {
        var t = gm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = qn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hc,
    charCode: function(e) {
      return e.type === "keypress" ? qn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? qn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), zm = lt(jm), Em = _({}, Xn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Is = lt(Em), Tm = _({}, Ya, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hc
  }), _m = lt(Tm), Mm = _({}, Ml, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Am = lt(Mm), Cm = _({}, Xn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Om = lt(Cm), Um = _({}, Ml, {
    newState: 0,
    oldState: 0
  }), Dm = lt(Um), Rm = [9, 13, 27, 32], yc = qt && "CompositionEvent" in window, Xa = null;
  qt && "documentMode" in document && (Xa = document.documentMode);
  var Hm = qt && "TextEvent" in window && !Xa, Ps = qt && (!yc || Xa && 8 < Xa && 11 >= Xa), er = " ", tr = !1;
  function lr(e, t) {
    switch (e) {
      case "keyup":
        return Rm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ar(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ta = !1;
  function wm(e, t) {
    switch (e) {
      case "compositionend":
        return ar(t);
      case "keypress":
        return t.which !== 32 ? null : (tr = !0, er);
      case "textInput":
        return e = t.data, e === er && tr ? null : e;
      default:
        return null;
    }
  }
  function Bm(e, t) {
    if (ta)
      return e === "compositionend" || !yc && lr(e, t) ? (e = Js(), Bn = oc = ll = null, ta = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ps && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var qm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function nr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qm[e.type] : t === "textarea";
  }
  function ur(e, t, l, a) {
    Pl ? ea ? ea.push(a) : ea = [a] : Pl = a, t = Cu(t, "onChange"), 0 < t.length && (l = new Gn(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Qa = null, La = null;
  function Ym(e) {
    Lo(e, 0);
  }
  function Qn(e) {
    var t = wa(e);
    if (Gs(t)) return e;
  }
  function cr(e, t) {
    if (e === "change") return t;
  }
  var ir = !1;
  if (qt) {
    var xc;
    if (qt) {
      var bc = "oninput" in document;
      if (!bc) {
        var sr = document.createElement("div");
        sr.setAttribute("oninput", "return;"), bc = typeof sr.oninput == "function";
      }
      xc = bc;
    } else xc = !1;
    ir = xc && (!document.documentMode || 9 < document.documentMode);
  }
  function rr() {
    Qa && (Qa.detachEvent("onpropertychange", fr), La = Qa = null);
  }
  function fr(e) {
    if (e.propertyName === "value" && Qn(La)) {
      var t = [];
      ur(
        t,
        La,
        e,
        sc(e)
      ), ks(Ym, t);
    }
  }
  function Gm(e, t, l) {
    e === "focusin" ? (rr(), Qa = t, La = l, Qa.attachEvent("onpropertychange", fr)) : e === "focusout" && rr();
  }
  function Xm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Qn(La);
  }
  function Qm(e, t) {
    if (e === "click") return Qn(t);
  }
  function Lm(e, t) {
    if (e === "input" || e === "change")
      return Qn(t);
  }
  function Zm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ot = typeof Object.is == "function" ? Object.is : Zm;
  function Za(e, t) {
    if (ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!$u.call(t, n) || !ot(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function or(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dr(e, t) {
    var l = or(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = or(l);
    }
  }
  function mr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Hn(e.document);
    }
    return t;
  }
  function gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Vm = qt && "documentMode" in document && 11 >= document.documentMode, la = null, pc = null, Va = null, Sc = !1;
  function hr(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Sc || la == null || la !== Hn(a) || (a = la, "selectionStart" in a && gc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Va && Za(Va, a) || (Va = a, a = Cu(pc, "onSelect"), 0 < a.length && (t = new Gn(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = la)));
  }
  function Al(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var aa = {
    animationend: Al("Animation", "AnimationEnd"),
    animationiteration: Al("Animation", "AnimationIteration"),
    animationstart: Al("Animation", "AnimationStart"),
    transitionrun: Al("Transition", "TransitionRun"),
    transitionstart: Al("Transition", "TransitionStart"),
    transitioncancel: Al("Transition", "TransitionCancel"),
    transitionend: Al("Transition", "TransitionEnd")
  }, Nc = {}, yr = {};
  qt && (yr = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Cl(e) {
    if (Nc[e]) return Nc[e];
    if (!aa[e]) return e;
    var t = aa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in yr)
        return Nc[e] = t[l];
    return e;
  }
  var xr = Cl("animationend"), br = Cl("animationiteration"), gr = Cl("animationstart"), Km = Cl("transitionrun"), km = Cl("transitionstart"), Jm = Cl("transitioncancel"), pr = Cl("transitionend"), Sr = /* @__PURE__ */ new Map(), jc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  jc.push("scrollEnd");
  function Mt(e, t) {
    Sr.set(e, t), _l(t, [e]);
  }
  var Ln = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, pt = [], na = 0, zc = 0;
  function Zn() {
    for (var e = na, t = zc = na = 0; t < e; ) {
      var l = pt[t];
      pt[t++] = null;
      var a = pt[t];
      pt[t++] = null;
      var n = pt[t];
      pt[t++] = null;
      var u = pt[t];
      if (pt[t++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && Nr(l, n, u);
    }
  }
  function Vn(e, t, l, a) {
    pt[na++] = e, pt[na++] = t, pt[na++] = l, pt[na++] = a, zc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Ec(e, t, l, a) {
    return Vn(e, t, l, a), Kn(e);
  }
  function Ol(e, t) {
    return Vn(e, null, null, t), Kn(e);
  }
  function Nr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - ft(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Kn(e) {
    if (50 < vn)
      throw vn = 0, Ri = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ua = {};
  function $m(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dt(e, t, l, a) {
    return new $m(e, t, l, a);
  }
  function Tc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Yt(e, t) {
    var l = e.alternate;
    return l === null ? (l = dt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function jr(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function kn(e, t, l, a, n, u) {
    var c = 0;
    if (a = e, typeof e == "function") Tc(e) && (c = 1);
    else if (typeof e == "string")
      c = ev(
        e,
        l,
        q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ze:
          return e = dt(31, l, t, n), e.elementType = ze, e.lanes = u, e;
        case G:
          return Ul(l.children, n, u, t);
        case O:
          c = 8, n |= 24;
          break;
        case K:
          return e = dt(12, l, t, n | 2), e.elementType = K, e.lanes = u, e;
        case Ae:
          return e = dt(13, l, t, n), e.elementType = Ae, e.lanes = u, e;
        case g:
          return e = dt(19, l, t, n), e.elementType = g, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Q:
                c = 10;
                break e;
              case J:
                c = 9;
                break e;
              case Se:
                c = 11;
                break e;
              case p:
                c = 14;
                break e;
              case _e:
                c = 16, a = null;
                break e;
            }
          c = 29, l = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = dt(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Ul(e, t, l, a) {
    return e = dt(7, e, a, t), e.lanes = l, e;
  }
  function _c(e, t, l) {
    return e = dt(6, e, null, t), e.lanes = l, e;
  }
  function zr(e) {
    var t = dt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Mc(e, t, l) {
    return t = dt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Er = /* @__PURE__ */ new WeakMap();
  function St(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Er.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: zs(t)
      }, Er.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: zs(t)
    };
  }
  var ca = [], ia = 0, Jn = null, Ka = 0, Nt = [], jt = 0, al = null, Ut = 1, Dt = "";
  function Gt(e, t) {
    ca[ia++] = Ka, ca[ia++] = Jn, Jn = e, Ka = t;
  }
  function Tr(e, t, l) {
    Nt[jt++] = Ut, Nt[jt++] = Dt, Nt[jt++] = al, al = e;
    var a = Ut;
    e = Dt;
    var n = 32 - ft(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ft(t) + n;
    if (30 < u) {
      var c = n - n % 5;
      u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Ut = 1 << 32 - ft(t) + n | l << n | a, Dt = u + e;
    } else
      Ut = 1 << u | l << n | a, Dt = e;
  }
  function Ac(e) {
    e.return !== null && (Gt(e, 1), Tr(e, 1, 0));
  }
  function Cc(e) {
    for (; e === Jn; )
      Jn = ca[--ia], ca[ia] = null, Ka = ca[--ia], ca[ia] = null;
    for (; e === al; )
      al = Nt[--jt], Nt[jt] = null, Dt = Nt[--jt], Nt[jt] = null, Ut = Nt[--jt], Nt[jt] = null;
  }
  function _r(e, t) {
    Nt[jt++] = Ut, Nt[jt++] = Dt, Nt[jt++] = al, Ut = t.id, Dt = t.overflow, al = e;
  }
  var ke = null, Ee = null, fe = !1, nl = null, zt = !1, Oc = Error(f(519));
  function ul(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ka(St(t, e)), Oc;
  }
  function Mr(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Ke] = e, t[tt] = a, l) {
      case "dialog":
        ne("cancel", t), ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ne("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < yn.length; l++)
          ne(yn[l], t);
        break;
      case "source":
        ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ne("error", t), ne("load", t);
        break;
      case "details":
        ne("toggle", t);
        break;
      case "input":
        ne("invalid", t), Xs(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        ne("invalid", t);
        break;
      case "textarea":
        ne("invalid", t), Ls(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || ko(t.textContent, l) ? (a.popover != null && (ne("beforetoggle", t), ne("toggle", t)), a.onScroll != null && ne("scroll", t), a.onScrollEnd != null && ne("scrollend", t), a.onClick != null && (t.onclick = Bt), t = !0) : t = !1, t || ul(e, !0);
  }
  function Ar(e) {
    for (ke = e.return; ke; )
      switch (ke.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          ke = ke.return;
      }
  }
  function sa(e) {
    if (e !== ke) return !1;
    if (!fe) return Ar(e), fe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || $i(e.type, e.memoizedProps)), l = !l), l && Ee && ul(e), Ar(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ee = ld(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ee = ld(e);
    } else
      t === 27 ? (t = Ee, gl(e.type) ? (e = es, es = null, Ee = e) : Ee = t) : Ee = ke ? Tt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Dl() {
    Ee = ke = null, fe = !1;
  }
  function Uc() {
    var e = nl;
    return e !== null && (ct === null ? ct = e : ct.push.apply(
      ct,
      e
    ), nl = null), e;
  }
  function ka(e) {
    nl === null ? nl = [e] : nl.push(e);
  }
  var Dc = d(null), Rl = null, Xt = null;
  function cl(e, t, l) {
    H(Dc, t._currentValue), t._currentValue = l;
  }
  function Qt(e) {
    e._currentValue = Dc.current, M(Dc);
  }
  function Rc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Hc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (s.context === t[r]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Rc(
                u.return,
                l,
                e
              ), a || (c = null);
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(f(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Rc(c, l, e), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function ra(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (c = c.memoizedProps, c !== null) {
          var s = n.type;
          ot(n.pendingProps.value, c.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (n === ve.current) {
        if (c = n.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Sn) : e = [Sn]);
      }
      n = n.return;
    }
    e !== null && Hc(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function $n(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ot(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Hl(e) {
    Rl = e, Xt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Je(e) {
    return Cr(Rl, e);
  }
  function Wn(e, t) {
    return Rl === null && Hl(e), Cr(e, t);
  }
  function Cr(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Xt === null) {
      if (e === null) throw Error(f(308));
      Xt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xt = Xt.next = t;
    return l;
  }
  var Wm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Fm = v.unstable_scheduleCallback, Im = v.unstable_NormalPriority, Ye = {
    $$typeof: Q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wc() {
    return {
      controller: new Wm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ja(e) {
    e.refCount--, e.refCount === 0 && Fm(Im, function() {
      e.controller.abort();
    });
  }
  var $a = null, Bc = 0, fa = 0, oa = null;
  function Pm(e, t) {
    if ($a === null) {
      var l = $a = [];
      Bc = 0, fa = Gi(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Bc++, t.then(Or, Or), t;
  }
  function Or() {
    if (--Bc === 0 && $a !== null) {
      oa !== null && (oa.status = "fulfilled");
      var e = $a;
      $a = null, fa = 0, oa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function e0(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Ur = j.S;
  j.S = function(e, t) {
    xo = st(), typeof t == "object" && t !== null && typeof t.then == "function" && Pm(e, t), Ur !== null && Ur(e, t);
  };
  var wl = d(null);
  function qc() {
    var e = wl.current;
    return e !== null ? e : je.pooledCache;
  }
  function Fn(e, t) {
    t === null ? H(wl, wl.current) : H(wl, t.pool);
  }
  function Dr() {
    var e = qc();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var da = Error(f(460)), Yc = Error(f(474)), In = Error(f(542)), Pn = { then: function() {
  } };
  function Rr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Hr(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Bt, Bt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Br(e), e;
      default:
        if (typeof t.status == "string") t.then(Bt, Bt);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Br(e), e;
        }
        throw ql = t, da;
    }
  }
  function Bl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ql = l, da) : l;
    }
  }
  var ql = null;
  function wr() {
    if (ql === null) throw Error(f(459));
    var e = ql;
    return ql = null, e;
  }
  function Br(e) {
    if (e === da || e === In)
      throw Error(f(483));
  }
  var ma = null, Wa = 0;
  function eu(e) {
    var t = Wa;
    return Wa += 1, ma === null && (ma = []), Hr(ma, e, t);
  }
  function Fa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function tu(e, t) {
    throw t.$$typeof === Z ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function qr(e) {
    function t(m, o) {
      if (e) {
        var h = m.deletions;
        h === null ? (m.deletions = [o], m.flags |= 16) : h.push(o);
      }
    }
    function l(m, o) {
      if (!e) return null;
      for (; o !== null; )
        t(m, o), o = o.sibling;
      return null;
    }
    function a(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function n(m, o) {
      return m = Yt(m, o), m.index = 0, m.sibling = null, m;
    }
    function u(m, o, h) {
      return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < o ? (m.flags |= 67108866, o) : h) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function c(m) {
      return e && m.alternate === null && (m.flags |= 67108866), m;
    }
    function s(m, o, h, z) {
      return o === null || o.tag !== 6 ? (o = _c(h, m.mode, z), o.return = m, o) : (o = n(o, h), o.return = m, o);
    }
    function r(m, o, h, z) {
      var L = h.type;
      return L === G ? N(
        m,
        o,
        h.props.children,
        z,
        h.key
      ) : o !== null && (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === _e && Bl(L) === o.type) ? (o = n(o, h.props), Fa(o, h), o.return = m, o) : (o = kn(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        z
      ), Fa(o, h), o.return = m, o);
    }
    function y(m, o, h, z) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Mc(h, m.mode, z), o.return = m, o) : (o = n(o, h.children || []), o.return = m, o);
    }
    function N(m, o, h, z, L) {
      return o === null || o.tag !== 7 ? (o = Ul(
        h,
        m.mode,
        z,
        L
      ), o.return = m, o) : (o = n(o, h), o.return = m, o);
    }
    function E(m, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = _c(
          "" + o,
          m.mode,
          h
        ), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case W:
            return h = kn(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              h
            ), Fa(h, o), h.return = m, h;
          case ue:
            return o = Mc(
              o,
              m.mode,
              h
            ), o.return = m, o;
          case _e:
            return o = Bl(o), E(m, o, h);
        }
        if (Oe(o) || qe(o))
          return o = Ul(
            o,
            m.mode,
            h,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return E(m, eu(o), h);
        if (o.$$typeof === Q)
          return E(
            m,
            Wn(m, o),
            h
          );
        tu(m, o);
      }
      return null;
    }
    function x(m, o, h, z) {
      var L = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return L !== null ? null : s(m, o, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case W:
            return h.key === L ? r(m, o, h, z) : null;
          case ue:
            return h.key === L ? y(m, o, h, z) : null;
          case _e:
            return h = Bl(h), x(m, o, h, z);
        }
        if (Oe(h) || qe(h))
          return L !== null ? null : N(m, o, h, z, null);
        if (typeof h.then == "function")
          return x(
            m,
            o,
            eu(h),
            z
          );
        if (h.$$typeof === Q)
          return x(
            m,
            o,
            Wn(m, h),
            z
          );
        tu(m, h);
      }
      return null;
    }
    function b(m, o, h, z, L) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return m = m.get(h) || null, s(o, m, "" + z, L);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case W:
            return m = m.get(
              z.key === null ? h : z.key
            ) || null, r(o, m, z, L);
          case ue:
            return m = m.get(
              z.key === null ? h : z.key
            ) || null, y(o, m, z, L);
          case _e:
            return z = Bl(z), b(
              m,
              o,
              h,
              z,
              L
            );
        }
        if (Oe(z) || qe(z))
          return m = m.get(h) || null, N(o, m, z, L, null);
        if (typeof z.then == "function")
          return b(
            m,
            o,
            h,
            eu(z),
            L
          );
        if (z.$$typeof === Q)
          return b(
            m,
            o,
            h,
            Wn(o, z),
            L
          );
        tu(o, z);
      }
      return null;
    }
    function w(m, o, h, z) {
      for (var L = null, oe = null, Y = o, te = o = 0, ie = null; Y !== null && te < h.length; te++) {
        Y.index > te ? (ie = Y, Y = null) : ie = Y.sibling;
        var de = x(
          m,
          Y,
          h[te],
          z
        );
        if (de === null) {
          Y === null && (Y = ie);
          break;
        }
        e && Y && de.alternate === null && t(m, Y), o = u(de, o, te), oe === null ? L = de : oe.sibling = de, oe = de, Y = ie;
      }
      if (te === h.length)
        return l(m, Y), fe && Gt(m, te), L;
      if (Y === null) {
        for (; te < h.length; te++)
          Y = E(m, h[te], z), Y !== null && (o = u(
            Y,
            o,
            te
          ), oe === null ? L = Y : oe.sibling = Y, oe = Y);
        return fe && Gt(m, te), L;
      }
      for (Y = a(Y); te < h.length; te++)
        ie = b(
          Y,
          m,
          te,
          h[te],
          z
        ), ie !== null && (e && ie.alternate !== null && Y.delete(
          ie.key === null ? te : ie.key
        ), o = u(
          ie,
          o,
          te
        ), oe === null ? L = ie : oe.sibling = ie, oe = ie);
      return e && Y.forEach(function(zl) {
        return t(m, zl);
      }), fe && Gt(m, te), L;
    }
    function k(m, o, h, z) {
      if (h == null) throw Error(f(151));
      for (var L = null, oe = null, Y = o, te = o = 0, ie = null, de = h.next(); Y !== null && !de.done; te++, de = h.next()) {
        Y.index > te ? (ie = Y, Y = null) : ie = Y.sibling;
        var zl = x(m, Y, de.value, z);
        if (zl === null) {
          Y === null && (Y = ie);
          break;
        }
        e && Y && zl.alternate === null && t(m, Y), o = u(zl, o, te), oe === null ? L = zl : oe.sibling = zl, oe = zl, Y = ie;
      }
      if (de.done)
        return l(m, Y), fe && Gt(m, te), L;
      if (Y === null) {
        for (; !de.done; te++, de = h.next())
          de = E(m, de.value, z), de !== null && (o = u(de, o, te), oe === null ? L = de : oe.sibling = de, oe = de);
        return fe && Gt(m, te), L;
      }
      for (Y = a(Y); !de.done; te++, de = h.next())
        de = b(Y, m, te, de.value, z), de !== null && (e && de.alternate !== null && Y.delete(de.key === null ? te : de.key), o = u(de, o, te), oe === null ? L = de : oe.sibling = de, oe = de);
      return e && Y.forEach(function(ov) {
        return t(m, ov);
      }), fe && Gt(m, te), L;
    }
    function pe(m, o, h, z) {
      if (typeof h == "object" && h !== null && h.type === G && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case W:
            e: {
              for (var L = h.key; o !== null; ) {
                if (o.key === L) {
                  if (L = h.type, L === G) {
                    if (o.tag === 7) {
                      l(
                        m,
                        o.sibling
                      ), z = n(
                        o,
                        h.props.children
                      ), z.return = m, m = z;
                      break e;
                    }
                  } else if (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === _e && Bl(L) === o.type) {
                    l(
                      m,
                      o.sibling
                    ), z = n(o, h.props), Fa(z, h), z.return = m, m = z;
                    break e;
                  }
                  l(m, o);
                  break;
                } else t(m, o);
                o = o.sibling;
              }
              h.type === G ? (z = Ul(
                h.props.children,
                m.mode,
                z,
                h.key
              ), z.return = m, m = z) : (z = kn(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                z
              ), Fa(z, h), z.return = m, m = z);
            }
            return c(m);
          case ue:
            e: {
              for (L = h.key; o !== null; ) {
                if (o.key === L)
                  if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    l(
                      m,
                      o.sibling
                    ), z = n(o, h.children || []), z.return = m, m = z;
                    break e;
                  } else {
                    l(m, o);
                    break;
                  }
                else t(m, o);
                o = o.sibling;
              }
              z = Mc(h, m.mode, z), z.return = m, m = z;
            }
            return c(m);
          case _e:
            return h = Bl(h), pe(
              m,
              o,
              h,
              z
            );
        }
        if (Oe(h))
          return w(
            m,
            o,
            h,
            z
          );
        if (qe(h)) {
          if (L = qe(h), typeof L != "function") throw Error(f(150));
          return h = L.call(h), k(
            m,
            o,
            h,
            z
          );
        }
        if (typeof h.then == "function")
          return pe(
            m,
            o,
            eu(h),
            z
          );
        if (h.$$typeof === Q)
          return pe(
            m,
            o,
            Wn(m, h),
            z
          );
        tu(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (l(m, o.sibling), z = n(o, h), z.return = m, m = z) : (l(m, o), z = _c(h, m.mode, z), z.return = m, m = z), c(m)) : l(m, o);
    }
    return function(m, o, h, z) {
      try {
        Wa = 0;
        var L = pe(
          m,
          o,
          h,
          z
        );
        return ma = null, L;
      } catch (Y) {
        if (Y === da || Y === In) throw Y;
        var oe = dt(29, Y, null, m.mode);
        return oe.lanes = z, oe.return = m, oe;
      } finally {
      }
    };
  }
  var Yl = qr(!0), Yr = qr(!1), il = !1;
  function Gc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function sl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function rl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (me & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Kn(e), Nr(e, null, l), t;
    }
    return Vn(e, a, t, l), Kn(e);
  }
  function Ia(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Cs(e, l);
    }
  }
  function Qc(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Lc = !1;
  function Pa() {
    if (Lc) {
      var e = oa;
      if (e !== null) throw e;
    }
  }
  function en(e, t, l, a) {
    Lc = !1;
    var n = e.updateQueue;
    il = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var r = s, y = r.next;
      r.next = null, c === null ? u = y : c.next = y, c = r;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, s = N.lastBaseUpdate, s !== c && (s === null ? N.firstBaseUpdate = y : s.next = y, N.lastBaseUpdate = r));
    }
    if (u !== null) {
      var E = n.baseState;
      c = 0, N = y = r = null, s = u;
      do {
        var x = s.lane & -536870913, b = x !== s.lane;
        if (b ? (ce & x) === x : (a & x) === x) {
          x !== 0 && x === fa && (Lc = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var w = e, k = s;
            x = t;
            var pe = l;
            switch (k.tag) {
              case 1:
                if (w = k.payload, typeof w == "function") {
                  E = w.call(pe, E, x);
                  break e;
                }
                E = w;
                break e;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                if (w = k.payload, x = typeof w == "function" ? w.call(pe, E, x) : w, x == null) break e;
                E = _({}, E, x);
                break e;
              case 2:
                il = !0;
            }
          }
          x = s.callback, x !== null && (e.flags |= 64, b && (e.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [x] : b.push(x));
        } else
          b = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, N === null ? (y = N = b, r = E) : N = N.next = b, c |= x;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          b = s, s = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      N === null && (r = E), n.baseState = r, n.firstBaseUpdate = y, n.lastBaseUpdate = N, u === null && (n.shared.lanes = 0), vl |= c, e.lanes = c, e.memoizedState = E;
    }
  }
  function Gr(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Xr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Gr(l[e], t);
  }
  var va = d(null), lu = d(0);
  function Qr(e, t) {
    e = Ft, H(lu, e), H(va, t), Ft = e | t.baseLanes;
  }
  function Zc() {
    H(lu, Ft), H(va, va.current);
  }
  function Vc() {
    Ft = lu.current, M(va), M(lu);
  }
  var mt = d(null), Et = null;
  function fl(e) {
    var t = e.alternate;
    H(He, He.current & 1), H(mt, e), Et === null && (t === null || va.current !== null || t.memoizedState !== null) && (Et = e);
  }
  function Kc(e) {
    H(He, He.current), H(mt, e), Et === null && (Et = e);
  }
  function Lr(e) {
    e.tag === 22 ? (H(He, He.current), H(mt, e), Et === null && (Et = e)) : ol();
  }
  function ol() {
    H(He, He.current), H(mt, mt.current);
  }
  function vt(e) {
    M(mt), Et === e && (Et = null), M(He);
  }
  var He = d(0);
  function au(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ii(l) || Pi(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Lt = 0, ee = null, be = null, Ge = null, nu = !1, ha = !1, Gl = !1, uu = 0, tn = 0, ya = null, t0 = 0;
  function Ue() {
    throw Error(f(321));
  }
  function kc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ot(e[l], t[l])) return !1;
    return !0;
  }
  function Jc(e, t, l, a, n, u) {
    return Lt = u, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? _f : ri, Gl = !1, u = l(a, n), Gl = !1, ha && (u = Vr(
      t,
      l,
      a,
      n
    )), Zr(e), u;
  }
  function Zr(e) {
    j.H = nn;
    var t = be !== null && be.next !== null;
    if (Lt = 0, Ge = be = ee = null, nu = !1, tn = 0, ya = null, t) throw Error(f(300));
    e === null || Xe || (e = e.dependencies, e !== null && $n(e) && (Xe = !0));
  }
  function Vr(e, t, l, a) {
    ee = e;
    var n = 0;
    do {
      if (ha && (ya = null), tn = 0, ha = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Ge = be = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = Mf, u = t(l, a);
    } while (ha);
    return u;
  }
  function l0() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ln(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (ee.flags |= 1024), t;
  }
  function $c() {
    var e = uu !== 0;
    return uu = 0, e;
  }
  function Wc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Fc(e) {
    if (nu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      nu = !1;
    }
    Lt = 0, Ge = be = ee = null, ha = !1, tn = uu = 0, ya = null;
  }
  function Pe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ge === null ? ee.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
  }
  function we() {
    if (be === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Ge === null ? ee.memoizedState : Ge.next;
    if (t !== null)
      Ge = t, be = e;
    else {
      if (e === null)
        throw ee.alternate === null ? Error(f(467)) : Error(f(310));
      be = e, e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null
      }, Ge === null ? ee.memoizedState = Ge = e : Ge = Ge.next = e;
    }
    return Ge;
  }
  function cu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ln(e) {
    var t = tn;
    return tn += 1, ya === null && (ya = []), e = Hr(ya, e, t), t = ee, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? _f : ri), e;
  }
  function iu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ln(e);
      if (e.$$typeof === Q) return Je(e);
    }
    throw Error(f(438, String(e)));
  }
  function Ic(e) {
    var t = null, l = ee.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ee.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = cu(), ee.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ce;
    return t.index++, l;
  }
  function Zt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function su(e) {
    var t = we();
    return Pc(t, be, e);
  }
  function Pc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = u.next, u.next = c;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var s = c = null, r = null, y = t, N = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? (ce & E) === E : (Lt & E) === E) {
          var x = y.revertLane;
          if (x === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === fa && (N = !0);
          else if ((Lt & x) === x) {
            y = y.next, x === fa && (N = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, r === null ? (s = r = E, c = u) : r = r.next = E, ee.lanes |= x, vl |= x;
          E = y.action, Gl && l(u, E), u = y.hasEagerState ? y.eagerState : l(u, E);
        } else
          x = {
            lane: E,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, r === null ? (s = r = x, c = u) : r = r.next = x, ee.lanes |= E, vl |= E;
        y = y.next;
      } while (y !== null && y !== t);
      if (r === null ? c = u : r.next = s, !ot(u, e.memoizedState) && (Xe = !0, N && (l = oa, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = c, e.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ei(e) {
    var t = we(), l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== n);
      ot(u, t.memoizedState) || (Xe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Kr(e, t, l) {
    var a = ee, n = we(), u = fe;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var c = !ot(
      (be || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, Xe = !0), n = n.queue, ai($r.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || c || Ge !== null && Ge.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Jr.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), je === null) throw Error(f(349));
      u || (Lt & 127) !== 0 || kr(a, t, l);
    }
    return l;
  }
  function kr(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ee.updateQueue, t === null ? (t = cu(), ee.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Jr(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Wr(t) && Fr(e);
  }
  function $r(e, t, l) {
    return l(function() {
      Wr(t) && Fr(e);
    });
  }
  function Wr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ot(e, l);
    } catch {
      return !0;
    }
  }
  function Fr(e) {
    var t = Ol(e, 2);
    t !== null && it(t, e, 2);
  }
  function ti(e) {
    var t = Pe();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Gl) {
        el(!0);
        try {
          l();
        } finally {
          el(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zt,
      lastRenderedState: e
    }, t;
  }
  function Ir(e, t, l, a) {
    return e.baseState = l, Pc(
      e,
      be,
      typeof a == "function" ? a : Zt
    );
  }
  function a0(e, t, l, a, n) {
    if (ou(e)) throw Error(f(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      j.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Pr(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Pr(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = j.T, c = {};
      j.T = c;
      try {
        var s = l(n, a), r = j.S;
        r !== null && r(c, s), ef(e, t, s);
      } catch (y) {
        li(e, t, y);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), j.T = u;
      }
    } else
      try {
        u = l(n, a), ef(e, t, u);
      } catch (y) {
        li(e, t, y);
      }
  }
  function ef(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        tf(e, t, a);
      },
      function(a) {
        return li(e, t, a);
      }
    ) : tf(e, t, l);
  }
  function tf(e, t, l) {
    t.status = "fulfilled", t.value = l, lf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Pr(e, l)));
  }
  function li(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, lf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function lf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function af(e, t) {
    return t;
  }
  function nf(e, t) {
    if (fe) {
      var l = je.formState;
      if (l !== null) {
        e: {
          var a = ee;
          if (fe) {
            if (Ee) {
              t: {
                for (var n = Ee, u = zt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Tt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Ee = Tt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            ul(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = Pe(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: af,
      lastRenderedState: t
    }, l.queue = a, l = zf.bind(
      null,
      ee,
      a
    ), a.dispatch = l, a = ti(!1), u = si.bind(
      null,
      ee,
      !1,
      a.queue
    ), a = Pe(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = a0.bind(
      null,
      ee,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function uf(e) {
    var t = we();
    return cf(t, be, e);
  }
  function cf(e, t, l) {
    if (t = Pc(
      e,
      t,
      af
    )[0], e = su(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ln(t);
      } catch (c) {
        throw c === da ? In : c;
      }
    else a = t;
    t = we();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ee.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      n0.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function n0(e, t) {
    e.action = t;
  }
  function sf(e) {
    var t = we(), l = be;
    if (l !== null)
      return cf(t, l, e);
    we(), t = t.memoizedState, l = we();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function xa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ee.updateQueue, t === null && (t = cu(), ee.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function rf() {
    return we().memoizedState;
  }
  function ru(e, t, l, a) {
    var n = Pe();
    ee.flags |= e, n.memoizedState = xa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function fu(e, t, l, a) {
    var n = we();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    be !== null && a !== null && kc(a, be.memoizedState.deps) ? n.memoizedState = xa(t, u, l, a) : (ee.flags |= e, n.memoizedState = xa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function ff(e, t) {
    ru(8390656, 8, e, t);
  }
  function ai(e, t) {
    fu(2048, 8, e, t);
  }
  function u0(e) {
    ee.flags |= 4;
    var t = ee.updateQueue;
    if (t === null)
      t = cu(), ee.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function of(e) {
    var t = we().memoizedState;
    return u0({ ref: t, nextImpl: e }), function() {
      if ((me & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function df(e, t) {
    return fu(4, 2, e, t);
  }
  function mf(e, t) {
    return fu(4, 4, e, t);
  }
  function vf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function hf(e, t, l) {
    l = l != null ? l.concat([e]) : null, fu(4, 4, vf.bind(null, t, e), l);
  }
  function ni() {
  }
  function yf(e, t) {
    var l = we();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && kc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function xf(e, t) {
    var l = we();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && kc(t, a[1]))
      return a[0];
    if (a = e(), Gl) {
      el(!0);
      try {
        e();
      } finally {
        el(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function ui(e, t, l) {
    return l === void 0 || (Lt & 1073741824) !== 0 && (ce & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = go(), ee.lanes |= e, vl |= e, l);
  }
  function bf(e, t, l, a) {
    return ot(l, t) ? l : va.current !== null ? (e = ui(e, l, a), ot(e, t) || (Xe = !0), e) : (Lt & 42) === 0 || (Lt & 1073741824) !== 0 && (ce & 261930) === 0 ? (Xe = !0, e.memoizedState = l) : (e = go(), ee.lanes |= e, vl |= e, t);
  }
  function gf(e, t, l, a, n) {
    var u = R.p;
    R.p = u !== 0 && 8 > u ? u : 8;
    var c = j.T, s = {};
    j.T = s, si(e, !1, t, l);
    try {
      var r = n(), y = j.S;
      if (y !== null && y(s, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var N = e0(
          r,
          a
        );
        an(
          e,
          t,
          N,
          xt(e)
        );
      } else
        an(
          e,
          t,
          a,
          xt(e)
        );
    } catch (E) {
      an(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        xt()
      );
    } finally {
      R.p = u, c !== null && s.types !== null && (c.types = s.types), j.T = c;
    }
  }
  function c0() {
  }
  function ci(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = pf(e).queue;
    gf(
      e,
      n,
      t,
      $,
      l === null ? c0 : function() {
        return Sf(e), l(a);
      }
    );
  }
  function pf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: $
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Sf(e) {
    var t = pf(e);
    t.next === null && (t = e.alternate.memoizedState), an(
      e,
      t.next.queue,
      {},
      xt()
    );
  }
  function ii() {
    return Je(Sn);
  }
  function Nf() {
    return we().memoizedState;
  }
  function jf() {
    return we().memoizedState;
  }
  function i0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = xt();
          e = sl(l);
          var a = rl(t, e, l);
          a !== null && (it(a, t, l), Ia(a, t, l)), t = { cache: wc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function s0(e, t, l) {
    var a = xt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(e) ? Ef(t, l) : (l = Ec(e, t, l, a), l !== null && (it(l, e, a), Tf(l, t, a)));
  }
  function zf(e, t, l) {
    var a = xt();
    an(e, t, l, a);
  }
  function an(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ou(e)) Ef(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, s = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = s, ot(s, c))
            return Vn(e, t, n, 0), je === null && Zn(), !1;
        } catch {
        } finally {
        }
      if (l = Ec(e, t, n, a), l !== null)
        return it(l, e, a), Tf(l, t, a), !0;
    }
    return !1;
  }
  function si(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Gi(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(e)) {
      if (t) throw Error(f(479));
    } else
      t = Ec(
        e,
        l,
        a,
        2
      ), t !== null && it(t, e, 2);
  }
  function ou(e) {
    var t = e.alternate;
    return e === ee || t !== null && t === ee;
  }
  function Ef(e, t) {
    ha = nu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Tf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Cs(e, l);
    }
  }
  var nn = {
    readContext: Je,
    use: iu,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useLayoutEffect: Ue,
    useInsertionEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    useHostTransitionStatus: Ue,
    useFormState: Ue,
    useActionState: Ue,
    useOptimistic: Ue,
    useMemoCache: Ue,
    useCacheRefresh: Ue
  };
  nn.useEffectEvent = Ue;
  var _f = {
    readContext: Je,
    use: iu,
    useCallback: function(e, t) {
      return Pe().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Je,
    useEffect: ff,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, ru(
        4194308,
        4,
        vf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return ru(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ru(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = Pe();
      t = t === void 0 ? null : t;
      var a = e();
      if (Gl) {
        el(!0);
        try {
          e();
        } finally {
          el(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = Pe();
      if (l !== void 0) {
        var n = l(t);
        if (Gl) {
          el(!0);
          try {
            l(t);
          } finally {
            el(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = s0.bind(
        null,
        ee,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Pe();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ti(e);
      var t = e.queue, l = zf.bind(null, ee, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ni,
    useDeferredValue: function(e, t) {
      var l = Pe();
      return ui(l, e, t);
    },
    useTransition: function() {
      var e = ti(!1);
      return e = gf.bind(
        null,
        ee,
        e.queue,
        !0,
        !1
      ), Pe().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ee, n = Pe();
      if (fe) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = t(), je === null)
          throw Error(f(349));
        (ce & 127) !== 0 || kr(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, ff($r.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Jr.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = Pe(), t = je.identifierPrefix;
      if (fe) {
        var l = Dt, a = Ut;
        l = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = uu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = t0++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ii,
    useFormState: nf,
    useActionState: nf,
    useOptimistic: function(e) {
      var t = Pe();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = si.bind(
        null,
        ee,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Ic,
    useCacheRefresh: function() {
      return Pe().memoizedState = i0.bind(
        null,
        ee
      );
    },
    useEffectEvent: function(e) {
      var t = Pe(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((me & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ri = {
    readContext: Je,
    use: iu,
    useCallback: yf,
    useContext: Je,
    useEffect: ai,
    useImperativeHandle: hf,
    useInsertionEffect: df,
    useLayoutEffect: mf,
    useMemo: xf,
    useReducer: su,
    useRef: rf,
    useState: function() {
      return su(Zt);
    },
    useDebugValue: ni,
    useDeferredValue: function(e, t) {
      var l = we();
      return bf(
        l,
        be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = su(Zt)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : ln(e),
        t
      ];
    },
    useSyncExternalStore: Kr,
    useId: Nf,
    useHostTransitionStatus: ii,
    useFormState: uf,
    useActionState: uf,
    useOptimistic: function(e, t) {
      var l = we();
      return Ir(l, be, e, t);
    },
    useMemoCache: Ic,
    useCacheRefresh: jf
  };
  ri.useEffectEvent = of;
  var Mf = {
    readContext: Je,
    use: iu,
    useCallback: yf,
    useContext: Je,
    useEffect: ai,
    useImperativeHandle: hf,
    useInsertionEffect: df,
    useLayoutEffect: mf,
    useMemo: xf,
    useReducer: ei,
    useRef: rf,
    useState: function() {
      return ei(Zt);
    },
    useDebugValue: ni,
    useDeferredValue: function(e, t) {
      var l = we();
      return be === null ? ui(l, e, t) : bf(
        l,
        be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ei(Zt)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : ln(e),
        t
      ];
    },
    useSyncExternalStore: Kr,
    useId: Nf,
    useHostTransitionStatus: ii,
    useFormState: sf,
    useActionState: sf,
    useOptimistic: function(e, t) {
      var l = we();
      return be !== null ? Ir(l, be, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ic,
    useCacheRefresh: jf
  };
  Mf.useEffectEvent = of;
  function fi(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : _({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var oi = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = xt(), n = sl(a);
      n.payload = t, l != null && (n.callback = l), t = rl(e, n, a), t !== null && (it(t, e, a), Ia(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = xt(), n = sl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = rl(e, n, a), t !== null && (it(t, e, a), Ia(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = xt(), a = sl(l);
      a.tag = 2, t != null && (a.callback = t), t = rl(e, a, l), t !== null && (it(t, e, l), Ia(t, e, l));
    }
  };
  function Af(e, t, l, a, n, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Za(l, a) || !Za(n, u) : !0;
  }
  function Cf(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && oi.enqueueReplaceState(t, t.state, null);
  }
  function Xl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = _({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Of(e) {
    Ln(e);
  }
  function Uf(e) {
    console.error(e);
  }
  function Df(e) {
    Ln(e);
  }
  function du(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Rf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function di(e, t, l) {
    return l = sl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      du(e, t);
    }, l;
  }
  function Hf(e) {
    return e = sl(e), e.tag = 3, e;
  }
  function wf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        Rf(t, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Rf(t, l, a), typeof n != "function" && (hl === null ? hl = /* @__PURE__ */ new Set([this]) : hl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function r0(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && ra(
        t,
        l,
        n,
        !0
      ), l = mt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Et === null ? zu() : l.alternate === null && De === 0 && (De = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Pn ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Bi(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Pn ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Bi(e, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Bi(e, a, n), zu(), !1;
    }
    if (fe)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Oc && (e = Error(f(422), { cause: a }), ka(St(e, l)))) : (a !== Oc && (t = Error(f(423), {
        cause: a
      }), ka(
        St(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = St(a, l), n = di(
        e.stateNode,
        a,
        n
      ), Qc(e, n), De !== 4 && (De = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = St(u, l), mn === null ? mn = [u] : mn.push(u), De !== 4 && (De = 2), t === null) return !0;
    a = St(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = di(l.stateNode, a, e), Qc(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (hl === null || !hl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Hf(n), wf(
              n,
              e,
              l,
              a
            ), Qc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var mi = Error(f(461)), Xe = !1;
  function $e(e, t, l, a) {
    t.child = e === null ? Yr(t, null, l, a) : Yl(
      t,
      e.child,
      l,
      a
    );
  }
  function Bf(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return Hl(t), a = Jc(
      e,
      t,
      l,
      c,
      u,
      n
    ), s = $c(), e !== null && !Xe ? (Wc(e, t, n), Vt(e, t, n)) : (fe && s && Ac(t), t.flags |= 1, $e(e, t, a, n), t.child);
  }
  function qf(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !Tc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Yf(
        e,
        t,
        u,
        a,
        n
      )) : (e = kn(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Si(e, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Za, l(c, a) && e.ref === t.ref)
        return Vt(e, t, n);
    }
    return t.flags |= 1, e = Yt(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Yf(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Za(u, a) && e.ref === t.ref)
        if (Xe = !1, t.pendingProps = a = u, Si(e, n))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else
          return t.lanes = e.lanes, Vt(e, t, n);
    }
    return vi(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Gf(e, t, l, a) {
    var n = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return Xf(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Fn(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Qr(t, u) : Zc(), Lr(t);
      else
        return a = t.lanes = 536870912, Xf(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Fn(t, u.cachePool), Qr(t, u), ol(), t.memoizedState = null) : (e !== null && Fn(t, null), Zc(), ol());
    return $e(e, t, n, l), t.child;
  }
  function un(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Xf(e, t, l, a, n) {
    var u = qc();
    return u = u === null ? null : { parent: Ye._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Fn(t, null), Zc(), Lr(t), e !== null && ra(e, t, a, !0), t.childLanes = n, null;
  }
  function mu(e, t) {
    return t = hu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qf(e, t, l) {
    return Yl(t, e.child, null, l), e = mu(t, t.pendingProps), e.flags |= 2, vt(t), t.memoizedState = null, e;
  }
  function f0(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (fe) {
        if (a.mode === "hidden")
          return e = mu(t, a), t.lanes = 536870912, un(null, e);
        if (Kc(t), (e = Ee) ? (e = td(
          e,
          zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: al !== null ? { id: Ut, overflow: Dt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = zr(e), l.return = t, t.child = l, ke = t, Ee = null)) : e = null, e === null) throw ul(t);
        return t.lanes = 536870912, null;
      }
      return mu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Kc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Qf(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Xe || ra(e, t, l, !1), n = (l & e.childLanes) !== 0, Xe || n) {
        if (a = je, a !== null && (c = Os(a, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Ol(e, c), it(a, e, c), mi;
        zu(), t = Qf(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Ee = Tt(c.nextSibling), ke = t, fe = !0, nl = null, zt = !1, e !== null && _r(t, e), t = mu(t, a), t.flags |= 4096;
      return t;
    }
    return e = Yt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function vu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function vi(e, t, l, a, n) {
    return Hl(t), l = Jc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = $c(), e !== null && !Xe ? (Wc(e, t, n), Vt(e, t, n)) : (fe && a && Ac(t), t.flags |= 1, $e(e, t, l, n), t.child);
  }
  function Lf(e, t, l, a, n, u) {
    return Hl(t), t.updateQueue = null, l = Vr(
      t,
      a,
      l,
      n
    ), Zr(e), a = $c(), e !== null && !Xe ? (Wc(e, t, u), Vt(e, t, u)) : (fe && a && Ac(t), t.flags |= 1, $e(e, t, l, u), t.child);
  }
  function Zf(e, t, l, a, n) {
    if (Hl(t), t.stateNode === null) {
      var u = ua, c = l.contextType;
      typeof c == "object" && c !== null && (u = Je(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = oi, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Gc(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? Je(c) : ua, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (fi(
        t,
        l,
        c,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && oi.enqueueReplaceState(u, u.state, null), en(t, a, u, n), Pa(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps, r = Xl(l, s);
      u.props = r;
      var y = u.context, N = l.contextType;
      c = ua, typeof N == "object" && N !== null && (c = Je(N));
      var E = l.getDerivedStateFromProps;
      N = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || y !== c) && Cf(
        t,
        u,
        a,
        c
      ), il = !1;
      var x = t.memoizedState;
      u.state = x, en(t, a, u, n), Pa(), y = t.memoizedState, s || x !== y || il ? (typeof E == "function" && (fi(
        t,
        l,
        E,
        a
      ), y = t.memoizedState), (r = il || Af(
        t,
        l,
        r,
        a,
        x,
        y,
        c
      )) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), u.props = a, u.state = y, u.context = c, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Xc(e, t), c = t.memoizedProps, N = Xl(l, c), u.props = N, E = t.pendingProps, x = u.context, y = l.contextType, r = ua, typeof y == "object" && y !== null && (r = Je(y)), s = l.getDerivedStateFromProps, (y = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== E || x !== r) && Cf(
        t,
        u,
        a,
        r
      ), il = !1, x = t.memoizedState, u.state = x, en(t, a, u, n), Pa();
      var b = t.memoizedState;
      c !== E || x !== b || il || e !== null && e.dependencies !== null && $n(e.dependencies) ? (typeof s == "function" && (fi(
        t,
        l,
        s,
        a
      ), b = t.memoizedState), (N = il || Af(
        t,
        l,
        N,
        a,
        x,
        b,
        r
      ) || e !== null && e.dependencies !== null && $n(e.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        b,
        r
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = r, a = N) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, vu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Yl(
      t,
      e.child,
      null,
      n
    ), t.child = Yl(
      t,
      null,
      l,
      n
    )) : $e(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Vt(
      e,
      t,
      n
    ), e;
  }
  function Vf(e, t, l, a) {
    return Dl(), t.flags |= 256, $e(e, t, l, a), t.child;
  }
  var hi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yi(e) {
    return { baseLanes: e, cachePool: Dr() };
  }
  function xi(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= yt), e;
  }
  function Kf(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (fe) {
        if (n ? fl(t) : ol(), (e = Ee) ? (e = td(
          e,
          zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: al !== null ? { id: Ut, overflow: Dt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = zr(e), l.return = t, t.child = l, ke = t, Ee = null)) : e = null, e === null) throw ul(t);
        return Pi(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (ol(), n = t.mode, s = hu(
        { mode: "hidden", children: s },
        n
      ), a = Ul(
        a,
        n,
        l,
        null
      ), s.return = t, a.return = t, s.sibling = a, t.child = s, a = t.child, a.memoizedState = yi(l), a.childLanes = xi(
        e,
        c,
        l
      ), t.memoizedState = hi, un(null, a)) : (fl(t), bi(t, s));
    }
    var r = e.memoizedState;
    if (r !== null && (s = r.dehydrated, s !== null)) {
      if (u)
        t.flags & 256 ? (fl(t), t.flags &= -257, t = gi(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (ol(), t.child = e.child, t.flags |= 128, t = null) : (ol(), s = a.fallback, n = t.mode, a = hu(
          { mode: "visible", children: a.children },
          n
        ), s = Ul(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = t, s.return = t, a.sibling = s, t.child = a, Yl(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = yi(l), a.childLanes = xi(
          e,
          c,
          l
        ), t.memoizedState = hi, t = un(null, a));
      else if (fl(t), Pi(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var y = c.dgst;
        c = y, a = Error(f(419)), a.stack = "", a.digest = c, ka({ value: a, source: null, stack: null }), t = gi(
          e,
          t,
          l
        );
      } else if (Xe || ra(e, t, l, !1), c = (l & e.childLanes) !== 0, Xe || c) {
        if (c = je, c !== null && (a = Os(c, l), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Ol(e, a), it(c, e, a), mi;
        Ii(s) || zu(), t = gi(
          e,
          t,
          l
        );
      } else
        Ii(s) ? (t.flags |= 192, t.child = e.child, t = null) : (e = r.treeContext, Ee = Tt(
          s.nextSibling
        ), ke = t, fe = !0, nl = null, zt = !1, e !== null && _r(t, e), t = bi(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (ol(), s = a.fallback, n = t.mode, r = e.child, y = r.sibling, a = Yt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, y !== null ? s = Yt(
      y,
      s
    ) : (s = Ul(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = t, a.return = t, a.sibling = s, t.child = a, un(null, a), a = t.child, s = e.child.memoizedState, s === null ? s = yi(l) : (n = s.cachePool, n !== null ? (r = Ye._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = Dr(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = xi(
      e,
      c,
      l
    ), t.memoizedState = hi, un(e.child, a)) : (fl(t), l = e.child, e = l.sibling, l = Yt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function bi(e, t) {
    return t = hu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function hu(e, t) {
    return e = dt(22, e, null, t), e.lanes = 0, e;
  }
  function gi(e, t, l) {
    return Yl(t, e.child, null, l), e = bi(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Rc(e.return, t, l);
  }
  function pi(e, t, l, a, n, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u);
  }
  function Jf(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var c = He.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, H(He, c), $e(e, t, a, l), a = fe ? Ka : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && kf(e, l, t);
        else if (e.tag === 19)
          kf(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && au(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), pi(
          t,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && au(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        pi(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        pi(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), vl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (ra(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, l = Yt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Yt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Si(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && $n(e)));
  }
  function o0(e, t, l) {
    switch (t.tag) {
      case 3:
        Ie(t, t.stateNode.containerInfo), cl(t, Ye, e.memoizedState.cache), Dl();
        break;
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        cl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Kc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Kf(e, t, l) : (fl(t), e = Vt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        fl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (ra(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return Jf(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(He, He.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Gf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        cl(t, Ye, e.memoizedState.cache);
    }
    return Vt(e, t, l);
  }
  function $f(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Xe = !0;
      else {
        if (!Si(e, l) && (t.flags & 128) === 0)
          return Xe = !1, o0(
            e,
            t,
            l
          );
        Xe = (e.flags & 131072) !== 0;
      }
    else
      Xe = !1, fe && (t.flags & 1048576) !== 0 && Tr(t, Ka, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Bl(t.elementType), t.type = e, typeof e == "function")
            Tc(e) ? (a = Xl(e, a), t.tag = 1, t = Zf(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = vi(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Se) {
                t.tag = 11, t = Bf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === p) {
                t.tag = 14, t = qf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = et(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return vi(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = Xl(
          a,
          t.pendingProps
        ), Zf(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (Ie(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Xc(e, t), en(t, a, null, l);
          var c = t.memoizedState;
          if (a = c.cache, cl(t, Ye, a), a !== u.cache && Hc(
            t,
            [Ye],
            l,
            !0
          ), Pa(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Vf(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = St(
                Error(f(424)),
                t
              ), ka(n), t = Vf(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ee = Tt(e.firstChild), ke = t, fe = !0, nl = null, zt = !0, l = Yr(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Dl(), a === n) {
              t = Vt(
                e,
                t,
                l
              );
              break e;
            }
            $e(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return vu(e, t), e === null ? (l = id(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : fe || (l = t.type, e = t.pendingProps, a = Ou(
          le.current
        ).createElement(l), a[Ke] = t, a[tt] = e, We(a, l, e), Ze(a), t.stateNode = a) : t.memoizedState = id(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Oa(t), e === null && fe && (a = t.stateNode = nd(
          t.type,
          t.pendingProps,
          le.current
        ), ke = t, zt = !0, n = Ee, gl(t.type) ? (es = n, Ee = Tt(a.firstChild)) : Ee = n), $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), vu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && fe && ((n = a = Ee) && (a = X0(
          a,
          t.type,
          t.pendingProps,
          zt
        ), a !== null ? (t.stateNode = a, ke = t, Ee = Tt(a.firstChild), zt = !1, n = !0) : n = !1), n || ul(t)), Oa(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, $i(n, u) ? a = null : c !== null && $i(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = Jc(
          e,
          t,
          l0,
          null,
          null,
          l
        ), Sn._currentValue = n), vu(e, t), $e(e, t, a, l), t.child;
      case 6:
        return e === null && fe && ((e = l = Ee) && (l = Q0(
          l,
          t.pendingProps,
          zt
        ), l !== null ? (t.stateNode = l, ke = t, Ee = null, e = !0) : e = !1), e || ul(t)), null;
      case 13:
        return Kf(e, t, l);
      case 4:
        return Ie(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Yl(
          t,
          null,
          a,
          l
        ) : $e(e, t, a, l), t.child;
      case 11:
        return Bf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return $e(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, cl(t, t.type, a.value), $e(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Hl(t), n = Je(n), a = a(n), t.flags |= 1, $e(e, t, a, l), t.child;
      case 14:
        return qf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Yf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Jf(e, t, l);
      case 31:
        return f0(e, t, l);
      case 22:
        return Gf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Hl(t), a = Je(Ye), e === null ? (n = qc(), n === null && (n = je, u = wc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Gc(t), cl(t, Ye, n)) : ((e.lanes & l) !== 0 && (Xc(e, t), en(t, null, null, l), Pa()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), cl(t, Ye, a)) : (a = u.cache, cl(t, Ye, a), a !== n.cache && Hc(
          t,
          [Ye],
          l,
          !0
        ))), $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Kt(e) {
    e.flags |= 4;
  }
  function Ni(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jo()) e.flags |= 8192;
        else
          throw ql = Pn, Yc;
    } else e.flags &= -16777217;
  }
  function Wf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !dd(t))
      if (jo()) e.flags |= 8192;
      else
        throw ql = Pn, Yc;
  }
  function yu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ms() : 536870912, e.lanes |= t, Sa |= t);
  }
  function cn(e, t) {
    if (!fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function d0(e, t, l) {
    var a = t.pendingProps;
    switch (Cc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Te(t), null;
      case 1:
        return Te(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(Ye), Re(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (sa(t) ? Kt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uc())), Te(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (Kt(t), u !== null ? (Te(t), Wf(t, u)) : (Te(t), Ni(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (Kt(t), Te(t), Wf(t, u)) : (Te(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Kt(t), Te(t), Ni(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (_n(t), l = le.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Te(t), null;
          }
          e = q.current, sa(t) ? Mr(t) : (e = nd(n, a, l), t.stateNode = e, Kt(t));
        }
        return Te(t), null;
      case 5:
        if (_n(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Te(t), null;
          }
          if (u = q.current, sa(t))
            Mr(t);
          else {
            var c = Ou(
              le.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? c.createElement(n, { is: a.is }) : c.createElement(n);
                }
            }
            u[Ke] = t, u[tt] = a;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = u;
            e: switch (We(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Kt(t);
          }
        }
        return Te(t), Ni(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = le.current, sa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = ke, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ke] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || ko(e.nodeValue, l)), e || ul(t, !0);
          } else
            e = Ou(e).createTextNode(
              a
            ), e[Ke] = t, t.stateNode = e;
        }
        return Te(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = sa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[Ke] = t;
            } else
              Dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Te(t), e = !1;
          } else
            l = Uc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Te(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = sa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[Ke] = t;
            } else
              Dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Te(t), n = !1;
          } else
            n = Uc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
        }
        return vt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), yu(t, t.updateQueue), Te(t), null);
      case 4:
        return Re(), e === null && Zi(t.stateNode.containerInfo), Te(t), null;
      case 10:
        return Qt(t.type), Te(t), null;
      case 19:
        if (M(He), a = t.memoizedState, a === null) return Te(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) cn(a, !1);
          else {
            if (De !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = au(e), u !== null) {
                  for (t.flags |= 128, cn(a, !1), e = u.updateQueue, t.updateQueue = e, yu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    jr(l, e), l = l.sibling;
                  return H(
                    He,
                    He.current & 1 | 2
                  ), fe && Gt(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && st() > Su && (t.flags |= 128, n = !0, cn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = au(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, yu(t, e), cn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !fe)
                return Te(t), null;
            } else
              2 * st() - a.renderingStartTime > Su && l !== 536870912 && (t.flags |= 128, n = !0, cn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = st(), e.sibling = null, l = He.current, H(
          He,
          n ? l & 1 | 2 : l & 1
        ), fe && Gt(t, a.treeForkCount), e) : (Te(t), null);
      case 22:
      case 23:
        return vt(t), Vc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), l = t.updateQueue, l !== null && yu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && M(wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Qt(Ye), Te(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function m0(e, t) {
    switch (Cc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qt(Ye), Re(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _n(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (vt(t), t.alternate === null)
            throw Error(f(340));
          Dl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (vt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Dl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return M(He), null;
      case 4:
        return Re(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return vt(t), Vc(), e !== null && M(wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qt(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ff(e, t) {
    switch (Cc(t), t.tag) {
      case 3:
        Qt(Ye), Re();
        break;
      case 26:
      case 27:
      case 5:
        _n(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && vt(t);
        break;
      case 13:
        vt(t);
        break;
      case 19:
        M(He);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        vt(t), Vc(), e !== null && M(wl);
        break;
      case 24:
        Qt(Ye);
    }
  }
  function sn(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, c = l.inst;
            a = u(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      ye(t, t.return, s);
    }
  }
  function dl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst, s = c.destroy;
            if (s !== void 0) {
              c.destroy = void 0, n = t;
              var r = l, y = s;
              try {
                y();
              } catch (N) {
                ye(
                  n,
                  r,
                  N
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      ye(t, t.return, N);
    }
  }
  function If(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Xr(t, l);
      } catch (a) {
        ye(e, e.return, a);
      }
    }
  }
  function Pf(e, t, l) {
    l.props = Xl(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      ye(e, t, a);
    }
  }
  function rn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      ye(e, t, n);
    }
  }
  function Rt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ye(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          ye(e, t, n);
        }
      else l.current = null;
  }
  function eo(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function ji(e, t, l) {
    try {
      var a = e.stateNode;
      H0(a, e.type, l, t), a[tt] = t;
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function to(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && gl(e.type) || e.tag === 4;
  }
  function zi(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || to(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && gl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ei(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Bt));
    else if (a !== 4 && (a === 27 && gl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Ei(e, t, l), e = e.sibling; e !== null; )
        Ei(e, t, l), e = e.sibling;
  }
  function xu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && gl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (xu(e, t, l), e = e.sibling; e !== null; )
        xu(e, t, l), e = e.sibling;
  }
  function lo(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      We(t, a, l), t[Ke] = e, t[tt] = l;
    } catch (u) {
      ye(e, e.return, u);
    }
  }
  var kt = !1, Qe = !1, Ti = !1, ao = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
  function v0(e, t) {
    if (e = e.containerInfo, ki = qu, e = vr(e), gc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var c = 0, s = -1, r = -1, y = 0, N = 0, E = e, x = null;
            t: for (; ; ) {
              for (var b; E !== l || n !== 0 && E.nodeType !== 3 || (s = c + n), E !== u || a !== 0 && E.nodeType !== 3 || (r = c + a), E.nodeType === 3 && (c += E.nodeValue.length), (b = E.firstChild) !== null; )
                x = E, E = b;
              for (; ; ) {
                if (E === e) break t;
                if (x === l && ++y === n && (s = c), x === u && ++N === a && (r = c), (b = E.nextSibling) !== null) break;
                E = x, x = E.parentNode;
              }
              E = b;
            }
            l = s === -1 || r === -1 ? null : { start: s, end: r };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ji = { focusedElem: e, selectionRange: l }, qu = !1, Ve = t; Ve !== null; )
      if (t = Ve, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ve = e;
      else
        for (; Ve !== null; ) {
          switch (t = Ve, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var w = Xl(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    w,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (k) {
                  ye(
                    l,
                    l.return,
                    k
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Fi(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fi(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ve = e;
            break;
          }
          Ve = t.return;
        }
  }
  function no(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $t(e, l), a & 4 && sn(5, l);
        break;
      case 1:
        if ($t(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              ye(l, l.return, c);
            }
          else {
            var n = Xl(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              ye(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && If(l), a & 512 && rn(l, l.return);
        break;
      case 3:
        if ($t(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Xr(e, t);
          } catch (c) {
            ye(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && lo(l);
      case 26:
      case 5:
        $t(e, l), t === null && a & 4 && eo(l), a & 512 && rn(l, l.return);
        break;
      case 12:
        $t(e, l);
        break;
      case 31:
        $t(e, l), a & 4 && io(e, l);
        break;
      case 13:
        $t(e, l), a & 4 && so(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = j0.bind(
          null,
          l
        ), L0(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || kt, !a) {
          t = t !== null && t.memoizedState !== null || Qe, n = kt;
          var u = Qe;
          kt = a, (Qe = t) && !u ? Wt(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : $t(e, l), kt = n, Qe = u;
        }
        break;
      case 30:
        break;
      default:
        $t(e, l);
    }
  }
  function uo(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, uo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && lc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Me = null, at = !1;
  function Jt(e, t, l) {
    for (l = l.child; l !== null; )
      co(e, t, l), l = l.sibling;
  }
  function co(e, t, l) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(Ua, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Qe || Rt(l, t), Jt(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Qe || Rt(l, t);
        var a = Me, n = at;
        gl(l.type) && (Me = l.stateNode, at = !1), Jt(
          e,
          t,
          l
        ), bn(l.stateNode), Me = a, at = n;
        break;
      case 5:
        Qe || Rt(l, t);
      case 6:
        if (a = Me, n = at, Me = null, Jt(
          e,
          t,
          l
        ), Me = a, at = n, Me !== null)
          if (at)
            try {
              (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(l.stateNode);
            } catch (u) {
              ye(
                l,
                t,
                u
              );
            }
          else
            try {
              Me.removeChild(l.stateNode);
            } catch (u) {
              ye(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Me !== null && (at ? (e = Me, Po(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Aa(e)) : Po(Me, l.stateNode));
        break;
      case 4:
        a = Me, n = at, Me = l.stateNode.containerInfo, at = !0, Jt(
          e,
          t,
          l
        ), Me = a, at = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        dl(2, l, t), Qe || dl(4, l, t), Jt(
          e,
          t,
          l
        );
        break;
      case 1:
        Qe || (Rt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Pf(
          l,
          t,
          a
        )), Jt(
          e,
          t,
          l
        );
        break;
      case 21:
        Jt(
          e,
          t,
          l
        );
        break;
      case 22:
        Qe = (a = Qe) || l.memoizedState !== null, Jt(
          e,
          t,
          l
        ), Qe = a;
        break;
      default:
        Jt(
          e,
          t,
          l
        );
    }
  }
  function io(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Aa(e);
      } catch (l) {
        ye(t, t.return, l);
      }
    }
  }
  function so(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Aa(e);
      } catch (l) {
        ye(t, t.return, l);
      }
  }
  function h0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ao()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ao()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function bu(e, t) {
    var l = h0(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = z0.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function nt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, c = t, s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (gl(s.type)) {
                Me = s.stateNode, at = !1;
                break e;
              }
              break;
            case 5:
              Me = s.stateNode, at = !1;
              break e;
            case 3:
            case 4:
              Me = s.stateNode.containerInfo, at = !0;
              break e;
          }
          s = s.return;
        }
        if (Me === null) throw Error(f(160));
        co(u, c, n), Me = null, at = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ro(t, e), t = t.sibling;
  }
  var At = null;
  function ro(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, e), ut(e), a & 4 && (dl(3, e, e.return), sn(3, e), dl(5, e, e.return));
        break;
      case 1:
        nt(t, e), ut(e), a & 512 && (Qe || l === null || Rt(l, l.return)), a & 64 && kt && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = At;
        if (nt(t, e), ut(e), a & 512 && (Qe || l === null || Rt(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ha] || u[Ke] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), We(u, a, l), u[Ke] = e, Ze(u), a = u;
                      break e;
                    case "link":
                      var c = fd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (u = c[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), We(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = fd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (s = 0; s < c.length; s++)
                          if (u = c[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), We(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[Ke] = e, Ze(u), a = u;
                }
                e.stateNode = a;
              } else
                od(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = rd(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? od(
              n,
              e.type,
              e.stateNode
            ) : rd(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ji(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, e), ut(e), a & 512 && (Qe || l === null || Rt(l, l.return)), l !== null && a & 4 && ji(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (nt(t, e), ut(e), a & 512 && (Qe || l === null || Rt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Il(n, "");
          } catch (w) {
            ye(e, e.return, w);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, ji(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Ti = !0);
        break;
      case 6:
        if (nt(t, e), ut(e), a & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (w) {
            ye(e, e.return, w);
          }
        }
        break;
      case 3:
        if (Ru = null, n = At, At = Uu(t.containerInfo), nt(t, e), At = n, ut(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Aa(t.containerInfo);
          } catch (w) {
            ye(e, e.return, w);
          }
        Ti && (Ti = !1, fo(e));
        break;
      case 4:
        a = At, At = Uu(
          e.stateNode.containerInfo
        ), nt(t, e), ut(e), At = a;
        break;
      case 12:
        nt(t, e), ut(e);
        break;
      case 31:
        nt(t, e), ut(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bu(e, a)));
        break;
      case 13:
        nt(t, e), ut(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (pu = st()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bu(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var r = l !== null && l.memoizedState !== null, y = kt, N = Qe;
        if (kt = y || n, Qe = N || r, nt(t, e), Qe = N, kt = y, ut(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || r || kt || Qe || Ql(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                r = l = t;
                try {
                  if (u = r.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = r.stateNode;
                    var E = r.memoizedProps.style, x = E != null && E.hasOwnProperty("display") ? E.display : null;
                    s.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (w) {
                  ye(r, r.return, w);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (w) {
                  ye(r, r.return, w);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                r = t;
                try {
                  var b = r.stateNode;
                  n ? ed(b, !0) : ed(r.stateNode, !1);
                } catch (w) {
                  ye(r, r.return, w);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, bu(e, l))));
        break;
      case 19:
        nt(t, e), ut(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, bu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nt(t, e), ut(e);
    }
  }
  function ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (to(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = zi(e);
            xu(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Il(c, ""), l.flags &= -33);
            var s = zi(e);
            xu(e, s, c);
            break;
          case 3:
          case 4:
            var r = l.stateNode.containerInfo, y = zi(e);
            Ei(
              e,
              y,
              r
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (N) {
        ye(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function fo(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        fo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function $t(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        no(e, t.alternate, t), t = t.sibling;
  }
  function Ql(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dl(4, t, t.return), Ql(t);
          break;
        case 1:
          Rt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Pf(
            t,
            t.return,
            l
          ), Ql(t);
          break;
        case 27:
          bn(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), Ql(t);
          break;
        case 22:
          t.memoizedState === null && Ql(t);
          break;
        case 30:
          Ql(t);
          break;
        default:
          Ql(t);
      }
      e = e.sibling;
    }
  }
  function Wt(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Wt(
            n,
            u,
            l
          ), sn(4, u);
          break;
        case 1:
          if (Wt(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              ye(a, a.return, y);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Gr(r[n], s);
            } catch (y) {
              ye(a, a.return, y);
            }
          }
          l && c & 64 && If(u), rn(u, u.return);
          break;
        case 27:
          lo(u);
        case 26:
        case 5:
          Wt(
            n,
            u,
            l
          ), l && a === null && c & 4 && eo(u), rn(u, u.return);
          break;
        case 12:
          Wt(
            n,
            u,
            l
          );
          break;
        case 31:
          Wt(
            n,
            u,
            l
          ), l && c & 4 && io(n, u);
          break;
        case 13:
          Wt(
            n,
            u,
            l
          ), l && c & 4 && so(n, u);
          break;
        case 22:
          u.memoizedState === null && Wt(
            n,
            u,
            l
          ), rn(u, u.return);
          break;
        case 30:
          break;
        default:
          Wt(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function _i(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ja(l));
  }
  function Mi(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ja(e));
  }
  function Ct(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        oo(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function oo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ct(
          e,
          t,
          l,
          a
        ), n & 2048 && sn(9, t);
        break;
      case 1:
        Ct(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Ct(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ja(e)));
        break;
      case 12:
        if (n & 2048) {
          Ct(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, c = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (r) {
            ye(t, t.return, r);
          }
        } else
          Ct(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Ct(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Ct(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ct(
          e,
          t,
          l,
          a
        ) : fn(e, t) : u._visibility & 2 ? Ct(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, ba(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && _i(c, t);
        break;
      case 24:
        Ct(
          e,
          t,
          l,
          a
        ), n & 2048 && Mi(t.alternate, t);
        break;
      default:
        Ct(
          e,
          t,
          l,
          a
        );
    }
  }
  function ba(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, s = l, r = a, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            u,
            c,
            s,
            r,
            n
          ), sn(8, c);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null ? N._visibility & 2 ? ba(
            u,
            c,
            s,
            r,
            n
          ) : fn(
            u,
            c
          ) : (N._visibility |= 2, ba(
            u,
            c,
            s,
            r,
            n
          )), n && y & 2048 && _i(
            c.alternate,
            c
          );
          break;
        case 24:
          ba(
            u,
            c,
            s,
            r,
            n
          ), n && y & 2048 && Mi(c.alternate, c);
          break;
        default:
          ba(
            u,
            c,
            s,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function fn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            fn(l, a), n & 2048 && _i(
              a.alternate,
              a
            );
            break;
          case 24:
            fn(l, a), n & 2048 && Mi(a.alternate, a);
            break;
          default:
            fn(l, a);
        }
        t = t.sibling;
      }
  }
  var on = 8192;
  function ga(e, t, l) {
    if (e.subtreeFlags & on)
      for (e = e.child; e !== null; )
        mo(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function mo(e, t, l) {
    switch (e.tag) {
      case 26:
        ga(
          e,
          t,
          l
        ), e.flags & on && e.memoizedState !== null && tv(
          l,
          At,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ga(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = At;
        At = Uu(e.stateNode.containerInfo), ga(
          e,
          t,
          l
        ), At = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = on, on = 16777216, ga(
          e,
          t,
          l
        ), on = a) : ga(
          e,
          t,
          l
        ));
        break;
      default:
        ga(
          e,
          t,
          l
        );
    }
  }
  function vo(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function dn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ve = a, yo(
            a,
            e
          );
        }
      vo(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ho(e), e = e.sibling;
  }
  function ho(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        dn(e), e.flags & 2048 && dl(9, e, e.return);
        break;
      case 3:
        dn(e);
        break;
      case 12:
        dn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, gu(e)) : dn(e);
        break;
      default:
        dn(e);
    }
  }
  function gu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ve = a, yo(
            a,
            e
          );
        }
      vo(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, t, t.return), gu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, gu(t));
          break;
        default:
          gu(t);
      }
      e = e.sibling;
    }
  }
  function yo(e, t) {
    for (; Ve !== null; ) {
      var l = Ve;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ja(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Ve = a;
      else
        e: for (l = e; Ve !== null; ) {
          a = Ve;
          var n = a.sibling, u = a.return;
          if (uo(a), a === l) {
            Ve = null;
            break e;
          }
          if (n !== null) {
            n.return = u, Ve = n;
            break e;
          }
          Ve = u;
        }
    }
  }
  var y0 = {
    getCacheForType: function(e) {
      var t = Je(Ye), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Je(Ye).controller.signal;
    }
  }, x0 = typeof WeakMap == "function" ? WeakMap : Map, me = 0, je = null, ae = null, ce = 0, he = 0, ht = null, ml = !1, pa = !1, Ai = !1, Ft = 0, De = 0, vl = 0, Ll = 0, Ci = 0, yt = 0, Sa = 0, mn = null, ct = null, Oi = !1, pu = 0, xo = 0, Su = 1 / 0, Nu = null, hl = null, Le = 0, yl = null, Na = null, It = 0, Ui = 0, Di = null, bo = null, vn = 0, Ri = null;
  function xt() {
    return (me & 2) !== 0 && ce !== 0 ? ce & -ce : j.T !== null ? Gi() : Us();
  }
  function go() {
    if (yt === 0)
      if ((ce & 536870912) === 0 || fe) {
        var e = Cn;
        Cn <<= 1, (Cn & 3932160) === 0 && (Cn = 262144), yt = e;
      } else yt = 536870912;
    return e = mt.current, e !== null && (e.flags |= 32), yt;
  }
  function it(e, t, l) {
    (e === je && (he === 2 || he === 9) || e.cancelPendingCommit !== null) && (ja(e, 0), xl(
      e,
      ce,
      yt,
      !1
    )), Ra(e, l), ((me & 2) === 0 || e !== je) && (e === je && ((me & 2) === 0 && (Ll |= l), De === 4 && xl(
      e,
      ce,
      yt,
      !1
    )), Ht(e));
  }
  function po(e, t, l) {
    if ((me & 6) !== 0) throw Error(f(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Da(e, t), n = a ? p0(e, t) : wi(e, t, !0), u = a;
    do {
      if (n === 0) {
        pa && !a && xl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !b0(l)) {
          n = wi(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var s = e;
              n = mn;
              var r = s.current.memoizedState.isDehydrated;
              if (r && (ja(s, c).flags |= 256), c = wi(
                s,
                c,
                !1
              ), c !== 2) {
                if (Ai && !r) {
                  s.errorRecoveryDisabledLanes |= u, Ll |= u, n = 4;
                  break e;
                }
                u = ct, ct = n, u !== null && (ct === null ? ct = u : ct.push.apply(
                  ct,
                  u
                ));
              }
              n = c;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ja(e, 0), xl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xl(
                a,
                t,
                yt,
                !ml
              );
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = pu + 300 - st(), 10 < n)) {
            if (xl(
              a,
              t,
              yt,
              !ml
            ), Un(a, 0, !0) !== 0) break e;
            It = t, a.timeoutHandle = Fo(
              So.bind(
                null,
                a,
                l,
                ct,
                Nu,
                Oi,
                t,
                yt,
                Ll,
                Sa,
                ml,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          So(
            a,
            l,
            ct,
            Nu,
            Oi,
            t,
            yt,
            Ll,
            Sa,
            ml,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ht(e);
  }
  function So(e, t, l, a, n, u, c, s, r, y, N, E, x, b) {
    if (e.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bt
      }, mo(
        t,
        u,
        E
      );
      var w = (u & 62914560) === u ? pu - st() : (u & 4194048) === u ? xo - st() : 0;
      if (w = lv(
        E,
        w
      ), w !== null) {
        It = u, e.cancelPendingCommit = w(
          Ao.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            n,
            c,
            s,
            r,
            N,
            E,
            null,
            x,
            b
          )
        ), xl(e, u, c, !y);
        return;
      }
    }
    Ao(
      e,
      t,
      u,
      l,
      a,
      n,
      c,
      s,
      r
    );
  }
  function b0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ot(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function xl(e, t, l, a) {
    t &= ~Ci, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - ft(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && As(e, l, t);
  }
  function ju() {
    return (me & 6) === 0 ? (hn(0), !1) : !0;
  }
  function Hi() {
    if (ae !== null) {
      if (he === 0)
        var e = ae.return;
      else
        e = ae, Xt = Rl = null, Fc(e), ma = null, Wa = 0, e = ae;
      for (; e !== null; )
        Ff(e.alternate, e), e = e.return;
      ae = null;
    }
  }
  function ja(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, q0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), It = 0, Hi(), je = e, ae = l = Yt(e.current, null), ce = t, he = 0, ht = null, ml = !1, pa = Da(e, t), Ai = !1, Sa = yt = Ci = Ll = vl = De = 0, ct = mn = null, Oi = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ft(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return Ft = t, Zn(), l;
  }
  function No(e, t) {
    ee = null, j.H = nn, t === da || t === In ? (t = wr(), he = 3) : t === Yc ? (t = wr(), he = 4) : he = t === mi ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ht = t, ae === null && (De = 1, du(
      e,
      St(t, e.current)
    ));
  }
  function jo() {
    var e = mt.current;
    return e === null ? !0 : (ce & 4194048) === ce ? Et === null : (ce & 62914560) === ce || (ce & 536870912) !== 0 ? e === Et : !1;
  }
  function zo() {
    var e = j.H;
    return j.H = nn, e === null ? nn : e;
  }
  function Eo() {
    var e = j.A;
    return j.A = y0, e;
  }
  function zu() {
    De = 4, ml || (ce & 4194048) !== ce && mt.current !== null || (pa = !0), (vl & 134217727) === 0 && (Ll & 134217727) === 0 || je === null || xl(
      je,
      ce,
      yt,
      !1
    );
  }
  function wi(e, t, l) {
    var a = me;
    me |= 2;
    var n = zo(), u = Eo();
    (je !== e || ce !== t) && (Nu = null, ja(e, t)), t = !1;
    var c = De;
    e: do
      try {
        if (he !== 0 && ae !== null) {
          var s = ae, r = ht;
          switch (he) {
            case 8:
              Hi(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var y = he;
              if (he = 0, ht = null, za(e, s, r, y), l && pa) {
                c = 0;
                break e;
              }
              break;
            default:
              y = he, he = 0, ht = null, za(e, s, r, y);
          }
        }
        g0(), c = De;
        break;
      } catch (N) {
        No(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xt = Rl = null, me = a, j.H = n, j.A = u, ae === null && (je = null, ce = 0, Zn()), c;
  }
  function g0() {
    for (; ae !== null; ) To(ae);
  }
  function p0(e, t) {
    var l = me;
    me |= 2;
    var a = zo(), n = Eo();
    je !== e || ce !== t ? (Nu = null, Su = st() + 500, ja(e, t)) : pa = Da(
      e,
      t
    );
    e: do
      try {
        if (he !== 0 && ae !== null) {
          t = ae;
          var u = ht;
          t: switch (he) {
            case 1:
              he = 0, ht = null, za(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Rr(u)) {
                he = 0, ht = null, _o(t);
                break;
              }
              t = function() {
                he !== 2 && he !== 9 || je !== e || (he = 7), Ht(e);
              }, u.then(t, t);
              break e;
            case 3:
              he = 7;
              break e;
            case 4:
              he = 5;
              break e;
            case 7:
              Rr(u) ? (he = 0, ht = null, _o(t)) : (he = 0, ht = null, za(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ae.tag) {
                case 26:
                  c = ae.memoizedState;
                case 5:
                case 27:
                  var s = ae;
                  if (c ? dd(c) : s.stateNode.complete) {
                    he = 0, ht = null;
                    var r = s.sibling;
                    if (r !== null) ae = r;
                    else {
                      var y = s.return;
                      y !== null ? (ae = y, Eu(y)) : ae = null;
                    }
                    break t;
                  }
              }
              he = 0, ht = null, za(e, t, u, 5);
              break;
            case 6:
              he = 0, ht = null, za(e, t, u, 6);
              break;
            case 8:
              Hi(), De = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        S0();
        break;
      } catch (N) {
        No(e, N);
      }
    while (!0);
    return Xt = Rl = null, j.H = a, j.A = n, me = l, ae !== null ? 0 : (je = null, ce = 0, Zn(), De);
  }
  function S0() {
    for (; ae !== null && !Zd(); )
      To(ae);
  }
  function To(e) {
    var t = $f(e.alternate, e, Ft);
    e.memoizedProps = e.pendingProps, t === null ? Eu(e) : ae = t;
  }
  function _o(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Lf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ce
        );
        break;
      case 11:
        t = Lf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ce
        );
        break;
      case 5:
        Fc(t);
      default:
        Ff(l, t), t = ae = jr(t, Ft), t = $f(l, t, Ft);
    }
    e.memoizedProps = e.pendingProps, t === null ? Eu(e) : ae = t;
  }
  function za(e, t, l, a) {
    Xt = Rl = null, Fc(t), ma = null, Wa = 0;
    var n = t.return;
    try {
      if (r0(
        e,
        n,
        t,
        l,
        ce
      )) {
        De = 1, du(
          e,
          St(l, e.current)
        ), ae = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw ae = n, u;
      De = 1, du(
        e,
        St(l, e.current)
      ), ae = null;
      return;
    }
    t.flags & 32768 ? (fe || a === 1 ? e = !0 : pa || (ce & 536870912) !== 0 ? e = !1 : (ml = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Mo(t, e)) : Eu(t);
  }
  function Eu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Mo(
          t,
          ml
        );
        return;
      }
      e = t.return;
      var l = d0(
        t.alternate,
        t,
        Ft
      );
      if (l !== null) {
        ae = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ae = t;
        return;
      }
      ae = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function Mo(e, t) {
    do {
      var l = m0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ae = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ae = e;
        return;
      }
      ae = e = l;
    } while (e !== null);
    De = 6, ae = null;
  }
  function Ao(e, t, l, a, n, u, c, s, r) {
    e.cancelPendingCommit = null;
    do
      Tu();
    while (Le !== 0);
    if ((me & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= zc, em(
        e,
        l,
        u,
        c,
        s,
        r
      ), e === je && (ae = je = null, ce = 0), Na = t, yl = e, It = l, Ui = u, Di = n, bo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, E0(Mn, function() {
        return Ro(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, n = R.p, R.p = 2, c = me, me |= 4;
        try {
          v0(e, t, l);
        } finally {
          me = c, R.p = n, j.T = a;
        }
      }
      Le = 1, Co(), Oo(), Uo();
    }
  }
  function Co() {
    if (Le === 1) {
      Le = 0;
      var e = yl, t = Na, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = j.T, j.T = null;
        var a = R.p;
        R.p = 2;
        var n = me;
        me |= 4;
        try {
          ro(t, e);
          var u = Ji, c = vr(e.containerInfo), s = u.focusedElem, r = u.selectionRange;
          if (c !== s && s && s.ownerDocument && mr(
            s.ownerDocument.documentElement,
            s
          )) {
            if (r !== null && gc(s)) {
              var y = r.start, N = r.end;
              if (N === void 0 && (N = y), "selectionStart" in s)
                s.selectionStart = y, s.selectionEnd = Math.min(
                  N,
                  s.value.length
                );
              else {
                var E = s.ownerDocument || document, x = E && E.defaultView || window;
                if (x.getSelection) {
                  var b = x.getSelection(), w = s.textContent.length, k = Math.min(r.start, w), pe = r.end === void 0 ? k : Math.min(r.end, w);
                  !b.extend && k > pe && (c = pe, pe = k, k = c);
                  var m = dr(
                    s,
                    k
                  ), o = dr(
                    s,
                    pe
                  );
                  if (m && o && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                    var h = E.createRange();
                    h.setStart(m.node, m.offset), b.removeAllRanges(), k > pe ? (b.addRange(h), b.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), b.addRange(h));
                  }
                }
              }
            }
            for (E = [], b = s; b = b.parentNode; )
              b.nodeType === 1 && E.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < E.length; s++) {
              var z = E[s];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qu = !!ki, Ji = ki = null;
        } finally {
          me = n, R.p = a, j.T = l;
        }
      }
      e.current = t, Le = 2;
    }
  }
  function Oo() {
    if (Le === 2) {
      Le = 0;
      var e = yl, t = Na, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = j.T, j.T = null;
        var a = R.p;
        R.p = 2;
        var n = me;
        me |= 4;
        try {
          no(e, t.alternate, t);
        } finally {
          me = n, R.p = a, j.T = l;
        }
      }
      Le = 3;
    }
  }
  function Uo() {
    if (Le === 4 || Le === 3) {
      Le = 0, Vd();
      var e = yl, t = Na, l = It, a = bo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Le = 5 : (Le = 0, Na = yl = null, Do(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (hl = null), ec(l), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function")
        try {
          rt.onCommitFiberRoot(
            Ua,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = j.T, n = R.p, R.p = 2, j.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          j.T = t, R.p = n;
        }
      }
      (It & 3) !== 0 && Tu(), Ht(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ri ? vn++ : (vn = 0, Ri = e) : vn = 0, hn(0);
    }
  }
  function Do(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ja(t)));
  }
  function Tu() {
    return Co(), Oo(), Uo(), Ro();
  }
  function Ro() {
    if (Le !== 5) return !1;
    var e = yl, t = Ui;
    Ui = 0;
    var l = ec(It), a = j.T, n = R.p;
    try {
      R.p = 32 > l ? 32 : l, j.T = null, l = Di, Di = null;
      var u = yl, c = It;
      if (Le = 0, Na = yl = null, It = 0, (me & 6) !== 0) throw Error(f(331));
      var s = me;
      if (me |= 4, ho(u.current), oo(
        u,
        u.current,
        c,
        l
      ), me = s, hn(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function")
        try {
          rt.onPostCommitFiberRoot(Ua, u);
        } catch {
        }
      return !0;
    } finally {
      R.p = n, j.T = a, Do(e, t);
    }
  }
  function Ho(e, t, l) {
    t = St(l, t), t = di(e.stateNode, t, 2), e = rl(e, t, 2), e !== null && (Ra(e, 2), Ht(e));
  }
  function ye(e, t, l) {
    if (e.tag === 3)
      Ho(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ho(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (hl === null || !hl.has(a))) {
            e = St(l, e), l = Hf(2), a = rl(t, l, 2), a !== null && (wf(
              l,
              a,
              t,
              e
            ), Ra(a, 2), Ht(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bi(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new x0();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Ai = !0, n.add(l), e = N0.bind(null, e, t, l), t.then(e, e));
  }
  function N0(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, je === e && (ce & l) === l && (De === 4 || De === 3 && (ce & 62914560) === ce && 300 > st() - pu ? (me & 2) === 0 && ja(e, 0) : Ci |= l, Sa === ce && (Sa = 0)), Ht(e);
  }
  function wo(e, t) {
    t === 0 && (t = Ms()), e = Ol(e, t), e !== null && (Ra(e, t), Ht(e));
  }
  function j0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), wo(e, l);
  }
  function z0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), wo(e, l);
  }
  function E0(e, t) {
    return Wu(e, t);
  }
  var _u = null, Ea = null, qi = !1, Mu = !1, Yi = !1, bl = 0;
  function Ht(e) {
    e !== Ea && e.next === null && (Ea === null ? _u = Ea = e : Ea = Ea.next = e), Mu = !0, qi || (qi = !0, _0());
  }
  function hn(e, t) {
    if (!Yi && Mu) {
      Yi = !0;
      do
        for (var l = !1, a = _u; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ft(42 | e) + 1) - 1, u &= n & ~(c & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Go(a, u));
          } else
            u = ce, u = Un(
              a,
              a === je ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Da(a, u) || (l = !0, Go(a, u));
          a = a.next;
        }
      while (l);
      Yi = !1;
    }
  }
  function T0() {
    Bo();
  }
  function Bo() {
    Mu = qi = !1;
    var e = 0;
    bl !== 0 && B0() && (e = bl);
    for (var t = st(), l = null, a = _u; a !== null; ) {
      var n = a.next, u = qo(a, t);
      u === 0 ? (a.next = null, l === null ? _u = n : l.next = n, n === null && (Ea = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Mu = !0)), a = n;
    }
    Le !== 0 && Le !== 5 || hn(e), bl !== 0 && (bl = 0);
  }
  function qo(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ft(u), s = 1 << c, r = n[c];
      r === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = Pd(s, t)) : r <= t && (e.expiredLanes |= s), u &= ~s;
    }
    if (t = je, l = ce, l = Un(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (he === 2 || he === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Fu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Da(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Fu(a), ec(l)) {
        case 2:
        case 8:
          l = Ts;
          break;
        case 32:
          l = Mn;
          break;
        case 268435456:
          l = _s;
          break;
        default:
          l = Mn;
      }
      return a = Yo.bind(null, e), l = Wu(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Fu(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Yo(e, t) {
    if (Le !== 0 && Le !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Tu() && e.callbackNode !== l)
      return null;
    var a = ce;
    return a = Un(
      e,
      e === je ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (po(e, a, t), qo(e, st()), e.callbackNode != null && e.callbackNode === l ? Yo.bind(null, e) : null);
  }
  function Go(e, t) {
    if (Tu()) return null;
    po(e, t, !0);
  }
  function _0() {
    Y0(function() {
      (me & 6) !== 0 ? Wu(
        Es,
        T0
      ) : Bo();
    });
  }
  function Gi() {
    if (bl === 0) {
      var e = fa;
      e === 0 && (e = An, An <<= 1, (An & 261888) === 0 && (An = 256)), bl = e;
    }
    return bl;
  }
  function Xo(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wn("" + e);
  }
  function Qo(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function M0(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Xo(
        (n[tt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[tt] || null) ? Xo(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var s = new Gn(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (bl !== 0) {
                  var r = c ? Qo(n, c) : new FormData(n);
                  ci(
                    l,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: u
                    },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), r = c ? Qo(n, c) : new FormData(n), ci(
                  l,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: u
                  },
                  u,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Xi = 0; Xi < jc.length; Xi++) {
    var Qi = jc[Xi], A0 = Qi.toLowerCase(), C0 = Qi[0].toUpperCase() + Qi.slice(1);
    Mt(
      A0,
      "on" + C0
    );
  }
  Mt(xr, "onAnimationEnd"), Mt(br, "onAnimationIteration"), Mt(gr, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(Km, "onTransitionRun"), Mt(km, "onTransitionStart"), Mt(Jm, "onTransitionCancel"), Mt(pr, "onTransitionEnd"), Wl("onMouseEnter", ["mouseout", "mouseover"]), Wl("onMouseLeave", ["mouseout", "mouseover"]), Wl("onPointerEnter", ["pointerout", "pointerover"]), Wl("onPointerLeave", ["pointerout", "pointerover"]), _l(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _l(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _l("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _l(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _l(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _l(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), O0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn)
  );
  function Lo(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], r = s.instance, y = s.currentTarget;
            if (s = s.listener, r !== u && n.isPropagationStopped())
              break e;
            u = s, n.currentTarget = y;
            try {
              u(n);
            } catch (N) {
              Ln(N);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], r = s.instance, y = s.currentTarget, s = s.listener, r !== u && n.isPropagationStopped())
              break e;
            u = s, n.currentTarget = y;
            try {
              u(n);
            } catch (N) {
              Ln(N);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function ne(e, t) {
    var l = t[tc];
    l === void 0 && (l = t[tc] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Zo(t, e, 2, !1), l.add(a));
  }
  function Li(e, t, l) {
    var a = 0;
    t && (a |= 4), Zo(
      l,
      e,
      a,
      t
    );
  }
  var Au = "_reactListening" + Math.random().toString(36).slice(2);
  function Zi(e) {
    if (!e[Au]) {
      e[Au] = !0, Hs.forEach(function(l) {
        l !== "selectionchange" && (O0.has(l) || Li(l, !1, e), Li(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Au] || (t[Au] = !0, Li("selectionchange", !1, t));
    }
  }
  function Zo(e, t, l, a) {
    switch (gd(t)) {
      case 2:
        var n = uv;
        break;
      case 8:
        n = cv;
        break;
      default:
        n = us;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Vi(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var r = c.tag;
              if ((r === 3 || r === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = kl(s), c === null) return;
            if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = u = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ks(function() {
      var y = u, N = sc(l), E = [];
      e: {
        var x = Sr.get(e);
        if (x !== void 0) {
          var b = Gn, w = e;
          switch (e) {
            case "keypress":
              if (qn(l) === 0) break e;
            case "keydown":
            case "keyup":
              b = zm;
              break;
            case "focusin":
              w = "focus", b = vc;
              break;
            case "focusout":
              w = "blur", b = vc;
              break;
            case "beforeblur":
            case "afterblur":
              b = vc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Ws;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = dm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = _m;
              break;
            case xr:
            case br:
            case gr:
              b = hm;
              break;
            case pr:
              b = Am;
              break;
            case "scroll":
            case "scrollend":
              b = fm;
              break;
            case "wheel":
              b = Om;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = xm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Is;
              break;
            case "toggle":
            case "beforetoggle":
              b = Dm;
          }
          var k = (t & 4) !== 0, pe = !k && (e === "scroll" || e === "scrollend"), m = k ? x !== null ? x + "Capture" : null : x;
          k = [];
          for (var o = y, h; o !== null; ) {
            var z = o;
            if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || m === null || (z = Ba(o, m), z != null && k.push(
              xn(o, z, h)
            )), pe) break;
            o = o.return;
          }
          0 < k.length && (x = new b(
            x,
            w,
            null,
            l,
            N
          ), E.push({ event: x, listeners: k }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", x && l !== ic && (w = l.relatedTarget || l.fromElement) && (kl(w) || w[Kl]))
            break e;
          if ((b || x) && (x = N.window === N ? N : (x = N.ownerDocument) ? x.defaultView || x.parentWindow : window, b ? (w = l.relatedTarget || l.toElement, b = y, w = w ? kl(w) : null, w !== null && (pe = B(w), k = w.tag, w !== pe || k !== 5 && k !== 27 && k !== 6) && (w = null)) : (b = null, w = y), b !== w)) {
            if (k = Ws, z = "onMouseLeave", m = "onMouseEnter", o = "mouse", (e === "pointerout" || e === "pointerover") && (k = Is, z = "onPointerLeave", m = "onPointerEnter", o = "pointer"), pe = b == null ? x : wa(b), h = w == null ? x : wa(w), x = new k(
              z,
              o + "leave",
              b,
              l,
              N
            ), x.target = pe, x.relatedTarget = h, z = null, kl(N) === y && (k = new k(
              m,
              o + "enter",
              w,
              l,
              N
            ), k.target = h, k.relatedTarget = pe, z = k), pe = z, b && w)
              t: {
                for (k = U0, m = b, o = w, h = 0, z = m; z; z = k(z))
                  h++;
                z = 0;
                for (var L = o; L; L = k(L))
                  z++;
                for (; 0 < h - z; )
                  m = k(m), h--;
                for (; 0 < z - h; )
                  o = k(o), z--;
                for (; h--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    k = m;
                    break t;
                  }
                  m = k(m), o = k(o);
                }
                k = null;
              }
            else k = null;
            b !== null && Vo(
              E,
              x,
              b,
              k,
              !1
            ), w !== null && pe !== null && Vo(
              E,
              pe,
              w,
              k,
              !0
            );
          }
        }
        e: {
          if (x = y ? wa(y) : window, b = x.nodeName && x.nodeName.toLowerCase(), b === "select" || b === "input" && x.type === "file")
            var oe = cr;
          else if (nr(x))
            if (ir)
              oe = Lm;
            else {
              oe = Xm;
              var Y = Gm;
            }
          else
            b = x.nodeName, !b || b.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? y && cc(y.elementType) && (oe = cr) : oe = Qm;
          if (oe && (oe = oe(e, y))) {
            ur(
              E,
              oe,
              l,
              N
            );
            break e;
          }
          Y && Y(e, x, y), e === "focusout" && y && x.type === "number" && y.memoizedProps.value != null && uc(x, "number", x.value);
        }
        switch (Y = y ? wa(y) : window, e) {
          case "focusin":
            (nr(Y) || Y.contentEditable === "true") && (la = Y, pc = y, Va = null);
            break;
          case "focusout":
            Va = pc = la = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sc = !1, hr(E, l, N);
            break;
          case "selectionchange":
            if (Vm) break;
          case "keydown":
          case "keyup":
            hr(E, l, N);
        }
        var te;
        if (yc)
          e: {
            switch (e) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          ta ? lr(e, l) && (ie = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ie = "onCompositionStart");
        ie && (Ps && l.locale !== "ko" && (ta || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && ta && (te = Js()) : (ll = N, oc = "value" in ll ? ll.value : ll.textContent, ta = !0)), Y = Cu(y, ie), 0 < Y.length && (ie = new Fs(
          ie,
          e,
          null,
          l,
          N
        ), E.push({ event: ie, listeners: Y }), te ? ie.data = te : (te = ar(l), te !== null && (ie.data = te)))), (te = Hm ? wm(e, l) : Bm(e, l)) && (ie = Cu(y, "onBeforeInput"), 0 < ie.length && (Y = new Fs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          N
        ), E.push({
          event: Y,
          listeners: ie
        }), Y.data = te)), M0(
          E,
          e,
          y,
          l,
          N
        );
      }
      Lo(E, t);
    });
  }
  function xn(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Cu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ba(e, l), n != null && a.unshift(
        xn(e, n, u)
      ), n = Ba(e, t), n != null && a.push(
        xn(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function U0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vo(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var s = l, r = s.alternate, y = s.stateNode;
      if (s = s.tag, r !== null && r === a) break;
      s !== 5 && s !== 26 && s !== 27 || y === null || (r = y, n ? (y = Ba(l, u), y != null && c.unshift(
        xn(l, y, r)
      )) : n || (y = Ba(l, u), y != null && c.push(
        xn(l, y, r)
      ))), l = l.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var D0 = /\r\n?/g, R0 = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e).replace(D0, `
`).replace(R0, "");
  }
  function ko(e, t) {
    return t = Ko(t), Ko(e) === t;
  }
  function ge(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Il(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Il(e, "" + a);
        break;
      case "className":
        Rn(e, "class", a);
        break;
      case "tabIndex":
        Rn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Rn(e, l, a);
        break;
      case "style":
        Vs(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Rn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = wn("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && ge(e, t, "name", n.name, n, null), ge(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), ge(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), ge(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (ge(e, t, "encType", n.encType, n, null), ge(e, t, "method", n.method, n, null), ge(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = wn("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Bt);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = wn("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        ne("beforetoggle", e), ne("toggle", e), Dn(e, "popover", a);
        break;
      case "xlinkActuate":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Dn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = sm.get(l) || l, Dn(e, l, a));
    }
  }
  function Ki(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Vs(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Il(e, a) : (typeof a == "number" || typeof a == "bigint") && Il(e, "" + a);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Bt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ws.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[tt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Dn(e, l, a);
          }
    }
  }
  function We(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ne("error", e), ne("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  ge(e, t, u, c, l, null);
              }
          }
        n && ge(e, t, "srcSet", l.srcSet, l, null), a && ge(e, t, "src", l.src, l, null);
        return;
      case "input":
        ne("invalid", e);
        var s = u = c = n = null, r = null, y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  r = N;
                  break;
                case "defaultChecked":
                  y = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(f(137, t));
                  break;
                default:
                  ge(e, t, a, N, l, null);
              }
          }
        Xs(
          e,
          u,
          s,
          r,
          y,
          c,
          n,
          !1
        );
        return;
      case "select":
        ne("invalid", e), a = c = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n], s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                ge(e, t, n, s, l, null);
            }
        t = u, l = c, e.multiple = !!a, t != null ? Fl(e, !!a, t, !1) : l != null && Fl(e, !!a, l, !0);
        return;
      case "textarea":
        ne("invalid", e), u = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (s = l[c], s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                ge(e, t, c, s, l, null);
            }
        Ls(e, a, n, u);
        return;
      case "option":
        for (r in l)
          if (l.hasOwnProperty(r) && (a = l[r], a != null))
            switch (r) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ge(e, t, r, a, l, null);
            }
        return;
      case "dialog":
        ne("beforetoggle", e), ne("toggle", e), ne("cancel", e), ne("close", e);
        break;
      case "iframe":
      case "object":
        ne("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yn.length; a++)
          ne(yn[a], e);
        break;
      case "image":
        ne("error", e), ne("load", e);
        break;
      case "details":
        ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ne("error", e), ne("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && (a = l[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                ge(e, t, y, a, l, null);
            }
        return;
      default:
        if (cc(t)) {
          for (N in l)
            l.hasOwnProperty(N) && (a = l[N], a !== void 0 && Ki(
              e,
              t,
              N,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s], a != null && ge(e, t, s, a, l, null));
  }
  function H0(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, c = null, s = null, r = null, y = null, N = null;
        for (b in l) {
          var E = l[b];
          if (l.hasOwnProperty(b) && E != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = E;
              default:
                a.hasOwnProperty(b) || ge(e, t, b, null, a, E);
            }
        }
        for (var x in a) {
          var b = a[x];
          if (E = l[x], a.hasOwnProperty(x) && (b != null || E != null))
            switch (x) {
              case "type":
                u = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                N = b;
                break;
              case "value":
                c = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(f(137, t));
                break;
              default:
                b !== E && ge(
                  e,
                  t,
                  x,
                  b,
                  a,
                  E
                );
            }
        }
        nc(
          e,
          c,
          s,
          r,
          y,
          N,
          u,
          n
        );
        return;
      case "select":
        b = c = s = x = null;
        for (u in l)
          if (r = l[u], l.hasOwnProperty(u) && r != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                b = r;
              default:
                a.hasOwnProperty(u) || ge(
                  e,
                  t,
                  u,
                  null,
                  a,
                  r
                );
            }
        for (n in a)
          if (u = a[n], r = l[n], a.hasOwnProperty(n) && (u != null || r != null))
            switch (n) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== r && ge(
                  e,
                  t,
                  n,
                  u,
                  a,
                  r
                );
            }
        t = s, l = c, a = b, x != null ? Fl(e, !!l, x, !1) : !!a != !!l && (t != null ? Fl(e, !!l, t, !0) : Fl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        b = x = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ge(e, t, s, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                x = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && ge(e, t, c, n, a, u);
            }
        Qs(e, x, b);
        return;
      case "option":
        for (var w in l)
          if (x = l[w], l.hasOwnProperty(w) && x != null && !a.hasOwnProperty(w))
            switch (w) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ge(
                  e,
                  t,
                  w,
                  null,
                  a,
                  x
                );
            }
        for (r in a)
          if (x = a[r], b = l[r], a.hasOwnProperty(r) && x !== b && (x != null || b != null))
            switch (r) {
              case "selected":
                e.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                ge(
                  e,
                  t,
                  r,
                  x,
                  a,
                  b
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in l)
          x = l[k], l.hasOwnProperty(k) && x != null && !a.hasOwnProperty(k) && ge(e, t, k, null, a, x);
        for (y in a)
          if (x = a[y], b = l[y], a.hasOwnProperty(y) && x !== b && (x != null || b != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(f(137, t));
                break;
              default:
                ge(
                  e,
                  t,
                  y,
                  x,
                  a,
                  b
                );
            }
        return;
      default:
        if (cc(t)) {
          for (var pe in l)
            x = l[pe], l.hasOwnProperty(pe) && x !== void 0 && !a.hasOwnProperty(pe) && Ki(
              e,
              t,
              pe,
              void 0,
              a,
              x
            );
          for (N in a)
            x = a[N], b = l[N], !a.hasOwnProperty(N) || x === b || x === void 0 && b === void 0 || Ki(
              e,
              t,
              N,
              x,
              a,
              b
            );
          return;
        }
    }
    for (var m in l)
      x = l[m], l.hasOwnProperty(m) && x != null && !a.hasOwnProperty(m) && ge(e, t, m, null, a, x);
    for (E in a)
      x = a[E], b = l[E], !a.hasOwnProperty(E) || x === b || x == null && b == null || ge(e, t, E, x, a, b);
  }
  function Jo(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function w0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, c = n.initiatorType, s = n.duration;
        if (u && s && Jo(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var r = l[a], y = r.startTime;
            if (y > s) break;
            var N = r.transferSize, E = r.initiatorType;
            N && Jo(E) && (r = r.responseEnd, c += N * (r < s ? 1 : (s - y) / (r - y)));
          }
          if (--a, t += 8 * (u + c) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ki = null, Ji = null;
  function Ou(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $o(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $i(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wi = null;
  function B0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Wi ? !1 : (Wi = e, !0) : (Wi = null, !1);
  }
  var Fo = typeof setTimeout == "function" ? setTimeout : void 0, q0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Io = typeof Promise == "function" ? Promise : void 0, Y0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Io < "u" ? function(e) {
    return Io.resolve(null).then(e).catch(G0);
  } : Fo;
  function G0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function gl(e) {
    return e === "head";
  }
  function Po(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Aa(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          bn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, bn(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, s = u.nodeName;
            u[Ha] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && bn(e.ownerDocument.body);
      l = n;
    } while (l);
    Aa(t);
  }
  function ed(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function Fi(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fi(l), lc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function X0(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Ha])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Tt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Q0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Tt(e.nextSibling), e === null)) return null;
    return e;
  }
  function td(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Tt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ii(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Pi(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function L0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Tt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var es = null;
  function ld(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Tt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ad(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function nd(e, t, l) {
    switch (t = Ou(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(f(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(f(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function bn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    lc(e);
  }
  var _t = /* @__PURE__ */ new Map(), ud = /* @__PURE__ */ new Set();
  function Uu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Pt = R.d;
  R.d = {
    f: Z0,
    r: V0,
    D: K0,
    C: k0,
    L: J0,
    m: $0,
    X: F0,
    S: W0,
    M: I0
  };
  function Z0() {
    var e = Pt.f(), t = ju();
    return e || t;
  }
  function V0(e) {
    var t = Jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sf(t) : Pt.r(e);
  }
  var Ta = typeof document > "u" ? null : document;
  function cd(e, t, l) {
    var a = Ta;
    if (a && typeof t == "string" && t) {
      var n = gt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), ud.has(n) || (ud.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), We(t, "link", e), Ze(t), a.head.appendChild(t)));
    }
  }
  function K0(e) {
    Pt.D(e), cd("dns-prefetch", e, null);
  }
  function k0(e, t) {
    Pt.C(e, t), cd("preconnect", e, t);
  }
  function J0(e, t, l) {
    Pt.L(e, t, l);
    var a = Ta;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + gt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + gt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + gt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = _a(e);
          break;
        case "script":
          u = Ma(e);
      }
      _t.has(u) || (e = _(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), _t.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(gn(u)) || t === "script" && a.querySelector(pn(u)) || (t = a.createElement("link"), We(t, "link", e), Ze(t), a.head.appendChild(t)));
    }
  }
  function $0(e, t) {
    Pt.m(e, t);
    var l = Ta;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ma(e);
      }
      if (!_t.has(u) && (e = _({ rel: "modulepreload", href: e }, t), _t.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(pn(u)))
              return;
        }
        a = l.createElement("link"), We(a, "link", e), Ze(a), l.head.appendChild(a);
      }
    }
  }
  function W0(e, t, l) {
    Pt.S(e, t, l);
    var a = Ta;
    if (a && e) {
      var n = $l(a).hoistableStyles, u = _a(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          gn(u)
        ))
          s.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = _t.get(u)) && ts(e, l);
          var r = c = a.createElement("link");
          Ze(r), We(r, "link", e), r._p = new Promise(function(y, N) {
            r.onload = y, r.onerror = N;
          }), r.addEventListener("load", function() {
            s.loading |= 1;
          }), r.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Du(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: s
        }, n.set(u, c);
      }
    }
  }
  function F0(e, t) {
    Pt.X(e, t);
    var l = Ta;
    if (l && e) {
      var a = $l(l).hoistableScripts, n = Ma(e), u = a.get(n);
      u || (u = l.querySelector(pn(n)), u || (e = _({ src: e, async: !0 }, t), (t = _t.get(n)) && ls(e, t), u = l.createElement("script"), Ze(u), We(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function I0(e, t) {
    Pt.M(e, t);
    var l = Ta;
    if (l && e) {
      var a = $l(l).hoistableScripts, n = Ma(e), u = a.get(n);
      u || (u = l.querySelector(pn(n)), u || (e = _({ src: e, async: !0, type: "module" }, t), (t = _t.get(n)) && ls(e, t), u = l.createElement("script"), Ze(u), We(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function id(e, t, l, a) {
    var n = (n = le.current) ? Uu(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = _a(l.href), l = $l(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = _a(l.href);
          var u = $l(
            n
          ).hoistableStyles, c = u.get(e);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = n.querySelector(
            gn(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), _t.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, _t.set(e, l), u || P0(
            n,
            e,
            l,
            c.state
          ))), t && a === null)
            throw Error(f(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ma(l), l = $l(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function _a(e) {
    return 'href="' + gt(e) + '"';
  }
  function gn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sd(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function P0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), We(t, "link", l), Ze(t), e.head.appendChild(t));
  }
  function Ma(e) {
    return '[src="' + gt(e) + '"]';
  }
  function pn(e) {
    return "script[async]" + e;
  }
  function rd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + gt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ze(a), a;
          var n = _({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ze(a), We(a, "style", n), Du(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = _a(l.href);
          var u = e.querySelector(
            gn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ze(u), u;
          a = sd(l), (n = _t.get(n)) && ts(a, n), u = (e.ownerDocument || e).createElement("link"), Ze(u);
          var c = u;
          return c._p = new Promise(function(s, r) {
            c.onload = s, c.onerror = r;
          }), We(u, "link", a), t.state.loading |= 4, Du(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ma(l.src), (n = e.querySelector(
            pn(u)
          )) ? (t.instance = n, Ze(n), n) : (a = l, (n = _t.get(u)) && (a = _({}, l), ls(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ze(n), We(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Du(a, l.precedence, e));
    return t.instance;
  }
  function Du(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function ts(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ls(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ru = null;
  function fd(e, t, l) {
    if (Ru === null) {
      var a = /* @__PURE__ */ new Map(), n = Ru = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Ru, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Ha] || u[Ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function od(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ev(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function dd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function tv(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = _a(a.href), u = t.querySelector(
          gn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Hu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ze(u);
          return;
        }
        u = t.ownerDocument || t, a = sd(a), (n = _t.get(n)) && ts(a, n), u = u.createElement("link"), Ze(u);
        var c = u;
        c._p = new Promise(function(s, r) {
          c.onload = s, c.onerror = r;
        }), We(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Hu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var as = 0;
  function lv(e, t) {
    return e.stylesheets && e.count === 0 && Bu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Bu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && as === 0 && (as = 62500 * w0());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Bu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > as ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Hu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Bu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var wu = null;
  function Bu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wu = /* @__PURE__ */ new Map(), t.forEach(av, e), wu = null, Hu.call(e));
  }
  function av(e, t) {
    if (!(t.state.loading & 4)) {
      var l = wu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), wu.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Hu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Sn = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function nv(e, t, l, a, n, u, c, s, r) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Iu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Iu(0), this.hiddenUpdates = Iu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function md(e, t, l, a, n, u, c, s, r, y, N, E) {
    return e = new nv(
      e,
      t,
      l,
      c,
      r,
      y,
      N,
      E,
      s
    ), t = 1, u === !0 && (t |= 24), u = dt(3, null, null, t), e.current = u, u.stateNode = e, t = wc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Gc(u), e;
  }
  function vd(e) {
    return e ? (e = ua, e) : ua;
  }
  function hd(e, t, l, a, n, u) {
    n = vd(n), a.context === null ? a.context = n : a.pendingContext = n, a = sl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = rl(e, a, t), l !== null && (it(l, e, t), Ia(l, e, t));
  }
  function yd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ns(e, t) {
    yd(e, t), (e = e.alternate) && yd(e, t);
  }
  function xd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ol(e, 67108864);
      t !== null && it(t, e, 67108864), ns(e, 67108864);
    }
  }
  function bd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xt();
      t = Pu(t);
      var l = Ol(e, t);
      l !== null && it(l, e, t), ns(e, t);
    }
  }
  var qu = !0;
  function uv(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var u = R.p;
    try {
      R.p = 2, us(e, t, l, a);
    } finally {
      R.p = u, j.T = n;
    }
  }
  function cv(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var u = R.p;
    try {
      R.p = 8, us(e, t, l, a);
    } finally {
      R.p = u, j.T = n;
    }
  }
  function us(e, t, l, a) {
    if (qu) {
      var n = cs(a);
      if (n === null)
        Vi(
          e,
          t,
          a,
          Yu,
          l
        ), pd(e, a);
      else if (sv(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (pd(e, a), t & 4 && -1 < iv.indexOf(e)) {
        for (; n !== null; ) {
          var u = Jl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Tl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var r = 1 << 31 - ft(c);
                      s.entanglements[1] |= r, c &= ~r;
                    }
                    Ht(u), (me & 6) === 0 && (Su = st() + 500, hn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Ol(u, 2), s !== null && it(s, u, 2), ju(), ns(u, 2);
            }
          if (u = cs(a), u === null && Vi(
            e,
            t,
            a,
            Yu,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Vi(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function cs(e) {
    return e = sc(e), is(e);
  }
  var Yu = null;
  function is(e) {
    if (Yu = null, e = kl(e), e !== null) {
      var t = B(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = V(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = I(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Yu = e, null;
  }
  function gd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Kd()) {
          case Es:
            return 2;
          case Ts:
            return 8;
          case Mn:
          case kd:
            return 32;
          case _s:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ss = !1, pl = null, Sl = null, Nl = null, Nn = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), jl = [], iv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function pd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pl = null;
        break;
      case "dragenter":
      case "dragleave":
        Sl = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(t.pointerId);
    }
  }
  function zn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Jl(t), t !== null && xd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function sv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return pl = zn(
          pl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Sl = zn(
          Sl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Nl = zn(
          Nl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Nn.set(
          u,
          zn(
            Nn.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, jn.set(
          u,
          zn(
            jn.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Sd(e) {
    var t = kl(e.target);
    if (t !== null) {
      var l = B(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = V(l), t !== null) {
            e.blockedOn = t, Ds(e.priority, function() {
              bd(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = I(l), t !== null) {
            e.blockedOn = t, Ds(e.priority, function() {
              bd(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = cs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ic = a, l.target.dispatchEvent(a), ic = null;
      } else
        return t = Jl(l), t !== null && xd(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Nd(e, t, l) {
    Gu(e) && l.delete(t);
  }
  function rv() {
    ss = !1, pl !== null && Gu(pl) && (pl = null), Sl !== null && Gu(Sl) && (Sl = null), Nl !== null && Gu(Nl) && (Nl = null), Nn.forEach(Nd), jn.forEach(Nd);
  }
  function Xu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ss || (ss = !0, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      rv
    )));
  }
  var Qu = null;
  function jd(e) {
    Qu !== e && (Qu = e, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      function() {
        Qu === e && (Qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (is(a || l) === null)
              continue;
            break;
          }
          var u = Jl(l);
          u !== null && (e.splice(t, 3), t -= 3, ci(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Aa(e) {
    function t(r) {
      return Xu(r, e);
    }
    pl !== null && Xu(pl, e), Sl !== null && Xu(Sl, e), Nl !== null && Xu(Nl, e), Nn.forEach(t), jn.forEach(t);
    for (var l = 0; l < jl.length; l++) {
      var a = jl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < jl.length && (l = jl[0], l.blockedOn === null); )
      Sd(l), l.blockedOn === null && jl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[tt] || null;
        if (typeof u == "function")
          c || jd(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[tt] || null)
              s = c.formAction;
            else if (is(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), jd(l);
        }
      }
  }
  function zd() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function rs(e) {
    this._internalRoot = e;
  }
  Lu.prototype.render = rs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var l = t.current, a = xt();
    hd(l, a, e, t, null, null);
  }, Lu.prototype.unmount = rs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      hd(e.current, 2, null, e, null, null), ju(), t[Kl] = null;
    }
  };
  function Lu(e) {
    this._internalRoot = e;
  }
  Lu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Us();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < jl.length && t !== 0 && t < jl[l].priority; l++) ;
      jl.splice(l, 0, e), l === 0 && Sd(e);
    }
  };
  var Ed = T.version;
  if (Ed !== "19.2.4")
    throw Error(
      f(
        527,
        Ed,
        "19.2.4"
      )
    );
  R.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = S(t), e = e !== null ? X(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var fv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zu.isDisabled && Zu.supportsFiber)
      try {
        Ua = Zu.inject(
          fv
        ), rt = Zu;
      } catch {
      }
  }
  return Tn.createRoot = function(e, t) {
    if (!C(e)) throw Error(f(299));
    var l = !1, a = "", n = Of, u = Uf, c = Df;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = md(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      c,
      zd
    ), e[Kl] = t.current, Zi(e), new rs(t);
  }, Tn.hydrateRoot = function(e, t, l) {
    if (!C(e)) throw Error(f(299));
    var a = !1, n = "", u = Of, c = Uf, s = Df, r = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (r = l.formState)), t = md(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      r,
      u,
      c,
      s,
      zd
    ), t.context = vd(null), l = t.current, a = xt(), a = Pu(a), n = sl(a), n.callback = null, rl(l, n, a), l = a, t.current.lanes = l, Ra(t, l), Ht(t), e[Kl] = t.current, Zi(e), new Lu(t);
  }, Tn.version = "19.2.4", Tn;
}
var Hd;
function Sv() {
  if (Hd) return ds.exports;
  Hd = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (T) {
        console.error(T);
      }
  }
  return v(), ds.exports = pv(), ds.exports;
}
var Nv = Sv();
const jv = /* @__PURE__ */ Yd(Nv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ev = (v) => v.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (T, A, f) => f ? f.toUpperCase() : A.toLowerCase()
), wd = (v) => {
  const T = Ev(v);
  return T.charAt(0).toUpperCase() + T.slice(1);
}, Gd = (...v) => v.filter((T, A, f) => !!T && T.trim() !== "" && f.indexOf(T) === A).join(" ").trim(), Tv = (v) => {
  for (const T in v)
    if (T.startsWith("aria-") || T === "role" || T === "title")
      return !0;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _v = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = D.forwardRef(
  ({
    color: v = "currentColor",
    size: T = 24,
    strokeWidth: A = 2,
    absoluteStrokeWidth: f,
    className: C = "",
    children: B,
    iconNode: V,
    ...I
  }, U) => D.createElement(
    "svg",
    {
      ref: U,
      ..._v,
      width: T,
      height: T,
      stroke: v,
      strokeWidth: f ? Number(A) * 24 / Number(T) : A,
      className: Gd("lucide", C),
      ...!B && !Tv(I) && { "aria-hidden": "true" },
      ...I
    },
    [
      ...V.map(([S, X]) => D.createElement(S, X)),
      ...Array.isArray(B) ? B : [B]
    ]
  )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = (v, T) => {
  const A = D.forwardRef(
    ({ className: f, ...C }, B) => D.createElement(Mv, {
      ref: B,
      iconNode: T,
      className: Gd(
        `lucide-${zv(wd(v))}`,
        `lucide-${v}`,
        f
      ),
      ...C
    })
  );
  return A.displayName = wd(v), A;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Cv = re("arrow-left", Av);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Uv = re("battery", Ov);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Rv = re("bell", Dv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], wv = re("bookmark", Hv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], qv = re("calendar", Bv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
], Gv = re("cast", Yv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xv = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xd = re("chevron-left", Xv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Lv = re("circle-alert", Qv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Vv = re("circle-check-big", Zv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], kv = re("clock", Kv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], $v = re("ellipsis-vertical", Jv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Fv = re("ellipsis", Wv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Pv = re("file-text", Iv);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
], th = re("fingerprint", eh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], ah = re("globe", lh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], uh = re("heart", nh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ih = re("image", ch);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], ps = re("loader-circle", sh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
], Bd = re("mail-open", rh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], qd = re("mail", fh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], dh = re("message-circle", oh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], xs = re("message-square", mh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], hh = re("navigation", vh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], xh = re("package", yh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bh = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], gh = re("pen-line", bh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], Sh = re("pen", ph);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Ss = re("save", Nh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jh = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], zh = re("scan", jh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Th = re("search", Eh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Zl = re("send", _h);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Qd = re("settings", Mh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], Ch = re("shield-alert", Ah);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], bs = re("trash-2", Oh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
], Dh = re("wand-sparkles", Uh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], Hh = re("wifi", Rh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ca = re("x", wh);
function Bh({ onUnlock: v }) {
  const [T, A] = D.useState(!1), [f, C] = D.useState(0), [B, V] = D.useState(/* @__PURE__ */ new Date());
  D.useEffect(() => {
    const U = setInterval(() => V(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(U);
  }, []);
  const I = () => {
    A(!0);
    let U = 0;
    const S = setInterval(() => {
      U += 5, C(U), U >= 100 && (clearInterval(S), setTimeout(() => {
        v();
      }, 500));
    }, 50);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-base)]", children: [
    /* @__PURE__ */ i.jsx("div", { className: "scanlines" }),
    /* @__PURE__ */ i.jsx("div", { className: "bokeh bokeh-1" }),
    /* @__PURE__ */ i.jsx("div", { className: "bokeh bokeh-2" }),
    /* @__PURE__ */ i.jsxs("div", { className: "absolute top-0 w-full p-6 flex justify-between items-start z-10", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-xs tracking-widest text-[var(--text-secondary)] font-mono", children: "SYS.STATUS" }),
        /* @__PURE__ */ i.jsx("span", { className: "text-sm text-emerald-400 font-mono", children: "SECURE" })
      ] }),
      /* @__PURE__ */ i.jsx(Ch, { className: "text-[var(--text-secondary)] opacity-50", size: 20 })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center mb-20 z-10", children: [
      /* @__PURE__ */ i.jsx("h1", { className: "text-7xl font-light tracking-tighter text-[var(--text-primary)] mb-2 font-mono", children: B.toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ i.jsx("p", { className: "text-sm tracking-[0.3em] text-[var(--text-secondary)] uppercase", children: B.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500
            ${T ? "scale-95" : "hover:scale-105"}
          `,
          onMouseDown: I,
          onMouseUp: () => {
            f < 100 && (A(!1), C(0));
          },
          onTouchStart: I,
          onTouchEnd: () => {
            f < 100 && (A(!1), C(0));
          },
          children: [
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-full border border-[var(--wireframe)] transition-all duration-1000
            ${T ? "border-[var(--accent-color)] rotate-180" : ""}
          ` }),
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-2 rounded-full border border-[var(--wireframe)] transition-all duration-700
            ${T ? "border-[var(--accent-color)] -rotate-90" : ""}
          ` }),
            /* @__PURE__ */ i.jsx(
              th,
              {
                size: 48,
                className: `transition-colors duration-300 ${T ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)]"}`
              }
            ),
            T && /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "absolute left-0 w-full h-1 bg-[var(--accent-color)] shadow-[0_0_10px_var(--accent-color)] opacity-50",
                style: {
                  top: `${f}%`,
                  transition: "top 0.05s linear"
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "mt-8 h-4 flex items-center justify-center", children: T ? /* @__PURE__ */ i.jsxs("span", { className: "text-xs tracking-widest text-[var(--accent-color)] font-mono animate-pulse", children: [
        "AUTHENTICATING ",
        f,
        "%"
      ] }) : /* @__PURE__ */ i.jsxs("span", { className: "text-xs tracking-widest text-[var(--text-secondary)] font-mono flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsx(zh, { size: 12 }),
        " TOUCH TO UNLOCK"
      ] }) })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "absolute bottom-8 flex gap-1 z-10", children: [...Array(3)].map((U, S) => /* @__PURE__ */ i.jsx("div", { className: "w-8 h-1 bg-[var(--wireframe)] rounded-full" }, S)) })
  ] });
}
const ys = ({ isOpen: v, onClose: T, title: A, children: f }) => v ? /* @__PURE__ */ i.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6", children: [
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity",
      onClick: T
    }
  ),
  /* @__PURE__ */ i.jsxs("div", { className: "glass-card relative w-full max-w-2xl max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 clip-corner overflow-hidden", children: [
    A && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ i.jsx("h2", { className: "text-lg font-light tracking-widest text-[var(--text-primary)]", children: A }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: T,
          className: "p-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors",
          children: /* @__PURE__ */ i.jsx(Ca, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: `overflow-y-auto flex-1 bg-[var(--card-bg)] ${A ? "p-6" : "p-0"}`, children: f })
  ] })
] }) : null, qh = ({ contact: v, onBack: T, settings: A }) => {
  const [f, C] = D.useState([]), [B, V] = D.useState(""), [I, U] = D.useState(!1), S = D.useRef(null), X = () => {
    var G;
    (G = S.current) == null || G.scrollIntoView({ behavior: "smooth" });
  };
  D.useEffect(() => {
    X();
  }, [f, I]), D.useEffect(() => {
    const G = () => {
      var K, J;
      try {
        const Q = (J = (K = window.SillyTavern) == null ? void 0 : K.getContext) == null ? void 0 : J.call(K);
        if (Q && Q.chat) {
          const Se = Q.chat.map((Ae, g) => ({
            id: g,
            text: Ae.mes,
            sender: Ae.is_user ? "me" : "them",
            time: "",
            read: !0
          }));
          C(Se), U(Q.isGenerating || !1);
        }
      } catch (Q) {
        console.error("Failed to fetch chat from SillyTavern", Q);
      }
    };
    G();
    const O = setInterval(G, 1e3);
    return () => clearInterval(O);
  }, [v]);
  const _ = async () => {
    var O, K;
    if (!B.trim()) return;
    const G = B.trim();
    V("");
    try {
      const J = (K = (O = window.SillyTavern) == null ? void 0 : O.getContext) == null ? void 0 : K.call(O);
      J && J.sendMessage && J.sendMessage(G);
    } catch (J) {
      console.error("Failed to send message via SillyTavern", J);
    }
  }, Z = (G) => {
    G.key === "Enter" && !G.shiftKey && (G.preventDefault(), _());
  }, W = (A == null ? void 0 : A.avatarUrl) || "https://picsum.photos/seed/me/100/100", ue = v.avatar || `https://picsum.photos/seed/${v.name}/100/100`;
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col h-full w-full bg-[var(--bg-base)] relative overflow-hidden", children: [
    /* @__PURE__ */ i.jsx("div", { className: "scanlines z-0" }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-20", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center flex-1 min-w-0", children: [
        /* @__PURE__ */ i.jsx("button", { onClick: T, className: "p-2 -ml-2 mr-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0", children: /* @__PURE__ */ i.jsx(Xd, { size: 24 }) }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center flex-1 min-w-0", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "w-8 h-8 rounded-full border border-[var(--wireframe)] p-0.5 bg-[var(--card-bg)] shrink-0 mr-3 relative", children: [
            /* @__PURE__ */ i.jsx("img", { src: ue || void 0, alt: v.name, className: "w-full h-full rounded-full object-cover", referrerPolicy: "no-referrer" }),
            v.online && /* @__PURE__ */ i.jsx("div", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-base)] bg-emerald-400" })
          ] }),
          /* @__PURE__ */ i.jsx("h2", { className: "text-lg font-medium tracking-wide text-[var(--text-primary)] truncate", children: v.name })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-1 shrink-0", children: /* @__PURE__ */ i.jsx("button", { className: "p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors", children: /* @__PURE__ */ i.jsx($v, { size: 20 }) }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 relative z-10", children: [
      f.map((G, O) => {
        const K = O > 0 ? f[O - 1] : null, J = K && K.sender === G.sender;
        return /* @__PURE__ */ i.jsx("div", { className: `flex w-full ${G.sender === "me" ? "justify-end" : "justify-start"}`, children: G.sender === "me" ? /* @__PURE__ */ i.jsxs("div", { className: `flex items-end gap-3 max-w-[85%] ${J ? "pr-[52px]" : ""}`, children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-end gap-1", children: /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx("div", { className: "bg-[var(--bubble-bg)] text-[var(--text-primary)] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-[var(--wireframe)]", children: /* @__PURE__ */ i.jsx("div", { className: "text-[15px] leading-relaxed break-words whitespace-pre-wrap", dangerouslySetInnerHTML: { __html: G.text } }) }) }) }),
          !J && /* @__PURE__ */ i.jsx("img", { src: W, alt: "Me", className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" })
        ] }) : /* @__PURE__ */ i.jsxs("div", { className: `flex items-end gap-2 sm:gap-3 max-w-[85%] ${J ? "pl-[52px]" : ""}`, children: [
          !J && /* @__PURE__ */ i.jsx("img", { src: ue || void 0, alt: v.name, className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-start gap-1", children: /* @__PURE__ */ i.jsx("div", { className: "bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm", children: /* @__PURE__ */ i.jsx("div", { className: "text-[15px] leading-relaxed break-words whitespace-pre-wrap", dangerouslySetInnerHTML: { __html: G.text } }) }) })
        ] }) }, G.id);
      }),
      I && /* @__PURE__ */ i.jsx("div", { className: "flex w-full justify-start", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-end gap-2 sm:gap-3 max-w-[85%]", children: [
        /* @__PURE__ */ i.jsx("img", { src: ue || void 0, alt: v.name, className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-start gap-1", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center space-x-1", children: [
          /* @__PURE__ */ i.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ i.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ i.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "300ms" } })
        ] }) })
      ] }) }),
      /* @__PURE__ */ i.jsx("div", { ref: S })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "p-3 sm:p-4 bg-[var(--bubble-bg)] border-t border-[var(--wireframe)] shrink-0 relative z-20", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ i.jsx("button", { className: "p-2 sm:p-3 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0", children: /* @__PURE__ */ i.jsx(ih, { size: 22 }) }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 bg-[var(--bg-base)] border border-[var(--wireframe)] rounded-2xl flex items-end overflow-hidden focus-within:border-[var(--accent-color)] transition-colors", children: /* @__PURE__ */ i.jsx(
        "textarea",
        {
          value: B,
          onChange: (G) => V(G.target.value),
          onKeyDown: Z,
          placeholder: "输入消息...",
          className: "w-full max-h-32 bg-transparent text-[var(--text-primary)] px-4 py-3 sm:py-3.5 outline-none resize-none text-[15px] leading-relaxed",
          rows: 1,
          style: { minHeight: "48px" }
        }
      ) }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: _,
          disabled: !B.trim(),
          className: "p-3 sm:p-3.5 bg-[var(--accent-color)] text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm",
          children: /* @__PURE__ */ i.jsx(Zl, { size: 20, className: "ml-0.5" })
        }
      )
    ] }) })
  ] });
}, Yh = {
  chatReply: {
    id: "chatReply",
    name: "聊天 AI 回复",
    description: "生成角色的聊天回复",
    systemPrompt: `你是{{characterName}}。{{characterDescription}}

你正在通过星际通讯系统与{{userName}}交谈。请完全沉浸在角色中，用第一人称、自然的聊天风格回复，不要跳出角色，不要加旁白或动作描述。`,
    userPrompt: "{{userInput}}",
    variables: ["characterName", "characterDescription", "userName", "userInput"],
    isDefault: !0
  },
  momentFromChat: {
    id: "momentFromChat",
    name: "根据聊天生成动态",
    description: "基于最近的聊天记录生成星网动态",
    systemPrompt: "你是 {{characterName}}，正在发一条星网动态（类似朋友圈）。",
    userPrompt: `根据以下最近的聊天内容，以 {{characterName}} 的口吻生成一条生动的动态文字（50-100字，用第一人称，可以加1-2个emoji，符合角色性格）：
{{recentChatSummary}}`,
    variables: ["characterName", "recentChatSummary"],
    isDefault: !0
  },
  momentFreeStyle: {
    id: "momentFreeStyle",
    name: "自由生成动态",
    description: "角色扮演自由生成星网动态",
    systemPrompt: "你是 {{characterName}}，{{characterDescription}}。",
    userPrompt: "发一条符合当前世界观和你角色性格的星网动态，不超过100字。",
    variables: ["characterName", "characterDescription"],
    isDefault: !0
  },
  emailCompose: {
    id: "emailCompose",
    name: "生成邮件正文",
    description: "根据主题和收件人生成邮件正文",
    systemPrompt: "你是指挥官 {{userName}}，正在撰写一封星际通讯邮件。风格正式，符合科幻世界观。",
    userPrompt: `请根据以下主题生成一封完整的邮件正文（150-300字，第一人称，署名为 {{userName}}）：
主题：{{emailSubject}}
收件人：{{recipientName}}`,
    variables: ["userName", "emailSubject", "recipientName"],
    isDefault: !0
  },
  emailReply: {
    id: "emailReply",
    name: "生成邮件回复",
    description: "根据收到的邮件生成回复",
    systemPrompt: "你是{{userName}}的通讯系统 AI 助手。",
    userPrompt: `请为以下邮件以{{userName}}的名义生成一封回复（100-200字，正式星际通讯风格）：
发件人：{{sender}}
主题：{{subject}}
内容：{{content}}`,
    variables: ["userName", "sender", "subject", "content"],
    isDefault: !0
  }
};
function Vl(v, T) {
  let A = v;
  for (const [f, C] of Object.entries(T))
    A = A.replace(new RegExp(`{{${f}}}`, "g"), C);
  return A;
}
const Gh = [
  { id: 5, name: "Kaelen (领航员)", lastMessage: "明天几点跃迁？", time: "昨天", unread: !1, type: "user", avatar: "https://picsum.photos/seed/k/100/100", online: !0, description: "一位经验丰富的星际领航员，性格沉稳，总是能在复杂的星域中找到最安全的航线。" },
  { id: 6, name: "Elara (机械师)", lastMessage: "引擎维护报告已提交。", time: "昨天", unread: !1, type: "user", avatar: "https://picsum.photos/seed/e/100/100", online: !1, description: "天才机械师，对各种飞船引擎了如指掌，说话直接，工作狂。" }
], Xh = [
  { id: 1, author: "Kaelen (领航员)", avatar: "https://picsum.photos/seed/k/100/100", content: "刚刚穿过猎户座旋臂，星云的颜色比上次更深了。导航系统一切正常。", time: "2小时前", likes: 12, comments: [{ id: 1, author: "Elara (机械师)", text: "注意安全。" }], image: "https://picsum.photos/seed/nebula/400/200" },
  { id: 2, author: "Elara (机械师)", avatar: "https://picsum.photos/seed/e/100/100", content: "三号引擎的等离子注入器又堵了，这些便宜的配件真让人头疼。", time: "5小时前", likes: 8, comments: [] }
], Qh = [
  { id: 1, from: "星际舰队指挥部", to: "指挥官", subject: "关于近期星域巡逻任务的调整", body: "指挥官，根据最新情报，边缘星域出现异常能量波动，请立即调整巡逻路线前往调查。", snippet: "指挥官，根据最新情报，边缘星域出现异常能量波动...", time: "10:00", isRead: !1, status: "inbox", type: "system" },
  { id: 2, from: "后勤保障部", to: "指挥官", subject: "本月物资补给清单", body: "本月物资补给已抵达空间站，请查收附件中的清单并安排人员接收。", snippet: "本月物资补给已抵达空间站，请查收附件中的清单...", time: "昨天", isRead: !0, status: "inbox", type: "update" }
], se = {
  getContacts: () => {
    const v = localStorage.getItem("st_contacts");
    return v ? JSON.parse(v) : Gh;
  },
  saveContacts: (v) => localStorage.setItem("st_contacts", JSON.stringify(v)),
  getChats: (v) => {
    const T = localStorage.getItem(`st_chats_${v}`);
    return T ? JSON.parse(T) : null;
  },
  saveChats: (v, T) => localStorage.setItem(`st_chats_${v}`, JSON.stringify(T)),
  getMoments: () => {
    const v = localStorage.getItem("st_moments");
    return v ? JSON.parse(v) : Xh;
  },
  saveMoments: (v) => localStorage.setItem("st_moments", JSON.stringify(v)),
  getEmails: () => {
    const v = localStorage.getItem("st_emails");
    return v ? JSON.parse(v) : Qh;
  },
  saveEmails: (v) => localStorage.setItem("st_emails", JSON.stringify(v)),
  getPromptTemplates: () => {
    const v = localStorage.getItem("st_prompt_templates");
    return v ? JSON.parse(v) : Yh;
  },
  savePromptTemplates: (v) => localStorage.setItem("st_prompt_templates", JSON.stringify(v)),
  getChatPrompt: () => {
    const v = localStorage.getItem("st_prompt_chatReply");
    return v ? JSON.parse(v) : {
      systemPrompt: "你扮演{{characterName}}，{{characterDescription}}。请保持角色，用第一人称回复，回复风格自然简短。",
      userPromptPrefix: ""
    };
  },
  saveChatPrompt: (v) => localStorage.setItem("st_prompt_chatReply", JSON.stringify(v)),
  getMomentPrompt: () => {
    const v = localStorage.getItem("st_prompt_moment");
    return v ? JSON.parse(v) : {
      momentPrompt: "你是{{characterName}}，{{characterDescription}}。请以你的身份发一条星网动态（类似朋友圈），语气自然，50-100字，可带1-2个emoji，第一人称。",
      momentFromChatPrompt: `你是{{characterName}}，{{characterDescription}}。根据以下近期聊天内容，以你的身份发一条星网动态，50-100字：
{{recentChatSummary}}`
    };
  },
  saveMomentPrompt: (v) => localStorage.setItem("st_prompt_moment", JSON.stringify(v)),
  getEmailPrompt: () => {
    const v = localStorage.getItem("st_prompt_email");
    return v ? JSON.parse(v) : {
      emailReplyPrompt: `你是指挥官{{userName}}。请为以下邮件生成一封回复（100-200字，第一人称，正式的星际通讯风格）：
发件人：{{sender}}
主题：{{subject}}
内容：{{emailContent}}`,
      emailComposePrompt: `你是指挥官{{userName}}。请生成一封邮件正文（150-300字，正式星际通讯风格，署名{{userName}}）：
收件人：{{recipientName}}
主题：{{emailSubject}}`
    };
  },
  saveEmailPrompt: (v) => localStorage.setItem("st_prompt_email", JSON.stringify(v)),
  getGlobalSettings: () => {
    const v = localStorage.getItem("st_global_settings"), T = v ? JSON.parse(v) : {};
    return {
      userName: T.userName || "生菜来来",
      userPersona: T.userPersona || "一名普通的星际旅行者，对未知充满好奇。",
      avatarUrl: T.avatarUrl || "https://picsum.photos/seed/avatar/200/200",
      apiMode: T.apiMode || "gemini",
      apiPresets: T.apiPresets || [],
      customApiUrl: T.customApiUrl || "",
      customApiKey: T.customApiKey || "",
      customApiModel: T.customApiModel || "",
      profileBgUrl: T.profileBgUrl || "",
      tag: T.tag || "深空观察者",
      customFontUrl: T.customFontUrl || "",
      fontSizeScale: T.fontSizeScale || 1,
      moduleBgs: T.moduleBgs || {
        即达: "",
        星网回路: "https://picsum.photos/seed/communication/600/400",
        轨迹管理: "",
        记忆锚点: "",
        远程视域: "",
        星网索引: "",
        星途: "https://picsum.photos/seed/navigation/300/400"
      }
    };
  },
  saveGlobalSettings: (v) => localStorage.setItem("st_global_settings", JSON.stringify(v))
};
async function Vu(v, T = 0.7, A = 1e3) {
  var f, C;
  try {
    const B = (C = (f = window.SillyTavern) == null ? void 0 : f.getContext) == null ? void 0 : C.call(f);
    return B && B.generateRaw ? await B.generateRaw(v) || "" : "（AI 未连接或 SillyTavern 环境未就绪）";
  } catch (B) {
    throw console.error("AI Error:", B), B;
  }
}
const Lh = ({ onClose: v }) => {
  const [T, A] = D.useState(se.getMomentPrompt()), f = () => {
    se.saveMomentPrompt(T), v();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ i.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "动态 AI 设置" }),
      /* @__PURE__ */ i.jsx("button", { onClick: v, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ i.jsx(Ca, { size: 20 }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "发布动态 AI 提示词" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: T.momentPrompt,
            onChange: (C) => A({ ...T, momentPrompt: C.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "从聊天记录生成提示词" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: T.momentFromChatPrompt,
            onChange: (C) => A({ ...T, momentFromChatPrompt: C.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "text-[10px] text-[var(--text-secondary)]", children: [
        "可用变量：",
        "{{characterName}}",
        " ",
        "{{characterDescription}}",
        " ",
        "{{recentChatSummary}}"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: f,
        className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors",
        children: [
          /* @__PURE__ */ i.jsx(Ss, { size: 16 }),
          " 保存"
        ]
      }
    ) })
  ] }) });
}, Zh = ({ onClose: v, onPublish: T }) => {
  const [A, f] = D.useState("custom"), [C, B] = D.useState(""), [V, I] = D.useState(""), [U, S] = D.useState("manual"), [X, _] = D.useState(""), [Z, W] = D.useState(""), [ue, G] = D.useState(""), [O, K] = D.useState(!1), [J, Q] = D.useState([]);
  D.useEffect(() => {
    Q(se.getContacts());
  }, []);
  const Se = () => {
    C.trim() && (T({
      author: "我",
      avatar: se.getGlobalSettings().avatarUrl,
      content: C.trim(),
      image: V.trim() || void 0
    }), v());
  }, Ae = () => {
    ue.trim() && (T({
      author: "我",
      avatar: se.getGlobalSettings().avatarUrl,
      content: ue.trim()
    }), v());
  }, g = async () => {
    K(!0);
    try {
      const p = se.getMomentPrompt(), _e = se.getGlobalSettings();
      let ze = "", Ce = "";
      if (U === "manual")
        ze = Vl(p.momentPrompt, {
          characterName: _e.userName,
          characterDescription: _e.tag || "深空观察者"
        }), Ce = `请根据以下主题生成动态：${X}`;
      else {
        if (!Z) return;
        const qe = J.find((Oe) => Oe.id === Number(Z));
        if (!qe) return;
        const et = se.getChats(qe.id).slice(-10).map((Oe) => `${Oe.sender === "me" ? "我" : qe.name}: ${Oe.text}`).join(`
`);
        ze = Vl(p.momentFromChatPrompt, {
          characterName: _e.userName,
          characterDescription: _e.tag || "深空观察者",
          recentChatSummary: et
        }), Ce = "请生成动态。";
      }
      const Be = await Vu([
        { role: "system", content: ze },
        { role: "user", content: Ce }
      ]);
      G(Be);
    } catch (p) {
      console.error("Failed to generate moment:", p), G("生成失败，请重试。");
    } finally {
      K(!1);
    }
  };
  return /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ i.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "发布动态" }),
      /* @__PURE__ */ i.jsx("button", { onClick: v, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ i.jsx(Ca, { size: 20 }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex border-b border-[var(--wireframe)]", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `flex-1 py-3 text-sm font-medium transition-colors ${A === "custom" ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          onClick: () => f("custom"),
          children: "自定义发布"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `flex-1 py-3 text-sm font-medium transition-colors ${A === "ai" ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          onClick: () => f("ai"),
          children: "AI 生成"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "p-6 space-y-4", children: A === "custom" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          value: C,
          onChange: (p) => B(p.target.value),
          placeholder: "分享你的星际动态...",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[120px]"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          value: V,
          onChange: (p) => I(p.target.value),
          placeholder: "配图 URL (可选，留空则无图)",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: Se,
          disabled: !C.trim(),
          className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50",
          children: [
            /* @__PURE__ */ i.jsx(Zl, { size: 16 }),
            " 发布"
          ]
        }
      ) })
    ] }) : /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "生成来源" }),
        /* @__PURE__ */ i.jsxs(
          "select",
          {
            value: U,
            onChange: (p) => S(p.target.value),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]",
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "manual", children: "手动输入主题" }),
              /* @__PURE__ */ i.jsx("option", { value: "chat", children: "从最近聊天记录生成" })
            ]
          }
        )
      ] }),
      U === "manual" ? /* @__PURE__ */ i.jsx(
        "textarea",
        {
          value: X,
          onChange: (p) => _(p.target.value),
          placeholder: "描述你想发布的动态主题...",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
        }
      ) : /* @__PURE__ */ i.jsxs(
        "select",
        {
          value: Z,
          onChange: (p) => W(Number(p.target.value)),
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]",
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择联系人" }),
            J.map((p) => /* @__PURE__ */ i.jsx("option", { value: p.id, children: p.name }, p.id))
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: g,
          disabled: O || (U === "manual" ? !X.trim() : !Z),
          className: "w-full py-2 rounded border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-colors disabled:opacity-50 flex justify-center items-center gap-2",
          children: O ? /* @__PURE__ */ i.jsx(ps, { size: 16, className: "animate-spin" }) : "AI 生成预览"
        }
      ),
      ue && /* @__PURE__ */ i.jsxs("div", { className: "pt-4 border-t border-[var(--wireframe)]", children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "生成结果 (可编辑)" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: ue,
            onChange: (p) => G(p.target.value),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ i.jsxs(
          "button",
          {
            onClick: Ae,
            disabled: !ue.trim(),
            className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ i.jsx(Zl, { size: 16 }),
              " 发布生成内容"
            ]
          }
        ) })
      ] })
    ] }) }) })
  ] }) });
}, Vh = ({ actionType: v, setActionType: T }) => {
  var Ae;
  const [A, f] = D.useState([]), [C, B] = D.useState(null), [V, I] = D.useState(null), [U, S] = D.useState(se.getGlobalSettings()), [X, _] = D.useState(!1), [Z, W] = D.useState(!1), [ue, G] = D.useState(!1);
  D.useEffect(() => {
    const g = () => {
      Q();
    };
    return window.addEventListener("refreshMoments", g), () => window.removeEventListener("refreshMoments", g);
  }, []), D.useEffect(() => {
    const g = () => {
      S(se.getGlobalSettings());
    };
    return window.addEventListener("settingsUpdated", g), () => window.removeEventListener("settingsUpdated", g);
  }, []), D.useEffect(() => {
    v === "publishMoment" ? (W(!0), T(null)) : v === "momentSettings" && (_(!0), T(null));
  }, [v, T]), D.useEffect(() => {
    f(se.getMoments());
    const g = () => {
      f(se.getMoments());
    };
    return window.addEventListener("momentsUpdated", g), () => window.removeEventListener("momentsUpdated", g);
  }, []), D.useEffect(() => {
    A.length > 0 && se.saveMoments(A);
  }, [A]);
  const O = (g) => {
    f(A.map((p) => p.id === g ? {
      ...p,
      likes: p.isLiked ? p.likes - 1 : p.likes + 1,
      isLiked: !p.isLiked
    } : p));
  }, K = (g) => {
    f(A.filter((p) => p.id !== g)), I(null);
  }, J = (g) => {
    !C || !C.text.trim() || (f(A.map((p) => p.id === g ? {
      ...p,
      comments: [...p.comments, { id: Date.now(), author: "我", text: C.text.trim() }]
    } : p)), B(null));
  }, Q = async () => {
    G(!0);
    try {
      const g = se.getContacts().filter((Oe) => Oe.type === "user");
      if (g.length === 0) {
        G(!1);
        return;
      }
      const p = g[Math.floor(Math.random() * g.length)], ze = (se.getChats(p.id) || []).slice(-10).map((Oe) => `${Oe.sender === "me" ? "我" : p.name}: ${Oe.text}`).join(`
`), Be = se.getPromptTemplates().momentFromChat || {
        systemPrompt: "你是 {{characterName}}，正在发一条星网动态（类似朋友圈）。",
        userPrompt: `根据以下最近的聊天内容，以 {{characterName}} 的口吻生成一条生动的动态文字（50-100字，用第一人称，可以加1-2个emoji，符合角色性格）：
{{recentChatSummary}}`
      }, qe = Vl(Be.systemPrompt, {
        characterName: p.name,
        characterDescription: p.description || ""
      }), Ot = Vl(Be.userPrompt, {
        characterName: p.name,
        recentChatSummary: ze || "无最近对话",
        characterDescription: p.description || ""
      }), et = await Vu([
        { role: "system", content: qe },
        { role: "user", content: Ot }
      ]);
      if (et) {
        const Oe = {
          id: Date.now(),
          author: p.name,
          avatar: p.avatar,
          content: et.trim(),
          time: "刚刚",
          likes: 0,
          comments: [],
          isLiked: !1
        };
        f((j) => [Oe, ...j]);
      }
    } catch (g) {
      console.error("Failed to generate moment:", g), f((p) => {
        const _e = p.filter((Ce) => Ce.author === "我"), ze = p.filter((Ce) => Ce.author !== "我");
        for (let Ce = ze.length - 1; Ce > 0; Ce--) {
          const Be = Math.floor(Math.random() * (Ce + 1));
          [ze[Ce], ze[Be]] = [ze[Be], ze[Ce]];
        }
        return [..._e, ...ze];
      });
    } finally {
      G(!1);
    }
  }, Se = (g) => {
    const p = {
      ...g,
      id: Date.now(),
      time: "刚刚",
      likes: 0,
      comments: []
    };
    f([p, ...A]);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto relative z-10 pb-20", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "relative h-48 mb-16", children: [
      /* @__PURE__ */ i.jsx(
        "img",
        {
          src: ((Ae = U.moduleBgs) == null ? void 0 : Ae.星网动态) || "https://picsum.photos/seed/cover/800/400",
          alt: "Cover",
          className: "w-full h-full object-cover",
          referrerPolicy: "no-referrer"
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "absolute -bottom-8 right-4 flex items-end", children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-white text-lg font-medium mr-4 drop-shadow-md tracking-widest", children: U.userName }),
        /* @__PURE__ */ i.jsx("div", { className: "w-20 h-20 rounded-xl border-2 border-[var(--bg-base)] bg-[var(--card-bg)] overflow-hidden shadow-lg", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: U.avatarUrl || void 0,
            alt: "My Avatar",
            className: "w-full h-full object-cover",
            referrerPolicy: "no-referrer"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "px-4 space-y-6", children: ue ? /* @__PURE__ */ i.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ i.jsx(ps, { className: "animate-spin text-[var(--accent-color)]", size: 24 }) }) : A.map((g) => /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3 border-b border-[var(--wireframe)] pb-6 last:border-0", children: [
      /* @__PURE__ */ i.jsx("div", { className: "w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[var(--wireframe)]", children: /* @__PURE__ */ i.jsx("img", { src: g.avatar || void 0, alt: g.author, className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ i.jsx("h3", { className: "text-[var(--accent-color)] font-medium text-sm mb-1", children: g.author }),
        /* @__PURE__ */ i.jsx("p", { className: "text-[var(--text-primary)] text-sm mb-2 leading-relaxed", children: g.content }),
        g.image && /* @__PURE__ */ i.jsx("div", { className: "mb-3 rounded-lg overflow-hidden border border-[var(--wireframe)] max-w-[80%]", children: /* @__PURE__ */ i.jsx("img", { src: g.image || void 0, alt: "Moment attachment", className: "w-full h-auto object-cover", referrerPolicy: "no-referrer" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-xs text-[var(--text-secondary)] font-mono", children: g.time }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-4 text-[var(--text-secondary)]", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => O(g.id),
                className: `flex items-center gap-1 text-xs transition-colors ${g.isLiked ? "text-rose-400" : "hover:text-[var(--accent-color)]"}`,
                children: [
                  /* @__PURE__ */ i.jsx(uh, { size: 14, className: g.isLiked ? "fill-rose-400" : "" }),
                  g.likes > 0 && g.likes
                ]
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => B({ momentId: g.id, text: "" }),
                className: "flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors",
                children: /* @__PURE__ */ i.jsx(dh, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
              g.author === "我" && /* @__PURE__ */ i.jsx(
                "button",
                {
                  onClick: () => I(V === g.id ? null : g.id),
                  className: "flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors",
                  children: /* @__PURE__ */ i.jsx(Fv, { size: 14 })
                }
              ),
              V === g.id && g.author === "我" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-40", onClick: () => I(null) }),
                /* @__PURE__ */ i.jsxs("div", { className: "absolute right-0 top-full mt-1 w-28 bg-[var(--bg-base)] rounded-lg z-50 flex flex-col shadow-xl border border-[var(--wireframe)] overflow-hidden", children: [
                  /* @__PURE__ */ i.jsxs("button", { onClick: () => I(null), className: "flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-[var(--text-primary)]", children: [
                    /* @__PURE__ */ i.jsx(Sh, { size: 12 }),
                    " 修改动态"
                  ] }),
                  /* @__PURE__ */ i.jsxs("button", { onClick: () => K(g.id), className: "flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-rose-500", children: [
                    /* @__PURE__ */ i.jsx(bs, { size: 12 }),
                    " 删除动态"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        g.comments && g.comments.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "bg-[var(--bubble-bg)] rounded p-2 space-y-1", children: g.comments.map((p) => /* @__PURE__ */ i.jsxs("div", { className: "text-xs leading-relaxed", children: [
          /* @__PURE__ */ i.jsxs("span", { className: "text-[var(--accent-color)] font-medium", children: [
            p.author,
            ": "
          ] }),
          /* @__PURE__ */ i.jsx("span", { className: "text-[var(--text-primary)]", children: p.text })
        ] }, p.id)) }),
        (C == null ? void 0 : C.momentId) === g.id && /* @__PURE__ */ i.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              value: C.text,
              onChange: (p) => B({ ...C, text: p.target.value }),
              placeholder: "评论...",
              className: "flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-1.5 text-xs text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors",
              autoFocus: !0,
              onKeyDown: (p) => {
                p.key === "Enter" && J(g.id);
              }
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => J(g.id),
              disabled: !C.text.trim(),
              className: "p-1.5 rounded bg-[var(--accent-color)]/20 text-[var(--accent-color)] disabled:opacity-50",
              children: /* @__PURE__ */ i.jsx(Zl, { size: 14 })
            }
          )
        ] })
      ] })
    ] }, g.id)) }),
    X && /* @__PURE__ */ i.jsx(Lh, { onClose: () => _(!1) }),
    Z && /* @__PURE__ */ i.jsx(Zh, { onClose: () => W(!1), onPublish: Se })
  ] });
}, Kh = ({ onClose: v, initialData: T }) => {
  const [A, f] = D.useState((T == null ? void 0 : T.to) || ""), [C, B] = D.useState((T == null ? void 0 : T.subject) || ""), [V, I] = D.useState((T == null ? void 0 : T.body) || ""), [U, S] = D.useState(!1), X = async () => {
    if (!C && !V) {
      alert("请先输入主题或部分正文，以便 AI 了解您的意图。");
      return;
    }
    S(!0);
    try {
      const W = se.getGlobalSettings(), G = se.getPromptTemplates().emailCompose, O = Vl(G.systemPrompt, {
        userName: W.userName
      }), K = Vl(G.userPrompt, {
        userName: W.userName,
        recipientName: A || "未知收件人",
        emailSubject: C || "无主题"
      }), J = await Vu([
        { role: "system", content: O },
        { role: "user", content: K }
      ]);
      I(J);
    } catch (W) {
      console.error(W), alert("生成内容失败");
    } finally {
      S(!1);
    }
  }, _ = () => {
    const W = {
      id: Date.now(),
      from: se.getGlobalSettings().userName,
      to: A,
      subject: C,
      body: V,
      snippet: V.substring(0, 50) + "...",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      isRead: !0,
      status: "draft",
      type: "system"
    }, ue = se.getEmails();
    se.saveEmails([W, ...ue]), v();
  }, Z = () => {
    const W = {
      id: Date.now(),
      from: se.getGlobalSettings().userName,
      to: A,
      subject: C,
      body: V,
      snippet: V.substring(0, 50) + "...",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      isRead: !0,
      status: "sent",
      type: "system"
    }, ue = se.getEmails();
    se.saveEmails([W, ...ue]), v();
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 z-[70] bg-[var(--bg-base)] flex flex-col animate-in slide-in-from-bottom duration-300", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx("button", { onClick: v, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ i.jsx(Ca, { size: 20 }) }),
        /* @__PURE__ */ i.jsx("h3", { className: "text-[var(--text-primary)] font-medium tracking-widest text-sm", children: "写邮件" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            onClick: _,
            className: "flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)]",
            children: [
              /* @__PURE__ */ i.jsx(Ss, { size: 14 }),
              " 存草稿"
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            onClick: Z,
            disabled: !A || !C || !V,
            className: "flex items-center gap-1 text-xs text-[var(--bg-base)] bg-[var(--accent-color)] hover:opacity-90 transition-opacity px-3 py-1.5 rounded disabled:opacity-50",
            children: [
              /* @__PURE__ */ i.jsx(Zl, { size: 14 }),
              " 发送"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto p-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center border-b border-[var(--wireframe)] pb-2", children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-[var(--text-secondary)] text-sm w-16", children: "收件人:" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: A,
            onChange: (W) => f(W.target.value),
            className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm",
            placeholder: "输入收件人..."
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center border-b border-[var(--wireframe)] pb-2", children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-[var(--text-secondary)] text-sm w-16", children: "主题:" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            value: C,
            onChange: (W) => B(W.target.value),
            className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm",
            placeholder: "输入主题..."
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: X,
          disabled: U,
          className: "flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/10 disabled:opacity-50",
          children: [
            /* @__PURE__ */ i.jsx(Dh, { size: 14 }),
            " ",
            U ? "AI 生成中..." : "AI 辅助撰写"
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          value: V,
          onChange: (W) => I(W.target.value),
          className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm resize-none",
          placeholder: "在此输入正文..."
        }
      )
    ] })
  ] });
}, kh = ({ onClose: v }) => {
  const [T, A] = D.useState(se.getEmailPrompt()), f = () => {
    se.saveEmailPrompt(T), v();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ i.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "邮件 AI 设置" }),
      /* @__PURE__ */ i.jsx("button", { onClick: v, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ i.jsx(Ca, { size: 20 }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "写邮件 AI 提示词" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: T.emailComposePrompt,
            onChange: (C) => A({ ...T, emailComposePrompt: C.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "回复邮件 AI 提示词" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: T.emailReplyPrompt,
            onChange: (C) => A({ ...T, emailReplyPrompt: C.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "text-[10px] text-[var(--text-secondary)]", children: [
        "可用变量：",
        "{{userName}}"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: f,
        className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors",
        children: [
          /* @__PURE__ */ i.jsx(Ss, { size: 16 }),
          " 保存"
        ]
      }
    ) })
  ] }) });
}, Jh = ({ actionType: v, setActionType: T }) => {
  const [A, f] = D.useState([]), [C, B] = D.useState(null), [V, I] = D.useState(!1), [U, S] = D.useState(!1), [X, _] = D.useState(null), [Z, W] = D.useState("");
  D.useEffect(() => {
    const g = () => f(se.getEmails());
    return g(), window.addEventListener("emailsUpdated", g), () => window.removeEventListener("emailsUpdated", g);
  }, []), D.useEffect(() => {
    A.length > 0 && se.saveEmails(A);
  }, [A]);
  const ue = (g) => {
    f(A.map((p) => p.id === g ? { ...p, isRead: !0 } : p));
  }, G = (g) => {
    f(A.filter((p) => p.id !== g)), C === g && B(null);
  }, O = async (g) => {
    I(!0), _(g.id);
    try {
      const p = se.getGlobalSettings(), _e = se.getEmailPrompt(), ze = Vl(_e.emailReplyPrompt, {
        userName: p.userName,
        userPersona: p.userPersona || ""
      }), Ce = `发件人: ${g.from}
主题: ${g.subject}
内容: ${g.body}

请以${p.userName}的身份生成一封回复。`, Be = await Vu([
        { role: "system", content: ze },
        { role: "user", content: Ce }
      ]);
      W(Be);
    } catch (p) {
      console.error(p), alert("生成回复失败");
    } finally {
      I(!1);
    }
  }, K = (g) => {
    Z.trim() && (f(A.map((p) => p.id === g ? {
      ...p,
      isReplied: !0,
      replies: [
        ...p.replies || [],
        {
          id: Date.now(),
          text: Z.trim(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
        }
      ]
    } : p)), _(null), W(""));
  }, J = (g, p) => g === "alert" ? /* @__PURE__ */ i.jsx(Lv, { size: 20, className: "text-rose-400" }) : g === "update" ? /* @__PURE__ */ i.jsx(Vv, { size: 20, className: "text-emerald-400" }) : p ? /* @__PURE__ */ i.jsx(Bd, { size: 20, className: "text-[var(--text-secondary)]" }) : /* @__PURE__ */ i.jsx(qd, { size: 20, className: "text-[var(--accent-color)]" }), Q = v || "inbox", Se = A.filter((g) => Q === "drafts" ? g.status === "draft" : Q === "trash" ? g.status === "trash" : Q === "outbox" ? g.status === "sent" : g.status === "inbox" || !g.status), Ae = () => Q === "drafts" ? "草稿箱" : Q === "trash" ? "垃圾箱" : Q === "outbox" ? "发件箱" : "收件箱";
  return /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden relative z-10", children: [
    v === "writeEmail" && /* @__PURE__ */ i.jsx(
      Kh,
      {
        onClose: () => {
          T(null), f(se.getEmails());
        }
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        Q !== "inbox" && Q !== "writeEmail" && /* @__PURE__ */ i.jsx("button", { onClick: () => T(null), className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ i.jsx(Cv, { size: 18 }) }),
        /* @__PURE__ */ i.jsx("h3", { className: "text-[var(--text-primary)] font-medium tracking-widest text-sm", children: Ae() })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        Q === "inbox" && /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => f(A.map((g) => g.status === "inbox" || !g.status ? { ...g, isRead: !0 } : g)),
            className: "text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors",
            children: "全部标为已读"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => S(!0),
            className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
            children: /* @__PURE__ */ i.jsx(Qd, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-2 pb-20", children: [
      Se.map((g) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onClick: () => {
            B(C === g.id ? null : g.id), g.isRead || ue(g.id);
          },
          className: `p-3 rounded-xl border transition-all cursor-pointer group ${C === g.id ? "bg-[var(--card-bg)] border-[var(--accent-color)] shadow-md" : "bg-[var(--bubble-bg)] border-[var(--wireframe)] hover:border-[var(--accent-color)]/50"} ${g.isRead ? "" : "border-l-4 border-l-[var(--accent-color)]"}`,
          children: /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ i.jsx("div", { className: "shrink-0 mt-1", children: J(g.type, g.isRead) }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-baseline mb-1", children: [
                /* @__PURE__ */ i.jsx("span", { className: `text-sm truncate pr-2 ${g.isRead ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)] font-medium"}`, children: Q === "outbox" || Q === "drafts" ? `To: ${g.to}` : g.from }),
                /* @__PURE__ */ i.jsxs("span", { className: "text-[10px] text-[var(--text-secondary)] font-mono shrink-0 flex items-center gap-1", children: [
                  /* @__PURE__ */ i.jsx(kv, { size: 10 }),
                  g.time
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("h4", { className: `text-sm truncate mb-1 ${g.isRead ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)]"}`, children: g.subject }),
              /* @__PURE__ */ i.jsx("p", { className: `text-xs leading-relaxed ${C === g.id ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] line-clamp-2"}`, children: C === g.id ? g.body : g.snippet }),
              C === g.id && /* @__PURE__ */ i.jsxs("div", { className: "mt-4 pt-3 border-t border-[var(--wireframe)] animate-in fade-in slide-in-from-top-2 duration-200", children: [
                g.replies && g.replies.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mb-4 space-y-2", children: g.replies.map((p) => /* @__PURE__ */ i.jsxs("div", { className: "bg-[var(--bg-base)] rounded p-2 text-xs border border-[var(--wireframe)]", children: [
                  /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-[var(--text-secondary)] mb-1", children: [
                    /* @__PURE__ */ i.jsx("span", { children: "我" }),
                    /* @__PURE__ */ i.jsx("span", { children: p.time })
                  ] }),
                  /* @__PURE__ */ i.jsx("p", { className: "text-[var(--text-primary)] whitespace-pre-wrap", children: p.text })
                ] }, p.id)) }),
                X === g.id ? /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ i.jsx(
                    "textarea",
                    {
                      value: Z,
                      onChange: (p) => W(p.target.value),
                      placeholder: "输入回复内容...",
                      className: "w-full bg-[var(--bg-base)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]",
                      autoFocus: !0
                    }
                  ),
                  /* @__PURE__ */ i.jsxs("div", { className: "flex justify-end gap-2", children: [
                    /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        onClick: (p) => {
                          p.stopPropagation(), _(null), W("");
                        },
                        className: "px-3 py-1.5 rounded border border-[var(--wireframe)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
                        children: "取消"
                      }
                    ),
                    /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        onClick: (p) => {
                          p.stopPropagation(), K(g.id);
                        },
                        disabled: !Z.trim(),
                        className: "px-3 py-1.5 rounded bg-[var(--accent-color)] text-white text-xs hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50 flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ i.jsx(Zl, { size: 12 }),
                          " 发送"
                        ]
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex justify-end gap-3", children: [
                  /* @__PURE__ */ i.jsxs(
                    "button",
                    {
                      onClick: (p) => {
                        p.stopPropagation(), G(g.id);
                      },
                      className: "flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 transition-colors px-3 py-1.5 rounded bg-rose-400/10",
                      children: [
                        /* @__PURE__ */ i.jsx(bs, { size: 14 }),
                        " 删除"
                      ]
                    }
                  ),
                  /* @__PURE__ */ i.jsxs(
                    "button",
                    {
                      onClick: (p) => {
                        p.stopPropagation(), _(g.id), W("");
                      },
                      className: "flex items-center gap-1 text-xs text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)] hover:border-[var(--accent-color)]",
                      children: [
                        /* @__PURE__ */ i.jsx(gh, { size: 14 }),
                        " 回复"
                      ]
                    }
                  ),
                  /* @__PURE__ */ i.jsxs(
                    "button",
                    {
                      onClick: (p) => {
                        p.stopPropagation(), O(g);
                      },
                      disabled: V,
                      className: "flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-white transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/20 disabled:opacity-50",
                      children: [
                        V ? /* @__PURE__ */ i.jsx(ps, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ i.jsx(qd, { size: 14 }),
                        V ? "生成中..." : "AI 生成回复"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        },
        g.id
      )),
      Se.length === 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center h-40 text-[var(--text-secondary)] opacity-50", children: [
        Q === "drafts" ? /* @__PURE__ */ i.jsx(Pv, { size: 48, className: "mb-4" }) : Q === "trash" ? /* @__PURE__ */ i.jsx(bs, { size: 48, className: "mb-4" }) : Q === "outbox" ? /* @__PURE__ */ i.jsx(Zl, { size: 48, className: "mb-4" }) : /* @__PURE__ */ i.jsx(Bd, { size: 48, className: "mb-4" }),
        /* @__PURE__ */ i.jsxs("p", { className: "tracking-widest", children: [
          Ae(),
          "为空"
        ] })
      ] })
    ] }),
    U && /* @__PURE__ */ i.jsx(kh, { onClose: () => S(!1) })
  ] });
}, $h = ({ onBack: v, settings: T }) => {
  const [A, f] = D.useState("chat"), [C, B] = D.useState([]), [V, I] = D.useState(null), [U, S] = D.useState(!1), [X, _] = D.useState(null), [Z, W] = D.useState(null);
  D.useEffect(() => {
    var O, K;
    try {
      const J = (K = (O = window.SillyTavern) == null ? void 0 : O.getContext) == null ? void 0 : K.call(O);
      if (J && J.characters) {
        const Q = J.characters.map((Se, Ae) => {
          var g;
          return {
            id: Ae,
            name: Se.name,
            lastMessage: ((g = Se.description) == null ? void 0 : g.substring(0, 50)) || "...",
            time: "",
            unread: !1,
            type: "user",
            avatar: Se.avatar,
            online: !0,
            description: Se.description,
            stCharacter: Se
          };
        });
        B(Q);
      }
    } catch (J) {
      console.error("Failed to fetch characters from SillyTavern", J);
    }
  }, []);
  const ue = (O) => {
    var K, J;
    try {
      const Q = (J = (K = window.SillyTavern) == null ? void 0 : K.getContext) == null ? void 0 : J.call(K);
      Q && Q.setCharacter && Q.setCharacter(O.stCharacter || O.name);
    } catch (Q) {
      console.error("Failed to set character in SillyTavern", Q);
    }
    W(O.id);
  }, G = C.find((O) => O.id === Z);
  return Z !== null && G ? /* @__PURE__ */ i.jsx(
    qh,
    {
      contact: G,
      onBack: () => W(null),
      settings: T
    }
  ) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col h-full w-full bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden", children: [
    V && /* @__PURE__ */ i.jsx(
      "img",
      {
        src: V,
        alt: "Background",
        className: "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity",
        referrerPolicy: "no-referrer"
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-between px-4 py-5 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-50", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ i.jsx("button", { onClick: v, className: "p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors", children: /* @__PURE__ */ i.jsx(Xd, { size: 24 }) }),
      /* @__PURE__ */ i.jsxs("h2", { className: "text-xl font-light tracking-widest text-[var(--text-primary)] ml-2", children: [
        "星网回路 ",
        /* @__PURE__ */ i.jsxs("span", { className: "text-sm text-[var(--accent-color)] ml-1", children: [
          "(",
          C.length,
          ")"
        ] })
      ] })
    ] }) }),
    A === "chat" && /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-1 relative z-10", children: [
      C.map((O) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          onClick: () => ue(O),
          className: "flex items-center p-3 rounded-xl hover:bg-[var(--bubble-bg)] cursor-pointer transition-colors group",
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "relative shrink-0 mr-4", children: [
              /* @__PURE__ */ i.jsx("div", { className: "w-12 h-12 rounded-full border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors p-0.5 bg-[var(--card-bg)]", children: /* @__PURE__ */ i.jsx("img", { src: O.avatar || void 0, alt: O.name, className: "w-full h-full rounded-full object-cover", referrerPolicy: "no-referrer" }) }),
              O.type === "user" && /* @__PURE__ */ i.jsx("div", { className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] ${O.online ? "bg-emerald-400" : "bg-slate-500"}` })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0 border-b border-[var(--wireframe)] pb-3 pt-1 group-last:border-0", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-baseline mb-1", children: [
                /* @__PURE__ */ i.jsx("h3", { className: "text-[var(--text-primary)] font-medium truncate pr-2 tracking-wide", children: O.name }),
                /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-[var(--text-secondary)] font-mono shrink-0", children: O.time })
              ] }),
              /* @__PURE__ */ i.jsx("p", { className: "text-sm text-[var(--text-secondary)] truncate", children: O.lastMessage })
            ] })
          ]
        },
        O.id
      )),
      C.length === 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-[var(--text-secondary)] opacity-50", children: [
        /* @__PURE__ */ i.jsx(xs, { size: 48, className: "mb-4" }),
        /* @__PURE__ */ i.jsx("p", { className: "tracking-widest", children: "暂无联系人" })
      ] })
    ] }),
    A === "moments" && /* @__PURE__ */ i.jsx(Vh, { actionType: X, setActionType: _ }),
    A === "notifications" && /* @__PURE__ */ i.jsx(Jh, { actionType: X, setActionType: _ }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-around py-3 border-t border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 pb-4 sm:pb-3 relative z-10", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => f("chat"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${A === "chat" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ i.jsx(xs, { size: 22, className: A === "chat" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ i.jsx("span", { className: "text-[10px] tracking-widest", children: "私聊" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => f("moments"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${A === "moments" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ i.jsx(ah, { size: 22, className: A === "moments" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ i.jsx("span", { className: "text-[10px] tracking-widest", children: "星网动态" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => f("notifications"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${A === "notifications" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ i.jsx(Rv, { size: 22, className: A === "notifications" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ i.jsx("span", { className: "text-[10px] tracking-widest", children: "通知" })
          ]
        }
      )
    ] })
  ] });
}, Wh = ({ onLock: v, toggleTheme: T, isDarkMode: A }) => {
  const [f, C] = D.useState(null), [B, V] = D.useState(/* @__PURE__ */ new Date()), [I, U] = D.useState(!1), [S, X] = D.useState(!1), [_, Z] = D.useState(se.getGlobalSettings()), [W, ue] = D.useState(se.getPromptTemplates());
  D.useEffect(() => {
    var O, K;
    try {
      const J = (K = (O = window.SillyTavern) == null ? void 0 : O.getContext) == null ? void 0 : K.call(O);
      J && Z((Q) => ({
        ...Q,
        userName: J.name1 || Q.userName,
        userPersona: J.persona || Q.userPersona,
        avatarUrl: J.avatarUrl || Q.avatarUrl
      }));
    } catch (J) {
      console.error("Failed to fetch SillyTavern context", J);
    }
  }, []), D.useEffect(() => {
    se.saveGlobalSettings(_);
  }, [_]), D.useEffect(() => {
    se.savePromptTemplates(W);
  }, [W]), D.useEffect(() => {
    const O = setInterval(() => V(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(O);
  }, []), D.useEffect(() => {
    const O = () => {
      Z(se.getGlobalSettings());
    };
    return window.addEventListener("settingsUpdated", O), () => window.removeEventListener("settingsUpdated", O);
  }, []), D.useEffect(() => {
    if (_.customFontUrl) {
      const O = document.createElement("style");
      O.id = "custom-font-style", O.appendChild(document.createTextNode(`
        @font-face {
          font-family: 'CustomFont';
          src: url('${_.customFontUrl}');
        }
        :root {
          --custom-font: 'CustomFont', "PingFang SC", "Microsoft YaHei", "Outfit", "Noto Sans SC", sans-serif;
        }
      `));
      const K = document.getElementById("custom-font-style");
      K && document.head.removeChild(K), document.head.appendChild(O);
    } else {
      const O = document.getElementById("custom-font-style");
      O && document.head.removeChild(O);
    }
  }, [_.customFontUrl]);
  const G = (O, K) => {
    C({ title: O, desc: K });
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "absolute inset-0 flex items-center justify-center p-4 overflow-hidden",
      style: { fontSize: `${_.fontSizeScale}rem` },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "bokeh bokeh-1" }),
        /* @__PURE__ */ i.jsx("div", { className: "bokeh bokeh-2" }),
        /* @__PURE__ */ i.jsx("div", { className: "scanlines" }),
        (f == null ? void 0 : f.title) === "星网回路" ? /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 z-50 w-full h-full bg-[var(--bg-base)] animate-in slide-in-from-right duration-300", children: /* @__PURE__ */ i.jsx($h, { onBack: () => C(null), settings: _ }) }) : /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 w-full h-full glass-card rounded-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
            /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-4 text-[var(--text-secondary)] font-mono text-sm", children: /* @__PURE__ */ i.jsxs("span", { children: [
              B.getFullYear(),
              "/",
              String(B.getMonth() + 1).padStart(2, "0"),
              "/",
              String(B.getDate()).padStart(2, "0"),
              " ",
              B.toLocaleDateString("zh-CN", { weekday: "short" })
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-4 text-[var(--text-secondary)]", children: [
              /* @__PURE__ */ i.jsx("button", { onClick: () => U(!0), className: "hover:text-[var(--text-primary)] transition-colors", title: "系统设置", children: /* @__PURE__ */ i.jsx(Qd, { size: 18 }) }),
              /* @__PURE__ */ i.jsx("button", { onClick: T, className: "hover:text-[var(--text-primary)] transition-colors text-xs border border-[var(--wireframe)] px-2 py-1 rounded", children: A ? "LIGHT" : "DARK" }),
              /* @__PURE__ */ i.jsx(Hh, { size: 16 }),
              /* @__PURE__ */ i.jsx(Uv, { size: 16 }),
              /* @__PURE__ */ i.jsx("button", { onClick: v, className: "hover:text-[var(--accent-color)] transition-colors ml-2", children: /* @__PURE__ */ i.jsx(Ca, { size: 20 }) })
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex-1 p-4 overflow-y-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 min-h-full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "glass-card p-4 flex flex-col items-center text-center clip-corner shrink-0 relative overflow-hidden", children: [
                _.profileBgUrl && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: _.profileBgUrl,
                    alt: "Profile Background",
                    className: "absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity pointer-events-none",
                    referrerPolicy: "no-referrer"
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "w-20 h-20 rounded-full border-2 border-[var(--accent-color)] p-1 mb-3 relative z-10", children: [
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: _.avatarUrl || void 0,
                      alt: "Avatar",
                      className: "w-full h-full rounded-full object-cover",
                      referrerPolicy: "no-referrer"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--card-bg)]" })
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "cursor-pointer group relative z-10 flex flex-col items-center", onClick: () => X(!0), children: [
                  /* @__PURE__ */ i.jsx("h2", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest mb-1 group-hover:text-[var(--accent-color)] transition-colors", children: _.userName }),
                  /* @__PURE__ */ i.jsx("div", { className: "text-xs border border-[var(--wireframe)] px-2 py-1 text-[var(--accent-color)] rounded-sm group-hover:border-[var(--accent-color)] transition-colors", children: _.tag })
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs(
                "button",
                {
                  onClick: () => G("即达", "购物消费与物资运输网络"),
                  className: "glass-card w-full h-24 flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] transition-all clip-corner-br shrink-0 relative overflow-hidden",
                  children: [
                    _.moduleBgs.即达 && /* @__PURE__ */ i.jsx("img", { src: _.moduleBgs.即达, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(xh, { className: "text-[var(--accent-color)]", size: 20 }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-xl text-[var(--text-primary)] tracking-widest font-light text-glow mt-1", children: "即达" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ i.jsxs(
                "button",
                {
                  onClick: () => G("星网回路", "跨星系加密量子通讯网络"),
                  className: "glass-card w-full h-32 relative overflow-hidden group clip-corner shrink-0",
                  children: [
                    _.moduleBgs.星网回路 && /* @__PURE__ */ i.jsx(
                      "img",
                      {
                        src: _.moduleBgs.星网回路,
                        alt: "Communication",
                        className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity",
                        referrerPolicy: "no-referrer"
                      }
                    ),
                    /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80" }),
                    /* @__PURE__ */ i.jsxs("div", { className: "absolute bottom-4 right-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(xs, { className: "text-[var(--accent-color)]", size: 18 }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "星网回路" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-4 h-24 shrink-0", children: [
                /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    onClick: () => G("轨迹管理", "日常任务与行程安排规划"),
                    className: "glass-card flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] clip-corner-br relative overflow-hidden",
                    children: [
                      _.moduleBgs.轨迹管理 && /* @__PURE__ */ i.jsx("img", { src: _.moduleBgs.轨迹管理, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                      /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-1", children: [
                        /* @__PURE__ */ i.jsx(qv, { className: "text-[var(--accent-color)] group-hover:scale-110 transition-transform", size: 18 }),
                        /* @__PURE__ */ i.jsx("span", { className: "text-sm text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap", children: "轨迹管理" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    onClick: () => G("记忆锚点", "个人备忘录与记事簿系统"),
                    className: "glass-card flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] clip-corner relative overflow-hidden",
                    children: [
                      _.moduleBgs.记忆锚点 && /* @__PURE__ */ i.jsx("img", { src: _.moduleBgs.记忆锚点, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                      /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-1", children: [
                        /* @__PURE__ */ i.jsx(wv, { className: "text-[var(--accent-color)] group-hover:scale-110 transition-transform", size: 18 }),
                        /* @__PURE__ */ i.jsx("span", { className: "text-sm text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap", children: "记忆锚点" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ i.jsxs(
                "button",
                {
                  onClick: () => G("远程视域", "全息网络直播与沉浸式媒体"),
                  className: "glass-card col-span-2 flex items-center justify-between p-4 group hover:bg-[var(--bubble-bg)] clip-corner shrink-0 min-h-[80px] relative overflow-hidden",
                  children: [
                    _.moduleBgs.远程视域 && /* @__PURE__ */ i.jsx("img", { src: _.moduleBgs.远程视域, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex items-center justify-between w-full", children: [
                      /* @__PURE__ */ i.jsx(Gv, { className: "text-[var(--accent-color)]", size: 20 }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "远程视域" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ i.jsxs(
                "button",
                {
                  onClick: () => G("星网索引", "全星系浏览器与信息查询"),
                  className: "glass-card col-span-1 flex flex-col items-center justify-center gap-3 group hover:bg-[var(--bubble-bg)] clip-corner-br shrink-0 min-h-[120px] relative overflow-hidden",
                  children: [
                    _.moduleBgs.星网索引 && /* @__PURE__ */ i.jsx("img", { src: _.moduleBgs.星网索引, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ i.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-3", children: [
                      /* @__PURE__ */ i.jsx(Th, { className: "text-[var(--accent-color)] group-hover:animate-pulse", size: 24 }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-xl text-[var(--text-primary)] tracking-widest font-light text-glow", style: { writingMode: "vertical-rl" }, children: "星网索引" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ i.jsxs(
                "button",
                {
                  onClick: () => G("星途", "星际地图导航与交通出行"),
                  className: "glass-card col-span-1 relative overflow-hidden group clip-corner shrink-0 min-h-[120px]",
                  children: [
                    _.moduleBgs.星途 && /* @__PURE__ */ i.jsx(
                      "img",
                      {
                        src: _.moduleBgs.星途,
                        alt: "Navigation",
                        className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity",
                        referrerPolicy: "no-referrer"
                      }
                    ),
                    /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] to-transparent opacity-90" }),
                    /* @__PURE__ */ i.jsxs("div", { className: "absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(hh, { className: "text-[var(--accent-color)]", size: 18 }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "星途" })
                    ] })
                  ]
                }
              )
            ] })
          ] }) })
        ] }),
        f && f.title !== "星网回路" && /* @__PURE__ */ i.jsx(
          ys,
          {
            isOpen: !0,
            onClose: () => C(null),
            title: f.title,
            children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
              /* @__PURE__ */ i.jsx("div", { className: "w-16 h-16 rounded-full border border-[var(--wireframe)] flex items-center justify-center mb-6 animate-pulse", children: /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 bg-[var(--accent-color)] rounded-full opacity-50" }) }),
              /* @__PURE__ */ i.jsxs("h3", { className: "text-2xl font-light tracking-widest text-[var(--text-primary)] mb-4 text-glow", children: [
                f.title,
                " 系统加载中"
              ] }),
              /* @__PURE__ */ i.jsxs("p", { className: "text-sm font-mono text-[var(--text-secondary)] mb-8 max-w-md", children: [
                f.desc,
                /* @__PURE__ */ i.jsx("br", {}),
                /* @__PURE__ */ i.jsx("br", {}),
                "正在建立安全量子连接并同步数据..."
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "w-full max-w-xs h-1 bg-[var(--wireframe)] overflow-hidden", children: /* @__PURE__ */ i.jsx("div", { className: "h-full bg-[var(--accent-color)] w-1/3 animate-[slideRight_2s_ease-in-out_infinite]" }) })
            ] })
          }
        ),
        I && /* @__PURE__ */ i.jsx(
          ys,
          {
            isOpen: !0,
            onClose: () => U(!1),
            title: "系统设置",
            children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ i.jsx("h4", { className: "text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2", children: "外观设置" }),
                /* @__PURE__ */ i.jsxs("div", { children: [
                  /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "自定义字体 URL (TTF/WOFF)" }),
                  /* @__PURE__ */ i.jsx("input", { type: "text", value: _.customFontUrl, onChange: (O) => Z({ ..._, customFontUrl: O.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "留空使用默认字体" })
                ] }),
                /* @__PURE__ */ i.jsxs("div", { children: [
                  /* @__PURE__ */ i.jsxs("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: [
                    "全局字体大小缩放 (",
                    _.fontSizeScale,
                    "x)"
                  ] }),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "range",
                      min: "0.8",
                      max: "1.5",
                      step: "0.05",
                      value: _.fontSizeScale,
                      onChange: (O) => Z({ ..._, fontSizeScale: parseFloat(O.target.value) }),
                      className: "w-full accent-[var(--accent-color)]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ i.jsx("h4", { className: "text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2", children: "模块背景图 (URL)" }),
                Object.keys(_.moduleBgs).map((O) => /* @__PURE__ */ i.jsxs("div", { children: [
                  /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: O }),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "text",
                      value: _.moduleBgs[O],
                      onChange: (K) => Z({
                        ..._,
                        moduleBgs: { ..._.moduleBgs, [O]: K.target.value }
                      }),
                      className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]",
                      placeholder: "留空则无背景"
                    }
                  )
                ] }, O))
              ] })
            ] })
          }
        ),
        S && /* @__PURE__ */ i.jsx(
          ys,
          {
            isOpen: !0,
            onClose: () => X(!1),
            title: "用户人设设定",
            children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "名称" }),
                /* @__PURE__ */ i.jsx("input", { type: "text", value: _.userName, onChange: (O) => Z({ ..._, userName: O.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "标签" }),
                /* @__PURE__ */ i.jsx("input", { type: "text", value: _.tag, onChange: (O) => Z({ ..._, tag: O.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "头像 URL" }),
                /* @__PURE__ */ i.jsx("input", { type: "text", value: _.avatarUrl, onChange: (O) => Z({ ..._, avatarUrl: O.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "头像背景图 URL" }),
                /* @__PURE__ */ i.jsx("input", { type: "text", value: _.profileBgUrl, onChange: (O) => Z({ ..._, profileBgUrl: O.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "留空则无背景" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "详细人设 (User Persona)" }),
                /* @__PURE__ */ i.jsx(
                  "textarea",
                  {
                    value: _.userPersona || "",
                    onChange: (O) => Z({ ..._, userPersona: O.target.value }),
                    className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)] min-h-[100px] resize-y",
                    placeholder: "描述你的身份、性格、背景等，AI将根据此设定与你交互..."
                  }
                )
              ] })
            ] }) })
          }
        )
      ]
    }
  );
};
function Fh() {
  const [v, T] = D.useState(!1), [A, f] = D.useState(!0), C = () => f(!A);
  return /* @__PURE__ */ i.jsx("div", { className: `w-full h-full font-sans selection:bg-[var(--accent-color)] selection:text-white relative overflow-hidden ${A ? "dark" : ""}`, "data-theme": A ? "dark" : "light", children: /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-400", children: v ? /* @__PURE__ */ i.jsx(
    Wh,
    {
      onLock: () => T(!1),
      toggleTheme: C,
      isDarkMode: A
    }
  ) : /* @__PURE__ */ i.jsx(Bh, { onUnlock: () => T(!0) }) }) });
}
const Ih = () => {
  const [v, T] = D.useState(!1), [A, f] = D.useState({ x: window.innerWidth / 2 - 195, y: window.innerHeight / 2 - 375 }), [C, B] = D.useState(!1), V = D.useRef({ x: 0, y: 0 }), I = (X) => {
    B(!0), V.current = {
      x: X.clientX - A.x,
      y: X.clientY - A.y
    };
  }, U = (X) => {
    C && f({
      x: X.clientX - V.current.x,
      y: X.clientY - V.current.y
    });
  }, S = () => {
    B(!1);
  };
  return D.useEffect(() => (C ? (window.addEventListener("mousemove", U), window.addEventListener("mouseup", S)) : (window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", S)), () => {
    window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", S);
  }), [C]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        id: "st-star-terminal-toggle",
        onClick: () => T(!v),
        style: {
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1e5,
          padding: "10px 15px",
          backgroundColor: "rgba(30, 35, 40, 0.8)",
          color: "#dce3e8",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          fontFamily: "sans-serif"
        },
        children: "终"
      }
    ),
    v && /* @__PURE__ */ i.jsxs("div", { style: {
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      pointerEvents: "none"
    }, children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          style: { position: "absolute", inset: 0, pointerEvents: "auto" },
          onClick: () => T(!1)
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          style: {
            position: "absolute",
            left: `${A.x}px`,
            top: `${A.y}px`,
            width: "390px",
            height: "750px",
            backgroundColor: "rgba(20, 23, 26, 0.85)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
            overflow: "hidden",
            pointerEvents: "auto",
            display: "flex",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                onMouseDown: I,
                style: {
                  height: "30px",
                  width: "100%",
                  cursor: "grab",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1e5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ i.jsx("div", { style: { width: "40px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px" } })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => T(!1),
                style: {
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  zIndex: 100001,
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  fontSize: "16px"
                },
                children: "✕"
              }
            ),
            /* @__PURE__ */ i.jsx("div", { style: { width: "100%", height: "100%", position: "relative", paddingTop: "10px" }, children: /* @__PURE__ */ i.jsx(Fh, {}) })
          ]
        }
      )
    ] })
  ] });
}, Ns = document.createElement("div");
Ns.id = "st-star-terminal-root";
document.body.appendChild(Ns);
const Ph = jv.createRoot(Ns);
Ph.render(
  /* @__PURE__ */ i.jsx(hv.StrictMode, { children: /* @__PURE__ */ i.jsx(Ih, {}) })
);
