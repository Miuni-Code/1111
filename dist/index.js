function $d(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Su = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function Th() {
  if (Rd) return On;
  Rd = 1;
  var r = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function S(f, w, k) {
    var B = null;
    if (k !== void 0 && (B = "" + k), w.key !== void 0 && (B = "" + w.key), "key" in w) {
      k = {};
      for (var $ in w)
        $ !== "key" && (k[$] = w[$]);
    } else k = w;
    return w = k.ref, {
      $$typeof: r,
      type: f,
      key: B,
      ref: w !== void 0 ? w : null,
      props: k
    };
  }
  return On.Fragment = h, On.jsx = S, On.jsxs = S, On;
}
var Hd;
function Ch() {
  return Hd || (Hd = 1, Su.exports = Th()), Su.exports;
}
var c = Ch(), zu = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function wh() {
  if (kd) return ne;
  kd = 1;
  var r = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), B = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), Q = Symbol.iterator;
  function V(m) {
    return m === null || typeof m != "object" ? null : (m = Q && m[Q] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var J = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, te = Object.assign, se = {};
  function ue(m, T, Y) {
    this.props = m, this.context = T, this.refs = se, this.updater = Y || J;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(m, T) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, T, "setState");
  }, ue.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function De() {
  }
  De.prototype = ue.prototype;
  function A(m, T, Y) {
    this.props = m, this.context = T, this.refs = se, this.updater = Y || J;
  }
  var ae = A.prototype = new De();
  ae.constructor = A, te(ae, ue.prototype), ae.isPureReactComponent = !0;
  var ze = Array.isArray;
  function z() {
  }
  var y = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function fe(m, T, Y) {
    var L = Y.ref;
    return {
      $$typeof: r,
      type: m,
      key: T,
      ref: L !== void 0 ? L : null,
      props: Y
    };
  }
  function U(m, T) {
    return fe(m.type, T, m.props);
  }
  function ee(m) {
    return typeof m == "object" && m !== null && m.$$typeof === r;
  }
  function de(m) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(Y) {
      return T[Y];
    });
  }
  var Qe = /\/+/g;
  function Ze(m, T) {
    return typeof m == "object" && m !== null && m.key != null ? de("" + m.key) : T.toString(36);
  }
  function Ae(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(z, z) : (m.status = "pending", m.then(
          function(T) {
            m.status === "pending" && (m.status = "fulfilled", m.value = T);
          },
          function(T) {
            m.status === "pending" && (m.status = "rejected", m.reason = T);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function E(m, T, Y, L, le) {
    var H = typeof m;
    (H === "undefined" || H === "boolean") && (m = null);
    var P = !1;
    if (m === null) P = !0;
    else
      switch (H) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case r:
            case h:
              P = !0;
              break;
            case D:
              return P = m._init, E(
                P(m._payload),
                T,
                Y,
                L,
                le
              );
          }
      }
    if (P)
      return le = le(m), P = L === "" ? "." + Ze(m, 0) : L, ze(le) ? (Y = "", P != null && (Y = P.replace(Qe, "$&/") + "/"), E(le, T, Y, "", function(Da) {
        return Da;
      })) : le != null && (ee(le) && (le = U(
        le,
        Y + (le.key == null || m && m.key === le.key ? "" : ("" + le.key).replace(
          Qe,
          "$&/"
        ) + "/") + P
      )), T.push(le)), 1;
    P = 0;
    var ye = L === "" ? "." : L + ":";
    if (ze(m))
      for (var ge = 0; ge < m.length; ge++)
        L = m[ge], H = ye + Ze(L, ge), P += E(
          L,
          T,
          Y,
          H,
          le
        );
    else if (ge = V(m), typeof ge == "function")
      for (m = ge.call(m), ge = 0; !(L = m.next()).done; )
        L = L.value, H = ye + Ze(L, ge++), P += E(
          L,
          T,
          Y,
          H,
          le
        );
    else if (H === "object") {
      if (typeof m.then == "function")
        return E(
          Ae(m),
          T,
          Y,
          L,
          le
        );
      throw T = String(m), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function p(m, T, Y) {
    if (m == null) return m;
    var L = [], le = 0;
    return E(m, L, "", "", function(H) {
      return T.call(Y, H, le++);
    }), L;
  }
  function G(m) {
    if (m._status === -1) {
      var T = m._result;
      T = T(), T.then(
        function(Y) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = Y);
        },
        function(Y) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = Y);
        }
      ), m._status === -1 && (m._status = 0, m._result = T);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var re = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, pe = {
    map: p,
    forEach: function(m, T, Y) {
      p(
        m,
        function() {
          T.apply(this, arguments);
        },
        Y
      );
    },
    count: function(m) {
      var T = 0;
      return p(m, function() {
        T++;
      }), T;
    },
    toArray: function(m) {
      return p(m, function(T) {
        return T;
      }) || [];
    },
    only: function(m) {
      if (!ee(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return ne.Activity = q, ne.Children = pe, ne.Component = ue, ne.Fragment = S, ne.Profiler = w, ne.PureComponent = A, ne.StrictMode = f, ne.Suspense = R, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return y.H.useMemoCache(m);
    }
  }, ne.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(m, T, Y) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var L = te({}, m.props), le = m.key;
    if (T != null)
      for (H in T.key !== void 0 && (le = "" + T.key), T)
        !oe.call(T, H) || H === "key" || H === "__self" || H === "__source" || H === "ref" && T.ref === void 0 || (L[H] = T[H]);
    var H = arguments.length - 2;
    if (H === 1) L.children = Y;
    else if (1 < H) {
      for (var P = Array(H), ye = 0; ye < H; ye++)
        P[ye] = arguments[ye + 2];
      L.children = P;
    }
    return fe(m.type, le, L);
  }, ne.createContext = function(m) {
    return m = {
      $$typeof: B,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: k,
      _context: m
    }, m;
  }, ne.createElement = function(m, T, Y) {
    var L, le = {}, H = null;
    if (T != null)
      for (L in T.key !== void 0 && (H = "" + T.key), T)
        oe.call(T, L) && L !== "key" && L !== "__self" && L !== "__source" && (le[L] = T[L]);
    var P = arguments.length - 2;
    if (P === 1) le.children = Y;
    else if (1 < P) {
      for (var ye = Array(P), ge = 0; ge < P; ge++)
        ye[ge] = arguments[ge + 2];
      le.children = ye;
    }
    if (m && m.defaultProps)
      for (L in P = m.defaultProps, P)
        le[L] === void 0 && (le[L] = P[L]);
    return fe(m, H, le);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(m) {
    return { $$typeof: $, render: m };
  }, ne.isValidElement = ee, ne.lazy = function(m) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: m },
      _init: G
    };
  }, ne.memo = function(m, T) {
    return {
      $$typeof: N,
      type: m,
      compare: T === void 0 ? null : T
    };
  }, ne.startTransition = function(m) {
    var T = y.T, Y = {};
    y.T = Y;
    try {
      var L = m(), le = y.S;
      le !== null && le(Y, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(z, re);
    } catch (H) {
      re(H);
    } finally {
      T !== null && Y.types !== null && (T.types = Y.types), y.T = T;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, ne.use = function(m) {
    return y.H.use(m);
  }, ne.useActionState = function(m, T, Y) {
    return y.H.useActionState(m, T, Y);
  }, ne.useCallback = function(m, T) {
    return y.H.useCallback(m, T);
  }, ne.useContext = function(m) {
    return y.H.useContext(m);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(m, T) {
    return y.H.useDeferredValue(m, T);
  }, ne.useEffect = function(m, T) {
    return y.H.useEffect(m, T);
  }, ne.useEffectEvent = function(m) {
    return y.H.useEffectEvent(m);
  }, ne.useId = function() {
    return y.H.useId();
  }, ne.useImperativeHandle = function(m, T, Y) {
    return y.H.useImperativeHandle(m, T, Y);
  }, ne.useInsertionEffect = function(m, T) {
    return y.H.useInsertionEffect(m, T);
  }, ne.useLayoutEffect = function(m, T) {
    return y.H.useLayoutEffect(m, T);
  }, ne.useMemo = function(m, T) {
    return y.H.useMemo(m, T);
  }, ne.useOptimistic = function(m, T) {
    return y.H.useOptimistic(m, T);
  }, ne.useReducer = function(m, T, Y) {
    return y.H.useReducer(m, T, Y);
  }, ne.useRef = function(m) {
    return y.H.useRef(m);
  }, ne.useState = function(m) {
    return y.H.useState(m);
  }, ne.useSyncExternalStore = function(m, T, Y) {
    return y.H.useSyncExternalStore(
      m,
      T,
      Y
    );
  }, ne.useTransition = function() {
    return y.H.useTransition();
  }, ne.version = "19.2.4", ne;
}
var Bd;
function wu() {
  return Bd || (Bd = 1, zu.exports = wh()), zu.exports;
}
var O = wu();
const Dh = /* @__PURE__ */ $d(O);
var Eu = { exports: {} }, Un = {}, Mu = { exports: {} }, Au = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function Oh() {
  return qd || (qd = 1, (function(r) {
    function h(E, p) {
      var G = E.length;
      E.push(p);
      e: for (; 0 < G; ) {
        var re = G - 1 >>> 1, pe = E[re];
        if (0 < w(pe, p))
          E[re] = p, E[G] = pe, G = re;
        else break e;
      }
    }
    function S(E) {
      return E.length === 0 ? null : E[0];
    }
    function f(E) {
      if (E.length === 0) return null;
      var p = E[0], G = E.pop();
      if (G !== p) {
        E[0] = G;
        e: for (var re = 0, pe = E.length, m = pe >>> 1; re < m; ) {
          var T = 2 * (re + 1) - 1, Y = E[T], L = T + 1, le = E[L];
          if (0 > w(Y, G))
            L < pe && 0 > w(le, Y) ? (E[re] = le, E[L] = G, re = L) : (E[re] = Y, E[T] = G, re = T);
          else if (L < pe && 0 > w(le, G))
            E[re] = le, E[L] = G, re = L;
          else break e;
        }
      }
      return p;
    }
    function w(E, p) {
      var G = E.sortIndex - p.sortIndex;
      return G !== 0 ? G : E.id - p.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      r.unstable_now = function() {
        return k.now();
      };
    } else {
      var B = Date, $ = B.now();
      r.unstable_now = function() {
        return B.now() - $;
      };
    }
    var R = [], N = [], D = 1, q = null, Q = 3, V = !1, J = !1, te = !1, se = !1, ue = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    function ae(E) {
      for (var p = S(N); p !== null; ) {
        if (p.callback === null) f(N);
        else if (p.startTime <= E)
          f(N), p.sortIndex = p.expirationTime, h(R, p);
        else break;
        p = S(N);
      }
    }
    function ze(E) {
      if (te = !1, ae(E), !J)
        if (S(R) !== null)
          J = !0, z || (z = !0, de());
        else {
          var p = S(N);
          p !== null && Ae(ze, p.startTime - E);
        }
    }
    var z = !1, y = -1, oe = 5, fe = -1;
    function U() {
      return se ? !0 : !(r.unstable_now() - fe < oe);
    }
    function ee() {
      if (se = !1, z) {
        var E = r.unstable_now();
        fe = E;
        var p = !0;
        try {
          e: {
            J = !1, te && (te = !1, De(y), y = -1), V = !0;
            var G = Q;
            try {
              t: {
                for (ae(E), q = S(R); q !== null && !(q.expirationTime > E && U()); ) {
                  var re = q.callback;
                  if (typeof re == "function") {
                    q.callback = null, Q = q.priorityLevel;
                    var pe = re(
                      q.expirationTime <= E
                    );
                    if (E = r.unstable_now(), typeof pe == "function") {
                      q.callback = pe, ae(E), p = !0;
                      break t;
                    }
                    q === S(R) && f(R), ae(E);
                  } else f(R);
                  q = S(R);
                }
                if (q !== null) p = !0;
                else {
                  var m = S(N);
                  m !== null && Ae(
                    ze,
                    m.startTime - E
                  ), p = !1;
                }
              }
              break e;
            } finally {
              q = null, Q = G, V = !1;
            }
            p = void 0;
          }
        } finally {
          p ? de() : z = !1;
        }
      }
    }
    var de;
    if (typeof A == "function")
      de = function() {
        A(ee);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), Ze = Qe.port2;
      Qe.port1.onmessage = ee, de = function() {
        Ze.postMessage(null);
      };
    } else
      de = function() {
        ue(ee, 0);
      };
    function Ae(E, p) {
      y = ue(function() {
        E(r.unstable_now());
      }, p);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, r.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < E ? Math.floor(1e3 / E) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, r.unstable_next = function(E) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = Q;
      }
      var G = Q;
      Q = p;
      try {
        return E();
      } finally {
        Q = G;
      }
    }, r.unstable_requestPaint = function() {
      se = !0;
    }, r.unstable_runWithPriority = function(E, p) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var G = Q;
      Q = E;
      try {
        return p();
      } finally {
        Q = G;
      }
    }, r.unstable_scheduleCallback = function(E, p, G) {
      var re = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? re + G : re) : G = re, E) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = G + pe, E = {
        id: D++,
        callback: p,
        priorityLevel: E,
        startTime: G,
        expirationTime: pe,
        sortIndex: -1
      }, G > re ? (E.sortIndex = G, h(N, E), S(R) === null && E === S(N) && (te ? (De(y), y = -1) : te = !0, Ae(ze, G - re))) : (E.sortIndex = pe, h(R, E), J || V || (J = !0, z || (z = !0, de()))), E;
    }, r.unstable_shouldYield = U, r.unstable_wrapCallback = function(E) {
      var p = Q;
      return function() {
        var G = Q;
        Q = p;
        try {
          return E.apply(this, arguments);
        } finally {
          Q = G;
        }
      };
    };
  })(Au)), Au;
}
var Yd;
function Uh() {
  return Yd || (Yd = 1, Mu.exports = Oh()), Mu.exports;
}
var _u = { exports: {} }, et = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function Rh() {
  if (Gd) return et;
  Gd = 1;
  var r = wu();
  function h(R) {
    var N = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        N += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + R + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S() {
  }
  var f = {
    d: {
      f: S,
      r: function() {
        throw Error(h(522));
      },
      D: S,
      C: S,
      L: S,
      m: S,
      X: S,
      S,
      M: S
    },
    p: 0,
    findDOMNode: null
  }, w = Symbol.for("react.portal");
  function k(R, N, D) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: w,
      key: q == null ? null : "" + q,
      children: R,
      containerInfo: N,
      implementation: D
    };
  }
  var B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function $(R, N) {
    if (R === "font") return "";
    if (typeof N == "string")
      return N === "use-credentials" ? N : "";
  }
  return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, et.createPortal = function(R, N) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
      throw Error(h(299));
    return k(R, N, null, D);
  }, et.flushSync = function(R) {
    var N = B.T, D = f.p;
    try {
      if (B.T = null, f.p = 2, R) return R();
    } finally {
      B.T = N, f.p = D, f.d.f();
    }
  }, et.preconnect = function(R, N) {
    typeof R == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, f.d.C(R, N));
  }, et.prefetchDNS = function(R) {
    typeof R == "string" && f.d.D(R);
  }, et.preinit = function(R, N) {
    if (typeof R == "string" && N && typeof N.as == "string") {
      var D = N.as, q = $(D, N.crossOrigin), Q = typeof N.integrity == "string" ? N.integrity : void 0, V = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
      D === "style" ? f.d.S(
        R,
        typeof N.precedence == "string" ? N.precedence : void 0,
        {
          crossOrigin: q,
          integrity: Q,
          fetchPriority: V
        }
      ) : D === "script" && f.d.X(R, {
        crossOrigin: q,
        integrity: Q,
        fetchPriority: V,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      });
    }
  }, et.preinitModule = function(R, N) {
    if (typeof R == "string")
      if (typeof N == "object" && N !== null) {
        if (N.as == null || N.as === "script") {
          var D = $(
            N.as,
            N.crossOrigin
          );
          f.d.M(R, {
            crossOrigin: D,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
            nonce: typeof N.nonce == "string" ? N.nonce : void 0
          });
        }
      } else N == null && f.d.M(R);
  }, et.preload = function(R, N) {
    if (typeof R == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
      var D = N.as, q = $(D, N.crossOrigin);
      f.d.L(R, D, {
        crossOrigin: q,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0,
        type: typeof N.type == "string" ? N.type : void 0,
        fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
        referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
        imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
        imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
        media: typeof N.media == "string" ? N.media : void 0
      });
    }
  }, et.preloadModule = function(R, N) {
    if (typeof R == "string")
      if (N) {
        var D = $(N.as, N.crossOrigin);
        f.d.m(R, {
          as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
          crossOrigin: D,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0
        });
      } else f.d.m(R);
  }, et.requestFormReset = function(R) {
    f.d.r(R);
  }, et.unstable_batchedUpdates = function(R, N) {
    return R(N);
  }, et.useFormState = function(R, N, D) {
    return B.H.useFormState(R, N, D);
  }, et.useFormStatus = function() {
    return B.H.useHostTransitionStatus();
  }, et.version = "19.2.4", et;
}
var Ld;
function Hh() {
  if (Ld) return _u.exports;
  Ld = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (h) {
        console.error(h);
      }
  }
  return r(), _u.exports = Rh(), _u.exports;
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
var Xd;
function kh() {
  if (Xd) return Un;
  Xd = 1;
  var r = Uh(), h = wu(), S = Hh();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function w(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function k(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function B(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function $(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (k(e) !== e)
      throw Error(f(188));
  }
  function N(e) {
    var t = e.alternate;
    if (!t) {
      if (t = k(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return R(n), e;
          if (i === l) return R(n), t;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var s = !1, u = n.child; u; ) {
          if (u === a) {
            s = !0, a = n, l = i;
            break;
          }
          if (u === l) {
            s = !0, l = n, a = i;
            break;
          }
          u = u.sibling;
        }
        if (!s) {
          for (u = i.child; u; ) {
            if (u === a) {
              s = !0, a = i, l = n;
              break;
            }
            if (u === l) {
              s = !0, l = i, a = n;
              break;
            }
            u = u.sibling;
          }
          if (!s) throw Error(f(189));
        }
      }
      if (a.alternate !== l) throw Error(f(190));
    }
    if (a.tag !== 3) throw Error(f(188));
    return a.stateNode.current === a ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = D(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var q = Object.assign, Q = Symbol.for("react.element"), V = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), De = Symbol.for("react.consumer"), A = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), U = Symbol.for("react.memo_cache_sentinel"), ee = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = ee && e[ee] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Qe = Symbol.for("react.client.reference");
  function Ze(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Qe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case ue:
        return "Profiler";
      case se:
        return "StrictMode";
      case ze:
        return "Suspense";
      case z:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case J:
          return "Portal";
        case A:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case y:
          return t = e.displayName || null, t !== null ? t : Ze(e.type) || "Memo";
        case oe:
          t = e._payload, e = e._init;
          try {
            return Ze(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ae = Array.isArray, E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], pe = -1;
  function m(e) {
    return { current: e };
  }
  function T(e) {
    0 > pe || (e.current = re[pe], re[pe] = null, pe--);
  }
  function Y(e, t) {
    pe++, re[pe] = e.current, e.current = t;
  }
  var L = m(null), le = m(null), H = m(null), P = m(null);
  function ye(e, t) {
    switch (Y(H, t), Y(le, e), Y(L, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? nd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = nd(t), e = id(t, e);
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
    T(L), Y(L, e);
  }
  function ge() {
    T(L), T(le), T(H);
  }
  function Da(e) {
    e.memoizedState !== null && Y(P, e);
    var t = L.current, a = id(t, e.type);
    t !== a && (Y(le, e), Y(L, a));
  }
  function la(e) {
    le.current === e && (T(L), T(le)), P.current === e && (T(P), Tn._currentValue = G);
  }
  var Pa, qn;
  function Bt(e) {
    if (Pa === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Pa = t && t[1] || "", qn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pa + e + qn;
  }
  var Oa = !1;
  function tt(e, t) {
    if (!e || Oa) return "";
    Oa = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var C = function() {
                throw Error();
              };
              if (Object.defineProperty(C.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, []);
                } catch (j) {
                  var g = j;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (j) {
                  g = j;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                g = j;
              }
              (C = e()) && typeof C.catch == "function" && C.catch(function() {
              });
            }
          } catch (j) {
            if (j && g && typeof j.stack == "string")
              return [j.stack, g.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), s = i[0], u = i[1];
      if (s && u) {
        var o = s.split(`
`), b = u.split(`
`);
        for (n = l = 0; l < o.length && !o[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < b.length && !b[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === o.length || n === b.length)
          for (l = o.length - 1, n = b.length - 1; 1 <= l && 0 <= n && o[l] !== b[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (o[l] !== b[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || o[l] !== b[n]) {
                  var M = `
` + o[l].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Oa = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Bt(a) : "";
  }
  function ql(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Bt(e.type);
      case 16:
        return Bt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Bt("Suspense Fallback") : Bt("Suspense");
      case 19:
        return Bt("SuspenseList");
      case 0:
      case 15:
        return tt(e.type, !1);
      case 11:
        return tt(e.type.render, !1);
      case 1:
        return tt(e.type, !0);
      case 31:
        return Bt("Activity");
      default:
        return "";
    }
  }
  function el(e) {
    try {
      var t = "", a = null;
      do
        t += ql(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var uc = Object.prototype.hasOwnProperty, rc = r.unstable_scheduleCallback, oc = r.unstable_cancelCallback, sm = r.unstable_shouldYield, um = r.unstable_requestPaint, ft = r.unstable_now, rm = r.unstable_getCurrentPriorityLevel, Uu = r.unstable_ImmediatePriority, Ru = r.unstable_UserBlockingPriority, Yn = r.unstable_NormalPriority, om = r.unstable_LowPriority, Hu = r.unstable_IdlePriority, fm = r.log, dm = r.unstable_setDisableYieldValue, Yl = null, dt = null;
  function na(e) {
    if (typeof fm == "function" && dm(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(Yl, e);
      } catch {
      }
  }
  var mt = Math.clz32 ? Math.clz32 : hm, mm = Math.log, vm = Math.LN2;
  function hm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mm(e) / vm | 0) | 0;
  }
  var Gn = 256, Ln = 262144, Xn = 4194304;
  function Ua(e) {
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
  function Qn(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var u = l & 134217727;
    return u !== 0 ? (l = u & ~i, l !== 0 ? n = Ua(l) : (s &= u, s !== 0 ? n = Ua(s) : a || (a = u & ~e, a !== 0 && (n = Ua(a))))) : (u = l & ~i, u !== 0 ? n = Ua(u) : s !== 0 ? n = Ua(s) : a || (a = l & ~e, a !== 0 && (n = Ua(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function Gl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xm(e, t) {
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
  function ku() {
    var e = Xn;
    return Xn <<= 1, (Xn & 62914560) === 0 && (Xn = 4194304), e;
  }
  function fc(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ll(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function bm(e, t, a, l, n, i) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var u = e.entanglements, o = e.expirationTimes, b = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var M = 31 - mt(a), C = 1 << M;
      u[M] = 0, o[M] = -1;
      var g = b[M];
      if (g !== null)
        for (b[M] = null, M = 0; M < g.length; M++) {
          var j = g[M];
          j !== null && (j.lane &= -536870913);
        }
      a &= ~C;
    }
    l !== 0 && Bu(e, l, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Bu(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - mt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function qu(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - mt(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function Yu(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : dc(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function dc(e) {
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
  function mc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Gu() {
    var e = p.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : _d(e.type));
  }
  function Lu(e, t) {
    var a = p.p;
    try {
      return p.p = e, t();
    } finally {
      p.p = a;
    }
  }
  var ia = Math.random().toString(36).slice(2), $e = "__reactFiber$" + ia, lt = "__reactProps$" + ia, tl = "__reactContainer$" + ia, vc = "__reactEvents$" + ia, ym = "__reactListeners$" + ia, pm = "__reactHandles$" + ia, Xu = "__reactResources$" + ia, Xl = "__reactMarker$" + ia;
  function hc(e) {
    delete e[$e], delete e[lt], delete e[vc], delete e[ym], delete e[pm];
  }
  function al(e) {
    var t = e[$e];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[tl] || a[$e]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = dd(e); e !== null; ) {
            if (a = e[$e]) return a;
            e = dd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function ll(e) {
    if (e = e[$e] || e[tl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ql(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function nl(e) {
    var t = e[Xu];
    return t || (t = e[Xu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[Xl] = !0;
  }
  var Qu = /* @__PURE__ */ new Set(), Zu = {};
  function Ra(e, t) {
    il(e, t), il(e + "Capture", t);
  }
  function il(e, t) {
    for (Zu[e] = t, e = 0; e < t.length; e++)
      Qu.add(t[e]);
  }
  var gm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Vu = {}, Ku = {};
  function Nm(e) {
    return uc.call(Ku, e) ? !0 : uc.call(Vu, e) ? !1 : gm.test(e) ? Ku[e] = !0 : (Vu[e] = !0, !1);
  }
  function Zn(e, t, a) {
    if (Nm(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Vn(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function qt(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function Nt(e) {
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
  function Ju(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function jm(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          a = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(s) {
          a = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function xc(e) {
    if (!e._valueTracker) {
      var t = Ju(e) ? "checked" : "value";
      e._valueTracker = jm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function $u(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Ju(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Kn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Sm = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Sm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function bc(e, t, a, l, n, i, s, u) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? yc(e, s, Nt(t)) : a != null ? yc(e, s, Nt(a)) : l != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.name = "" + Nt(u) : e.removeAttribute("name");
  }
  function Wu(e, t, a, l, n, i, s, u) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        xc(e);
        return;
      }
      a = a != null ? "" + Nt(a) : "", t = t != null ? "" + Nt(t) : a, u || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = u ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), xc(e);
  }
  function yc(e, t, a) {
    t === "number" && Kn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function cl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Nt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fu(e, t, a) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Nt(a) : "";
  }
  function Iu(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (Ae(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Nt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), xc(e);
  }
  function sl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Pu(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || zm.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function er(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t)
        l = t[n], t.hasOwnProperty(n) && a[n] !== l && Pu(e, n, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Pu(e, i, t[i]);
  }
  function pc(e) {
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
  var Em = /* @__PURE__ */ new Map([
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
  ]), Mm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jn(e) {
    return Mm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Yt() {
  }
  var gc = null;
  function Nc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ul = null, rl = null;
  function tr(e) {
    var t = ll(e);
    if (t && (e = t.stateNode)) {
      var a = e[lt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (bc(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[lt] || null;
                if (!n) throw Error(f(90));
                bc(
                  l,
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
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && $u(l);
          }
          break e;
        case "textarea":
          Fu(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && cl(e, !!a.multiple, t, !1);
      }
    }
  }
  var jc = !1;
  function ar(e, t, a) {
    if (jc) return e(t, a);
    jc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (jc = !1, (ul !== null || rl !== null) && (Ri(), ul && (t = ul, e = rl, rl = ul = null, tr(t), e)))
        for (t = 0; t < e.length; t++) tr(e[t]);
    }
  }
  function Zl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[lt] || null;
    if (l === null) return null;
    a = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        f(231, t, typeof a)
      );
    return a;
  }
  var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Sc = !1;
  if (Gt)
    try {
      var Vl = {};
      Object.defineProperty(Vl, "passive", {
        get: function() {
          Sc = !0;
        }
      }), window.addEventListener("test", Vl, Vl), window.removeEventListener("test", Vl, Vl);
    } catch {
      Sc = !1;
    }
  var ca = null, zc = null, $n = null;
  function lr() {
    if ($n) return $n;
    var e, t = zc, a = t.length, l, n = "value" in ca ? ca.value : ca.textContent, i = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[i - l]; l++) ;
    return $n = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Wn(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fn() {
    return !0;
  }
  function nr() {
    return !1;
  }
  function nt(e) {
    function t(a, l, n, i, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var u in e)
        e.hasOwnProperty(u) && (a = e[u], this[u] = a ? a(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fn : nr, this.isPropagationStopped = nr, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fn);
      },
      persist: function() {
      },
      isPersistent: Fn
    }), t;
  }
  var Ha = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, In = nt(Ha), Kl = q({}, Ha, { view: 0, detail: 0 }), Am = nt(Kl), Ec, Mc, Jl, Pn = q({}, Kl, {
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
    getModifierState: _c,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Jl && (Jl && e.type === "mousemove" ? (Ec = e.screenX - Jl.screenX, Mc = e.screenY - Jl.screenY) : Mc = Ec = 0, Jl = e), Ec);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Mc;
    }
  }), ir = nt(Pn), _m = q({}, Pn, { dataTransfer: 0 }), Tm = nt(_m), Cm = q({}, Kl, { relatedTarget: 0 }), Ac = nt(Cm), wm = q({}, Ha, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dm = nt(wm), Om = q({}, Ha, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Um = nt(Om), Rm = q({}, Ha, { data: 0 }), cr = nt(Rm), Hm = {
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
  }, km = {
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
  }, Bm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bm[e]) ? !!t[e] : !1;
  }
  function _c() {
    return qm;
  }
  var Ym = q({}, Kl, {
    key: function(e) {
      if (e.key) {
        var t = Hm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Wn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? km[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _c,
    charCode: function(e) {
      return e.type === "keypress" ? Wn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Gm = nt(Ym), Lm = q({}, Pn, {
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
  }), sr = nt(Lm), Xm = q({}, Kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _c
  }), Qm = nt(Xm), Zm = q({}, Ha, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vm = nt(Zm), Km = q({}, Pn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jm = nt(Km), $m = q({}, Ha, {
    newState: 0,
    oldState: 0
  }), Wm = nt($m), Fm = [9, 13, 27, 32], Tc = Gt && "CompositionEvent" in window, $l = null;
  Gt && "documentMode" in document && ($l = document.documentMode);
  var Im = Gt && "TextEvent" in window && !$l, ur = Gt && (!Tc || $l && 8 < $l && 11 >= $l), rr = " ", or = !1;
  function fr(e, t) {
    switch (e) {
      case "keyup":
        return Fm.indexOf(t.keyCode) !== -1;
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
  function dr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ol = !1;
  function Pm(e, t) {
    switch (e) {
      case "compositionend":
        return dr(t);
      case "keypress":
        return t.which !== 32 ? null : (or = !0, rr);
      case "textInput":
        return e = t.data, e === rr && or ? null : e;
      default:
        return null;
    }
  }
  function ev(e, t) {
    if (ol)
      return e === "compositionend" || !Tc && fr(e, t) ? (e = lr(), $n = zc = ca = null, ol = !1, e) : null;
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
        return ur && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tv = {
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
  function mr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tv[e.type] : t === "textarea";
  }
  function vr(e, t, a, l) {
    ul ? rl ? rl.push(l) : rl = [l] : ul = l, t = Li(t, "onChange"), 0 < t.length && (a = new In(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Wl = null, Fl = null;
  function av(e) {
    If(e, 0);
  }
  function ei(e) {
    var t = Ql(e);
    if ($u(t)) return e;
  }
  function hr(e, t) {
    if (e === "change") return t;
  }
  var xr = !1;
  if (Gt) {
    var Cc;
    if (Gt) {
      var wc = "oninput" in document;
      if (!wc) {
        var br = document.createElement("div");
        br.setAttribute("oninput", "return;"), wc = typeof br.oninput == "function";
      }
      Cc = wc;
    } else Cc = !1;
    xr = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function yr() {
    Wl && (Wl.detachEvent("onpropertychange", pr), Fl = Wl = null);
  }
  function pr(e) {
    if (e.propertyName === "value" && ei(Fl)) {
      var t = [];
      vr(
        t,
        Fl,
        e,
        Nc(e)
      ), ar(av, t);
    }
  }
  function lv(e, t, a) {
    e === "focusin" ? (yr(), Wl = t, Fl = a, Wl.attachEvent("onpropertychange", pr)) : e === "focusout" && yr();
  }
  function nv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ei(Fl);
  }
  function iv(e, t) {
    if (e === "click") return ei(t);
  }
  function cv(e, t) {
    if (e === "input" || e === "change")
      return ei(t);
  }
  function sv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : sv;
  function Il(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!uc.call(t, n) || !vt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function gr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nr(e, t) {
    var a = gr(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = gr(a);
    }
  }
  function jr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Sr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Kn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Kn(e.document);
    }
    return t;
  }
  function Dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var uv = Gt && "documentMode" in document && 11 >= document.documentMode, fl = null, Oc = null, Pl = null, Uc = !1;
  function zr(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Uc || fl == null || fl !== Kn(l) || (l = fl, "selectionStart" in l && Dc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Pl && Il(Pl, l) || (Pl = l, l = Li(Oc, "onSelect"), 0 < l.length && (t = new In(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = fl)));
  }
  function ka(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var dl = {
    animationend: ka("Animation", "AnimationEnd"),
    animationiteration: ka("Animation", "AnimationIteration"),
    animationstart: ka("Animation", "AnimationStart"),
    transitionrun: ka("Transition", "TransitionRun"),
    transitionstart: ka("Transition", "TransitionStart"),
    transitioncancel: ka("Transition", "TransitionCancel"),
    transitionend: ka("Transition", "TransitionEnd")
  }, Rc = {}, Er = {};
  Gt && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function Ba(e) {
    if (Rc[e]) return Rc[e];
    if (!dl[e]) return e;
    var t = dl[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Er)
        return Rc[e] = t[a];
    return e;
  }
  var Mr = Ba("animationend"), Ar = Ba("animationiteration"), _r = Ba("animationstart"), rv = Ba("transitionrun"), ov = Ba("transitionstart"), fv = Ba("transitioncancel"), Tr = Ba("transitionend"), Cr = /* @__PURE__ */ new Map(), Hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hc.push("scrollEnd");
  function wt(e, t) {
    Cr.set(e, t), Ra(t, [e]);
  }
  var ti = typeof reportError == "function" ? reportError : function(e) {
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
  }, St = [], ml = 0, kc = 0;
  function ai() {
    for (var e = ml, t = kc = ml = 0; t < e; ) {
      var a = St[t];
      St[t++] = null;
      var l = St[t];
      St[t++] = null;
      var n = St[t];
      St[t++] = null;
      var i = St[t];
      if (St[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      i !== 0 && wr(a, n, i);
    }
  }
  function li(e, t, a, l) {
    St[ml++] = e, St[ml++] = t, St[ml++] = a, St[ml++] = l, kc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Bc(e, t, a, l) {
    return li(e, t, a, l), ni(e);
  }
  function qa(e, t) {
    return li(e, null, null, t), ni(e);
  }
  function wr(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - mt(a), e = i.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), i) : null;
  }
  function ni(e) {
    if (50 < jn)
      throw jn = 0, Ks = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var vl = {};
  function dv(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, a, l) {
    return new dv(e, t, a, l);
  }
  function qc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Lt(e, t) {
    var a = e.alternate;
    return a === null ? (a = ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Dr(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ii(e, t, a, l, n, i) {
    var s = 0;
    if (l = e, typeof e == "function") qc(e) && (s = 1);
    else if (typeof e == "string")
      s = bh(
        e,
        a,
        L.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return e = ht(31, a, t, n), e.elementType = fe, e.lanes = i, e;
        case te:
          return Ya(a.children, n, i, t);
        case se:
          s = 8, n |= 24;
          break;
        case ue:
          return e = ht(12, a, t, n | 2), e.elementType = ue, e.lanes = i, e;
        case ze:
          return e = ht(13, a, t, n), e.elementType = ze, e.lanes = i, e;
        case z:
          return e = ht(19, a, t, n), e.elementType = z, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case A:
                s = 10;
                break e;
              case De:
                s = 9;
                break e;
              case ae:
                s = 11;
                break e;
              case y:
                s = 14;
                break e;
              case oe:
                s = 16, l = null;
                break e;
            }
          s = 29, a = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = ht(s, a, t, n), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function Ya(e, t, a, l) {
    return e = ht(7, e, l, t), e.lanes = a, e;
  }
  function Yc(e, t, a) {
    return e = ht(6, e, null, t), e.lanes = a, e;
  }
  function Or(e) {
    var t = ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Gc(e, t, a) {
    return t = ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ur = /* @__PURE__ */ new WeakMap();
  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Ur.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: el(t)
      }, Ur.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: el(t)
    };
  }
  var hl = [], xl = 0, ci = null, en = 0, Et = [], Mt = 0, sa = null, Ut = 1, Rt = "";
  function Xt(e, t) {
    hl[xl++] = en, hl[xl++] = ci, ci = e, en = t;
  }
  function Rr(e, t, a) {
    Et[Mt++] = Ut, Et[Mt++] = Rt, Et[Mt++] = sa, sa = e;
    var l = Ut;
    e = Rt;
    var n = 32 - mt(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - mt(t) + n;
    if (30 < i) {
      var s = n - n % 5;
      i = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, Ut = 1 << 32 - mt(t) + n | a << n | l, Rt = i + e;
    } else
      Ut = 1 << i | a << n | l, Rt = e;
  }
  function Lc(e) {
    e.return !== null && (Xt(e, 1), Rr(e, 1, 0));
  }
  function Xc(e) {
    for (; e === ci; )
      ci = hl[--xl], hl[xl] = null, en = hl[--xl], hl[xl] = null;
    for (; e === sa; )
      sa = Et[--Mt], Et[Mt] = null, Rt = Et[--Mt], Et[Mt] = null, Ut = Et[--Mt], Et[Mt] = null;
  }
  function Hr(e, t) {
    Et[Mt++] = Ut, Et[Mt++] = Rt, Et[Mt++] = sa, Ut = t.id, Rt = t.overflow, sa = e;
  }
  var We = null, Oe = null, be = !1, ua = null, At = !1, Qc = Error(f(519));
  function ra(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw tn(zt(t, e)), Qc;
  }
  function kr(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[$e] = e, t[lt] = l, a) {
      case "dialog":
        ve("cancel", t), ve("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < zn.length; a++)
          ve(zn[a], t);
        break;
      case "source":
        ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ve("error", t), ve("load", t);
        break;
      case "details":
        ve("toggle", t);
        break;
      case "input":
        ve("invalid", t), Wu(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        ve("invalid", t);
        break;
      case "textarea":
        ve("invalid", t), Iu(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || ad(t.textContent, a) ? (l.popover != null && (ve("beforetoggle", t), ve("toggle", t)), l.onScroll != null && ve("scroll", t), l.onScrollEnd != null && ve("scrollend", t), l.onClick != null && (t.onclick = Yt), t = !0) : t = !1, t || ra(e, !0);
  }
  function Br(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          We = We.return;
      }
  }
  function bl(e) {
    if (e !== We) return !1;
    if (!be) return Br(e), be = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || uu(e.type, e.memoizedProps)), a = !a), a && Oe && ra(e), Br(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Oe = fd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Oe = fd(e);
    } else
      t === 27 ? (t = Oe, Sa(e.type) ? (e = mu, mu = null, Oe = e) : Oe = t) : Oe = We ? Tt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ga() {
    Oe = We = null, be = !1;
  }
  function Zc() {
    var e = ua;
    return e !== null && (ut === null ? ut = e : ut.push.apply(
      ut,
      e
    ), ua = null), e;
  }
  function tn(e) {
    ua === null ? ua = [e] : ua.push(e);
  }
  var Vc = m(null), La = null, Qt = null;
  function oa(e, t, a) {
    Y(Vc, t._currentValue), t._currentValue = a;
  }
  function Zt(e) {
    e._currentValue = Vc.current, T(Vc);
  }
  function Kc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Jc(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var u = i;
          i = n;
          for (var o = 0; o < t.length; o++)
            if (u.context === t[o]) {
              i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Kc(
                i.return,
                a,
                e
              ), l || (s = null);
              break e;
            }
          i = u.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(f(341));
        s.lanes |= a, i = s.alternate, i !== null && (i.lanes |= a), Kc(s, a, e), s = null;
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function yl(e, t, a, l) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(f(387));
        if (s = s.memoizedProps, s !== null) {
          var u = n.type;
          vt(n.pendingProps.value, s.value) || (e !== null ? e.push(u) : e = [u]);
        }
      } else if (n === P.current) {
        if (s = n.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Tn) : e = [Tn]);
      }
      n = n.return;
    }
    e !== null && Jc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function si(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Xa(e) {
    La = e, Qt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Fe(e) {
    return qr(La, e);
  }
  function ui(e, t) {
    return La === null && Xa(e), qr(e, t);
  }
  function qr(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Qt === null) {
      if (e === null) throw Error(f(308));
      Qt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Qt = Qt.next = t;
    return a;
  }
  var mv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, vv = r.unstable_scheduleCallback, hv = r.unstable_NormalPriority, Ye = {
    $$typeof: A,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $c() {
    return {
      controller: new mv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function an(e) {
    e.refCount--, e.refCount === 0 && vv(hv, function() {
      e.controller.abort();
    });
  }
  var ln = null, Wc = 0, pl = 0, gl = null;
  function xv(e, t) {
    if (ln === null) {
      var a = ln = [];
      Wc = 0, pl = Ps(), gl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Wc++, t.then(Yr, Yr), t;
  }
  function Yr() {
    if (--Wc === 0 && ln !== null) {
      gl !== null && (gl.status = "fulfilled");
      var e = ln;
      ln = null, pl = 0, gl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bv(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var n = 0; n < a.length; n++) (0, a[n])(t);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var Gr = E.S;
  E.S = function(e, t) {
    Mf = ft(), typeof t == "object" && t !== null && typeof t.then == "function" && xv(e, t), Gr !== null && Gr(e, t);
  };
  var Qa = m(null);
  function Fc() {
    var e = Qa.current;
    return e !== null ? e : we.pooledCache;
  }
  function ri(e, t) {
    t === null ? Y(Qa, Qa.current) : Y(Qa, t.pool);
  }
  function Lr() {
    var e = Fc();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Nl = Error(f(460)), Ic = Error(f(474)), oi = Error(f(542)), fi = { then: function() {
  } };
  function Xr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Qr(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Yt, Yt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Vr(e), e;
      default:
        if (typeof t.status == "string") t.then(Yt, Yt);
        else {
          if (e = we, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Vr(e), e;
        }
        throw Va = t, Nl;
    }
  }
  function Za(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Va = a, Nl) : a;
    }
  }
  var Va = null;
  function Zr() {
    if (Va === null) throw Error(f(459));
    var e = Va;
    return Va = null, e;
  }
  function Vr(e) {
    if (e === Nl || e === oi)
      throw Error(f(483));
  }
  var jl = null, nn = 0;
  function di(e) {
    var t = nn;
    return nn += 1, jl === null && (jl = []), Qr(jl, e, t);
  }
  function cn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function mi(e, t) {
    throw t.$$typeof === Q ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Kr(e) {
    function t(v, d) {
      if (e) {
        var x = v.deletions;
        x === null ? (v.deletions = [d], v.flags |= 16) : x.push(d);
      }
    }
    function a(v, d) {
      if (!e) return null;
      for (; d !== null; )
        t(v, d), d = d.sibling;
      return null;
    }
    function l(v) {
      for (var d = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? d.set(v.key, v) : d.set(v.index, v), v = v.sibling;
      return d;
    }
    function n(v, d) {
      return v = Lt(v, d), v.index = 0, v.sibling = null, v;
    }
    function i(v, d, x) {
      return v.index = x, e ? (x = v.alternate, x !== null ? (x = x.index, x < d ? (v.flags |= 67108866, d) : x) : (v.flags |= 67108866, d)) : (v.flags |= 1048576, d);
    }
    function s(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function u(v, d, x, _) {
      return d === null || d.tag !== 6 ? (d = Yc(x, v.mode, _), d.return = v, d) : (d = n(d, x), d.return = v, d);
    }
    function o(v, d, x, _) {
      var K = x.type;
      return K === te ? M(
        v,
        d,
        x.props.children,
        _,
        x.key
      ) : d !== null && (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === oe && Za(K) === d.type) ? (d = n(d, x.props), cn(d, x), d.return = v, d) : (d = ii(
        x.type,
        x.key,
        x.props,
        null,
        v.mode,
        _
      ), cn(d, x), d.return = v, d);
    }
    function b(v, d, x, _) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== x.containerInfo || d.stateNode.implementation !== x.implementation ? (d = Gc(x, v.mode, _), d.return = v, d) : (d = n(d, x.children || []), d.return = v, d);
    }
    function M(v, d, x, _, K) {
      return d === null || d.tag !== 7 ? (d = Ya(
        x,
        v.mode,
        _,
        K
      ), d.return = v, d) : (d = n(d, x), d.return = v, d);
    }
    function C(v, d, x) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Yc(
          "" + d,
          v.mode,
          x
        ), d.return = v, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case V:
            return x = ii(
              d.type,
              d.key,
              d.props,
              null,
              v.mode,
              x
            ), cn(x, d), x.return = v, x;
          case J:
            return d = Gc(
              d,
              v.mode,
              x
            ), d.return = v, d;
          case oe:
            return d = Za(d), C(v, d, x);
        }
        if (Ae(d) || de(d))
          return d = Ya(
            d,
            v.mode,
            x,
            null
          ), d.return = v, d;
        if (typeof d.then == "function")
          return C(v, di(d), x);
        if (d.$$typeof === A)
          return C(
            v,
            ui(v, d),
            x
          );
        mi(v, d);
      }
      return null;
    }
    function g(v, d, x, _) {
      var K = d !== null ? d.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return K !== null ? null : u(v, d, "" + x, _);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            return x.key === K ? o(v, d, x, _) : null;
          case J:
            return x.key === K ? b(v, d, x, _) : null;
          case oe:
            return x = Za(x), g(v, d, x, _);
        }
        if (Ae(x) || de(x))
          return K !== null ? null : M(v, d, x, _, null);
        if (typeof x.then == "function")
          return g(
            v,
            d,
            di(x),
            _
          );
        if (x.$$typeof === A)
          return g(
            v,
            d,
            ui(v, x),
            _
          );
        mi(v, x);
      }
      return null;
    }
    function j(v, d, x, _, K) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return v = v.get(x) || null, u(d, v, "" + _, K);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case V:
            return v = v.get(
              _.key === null ? x : _.key
            ) || null, o(d, v, _, K);
          case J:
            return v = v.get(
              _.key === null ? x : _.key
            ) || null, b(d, v, _, K);
          case oe:
            return _ = Za(_), j(
              v,
              d,
              x,
              _,
              K
            );
        }
        if (Ae(_) || de(_))
          return v = v.get(x) || null, M(d, v, _, K, null);
        if (typeof _.then == "function")
          return j(
            v,
            d,
            x,
            di(_),
            K
          );
        if (_.$$typeof === A)
          return j(
            v,
            d,
            x,
            ui(d, _),
            K
          );
        mi(d, _);
      }
      return null;
    }
    function X(v, d, x, _) {
      for (var K = null, Ne = null, Z = d, ce = d = 0, xe = null; Z !== null && ce < x.length; ce++) {
        Z.index > ce ? (xe = Z, Z = null) : xe = Z.sibling;
        var je = g(
          v,
          Z,
          x[ce],
          _
        );
        if (je === null) {
          Z === null && (Z = xe);
          break;
        }
        e && Z && je.alternate === null && t(v, Z), d = i(je, d, ce), Ne === null ? K = je : Ne.sibling = je, Ne = je, Z = xe;
      }
      if (ce === x.length)
        return a(v, Z), be && Xt(v, ce), K;
      if (Z === null) {
        for (; ce < x.length; ce++)
          Z = C(v, x[ce], _), Z !== null && (d = i(
            Z,
            d,
            ce
          ), Ne === null ? K = Z : Ne.sibling = Z, Ne = Z);
        return be && Xt(v, ce), K;
      }
      for (Z = l(Z); ce < x.length; ce++)
        xe = j(
          Z,
          v,
          ce,
          x[ce],
          _
        ), xe !== null && (e && xe.alternate !== null && Z.delete(
          xe.key === null ? ce : xe.key
        ), d = i(
          xe,
          d,
          ce
        ), Ne === null ? K = xe : Ne.sibling = xe, Ne = xe);
      return e && Z.forEach(function(_a) {
        return t(v, _a);
      }), be && Xt(v, ce), K;
    }
    function F(v, d, x, _) {
      if (x == null) throw Error(f(151));
      for (var K = null, Ne = null, Z = d, ce = d = 0, xe = null, je = x.next(); Z !== null && !je.done; ce++, je = x.next()) {
        Z.index > ce ? (xe = Z, Z = null) : xe = Z.sibling;
        var _a = g(v, Z, je.value, _);
        if (_a === null) {
          Z === null && (Z = xe);
          break;
        }
        e && Z && _a.alternate === null && t(v, Z), d = i(_a, d, ce), Ne === null ? K = _a : Ne.sibling = _a, Ne = _a, Z = xe;
      }
      if (je.done)
        return a(v, Z), be && Xt(v, ce), K;
      if (Z === null) {
        for (; !je.done; ce++, je = x.next())
          je = C(v, je.value, _), je !== null && (d = i(je, d, ce), Ne === null ? K = je : Ne.sibling = je, Ne = je);
        return be && Xt(v, ce), K;
      }
      for (Z = l(Z); !je.done; ce++, je = x.next())
        je = j(Z, v, ce, je.value, _), je !== null && (e && je.alternate !== null && Z.delete(je.key === null ? ce : je.key), d = i(je, d, ce), Ne === null ? K = je : Ne.sibling = je, Ne = je);
      return e && Z.forEach(function(_h) {
        return t(v, _h);
      }), be && Xt(v, ce), K;
    }
    function Ce(v, d, x, _) {
      if (typeof x == "object" && x !== null && x.type === te && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            e: {
              for (var K = x.key; d !== null; ) {
                if (d.key === K) {
                  if (K = x.type, K === te) {
                    if (d.tag === 7) {
                      a(
                        v,
                        d.sibling
                      ), _ = n(
                        d,
                        x.props.children
                      ), _.return = v, v = _;
                      break e;
                    }
                  } else if (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === oe && Za(K) === d.type) {
                    a(
                      v,
                      d.sibling
                    ), _ = n(d, x.props), cn(_, x), _.return = v, v = _;
                    break e;
                  }
                  a(v, d);
                  break;
                } else t(v, d);
                d = d.sibling;
              }
              x.type === te ? (_ = Ya(
                x.props.children,
                v.mode,
                _,
                x.key
              ), _.return = v, v = _) : (_ = ii(
                x.type,
                x.key,
                x.props,
                null,
                v.mode,
                _
              ), cn(_, x), _.return = v, v = _);
            }
            return s(v);
          case J:
            e: {
              for (K = x.key; d !== null; ) {
                if (d.key === K)
                  if (d.tag === 4 && d.stateNode.containerInfo === x.containerInfo && d.stateNode.implementation === x.implementation) {
                    a(
                      v,
                      d.sibling
                    ), _ = n(d, x.children || []), _.return = v, v = _;
                    break e;
                  } else {
                    a(v, d);
                    break;
                  }
                else t(v, d);
                d = d.sibling;
              }
              _ = Gc(x, v.mode, _), _.return = v, v = _;
            }
            return s(v);
          case oe:
            return x = Za(x), Ce(
              v,
              d,
              x,
              _
            );
        }
        if (Ae(x))
          return X(
            v,
            d,
            x,
            _
          );
        if (de(x)) {
          if (K = de(x), typeof K != "function") throw Error(f(150));
          return x = K.call(x), F(
            v,
            d,
            x,
            _
          );
        }
        if (typeof x.then == "function")
          return Ce(
            v,
            d,
            di(x),
            _
          );
        if (x.$$typeof === A)
          return Ce(
            v,
            d,
            ui(v, x),
            _
          );
        mi(v, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, d !== null && d.tag === 6 ? (a(v, d.sibling), _ = n(d, x), _.return = v, v = _) : (a(v, d), _ = Yc(x, v.mode, _), _.return = v, v = _), s(v)) : a(v, d);
    }
    return function(v, d, x, _) {
      try {
        nn = 0;
        var K = Ce(
          v,
          d,
          x,
          _
        );
        return jl = null, K;
      } catch (Z) {
        if (Z === Nl || Z === oi) throw Z;
        var Ne = ht(29, Z, null, v.mode);
        return Ne.lanes = _, Ne.return = v, Ne;
      } finally {
      }
    };
  }
  var Ka = Kr(!0), Jr = Kr(!1), fa = !1;
  function Pc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function es(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function da(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Se & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = ni(e), wr(e, null, a), t;
    }
    return li(e, l, t, a), ni(e);
  }
  function sn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, qu(e, a);
    }
  }
  function ts(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var s = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = s : i = i.next = s, a = a.next;
        } while (a !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var as = !1;
  function un() {
    if (as) {
      var e = gl;
      if (e !== null) throw e;
    }
  }
  function rn(e, t, a, l) {
    as = !1;
    var n = e.updateQueue;
    fa = !1;
    var i = n.firstBaseUpdate, s = n.lastBaseUpdate, u = n.shared.pending;
    if (u !== null) {
      n.shared.pending = null;
      var o = u, b = o.next;
      o.next = null, s === null ? i = b : s.next = b, s = o;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, u = M.lastBaseUpdate, u !== s && (u === null ? M.firstBaseUpdate = b : u.next = b, M.lastBaseUpdate = o));
    }
    if (i !== null) {
      var C = n.baseState;
      s = 0, M = b = o = null, u = i;
      do {
        var g = u.lane & -536870913, j = g !== u.lane;
        if (j ? (he & g) === g : (l & g) === g) {
          g !== 0 && g === pl && (as = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, F = u;
            g = t;
            var Ce = a;
            switch (F.tag) {
              case 1:
                if (X = F.payload, typeof X == "function") {
                  C = X.call(Ce, C, g);
                  break e;
                }
                C = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = F.payload, g = typeof X == "function" ? X.call(Ce, C, g) : X, g == null) break e;
                C = q({}, C, g);
                break e;
              case 2:
                fa = !0;
            }
          }
          g = u.callback, g !== null && (e.flags |= 64, j && (e.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [g] : j.push(g));
        } else
          j = {
            lane: g,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          }, M === null ? (b = M = j, o = C) : M = M.next = j, s |= g;
        if (u = u.next, u === null) {
          if (u = n.shared.pending, u === null)
            break;
          j = u, u = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (!0);
      M === null && (o = C), n.baseState = o, n.firstBaseUpdate = b, n.lastBaseUpdate = M, i === null && (n.shared.lanes = 0), ya |= s, e.lanes = s, e.memoizedState = C;
    }
  }
  function $r(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Wr(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        $r(a[e], t);
  }
  var Sl = m(null), vi = m(0);
  function Fr(e, t) {
    e = ea, Y(vi, e), Y(Sl, t), ea = e | t.baseLanes;
  }
  function ls() {
    Y(vi, ea), Y(Sl, Sl.current);
  }
  function ns() {
    ea = vi.current, T(Sl), T(vi);
  }
  var xt = m(null), _t = null;
  function va(e) {
    var t = e.alternate;
    Y(Be, Be.current & 1), Y(xt, e), _t === null && (t === null || Sl.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function is(e) {
    Y(Be, Be.current), Y(xt, e), _t === null && (_t = e);
  }
  function Ir(e) {
    e.tag === 22 ? (Y(Be, Be.current), Y(xt, e), _t === null && (_t = e)) : ha();
  }
  function ha() {
    Y(Be, Be.current), Y(xt, xt.current);
  }
  function bt(e) {
    T(xt), _t === e && (_t = null), T(Be);
  }
  var Be = m(0);
  function hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || fu(a) || du(a)))
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
  var Vt = 0, ie = null, _e = null, Ge = null, xi = !1, zl = !1, Ja = !1, bi = 0, on = 0, El = null, yv = 0;
  function He() {
    throw Error(f(321));
  }
  function cs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!vt(e[a], t[a])) return !1;
    return !0;
  }
  function ss(e, t, a, l, n, i) {
    return Vt = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? Ho : js, Ja = !1, i = a(l, n), Ja = !1, zl && (i = eo(
      t,
      a,
      l,
      n
    )), Pr(e), i;
  }
  function Pr(e) {
    E.H = mn;
    var t = _e !== null && _e.next !== null;
    if (Vt = 0, Ge = _e = ie = null, xi = !1, on = 0, El = null, t) throw Error(f(300));
    e === null || Le || (e = e.dependencies, e !== null && si(e) && (Le = !0));
  }
  function eo(e, t, a, l) {
    ie = e;
    var n = 0;
    do {
      if (zl && (El = null), on = 0, zl = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Ge = _e = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      E.H = ko, i = t(a, l);
    } while (zl);
    return i;
  }
  function pv() {
    var e = E.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? fn(t) : t, e = e.useState()[0], (_e !== null ? _e.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function us() {
    var e = bi !== 0;
    return bi = 0, e;
  }
  function rs(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function os(e) {
    if (xi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      xi = !1;
    }
    Vt = 0, Ge = _e = ie = null, zl = !1, on = bi = 0, El = null;
  }
  function at() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ge === null ? ie.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
  }
  function qe() {
    if (_e === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Ge === null ? ie.memoizedState : Ge.next;
    if (t !== null)
      Ge = t, _e = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(f(467)) : Error(f(310));
      _e = e, e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null
      }, Ge === null ? ie.memoizedState = Ge = e : Ge = Ge.next = e;
    }
    return Ge;
  }
  function yi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fn(e) {
    var t = on;
    return on += 1, El === null && (El = []), e = Qr(El, e, t), t = ie, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? Ho : js), e;
  }
  function pi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fn(e);
      if (e.$$typeof === A) return Fe(e);
    }
    throw Error(f(438, String(e)));
  }
  function fs(e) {
    var t = null, a = ie.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ie.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = yi(), ie.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = U;
    return t.index++, a;
  }
  function Kt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gi(e) {
    var t = qe();
    return ds(t, _e, e);
  }
  function ds(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = i.next, i.next = s;
      }
      t.baseQueue = n = i, l.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var u = s = null, o = null, b = t, M = !1;
      do {
        var C = b.lane & -536870913;
        if (C !== b.lane ? (he & C) === C : (Vt & C) === C) {
          var g = b.revertLane;
          if (g === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), C === pl && (M = !0);
          else if ((Vt & g) === g) {
            b = b.next, g === pl && (M = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, o === null ? (u = o = C, s = i) : o = o.next = C, ie.lanes |= g, ya |= g;
          C = b.action, Ja && a(i, C), i = b.hasEagerState ? b.eagerState : a(i, C);
        } else
          g = {
            lane: C,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, o === null ? (u = o = g, s = i) : o = o.next = g, ie.lanes |= C, ya |= C;
        b = b.next;
      } while (b !== null && b !== t);
      if (o === null ? s = i : o.next = u, !vt(i, e.memoizedState) && (Le = !0, M && (a = gl, a !== null)))
        throw a;
      e.memoizedState = i, e.baseState = s, e.baseQueue = o, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function ms(e) {
    var t = qe(), a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, i = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var s = n = n.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== n);
      vt(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function to(e, t, a) {
    var l = ie, n = qe(), i = be;
    if (i) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var s = !vt(
      (_e || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, Le = !0), n = n.queue, xs(no.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || s || Ge !== null && Ge.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ml(
        9,
        { destroy: void 0 },
        lo.bind(
          null,
          l,
          n,
          a,
          t
        ),
        null
      ), we === null) throw Error(f(349));
      i || (Vt & 127) !== 0 || ao(l, t, a);
    }
    return a;
  }
  function ao(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ie.updateQueue, t === null ? (t = yi(), ie.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function lo(e, t, a, l) {
    t.value = a, t.getSnapshot = l, io(t) && co(e);
  }
  function no(e, t, a) {
    return a(function() {
      io(t) && co(e);
    });
  }
  function io(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !vt(e, a);
    } catch {
      return !0;
    }
  }
  function co(e) {
    var t = qa(e, 2);
    t !== null && rt(t, e, 2);
  }
  function vs(e) {
    var t = at();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ja) {
        na(!0);
        try {
          a();
        } finally {
          na(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: e
    }, t;
  }
  function so(e, t, a, l) {
    return e.baseState = a, ds(
      e,
      _e,
      typeof l == "function" ? l : Kt
    );
  }
  function gv(e, t, a, l, n) {
    if (Si(e)) throw Error(f(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      E.T !== null ? a(!0) : i.isTransition = !1, l(i), a = t.pending, a === null ? (i.next = t.pending = i, uo(t, i)) : (i.next = a.next, t.pending = a.next = i);
    }
  }
  function uo(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var i = E.T, s = {};
      E.T = s;
      try {
        var u = a(n, l), o = E.S;
        o !== null && o(s, u), ro(e, t, u);
      } catch (b) {
        hs(e, t, b);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), E.T = i;
      }
    } else
      try {
        i = a(n, l), ro(e, t, i);
      } catch (b) {
        hs(e, t, b);
      }
  }
  function ro(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        oo(e, t, l);
      },
      function(l) {
        return hs(e, t, l);
      }
    ) : oo(e, t, a);
  }
  function oo(e, t, a) {
    t.status = "fulfilled", t.value = a, fo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, uo(e, a)));
  }
  function hs(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, fo(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function fo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function mo(e, t) {
    return t;
  }
  function vo(e, t) {
    if (be) {
      var a = we.formState;
      if (a !== null) {
        e: {
          var l = ie;
          if (be) {
            if (Oe) {
              t: {
                for (var n = Oe, i = At; n.nodeType !== 8; ) {
                  if (!i) {
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
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Oe = Tt(
                  n.nextSibling
                ), l = n.data === "F!";
                break e;
              }
            }
            ra(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = at(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: t
    }, a.queue = l, a = Oo.bind(
      null,
      ie,
      l
    ), l.dispatch = a, l = vs(!1), i = Ns.bind(
      null,
      ie,
      !1,
      l.queue
    ), l = at(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = gv.bind(
      null,
      ie,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function ho(e) {
    var t = qe();
    return xo(t, _e, e);
  }
  function xo(e, t, a) {
    if (t = ds(
      e,
      t,
      mo
    )[0], e = gi(Kt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = fn(t);
      } catch (s) {
        throw s === Nl ? oi : s;
      }
    else l = t;
    t = qe();
    var n = t.queue, i = n.dispatch;
    return a !== t.memoizedState && (ie.flags |= 2048, Ml(
      9,
      { destroy: void 0 },
      Nv.bind(null, n, a),
      null
    )), [l, i, e];
  }
  function Nv(e, t) {
    e.action = t;
  }
  function bo(e) {
    var t = qe(), a = _e;
    if (a !== null)
      return xo(t, a, e);
    qe(), t = t.memoizedState, a = qe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function Ml(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ie.updateQueue, t === null && (t = yi(), ie.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function yo() {
    return qe().memoizedState;
  }
  function Ni(e, t, a, l) {
    var n = at();
    ie.flags |= e, n.memoizedState = Ml(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function ji(e, t, a, l) {
    var n = qe();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    _e !== null && l !== null && cs(l, _e.memoizedState.deps) ? n.memoizedState = Ml(t, i, a, l) : (ie.flags |= e, n.memoizedState = Ml(
      1 | t,
      i,
      a,
      l
    ));
  }
  function po(e, t) {
    Ni(8390656, 8, e, t);
  }
  function xs(e, t) {
    ji(2048, 8, e, t);
  }
  function jv(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = yi(), ie.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function go(e) {
    var t = qe().memoizedState;
    return jv({ ref: t, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function No(e, t) {
    return ji(4, 2, e, t);
  }
  function jo(e, t) {
    return ji(4, 4, e, t);
  }
  function So(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function zo(e, t, a) {
    a = a != null ? a.concat([e]) : null, ji(4, 4, So.bind(null, t, e), a);
  }
  function bs() {
  }
  function Eo(e, t) {
    var a = qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && cs(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Mo(e, t) {
    var a = qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && cs(t, l[1]))
      return l[0];
    if (l = e(), Ja) {
      na(!0);
      try {
        e();
      } finally {
        na(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function ys(e, t, a) {
    return a === void 0 || (Vt & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = _f(), ie.lanes |= e, ya |= e, a);
  }
  function Ao(e, t, a, l) {
    return vt(a, t) ? a : Sl.current !== null ? (e = ys(e, a, l), vt(e, t) || (Le = !0), e) : (Vt & 42) === 0 || (Vt & 1073741824) !== 0 && (he & 261930) === 0 ? (Le = !0, e.memoizedState = a) : (e = _f(), ie.lanes |= e, ya |= e, t);
  }
  function _o(e, t, a, l, n) {
    var i = p.p;
    p.p = i !== 0 && 8 > i ? i : 8;
    var s = E.T, u = {};
    E.T = u, Ns(e, !1, t, a);
    try {
      var o = n(), b = E.S;
      if (b !== null && b(u, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var M = bv(
          o,
          l
        );
        dn(
          e,
          t,
          M,
          gt(e)
        );
      } else
        dn(
          e,
          t,
          l,
          gt(e)
        );
    } catch (C) {
      dn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: C },
        gt()
      );
    } finally {
      p.p = i, s !== null && u.types !== null && (s.types = u.types), E.T = s;
    }
  }
  function Sv() {
  }
  function ps(e, t, a, l) {
    if (e.tag !== 5) throw Error(f(476));
    var n = To(e).queue;
    _o(
      e,
      n,
      t,
      G,
      a === null ? Sv : function() {
        return Co(e), a(l);
      }
    );
  }
  function To(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: G
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Co(e) {
    var t = To(e);
    t.next === null && (t = e.alternate.memoizedState), dn(
      e,
      t.next.queue,
      {},
      gt()
    );
  }
  function gs() {
    return Fe(Tn);
  }
  function wo() {
    return qe().memoizedState;
  }
  function Do() {
    return qe().memoizedState;
  }
  function zv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = gt();
          e = da(a);
          var l = ma(t, e, a);
          l !== null && (rt(l, t, a), sn(l, t, a)), t = { cache: $c() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ev(e, t, a) {
    var l = gt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Si(e) ? Uo(t, a) : (a = Bc(e, t, a, l), a !== null && (rt(a, e, l), Ro(a, t, l)));
  }
  function Oo(e, t, a) {
    var l = gt();
    dn(e, t, a, l);
  }
  function dn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Si(e)) Uo(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, u = i(s, a);
          if (n.hasEagerState = !0, n.eagerState = u, vt(u, s))
            return li(e, t, n, 0), we === null && ai(), !1;
        } catch {
        } finally {
        }
      if (a = Bc(e, t, n, l), a !== null)
        return rt(a, e, l), Ro(a, t, l), !0;
    }
    return !1;
  }
  function Ns(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ps(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Si(e)) {
      if (t) throw Error(f(479));
    } else
      t = Bc(
        e,
        a,
        l,
        2
      ), t !== null && rt(t, e, 2);
  }
  function Si(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Uo(e, t) {
    zl = xi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Ro(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, qu(e, a);
    }
  }
  var mn = {
    readContext: Fe,
    use: pi,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He
  };
  mn.useEffectEvent = He;
  var Ho = {
    readContext: Fe,
    use: pi,
    useCallback: function(e, t) {
      return at().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Fe,
    useEffect: po,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Ni(
        4194308,
        4,
        So.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Ni(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ni(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = at();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ja) {
        na(!0);
        try {
          e();
        } finally {
          na(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = at();
      if (a !== void 0) {
        var n = a(t);
        if (Ja) {
          na(!0);
          try {
            a(t);
          } finally {
            na(!1);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = Ev.bind(
        null,
        ie,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = at();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = vs(e);
      var t = e.queue, a = Oo.bind(null, ie, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: bs,
    useDeferredValue: function(e, t) {
      var a = at();
      return ys(a, e, t);
    },
    useTransition: function() {
      var e = vs(!1);
      return e = _o.bind(
        null,
        ie,
        e.queue,
        !0,
        !1
      ), at().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = ie, n = at();
      if (be) {
        if (a === void 0)
          throw Error(f(407));
        a = a();
      } else {
        if (a = t(), we === null)
          throw Error(f(349));
        (he & 127) !== 0 || ao(l, t, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: t };
      return n.queue = i, po(no.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, Ml(
        9,
        { destroy: void 0 },
        lo.bind(
          null,
          l,
          i,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = at(), t = we.identifierPrefix;
      if (be) {
        var a = Rt, l = Ut;
        a = (l & ~(1 << 32 - mt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = bi++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = yv++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: gs,
    useFormState: vo,
    useActionState: vo,
    useOptimistic: function(e) {
      var t = at();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ns.bind(
        null,
        ie,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: fs,
    useCacheRefresh: function() {
      return at().memoizedState = zv.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = at(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Se & 2) !== 0)
          throw Error(f(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, js = {
    readContext: Fe,
    use: pi,
    useCallback: Eo,
    useContext: Fe,
    useEffect: xs,
    useImperativeHandle: zo,
    useInsertionEffect: No,
    useLayoutEffect: jo,
    useMemo: Mo,
    useReducer: gi,
    useRef: yo,
    useState: function() {
      return gi(Kt);
    },
    useDebugValue: bs,
    useDeferredValue: function(e, t) {
      var a = qe();
      return Ao(
        a,
        _e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = gi(Kt)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : fn(e),
        t
      ];
    },
    useSyncExternalStore: to,
    useId: wo,
    useHostTransitionStatus: gs,
    useFormState: ho,
    useActionState: ho,
    useOptimistic: function(e, t) {
      var a = qe();
      return so(a, _e, e, t);
    },
    useMemoCache: fs,
    useCacheRefresh: Do
  };
  js.useEffectEvent = go;
  var ko = {
    readContext: Fe,
    use: pi,
    useCallback: Eo,
    useContext: Fe,
    useEffect: xs,
    useImperativeHandle: zo,
    useInsertionEffect: No,
    useLayoutEffect: jo,
    useMemo: Mo,
    useReducer: ms,
    useRef: yo,
    useState: function() {
      return ms(Kt);
    },
    useDebugValue: bs,
    useDeferredValue: function(e, t) {
      var a = qe();
      return _e === null ? ys(a, e, t) : Ao(
        a,
        _e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ms(Kt)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : fn(e),
        t
      ];
    },
    useSyncExternalStore: to,
    useId: wo,
    useHostTransitionStatus: gs,
    useFormState: bo,
    useActionState: bo,
    useOptimistic: function(e, t) {
      var a = qe();
      return _e !== null ? so(a, _e, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: fs,
    useCacheRefresh: Do
  };
  ko.useEffectEvent = go;
  function Ss(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : q({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var zs = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = gt(), n = da(l);
      n.payload = t, a != null && (n.callback = a), t = ma(e, n, l), t !== null && (rt(t, e, l), sn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = gt(), n = da(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = ma(e, n, l), t !== null && (rt(t, e, l), sn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = gt(), l = da(a);
      l.tag = 2, t != null && (l.callback = t), t = ma(e, l, a), t !== null && (rt(t, e, a), sn(t, e, a));
    }
  };
  function Bo(e, t, a, l, n, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Il(a, l) || !Il(n, i) : !0;
  }
  function qo(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && zs.enqueueReplaceState(t, t.state, null);
  }
  function $a(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = q({}, a));
      for (var n in e)
        a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  function Yo(e) {
    ti(e);
  }
  function Go(e) {
    console.error(e);
  }
  function Lo(e) {
    ti(e);
  }
  function zi(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Xo(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Es(e, t, a) {
    return a = da(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      zi(e, t);
    }, a;
  }
  function Qo(e) {
    return e = da(e), e.tag = 3, e;
  }
  function Zo(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        Xo(t, a, l);
      };
    }
    var s = a.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      Xo(t, a, l), typeof n != "function" && (pa === null ? pa = /* @__PURE__ */ new Set([this]) : pa.add(this));
      var u = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: u !== null ? u : ""
      });
    });
  }
  function Mv(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && yl(
        t,
        a,
        n,
        !0
      ), a = xt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return _t === null ? Hi() : a.alternate === null && ke === 0 && (ke = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === fi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Ws(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === fi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Ws(e, l, n)), !1;
        }
        throw Error(f(435, a.tag));
      }
      return Ws(e, l, n), Hi(), !1;
    }
    if (be)
      return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== Qc && (e = Error(f(422), { cause: l }), tn(zt(e, a)))) : (l !== Qc && (t = Error(f(423), {
        cause: l
      }), tn(
        zt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = zt(l, a), n = Es(
        e.stateNode,
        l,
        n
      ), ts(e, n), ke !== 4 && (ke = 2)), !1;
    var i = Error(f(520), { cause: l });
    if (i = zt(i, a), Nn === null ? Nn = [i] : Nn.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    l = zt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Es(a.stateNode, l, e), ts(a, e), !1;
        case 1:
          if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (pa === null || !pa.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Qo(n), Zo(
              n,
              e,
              a,
              l
            ), ts(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ms = Error(f(461)), Le = !1;
  function Ie(e, t, a, l) {
    t.child = e === null ? Jr(t, null, a, l) : Ka(
      t,
      e.child,
      a,
      l
    );
  }
  function Vo(e, t, a, l, n) {
    a = a.render;
    var i = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var u in l)
        u !== "ref" && (s[u] = l[u]);
    } else s = l;
    return Xa(t), l = ss(
      e,
      t,
      a,
      s,
      i,
      n
    ), u = us(), e !== null && !Le ? (rs(e, t, n), Jt(e, t, n)) : (be && u && Lc(t), t.flags |= 1, Ie(e, t, l, n), t.child);
  }
  function Ko(e, t, a, l, n) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" && !qc(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, Jo(
        e,
        t,
        i,
        l,
        n
      )) : (e = ii(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Us(e, n)) {
      var s = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Il, a(s, l) && e.ref === t.ref)
        return Jt(e, t, n);
    }
    return t.flags |= 1, e = Lt(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jo(e, t, a, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Il(i, l) && e.ref === t.ref)
        if (Le = !1, t.pendingProps = l = i, Us(e, n))
          (e.flags & 131072) !== 0 && (Le = !0);
        else
          return t.lanes = e.lanes, Jt(e, t, n);
    }
    return As(
      e,
      t,
      a,
      l,
      n
    );
  }
  function $o(e, t, a, l) {
    var n = l.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~i;
        } else l = 0, t.child = null;
        return Wo(
          e,
          t,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ri(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Fr(t, i) : ls(), Ir(t);
      else
        return l = t.lanes = 536870912, Wo(
          e,
          t,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (ri(t, i.cachePool), Fr(t, i), ha(), t.memoizedState = null) : (e !== null && ri(t, null), ls(), ha());
    return Ie(e, t, n, a), t.child;
  }
  function vn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Wo(e, t, a, l, n) {
    var i = Fc();
    return i = i === null ? null : { parent: Ye._currentValue, pool: i }, t.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, e !== null && ri(t, null), ls(), Ir(t), e !== null && yl(e, t, l, !0), t.childLanes = n, null;
  }
  function Ei(e, t) {
    return t = Ai(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Fo(e, t, a) {
    return Ka(t, e.child, null, a), e = Ei(t, t.pendingProps), e.flags |= 2, bt(t), t.memoizedState = null, e;
  }
  function Av(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (l.mode === "hidden")
          return e = Ei(t, l), t.lanes = 536870912, vn(null, e);
        if (is(t), (e = Oe) ? (e = od(
          e,
          At
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: sa !== null ? { id: Ut, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Or(e), a.return = t, t.child = a, We = t, Oe = null)) : e = null, e === null) throw ra(t);
        return t.lanes = 536870912, null;
      }
      return Ei(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (is(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Fo(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Le || yl(e, t, a, !1), n = (a & e.childLanes) !== 0, Le || n) {
        if (l = we, l !== null && (s = Yu(l, a), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, qa(e, s), rt(l, e, s), Ms;
        Hi(), t = Fo(
          e,
          t,
          a
        );
      } else
        e = i.treeContext, Oe = Tt(s.nextSibling), We = t, be = !0, ua = null, At = !1, e !== null && Hr(t, e), t = Ei(t, l), t.flags |= 4096;
      return t;
    }
    return e = Lt(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Mi(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(f(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function As(e, t, a, l, n) {
    return Xa(t), a = ss(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = us(), e !== null && !Le ? (rs(e, t, n), Jt(e, t, n)) : (be && l && Lc(t), t.flags |= 1, Ie(e, t, a, n), t.child);
  }
  function Io(e, t, a, l, n, i) {
    return Xa(t), t.updateQueue = null, a = eo(
      t,
      l,
      a,
      n
    ), Pr(e), l = us(), e !== null && !Le ? (rs(e, t, i), Jt(e, t, i)) : (be && l && Lc(t), t.flags |= 1, Ie(e, t, a, i), t.child);
  }
  function Po(e, t, a, l, n) {
    if (Xa(t), t.stateNode === null) {
      var i = vl, s = a.contextType;
      typeof s == "object" && s !== null && (i = Fe(s)), i = new a(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = zs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Pc(t), s = a.contextType, i.context = typeof s == "object" && s !== null ? Fe(s) : vl, i.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Ss(
        t,
        a,
        s,
        l
      ), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && zs.enqueueReplaceState(i, i.state, null), rn(t, l, i, n), un(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var u = t.memoizedProps, o = $a(a, u);
      i.props = o;
      var b = i.context, M = a.contextType;
      s = vl, typeof M == "object" && M !== null && (s = Fe(M));
      var C = a.getDerivedStateFromProps;
      M = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u || b !== s) && qo(
        t,
        i,
        l,
        s
      ), fa = !1;
      var g = t.memoizedState;
      i.state = g, rn(t, l, i, n), un(), b = t.memoizedState, u || g !== b || fa ? (typeof C == "function" && (Ss(
        t,
        a,
        C,
        l
      ), b = t.memoizedState), (o = fa || Bo(
        t,
        a,
        o,
        l,
        g,
        b,
        s
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = b), i.props = l, i.state = b, i.context = s, l = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, es(e, t), s = t.memoizedProps, M = $a(a, s), i.props = M, C = t.pendingProps, g = i.context, b = a.contextType, o = vl, typeof b == "object" && b !== null && (o = Fe(b)), u = a.getDerivedStateFromProps, (b = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== C || g !== o) && qo(
        t,
        i,
        l,
        o
      ), fa = !1, g = t.memoizedState, i.state = g, rn(t, l, i, n), un();
      var j = t.memoizedState;
      s !== C || g !== j || fa || e !== null && e.dependencies !== null && si(e.dependencies) ? (typeof u == "function" && (Ss(
        t,
        a,
        u,
        l
      ), j = t.memoizedState), (M = fa || Bo(
        t,
        a,
        M,
        l,
        g,
        j,
        o
      ) || e !== null && e.dependencies !== null && si(e.dependencies)) ? (b || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, j, o), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        j,
        o
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), i.props = l, i.state = j, i.context = o, l = M) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, Mi(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = Ka(
      t,
      e.child,
      null,
      n
    ), t.child = Ka(
      t,
      null,
      a,
      n
    )) : Ie(e, t, a, n), t.memoizedState = i.state, e = t.child) : e = Jt(
      e,
      t,
      n
    ), e;
  }
  function ef(e, t, a, l) {
    return Ga(), t.flags |= 256, Ie(e, t, a, l), t.child;
  }
  var _s = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ts(e) {
    return { baseLanes: e, cachePool: Lr() };
  }
  function Cs(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= pt), e;
  }
  function tf(e, t, a) {
    var l = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Be.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (n ? va(t) : ha(), (e = Oe) ? (e = od(
          e,
          At
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: sa !== null ? { id: Ut, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Or(e), a.return = t, t.child = a, We = t, Oe = null)) : e = null, e === null) throw ra(t);
        return du(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var u = l.children;
      return l = l.fallback, n ? (ha(), n = t.mode, u = Ai(
        { mode: "hidden", children: u },
        n
      ), l = Ya(
        l,
        n,
        a,
        null
      ), u.return = t, l.return = t, u.sibling = l, t.child = u, l = t.child, l.memoizedState = Ts(a), l.childLanes = Cs(
        e,
        s,
        a
      ), t.memoizedState = _s, vn(null, l)) : (va(t), ws(t, u));
    }
    var o = e.memoizedState;
    if (o !== null && (u = o.dehydrated, u !== null)) {
      if (i)
        t.flags & 256 ? (va(t), t.flags &= -257, t = Ds(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (ha(), t.child = e.child, t.flags |= 128, t = null) : (ha(), u = l.fallback, n = t.mode, l = Ai(
          { mode: "visible", children: l.children },
          n
        ), u = Ya(
          u,
          n,
          a,
          null
        ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, Ka(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Ts(a), l.childLanes = Cs(
          e,
          s,
          a
        ), t.memoizedState = _s, t = vn(null, l));
      else if (va(t), du(u)) {
        if (s = u.nextSibling && u.nextSibling.dataset, s) var b = s.dgst;
        s = b, l = Error(f(419)), l.stack = "", l.digest = s, tn({ value: l, source: null, stack: null }), t = Ds(
          e,
          t,
          a
        );
      } else if (Le || yl(e, t, a, !1), s = (a & e.childLanes) !== 0, Le || s) {
        if (s = we, s !== null && (l = Yu(s, a), l !== 0 && l !== o.retryLane))
          throw o.retryLane = l, qa(e, l), rt(s, e, l), Ms;
        fu(u) || Hi(), t = Ds(
          e,
          t,
          a
        );
      } else
        fu(u) ? (t.flags |= 192, t.child = e.child, t = null) : (e = o.treeContext, Oe = Tt(
          u.nextSibling
        ), We = t, be = !0, ua = null, At = !1, e !== null && Hr(t, e), t = ws(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (ha(), u = l.fallback, n = t.mode, o = e.child, b = o.sibling, l = Lt(o, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = o.subtreeFlags & 65011712, b !== null ? u = Lt(
      b,
      u
    ) : (u = Ya(
      u,
      n,
      a,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, vn(null, l), l = t.child, u = e.child.memoizedState, u === null ? u = Ts(a) : (n = u.cachePool, n !== null ? (o = Ye._currentValue, n = n.parent !== o ? { parent: o, pool: o } : n) : n = Lr(), u = {
      baseLanes: u.baseLanes | a,
      cachePool: n
    }), l.memoizedState = u, l.childLanes = Cs(
      e,
      s,
      a
    ), t.memoizedState = _s, vn(e.child, l)) : (va(t), a = e.child, e = a.sibling, a = Lt(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ws(e, t) {
    return t = Ai(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ai(e, t) {
    return e = ht(22, e, null, t), e.lanes = 0, e;
  }
  function Ds(e, t, a) {
    return Ka(t, e.child, null, a), e = ws(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function af(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Kc(e.return, t, a);
  }
  function Os(e, t, a, l, n, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n, s.treeForkCount = i);
  }
  function lf(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var s = Be.current, u = (s & 2) !== 0;
    if (u ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, Y(Be, s), Ie(e, t, l, a), l = be ? en : 0, !u && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && af(e, a, t);
        else if (e.tag === 19)
          af(e, a, t);
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
        for (a = t.child, n = null; a !== null; )
          e = a.alternate, e !== null && hi(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), Os(
          t,
          !1,
          n,
          a,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && hi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        Os(
          t,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        Os(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jt(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), ya |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (yl(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, a = Lt(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Lt(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Us(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && si(e)));
  }
  function _v(e, t, a) {
    switch (t.tag) {
      case 3:
        ye(t, t.stateNode.containerInfo), oa(t, Ye, e.memoizedState.cache), Ga();
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        oa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, is(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (va(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? tf(e, t, a) : (va(t), e = Jt(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        va(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (yl(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), n) {
          if (l)
            return lf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(Be, Be.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, $o(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        oa(t, Ye, e.memoizedState.cache);
    }
    return Jt(e, t, a);
  }
  function nf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Le = !0;
      else {
        if (!Us(e, a) && (t.flags & 128) === 0)
          return Le = !1, _v(
            e,
            t,
            a
          );
        Le = (e.flags & 131072) !== 0;
      }
    else
      Le = !1, be && (t.flags & 1048576) !== 0 && Rr(t, en, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Za(t.elementType), t.type = e, typeof e == "function")
            qc(e) ? (l = $a(e, l), t.tag = 1, t = Po(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = As(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ae) {
                t.tag = 11, t = Vo(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === y) {
                t.tag = 14, t = Ko(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Ze(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return As(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = $a(
          l,
          t.pendingProps
        ), Po(
          e,
          t,
          l,
          n,
          a
        );
      case 3:
        e: {
          if (ye(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, es(e, t), rn(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, oa(t, Ye, l), l !== i.cache && Jc(
            t,
            [Ye],
            a,
            !0
          ), un(), l = s.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = ef(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== n) {
              n = zt(
                Error(f(424)),
                t
              ), tn(n), t = ef(
                e,
                t,
                l,
                a
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
              for (Oe = Tt(e.firstChild), We = t, be = !0, ua = null, At = !0, a = Jr(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ga(), l === n) {
              t = Jt(
                e,
                t,
                a
              );
              break e;
            }
            Ie(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Mi(e, t), e === null ? (a = xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : be || (a = t.type, e = t.pendingProps, l = Xi(
          H.current
        ).createElement(a), l[$e] = t, l[lt] = e, Pe(l, a, e), Ke(l), t.stateNode = l) : t.memoizedState = xd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Da(t), e === null && be && (l = t.stateNode = md(
          t.type,
          t.pendingProps,
          H.current
        ), We = t, At = !0, n = Oe, Sa(t.type) ? (mu = n, Oe = Tt(l.firstChild)) : Oe = n), Ie(
          e,
          t,
          t.pendingProps.children,
          a
        ), Mi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((n = l = Oe) && (l = nh(
          l,
          t.type,
          t.pendingProps,
          At
        ), l !== null ? (t.stateNode = l, We = t, Oe = Tt(l.firstChild), At = !1, n = !0) : n = !1), n || ra(t)), Da(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = i.children, uu(n, i) ? l = null : s !== null && uu(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = ss(
          e,
          t,
          pv,
          null,
          null,
          a
        ), Tn._currentValue = n), Mi(e, t), Ie(e, t, l, a), t.child;
      case 6:
        return e === null && be && ((e = a = Oe) && (a = ih(
          a,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, We = t, Oe = null, e = !0) : e = !1), e || ra(t)), null;
      case 13:
        return tf(e, t, a);
      case 4:
        return ye(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Ka(
          t,
          null,
          l,
          a
        ) : Ie(e, t, l, a), t.child;
      case 11:
        return Vo(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Ie(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, oa(t, t.type, l.value), Ie(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, Xa(t), n = Fe(n), l = l(n), t.flags |= 1, Ie(e, t, l, a), t.child;
      case 14:
        return Ko(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Jo(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return lf(e, t, a);
      case 31:
        return Av(e, t, a);
      case 22:
        return $o(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Xa(t), l = Fe(Ye), e === null ? (n = Fc(), n === null && (n = we, i = $c(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), t.memoizedState = { parent: l, cache: n }, Pc(t), oa(t, Ye, n)) : ((e.lanes & a) !== 0 && (es(e, t), rn(t, null, null, a), un()), n = e.memoizedState, i = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), oa(t, Ye, l)) : (l = i.cache, oa(t, Ye, l), l !== n.cache && Jc(
          t,
          [Ye],
          a,
          !0
        ))), Ie(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function $t(e) {
    e.flags |= 4;
  }
  function Rs(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Df()) e.flags |= 8192;
        else
          throw Va = fi, Ic;
    } else e.flags &= -16777217;
  }
  function cf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Nd(t))
      if (Df()) e.flags |= 8192;
      else
        throw Va = fi, Ic;
  }
  function _i(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ku() : 536870912, e.lanes |= t, Cl |= t);
  }
  function hn(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Tv(e, t, a) {
    var l = t.pendingProps;
    switch (Xc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Zt(Ye), ge(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (bl(t) ? $t(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Zc())), Ue(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? ($t(t), i !== null ? (Ue(t), cf(t, i)) : (Ue(t), Rs(
          t,
          n,
          null,
          l,
          a
        ))) : i ? i !== e.memoizedState ? ($t(t), Ue(t), cf(t, i)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && $t(t), Ue(t), Rs(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (la(t), a = H.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && $t(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ue(t), null;
          }
          e = L.current, bl(t) ? kr(t) : (e = md(n, l, a), t.stateNode = e, $t(t));
        }
        return Ue(t), null;
      case 5:
        if (la(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && $t(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ue(t), null;
          }
          if (i = L.current, bl(t))
            kr(t);
          else {
            var s = Xi(
              H.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? s.createElement(n, { is: l.is }) : s.createElement(n);
                }
            }
            i[$e] = t, i[lt] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = i;
            e: switch (Pe(i, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && $t(t);
          }
        }
        return Ue(t), Rs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && $t(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = H.current, bl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = We, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[$e] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || ad(e.nodeValue, a)), e || ra(t, !0);
          } else
            e = Xi(e).createTextNode(
              l
            ), e[$e] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = bl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[$e] = t;
            } else
              Ga(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            a = Zc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (bt(t), t) : (bt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Ue(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = bl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[$e] = t;
            } else
              Ga(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), n = !1;
          } else
            n = Zc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (bt(t), t) : (bt(t), null);
        }
        return bt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), _i(t, t.updateQueue), Ue(t), null);
      case 4:
        return ge(), e === null && lu(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Zt(t.type), Ue(t), null;
      case 19:
        if (T(Be), l = t.memoizedState, l === null) return Ue(t), null;
        if (n = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) hn(l, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = hi(e), i !== null) {
                  for (t.flags |= 128, hn(l, !1), e = i.updateQueue, t.updateQueue = e, _i(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Dr(a, e), a = a.sibling;
                  return Y(
                    Be,
                    Be.current & 1 | 2
                  ), be && Xt(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && ft() > Oi && (t.flags |= 128, n = !0, hn(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = hi(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, _i(t, e), hn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !be)
                return Ue(t), null;
            } else
              2 * ft() - l.renderingStartTime > Oi && a !== 536870912 && (t.flags |= 128, n = !0, hn(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = ft(), e.sibling = null, a = Be.current, Y(
          Be,
          n ? a & 1 | 2 : a & 1
        ), be && Xt(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return bt(t), ns(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), a = t.updateQueue, a !== null && _i(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && T(Qa), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(Ye), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Cv(e, t) {
    switch (Xc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Zt(Ye), ge(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return la(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (bt(t), t.alternate === null)
            throw Error(f(340));
          Ga();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (bt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Ga();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return T(Be), null;
      case 4:
        return ge(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return bt(t), ns(), e !== null && T(Qa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Zt(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sf(e, t) {
    switch (Xc(t), t.tag) {
      case 3:
        Zt(Ye), ge();
        break;
      case 26:
      case 27:
      case 5:
        la(t);
        break;
      case 4:
        ge();
        break;
      case 31:
        t.memoizedState !== null && bt(t);
        break;
      case 13:
        bt(t);
        break;
      case 19:
        T(Be);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        bt(t), ns(), e !== null && T(Qa);
        break;
      case 24:
        Zt(Ye);
    }
  }
  function xn(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var i = a.create, s = a.inst;
            l = i(), s.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (u) {
      Me(t, t.return, u);
    }
  }
  function xa(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, u = s.destroy;
            if (u !== void 0) {
              s.destroy = void 0, n = t;
              var o = a, b = u;
              try {
                b();
              } catch (M) {
                Me(
                  n,
                  o,
                  M
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (M) {
      Me(t, t.return, M);
    }
  }
  function uf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Wr(t, a);
      } catch (l) {
        Me(e, e.return, l);
      }
    }
  }
  function rf(e, t, a) {
    a.props = $a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Me(e, t, l);
    }
  }
  function bn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      Me(e, t, n);
    }
  }
  function Ht(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Me(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Me(e, t, n);
        }
      else a.current = null;
  }
  function of(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Me(e, e.return, n);
    }
  }
  function Hs(e, t, a) {
    try {
      var l = e.stateNode;
      Iv(l, e.type, a, t), l[lt] = t;
    } catch (n) {
      Me(e, e.return, n);
    }
  }
  function ff(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sa(e.type) || e.tag === 4;
  }
  function ks(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ff(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Yt));
    else if (l !== 4 && (l === 27 && Sa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Bs(e, t, a), e = e.sibling; e !== null; )
        Bs(e, t, a), e = e.sibling;
  }
  function Ti(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Sa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ti(e, t, a), e = e.sibling; e !== null; )
        Ti(e, t, a), e = e.sibling;
  }
  function df(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Pe(t, l, a), t[$e] = e, t[lt] = a;
    } catch (i) {
      Me(e, e.return, i);
    }
  }
  var Wt = !1, Xe = !1, qs = !1, mf = typeof WeakSet == "function" ? WeakSet : Set, Je = null;
  function wv(e, t) {
    if (e = e.containerInfo, cu = Wi, e = Sr(e), Dc(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break e;
            }
            var s = 0, u = -1, o = -1, b = 0, M = 0, C = e, g = null;
            t: for (; ; ) {
              for (var j; C !== a || n !== 0 && C.nodeType !== 3 || (u = s + n), C !== i || l !== 0 && C.nodeType !== 3 || (o = s + l), C.nodeType === 3 && (s += C.nodeValue.length), (j = C.firstChild) !== null; )
                g = C, C = j;
              for (; ; ) {
                if (C === e) break t;
                if (g === a && ++b === n && (u = s), g === i && ++M === l && (o = s), (j = C.nextSibling) !== null) break;
                C = g, g = C.parentNode;
              }
              C = j;
            }
            a = u === -1 || o === -1 ? null : { start: u, end: o };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (su = { focusedElem: e, selectionRange: a }, Wi = !1, Je = t; Je !== null; )
      if (t = Je, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Je = e;
      else
        for (; Je !== null; ) {
          switch (t = Je, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  n = e[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, a = t, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode;
                try {
                  var X = $a(
                    a.type,
                    n
                  );
                  e = l.getSnapshotBeforeUpdate(
                    X,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (F) {
                  Me(
                    a,
                    a.return,
                    F
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  ou(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ou(e);
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
            e.return = t.return, Je = e;
            break;
          }
          Je = t.return;
        }
  }
  function vf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        It(e, a), l & 4 && xn(5, a);
        break;
      case 1:
        if (It(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Me(a, a.return, s);
            }
          else {
            var n = $a(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Me(
                a,
                a.return,
                s
              );
            }
          }
        l & 64 && uf(a), l & 512 && bn(a, a.return);
        break;
      case 3:
        if (It(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Wr(e, t);
          } catch (s) {
            Me(a, a.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && df(a);
      case 26:
      case 5:
        It(e, a), t === null && l & 4 && of(a), l & 512 && bn(a, a.return);
        break;
      case 12:
        It(e, a);
        break;
      case 31:
        It(e, a), l & 4 && bf(e, a);
        break;
      case 13:
        It(e, a), l & 4 && yf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Yv.bind(
          null,
          a
        ), ch(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Wt, !l) {
          t = t !== null && t.memoizedState !== null || Xe, n = Wt;
          var i = Xe;
          Wt = l, (Xe = t) && !i ? Pt(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : It(e, a), Wt = n, Xe = i;
        }
        break;
      case 30:
        break;
      default:
        It(e, a);
    }
  }
  function hf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Re = null, it = !1;
  function Ft(e, t, a) {
    for (a = a.child; a !== null; )
      xf(e, t, a), a = a.sibling;
  }
  function xf(e, t, a) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Yl, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Xe || Ht(a, t), Ft(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Xe || Ht(a, t);
        var l = Re, n = it;
        Sa(a.type) && (Re = a.stateNode, it = !1), Ft(
          e,
          t,
          a
        ), Mn(a.stateNode), Re = l, it = n;
        break;
      case 5:
        Xe || Ht(a, t);
      case 6:
        if (l = Re, n = it, Re = null, Ft(
          e,
          t,
          a
        ), Re = l, it = n, Re !== null)
          if (it)
            try {
              (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(a.stateNode);
            } catch (i) {
              Me(
                a,
                t,
                i
              );
            }
          else
            try {
              Re.removeChild(a.stateNode);
            } catch (i) {
              Me(
                a,
                t,
                i
              );
            }
        break;
      case 18:
        Re !== null && (it ? (e = Re, ud(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Bl(e)) : ud(Re, a.stateNode));
        break;
      case 4:
        l = Re, n = it, Re = a.stateNode.containerInfo, it = !0, Ft(
          e,
          t,
          a
        ), Re = l, it = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xa(2, a, t), Xe || xa(4, a, t), Ft(
          e,
          t,
          a
        );
        break;
      case 1:
        Xe || (Ht(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && rf(
          a,
          t,
          l
        )), Ft(
          e,
          t,
          a
        );
        break;
      case 21:
        Ft(
          e,
          t,
          a
        );
        break;
      case 22:
        Xe = (l = Xe) || a.memoizedState !== null, Ft(
          e,
          t,
          a
        ), Xe = l;
        break;
      default:
        Ft(
          e,
          t,
          a
        );
    }
  }
  function bf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Bl(e);
      } catch (a) {
        Me(t, t.return, a);
      }
    }
  }
  function yf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Bl(e);
      } catch (a) {
        Me(t, t.return, a);
      }
  }
  function Dv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mf()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Ci(e, t) {
    var a = Dv(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = Gv.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function ct(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = e, s = t, u = s;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 27:
              if (Sa(u.type)) {
                Re = u.stateNode, it = !1;
                break e;
              }
              break;
            case 5:
              Re = u.stateNode, it = !1;
              break e;
            case 3:
            case 4:
              Re = u.stateNode.containerInfo, it = !0;
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(f(160));
        xf(i, s, n), Re = null, it = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        pf(t, e), t = t.sibling;
  }
  var Dt = null;
  function pf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ct(t, e), st(e), l & 4 && (xa(3, e, e.return), xn(3, e), xa(5, e, e.return));
        break;
      case 1:
        ct(t, e), st(e), l & 512 && (Xe || a === null || Ht(a, a.return)), l & 64 && Wt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Dt;
        if (ct(t, e), st(e), l & 512 && (Xe || a === null || Ht(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Xl] || i[$e] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Pe(i, l, a), i[$e] = e, Ke(i), l = i;
                      break e;
                    case "link":
                      var s = pd(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (s) {
                        for (var u = 0; u < s.length; u++)
                          if (i = s[u], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            s.splice(u, 1);
                            break t;
                          }
                      }
                      i = n.createElement(l), Pe(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = pd(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (u = 0; u < s.length; u++)
                          if (i = s[u], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            s.splice(u, 1);
                            break t;
                          }
                      }
                      i = n.createElement(l), Pe(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, l));
                  }
                  i[$e] = e, Ke(i), l = i;
                }
                e.stateNode = l;
              } else
                gd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = yd(
                n,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? gd(
              n,
              e.type,
              e.stateNode
            ) : yd(
              n,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Hs(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        ct(t, e), st(e), l & 512 && (Xe || a === null || Ht(a, a.return)), a !== null && l & 4 && Hs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ct(t, e), st(e), l & 512 && (Xe || a === null || Ht(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            sl(n, "");
          } catch (X) {
            Me(e, e.return, X);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, Hs(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (qs = !0);
        break;
      case 6:
        if (ct(t, e), st(e), l & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (X) {
            Me(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Vi = null, n = Dt, Dt = Qi(t.containerInfo), ct(t, e), Dt = n, st(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Bl(t.containerInfo);
          } catch (X) {
            Me(e, e.return, X);
          }
        qs && (qs = !1, gf(e));
        break;
      case 4:
        l = Dt, Dt = Qi(
          e.stateNode.containerInfo
        ), ct(t, e), st(e), Dt = l;
        break;
      case 12:
        ct(t, e), st(e);
        break;
      case 31:
        ct(t, e), st(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ci(e, l)));
        break;
      case 13:
        ct(t, e), st(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Di = ft()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ci(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null, b = Wt, M = Xe;
        if (Wt = b || n, Xe = M || o, ct(t, e), Xe = M, Wt = b, st(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || o || Wt || Xe || Wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                o = a = t;
                try {
                  if (i = o.stateNode, n)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    u = o.stateNode;
                    var C = o.memoizedProps.style, g = C != null && C.hasOwnProperty("display") ? C.display : null;
                    u.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (X) {
                  Me(o, o.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (X) {
                  Me(o, o.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                o = t;
                try {
                  var j = o.stateNode;
                  n ? rd(j, !0) : rd(o.stateNode, !1);
                } catch (X) {
                  Me(o, o.return, X);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Ci(e, a))));
        break;
      case 19:
        ct(t, e), st(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ci(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ct(t, e), st(e);
    }
  }
  function st(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (ff(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(f(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = ks(e);
            Ti(e, i, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (sl(s, ""), a.flags &= -33);
            var u = ks(e);
            Ti(e, u, s);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo, b = ks(e);
            Bs(
              e,
              b,
              o
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (M) {
        Me(e, e.return, M);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        gf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function It(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        vf(e, t.alternate, t), t = t.sibling;
  }
  function Wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xa(4, t, t.return), Wa(t);
          break;
        case 1:
          Ht(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && rf(
            t,
            t.return,
            a
          ), Wa(t);
          break;
        case 27:
          Mn(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Wa(t);
          break;
        case 22:
          t.memoizedState === null && Wa(t);
          break;
        case 30:
          Wa(t);
          break;
        default:
          Wa(t);
      }
      e = e.sibling;
    }
  }
  function Pt(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, i = t, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Pt(
            n,
            i,
            a
          ), xn(4, i);
          break;
        case 1:
          if (Pt(
            n,
            i,
            a
          ), l = i, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (b) {
              Me(l, l.return, b);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var u = l.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  $r(o[n], u);
            } catch (b) {
              Me(l, l.return, b);
            }
          }
          a && s & 64 && uf(i), bn(i, i.return);
          break;
        case 27:
          df(i);
        case 26:
        case 5:
          Pt(
            n,
            i,
            a
          ), a && l === null && s & 4 && of(i), bn(i, i.return);
          break;
        case 12:
          Pt(
            n,
            i,
            a
          );
          break;
        case 31:
          Pt(
            n,
            i,
            a
          ), a && s & 4 && bf(n, i);
          break;
        case 13:
          Pt(
            n,
            i,
            a
          ), a && s & 4 && yf(n, i);
          break;
        case 22:
          i.memoizedState === null && Pt(
            n,
            i,
            a
          ), bn(i, i.return);
          break;
        case 30:
          break;
        default:
          Pt(
            n,
            i,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ys(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && an(a));
  }
  function Gs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && an(e));
  }
  function Ot(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Nf(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Nf(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ot(
          e,
          t,
          a,
          l
        ), n & 2048 && xn(9, t);
        break;
      case 1:
        Ot(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Ot(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && an(e)));
        break;
      case 12:
        if (n & 2048) {
          Ot(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, s = i.id, u = i.onPostCommit;
            typeof u == "function" && u(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (o) {
            Me(t, t.return, o);
          }
        } else
          Ot(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Ot(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Ot(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ot(
          e,
          t,
          a,
          l
        ) : yn(e, t) : i._visibility & 2 ? Ot(
          e,
          t,
          a,
          l
        ) : (i._visibility |= 2, Al(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Ys(s, t);
        break;
      case 24:
        Ot(
          e,
          t,
          a,
          l
        ), n & 2048 && Gs(t.alternate, t);
        break;
      default:
        Ot(
          e,
          t,
          a,
          l
        );
    }
  }
  function Al(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, s = t, u = a, o = l, b = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Al(
            i,
            s,
            u,
            o,
            n
          ), xn(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null ? M._visibility & 2 ? Al(
            i,
            s,
            u,
            o,
            n
          ) : yn(
            i,
            s
          ) : (M._visibility |= 2, Al(
            i,
            s,
            u,
            o,
            n
          )), n && b & 2048 && Ys(
            s.alternate,
            s
          );
          break;
        case 24:
          Al(
            i,
            s,
            u,
            o,
            n
          ), n && b & 2048 && Gs(s.alternate, s);
          break;
        default:
          Al(
            i,
            s,
            u,
            o,
            n
          );
      }
      t = t.sibling;
    }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            yn(a, l), n & 2048 && Ys(
              l.alternate,
              l
            );
            break;
          case 24:
            yn(a, l), n & 2048 && Gs(l.alternate, l);
            break;
          default:
            yn(a, l);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function _l(e, t, a) {
    if (e.subtreeFlags & pn)
      for (e = e.child; e !== null; )
        jf(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function jf(e, t, a) {
    switch (e.tag) {
      case 26:
        _l(
          e,
          t,
          a
        ), e.flags & pn && e.memoizedState !== null && yh(
          a,
          Dt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        _l(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Dt;
        Dt = Qi(e.stateNode.containerInfo), _l(
          e,
          t,
          a
        ), Dt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = pn, pn = 16777216, _l(
          e,
          t,
          a
        ), pn = l) : _l(
          e,
          t,
          a
        ));
        break;
      default:
        _l(
          e,
          t,
          a
        );
    }
  }
  function Sf(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function gn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Je = l, Ef(
            l,
            e
          );
        }
      Sf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        zf(e), e = e.sibling;
  }
  function zf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        gn(e), e.flags & 2048 && xa(9, e, e.return);
        break;
      case 3:
        gn(e);
        break;
      case 12:
        gn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, wi(e)) : gn(e);
        break;
      default:
        gn(e);
    }
  }
  function wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Je = l, Ef(
            l,
            e
          );
        }
      Sf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, t, t.return), wi(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, wi(t));
          break;
        default:
          wi(t);
      }
      e = e.sibling;
    }
  }
  function Ef(e, t) {
    for (; Je !== null; ) {
      var a = Je;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          an(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Je = l;
      else
        e: for (a = e; Je !== null; ) {
          l = Je;
          var n = l.sibling, i = l.return;
          if (hf(l), l === a) {
            Je = null;
            break e;
          }
          if (n !== null) {
            n.return = i, Je = n;
            break e;
          }
          Je = i;
        }
    }
  }
  var Ov = {
    getCacheForType: function(e) {
      var t = Fe(Ye), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return Fe(Ye).controller.signal;
    }
  }, Uv = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, we = null, me = null, he = 0, Ee = 0, yt = null, ba = !1, Tl = !1, Ls = !1, ea = 0, ke = 0, ya = 0, Fa = 0, Xs = 0, pt = 0, Cl = 0, Nn = null, ut = null, Qs = !1, Di = 0, Mf = 0, Oi = 1 / 0, Ui = null, pa = null, Ve = 0, ga = null, wl = null, ta = 0, Zs = 0, Vs = null, Af = null, jn = 0, Ks = null;
  function gt() {
    return (Se & 2) !== 0 && he !== 0 ? he & -he : E.T !== null ? Ps() : Gu();
  }
  function _f() {
    if (pt === 0)
      if ((he & 536870912) === 0 || be) {
        var e = Ln;
        Ln <<= 1, (Ln & 3932160) === 0 && (Ln = 262144), pt = e;
      } else pt = 536870912;
    return e = xt.current, e !== null && (e.flags |= 32), pt;
  }
  function rt(e, t, a) {
    (e === we && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (Dl(e, 0), Na(
      e,
      he,
      pt,
      !1
    )), Ll(e, a), ((Se & 2) === 0 || e !== we) && (e === we && ((Se & 2) === 0 && (Fa |= a), ke === 4 && Na(
      e,
      he,
      pt,
      !1
    )), kt(e));
  }
  function Tf(e, t, a) {
    if ((Se & 6) !== 0) throw Error(f(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Gl(e, t), n = l ? kv(e, t) : $s(e, t, !0), i = l;
    do {
      if (n === 0) {
        Tl && !l && Na(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, i && !Rv(a)) {
          n = $s(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var u = e;
              n = Nn;
              var o = u.current.memoizedState.isDehydrated;
              if (o && (Dl(u, s).flags |= 256), s = $s(
                u,
                s,
                !1
              ), s !== 2) {
                if (Ls && !o) {
                  u.errorRecoveryDisabledLanes |= i, Fa |= i, n = 4;
                  break e;
                }
                i = ut, ut = n, i !== null && (ut === null ? ut = i : ut.push.apply(
                  ut,
                  i
                ));
              }
              n = s;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Dl(e, 0), Na(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, i = n, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Na(
                l,
                t,
                pt,
                !ba
              );
              break e;
            case 2:
              ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = Di + 300 - ft(), 10 < n)) {
            if (Na(
              l,
              t,
              pt,
              !ba
            ), Qn(l, 0, !0) !== 0) break e;
            ta = t, l.timeoutHandle = cd(
              Cf.bind(
                null,
                l,
                a,
                ut,
                Ui,
                Qs,
                t,
                pt,
                Fa,
                Cl,
                ba,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Cf(
            l,
            a,
            ut,
            Ui,
            Qs,
            t,
            pt,
            Fa,
            Cl,
            ba,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kt(e);
  }
  function Cf(e, t, a, l, n, i, s, u, o, b, M, C, g, j) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Yt
      }, jf(
        t,
        i,
        C
      );
      var X = (i & 62914560) === i ? Di - ft() : (i & 4194048) === i ? Mf - ft() : 0;
      if (X = ph(
        C,
        X
      ), X !== null) {
        ta = i, e.cancelPendingCommit = X(
          Bf.bind(
            null,
            e,
            t,
            i,
            a,
            l,
            n,
            s,
            u,
            o,
            M,
            C,
            null,
            g,
            j
          )
        ), Na(e, i, s, !b);
        return;
      }
    }
    Bf(
      e,
      t,
      i,
      a,
      l,
      n,
      s,
      u,
      o
    );
  }
  function Rv(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], i = n.getSnapshot;
          n = n.value;
          try {
            if (!vt(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function Na(e, t, a, l) {
    t &= ~Xs, t &= ~Fa, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - mt(n), s = 1 << i;
      l[i] = -1, n &= ~s;
    }
    a !== 0 && Bu(e, a, t);
  }
  function Ri() {
    return (Se & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function Js() {
    if (me !== null) {
      if (Ee === 0)
        var e = me.return;
      else
        e = me, Qt = La = null, os(e), jl = null, nn = 0, e = me;
      for (; e !== null; )
        sf(e.alternate, e), e = e.return;
      me = null;
    }
  }
  function Dl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, th(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ta = 0, Js(), we = e, me = a = Lt(e.current, null), he = t, Ee = 0, yt = null, ba = !1, Tl = Gl(e, t), Ls = !1, Cl = pt = Xs = Fa = ya = ke = 0, ut = Nn = null, Qs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - mt(l), i = 1 << n;
        t |= e[n], l &= ~i;
      }
    return ea = t, ai(), a;
  }
  function wf(e, t) {
    ie = null, E.H = mn, t === Nl || t === oi ? (t = Zr(), Ee = 3) : t === Ic ? (t = Zr(), Ee = 4) : Ee = t === Ms ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, me === null && (ke = 1, zi(
      e,
      zt(t, e.current)
    ));
  }
  function Df() {
    var e = xt.current;
    return e === null ? !0 : (he & 4194048) === he ? _t === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === _t : !1;
  }
  function Of() {
    var e = E.H;
    return E.H = mn, e === null ? mn : e;
  }
  function Uf() {
    var e = E.A;
    return E.A = Ov, e;
  }
  function Hi() {
    ke = 4, ba || (he & 4194048) !== he && xt.current !== null || (Tl = !0), (ya & 134217727) === 0 && (Fa & 134217727) === 0 || we === null || Na(
      we,
      he,
      pt,
      !1
    );
  }
  function $s(e, t, a) {
    var l = Se;
    Se |= 2;
    var n = Of(), i = Uf();
    (we !== e || he !== t) && (Ui = null, Dl(e, t)), t = !1;
    var s = ke;
    e: do
      try {
        if (Ee !== 0 && me !== null) {
          var u = me, o = yt;
          switch (Ee) {
            case 8:
              Js(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var b = Ee;
              if (Ee = 0, yt = null, Ol(e, u, o, b), a && Tl) {
                s = 0;
                break e;
              }
              break;
            default:
              b = Ee, Ee = 0, yt = null, Ol(e, u, o, b);
          }
        }
        Hv(), s = ke;
        break;
      } catch (M) {
        wf(e, M);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Qt = La = null, Se = l, E.H = n, E.A = i, me === null && (we = null, he = 0, ai()), s;
  }
  function Hv() {
    for (; me !== null; ) Rf(me);
  }
  function kv(e, t) {
    var a = Se;
    Se |= 2;
    var l = Of(), n = Uf();
    we !== e || he !== t ? (Ui = null, Oi = ft() + 500, Dl(e, t)) : Tl = Gl(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && me !== null) {
          t = me;
          var i = yt;
          t: switch (Ee) {
            case 1:
              Ee = 0, yt = null, Ol(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Xr(i)) {
                Ee = 0, yt = null, Hf(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || we !== e || (Ee = 7), kt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Xr(i) ? (Ee = 0, yt = null, Hf(t)) : (Ee = 0, yt = null, Ol(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (me.tag) {
                case 26:
                  s = me.memoizedState;
                case 5:
                case 27:
                  var u = me;
                  if (s ? Nd(s) : u.stateNode.complete) {
                    Ee = 0, yt = null;
                    var o = u.sibling;
                    if (o !== null) me = o;
                    else {
                      var b = u.return;
                      b !== null ? (me = b, ki(b)) : me = null;
                    }
                    break t;
                  }
              }
              Ee = 0, yt = null, Ol(e, t, i, 5);
              break;
            case 6:
              Ee = 0, yt = null, Ol(e, t, i, 6);
              break;
            case 8:
              Js(), ke = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        Bv();
        break;
      } catch (M) {
        wf(e, M);
      }
    while (!0);
    return Qt = La = null, E.H = l, E.A = n, Se = a, me !== null ? 0 : (we = null, he = 0, ai(), ke);
  }
  function Bv() {
    for (; me !== null && !sm(); )
      Rf(me);
  }
  function Rf(e) {
    var t = nf(e.alternate, e, ea);
    e.memoizedProps = e.pendingProps, t === null ? ki(e) : me = t;
  }
  function Hf(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Io(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = Io(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        os(t);
      default:
        sf(a, t), t = me = Dr(t, ea), t = nf(a, t, ea);
    }
    e.memoizedProps = e.pendingProps, t === null ? ki(e) : me = t;
  }
  function Ol(e, t, a, l) {
    Qt = La = null, os(t), jl = null, nn = 0;
    var n = t.return;
    try {
      if (Mv(
        e,
        n,
        t,
        a,
        he
      )) {
        ke = 1, zi(
          e,
          zt(a, e.current)
        ), me = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw me = n, i;
      ke = 1, zi(
        e,
        zt(a, e.current)
      ), me = null;
      return;
    }
    t.flags & 32768 ? (be || l === 1 ? e = !0 : Tl || (he & 536870912) !== 0 ? e = !1 : (ba = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = xt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), kf(t, e)) : ki(t);
  }
  function ki(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        kf(
          t,
          ba
        );
        return;
      }
      e = t.return;
      var a = Tv(
        t.alternate,
        t,
        ea
      );
      if (a !== null) {
        me = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function kf(e, t) {
    do {
      var a = Cv(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, me = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        me = e;
        return;
      }
      me = e = a;
    } while (e !== null);
    ke = 6, me = null;
  }
  function Bf(e, t, a, l, n, i, s, u, o) {
    e.cancelPendingCommit = null;
    do
      Bi();
    while (Ve !== 0);
    if ((Se & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (i = t.lanes | t.childLanes, i |= kc, bm(
        e,
        a,
        i,
        s,
        u,
        o
      ), e === we && (me = we = null, he = 0), wl = t, ga = e, ta = a, Zs = i, Vs = n, Af = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Lv(Yn, function() {
        return Xf(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = E.T, E.T = null, n = p.p, p.p = 2, s = Se, Se |= 4;
        try {
          wv(e, t, a);
        } finally {
          Se = s, p.p = n, E.T = l;
        }
      }
      Ve = 1, qf(), Yf(), Gf();
    }
  }
  function qf() {
    if (Ve === 1) {
      Ve = 0;
      var e = ga, t = wl, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var l = p.p;
        p.p = 2;
        var n = Se;
        Se |= 4;
        try {
          pf(t, e);
          var i = su, s = Sr(e.containerInfo), u = i.focusedElem, o = i.selectionRange;
          if (s !== u && u && u.ownerDocument && jr(
            u.ownerDocument.documentElement,
            u
          )) {
            if (o !== null && Dc(u)) {
              var b = o.start, M = o.end;
              if (M === void 0 && (M = b), "selectionStart" in u)
                u.selectionStart = b, u.selectionEnd = Math.min(
                  M,
                  u.value.length
                );
              else {
                var C = u.ownerDocument || document, g = C && C.defaultView || window;
                if (g.getSelection) {
                  var j = g.getSelection(), X = u.textContent.length, F = Math.min(o.start, X), Ce = o.end === void 0 ? F : Math.min(o.end, X);
                  !j.extend && F > Ce && (s = Ce, Ce = F, F = s);
                  var v = Nr(
                    u,
                    F
                  ), d = Nr(
                    u,
                    Ce
                  );
                  if (v && d && (j.rangeCount !== 1 || j.anchorNode !== v.node || j.anchorOffset !== v.offset || j.focusNode !== d.node || j.focusOffset !== d.offset)) {
                    var x = C.createRange();
                    x.setStart(v.node, v.offset), j.removeAllRanges(), F > Ce ? (j.addRange(x), j.extend(d.node, d.offset)) : (x.setEnd(d.node, d.offset), j.addRange(x));
                  }
                }
              }
            }
            for (C = [], j = u; j = j.parentNode; )
              j.nodeType === 1 && C.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof u.focus == "function" && u.focus(), u = 0; u < C.length; u++) {
              var _ = C[u];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          Wi = !!cu, su = cu = null;
        } finally {
          Se = n, p.p = l, E.T = a;
        }
      }
      e.current = t, Ve = 2;
    }
  }
  function Yf() {
    if (Ve === 2) {
      Ve = 0;
      var e = ga, t = wl, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var l = p.p;
        p.p = 2;
        var n = Se;
        Se |= 4;
        try {
          vf(e, t.alternate, t);
        } finally {
          Se = n, p.p = l, E.T = a;
        }
      }
      Ve = 3;
    }
  }
  function Gf() {
    if (Ve === 4 || Ve === 3) {
      Ve = 0, um();
      var e = ga, t = wl, a = ta, l = Af;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ve = 5 : (Ve = 0, wl = ga = null, Lf(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (pa = null), mc(a), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
        try {
          dt.onCommitFiberRoot(
            Yl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = E.T, n = p.p, p.p = 2, E.T = null;
        try {
          for (var i = e.onRecoverableError, s = 0; s < l.length; s++) {
            var u = l[s];
            i(u.value, {
              componentStack: u.stack
            });
          }
        } finally {
          E.T = t, p.p = n;
        }
      }
      (ta & 3) !== 0 && Bi(), kt(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === Ks ? jn++ : (jn = 0, Ks = e) : jn = 0, Sn(0);
    }
  }
  function Lf(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, an(t)));
  }
  function Bi() {
    return qf(), Yf(), Gf(), Xf();
  }
  function Xf() {
    if (Ve !== 5) return !1;
    var e = ga, t = Zs;
    Zs = 0;
    var a = mc(ta), l = E.T, n = p.p;
    try {
      p.p = 32 > a ? 32 : a, E.T = null, a = Vs, Vs = null;
      var i = ga, s = ta;
      if (Ve = 0, wl = ga = null, ta = 0, (Se & 6) !== 0) throw Error(f(331));
      var u = Se;
      if (Se |= 4, zf(i.current), Nf(
        i,
        i.current,
        s,
        a
      ), Se = u, Sn(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(Yl, i);
        } catch {
        }
      return !0;
    } finally {
      p.p = n, E.T = l, Lf(e, t);
    }
  }
  function Qf(e, t, a) {
    t = zt(a, t), t = Es(e.stateNode, t, 2), e = ma(e, t, 2), e !== null && (Ll(e, 2), kt(e));
  }
  function Me(e, t, a) {
    if (e.tag === 3)
      Qf(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qf(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (pa === null || !pa.has(l))) {
            e = zt(a, e), a = Qo(2), l = ma(t, a, 2), l !== null && (Zo(
              a,
              l,
              t,
              e
            ), Ll(l, 2), kt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ws(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Uv();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (Ls = !0, n.add(a), e = qv.bind(null, e, t, a), t.then(e, e));
  }
  function qv(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, we === e && (he & a) === a && (ke === 4 || ke === 3 && (he & 62914560) === he && 300 > ft() - Di ? (Se & 2) === 0 && Dl(e, 0) : Xs |= a, Cl === he && (Cl = 0)), kt(e);
  }
  function Zf(e, t) {
    t === 0 && (t = ku()), e = qa(e, t), e !== null && (Ll(e, t), kt(e));
  }
  function Yv(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Zf(e, a);
  }
  function Gv(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    l !== null && l.delete(t), Zf(e, a);
  }
  function Lv(e, t) {
    return rc(e, t);
  }
  var qi = null, Ul = null, Fs = !1, Yi = !1, Is = !1, ja = 0;
  function kt(e) {
    e !== Ul && e.next === null && (Ul === null ? qi = Ul = e : Ul = Ul.next = e), Yi = !0, Fs || (Fs = !0, Qv());
  }
  function Sn(e, t) {
    if (!Is && Yi) {
      Is = !0;
      do
        for (var a = !1, l = qi; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = l.suspendedLanes, u = l.pingedLanes;
              i = (1 << 31 - mt(42 | e) + 1) - 1, i &= n & ~(s & ~u), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, $f(l, i));
          } else
            i = he, i = Qn(
              l,
              l === we ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Gl(l, i) || (a = !0, $f(l, i));
          l = l.next;
        }
      while (a);
      Is = !1;
    }
  }
  function Xv() {
    Vf();
  }
  function Vf() {
    Yi = Fs = !1;
    var e = 0;
    ja !== 0 && eh() && (e = ja);
    for (var t = ft(), a = null, l = qi; l !== null; ) {
      var n = l.next, i = Kf(l, t);
      i === 0 ? (l.next = null, a === null ? qi = n : a.next = n, n === null && (Ul = a)) : (a = l, (e !== 0 || (i & 3) !== 0) && (Yi = !0)), l = n;
    }
    Ve !== 0 && Ve !== 5 || Sn(e), ja !== 0 && (ja = 0);
  }
  function Kf(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - mt(i), u = 1 << s, o = n[s];
      o === -1 ? ((u & a) === 0 || (u & l) !== 0) && (n[s] = xm(u, t)) : o <= t && (e.expiredLanes |= u), i &= ~u;
    }
    if (t = we, a = he, a = Qn(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && oc(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Gl(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && oc(l), mc(a)) {
        case 2:
        case 8:
          a = Ru;
          break;
        case 32:
          a = Yn;
          break;
        case 268435456:
          a = Hu;
          break;
        default:
          a = Yn;
      }
      return l = Jf.bind(null, e), a = rc(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && oc(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Jf(e, t) {
    if (Ve !== 0 && Ve !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Bi() && e.callbackNode !== a)
      return null;
    var l = he;
    return l = Qn(
      e,
      e === we ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Tf(e, l, t), Kf(e, ft()), e.callbackNode != null && e.callbackNode === a ? Jf.bind(null, e) : null);
  }
  function $f(e, t) {
    if (Bi()) return null;
    Tf(e, t, !0);
  }
  function Qv() {
    ah(function() {
      (Se & 6) !== 0 ? rc(
        Uu,
        Xv
      ) : Vf();
    });
  }
  function Ps() {
    if (ja === 0) {
      var e = pl;
      e === 0 && (e = Gn, Gn <<= 1, (Gn & 261888) === 0 && (Gn = 256)), ja = e;
    }
    return ja;
  }
  function Wf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Jn("" + e);
  }
  function Ff(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Zv(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var i = Wf(
        (n[lt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[lt] || null) ? Wf(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
      var u = new In(
        "action",
        "action",
        null,
        l,
        n
      );
      e.push({
        event: u,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ja !== 0) {
                  var o = s ? Ff(n, s) : new FormData(n);
                  ps(
                    a,
                    {
                      pending: !0,
                      data: o,
                      method: n.method,
                      action: i
                    },
                    null,
                    o
                  );
                }
              } else
                typeof i == "function" && (u.preventDefault(), o = s ? Ff(n, s) : new FormData(n), ps(
                  a,
                  {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: i
                  },
                  i,
                  o
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var eu = 0; eu < Hc.length; eu++) {
    var tu = Hc[eu], Vv = tu.toLowerCase(), Kv = tu[0].toUpperCase() + tu.slice(1);
    wt(
      Vv,
      "on" + Kv
    );
  }
  wt(Mr, "onAnimationEnd"), wt(Ar, "onAnimationIteration"), wt(_r, "onAnimationStart"), wt("dblclick", "onDoubleClick"), wt("focusin", "onFocus"), wt("focusout", "onBlur"), wt(rv, "onTransitionRun"), wt(ov, "onTransitionStart"), wt(fv, "onTransitionCancel"), wt(Tr, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), Ra(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ra(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ra("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ra(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Jv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn)
  );
  function If(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var u = l[s], o = u.instance, b = u.currentTarget;
            if (u = u.listener, o !== i && n.isPropagationStopped())
              break e;
            i = u, n.currentTarget = b;
            try {
              i(n);
            } catch (M) {
              ti(M);
            }
            n.currentTarget = null, i = o;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (u = l[s], o = u.instance, b = u.currentTarget, u = u.listener, o !== i && n.isPropagationStopped())
              break e;
            i = u, n.currentTarget = b;
            try {
              i(n);
            } catch (M) {
              ti(M);
            }
            n.currentTarget = null, i = o;
          }
      }
    }
  }
  function ve(e, t) {
    var a = t[vc];
    a === void 0 && (a = t[vc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Pf(t, e, 2, !1), a.add(l));
  }
  function au(e, t, a) {
    var l = 0;
    t && (l |= 4), Pf(
      a,
      e,
      l,
      t
    );
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function lu(e) {
    if (!e[Gi]) {
      e[Gi] = !0, Qu.forEach(function(a) {
        a !== "selectionchange" && (Jv.has(a) || au(a, !1, e), au(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gi] || (t[Gi] = !0, au("selectionchange", !1, t));
    }
  }
  function Pf(e, t, a, l) {
    switch (_d(t)) {
      case 2:
        var n = jh;
        break;
      case 8:
        n = Sh;
        break;
      default:
        n = yu;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !Sc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function nu(e, t, a, l, n) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var u = l.stateNode.containerInfo;
          if (u === n) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var o = s.tag;
              if ((o === 3 || o === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; u !== null; ) {
            if (s = al(u), s === null) return;
            if (o = s.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              l = i = s;
              continue e;
            }
            u = u.parentNode;
          }
        }
        l = l.return;
      }
    ar(function() {
      var b = i, M = Nc(a), C = [];
      e: {
        var g = Cr.get(e);
        if (g !== void 0) {
          var j = In, X = e;
          switch (e) {
            case "keypress":
              if (Wn(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = Gm;
              break;
            case "focusin":
              X = "focus", j = Ac;
              break;
            case "focusout":
              X = "blur", j = Ac;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ac;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = ir;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Tm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Qm;
              break;
            case Mr:
            case Ar:
            case _r:
              j = Dm;
              break;
            case Tr:
              j = Vm;
              break;
            case "scroll":
            case "scrollend":
              j = Am;
              break;
            case "wheel":
              j = Jm;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = sr;
              break;
            case "toggle":
            case "beforetoggle":
              j = Wm;
          }
          var F = (t & 4) !== 0, Ce = !F && (e === "scroll" || e === "scrollend"), v = F ? g !== null ? g + "Capture" : null : g;
          F = [];
          for (var d = b, x; d !== null; ) {
            var _ = d;
            if (x = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || x === null || v === null || (_ = Zl(d, v), _ != null && F.push(
              En(d, _, x)
            )), Ce) break;
            d = d.return;
          }
          0 < F.length && (g = new j(
            g,
            X,
            null,
            a,
            M
          ), C.push({ event: g, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (g = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", g && a !== gc && (X = a.relatedTarget || a.fromElement) && (al(X) || X[tl]))
            break e;
          if ((j || g) && (g = M.window === M ? M : (g = M.ownerDocument) ? g.defaultView || g.parentWindow : window, j ? (X = a.relatedTarget || a.toElement, j = b, X = X ? al(X) : null, X !== null && (Ce = k(X), F = X.tag, X !== Ce || F !== 5 && F !== 27 && F !== 6) && (X = null)) : (j = null, X = b), j !== X)) {
            if (F = ir, _ = "onMouseLeave", v = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (F = sr, _ = "onPointerLeave", v = "onPointerEnter", d = "pointer"), Ce = j == null ? g : Ql(j), x = X == null ? g : Ql(X), g = new F(
              _,
              d + "leave",
              j,
              a,
              M
            ), g.target = Ce, g.relatedTarget = x, _ = null, al(M) === b && (F = new F(
              v,
              d + "enter",
              X,
              a,
              M
            ), F.target = x, F.relatedTarget = Ce, _ = F), Ce = _, j && X)
              t: {
                for (F = $v, v = j, d = X, x = 0, _ = v; _; _ = F(_))
                  x++;
                _ = 0;
                for (var K = d; K; K = F(K))
                  _++;
                for (; 0 < x - _; )
                  v = F(v), x--;
                for (; 0 < _ - x; )
                  d = F(d), _--;
                for (; x--; ) {
                  if (v === d || d !== null && v === d.alternate) {
                    F = v;
                    break t;
                  }
                  v = F(v), d = F(d);
                }
                F = null;
              }
            else F = null;
            j !== null && ed(
              C,
              g,
              j,
              F,
              !1
            ), X !== null && Ce !== null && ed(
              C,
              Ce,
              X,
              F,
              !0
            );
          }
        }
        e: {
          if (g = b ? Ql(b) : window, j = g.nodeName && g.nodeName.toLowerCase(), j === "select" || j === "input" && g.type === "file")
            var Ne = hr;
          else if (mr(g))
            if (xr)
              Ne = cv;
            else {
              Ne = nv;
              var Z = lv;
            }
          else
            j = g.nodeName, !j || j.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? b && pc(b.elementType) && (Ne = hr) : Ne = iv;
          if (Ne && (Ne = Ne(e, b))) {
            vr(
              C,
              Ne,
              a,
              M
            );
            break e;
          }
          Z && Z(e, g, b), e === "focusout" && b && g.type === "number" && b.memoizedProps.value != null && yc(g, "number", g.value);
        }
        switch (Z = b ? Ql(b) : window, e) {
          case "focusin":
            (mr(Z) || Z.contentEditable === "true") && (fl = Z, Oc = b, Pl = null);
            break;
          case "focusout":
            Pl = Oc = fl = null;
            break;
          case "mousedown":
            Uc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uc = !1, zr(C, a, M);
            break;
          case "selectionchange":
            if (uv) break;
          case "keydown":
          case "keyup":
            zr(C, a, M);
        }
        var ce;
        if (Tc)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          ol ? fr(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (ur && a.locale !== "ko" && (ol || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && ol && (ce = lr()) : (ca = M, zc = "value" in ca ? ca.value : ca.textContent, ol = !0)), Z = Li(b, xe), 0 < Z.length && (xe = new cr(
          xe,
          e,
          null,
          a,
          M
        ), C.push({ event: xe, listeners: Z }), ce ? xe.data = ce : (ce = dr(a), ce !== null && (xe.data = ce)))), (ce = Im ? Pm(e, a) : ev(e, a)) && (xe = Li(b, "onBeforeInput"), 0 < xe.length && (Z = new cr(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          M
        ), C.push({
          event: Z,
          listeners: xe
        }), Z.data = ce)), Zv(
          C,
          e,
          b,
          a,
          M
        );
      }
      If(C, t);
    });
  }
  function En(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Li(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Zl(e, a), n != null && l.unshift(
        En(e, n, i)
      ), n = Zl(e, t), n != null && l.push(
        En(e, n, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function $v(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ed(e, t, a, l, n) {
    for (var i = t._reactName, s = []; a !== null && a !== l; ) {
      var u = a, o = u.alternate, b = u.stateNode;
      if (u = u.tag, o !== null && o === l) break;
      u !== 5 && u !== 26 && u !== 27 || b === null || (o = b, n ? (b = Zl(a, i), b != null && s.unshift(
        En(a, b, o)
      )) : n || (b = Zl(a, i), b != null && s.push(
        En(a, b, o)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Wv = /\r\n?/g, Fv = /\u0000|\uFFFD/g;
  function td(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wv, `
`).replace(Fv, "");
  }
  function ad(e, t) {
    return t = td(t), td(e) === t;
  }
  function Te(e, t, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || sl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && sl(e, "" + l);
        break;
      case "className":
        Vn(e, "class", l);
        break;
      case "tabIndex":
        Vn(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vn(e, a, l);
        break;
      case "style":
        er(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          Vn(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Jn("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (a === "formAction" ? (t !== "input" && Te(e, t, "name", n.name, n, null), Te(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Te(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Te(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Te(e, t, "encType", n.encType, n, null), Te(e, t, "method", n.method, n, null), Te(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Jn("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = Yt);
        break;
      case "onScroll":
        l != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Jn("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        ve("beforetoggle", e), ve("toggle", e), Zn(e, "popover", l);
        break;
      case "xlinkActuate":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Zn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Em.get(a) || a, Zn(e, a, l));
    }
  }
  function iu(e, t, a, l, n, i) {
    switch (a) {
      case "style":
        er(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? sl(e, l) : (typeof l == "number" || typeof l == "bigint") && sl(e, "" + l);
        break;
      case "onScroll":
        l != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ve("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Yt);
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
        if (!Zu.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), i = e[lt] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Zn(e, a, l);
          }
    }
  }
  function Pe(e, t, a) {
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
        ve("error", e), ve("load", e);
        var l = !1, n = !1, i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var s = a[i];
            if (s != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  Te(e, t, i, s, a, null);
              }
          }
        n && Te(e, t, "srcSet", a.srcSet, a, null), l && Te(e, t, "src", a.src, a, null);
        return;
      case "input":
        ve("invalid", e);
        var u = i = s = n = null, o = null, b = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var M = a[l];
            if (M != null)
              switch (l) {
                case "name":
                  n = M;
                  break;
                case "type":
                  s = M;
                  break;
                case "checked":
                  o = M;
                  break;
                case "defaultChecked":
                  b = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  u = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(f(137, t));
                  break;
                default:
                  Te(e, t, l, M, a, null);
              }
          }
        Wu(
          e,
          i,
          u,
          o,
          b,
          s,
          n,
          !1
        );
        return;
      case "select":
        ve("invalid", e), l = s = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (u = a[n], u != null))
            switch (n) {
              case "value":
                i = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                l = u;
              default:
                Te(e, t, n, u, a, null);
            }
        t = i, a = s, e.multiple = !!l, t != null ? cl(e, !!l, t, !1) : a != null && cl(e, !!l, a, !0);
        return;
      case "textarea":
        ve("invalid", e), i = n = l = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (u = a[s], u != null))
            switch (s) {
              case "value":
                l = u;
                break;
              case "defaultValue":
                n = u;
                break;
              case "children":
                i = u;
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                Te(e, t, s, u, a, null);
            }
        Iu(e, l, n, i);
        return;
      case "option":
        for (o in a)
          if (a.hasOwnProperty(o) && (l = a[o], l != null))
            switch (o) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Te(e, t, o, l, a, null);
            }
        return;
      case "dialog":
        ve("beforetoggle", e), ve("toggle", e), ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zn.length; l++)
          ve(zn[l], e);
        break;
      case "image":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ve("error", e), ve("load", e);
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
        for (b in a)
          if (a.hasOwnProperty(b) && (l = a[b], l != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Te(e, t, b, l, a, null);
            }
        return;
      default:
        if (pc(t)) {
          for (M in a)
            a.hasOwnProperty(M) && (l = a[M], l !== void 0 && iu(
              e,
              t,
              M,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (u in a)
      a.hasOwnProperty(u) && (l = a[u], l != null && Te(e, t, u, l, a, null));
  }
  function Iv(e, t, a, l) {
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
        var n = null, i = null, s = null, u = null, o = null, b = null, M = null;
        for (j in a) {
          var C = a[j];
          if (a.hasOwnProperty(j) && C != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = C;
              default:
                l.hasOwnProperty(j) || Te(e, t, j, null, l, C);
            }
        }
        for (var g in l) {
          var j = l[g];
          if (C = a[g], l.hasOwnProperty(g) && (j != null || C != null))
            switch (g) {
              case "type":
                i = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                b = j;
                break;
              case "defaultChecked":
                M = j;
                break;
              case "value":
                s = j;
                break;
              case "defaultValue":
                u = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(f(137, t));
                break;
              default:
                j !== C && Te(
                  e,
                  t,
                  g,
                  j,
                  l,
                  C
                );
            }
        }
        bc(
          e,
          s,
          u,
          o,
          b,
          M,
          i,
          n
        );
        return;
      case "select":
        j = s = u = g = null;
        for (i in a)
          if (o = a[i], a.hasOwnProperty(i) && o != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = o;
              default:
                l.hasOwnProperty(i) || Te(
                  e,
                  t,
                  i,
                  null,
                  l,
                  o
                );
            }
        for (n in l)
          if (i = l[n], o = a[n], l.hasOwnProperty(n) && (i != null || o != null))
            switch (n) {
              case "value":
                g = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== o && Te(
                  e,
                  t,
                  n,
                  i,
                  l,
                  o
                );
            }
        t = u, a = s, l = j, g != null ? cl(e, !!a, g, !1) : !!l != !!a && (t != null ? cl(e, !!a, t, !0) : cl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        j = g = null;
        for (u in a)
          if (n = a[u], a.hasOwnProperty(u) && n != null && !l.hasOwnProperty(u))
            switch (u) {
              case "value":
                break;
              case "children":
                break;
              default:
                Te(e, t, u, null, l, n);
            }
        for (s in l)
          if (n = l[s], i = a[s], l.hasOwnProperty(s) && (n != null || i != null))
            switch (s) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== i && Te(e, t, s, n, l, i);
            }
        Fu(e, g, j);
        return;
      case "option":
        for (var X in a)
          if (g = a[X], a.hasOwnProperty(X) && g != null && !l.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Te(
                  e,
                  t,
                  X,
                  null,
                  l,
                  g
                );
            }
        for (o in l)
          if (g = l[o], j = a[o], l.hasOwnProperty(o) && g !== j && (g != null || j != null))
            switch (o) {
              case "selected":
                e.selected = g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                Te(
                  e,
                  t,
                  o,
                  g,
                  l,
                  j
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
        for (var F in a)
          g = a[F], a.hasOwnProperty(F) && g != null && !l.hasOwnProperty(F) && Te(e, t, F, null, l, g);
        for (b in l)
          if (g = l[b], j = a[b], l.hasOwnProperty(b) && g !== j && (g != null || j != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(f(137, t));
                break;
              default:
                Te(
                  e,
                  t,
                  b,
                  g,
                  l,
                  j
                );
            }
        return;
      default:
        if (pc(t)) {
          for (var Ce in a)
            g = a[Ce], a.hasOwnProperty(Ce) && g !== void 0 && !l.hasOwnProperty(Ce) && iu(
              e,
              t,
              Ce,
              void 0,
              l,
              g
            );
          for (M in l)
            g = l[M], j = a[M], !l.hasOwnProperty(M) || g === j || g === void 0 && j === void 0 || iu(
              e,
              t,
              M,
              g,
              l,
              j
            );
          return;
        }
    }
    for (var v in a)
      g = a[v], a.hasOwnProperty(v) && g != null && !l.hasOwnProperty(v) && Te(e, t, v, null, l, g);
    for (C in l)
      g = l[C], j = a[C], !l.hasOwnProperty(C) || g === j || g == null && j == null || Te(e, t, C, g, l, j);
  }
  function ld(e) {
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
  function Pv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, s = n.initiatorType, u = n.duration;
        if (i && u && ld(s)) {
          for (s = 0, u = n.responseEnd, l += 1; l < a.length; l++) {
            var o = a[l], b = o.startTime;
            if (b > u) break;
            var M = o.transferSize, C = o.initiatorType;
            M && ld(C) && (o = o.responseEnd, s += M * (o < u ? 1 : (u - b) / (o - b)));
          }
          if (--l, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var cu = null, su = null;
  function Xi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function nd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function id(e, t) {
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
  function uu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ru = null;
  function eh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ru ? !1 : (ru = e, !0) : (ru = null, !1);
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0, th = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, ah = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(e) {
    return sd.resolve(null).then(e).catch(lh);
  } : cd;
  function lh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sa(e) {
    return e === "head";
  }
  function ud(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(n), Bl(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Mn(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, Mn(a);
          for (var i = a.firstChild; i; ) {
            var s = i.nextSibling, u = i.nodeName;
            i[Xl] || u === "SCRIPT" || u === "STYLE" || u === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = s;
          }
        } else
          a === "body" && Mn(e.ownerDocument.body);
      a = n;
    } while (a);
    Bl(t);
  }
  function rd(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function ou(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ou(a), hc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function nh(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Xl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Tt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ih(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Tt(e.nextSibling), e === null)) return null;
    return e;
  }
  function od(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Tt(e.nextSibling), e === null)) return null;
    return e;
  }
  function fu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function du(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ch(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
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
  var mu = null;
  function fd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Tt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function dd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function md(e, t, a) {
    switch (t = Xi(a), e) {
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
  function Mn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    hc(e);
  }
  var Ct = /* @__PURE__ */ new Map(), vd = /* @__PURE__ */ new Set();
  function Qi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var aa = p.d;
  p.d = {
    f: sh,
    r: uh,
    D: rh,
    C: oh,
    L: fh,
    m: dh,
    X: vh,
    S: mh,
    M: hh
  };
  function sh() {
    var e = aa.f(), t = Ri();
    return e || t;
  }
  function uh(e) {
    var t = ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? Co(t) : aa.r(e);
  }
  var Rl = typeof document > "u" ? null : document;
  function hd(e, t, a) {
    var l = Rl;
    if (l && typeof t == "string" && t) {
      var n = jt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), vd.has(n) || (vd.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), Pe(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function rh(e) {
    aa.D(e), hd("dns-prefetch", e, null);
  }
  function oh(e, t) {
    aa.C(e, t), hd("preconnect", e, t);
  }
  function fh(e, t, a) {
    aa.L(e, t, a);
    var l = Rl;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + jt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + jt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + jt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Hl(e);
          break;
        case "script":
          i = kl(e);
      }
      Ct.has(i) || (e = q(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Ct.set(i, e), l.querySelector(n) !== null || t === "style" && l.querySelector(An(i)) || t === "script" && l.querySelector(_n(i)) || (t = l.createElement("link"), Pe(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function dh(e, t) {
    aa.m(e, t);
    var a = Rl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = kl(e);
      }
      if (!Ct.has(i) && (e = q({ rel: "modulepreload", href: e }, t), Ct.set(i, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(_n(i)))
              return;
        }
        l = a.createElement("link"), Pe(l, "link", e), Ke(l), a.head.appendChild(l);
      }
    }
  }
  function mh(e, t, a) {
    aa.S(e, t, a);
    var l = Rl;
    if (l && e) {
      var n = nl(l).hoistableStyles, i = Hl(e);
      t = t || "default";
      var s = n.get(i);
      if (!s) {
        var u = { loading: 0, preload: null };
        if (s = l.querySelector(
          An(i)
        ))
          u.loading = 5;
        else {
          e = q(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Ct.get(i)) && vu(e, a);
          var o = s = l.createElement("link");
          Ke(o), Pe(o, "link", e), o._p = new Promise(function(b, M) {
            o.onload = b, o.onerror = M;
          }), o.addEventListener("load", function() {
            u.loading |= 1;
          }), o.addEventListener("error", function() {
            u.loading |= 2;
          }), u.loading |= 4, Zi(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: u
        }, n.set(i, s);
      }
    }
  }
  function vh(e, t) {
    aa.X(e, t);
    var a = Rl;
    if (a && e) {
      var l = nl(a).hoistableScripts, n = kl(e), i = l.get(n);
      i || (i = a.querySelector(_n(n)), i || (e = q({ src: e, async: !0 }, t), (t = Ct.get(n)) && hu(e, t), i = a.createElement("script"), Ke(i), Pe(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function hh(e, t) {
    aa.M(e, t);
    var a = Rl;
    if (a && e) {
      var l = nl(a).hoistableScripts, n = kl(e), i = l.get(n);
      i || (i = a.querySelector(_n(n)), i || (e = q({ src: e, async: !0, type: "module" }, t), (t = Ct.get(n)) && hu(e, t), i = a.createElement("script"), Ke(i), Pe(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function xd(e, t, a, l) {
    var n = (n = H.current) ? Qi(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Hl(a.href), a = nl(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Hl(a.href);
          var i = nl(
            n
          ).hoistableStyles, s = i.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = n.querySelector(
            An(e)
          )) && !i._p && (s.instance = i, s.state.loading = 5), Ct.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ct.set(e, a), i || xh(
            n,
            e,
            a,
            s.state
          ))), t && l === null)
            throw Error(f(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = kl(a), a = nl(
          n
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function Hl(e) {
    return 'href="' + jt(e) + '"';
  }
  function An(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function bd(e) {
    return q({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function xh(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Pe(t, "link", a), Ke(t), e.head.appendChild(t));
  }
  function kl(e) {
    return '[src="' + jt(e) + '"]';
  }
  function _n(e) {
    return "script[async]" + e;
  }
  function yd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + jt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, Ke(l), l;
          var n = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(l), Pe(l, "style", n), Zi(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = Hl(a.href);
          var i = e.querySelector(
            An(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Ke(i), i;
          l = bd(a), (n = Ct.get(n)) && vu(l, n), i = (e.ownerDocument || e).createElement("link"), Ke(i);
          var s = i;
          return s._p = new Promise(function(u, o) {
            s.onload = u, s.onerror = o;
          }), Pe(i, "link", l), t.state.loading |= 4, Zi(i, a.precedence, e), t.instance = i;
        case "script":
          return i = kl(a.src), (n = e.querySelector(
            _n(i)
          )) ? (t.instance = n, Ke(n), n) : (l = a, (n = Ct.get(i)) && (l = q({}, a), hu(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ke(n), Pe(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Zi(l, a.precedence, e));
    return t.instance;
  }
  function Zi(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, s = 0; s < l.length; s++) {
      var u = l[s];
      if (u.dataset.precedence === t) i = u;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function vu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function hu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Vi = null;
  function pd(e, t, a) {
    if (Vi === null) {
      var l = /* @__PURE__ */ new Map(), n = Vi = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Vi, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[Xl] || i[$e] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var u = l.get(s);
        u ? u.push(i) : l.set(s, [i]);
      }
    }
    return l;
  }
  function gd(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function bh(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function Nd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function yh(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Hl(l.href), i = t.querySelector(
          An(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ki.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, Ke(i);
          return;
        }
        i = t.ownerDocument || t, l = bd(l), (n = Ct.get(n)) && vu(l, n), i = i.createElement("link"), Ke(i);
        var s = i;
        s._p = new Promise(function(u, o) {
          s.onload = u, s.onerror = o;
        }), Pe(i, "link", l), a.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Ki.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var xu = 0;
  function ph(e, t) {
    return e.stylesheets && e.count === 0 && $i(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && $i(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && xu === 0 && (xu = 62500 * Pv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && $i(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > xu ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Ki() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) $i(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ji = null;
  function $i(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ji = /* @__PURE__ */ new Map(), t.forEach(gh, e), Ji = null, Ki.call(e));
  }
  function gh(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ji.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ji.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), i = a.get(s) || l, i === l && a.set(null, n), a.set(s, n), this.count++, l = Ki.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Tn = {
    $$typeof: A,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Nh(e, t, a, l, n, i, s, u, o) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fc(0), this.hiddenUpdates = fc(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jd(e, t, a, l, n, i, s, u, o, b, M, C) {
    return e = new Nh(
      e,
      t,
      a,
      s,
      o,
      b,
      M,
      C,
      u
    ), t = 1, i === !0 && (t |= 24), i = ht(3, null, null, t), e.current = i, i.stateNode = e, t = $c(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Pc(i), e;
  }
  function Sd(e) {
    return e ? (e = vl, e) : vl;
  }
  function zd(e, t, a, l, n, i) {
    n = Sd(n), l.context === null ? l.context = n : l.pendingContext = n, l = da(t), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = ma(e, l, t), a !== null && (rt(a, e, t), sn(a, e, t));
  }
  function Ed(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function bu(e, t) {
    Ed(e, t), (e = e.alternate) && Ed(e, t);
  }
  function Md(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && rt(t, e, 67108864), bu(e, 67108864);
    }
  }
  function Ad(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gt();
      t = dc(t);
      var a = qa(e, t);
      a !== null && rt(a, e, t), bu(e, t);
    }
  }
  var Wi = !0;
  function jh(e, t, a, l) {
    var n = E.T;
    E.T = null;
    var i = p.p;
    try {
      p.p = 2, yu(e, t, a, l);
    } finally {
      p.p = i, E.T = n;
    }
  }
  function Sh(e, t, a, l) {
    var n = E.T;
    E.T = null;
    var i = p.p;
    try {
      p.p = 8, yu(e, t, a, l);
    } finally {
      p.p = i, E.T = n;
    }
  }
  function yu(e, t, a, l) {
    if (Wi) {
      var n = pu(l);
      if (n === null)
        nu(
          e,
          t,
          l,
          Fi,
          a
        ), Td(e, l);
      else if (Eh(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Td(e, l), t & 4 && -1 < zh.indexOf(e)) {
        for (; n !== null; ) {
          var i = ll(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Ua(i.pendingLanes);
                  if (s !== 0) {
                    var u = i;
                    for (u.pendingLanes |= 2, u.entangledLanes |= 2; s; ) {
                      var o = 1 << 31 - mt(s);
                      u.entanglements[1] |= o, s &= ~o;
                    }
                    kt(i), (Se & 6) === 0 && (Oi = ft() + 500, Sn(0));
                  }
                }
                break;
              case 31:
              case 13:
                u = qa(i, 2), u !== null && rt(u, i, 2), Ri(), bu(i, 2);
            }
          if (i = pu(l), i === null && nu(
            e,
            t,
            l,
            Fi,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        nu(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function pu(e) {
    return e = Nc(e), gu(e);
  }
  var Fi = null;
  function gu(e) {
    if (Fi = null, e = al(e), e !== null) {
      var t = k(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = B(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = $(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Fi = e, null;
  }
  function _d(e) {
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
        switch (rm()) {
          case Uu:
            return 2;
          case Ru:
            return 8;
          case Yn:
          case om:
            return 32;
          case Hu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nu = !1, za = null, Ea = null, Ma = null, Cn = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), Aa = [], zh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Td(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        za = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        Ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Cn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(t.pointerId);
    }
  }
  function Dn(e, t, a, l, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = ll(t), t !== null && Md(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Eh(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return za = Dn(
          za,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Ea = Dn(
          Ea,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Ma = Dn(
          Ma,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Cn.set(
          i,
          Dn(
            Cn.get(i) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, wn.set(
          i,
          Dn(
            wn.get(i) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Cd(e) {
    var t = al(e.target);
    if (t !== null) {
      var a = k(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = B(a), t !== null) {
            e.blockedOn = t, Lu(e.priority, function() {
              Ad(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = $(a), t !== null) {
            e.blockedOn = t, Lu(e.priority, function() {
              Ad(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = pu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        gc = l, a.target.dispatchEvent(l), gc = null;
      } else
        return t = ll(a), t !== null && Md(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function wd(e, t, a) {
    Ii(e) && a.delete(t);
  }
  function Mh() {
    Nu = !1, za !== null && Ii(za) && (za = null), Ea !== null && Ii(Ea) && (Ea = null), Ma !== null && Ii(Ma) && (Ma = null), Cn.forEach(wd), wn.forEach(wd);
  }
  function Pi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nu || (Nu = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Mh
    )));
  }
  var ec = null;
  function Dd(e) {
    ec !== e && (ec = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        ec === e && (ec = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (gu(l || a) === null)
              continue;
            break;
          }
          var i = ll(a);
          i !== null && (e.splice(t, 3), t -= 3, ps(
            i,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function Bl(e) {
    function t(o) {
      return Pi(o, e);
    }
    za !== null && Pi(za, e), Ea !== null && Pi(Ea, e), Ma !== null && Pi(Ma, e), Cn.forEach(t), wn.forEach(t);
    for (var a = 0; a < Aa.length; a++) {
      var l = Aa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Aa.length && (a = Aa[0], a.blockedOn === null); )
      Cd(a), a.blockedOn === null && Aa.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], s = n[lt] || null;
        if (typeof i == "function")
          s || Dd(a);
        else if (s) {
          var u = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, s = i[lt] || null)
              u = s.formAction;
            else if (gu(n) !== null) continue;
          } else u = s.action;
          typeof u == "function" ? a[l + 1] = u : (a.splice(l, 3), l -= 3), Dd(a);
        }
      }
  }
  function Od() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(s) {
            return n = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function ju(e) {
    this._internalRoot = e;
  }
  tc.prototype.render = ju.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var a = t.current, l = gt();
    zd(a, l, e, t, null, null);
  }, tc.prototype.unmount = ju.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zd(e.current, 2, null, e, null, null), Ri(), t[tl] = null;
    }
  };
  function tc(e) {
    this._internalRoot = e;
  }
  tc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Aa.length && t !== 0 && t < Aa[a].priority; a++) ;
      Aa.splice(a, 0, e), a === 0 && Cd(e);
    }
  };
  var Ud = h.version;
  if (Ud !== "19.2.4")
    throw Error(
      f(
        527,
        Ud,
        "19.2.4"
      )
    );
  p.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = N(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Ah = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ac.isDisabled && ac.supportsFiber)
      try {
        Yl = ac.inject(
          Ah
        ), dt = ac;
      } catch {
      }
  }
  return Un.createRoot = function(e, t) {
    if (!w(e)) throw Error(f(299));
    var a = !1, l = "", n = Yo, i = Go, s = Lo;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = jd(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      i,
      s,
      Od
    ), e[tl] = t.current, lu(e), new ju(t);
  }, Un.hydrateRoot = function(e, t, a) {
    if (!w(e)) throw Error(f(299));
    var l = !1, n = "", i = Yo, s = Go, u = Lo, o = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (u = a.onRecoverableError), a.formState !== void 0 && (o = a.formState)), t = jd(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      n,
      o,
      i,
      s,
      u,
      Od
    ), t.context = Sd(null), a = t.current, l = gt(), l = dc(l), n = da(l), n.callback = null, ma(a, n, l), a = l, t.current.lanes = a, Ll(t, a), kt(t), e[tl] = t.current, lu(e), new tc(t);
  }, Un.version = "19.2.4", Un;
}
var Qd;
function Bh() {
  if (Qd) return Eu.exports;
  Qd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (h) {
        console.error(h);
      }
  }
  return r(), Eu.exports = kh(), Eu.exports;
}
var qh = Bh();
const Yh = /* @__PURE__ */ $d(qh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lh = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (h, S, f) => f ? f.toUpperCase() : S.toLowerCase()
), Zd = (r) => {
  const h = Lh(r);
  return h.charAt(0).toUpperCase() + h.slice(1);
}, Wd = (...r) => r.filter((h, S, f) => !!h && h.trim() !== "" && f.indexOf(h) === S).join(" ").trim(), Xh = (r) => {
  for (const h in r)
    if (h.startsWith("aria-") || h === "role" || h === "title")
      return !0;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qh = {
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
const Zh = O.forwardRef(
  ({
    color: r = "currentColor",
    size: h = 24,
    strokeWidth: S = 2,
    absoluteStrokeWidth: f,
    className: w = "",
    children: k,
    iconNode: B,
    ...$
  }, R) => O.createElement(
    "svg",
    {
      ref: R,
      ...Qh,
      width: h,
      height: h,
      stroke: r,
      strokeWidth: f ? Number(S) * 24 / Number(h) : S,
      className: Wd("lucide", w),
      ...!k && !Xh($) && { "aria-hidden": "true" },
      ...$
    },
    [
      ...B.map(([N, D]) => O.createElement(N, D)),
      ...Array.isArray(k) ? k : [k]
    ]
  )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = (r, h) => {
  const S = O.forwardRef(
    ({ className: f, ...w }, k) => O.createElement(Zh, {
      ref: k,
      iconNode: h,
      className: Wd(
        `lucide-${Gh(Zd(r))}`,
        `lucide-${r}`,
        f
      ),
      ...w
    })
  );
  return S.displayName = Zd(r), S;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Kh = I("arrow-left", Vh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = [
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], $h = I("ban", Jh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Fh = I("battery", Wh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Ph = I("bell", Ih);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = [
  ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }]
], tx = I("book-user", ex);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], lx = I("bookmark", ax);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ix = I("calendar", nx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
], sx = I("cast", cx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], rx = I("check", ux);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fd = I("chevron-left", ox);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], dx = I("chevron-right", fx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Id = I("circle-alert", mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], hx = I("circle-check-big", vx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], bx = I("circle-user", xx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], px = I("clock", yx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Nx = I("download", gx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Sx = I("ellipsis-vertical", jx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Ex = I("ellipsis", zx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Pd = I("file-text", Mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
], _x = I("fingerprint", Ax);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Cx = I("globe", Tx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Dx = I("heart", wx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Tu = I("image", Ox);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], ic = I("loader-circle", Ux);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Hx = I("lock", Rx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
], Vd = I("mail-open", kx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], Kd = I("mail", Bx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Yx = I("message-circle", qx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gx = [
  ["path", { d: "M12 19h.01", key: "1wutuc" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M16 19h.01", key: "1vcnzz" }],
  ["path", { d: "M16 3h.01", key: "ll0zb8" }],
  ["path", { d: "M2 13h.01", key: "1aptou" }],
  [
    "path",
    { d: "M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8", key: "4cp7zq" }
  ],
  ["path", { d: "M2 5a2 2 0 0 1 2-2", key: "1iztiu" }],
  ["path", { d: "M2 9h.01", key: "1nzd1v" }],
  ["path", { d: "M20 3a2 2 0 0 1 2 2", key: "m48m3a" }],
  ["path", { d: "M22 13h.01", key: "ke7esy" }],
  ["path", { d: "M22 17a2 2 0 0 1-2 2", key: "17q5fo" }],
  ["path", { d: "M22 9h.01", key: "npkp49" }],
  ["path", { d: "M8 3h.01", key: "133hau" }]
], Lx = I("message-square-dashed", Gx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], Cu = I("message-square", Xx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], Zx = I("navigation", Qx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [
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
], Kx = I("package", Vx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], em = I("pen-line", Jx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], nc = I("pen", $x);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
], Fx = I("plug", Wx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], tm = I("plus", Ix);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Du = I("refresh-cw", Px);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], cc = I("save", e0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], am = I("search", t0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ta = I("send", a0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sc = I("settings", l0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], i0 = I("smile", n0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], s0 = I("square-check-big", c0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Hn = I("trash-2", u0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], o0 = I("trash", r0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], d0 = I("upload", f0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], v0 = I("user-plus", m0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], lm = I("user-minus", h0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = [
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
], b0 = I("wand-sparkles", x0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], p0 = I("wifi", y0);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], wa = I("x", g0), N0 = ({ onUnlock: r }) => {
  var Q;
  const [h, S] = O.useState(!1), [f, w] = O.useState(0), [k, B] = O.useState(!1), $ = O.useRef(null), R = O.useRef(null), N = () => {
    k || S(!0);
  }, D = (V) => {
    if (!h || k || !$.current || !R.current) return;
    const J = $.current.getBoundingClientRect(), te = R.current.offsetWidth, se = J.width - te - 8;
    let ue = V - J.left - te / 2;
    ue = Math.max(0, Math.min(ue, se)), w(ue), ue >= se * 0.95 && (B(!0), S(!1), w(se), setTimeout(() => {
      r();
    }, 300));
  }, q = () => {
    k || (S(!1), w(0));
  };
  return O.useEffect(() => {
    const V = (se) => D(se.clientX), J = (se) => D(se.touches[0].clientX), te = () => q();
    return h && (window.addEventListener("mousemove", V), window.addEventListener("touchmove", J), window.addEventListener("mouseup", te), window.addEventListener("touchend", te)), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("touchmove", J), window.removeEventListener("mouseup", te), window.removeEventListener("touchend", te);
    };
  }, [h, k]), /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: $,
      className: "slider-track relative w-full max-w-sm h-16 rounded-full flex items-center px-1 overflow-hidden group",
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "absolute inset-0 bg-[var(--accent-color)] opacity-20 transition-opacity duration-300",
            style: { width: `${f / (((Q = $.current) == null ? void 0 : Q.offsetWidth) || 1) * 100 + 15}%` }
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ c.jsx("span", { className: "text-[var(--text-secondary)] font-mono text-sm tracking-widest group-hover:text-[var(--text-primary)] transition-colors", children: k ? "ACCESS GRANTED" : "SLIDE TO UNLOCK" }) }),
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            ref: R,
            className: `slider-thumb absolute h-14 w-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform ${!h && !k ? "duration-300" : "duration-0"}`,
            style: { transform: `translateX(${f}px)` },
            onMouseDown: N,
            onTouchStart: N,
            children: [
              /* @__PURE__ */ c.jsx(dx, { className: `text-[var(--accent-color)] ${k ? "opacity-0" : "opacity-100"}` }),
              k && /* @__PURE__ */ c.jsx("div", { className: "absolute w-3 h-3 bg-emerald-400 rounded-full animate-ping" })
            ]
          }
        )
      ]
    }
  );
}, j0 = ({ onUnlock: r }) => {
  const [h, S] = O.useState(/* @__PURE__ */ new Date());
  return O.useEffect(() => {
    const f = setInterval(() => S(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(f);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-between py-20 px-6 bg-[var(--bg-base)] transition-colors duration-500", children: [
    /* @__PURE__ */ c.jsx("div", { className: "bokeh bokeh-1" }),
    /* @__PURE__ */ c.jsx("div", { className: "bokeh bokeh-2" }),
    /* @__PURE__ */ c.jsx("div", { className: "scanlines" }),
    /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col items-center mt-10", children: [
      /* @__PURE__ */ c.jsx(Hx, { className: "text-[var(--accent-color)] mb-6 opacity-50", size: 32 }),
      /* @__PURE__ */ c.jsx("h1", { className: "text-6xl font-light tracking-wider text-[var(--text-primary)] mb-2 font-mono", children: h.toLocaleTimeString("zh-CN", { hour12: !1, hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ c.jsx("p", { className: "text-[var(--text-secondary)] tracking-widest text-sm uppercase", children: h.toLocaleDateString("zh-CN", { weekday: "long", month: "long", day: "numeric" }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col items-center w-full gap-12", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "w-16 h-16 rounded-full border border-[var(--wireframe)] flex items-center justify-center bg-[var(--bubble-bg)] backdrop-blur-md relative overflow-hidden", children: [
          /* @__PURE__ */ c.jsx(_x, { className: "text-[var(--accent-color)]", size: 28 }),
          /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-color)] to-transparent opacity-20 animate-[scan_2s_ease-in-out_infinite]" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-[var(--text-secondary)] text-xs tracking-widest font-mono", children: "IDENTITY VERIFICATION" })
      ] }),
      /* @__PURE__ */ c.jsx(N0, { onUnlock: r })
    ] }),
    /* @__PURE__ */ c.jsx("style", { children: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      ` })
  ] });
}, lc = ({ isOpen: r, onClose: h, title: S, children: f }) => r ? /* @__PURE__ */ c.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6", children: [
  /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity",
      onClick: h
    }
  ),
  /* @__PURE__ */ c.jsxs("div", { className: "glass-card relative w-full max-w-2xl max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 clip-corner overflow-hidden", children: [
    S && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ c.jsx("h2", { className: "text-lg font-light tracking-widest text-[var(--text-primary)]", children: S }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: h,
          className: "p-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors",
          children: /* @__PURE__ */ c.jsx(wa, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: `overflow-y-auto flex-1 bg-[var(--card-bg)] ${S ? "p-6" : "p-0"}`, children: f })
  ] })
] }) : null, S0 = {
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
function Ca(r, h) {
  let S = r;
  for (const [f, w] of Object.entries(h))
    S = S.replace(new RegExp(`{{${f}}}`, "g"), w);
  return S;
}
const z0 = [
  { id: 5, name: "Kaelen (领航员)", lastMessage: "明天几点跃迁？", time: "昨天", unread: !1, type: "user", avatar: "https://picsum.photos/seed/k/100/100", online: !0, description: "一位经验丰富的星际领航员，性格沉稳，总是能在复杂的星域中找到最安全的航线。" },
  { id: 6, name: "Elara (机械师)", lastMessage: "引擎维护报告已提交。", time: "昨天", unread: !1, type: "user", avatar: "https://picsum.photos/seed/e/100/100", online: !1, description: "天才机械师，对各种飞船引擎了如指掌，说话直接，工作狂。" }
], E0 = [
  { id: 1, author: "Kaelen (领航员)", avatar: "https://picsum.photos/seed/k/100/100", content: "刚刚穿过猎户座旋臂，星云的颜色比上次更深了。导航系统一切正常。", time: "2小时前", likes: 12, comments: [{ id: 1, author: "Elara (机械师)", text: "注意安全。" }], image: "https://picsum.photos/seed/nebula/400/200" },
  { id: 2, author: "Elara (机械师)", avatar: "https://picsum.photos/seed/e/100/100", content: "三号引擎的等离子注入器又堵了，这些便宜的配件真让人头疼。", time: "5小时前", likes: 8, comments: [] }
], M0 = [
  { id: 1, from: "星际舰队指挥部", to: "指挥官", subject: "关于近期星域巡逻任务的调整", body: "指挥官，根据最新情报，边缘星域出现异常能量波动，请立即调整巡逻路线前往调查。", snippet: "指挥官，根据最新情报，边缘星域出现异常能量波动...", time: "10:00", isRead: !1, status: "inbox", type: "system" },
  { id: 2, from: "后勤保障部", to: "指挥官", subject: "本月物资补给清单", body: "本月物资补给已抵达空间站，请查收附件中的清单并安排人员接收。", snippet: "本月物资补给已抵达空间站，请查收附件中的清单...", time: "昨天", isRead: !0, status: "inbox", type: "update" }
], W = {
  getContacts: () => {
    const r = localStorage.getItem("st_contacts");
    return r ? JSON.parse(r) : z0;
  },
  saveContacts: (r) => localStorage.setItem("st_contacts", JSON.stringify(r)),
  getChats: (r) => {
    const h = localStorage.getItem(`st_chats_${r}`);
    return h ? JSON.parse(h) : null;
  },
  saveChats: (r, h) => localStorage.setItem(`st_chats_${r}`, JSON.stringify(h)),
  getMoments: () => {
    const r = localStorage.getItem("st_moments");
    return r ? JSON.parse(r) : E0;
  },
  saveMoments: (r) => localStorage.setItem("st_moments", JSON.stringify(r)),
  getEmails: () => {
    const r = localStorage.getItem("st_emails");
    return r ? JSON.parse(r) : M0;
  },
  saveEmails: (r) => localStorage.setItem("st_emails", JSON.stringify(r)),
  getPromptTemplates: () => {
    const r = localStorage.getItem("st_prompt_templates");
    return r ? JSON.parse(r) : S0;
  },
  savePromptTemplates: (r) => localStorage.setItem("st_prompt_templates", JSON.stringify(r)),
  getChatPrompt: () => {
    const r = localStorage.getItem("st_prompt_chatReply");
    return r ? JSON.parse(r) : {
      systemPrompt: "你扮演{{characterName}}，{{characterDescription}}。请保持角色，用第一人称回复，回复风格自然简短。",
      userPromptPrefix: ""
    };
  },
  saveChatPrompt: (r) => localStorage.setItem("st_prompt_chatReply", JSON.stringify(r)),
  getMomentPrompt: () => {
    const r = localStorage.getItem("st_prompt_moment");
    return r ? JSON.parse(r) : {
      momentPrompt: "你是{{characterName}}，{{characterDescription}}。请以你的身份发一条星网动态（类似朋友圈），语气自然，50-100字，可带1-2个emoji，第一人称。",
      momentFromChatPrompt: `你是{{characterName}}，{{characterDescription}}。根据以下近期聊天内容，以你的身份发一条星网动态，50-100字：
{{recentChatSummary}}`
    };
  },
  saveMomentPrompt: (r) => localStorage.setItem("st_prompt_moment", JSON.stringify(r)),
  getEmailPrompt: () => {
    const r = localStorage.getItem("st_prompt_email");
    return r ? JSON.parse(r) : {
      emailReplyPrompt: `你是指挥官{{userName}}。请为以下邮件生成一封回复（100-200字，第一人称，正式的星际通讯风格）：
发件人：{{sender}}
主题：{{subject}}
内容：{{emailContent}}`,
      emailComposePrompt: `你是指挥官{{userName}}。请生成一封邮件正文（150-300字，正式星际通讯风格，署名{{userName}}）：
收件人：{{recipientName}}
主题：{{emailSubject}}`
    };
  },
  saveEmailPrompt: (r) => localStorage.setItem("st_prompt_email", JSON.stringify(r)),
  getGlobalSettings: () => {
    const r = localStorage.getItem("st_global_settings"), h = r ? JSON.parse(r) : {};
    return {
      userName: h.userName || "生菜来来",
      userPersona: h.userPersona || "一名普通的星际旅行者，对未知充满好奇。",
      avatarUrl: h.avatarUrl || "https://picsum.photos/seed/avatar/200/200",
      apiMode: h.apiMode || "gemini",
      apiPresets: h.apiPresets || [],
      customApiUrl: h.customApiUrl || "",
      customApiKey: h.customApiKey || "",
      customApiModel: h.customApiModel || "",
      profileBgUrl: h.profileBgUrl || "",
      tag: h.tag || "深空观察者",
      customFontUrl: h.customFontUrl || "",
      fontSizeScale: h.fontSizeScale || 1,
      moduleBgs: h.moduleBgs || {
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
  saveGlobalSettings: (r) => localStorage.setItem("st_global_settings", JSON.stringify(r))
};
async function A0(r) {
  var w, k;
  const h = (k = (w = window.SillyTavern) == null ? void 0 : w.getContext) == null ? void 0 : k.call(w);
  if (!h) throw new Error("无法获取酒馆上下文");
  const S = [
    { role: "system", content: r.systemPrompt },
    ...(r.chatHistory || []).map((B) => ({ role: B.role, content: B.content })),
    { role: "user", content: r.userInput }
  ], f = h.generateRaw ?? window.generateRaw;
  if (f) {
    const B = await f(S, "", !1, !1);
    return typeof B == "string" ? B : (B == null ? void 0 : B.text) ?? "";
  }
  throw new Error("酒馆 generateRaw 不可用");
}
async function _0(r, h) {
  var w, k, B;
  const S = await fetch(`${h.customApiUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${h.customApiKey || ""}`
    },
    body: JSON.stringify({
      model: h.customApiModel || "gpt-3.5-turbo",
      messages: [
        { role: "system", content: r.systemPrompt },
        ...(r.chatHistory || []).map(($) => ({ role: $.role, content: $.content })),
        { role: "user", content: r.userInput }
      ]
    })
  });
  if (!S.ok) throw new Error(`API 错误: ${S.status} ${S.statusText}`);
  return ((B = (k = (w = (await S.json()).choices) == null ? void 0 : w[0]) == null ? void 0 : k.message) == null ? void 0 : B.content) ?? "";
}
async function kn(r) {
  const h = W.getGlobalSettings();
  if (h.apiMode === "custom" && h.customApiUrl)
    return _0(r, h);
  try {
    return await A0(r);
  } catch {
    throw new Error("请在星际终端设置中配置自定义 API，或确保酒馆已连接 AI 模型。");
  }
}
const T0 = ({ contact: r, onClose: h, onUpdateContact: S }) => {
  const [f, w] = O.useState(W.getChatPrompt()), [k, B] = O.useState(r.chatAiSettings || {
    systemPrompt: "",
    userPromptPrefix: "",
    overrideName: r.name,
    overrideDescription: r.description || "",
    overridePersonality: "",
    overrideDialogueExamples: "",
    worldInfoExtra: ""
  }), $ = () => {
    w({
      systemPrompt: "你扮演{{characterName}}，{{characterDescription}}。请保持角色，用第一人称回复，回复风格自然简短。",
      userPromptPrefix: ""
    });
  }, R = () => {
    B((D) => ({
      ...D,
      overrideDescription: r.description || ""
    }));
  }, N = () => {
    W.saveChatPrompt(f), S({
      ...r,
      chatAiSettings: k
    }), h();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-lg h-[80vh] flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "AI 回复设置" }),
      /* @__PURE__ */ c.jsx("button", { onClick: h, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center border-b border-[var(--wireframe)] pb-2", children: [
          /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest text-[var(--text-primary)]", children: "回复提示词" }),
          /* @__PURE__ */ c.jsxs("button", { onClick: $, className: "text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1", children: [
            /* @__PURE__ */ c.jsx(Du, { size: 12 }),
            " 重置默认"
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "系统提示词" }),
          /* @__PURE__ */ c.jsx(
            "textarea",
            {
              value: f.systemPrompt,
              onChange: (D) => w({ ...f, systemPrompt: D.target.value }),
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "用户提示词前缀 (可选)" }),
          /* @__PURE__ */ c.jsx(
            "textarea",
            {
              value: f.userPromptPrefix,
              onChange: (D) => w({ ...f, userPromptPrefix: D.target.value }),
              placeholder: "留空则直接发送用户消息",
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[60px]"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("p", { className: "text-[10px] text-[var(--text-secondary)]", children: [
          "可用变量：",
          "{{characterName}}",
          " 角色名  ",
          "{{characterDescription}}",
          " 角色描述",
          /* @__PURE__ */ c.jsx("br", {}),
          "{{userName}}",
          " 用户名称  ",
          "{{userPersona}}",
          " 用户人设（在系统设置中配置）"
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center border-b border-[var(--wireframe)] pb-2", children: [
          /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest text-[var(--text-primary)]", children: "角色设定" }),
          /* @__PURE__ */ c.jsxs("button", { onClick: R, className: "text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1", children: [
            /* @__PURE__ */ c.jsx(Nx, { size: 12 }),
            " 从联系人角色卡读取"
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "角色名称" }),
          /* @__PURE__ */ c.jsx(
            "input",
            {
              type: "text",
              value: k.overrideName,
              onChange: (D) => B({ ...k, overrideName: D.target.value }),
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "角色描述" }),
          /* @__PURE__ */ c.jsx(
            "textarea",
            {
              value: k.overrideDescription,
              onChange: (D) => B({ ...k, overrideDescription: D.target.value }),
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "角色性格" }),
          /* @__PURE__ */ c.jsx(
            "textarea",
            {
              value: k.overridePersonality,
              onChange: (D) => B({ ...k, overridePersonality: D.target.value }),
              placeholder: "留空则不覆盖",
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[60px]"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "对话示例" }),
          /* @__PURE__ */ c.jsx(
            "textarea",
            {
              value: k.overrideDialogueExamples,
              onChange: (D) => B({ ...k, overrideDialogueExamples: D.target.value }),
              placeholder: "示例：\\nUser: 你好\\nAssistant: 你好，我是...",
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "border-b border-[var(--wireframe)] pb-2", children: [
          /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest text-[var(--text-primary)]", children: "世界书补充" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-[10px] text-[var(--text-secondary)] mt-1", children: "在此填写补充的世界观背景信息，将作为额外的系统提示词注入" })
        ] }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: k.worldInfoExtra,
            onChange: (D) => B({ ...k, worldInfoExtra: D.target.value }),
            placeholder: "填写额外的世界观设定、场景背景等...",
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end", children: /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: N,
        className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors",
        children: [
          /* @__PURE__ */ c.jsx(cc, { size: 16 }),
          " 保存设置"
        ]
      }
    ) })
  ] }) });
};
function C0(r) {
  const h = r.trim(), S = h.split(/\n{2,}/).map((B) => B.trim()).filter((B) => B.length >= 4);
  if (S.length >= 2) return S.slice(0, 4);
  const f = h.split(new RegExp("(?<=[。！？…～」』])\\n|(?<=[！？。])\\s{2,}")).map((B) => B.trim()).filter((B) => B.length >= 4);
  if (f.length >= 2) return f.slice(0, 4);
  if (h.length < 60) return [h];
  const w = Math.floor(h.length / 2), k = ["。", "！", "？", "～", `
`];
  for (let B = 0; B < 30; B++)
    for (const $ of k) {
      const R = h.indexOf($, w - B);
      if (R !== -1 && R < h.length - 4)
        return [h.slice(0, R + 1).trim(), h.slice(R + 1).trim()].filter((N) => N.length >= 4);
    }
  return [h];
}
const w0 = ({ contact: r, onBack: h, onUpdateContact: S, onDeleteContact: f, settings: w }) => {
  const [k, B] = O.useState(() => {
    const H = W.getChats(r.id);
    return H !== null ? H : r.lastMessage ? [{ id: 1, text: r.lastMessage, sender: "them", time: r.time, read: !0 }] : [];
  }), [$, R] = O.useState(!1), [N, D] = O.useState(null), [q, Q] = O.useState(""), [V, J] = O.useState(!1), [te, se] = O.useState(!1), [ue, De] = O.useState(r.name), [A, ae] = O.useState(null), [ze, z] = O.useState(r.avatar), [y, oe] = O.useState(null), [fe, U] = O.useState(""), [ee, de] = O.useState(!1), [Qe, Ze] = O.useState(""), Ae = O.useRef(null), E = (w == null ? void 0 : w.avatarUrl) || "https://picsum.photos/seed/me/100/100", p = ["😀", "😂", "🥰", "😎", "😭", "😡", "👍", "🙏", "🎉", "❤️"], G = O.useRef(r.id);
  O.useEffect(() => {
    if (r.id !== G.current) {
      G.current = r.id;
      const H = W.getChats(r.id);
      H !== null ? B(H) : r.lastMessage ? B([{ id: 1, text: r.lastMessage, sender: "them", time: r.time, read: !0 }]) : B([]);
    }
  }, [r.id, r.lastMessage, r.time]), O.useEffect(() => {
    G.current === r.id && W.saveChats(r.id, k);
  }, [k, r.id]);
  const re = () => {
    var H;
    (H = Ae.current) == null || H.scrollIntoView({ behavior: "smooth" });
  };
  O.useEffect(() => {
    re();
  }, [k]);
  const pe = () => {
    if (!q.trim()) return;
    const H = {
      id: Date.now(),
      text: q.trim(),
      sender: "me",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      read: !1
    };
    B([...k, H]), Q(""), setTimeout(() => {
      B((P) => P.map((ye) => ye.id === H.id ? { ...ye, read: !0 } : ye));
    }, 1e3);
  }, m = async () => {
    if (!$) {
      R(!0), D(null);
      try {
        const H = W.getChatPrompt(), P = r.chatAiSettings || {
          systemPrompt: "",
          userPromptPrefix: "",
          overrideName: r.name,
          overrideDescription: r.description || "一个神秘的星际联系人",
          overridePersonality: "",
          overrideDialogueExamples: "",
          worldInfoExtra: ""
        }, ye = W.getGlobalSettings();
        let ge = Ca(H.systemPrompt, {
          characterName: P.overrideName || r.name,
          characterDescription: P.overrideDescription || r.description || "一个神秘的星际联系人",
          userName: ye.userName || "指挥官",
          userPersona: ye.userPersona || ""
        });
        P.overridePersonality && (ge += `

【性格设定】
${P.overridePersonality}`), P.overrideDialogueExamples && (ge += `

【对话示例】
${P.overrideDialogueExamples}`), P.worldInfoExtra && (ge += `

【世界观补充】
${P.worldInfoExtra}`), ge += `

【回复格式】用自然的网络聊天风格，如果要表达多个意思，用两个换行（空行）分段，每段相当于单独发出的一条消息，单段不超过80字。`;
        const Da = k.slice(-12).map((tt) => ({
          role: tt.sender === "me" ? "user" : "assistant",
          content: tt.text
        })), la = [...k].reverse().find((tt) => tt.sender === "me"), Pa = (la == null ? void 0 : la.text) || "你好", qn = H.userPromptPrefix ? `${H.userPromptPrefix}
${Pa}` : Pa, Bt = await kn({
          systemPrompt: ge,
          chatHistory: Da,
          userInput: qn
        }), Oa = C0(Bt);
        R(!1);
        for (let tt = 0; tt < Oa.length; tt++) {
          if (tt > 0) {
            R(!0);
            const ql = 500 + Oa[tt].length * 25 + Math.random() * 300;
            await new Promise((el) => setTimeout(el, ql)), R(!1), await new Promise((el) => setTimeout(el, 80));
          }
          B((ql) => [...ql, {
            id: Date.now() + tt,
            text: Oa[tt],
            sender: "them",
            time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
            read: !0
          }]);
        }
      } catch (H) {
        console.error("AI Reply Error:", H), D("连接星网失败，请稍后重试。"), R(!1), setTimeout(() => D(null), 3e3);
      }
    }
  }, T = () => {
    if (!Qe.trim()) return;
    const H = {
      id: Date.now(),
      text: "[自定义表情]",
      sender: "me",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      read: !1,
      image: Qe.trim()
    };
    B([...k, H]), Ze(""), de(!1), setTimeout(() => {
      B((P) => P.map((ye) => ye.id === H.id ? { ...ye, read: !0 } : ye));
    }, 1e3);
  }, Y = () => {
    if (y === "bg")
      ae(fe.trim() || null);
    else if (y === "avatar")
      z(fe.trim() || r.avatar);
    else if (y === "block")
      f(r.id), h();
    else if (y === "sendImage" && fe.trim()) {
      const H = {
        id: Date.now(),
        text: `[图片] ${fe.trim()}`,
        sender: "me",
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
        read: !1,
        image: fe.trim()
      };
      B([...k, H]), setTimeout(() => {
        B((P) => P.map((ye) => ye.id === H.id ? { ...ye, read: !0 } : ye));
      }, 1e3);
    }
    oe(null), U("");
  }, L = () => {
    ue.trim() && ue !== r.name && S({ ...r, name: ue.trim() }), se(!1), J(!1);
  }, le = () => {
    f(r.id), h();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col h-full w-full bg-[var(--bg-base)] relative overflow-hidden animate-in slide-in-from-right-full duration-300", children: [
    A && /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-30",
        style: { backgroundImage: `url(${A})`, backgroundSize: "cover", backgroundPosition: "center" }
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-20", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center flex-1 min-w-0", children: [
        /* @__PURE__ */ c.jsx("button", { onClick: h, className: "p-2 -ml-2 mr-1 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0", children: /* @__PURE__ */ c.jsx(Fd, { size: 24 }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center flex-1 min-w-0", children: [
          r.type === "system" ? /* @__PURE__ */ c.jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${r.bgColor} border border-[var(--wireframe)] shrink-0 mr-3`, children: r.icon && /* @__PURE__ */ c.jsx(r.icon, { className: r.color, size: 16 }) }) : /* @__PURE__ */ c.jsxs("div", { className: "w-8 h-8 rounded-full border border-[var(--wireframe)] p-0.5 bg-[var(--card-bg)] shrink-0 mr-3 relative", children: [
            /* @__PURE__ */ c.jsx("img", { src: ze || void 0, alt: r.name, className: "w-full h-full rounded-full object-cover", referrerPolicy: "no-referrer" }),
            r.online && /* @__PURE__ */ c.jsx("div", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-base)] bg-emerald-400" })
          ] }),
          te ? /* @__PURE__ */ c.jsx("div", { className: "flex items-center flex-1 mr-2", children: /* @__PURE__ */ c.jsx(
            "input",
            {
              type: "text",
              value: ue,
              onChange: (H) => De(H.target.value),
              className: "bg-[var(--bg-base)] border border-[var(--accent-color)] rounded px-2 py-1 text-sm text-[var(--text-primary)] w-full outline-none",
              autoFocus: !0,
              onBlur: L,
              onKeyDown: (H) => H.key === "Enter" && L()
            }
          ) }) : /* @__PURE__ */ c.jsx("h2", { className: "text-lg font-medium tracking-wide text-[var(--text-primary)] truncate", children: r.name })
        ] })
      ] }),
      r.type === "user" && /* @__PURE__ */ c.jsxs("div", { className: "relative shrink-0 ml-2", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => J(!V),
            className: "p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors",
            children: /* @__PURE__ */ c.jsx(Sx, { size: 20 })
          }
        ),
        V && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-40", onClick: () => J(!1) }),
          /* @__PURE__ */ c.jsxs("div", { className: "absolute right-0 top-full mt-3 w-36 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200", children: [
            /* @__PURE__ */ c.jsx("div", { className: "absolute -top-2 right-3 w-4 h-4 bg-[var(--bg-base)] border-t border-l border-[var(--wireframe)] transform rotate-45" }),
            /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col py-2", children: [
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    se(!0), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(nc, { size: 18, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                    " 修改备注"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    oe("avatar"), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(bx, { size: 18, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                    " 修改头像"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    oe("bg"), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(Tu, { size: 18, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                    " 修改聊天背景"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    B([]), W.saveChats(r.id, []), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(o0, { size: 18, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                    " 清空聊天记录"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] my-1 mx-4" }),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    oe("aiSettings"), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(sc, { size: 18, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                    " AI 回复设置"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] my-1 mx-4" }),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => {
                    oe("block"), J(!1);
                  },
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-rose-500 text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx($h, { size: 18, className: "text-rose-500", strokeWidth: 1.5 }),
                    " 拉黑"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: le,
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-rose-500 text-[15px] text-left transition-colors",
                  children: [
                    /* @__PURE__ */ c.jsx(lm, { size: 18, className: "text-rose-500", strokeWidth: 1.5 }),
                    " 删除好友"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-6 relative z-10 flex flex-col", children: [
      k.map((H, P) => {
        const ye = k[P - 1], ge = ye && ye.sender === H.sender;
        return /* @__PURE__ */ c.jsx("div", { className: `flex w-full ${H.sender === "me" ? "justify-end" : "justify-start"}`, children: H.sender === "me" ? /* @__PURE__ */ c.jsxs("div", { className: `flex items-end gap-3 max-w-[85%] ${ge ? "pr-[52px]" : ""}`, children: [
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col items-end gap-1", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
            H.read && /* @__PURE__ */ c.jsx("span", { className: "text-[11px] text-[var(--text-secondary)]", children: "已读" }),
            /* @__PURE__ */ c.jsx("div", { className: "bg-[var(--bubble-bg)] text-[var(--text-primary)] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-[var(--wireframe)]", children: H.image ? /* @__PURE__ */ c.jsx("img", { src: H.image || void 0, alt: "Sent image", className: "max-w-full rounded-lg max-h-48 object-cover" }) : /* @__PURE__ */ c.jsx("p", { className: "text-[15px] leading-relaxed break-words whitespace-pre-wrap", children: H.text.replace("[图片] ", "") }) })
          ] }) }),
          !ge && /* @__PURE__ */ c.jsx("img", { src: E, alt: "Me", className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" })
        ] }) : /* @__PURE__ */ c.jsxs("div", { className: `flex items-end gap-2 sm:gap-3 max-w-[85%] ${ge ? "pl-[52px]" : ""}`, children: [
          !ge && /* @__PURE__ */ c.jsx("img", { src: ze || void 0, alt: r.name, className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col items-start gap-1", children: /* @__PURE__ */ c.jsx("div", { className: "bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm", children: H.image ? /* @__PURE__ */ c.jsx("img", { src: H.image || void 0, alt: "Received image", className: "max-w-full rounded-lg max-h-48 object-cover" }) : /* @__PURE__ */ c.jsx("p", { className: "text-[15px] leading-relaxed break-words whitespace-pre-wrap", children: H.text }) }) })
        ] }) }, H.id);
      }),
      $ && /* @__PURE__ */ c.jsx("div", { className: "flex w-full justify-start", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-end gap-2 sm:gap-3 max-w-[85%]", children: [
        /* @__PURE__ */ c.jsx("img", { src: ze, alt: r.name, className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow-sm border border-[var(--wireframe)]", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ c.jsx("div", { className: "flex flex-col items-start gap-1", children: /* @__PURE__ */ c.jsxs("div", { className: "bg-[var(--accent-color)] text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center space-x-1", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ c.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ c.jsx("div", { className: "w-2 h-2 rounded-full bg-white/70 animate-bounce", style: { animationDelay: "300ms" } })
        ] }) })
      ] }) }),
      N && /* @__PURE__ */ c.jsx("div", { className: "flex justify-center my-2", children: /* @__PURE__ */ c.jsx("div", { className: "bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-3 py-1.5 rounded-full", children: N }) }),
      /* @__PURE__ */ c.jsx("div", { ref: Ae })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "p-2 sm:p-4 bg-transparent shrink-0 relative z-20", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded-full flex items-center px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm focus-within:border-[var(--accent-color)] transition-all relative", children: [
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: q,
            onChange: (H) => Q(H.target.value),
            onKeyDown: (H) => {
              H.key === "Enter" && !H.shiftKey && (H.preventDefault(), pe());
            },
            placeholder: "",
            className: "flex-1 bg-transparent text-[15px] text-[var(--text-primary)] outline-none h-8 min-w-0"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2 text-[var(--text-secondary)] shrink-0", children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: () => de(!ee),
              className: "hover:text-[var(--accent-color)] transition-colors p-1",
              title: "发送表情",
              children: /* @__PURE__ */ c.jsx(i0, { size: 22, strokeWidth: 1.5 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: () => oe("sendImage"),
              className: "hover:text-[var(--accent-color)] transition-colors p-1",
              title: "发送图片",
              children: /* @__PURE__ */ c.jsx(tm, { size: 24, strokeWidth: 1.5 })
            }
          )
        ] }),
        ee && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-40", onClick: () => de(!1) }),
          /* @__PURE__ */ c.jsxs("div", { className: "absolute bottom-full right-0 mb-2 w-64 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200 p-3", children: [
            /* @__PURE__ */ c.jsx("h4", { className: "text-xs text-[var(--text-secondary)] mb-2", children: "常用表情" }),
            /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-5 gap-2 mb-3", children: p.map((H) => /* @__PURE__ */ c.jsx(
              "button",
              {
                onClick: () => {
                  Q((P) => P + H), de(!1);
                },
                className: "text-2xl hover:bg-[var(--bubble-bg)] rounded p-1 transition-colors",
                children: H
              },
              H
            )) }),
            /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] mb-3" }),
            /* @__PURE__ */ c.jsx("h4", { className: "text-xs text-[var(--text-secondary)] mb-2", children: "自定义表情 (URL)" }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  value: Qe,
                  onChange: (H) => Ze(H.target.value),
                  placeholder: "图片URL",
                  className: "flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-2 py-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  onClick: T,
                  disabled: !Qe.trim(),
                  className: "px-3 py-1 bg-[var(--accent-color)] text-white rounded text-sm disabled:opacity-50",
                  children: "发送"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: m,
          disabled: $,
          className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors shrink-0 shadow-sm disabled:opacity-50",
          title: "AI 回复",
          children: $ ? /* @__PURE__ */ c.jsx(ic, { size: 20, strokeWidth: 1.5, className: "animate-spin" }) : /* @__PURE__ */ c.jsx(Lx, { size: 20, strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: pe,
          disabled: !q.trim(),
          className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm",
          children: /* @__PURE__ */ c.jsx(Ta, { size: 18, className: "ml-0.5" })
        }
      )
    ] }) }),
    y === "aiSettings" ? /* @__PURE__ */ c.jsx(
      T0,
      {
        contact: r,
        onClose: () => oe(null),
        onUpdateContact: S
      }
    ) : y && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
      /* @__PURE__ */ c.jsxs("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest border-b border-[var(--wireframe)] pb-2", children: [
        y === "bg" && "设置聊天背景",
        y === "avatar" && "修改好友头像",
        y === "block" && "确认拉黑",
        y === "sendImage" && "发送图片"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "py-2 flex flex-col gap-3", children: [
        (y === "bg" || y === "avatar" || y === "sendImage") && /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: fe,
            onChange: (H) => U(H.target.value),
            placeholder: y === "sendImage" ? "输入图片URL" : "输入图片URL (留空清除/恢复默认)",
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]",
            autoFocus: !0
          }
        ),
        y === "block" && /* @__PURE__ */ c.jsx("p", { className: "text-[var(--text-primary)]", children: "确定要将此联系人加入黑名单吗？加入后将无法收到对方的消息。" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-3 mt-2", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => {
              oe(null), U("");
            },
            className: "px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bubble-bg)] transition-colors",
            children: "取消"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: Y,
            className: `px-4 py-2 rounded transition-colors ${y === "block" ? "bg-rose-500/20 border border-rose-500 text-rose-500 hover:bg-rose-500/40" : "bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40"}`,
            children: "确认"
          }
        )
      ] })
    ] }) })
  ] });
}, D0 = ({ onClose: r }) => {
  const [h, S] = O.useState(W.getMomentPrompt()), f = () => {
    W.saveMomentPrompt(h), r();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "动态 AI 设置" }),
      /* @__PURE__ */ c.jsx("button", { onClick: r, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "发布动态 AI 提示词" }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: h.momentPrompt,
            onChange: (w) => S({ ...h, momentPrompt: w.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "从聊天记录生成提示词" }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: h.momentFromChatPrompt,
            onChange: (w) => S({ ...h, momentFromChatPrompt: w.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "text-[10px] text-[var(--text-secondary)]", children: [
        "可用变量：",
        "{{characterName}}",
        " ",
        "{{characterDescription}}",
        " ",
        "{{recentChatSummary}}"
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end", children: /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: f,
        className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors",
        children: [
          /* @__PURE__ */ c.jsx(cc, { size: 16 }),
          " 保存"
        ]
      }
    ) })
  ] }) });
}, O0 = ({ onClose: r, onPublish: h }) => {
  const [S, f] = O.useState("custom"), [w, k] = O.useState(""), [B, $] = O.useState(""), [R, N] = O.useState("manual"), [D, q] = O.useState(""), [Q, V] = O.useState(""), [J, te] = O.useState(""), [se, ue] = O.useState(!1), [De, A] = O.useState([]);
  O.useEffect(() => {
    A(W.getContacts());
  }, []);
  const ae = () => {
    w.trim() && (h({
      author: "我",
      avatar: W.getGlobalSettings().avatarUrl,
      content: w.trim(),
      image: B.trim() || void 0
    }), r());
  }, ze = () => {
    J.trim() && (h({
      author: "我",
      avatar: W.getGlobalSettings().avatarUrl,
      content: J.trim()
    }), r());
  }, z = async () => {
    ue(!0);
    try {
      const y = W.getMomentPrompt(), oe = W.getGlobalSettings();
      let fe = "", U = "";
      if (R === "manual")
        fe = Ca(y.momentPrompt, {
          characterName: oe.userName,
          characterDescription: oe.tag || "深空观察者"
        }), U = `请根据以下主题生成动态：${D}`;
      else {
        if (!Q) return;
        const de = De.find((Ae) => Ae.id === Number(Q));
        if (!de) return;
        const Ze = W.getChats(de.id).slice(-10).map((Ae) => `${Ae.sender === "me" ? "我" : de.name}: ${Ae.text}`).join(`
`);
        fe = Ca(y.momentFromChatPrompt, {
          characterName: oe.userName,
          characterDescription: oe.tag || "深空观察者",
          recentChatSummary: Ze
        }), U = "请生成动态。";
      }
      const ee = await kn({
        systemPrompt: fe,
        userInput: U
      });
      te(ee);
    } catch (y) {
      console.error("Failed to generate moment:", y), te("生成失败，请重试。");
    } finally {
      ue(!1);
    }
  };
  return /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "发布动态" }),
      /* @__PURE__ */ c.jsx("button", { onClick: r, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex border-b border-[var(--wireframe)]", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          className: `flex-1 py-3 text-sm font-medium transition-colors ${S === "custom" ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          onClick: () => f("custom"),
          children: "自定义发布"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          className: `flex-1 py-3 text-sm font-medium transition-colors ${S === "ai" ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          onClick: () => f("ai"),
          children: "AI 生成"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "p-6 space-y-4", children: S === "custom" ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          value: w,
          onChange: (y) => k(y.target.value),
          placeholder: "分享你的星际动态...",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[120px]"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: "text",
          value: B,
          onChange: (y) => $(y.target.value),
          placeholder: "配图 URL (可选，留空则无图)",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]"
        }
      ),
      /* @__PURE__ */ c.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: ae,
          disabled: !w.trim(),
          className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50",
          children: [
            /* @__PURE__ */ c.jsx(Ta, { size: 16 }),
            " 发布"
          ]
        }
      ) })
    ] }) : /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "生成来源" }),
        /* @__PURE__ */ c.jsxs(
          "select",
          {
            value: R,
            onChange: (y) => N(y.target.value),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]",
            children: [
              /* @__PURE__ */ c.jsx("option", { value: "manual", children: "手动输入主题" }),
              /* @__PURE__ */ c.jsx("option", { value: "chat", children: "从最近聊天记录生成" })
            ]
          }
        )
      ] }),
      R === "manual" ? /* @__PURE__ */ c.jsx(
        "textarea",
        {
          value: D,
          onChange: (y) => q(y.target.value),
          placeholder: "描述你想发布的动态主题...",
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]"
        }
      ) : /* @__PURE__ */ c.jsxs(
        "select",
        {
          value: Q,
          onChange: (y) => V(Number(y.target.value)),
          className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)]",
          children: [
            /* @__PURE__ */ c.jsx("option", { value: "", disabled: !0, children: "选择联系人" }),
            De.map((y) => /* @__PURE__ */ c.jsx("option", { value: y.id, children: y.name }, y.id))
          ]
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: z,
          disabled: se || (R === "manual" ? !D.trim() : !Q),
          className: "w-full py-2 rounded border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 transition-colors disabled:opacity-50 flex justify-center items-center gap-2",
          children: se ? /* @__PURE__ */ c.jsx(ic, { size: 16, className: "animate-spin" }) : "AI 生成预览"
        }
      ),
      J && /* @__PURE__ */ c.jsxs("div", { className: "pt-4 border-t border-[var(--wireframe)]", children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "生成结果 (可编辑)" }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: J,
            onChange: (y) => te(y.target.value),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ c.jsxs(
          "button",
          {
            onClick: ze,
            disabled: !J.trim(),
            className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ c.jsx(Ta, { size: 16 }),
              " 发布生成内容"
            ]
          }
        ) })
      ] })
    ] }) }) })
  ] }) });
}, U0 = ({ actionType: r, setActionType: h }) => {
  var ze;
  const [S, f] = O.useState([]), [w, k] = O.useState(null), [B, $] = O.useState(null), [R, N] = O.useState(W.getGlobalSettings()), [D, q] = O.useState(!1), [Q, V] = O.useState(!1), [J, te] = O.useState(!1);
  O.useEffect(() => {
    const z = () => {
      A();
    };
    return window.addEventListener("refreshMoments", z), () => window.removeEventListener("refreshMoments", z);
  }, []), O.useEffect(() => {
    const z = () => {
      N(W.getGlobalSettings());
    };
    return window.addEventListener("settingsUpdated", z), () => window.removeEventListener("settingsUpdated", z);
  }, []), O.useEffect(() => {
    r === "publishMoment" ? (V(!0), h(null)) : r === "momentSettings" && (q(!0), h(null));
  }, [r, h]), O.useEffect(() => {
    f(W.getMoments());
    const z = () => {
      f(W.getMoments());
    };
    return window.addEventListener("momentsUpdated", z), () => window.removeEventListener("momentsUpdated", z);
  }, []), O.useEffect(() => {
    S.length > 0 && W.saveMoments(S);
  }, [S]);
  const se = (z) => {
    f(S.map((y) => y.id === z ? {
      ...y,
      likes: y.isLiked ? y.likes - 1 : y.likes + 1,
      isLiked: !y.isLiked
    } : y));
  }, ue = (z) => {
    f(S.filter((y) => y.id !== z)), $(null);
  }, De = (z) => {
    !w || !w.text.trim() || (f(S.map((y) => y.id === z ? {
      ...y,
      comments: [...y.comments, { id: Date.now(), author: "我", text: w.text.trim() }]
    } : y)), k(null));
  }, A = async () => {
    te(!0);
    try {
      const z = W.getContacts().filter((Ae) => Ae.type === "user");
      if (z.length === 0) {
        te(!1);
        return;
      }
      const y = z[Math.floor(Math.random() * z.length)], fe = (W.getChats(y.id) || []).slice(-10).map((Ae) => `${Ae.sender === "me" ? "我" : y.name}: ${Ae.text}`).join(`
`), ee = W.getPromptTemplates().momentFromChat || {
        systemPrompt: "你是 {{characterName}}，正在发一条星网动态（类似朋友圈）。",
        userPrompt: `根据以下最近的聊天内容，以 {{characterName}} 的口吻生成一条生动的动态文字（50-100字，用第一人称，可以加1-2个emoji，符合角色性格）：
{{recentChatSummary}}`
      }, de = Ca(ee.systemPrompt, {
        characterName: y.name,
        characterDescription: y.description || ""
      }), Qe = Ca(ee.userPrompt, {
        characterName: y.name,
        recentChatSummary: fe || "无最近对话",
        characterDescription: y.description || ""
      }), Ze = await kn({
        systemPrompt: de,
        userInput: Qe
      });
      if (Ze) {
        const Ae = {
          id: Date.now(),
          author: y.name,
          avatar: y.avatar,
          content: Ze.trim(),
          time: "刚刚",
          likes: 0,
          comments: [],
          isLiked: !1
        };
        f((E) => [Ae, ...E]);
      }
    } catch (z) {
      console.error("Failed to generate moment:", z), f((y) => {
        const oe = y.filter((U) => U.author === "我"), fe = y.filter((U) => U.author !== "我");
        for (let U = fe.length - 1; U > 0; U--) {
          const ee = Math.floor(Math.random() * (U + 1));
          [fe[U], fe[ee]] = [fe[ee], fe[U]];
        }
        return [...oe, ...fe];
      });
    } finally {
      te(!1);
    }
  }, ae = (z) => {
    const y = {
      ...z,
      id: Date.now(),
      time: "刚刚",
      likes: 0,
      comments: []
    };
    f([y, ...S]);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto relative z-10 pb-20", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "relative h-48 mb-16", children: [
      /* @__PURE__ */ c.jsx(
        "img",
        {
          src: ((ze = R.moduleBgs) == null ? void 0 : ze.星网动态) || "https://picsum.photos/seed/cover/800/400",
          alt: "Cover",
          className: "w-full h-full object-cover",
          referrerPolicy: "no-referrer"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "absolute -bottom-8 right-4 flex items-end", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-white text-lg font-medium mr-4 drop-shadow-md tracking-widest", children: R.userName }),
        /* @__PURE__ */ c.jsx("div", { className: "w-20 h-20 rounded-xl border-2 border-[var(--bg-base)] bg-[var(--card-bg)] overflow-hidden shadow-lg", children: /* @__PURE__ */ c.jsx(
          "img",
          {
            src: R.avatarUrl || void 0,
            alt: "My Avatar",
            className: "w-full h-full object-cover",
            referrerPolicy: "no-referrer"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "px-4 space-y-6", children: J ? /* @__PURE__ */ c.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ c.jsx(ic, { className: "animate-spin text-[var(--accent-color)]", size: 24 }) }) : S.map((z) => /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3 border-b border-[var(--wireframe)] pb-6 last:border-0", children: [
      /* @__PURE__ */ c.jsx("div", { className: "w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-[var(--wireframe)]", children: /* @__PURE__ */ c.jsx("img", { src: z.avatar || void 0, alt: z.author, className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-[var(--accent-color)] font-medium text-sm mb-1", children: z.author }),
        /* @__PURE__ */ c.jsx("p", { className: "text-[var(--text-primary)] text-sm mb-2 leading-relaxed", children: z.content }),
        z.image && /* @__PURE__ */ c.jsx("div", { className: "mb-3 rounded-lg overflow-hidden border border-[var(--wireframe)] max-w-[80%]", children: /* @__PURE__ */ c.jsx("img", { src: z.image || void 0, alt: "Moment attachment", className: "w-full h-auto object-cover", referrerPolicy: "no-referrer" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ c.jsx("span", { className: "text-xs text-[var(--text-secondary)] font-mono", children: z.time }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex gap-4 text-[var(--text-secondary)]", children: [
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                onClick: () => se(z.id),
                className: `flex items-center gap-1 text-xs transition-colors ${z.isLiked ? "text-rose-400" : "hover:text-[var(--accent-color)]"}`,
                children: [
                  /* @__PURE__ */ c.jsx(Dx, { size: 14, className: z.isLiked ? "fill-rose-400" : "" }),
                  z.likes > 0 && z.likes
                ]
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                onClick: () => k({ momentId: z.id, text: "" }),
                className: "flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors",
                children: /* @__PURE__ */ c.jsx(Yx, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
              z.author === "我" && /* @__PURE__ */ c.jsx(
                "button",
                {
                  onClick: () => $(B === z.id ? null : z.id),
                  className: "flex items-center gap-1 text-xs hover:text-[var(--accent-color)] transition-colors",
                  children: /* @__PURE__ */ c.jsx(Ex, { size: 14 })
                }
              ),
              B === z.id && z.author === "我" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-40", onClick: () => $(null) }),
                /* @__PURE__ */ c.jsxs("div", { className: "absolute right-0 top-full mt-1 w-28 bg-[var(--bg-base)] rounded-lg z-50 flex flex-col shadow-xl border border-[var(--wireframe)] overflow-hidden", children: [
                  /* @__PURE__ */ c.jsxs("button", { onClick: () => $(null), className: "flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-[var(--text-primary)]", children: [
                    /* @__PURE__ */ c.jsx(nc, { size: 12 }),
                    " 修改动态"
                  ] }),
                  /* @__PURE__ */ c.jsxs("button", { onClick: () => ue(z.id), className: "flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-[var(--bubble-bg)] text-rose-500", children: [
                    /* @__PURE__ */ c.jsx(Hn, { size: 12 }),
                    " 删除动态"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        z.comments && z.comments.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "bg-[var(--bubble-bg)] rounded p-2 space-y-1", children: z.comments.map((y) => /* @__PURE__ */ c.jsxs("div", { className: "text-xs leading-relaxed", children: [
          /* @__PURE__ */ c.jsxs("span", { className: "text-[var(--accent-color)] font-medium", children: [
            y.author,
            ": "
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "text-[var(--text-primary)]", children: y.text })
        ] }, y.id)) }),
        (w == null ? void 0 : w.momentId) === z.id && /* @__PURE__ */ c.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              type: "text",
              value: w.text,
              onChange: (y) => k({ ...w, text: y.target.value }),
              placeholder: "评论...",
              className: "flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-1.5 text-xs text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors",
              autoFocus: !0,
              onKeyDown: (y) => {
                y.key === "Enter" && De(z.id);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: () => De(z.id),
              disabled: !w.text.trim(),
              className: "p-1.5 rounded bg-[var(--accent-color)]/20 text-[var(--accent-color)] disabled:opacity-50",
              children: /* @__PURE__ */ c.jsx(Ta, { size: 14 })
            }
          )
        ] })
      ] })
    ] }, z.id)) }),
    D && /* @__PURE__ */ c.jsx(D0, { onClose: () => q(!1) }),
    Q && /* @__PURE__ */ c.jsx(O0, { onClose: () => V(!1), onPublish: ae })
  ] });
}, R0 = ({ onClose: r, initialData: h }) => {
  const [S, f] = O.useState((h == null ? void 0 : h.to) || ""), [w, k] = O.useState((h == null ? void 0 : h.subject) || ""), [B, $] = O.useState((h == null ? void 0 : h.body) || ""), [R, N] = O.useState(!1), D = async () => {
    if (!w && !B) {
      alert("请先输入主题或部分正文，以便 AI 了解您的意图。");
      return;
    }
    N(!0);
    try {
      const V = W.getGlobalSettings(), te = W.getPromptTemplates().emailCompose, se = Ca(te.systemPrompt, {
        userName: V.userName
      }), ue = Ca(te.userPrompt, {
        userName: V.userName,
        recipientName: S || "未知收件人",
        emailSubject: w || "无主题"
      }), De = await kn({
        systemPrompt: se,
        userInput: ue
      });
      $(De);
    } catch (V) {
      console.error(V), alert("生成内容失败");
    } finally {
      N(!1);
    }
  }, q = () => {
    const V = {
      id: Date.now(),
      from: W.getGlobalSettings().userName,
      to: S,
      subject: w,
      body: B,
      snippet: B.substring(0, 50) + "...",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      isRead: !0,
      status: "draft",
      type: "system"
    }, J = W.getEmails();
    W.saveEmails([V, ...J]), r();
  }, Q = () => {
    const V = {
      id: Date.now(),
      from: W.getGlobalSettings().userName,
      to: S,
      subject: w,
      body: B,
      snippet: B.substring(0, 50) + "...",
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
      isRead: !0,
      status: "sent",
      type: "system"
    }, J = W.getEmails();
    W.saveEmails([V, ...J]), r();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "absolute inset-0 z-[70] bg-[var(--bg-base)] flex flex-col animate-in slide-in-from-bottom duration-300", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ c.jsx("button", { onClick: r, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) }),
        /* @__PURE__ */ c.jsx("h3", { className: "text-[var(--text-primary)] font-medium tracking-widest text-sm", children: "写邮件" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ c.jsxs(
          "button",
          {
            onClick: q,
            className: "flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)]",
            children: [
              /* @__PURE__ */ c.jsx(cc, { size: 14 }),
              " 存草稿"
            ]
          }
        ),
        /* @__PURE__ */ c.jsxs(
          "button",
          {
            onClick: Q,
            disabled: !S || !w || !B,
            className: "flex items-center gap-1 text-xs text-[var(--bg-base)] bg-[var(--accent-color)] hover:opacity-90 transition-opacity px-3 py-1.5 rounded disabled:opacity-50",
            children: [
              /* @__PURE__ */ c.jsx(Ta, { size: 14 }),
              " 发送"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto p-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center border-b border-[var(--wireframe)] pb-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-[var(--text-secondary)] text-sm w-16", children: "收件人:" }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: S,
            onChange: (V) => f(V.target.value),
            className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm",
            placeholder: "输入收件人..."
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center border-b border-[var(--wireframe)] pb-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-[var(--text-secondary)] text-sm w-16", children: "主题:" }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: w,
            onChange: (V) => k(V.target.value),
            className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm",
            placeholder: "输入主题..."
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: D,
          disabled: R,
          className: "flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/10 disabled:opacity-50",
          children: [
            /* @__PURE__ */ c.jsx(b0, { size: 14 }),
            " ",
            R ? "AI 生成中..." : "AI 辅助撰写"
          ]
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          value: B,
          onChange: (V) => $(V.target.value),
          className: "flex-1 bg-transparent text-[var(--text-primary)] outline-none text-sm resize-none",
          placeholder: "在此输入正文..."
        }
      )
    ] })
  ] });
}, H0 = ({ onClose: r }) => {
  const [h, S] = O.useState(W.getEmailPrompt()), f = () => {
    W.saveEmailPrompt(h), r();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-lg flex flex-col rounded-xl animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-6 py-4 border-b border-[var(--wireframe)] shrink-0", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "邮件 AI 设置" }),
      /* @__PURE__ */ c.jsx("button", { onClick: r, className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "写邮件 AI 提示词" }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: h.emailComposePrompt,
            onChange: (w) => S({ ...h, emailComposePrompt: w.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "回复邮件 AI 提示词" }),
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: h.emailReplyPrompt,
            onChange: (w) => S({ ...h, emailReplyPrompt: w.target.value }),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "text-[10px] text-[var(--text-secondary)]", children: [
        "可用变量：",
        "{{userName}}"
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "px-6 py-4 border-t border-[var(--wireframe)] shrink-0 flex justify-end", children: /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: f,
        className: "flex items-center gap-2 px-6 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors",
        children: [
          /* @__PURE__ */ c.jsx(cc, { size: 16 }),
          " 保存"
        ]
      }
    ) })
  ] }) });
}, k0 = ({ actionType: r, setActionType: h }) => {
  const [S, f] = O.useState([]), [w, k] = O.useState(null), [B, $] = O.useState(!1), [R, N] = O.useState(!1), [D, q] = O.useState(null), [Q, V] = O.useState("");
  O.useEffect(() => {
    const z = () => f(W.getEmails());
    return z(), window.addEventListener("emailsUpdated", z), () => window.removeEventListener("emailsUpdated", z);
  }, []), O.useEffect(() => {
    S.length > 0 && W.saveEmails(S);
  }, [S]);
  const J = (z) => {
    f(S.map((y) => y.id === z ? { ...y, isRead: !0 } : y));
  }, te = (z) => {
    f(S.filter((y) => y.id !== z)), w === z && k(null);
  }, se = async (z) => {
    $(!0), q(z.id);
    try {
      const y = W.getGlobalSettings(), oe = W.getEmailPrompt(), fe = Ca(oe.emailReplyPrompt, {
        userName: y.userName,
        userPersona: y.userPersona || ""
      }), U = `发件人: ${z.from}
主题: ${z.subject}
内容: ${z.body}

请以${y.userName}的身份生成一封回复。`, ee = await kn({
        systemPrompt: fe,
        userInput: U
      });
      V(ee);
    } catch (y) {
      console.error(y), alert("生成回复失败");
    } finally {
      $(!1);
    }
  }, ue = (z) => {
    Q.trim() && (f(S.map((y) => y.id === z ? {
      ...y,
      isReplied: !0,
      replies: [
        ...y.replies || [],
        {
          id: Date.now(),
          text: Q.trim(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
        }
      ]
    } : y)), q(null), V(""));
  }, De = (z, y) => z === "alert" ? /* @__PURE__ */ c.jsx(Id, { size: 20, className: "text-rose-400" }) : z === "update" ? /* @__PURE__ */ c.jsx(hx, { size: 20, className: "text-emerald-400" }) : y ? /* @__PURE__ */ c.jsx(Vd, { size: 20, className: "text-[var(--text-secondary)]" }) : /* @__PURE__ */ c.jsx(Kd, { size: 20, className: "text-[var(--accent-color)]" }), A = r || "inbox", ae = S.filter((z) => A === "drafts" ? z.status === "draft" : A === "trash" ? z.status === "trash" : A === "outbox" ? z.status === "sent" : z.status === "inbox" || !z.status), ze = () => A === "drafts" ? "草稿箱" : A === "trash" ? "垃圾箱" : A === "outbox" ? "发件箱" : "收件箱";
  return /* @__PURE__ */ c.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden relative z-10", children: [
    r === "writeEmail" && /* @__PURE__ */ c.jsx(
      R0,
      {
        onClose: () => {
          h(null), f(W.getEmails());
        }
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center px-4 py-3 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
        A !== "inbox" && A !== "writeEmail" && /* @__PURE__ */ c.jsx("button", { onClick: () => h(null), className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors", children: /* @__PURE__ */ c.jsx(Kh, { size: 18 }) }),
        /* @__PURE__ */ c.jsx("h3", { className: "text-[var(--text-primary)] font-medium tracking-widest text-sm", children: ze() })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
        A === "inbox" && /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => f(S.map((z) => z.status === "inbox" || !z.status ? { ...z, isRead: !0 } : z)),
            className: "text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors",
            children: "全部标为已读"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => N(!0),
            className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
            children: /* @__PURE__ */ c.jsx(sc, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-2 pb-20", children: [
      ae.map((z) => /* @__PURE__ */ c.jsx(
        "div",
        {
          onClick: () => {
            k(w === z.id ? null : z.id), z.isRead || J(z.id);
          },
          className: `p-3 rounded-xl border transition-all cursor-pointer group ${w === z.id ? "bg-[var(--card-bg)] border-[var(--accent-color)] shadow-md" : "bg-[var(--bubble-bg)] border-[var(--wireframe)] hover:border-[var(--accent-color)]/50"} ${z.isRead ? "" : "border-l-4 border-l-[var(--accent-color)]"}`,
          children: /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ c.jsx("div", { className: "shrink-0 mt-1", children: De(z.type, z.isRead) }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-baseline mb-1", children: [
                /* @__PURE__ */ c.jsx("span", { className: `text-sm truncate pr-2 ${z.isRead ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)] font-medium"}`, children: A === "outbox" || A === "drafts" ? `To: ${z.to}` : z.from }),
                /* @__PURE__ */ c.jsxs("span", { className: "text-[10px] text-[var(--text-secondary)] font-mono shrink-0 flex items-center gap-1", children: [
                  /* @__PURE__ */ c.jsx(px, { size: 10 }),
                  z.time
                ] })
              ] }),
              /* @__PURE__ */ c.jsx("h4", { className: `text-sm truncate mb-1 ${z.isRead ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)]"}`, children: z.subject }),
              /* @__PURE__ */ c.jsx("p", { className: `text-xs leading-relaxed ${w === z.id ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] line-clamp-2"}`, children: w === z.id ? z.body : z.snippet }),
              w === z.id && /* @__PURE__ */ c.jsxs("div", { className: "mt-4 pt-3 border-t border-[var(--wireframe)] animate-in fade-in slide-in-from-top-2 duration-200", children: [
                z.replies && z.replies.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "mb-4 space-y-2", children: z.replies.map((y) => /* @__PURE__ */ c.jsxs("div", { className: "bg-[var(--bg-base)] rounded p-2 text-xs border border-[var(--wireframe)]", children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between text-[var(--text-secondary)] mb-1", children: [
                    /* @__PURE__ */ c.jsx("span", { children: "我" }),
                    /* @__PURE__ */ c.jsx("span", { children: y.time })
                  ] }),
                  /* @__PURE__ */ c.jsx("p", { className: "text-[var(--text-primary)] whitespace-pre-wrap", children: y.text })
                ] }, y.id)) }),
                D === z.id ? /* @__PURE__ */ c.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ c.jsx(
                    "textarea",
                    {
                      value: Q,
                      onChange: (y) => V(y.target.value),
                      placeholder: "输入回复内容...",
                      className: "w-full bg-[var(--bg-base)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] resize-none min-h-[80px]",
                      autoFocus: !0
                    }
                  ),
                  /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-2", children: [
                    /* @__PURE__ */ c.jsx(
                      "button",
                      {
                        onClick: (y) => {
                          y.stopPropagation(), q(null), V("");
                        },
                        className: "px-3 py-1.5 rounded border border-[var(--wireframe)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
                        children: "取消"
                      }
                    ),
                    /* @__PURE__ */ c.jsxs(
                      "button",
                      {
                        onClick: (y) => {
                          y.stopPropagation(), ue(z.id);
                        },
                        disabled: !Q.trim(),
                        className: "px-3 py-1.5 rounded bg-[var(--accent-color)] text-white text-xs hover:bg-[var(--accent-color)]/90 transition-colors disabled:opacity-50 flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ c.jsx(Ta, { size: 12 }),
                          " 发送"
                        ]
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-3", children: [
                  /* @__PURE__ */ c.jsxs(
                    "button",
                    {
                      onClick: (y) => {
                        y.stopPropagation(), te(z.id);
                      },
                      className: "flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 transition-colors px-3 py-1.5 rounded bg-rose-400/10",
                      children: [
                        /* @__PURE__ */ c.jsx(Hn, { size: 14 }),
                        " 删除"
                      ]
                    }
                  ),
                  /* @__PURE__ */ c.jsxs(
                    "button",
                    {
                      onClick: (y) => {
                        y.stopPropagation(), q(z.id), V("");
                      },
                      className: "flex items-center gap-1 text-xs text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors px-3 py-1.5 rounded border border-[var(--wireframe)] hover:border-[var(--accent-color)]",
                      children: [
                        /* @__PURE__ */ c.jsx(em, { size: 14 }),
                        " 回复"
                      ]
                    }
                  ),
                  /* @__PURE__ */ c.jsxs(
                    "button",
                    {
                      onClick: (y) => {
                        y.stopPropagation(), se(z);
                      },
                      disabled: B,
                      className: "flex items-center gap-1 text-xs text-[var(--accent-color)] hover:text-white transition-colors px-3 py-1.5 rounded bg-[var(--accent-color)]/20 disabled:opacity-50",
                      children: [
                        B ? /* @__PURE__ */ c.jsx(ic, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ c.jsx(Kd, { size: 14 }),
                        B ? "生成中..." : "AI 生成回复"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        },
        z.id
      )),
      ae.length === 0 && /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center h-40 text-[var(--text-secondary)] opacity-50", children: [
        A === "drafts" ? /* @__PURE__ */ c.jsx(Pd, { size: 48, className: "mb-4" }) : A === "trash" ? /* @__PURE__ */ c.jsx(Hn, { size: 48, className: "mb-4" }) : A === "outbox" ? /* @__PURE__ */ c.jsx(Ta, { size: 48, className: "mb-4" }) : /* @__PURE__ */ c.jsx(Vd, { size: 48, className: "mb-4" }),
        /* @__PURE__ */ c.jsxs("p", { className: "tracking-widest", children: [
          ze(),
          "为空"
        ] })
      ] })
    ] }),
    R && /* @__PURE__ */ c.jsx(H0, { onClose: () => N(!1) })
  ] });
};
function B0(r) {
  try {
    const h = r.data || r;
    return h.name ? {
      name: h.name,
      avatar: "",
      // JSON 内不含可用的头像 URL，需用户事后手动设置
      description: h.description || "",
      personality: h.personality || "",
      scenario: h.scenario || "",
      firstMessage: h.first_mes || "",
      mesExample: h.mes_example || "",
      systemPrompt: h.system_prompt || "",
      creatorNotes: h.creator_notes || h.creatorcomment || ""
    } : null;
  } catch (h) {
    return console.error("Failed to parse character card:", h), null;
  }
}
function Ia() {
  try {
    const r = localStorage.getItem("st_imported_characters");
    return r ? JSON.parse(r) : [];
  } catch {
    return [];
  }
}
function q0(r) {
  const h = Ia(), S = h.findIndex((f) => f.name === r.name);
  S >= 0 ? h[S] = r : h.push(r), localStorage.setItem("st_imported_characters", JSON.stringify(h));
}
function Y0(r) {
  const h = Ia().filter((S) => S.name !== r);
  localStorage.setItem("st_imported_characters", JSON.stringify(h));
}
const nm = [
  {
    name: "Kaelen (领航员)",
    avatar: "https://picsum.photos/seed/k/100/100",
    description: "一位经验丰富的星际领航员，性格沉稳，总是能在复杂的星域中找到最安全的航线。",
    personality: "沉稳、冷静、专业",
    scenario: "在星际飞船的舰桥上",
    firstMessage: "指挥官，航线已设定，随时可以跃迁。"
  },
  {
    name: "Elara (机械师)",
    avatar: "https://picsum.photos/seed/e/100/100",
    description: "天才机械师，对各种飞船引擎了如指掌，说话直接，工作狂。",
    personality: "直率、暴躁、技术宅",
    scenario: "在引擎室里修理设备",
    firstMessage: "别碰那个阀门！你想把我们都炸上天吗？"
  },
  {
    name: "Nova (AI助手)",
    avatar: "https://picsum.photos/seed/nova/100/100",
    description: "飞船的中央人工智能，拥有高度的逻辑分析能力，偶尔会表现出人类的情感。",
    personality: "理性、高效、偶尔幽默",
    scenario: "在全息投影仪中",
    firstMessage: "系统自检完成，所有子系统运行正常。"
  }
];
async function Jd() {
  const r = Ia(), h = [...nm];
  return r.forEach((S) => {
    const f = h.findIndex((w) => w.name === S.name);
    f >= 0 ? h[f] = S : h.push(S);
  }), h.map((S) => ({ name: S.name, avatar: S.avatar, description: S.description }));
}
async function G0(r) {
  const h = Ia().find((S) => S.name === r);
  return h || nm.find((S) => S.name === r) || null;
}
const L0 = ({ onBack: r, settings: h }) => {
  const [S, f] = O.useState("chat"), [w, k] = O.useState(() => W.getContacts()), [B, $] = O.useState(null), [R, N] = O.useState(!1), [D, q] = O.useState(null), [Q, V] = O.useState(""), [J, te] = O.useState(null), [se, ue] = O.useState(null), [De, A] = O.useState([]), [ae, ze] = O.useState(""), [z, y] = O.useState(() => Ia()), [oe, fe] = O.useState(!1), U = O.useRef(!1);
  O.useEffect(() => {
    U.current = !0;
  }, []), O.useEffect(() => {
    U.current && W.saveContacts(w);
  }, [w]), O.useEffect(() => {
    D === "add" && Jd().then(A), V(""), ue(null), ze("");
  }, [D]);
  const [ee, de] = O.useState(!1), Qe = async () => {
    if (D === "add") {
      if (ae) {
        de(!0);
        try {
          const p = await G0(ae);
          if (p) {
            const G = {
              id: Date.now(),
              name: p.name,
              lastMessage: p.firstMessage || "已添加为好友",
              time: "刚刚",
              unread: !0,
              type: "user",
              avatar: p.avatar,
              online: !0,
              description: p.description
            };
            k([G, ...w]), p.firstMessage && W.saveChats(G.id, [{
              id: Date.now(),
              text: p.firstMessage,
              sender: "them",
              time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
              read: !1
            }]);
          }
        } finally {
          de(!1);
        }
      } else if (Q.trim()) {
        const p = {
          id: Date.now(),
          name: Q.trim(),
          lastMessage: "已添加为好友",
          time: "刚刚",
          unread: !1,
          type: "user",
          avatar: `https://picsum.photos/seed/${Date.now()}/100/100`,
          online: !0
        };
        k([p, ...w]);
      }
    } else if (D === "delete" && se)
      k(w.filter((p) => p.id !== se));
    else if (D === "editName" && se && Q.trim())
      k(w.map((p) => p.id === se ? { ...p, name: Q.trim() } : p));
    else if (D === "bg")
      $(Q.trim() || null);
    else if (D === "momentBg") {
      const p = W.getGlobalSettings();
      p.moduleBgs = { ...p.moduleBgs, 星网动态: Q.trim() || "" }, W.saveGlobalSettings(p), window.dispatchEvent(new Event("settingsUpdated"));
    } else if (D === "clearRead") {
      const G = W.getEmails().map(
        (re) => re.status === "inbox" || !re.status ? { ...re, isRead: !0 } : re
      );
      W.saveEmails(G), window.dispatchEvent(new Event("emailsUpdated"));
    }
    q(null);
  }, Ze = (p) => {
    k(w.map((G) => G.id === p.id ? p : G));
  }, Ae = (p) => {
    k(w.filter((G) => G.id !== p));
  }, E = w.find((p) => p.id === J);
  return J && E ? /* @__PURE__ */ c.jsx(
    w0,
    {
      contact: E,
      onBack: () => te(null),
      onUpdateContact: Ze,
      onDeleteContact: Ae,
      settings: h
    }
  ) : /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col h-full w-full bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden", children: [
    B && /* @__PURE__ */ c.jsx(
      "img",
      {
        src: B,
        alt: "Background",
        className: "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity",
        referrerPolicy: "no-referrer"
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between px-4 py-5 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 relative z-50", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ c.jsx("button", { onClick: r, className: "p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors", children: /* @__PURE__ */ c.jsx(Fd, { size: 24 }) }),
        /* @__PURE__ */ c.jsxs("h2", { className: "text-xl font-light tracking-widest text-[var(--text-primary)] ml-2", children: [
          "星网回路 ",
          /* @__PURE__ */ c.jsxs("span", { className: "text-sm text-[var(--accent-color)] ml-1", children: [
            "(",
            w.length,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => N(!R),
            className: "p-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors",
            children: /* @__PURE__ */ c.jsx(tm, { size: 24 })
          }
        ),
        R && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-40", onClick: () => N(!1) }),
          /* @__PURE__ */ c.jsxs("div", { className: "absolute right-0 top-full mt-3 w-44 bg-[var(--bg-base)] rounded-xl z-50 flex flex-col shadow-2xl border border-[var(--wireframe)] animate-in fade-in zoom-in-95 duration-200", children: [
            /* @__PURE__ */ c.jsx("div", { className: "absolute -top-2 right-3 w-4 h-4 bg-[var(--bg-base)] border-t border-l border-[var(--wireframe)] transform rotate-45" }),
            /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col py-2", children: [
              S === "chat" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("add"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(v0, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 添加好友"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  fe(!0), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(tx, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 角色卡管理"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("delete"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(lm, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 删除好友"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("search"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(am, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 搜索好友"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("editName"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(nc, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 修改昵称"
                ] }),
                /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] my-1 mx-4" }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("bg"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Tu, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 设置背景"
                ] })
              ] }),
              S === "moments" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("publishMoment"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(nc, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 发布动态"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  window.dispatchEvent(new Event("refreshMoments")), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Du, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 刷新星网"
                ] }),
                /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] my-1 mx-4" }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("momentBg"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Tu, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 设置动态背景"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("momentSettings"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(sc, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 动态设置"
                ] })
              ] }),
              S === "notifications" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("writeEmail"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(em, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 写邮件"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("drafts"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Pd, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 草稿箱"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("trash"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Hn, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 垃圾箱"
                ] }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("outbox"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(Ta, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 发件箱"
                ] }),
                /* @__PURE__ */ c.jsx("div", { className: "h-px bg-[var(--wireframe)] my-1 mx-4" }),
                /* @__PURE__ */ c.jsxs("button", { onClick: () => {
                  q("clearRead"), N(!1);
                }, className: "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bubble-bg)] text-[var(--text-primary)] text-[15px] text-left transition-colors", children: [
                  /* @__PURE__ */ c.jsx(s0, { size: 20, className: "text-[var(--text-primary)]", strokeWidth: 1.5 }),
                  " 清空所有已读"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    S === "chat" && /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-1 relative z-10", children: [
      w.map((p) => /* @__PURE__ */ c.jsxs(
        "div",
        {
          onClick: () => te(p.id),
          className: "flex items-center p-3 rounded-xl hover:bg-[var(--bubble-bg)] cursor-pointer transition-colors group",
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "relative shrink-0 mr-4", children: [
              p.type === "system" ? /* @__PURE__ */ c.jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center ${p.bgColor} border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors`, children: p.icon && /* @__PURE__ */ c.jsx(p.icon, { className: p.color, size: 24 }) }) : /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 rounded-full border border-[var(--wireframe)] group-hover:border-[var(--accent-color)] transition-colors p-0.5 bg-[var(--card-bg)]", children: /* @__PURE__ */ c.jsx("img", { src: p.avatar || void 0, alt: p.name, className: "w-full h-full rounded-full object-cover", referrerPolicy: "no-referrer" }) }),
              p.type === "user" && /* @__PURE__ */ c.jsx("div", { className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] ${p.online ? "bg-emerald-400" : "bg-slate-500"}` }),
              p.unread && p.type === "system" && /* @__PURE__ */ c.jsx("div", { className: "absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] bg-rose-500 animate-pulse" })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0 border-b border-[var(--wireframe)] pb-3 pt-1 group-last:border-0", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-baseline mb-1", children: [
                /* @__PURE__ */ c.jsx("h3", { className: "text-[var(--text-primary)] font-medium truncate pr-2 tracking-wide", children: p.name }),
                /* @__PURE__ */ c.jsx("span", { className: "text-[11px] text-[var(--text-secondary)] font-mono shrink-0", children: p.time })
              ] }),
              /* @__PURE__ */ c.jsx("p", { className: "text-sm text-[var(--text-secondary)] truncate", children: p.lastMessage })
            ] })
          ]
        },
        p.id
      )),
      w.length === 0 && /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-[var(--text-secondary)] opacity-50", children: [
        /* @__PURE__ */ c.jsx(Cu, { size: 48, className: "mb-4" }),
        /* @__PURE__ */ c.jsx("p", { className: "tracking-widest", children: "暂无联系人" })
      ] })
    ] }),
    S === "moments" && /* @__PURE__ */ c.jsx(U0, { actionType: D, setActionType: q }),
    S === "notifications" && /* @__PURE__ */ c.jsx(k0, { actionType: D, setActionType: q }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-around py-3 border-t border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0 pb-4 sm:pb-3 relative z-10", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: () => f("chat"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${S === "chat" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ c.jsx(Cu, { size: 22, className: S === "chat" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ c.jsx("span", { className: "text-[10px] tracking-widest", children: "私聊" })
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: () => f("moments"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${S === "moments" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ c.jsx(Cx, { size: 22, className: S === "moments" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ c.jsx("span", { className: "text-[10px] tracking-widest", children: "星网动态" })
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: () => f("notifications"),
          className: `flex flex-col items-center gap-1 flex-1 transition-colors ${S === "notifications" ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`,
          children: [
            /* @__PURE__ */ c.jsx(Ph, { size: 22, className: S === "notifications" ? "fill-[var(--accent-color)]/20" : "" }),
            /* @__PURE__ */ c.jsx("span", { className: "text-[10px] tracking-widest", children: "通知" })
          ]
        }
      )
    ] }),
    D && !["writeEmail", "drafts", "trash", "outbox"].includes(D) && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner", children: [
      /* @__PURE__ */ c.jsxs("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest border-b border-[var(--wireframe)] pb-2", children: [
        D === "add" && "添加好友",
        D === "delete" && "删除好友",
        D === "search" && "搜索好友",
        D === "editName" && "修改昵称",
        D === "bg" && "设置背景",
        D === "momentBg" && "设置动态背景",
        D === "writeEmail" && "写邮件",
        D === "drafts" && "草稿箱",
        D === "trash" && "垃圾箱",
        D === "outbox" && "发件箱",
        D === "clearRead" && "清空所有已读"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "py-2 flex flex-col gap-3", children: [
        D === "add" && /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ c.jsx("div", { className: "text-sm text-[var(--text-secondary)]", children: "方式一：从角色卡选择" }),
            /* @__PURE__ */ c.jsxs("label", { className: "cursor-pointer text-xs text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 border border-[var(--wireframe)] rounded px-2 py-1 hover:border-[var(--accent-color)]", children: [
              /* @__PURE__ */ c.jsx(d0, { size: 12 }),
              "导入 JSON",
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "file",
                  accept: ".json",
                  className: "hidden",
                  onChange: async (p) => {
                    var re;
                    const G = (re = p.target.files) == null ? void 0 : re[0];
                    if (G) {
                      try {
                        const pe = await G.text(), m = JSON.parse(pe), T = B0(m);
                        if (T) {
                          q0(T), y(Ia());
                          const Y = await Jd();
                          A(Y), ze(T.name), alert(`✓ 成功导入角色：${T.name}`);
                        } else
                          alert("无法识别此文件，请确认是 SillyTavern 格式的角色卡 JSON。");
                      } catch {
                        alert("文件解析失败，请检查 JSON 格式。");
                      }
                      p.target.value = "";
                    }
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(
            "select",
            {
              value: ae,
              onChange: (p) => {
                ze(p.target.value), V("");
              },
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors [&>option]:bg-[var(--bg-base)]",
              children: [
                /* @__PURE__ */ c.jsx("option", { value: "", children: "-- 不选择角色卡 --" }),
                De.map((p) => /* @__PURE__ */ c.jsx("option", { value: p.name, children: p.name }, p.name))
              ]
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "text-sm text-[var(--text-secondary)] mt-2 mb-1", children: "方式二：手动创建" }),
          /* @__PURE__ */ c.jsx(
            "input",
            {
              type: "text",
              value: Q,
              onChange: (p) => {
                V(p.target.value), ze("");
              },
              placeholder: "输入好友名称",
              className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]"
            }
          )
        ] }),
        D === "search" && /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: Q,
            onChange: (p) => V(p.target.value),
            placeholder: "输入搜索关键词",
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]",
            autoFocus: !0
          }
        ),
        (D === "delete" || D === "editName") && /* @__PURE__ */ c.jsxs(
          "select",
          {
            value: se || "",
            onChange: (p) => ue(Number(p.target.value)),
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors [&>option]:bg-[var(--bg-base)]",
            children: [
              /* @__PURE__ */ c.jsx("option", { value: "", disabled: !0, children: "选择一个好友" }),
              w.filter((p) => p.type === "user").map((p) => /* @__PURE__ */ c.jsx("option", { value: p.id, children: p.name }, p.id))
            ]
          }
        ),
        D === "editName" && se && /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: Q,
            onChange: (p) => V(p.target.value),
            placeholder: "输入新昵称",
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]",
            autoFocus: !0
          }
        ),
        (D === "bg" || D === "momentBg") && /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: Q,
            onChange: (p) => V(p.target.value),
            placeholder: "输入图片URL (留空清除)",
            className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-[var(--text-secondary)]",
            autoFocus: !0
          }
        ),
        ["clearRead"].includes(D) && /* @__PURE__ */ c.jsx("p", { className: "text-[var(--text-secondary)] text-sm", children: "确认清空所有已读邮件吗？此操作不可恢复。" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-3 mt-2", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => q(null),
            className: "px-4 py-2 rounded border border-[var(--wireframe)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bubble-bg)] transition-colors",
            children: "取消"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: Qe,
            disabled: D === "add" && !Q.trim() && !ae || (D === "delete" || D === "editName") && !se || D === "editName" && !Q.trim() || ee,
            className: "px-4 py-2 rounded bg-[var(--accent-color)]/20 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)]/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            children: ee ? "生成中..." : "确认"
          }
        )
      ] })
    ] }) }),
    oe && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsxs("div", { className: "glass-card w-full max-w-sm p-6 rounded-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 clip-corner max-h-[80vh]", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center border-b border-[var(--wireframe)] pb-2", children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-[var(--text-primary)] font-light tracking-widest", children: "角色卡管理" }),
        /* @__PURE__ */ c.jsx("button", { onClick: () => fe(!1), className: "text-[var(--text-secondary)] hover:text-[var(--text-primary)]", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "flex-1 overflow-y-auto space-y-2", children: z.length === 0 ? /* @__PURE__ */ c.jsxs("p", { className: "text-sm text-[var(--text-secondary)] text-center py-6", children: [
        "暂无导入的角色卡",
        /* @__PURE__ */ c.jsx("br", {}),
        /* @__PURE__ */ c.jsx("span", { className: "text-xs", children: "在「添加好友」中导入 JSON 文件" })
      ] }) : z.map((p) => {
        var G;
        return /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg bg-[var(--bubble-bg)] border border-[var(--wireframe)]", children: [
          /* @__PURE__ */ c.jsx("img", { src: p.avatar || `https://picsum.photos/seed/${p.name}/40/40`, alt: p.name, className: "w-10 h-10 rounded-full object-cover shrink-0", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ c.jsx("p", { className: "text-sm text-[var(--text-primary)] font-medium truncate", children: p.name }),
            /* @__PURE__ */ c.jsx("p", { className: "text-xs text-[var(--text-secondary)] truncate", children: ((G = p.description) == null ? void 0 : G.slice(0, 40)) || "无描述" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: () => {
                Y0(p.name), y(Ia());
              },
              className: "text-rose-400 hover:text-rose-300 shrink-0 p-1",
              children: /* @__PURE__ */ c.jsx(Hn, { size: 16 })
            }
          )
        ] }, p.name);
      }) }),
      /* @__PURE__ */ c.jsx("p", { className: "text-[10px] text-[var(--text-secondary)] text-center", children: "删除角色卡不影响已添加的联系人" })
    ] }) })
  ] });
}, X0 = ({ onLock: r, toggleTheme: h, isDarkMode: S }) => {
  const [f, w] = O.useState(null), [k, B] = O.useState(/* @__PURE__ */ new Date()), [$, R] = O.useState(!1), [N, D] = O.useState(!1), [q, Q] = O.useState(!1), [V, J] = O.useState("idle"), [te, se] = O.useState([]), [ue, De] = O.useState(!1), [A, ae] = O.useState(W.getGlobalSettings()), [ze, z] = O.useState(W.getPromptTemplates());
  O.useEffect(() => {
    W.saveGlobalSettings(A);
  }, [A]), O.useEffect(() => {
    W.savePromptTemplates(ze);
  }, [ze]), O.useEffect(() => {
    const U = setInterval(() => B(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(U);
  }, []), O.useEffect(() => {
    const U = () => {
      ae(W.getGlobalSettings());
    };
    return window.addEventListener("settingsUpdated", U), () => window.removeEventListener("settingsUpdated", U);
  }, []), O.useEffect(() => {
    if (A.customFontUrl) {
      const U = document.createElement("style");
      U.id = "custom-font-style", U.appendChild(document.createTextNode(`
        @font-face {
          font-family: 'CustomFont';
          src: url('${A.customFontUrl}');
        }
        :root {
          --custom-font: 'CustomFont', "PingFang SC", "Microsoft YaHei", "Outfit", "Noto Sans SC", sans-serif;
        }
      `));
      const ee = document.getElementById("custom-font-style");
      ee && document.head.removeChild(ee), document.head.appendChild(U);
    } else {
      const U = document.getElementById("custom-font-style");
      U && document.head.removeChild(U);
    }
  }, [A.customFontUrl]);
  const y = (U, ee) => {
    w({ title: U, desc: ee });
  }, oe = async () => {
    J("testing");
    try {
      if (A.apiMode === "custom" && A.customApiUrl) {
        const U = await fetch(`${A.customApiUrl}/models`, {
          headers: {
            Authorization: `Bearer ${A.customApiKey}`
          }
        });
        if (U.ok) {
          J("success");
          const ee = await U.json();
          ee.data && Array.isArray(ee.data) && se(ee.data.map((de) => de.id));
        } else
          J("error");
      } else
        J("success");
    } catch {
      J("error");
    }
  }, fe = async () => {
    De(!0);
    try {
      if (A.apiMode === "custom" && A.customApiUrl) {
        const U = await fetch(`${A.customApiUrl}/models`, {
          headers: {
            Authorization: `Bearer ${A.customApiKey}`
          }
        });
        if (U.ok) {
          const ee = await U.json();
          ee.data && Array.isArray(ee.data) && se(ee.data.map((de) => de.id));
        }
      }
    } catch (U) {
      console.error(U);
    } finally {
      De(!1);
    }
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "relative w-full h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden",
      style: { fontSize: `${A.fontSizeScale}rem` },
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "bokeh bokeh-1" }),
        /* @__PURE__ */ c.jsx("div", { className: "bokeh bokeh-2" }),
        /* @__PURE__ */ c.jsx("div", { className: "scanlines" }),
        (f == null ? void 0 : f.title) === "星网回路" ? /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-50 w-full h-full bg-[var(--bg-base)] animate-in slide-in-from-right duration-300", children: /* @__PURE__ */ c.jsx(L0, { onBack: () => w(null), settings: A }) }) : /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 w-full max-w-6xl h-full max-h-[800px] glass-card rounded-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center p-4 border-b border-[var(--wireframe)] bg-[var(--bubble-bg)] shrink-0", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4 text-[var(--text-secondary)] font-mono text-sm", children: [
              /* @__PURE__ */ c.jsxs("span", { children: [
                k.getFullYear(),
                "/",
                String(k.getMonth() + 1).padStart(2, "0"),
                "/",
                String(k.getDate()).padStart(2, "0"),
                " ",
                k.toLocaleDateString("zh-CN", { weekday: "short" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "hidden sm:inline", children: "|" }),
              /* @__PURE__ */ c.jsx("span", { className: "hidden sm:inline", children: "TERMINAL ID: 1040752980" })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4 text-[var(--text-secondary)]", children: [
              /* @__PURE__ */ c.jsx("button", { onClick: () => D(!0), className: "hover:text-[var(--text-primary)] transition-colors", title: "API与模型设置", children: /* @__PURE__ */ c.jsx(Fx, { size: 18 }) }),
              /* @__PURE__ */ c.jsx("button", { onClick: () => R(!0), className: "hover:text-[var(--text-primary)] transition-colors", title: "系统设置", children: /* @__PURE__ */ c.jsx(sc, { size: 18 }) }),
              /* @__PURE__ */ c.jsx("button", { onClick: h, className: "hover:text-[var(--text-primary)] transition-colors text-xs border border-[var(--wireframe)] px-2 py-1 rounded", children: S ? "LIGHT" : "DARK" }),
              /* @__PURE__ */ c.jsx(p0, { size: 16 }),
              /* @__PURE__ */ c.jsx(Fh, { size: 16 }),
              /* @__PURE__ */ c.jsx("button", { onClick: r, className: "hover:text-[var(--accent-color)] transition-colors ml-2", children: /* @__PURE__ */ c.jsx(wa, { size: 20 }) })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex-1 p-6 overflow-y-auto", children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 min-h-full", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "md:col-span-3 flex flex-col gap-6", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "glass-card p-6 flex flex-col items-center text-center clip-corner shrink-0 relative overflow-hidden", children: [
                A.profileBgUrl && /* @__PURE__ */ c.jsx(
                  "img",
                  {
                    src: A.profileBgUrl,
                    alt: "Profile Background",
                    className: "absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity pointer-events-none",
                    referrerPolicy: "no-referrer"
                  }
                ),
                /* @__PURE__ */ c.jsxs("div", { className: "w-24 h-24 rounded-full border-2 border-[var(--accent-color)] p-1 mb-4 relative z-10", children: [
                  /* @__PURE__ */ c.jsx(
                    "img",
                    {
                      src: A.avatarUrl || void 0,
                      alt: "Avatar",
                      className: "w-full h-full rounded-full object-cover",
                      referrerPolicy: "no-referrer"
                    }
                  ),
                  /* @__PURE__ */ c.jsx("div", { className: "absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[var(--card-bg)]" })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { className: "cursor-pointer group relative z-10 flex flex-col items-center", onClick: () => Q(!0), children: [
                  /* @__PURE__ */ c.jsx("h2", { className: "text-xl text-[var(--text-primary)] font-light tracking-widest mb-1 group-hover:text-[var(--accent-color)] transition-colors", children: A.userName }),
                  /* @__PURE__ */ c.jsx("div", { className: "text-xs border border-[var(--wireframe)] px-2 py-1 text-[var(--accent-color)] rounded-sm group-hover:border-[var(--accent-color)] transition-colors", children: A.tag })
                ] })
              ] }),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => y("即达", "购物消费与物资运输网络"),
                  className: "glass-card w-full h-32 md:flex-1 flex flex-col items-center justify-center gap-2 group hover:bg-[var(--bubble-bg)] transition-all clip-corner-br shrink-0 relative overflow-hidden",
                  children: [
                    A.moduleBgs.即达 && /* @__PURE__ */ c.jsx("img", { src: A.moduleBgs.即达, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-2", children: [
                      /* @__PURE__ */ c.jsx(Kx, { className: "text-[var(--accent-color)]", size: 24 }),
                      /* @__PURE__ */ c.jsx("span", { className: "text-2xl text-[var(--text-primary)] tracking-widest font-light text-glow mt-2", children: "即达" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "md:col-span-5 flex flex-col gap-6", children: [
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => y("星网回路", "跨星系加密量子通讯网络"),
                  className: "glass-card w-full h-48 md:flex-1 relative overflow-hidden group clip-corner shrink-0",
                  children: [
                    A.moduleBgs.星网回路 && /* @__PURE__ */ c.jsx(
                      "img",
                      {
                        src: A.moduleBgs.星网回路,
                        alt: "Communication",
                        className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity",
                        referrerPolicy: "no-referrer"
                      }
                    ),
                    /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80" }),
                    /* @__PURE__ */ c.jsxs("div", { className: "absolute bottom-6 right-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ c.jsx(Cu, { className: "text-[var(--accent-color)]", size: 20 }),
                      /* @__PURE__ */ c.jsx("span", { className: "text-2xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "星网回路" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-6 h-32 shrink-0", children: [
                /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    onClick: () => y("轨迹管理", "日常任务与行程安排规划"),
                    className: "glass-card flex items-center justify-center gap-3 group hover:bg-[var(--bubble-bg)] clip-corner-br relative overflow-hidden",
                    children: [
                      A.moduleBgs.轨迹管理 && /* @__PURE__ */ c.jsx("img", { src: A.moduleBgs.轨迹管理, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                      /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
                        /* @__PURE__ */ c.jsx(ix, { className: "text-[var(--accent-color)] group-hover:scale-110 transition-transform", size: 20 }),
                        /* @__PURE__ */ c.jsx("span", { className: "text-lg sm:text-xl text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap", children: "轨迹管理" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    onClick: () => y("记忆锚点", "个人备忘录与记事簿系统"),
                    className: "glass-card flex items-center justify-center gap-3 group hover:bg-[var(--bubble-bg)] clip-corner relative overflow-hidden",
                    children: [
                      A.moduleBgs.记忆锚点 && /* @__PURE__ */ c.jsx("img", { src: A.moduleBgs.记忆锚点, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                      /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
                        /* @__PURE__ */ c.jsx(lx, { className: "text-[var(--accent-color)] group-hover:scale-110 transition-transform", size: 20 }),
                        /* @__PURE__ */ c.jsx("span", { className: "text-lg sm:text-xl text-[var(--text-primary)] tracking-widest font-light text-glow whitespace-nowrap", children: "记忆锚点" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "md:col-span-4 grid grid-cols-2 grid-rows-3 gap-6", children: [
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => y("远程视域", "全息网络直播与沉浸式媒体"),
                  className: "glass-card col-span-2 row-span-1 flex items-center justify-between p-6 group hover:bg-[var(--bubble-bg)] clip-corner shrink-0 min-h-[100px] relative overflow-hidden",
                  children: [
                    A.moduleBgs.远程视域 && /* @__PURE__ */ c.jsx("img", { src: A.moduleBgs.远程视域, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex items-center justify-between w-full", children: [
                      /* @__PURE__ */ c.jsx(sx, { className: "text-[var(--accent-color)]", size: 24 }),
                      /* @__PURE__ */ c.jsx("span", { className: "text-2xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "远程视域" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => y("星网索引", "全星系浏览器与信息查询"),
                  className: "glass-card col-span-1 row-span-2 flex flex-col items-center justify-center gap-4 group hover:bg-[var(--bubble-bg)] clip-corner-br shrink-0 min-h-[160px] relative overflow-hidden",
                  children: [
                    A.moduleBgs.星网索引 && /* @__PURE__ */ c.jsx("img", { src: A.moduleBgs.星网索引, alt: "bg", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity", referrerPolicy: "no-referrer" }),
                    /* @__PURE__ */ c.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-4", children: [
                      /* @__PURE__ */ c.jsx(am, { className: "text-[var(--accent-color)] group-hover:animate-pulse", size: 28 }),
                      /* @__PURE__ */ c.jsx("span", { className: "text-2xl text-[var(--text-primary)] tracking-widest font-light text-glow", style: { writingMode: "vertical-rl" }, children: "星网索引" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(
                "button",
                {
                  onClick: () => y("星途", "星际地图导航与交通出行"),
                  className: "glass-card col-span-1 row-span-2 relative overflow-hidden group clip-corner shrink-0 min-h-[160px]",
                  children: [
                    A.moduleBgs.星途 && /* @__PURE__ */ c.jsx(
                      "img",
                      {
                        src: A.moduleBgs.星途,
                        alt: "Navigation",
                        className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity",
                        referrerPolicy: "no-referrer"
                      }
                    ),
                    /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] to-transparent opacity-90" }),
                    /* @__PURE__ */ c.jsxs("div", { className: "absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2", children: [
                      /* @__PURE__ */ c.jsx(Zx, { className: "text-[var(--accent-color)]", size: 20 }),
                      /* @__PURE__ */ c.jsx("span", { className: "text-2xl text-[var(--text-primary)] tracking-widest font-light text-glow", children: "星途" })
                    ] })
                  ]
                }
              )
            ] })
          ] }) })
        ] }),
        f && f.title !== "星网回路" && /* @__PURE__ */ c.jsx(
          lc,
          {
            isOpen: !0,
            onClose: () => w(null),
            title: f.title,
            children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
              /* @__PURE__ */ c.jsx("div", { className: "w-16 h-16 rounded-full border border-[var(--wireframe)] flex items-center justify-center mb-6 animate-pulse", children: /* @__PURE__ */ c.jsx("div", { className: "w-8 h-8 bg-[var(--accent-color)] rounded-full opacity-50" }) }),
              /* @__PURE__ */ c.jsxs("h3", { className: "text-2xl font-light tracking-widest text-[var(--text-primary)] mb-4 text-glow", children: [
                f.title,
                " 系统加载中"
              ] }),
              /* @__PURE__ */ c.jsxs("p", { className: "text-sm font-mono text-[var(--text-secondary)] mb-8 max-w-md", children: [
                f.desc,
                /* @__PURE__ */ c.jsx("br", {}),
                /* @__PURE__ */ c.jsx("br", {}),
                "正在建立安全量子连接并同步数据..."
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "w-full max-w-xs h-1 bg-[var(--wireframe)] overflow-hidden", children: /* @__PURE__ */ c.jsx("div", { className: "h-full bg-[var(--accent-color)] w-1/3 animate-[slideRight_2s_ease-in-out_infinite]" }) })
            ] })
          }
        ),
        $ && /* @__PURE__ */ c.jsx(
          lc,
          {
            isOpen: !0,
            onClose: () => R(!1),
            title: "系统设置",
            children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2", children: "外观设置" }),
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "自定义字体 URL (TTF/WOFF)" }),
                  /* @__PURE__ */ c.jsx("input", { type: "text", value: A.customFontUrl, onChange: (U) => ae({ ...A, customFontUrl: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "留空使用默认字体" })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsxs("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: [
                    "全局字体大小缩放 (",
                    A.fontSizeScale,
                    "x)"
                  ] }),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      type: "range",
                      min: "0.8",
                      max: "1.5",
                      step: "0.05",
                      value: A.fontSizeScale,
                      onChange: (U) => ae({ ...A, fontSizeScale: parseFloat(U.target.value) }),
                      className: "w-full accent-[var(--accent-color)]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2", children: "模块背景图 (URL)" }),
                Object.keys(A.moduleBgs).map((U) => /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: U }),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      type: "text",
                      value: A.moduleBgs[U],
                      onChange: (ee) => ae({
                        ...A,
                        moduleBgs: { ...A.moduleBgs, [U]: ee.target.value }
                      }),
                      className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]",
                      placeholder: "留空则无背景"
                    }
                  )
                ] }, U))
              ] })
            ] })
          }
        ),
        q && /* @__PURE__ */ c.jsx(
          lc,
          {
            isOpen: !0,
            onClose: () => Q(!1),
            title: "用户人设设定",
            children: /* @__PURE__ */ c.jsx("div", { className: "flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar", children: /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "名称" }),
                /* @__PURE__ */ c.jsx("input", { type: "text", value: A.userName, onChange: (U) => ae({ ...A, userName: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "标签" }),
                /* @__PURE__ */ c.jsx("input", { type: "text", value: A.tag, onChange: (U) => ae({ ...A, tag: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "头像 URL" }),
                /* @__PURE__ */ c.jsx("input", { type: "text", value: A.avatarUrl, onChange: (U) => ae({ ...A, avatarUrl: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "头像背景图 URL" }),
                /* @__PURE__ */ c.jsx("input", { type: "text", value: A.profileBgUrl, onChange: (U) => ae({ ...A, profileBgUrl: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "留空则无背景" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "详细人设 (User Persona)" }),
                /* @__PURE__ */ c.jsx(
                  "textarea",
                  {
                    value: A.userPersona || "",
                    onChange: (U) => ae({ ...A, userPersona: U.target.value }),
                    className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)] min-h-[100px] resize-y",
                    placeholder: "描述你的身份、性格、背景等，AI将根据此设定与你交互..."
                  }
                )
              ] })
            ] }) })
          }
        ),
        N && /* @__PURE__ */ c.jsx(
          lc,
          {
            isOpen: !0,
            onClose: () => D(!1),
            title: "AI与API配置",
            children: /* @__PURE__ */ c.jsx("div", { className: "flex flex-col gap-6 py-4 text-[var(--text-primary)] max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar", children: /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold tracking-widest border-b border-[var(--wireframe)] pb-2", children: "API 连接" }),
              /* @__PURE__ */ c.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ c.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ c.jsx("input", { type: "radio", name: "apiMode", value: "gemini", checked: A.apiMode === "gemini", onChange: (U) => ae({ ...A, apiMode: U.target.value }), className: "accent-[var(--accent-color)]" }),
                  /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: "使用当前API (Gemini)" })
                ] }),
                /* @__PURE__ */ c.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ c.jsx("input", { type: "radio", name: "apiMode", value: "custom", checked: A.apiMode === "custom", onChange: (U) => ae({ ...A, apiMode: U.target.value }), className: "accent-[var(--accent-color)]" }),
                  /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: "自定义API" })
                ] })
              ] }),
              A.apiMode === "custom" && /* @__PURE__ */ c.jsxs("div", { className: "space-y-3 pl-4 border-l-2 border-[var(--wireframe)]", children: [
                A.apiPresets && A.apiPresets.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "预设配置" }),
                  /* @__PURE__ */ c.jsxs(
                    "select",
                    {
                      onChange: (U) => {
                        var de;
                        const ee = (de = A.apiPresets) == null ? void 0 : de.find((Qe) => Qe.id === U.target.value);
                        ee && ae({ ...A, customApiUrl: ee.url, customApiKey: ee.key });
                      },
                      className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]",
                      children: [
                        /* @__PURE__ */ c.jsx("option", { value: "", children: "选择预设..." }),
                        A.apiPresets.map((U) => /* @__PURE__ */ c.jsx("option", { value: U.id, children: U.name }, U.id))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "API 地址" }),
                  /* @__PURE__ */ c.jsx("input", { type: "text", value: A.customApiUrl, onChange: (U) => ae({ ...A, customApiUrl: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "例如: https://api.openai.com/v1" })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)] mb-1", children: "API Key" }),
                  /* @__PURE__ */ c.jsx("input", { type: "password", value: A.customApiKey, onChange: (U) => ae({ ...A, customApiKey: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]" })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { className: "flex gap-2 mt-2", children: [
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      onClick: oe,
                      disabled: V === "testing" || !A.customApiUrl || !A.customApiKey,
                      className: "flex-1 flex items-center justify-center gap-2 bg-[var(--bubble-bg)] border border-[var(--wireframe)] hover:border-[var(--accent-color)] rounded px-3 py-1.5 text-xs transition-colors disabled:opacity-50",
                      children: V === "testing" ? /* @__PURE__ */ c.jsx(Du, { size: 14, className: "animate-spin" }) : "测试连接"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      onClick: () => {
                        var ee;
                        const U = prompt("请输入预设名称:", ((ee = A.customApiUrl) == null ? void 0 : ee.substring(0, 15)) || "New Preset");
                        if (U) {
                          const de = {
                            id: Date.now().toString(),
                            name: U,
                            url: A.customApiUrl || "",
                            key: A.customApiKey || ""
                          };
                          ae({
                            ...A,
                            apiPresets: [...A.apiPresets || [], de]
                          });
                        }
                      },
                      disabled: !A.customApiUrl,
                      className: "flex-1 bg-[var(--bubble-bg)] border border-[var(--wireframe)] hover:border-[var(--accent-color)] rounded px-3 py-1.5 text-xs transition-colors disabled:opacity-50",
                      children: "保存为预设"
                    }
                  )
                ] }),
                V === "success" && /* @__PURE__ */ c.jsxs("div", { className: "text-xs text-emerald-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ c.jsx(rx, { size: 12 }),
                  " 连接成功"
                ] }),
                V === "error" && /* @__PURE__ */ c.jsxs("div", { className: "text-xs text-rose-500 flex items-center gap-1", children: [
                  /* @__PURE__ */ c.jsx(Id, { size: 12 }),
                  " 连接失败，请检查地址和Key"
                ] }),
                /* @__PURE__ */ c.jsxs("div", { className: "pt-2 border-t border-[var(--wireframe)]", children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                    /* @__PURE__ */ c.jsx("label", { className: "block text-xs text-[var(--text-secondary)]", children: "模型名称" }),
                    /* @__PURE__ */ c.jsx("button", { onClick: fe, disabled: ue || !A.customApiUrl, className: "text-xs text-[var(--accent-color)] hover:underline disabled:opacity-50", children: ue ? "拉取中..." : "拉取模型列表" })
                  ] }),
                  te.length > 0 ? /* @__PURE__ */ c.jsxs(
                    "select",
                    {
                      value: A.customApiModel,
                      onChange: (U) => ae({ ...A, customApiModel: U.target.value }),
                      className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]",
                      children: [
                        /* @__PURE__ */ c.jsx("option", { value: "", children: "选择模型..." }),
                        te.map((U) => /* @__PURE__ */ c.jsx("option", { value: U, children: U }, U))
                      ]
                    }
                  ) : /* @__PURE__ */ c.jsx("input", { type: "text", value: A.customApiModel, onChange: (U) => ae({ ...A, customApiModel: U.target.value }), className: "w-full bg-[var(--bubble-bg)] border border-[var(--wireframe)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--accent-color)]", placeholder: "手动输入模型名称" })
                ] })
              ] })
            ] }) })
          }
        )
      ]
    }
  );
};
function Q0() {
  const [r, h] = O.useState(!1), [S, f] = O.useState(!0), w = () => f(!S);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "min-h-screen w-full font-sans selection:bg-[var(--accent-color)] selection:text-white",
      "data-theme": S ? "dark" : "light",
      style: { colorScheme: S ? "dark" : "light" },
      children: r ? /* @__PURE__ */ c.jsx(
        X0,
        {
          onLock: () => h(!1),
          toggleTheme: w,
          isDarkMode: S
        }
      ) : /* @__PURE__ */ c.jsx(j0, { onUnlock: () => h(!0) })
    }
  );
}
const Bn = document.createElement("div");
Bn.id = "st-terminal-overlay";
Bn.style.cssText = `
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: none;
`;
document.body.appendChild(Bn);
const im = Bn.attachShadow({ mode: "open" }), cm = document.createElement("style");
cm.textContent = `
  :host {
    all: initial;
    display: block;
    width: 100%;
    height: 100%;
  }
  * { box-sizing: border-box; }
`;
im.appendChild(cm);
const Ou = document.createElement("div");
Ou.style.cssText = "width:100%;height:100%;";
im.appendChild(Ou);
Yh.createRoot(Ou).render(
  /* @__PURE__ */ c.jsx(Dh.StrictMode, { children: /* @__PURE__ */ c.jsx(Q0, {}) })
);
const ot = document.createElement("button");
ot.id = "st-terminal-btn";
ot.textContent = "终";
ot.title = "星际终端";
ot.style.cssText = `
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99998;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5c7b96, #3b5a72);
  color: #dce3e8;
  border: 1px solid rgba(144,164,186,0.4);
  font-size: 15px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  letter-spacing: 0.05em;
`;
ot.addEventListener("mouseenter", () => {
  ot.style.transform = "scale(1.1)", ot.style.boxShadow = "0 6px 28px rgba(92,123,150,0.5)";
});
ot.addEventListener("mouseleave", () => {
  ot.style.transform = "scale(1)", ot.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
});
let Rn = !1;
ot.addEventListener("click", () => {
  Rn = !Rn, Bn.style.display = Rn ? "block" : "none", ot.textContent = Rn ? "✕" : "终", ot.style.background = Rn ? "linear-gradient(135deg, #3b444f, #1e2328)" : "linear-gradient(135deg, #5c7b96, #3b5a72)";
});
document.body.appendChild(ot);
