async function onLoad(A, qe, G, he, te, dt) {
    const pt = {
        enableSms: he.enabledSMS,
        enableEmail: he.enabledMail,
        enableCoordenadas: he.enabledCDC,
        rut: A,
        clientId: qe,
        authToken: G,
        contextData: [{
            name: "flujo",
            value: te
        }],
        callback: dt
    };
    return !!areFilesLoaded() && (widget1 = testWidget.widgets.autWidget.new(pt),
    widget1.render(document.getElementById("element")),
    !0)
}
function areFilesLoaded() {
    try {
        if (testWidget)
            return !0
    } catch {
        return !1
    }
}
async function onLoadV2(A, ve, G, he) {
    const te = {
        widgetConfig: {
            header: A,
            data: ve,
            signature: G,
            callback: he
        }
    };
    return !!areFilesLoadedV2() && (WidgetBR.widget.load(te, document.getElementById("contenedor")),
    !0)
}
function areFilesLoadedV2() {
    try {
        if (WidgetBR)
            return !0
    } catch {
        return !1
    }
}
async function onLoadV3(A, ve, G, he) {
    const te = {
        header: A,
        data: ve,
        signature: G,
        callback: he
    };
    return !!areFilesLoadedV3() && (authWidget.widget.load(te, document.getElementById("element")),
    !0)
}
function areFilesLoadedV3() {
    try {
        if (authWidget)
            return !0
    } catch {
        return !1
    }
}
async function onLoadAC(A, ve, G, he) {
    const te = {
        header: A,
        data: ve,
        signature: G,
        callback: he
    };
    return !!areFilesLoadedAC() && (widgetAD.widget.load(te, document.getElementById("element")),
    !0)
}
function areFilesLoadedAC() {
    try {
        if (widgetAD)
            return !0
    } catch {
        return !1
    }
}
!function(A, ve) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = A.document ? ve(A, !0) : function(G) {
        if (!G.document)
            throw new Error("jQuery requires a window with a document");
        return ve(G)
    }
    : ve(A)
}(typeof window < "u" ? window : this, function(A, ve) {
    "use strict";
    var G = []
      , he = Object.getPrototypeOf
      , te = G.slice
      , dt = G.flat ? function(e) {
        return G.flat.call(e)
    }
    : function(e) {
        return G.concat.apply([], e)
    }
      , tt = G.push
      , qe = G.indexOf
      , Be = {}
      , pt = Be.toString
      , ht = Be.hasOwnProperty
      , Zt = ht.toString
      , Jn = Zt.call(Object)
      , B = {}
      , P = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , Fe = function(e) {
        return null != e && e === e.window
    }
      , R = A.document
      , Kn = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function en(e, t, n) {
        var r, o, a = (n = n || R).createElement("script");
        if (a.text = e,
        t)
            for (r in Kn)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }
    function $e(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Be[pt.call(e)] || "object" : typeof e
    }
    var i = function(e, t) {
        return new i.fn.init(e,t)
    };
    function Lt(e) {
        var t = !!e && "length"in e && e.length
          , n = $e(e);
        return !P(e) && !Fe(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    i.fn = i.prototype = {
        jquery: "3.6.0",
        constructor: i,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null == e ? te.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = i.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return i.each(this, e)
        },
        map: function(e) {
            return this.pushStack(i.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(i.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(i.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: tt,
        sort: G.sort,
        splice: G.splice
    },
    i.extend = i.fn.extend = function() {
        var e, t, n, r, o, a, s = arguments[0] || {}, c = 1, f = arguments.length, p = !1;
        for ("boolean" == typeof s && (p = s,
        s = arguments[c] || {},
        c++),
        "object" == typeof s || P(s) || (s = {}),
        c === f && (s = this,
        c--); c < f; c++)
            if (null != (e = arguments[c]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && s !== r && (p && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t],
                    a = o && !Array.isArray(n) ? [] : o || i.isPlainObject(n) ? n : {},
                    o = !1,
                    s[t] = i.extend(p, a, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    i.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== pt.call(e) || (t = he(e)) && ("function" != typeof (n = ht.call(t, "constructor") && t.constructor) || Zt.call(n) !== Jn))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            en(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (Lt(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (Lt(Object(e)) ? i.merge(n, "string" == typeof e ? [e] : e) : tt.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : qe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, a = e.length, s = !n; o < a; o++)
                !t(e[o], o) !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (Lt(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return dt(s)
        },
        guid: 1,
        support: B
    }),
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = G[Symbol.iterator]),
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        Be["[object " + t + "]"] = t.toLowerCase()
    });
    var He = function(e) {
        var t, n, r, o, a, s, c, f, p, m, x, g, y, E, k, S, z, J, ue, F = "sizzle" + 1 * new Date, q = e.document, ae = 0, M = 0, U = kt(), ct = kt(), Ct = kt(), le = kt(), Me = function(u, l) {
            return u === l && (x = !0),
            0
        }, Ke = {}.hasOwnProperty, se = [], Ze = se.pop, ye = se.push, X = se.push, ce = se.slice, fe = function(u, l) {
            for (var d = 0, v = u.length; d < v; d++)
                if (u[d] === l)
                    return d;
            return -1
        }, ke = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", K = "\\[" + H + "*(" + W + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + H + "*\\]", de = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)", Y = new RegExp(H + "+","g"), pe = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$","g"), et = new RegExp("^" + H + "*," + H + "*"), Et = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), Ir = new RegExp(H + "|>"), Mr = new RegExp(de), Wr = new RegExp("^" + W + "$"), St = {
            ID: new RegExp("^#(" + W + ")"),
            CLASS: new RegExp("^\\.(" + W + ")"),
            TAG: new RegExp("^(" + W + "|[*])"),
            ATTR: new RegExp("^" + K),
            PSEUDO: new RegExp("^" + de),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ke + ")$","i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)","i")
        }, Br = /HTML$/i, Fr = /^(?:input|select|textarea|button)$/i, $r = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, _r = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Vt = /[+~]/, je = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])","g"), Le = function(u, l) {
            var d = "0x" + u.slice(1) - 65536;
            return l || (d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320))
        }, _n = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, zn = function(u, l) {
            return l ? "\0" === u ? "\ufffd" : u.slice(0, -1) + "\\" + u.charCodeAt(u.length - 1).toString(16) + " " : "\\" + u
        }, Un = function() {
            g()
        }, zr = Dt(function(u) {
            return !0 === u.disabled && "fieldset" === u.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            X.apply(se = ce.call(q.childNodes), q.childNodes)
        } catch {
            X = {
                apply: se.length ? function(l, d) {
                    ye.apply(l, ce.call(d))
                }
                : function(l, d) {
                    for (var v = l.length, h = 0; l[v++] = d[h++]; )
                        ;
                    l.length = v - 1
                }
            }
        }
        function $(u, l, d, v) {
            var h, b, w, T, C, L, N, j = l && l.ownerDocument, I = l ? l.nodeType : 9;
            if (d = d || [],
            "string" != typeof u || !u || 1 !== I && 9 !== I && 11 !== I)
                return d;
            if (!v && (g(l),
            l = l || y,
            k)) {
                if (11 !== I && (C = _r.exec(u)))
                    if (h = C[1]) {
                        if (9 === I) {
                            if (!(w = l.getElementById(h)))
                                return d;
                            if (w.id === h)
                                return d.push(w),
                                d
                        } else if (j && (w = j.getElementById(h)) && ue(l, w) && w.id === h)
                            return d.push(w),
                            d
                    } else {
                        if (C[2])
                            return X.apply(d, l.getElementsByTagName(u)),
                            d;
                        if ((h = C[3]) && n.getElementsByClassName && l.getElementsByClassName)
                            return X.apply(d, l.getElementsByClassName(h)),
                            d
                    }
                if (n.qsa && !le[u + " "] && (!S || !S.test(u)) && (1 !== I || "object" !== l.nodeName.toLowerCase())) {
                    if (N = u,
                    j = l,
                    1 === I && (Ir.test(u) || Et.test(u))) {
                        for ((j = Vt.test(u) && Yt(l.parentNode) || l) === l && n.scope || ((T = l.getAttribute("id")) ? T = T.replace(_n, zn) : l.setAttribute("id", T = F)),
                        b = (L = s(u)).length; b--; )
                            L[b] = (T ? "#" + T : ":scope") + " " + At(L[b]);
                        N = L.join(",")
                    }
                    try {
                        return X.apply(d, j.querySelectorAll(N)),
                        d
                    } catch {
                        le(u, !0)
                    } finally {
                        T === F && l.removeAttribute("id")
                    }
                }
            }
            return f(u.replace(pe, "$1"), l, d, v)
        }
        function kt() {
            var u = [];
            return function l(d, v) {
                return u.push(d + " ") > r.cacheLength && delete l[u.shift()],
                l[d + " "] = v
            }
        }
        function we(u) {
            return u[F] = !0,
            u
        }
        function Te(u) {
            var l = y.createElement("fieldset");
            try {
                return !!u(l)
            } catch {
                return !1
            } finally {
                l.parentNode && l.parentNode.removeChild(l),
                l = null
            }
        }
        function Gt(u, l) {
            for (var d = u.split("|"), v = d.length; v--; )
                r.attrHandle[d[v]] = l
        }
        function Xn(u, l) {
            var d = l && u
              , v = d && 1 === u.nodeType && 1 === l.nodeType && u.sourceIndex - l.sourceIndex;
            if (v)
                return v;
            if (d)
                for (; d = d.nextSibling; )
                    if (d === l)
                        return -1;
            return u ? 1 : -1
        }
        function Ur(u) {
            return function(l) {
                return "input" === l.nodeName.toLowerCase() && l.type === u
            }
        }
        function Xr(u) {
            return function(l) {
                var d = l.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && l.type === u
            }
        }
        function Vn(u) {
            return function(l) {
                return "form"in l ? l.parentNode && !1 === l.disabled ? "label"in l ? "label"in l.parentNode ? l.parentNode.disabled === u : l.disabled === u : l.isDisabled === u || l.isDisabled !== !u && zr(l) === u : l.disabled === u : "label"in l && l.disabled === u
            }
        }
        function We(u) {
            return we(function(l) {
                return l = +l,
                we(function(d, v) {
                    for (var h, b = u([], d.length, l), w = b.length; w--; )
                        d[h = b[w]] && (d[h] = !(v[h] = d[h]))
                })
            })
        }
        function Yt(u) {
            return u && typeof u.getElementsByTagName < "u" && u
        }
        for (t in n = $.support = {},
        a = $.isXML = function(u) {
            var d = u && (u.ownerDocument || u).documentElement;
            return !Br.test(u && u.namespaceURI || d && d.nodeName || "HTML")
        }
        ,
        g = $.setDocument = function(u) {
            var l, d, v = u ? u.ownerDocument || u : q;
            return v != y && 9 === v.nodeType && v.documentElement && (E = (y = v).documentElement,
            k = !a(y),
            q != y && (d = y.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", Un, !1) : d.attachEvent && d.attachEvent("onunload", Un)),
            n.scope = Te(function(h) {
                return E.appendChild(h).appendChild(y.createElement("div")),
                typeof h.querySelectorAll < "u" && !h.querySelectorAll(":scope fieldset div").length
            }),
            n.attributes = Te(function(h) {
                return h.className = "i",
                !h.getAttribute("className")
            }),
            n.getElementsByTagName = Te(function(h) {
                return h.appendChild(y.createComment("")),
                !h.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = ft.test(y.getElementsByClassName),
            n.getById = Te(function(h) {
                return E.appendChild(h).id = F,
                !y.getElementsByName || !y.getElementsByName(F).length
            }),
            n.getById ? (r.filter.ID = function(h) {
                var b = h.replace(je, Le);
                return function(w) {
                    return w.getAttribute("id") === b
                }
            }
            ,
            r.find.ID = function(h, b) {
                if (typeof b.getElementById < "u" && k) {
                    var w = b.getElementById(h);
                    return w ? [w] : []
                }
            }
            ) : (r.filter.ID = function(h) {
                var b = h.replace(je, Le);
                return function(w) {
                    var T = typeof w.getAttributeNode < "u" && w.getAttributeNode("id");
                    return T && T.value === b
                }
            }
            ,
            r.find.ID = function(h, b) {
                if (typeof b.getElementById < "u" && k) {
                    var w, T, C, L = b.getElementById(h);
                    if (L) {
                        if ((w = L.getAttributeNode("id")) && w.value === h)
                            return [L];
                        for (C = b.getElementsByName(h),
                        T = 0; L = C[T++]; )
                            if ((w = L.getAttributeNode("id")) && w.value === h)
                                return [L]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(h, b) {
                return typeof b.getElementsByTagName < "u" ? b.getElementsByTagName(h) : n.qsa ? b.querySelectorAll(h) : void 0
            }
            : function(h, b) {
                var w, T = [], C = 0, L = b.getElementsByTagName(h);
                if ("*" === h) {
                    for (; w = L[C++]; )
                        1 === w.nodeType && T.push(w);
                    return T
                }
                return L
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(h, b) {
                if (typeof b.getElementsByClassName < "u" && k)
                    return b.getElementsByClassName(h)
            }
            ,
            z = [],
            S = [],
            (n.qsa = ft.test(y.querySelectorAll)) && (Te(function(h) {
                var b;
                E.appendChild(h).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                h.querySelectorAll("[msallowcapture^='']").length && S.push("[*^$]=" + H + "*(?:''|\"\")"),
                h.querySelectorAll("[selected]").length || S.push("\\[" + H + "*(?:value|" + ke + ")"),
                h.querySelectorAll("[id~=" + F + "-]").length || S.push("~="),
                (b = y.createElement("input")).setAttribute("name", ""),
                h.appendChild(b),
                h.querySelectorAll("[name='']").length || S.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                h.querySelectorAll(":checked").length || S.push(":checked"),
                h.querySelectorAll("a#" + F + "+*").length || S.push(".#.+[+~]"),
                h.querySelectorAll("\\\f"),
                S.push("[\\r\\n\\f]")
            }),
            Te(function(h) {
                h.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = y.createElement("input");
                b.setAttribute("type", "hidden"),
                h.appendChild(b).setAttribute("name", "D"),
                h.querySelectorAll("[name=d]").length && S.push("name" + H + "*[*^$|!~]?="),
                2 !== h.querySelectorAll(":enabled").length && S.push(":enabled", ":disabled"),
                E.appendChild(h).disabled = !0,
                2 !== h.querySelectorAll(":disabled").length && S.push(":enabled", ":disabled"),
                h.querySelectorAll("*,:x"),
                S.push(",.*:")
            })),
            (n.matchesSelector = ft.test(J = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && Te(function(h) {
                n.disconnectedMatch = J.call(h, "*"),
                J.call(h, "[s!='']:x"),
                z.push("!=", de)
            }),
            S = S.length && new RegExp(S.join("|")),
            z = z.length && new RegExp(z.join("|")),
            l = ft.test(E.compareDocumentPosition),
            ue = l || ft.test(E.contains) ? function(h, b) {
                var w = 9 === h.nodeType ? h.documentElement : h
                  , T = b && b.parentNode;
                return h === T || !(!T || 1 !== T.nodeType || !(w.contains ? w.contains(T) : h.compareDocumentPosition && 16 & h.compareDocumentPosition(T)))
            }
            : function(h, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === h)
                            return !0;
                return !1
            }
            ,
            Me = l ? function(h, b) {
                if (h === b)
                    return x = !0,
                    0;
                var w = !h.compareDocumentPosition - !b.compareDocumentPosition;
                return w || (1 & (w = (h.ownerDocument || h) == (b.ownerDocument || b) ? h.compareDocumentPosition(b) : 1) || !n.sortDetached && b.compareDocumentPosition(h) === w ? h == y || h.ownerDocument == q && ue(q, h) ? -1 : b == y || b.ownerDocument == q && ue(q, b) ? 1 : m ? fe(m, h) - fe(m, b) : 0 : 4 & w ? -1 : 1)
            }
            : function(h, b) {
                if (h === b)
                    return x = !0,
                    0;
                var w, T = 0, C = h.parentNode, L = b.parentNode, N = [h], j = [b];
                if (!C || !L)
                    return h == y ? -1 : b == y ? 1 : C ? -1 : L ? 1 : m ? fe(m, h) - fe(m, b) : 0;
                if (C === L)
                    return Xn(h, b);
                for (w = h; w = w.parentNode; )
                    N.unshift(w);
                for (w = b; w = w.parentNode; )
                    j.unshift(w);
                for (; N[T] === j[T]; )
                    T++;
                return T ? Xn(N[T], j[T]) : N[T] == q ? -1 : j[T] == q ? 1 : 0
            }
            ),
            y
        }
        ,
        $.matches = function(u, l) {
            return $(u, null, null, l)
        }
        ,
        $.matchesSelector = function(u, l) {
            if (g(u),
            n.matchesSelector && k && !le[l + " "] && (!z || !z.test(l)) && (!S || !S.test(l)))
                try {
                    var d = J.call(u, l);
                    if (d || n.disconnectedMatch || u.document && 11 !== u.document.nodeType)
                        return d
                } catch {
                    le(l, !0)
                }
            return 0 < $(l, y, null, [u]).length
        }
        ,
        $.contains = function(u, l) {
            return (u.ownerDocument || u) != y && g(u),
            ue(u, l)
        }
        ,
        $.attr = function(u, l) {
            (u.ownerDocument || u) != y && g(u);
            var d = r.attrHandle[l.toLowerCase()]
              , v = d && Ke.call(r.attrHandle, l.toLowerCase()) ? d(u, l, !k) : void 0;
            return void 0 !== v ? v : n.attributes || !k ? u.getAttribute(l) : (v = u.getAttributeNode(l)) && v.specified ? v.value : null
        }
        ,
        $.escape = function(u) {
            return (u + "").replace(_n, zn)
        }
        ,
        $.error = function(u) {
            throw new Error("Syntax error, unrecognized expression: " + u)
        }
        ,
        $.uniqueSort = function(u) {
            var l, d = [], v = 0, h = 0;
            if (x = !n.detectDuplicates,
            m = !n.sortStable && u.slice(0),
            u.sort(Me),
            x) {
                for (; l = u[h++]; )
                    l === u[h] && (v = d.push(h));
                for (; v--; )
                    u.splice(d[v], 1)
            }
            return m = null,
            u
        }
        ,
        o = $.getText = function(u) {
            var l, d = "", v = 0, h = u.nodeType;
            if (h) {
                if (1 === h || 9 === h || 11 === h) {
                    if ("string" == typeof u.textContent)
                        return u.textContent;
                    for (u = u.firstChild; u; u = u.nextSibling)
                        d += o(u)
                } else if (3 === h || 4 === h)
                    return u.nodeValue
            } else
                for (; l = u[v++]; )
                    d += o(l);
            return d
        }
        ,
        (r = $.selectors = {
            cacheLength: 50,
            createPseudo: we,
            match: St,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(u) {
                    return u[1] = u[1].replace(je, Le),
                    u[3] = (u[3] || u[4] || u[5] || "").replace(je, Le),
                    "~=" === u[2] && (u[3] = " " + u[3] + " "),
                    u.slice(0, 4)
                },
                CHILD: function(u) {
                    return u[1] = u[1].toLowerCase(),
                    "nth" === u[1].slice(0, 3) ? (u[3] || $.error(u[0]),
                    u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * ("even" === u[3] || "odd" === u[3])),
                    u[5] = +(u[7] + u[8] || "odd" === u[3])) : u[3] && $.error(u[0]),
                    u
                },
                PSEUDO: function(u) {
                    var l, d = !u[6] && u[2];
                    return St.CHILD.test(u[0]) ? null : (u[3] ? u[2] = u[4] || u[5] || "" : d && Mr.test(d) && (l = s(d, !0)) && (l = d.indexOf(")", d.length - l) - d.length) && (u[0] = u[0].slice(0, l),
                    u[2] = d.slice(0, l)),
                    u.slice(0, 3))
                }
            },
            filter: {
                TAG: function(u) {
                    var l = u.replace(je, Le).toLowerCase();
                    return "*" === u ? function() {
                        return !0
                    }
                    : function(d) {
                        return d.nodeName && d.nodeName.toLowerCase() === l
                    }
                },
                CLASS: function(u) {
                    var l = U[u + " "];
                    return l || (l = new RegExp("(^|" + H + ")" + u + "(" + H + "|$)")) && U(u, function(d) {
                        return l.test("string" == typeof d.className && d.className || typeof d.getAttribute < "u" && d.getAttribute("class") || "")
                    })
                },
                ATTR: function(u, l, d) {
                    return function(v) {
                        var h = $.attr(v, u);
                        return null == h ? "!=" === l : !l || (h += "",
                        "=" === l ? h === d : "!=" === l ? h !== d : "^=" === l ? d && 0 === h.indexOf(d) : "*=" === l ? d && -1 < h.indexOf(d) : "$=" === l ? d && h.slice(-d.length) === d : "~=" === l ? -1 < (" " + h.replace(Y, " ") + " ").indexOf(d) : "|=" === l && (h === d || h.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(u, l, d, v, h) {
                    var b = "nth" !== u.slice(0, 3)
                      , w = "last" !== u.slice(-4)
                      , T = "of-type" === l;
                    return 1 === v && 0 === h ? function(C) {
                        return !!C.parentNode
                    }
                    : function(C, L, N) {
                        var j, I, V, O, Z, ee, re = b !== w ? "nextSibling" : "previousSibling", _ = C.parentNode, Ae = T && C.nodeName.toLowerCase(), ne = !N && !T, Q = !1;
                        if (_) {
                            if (b) {
                                for (; re; ) {
                                    for (O = C; O = O[re]; )
                                        if (T ? O.nodeName.toLowerCase() === Ae : 1 === O.nodeType)
                                            return !1;
                                    ee = re = "only" === u && !ee && "nextSibling"
                                }
                                return !0
                            }
                            if (ee = [w ? _.firstChild : _.lastChild],
                            w && ne) {
                                for (Q = (Z = (j = (I = (V = (O = _)[F] || (O[F] = {}))[O.uniqueID] || (V[O.uniqueID] = {}))[u] || [])[0] === ae && j[1]) && j[2],
                                O = Z && _.childNodes[Z]; O = ++Z && O && O[re] || (Q = Z = 0) || ee.pop(); )
                                    if (1 === O.nodeType && ++Q && O === C) {
                                        I[u] = [ae, Z, Q];
                                        break
                                    }
                            } else if (ne && (Q = Z = (j = (I = (V = (O = C)[F] || (O[F] = {}))[O.uniqueID] || (V[O.uniqueID] = {}))[u] || [])[0] === ae && j[1]),
                            !1 === Q)
                                for (; (O = ++Z && O && O[re] || (Q = Z = 0) || ee.pop()) && ((T ? O.nodeName.toLowerCase() !== Ae : 1 !== O.nodeType) || !++Q || (ne && ((I = (V = O[F] || (O[F] = {}))[O.uniqueID] || (V[O.uniqueID] = {}))[u] = [ae, Q]),
                                O !== C)); )
                                    ;
                            return (Q -= h) === v || Q % v == 0 && 0 <= Q / v
                        }
                    }
                },
                PSEUDO: function(u, l) {
                    var d, v = r.pseudos[u] || r.setFilters[u.toLowerCase()] || $.error("unsupported pseudo: " + u);
                    return v[F] ? v(l) : 1 < v.length ? (d = [u, u, "", l],
                    r.setFilters.hasOwnProperty(u.toLowerCase()) ? we(function(h, b) {
                        for (var w, T = v(h, l), C = T.length; C--; )
                            h[w = fe(h, T[C])] = !(b[w] = T[C])
                    }) : function(h) {
                        return v(h, 0, d)
                    }
                    ) : v
                }
            },
            pseudos: {
                not: we(function(u) {
                    var l = []
                      , d = []
                      , v = c(u.replace(pe, "$1"));
                    return v[F] ? we(function(h, b, w, T) {
                        for (var C, L = v(h, null, T, []), N = h.length; N--; )
                            (C = L[N]) && (h[N] = !(b[N] = C))
                    }) : function(h, b, w) {
                        return l[0] = h,
                        v(l, null, w, d),
                        l[0] = null,
                        !d.pop()
                    }
                }),
                has: we(function(u) {
                    return function(l) {
                        return 0 < $(u, l).length
                    }
                }),
                contains: we(function(u) {
                    return u = u.replace(je, Le),
                    function(l) {
                        return -1 < (l.textContent || o(l)).indexOf(u)
                    }
                }),
                lang: we(function(u) {
                    return Wr.test(u || "") || $.error("unsupported lang: " + u),
                    u = u.replace(je, Le).toLowerCase(),
                    function(l) {
                        var d;
                        do {
                            if (d = k ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang"))
                                return (d = d.toLowerCase()) === u || 0 === d.indexOf(u + "-")
                        } while ((l = l.parentNode) && 1 === l.nodeType);
                        return !1
                    }
                }),
                target: function(u) {
                    var l = e.location && e.location.hash;
                    return l && l.slice(1) === u.id
                },
                root: function(u) {
                    return u === E
                },
                focus: function(u) {
                    return u === y.activeElement && (!y.hasFocus || y.hasFocus()) && !!(u.type || u.href || ~u.tabIndex)
                },
                enabled: Vn(!1),
                disabled: Vn(!0),
                checked: function(u) {
                    var l = u.nodeName.toLowerCase();
                    return "input" === l && !!u.checked || "option" === l && !!u.selected
                },
                selected: function(u) {
                    return !0 === u.selected
                },
                empty: function(u) {
                    for (u = u.firstChild; u; u = u.nextSibling)
                        if (u.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(u) {
                    return !r.pseudos.empty(u)
                },
                header: function(u) {
                    return $r.test(u.nodeName)
                },
                input: function(u) {
                    return Fr.test(u.nodeName)
                },
                button: function(u) {
                    var l = u.nodeName.toLowerCase();
                    return "input" === l && "button" === u.type || "button" === l
                },
                text: function(u) {
                    var l;
                    return "input" === u.nodeName.toLowerCase() && "text" === u.type && (null == (l = u.getAttribute("type")) || "text" === l.toLowerCase())
                },
                first: We(function() {
                    return [0]
                }),
                last: We(function(u, l) {
                    return [l - 1]
                }),
                eq: We(function(u, l, d) {
                    return [d < 0 ? d + l : d]
                }),
                even: We(function(u, l) {
                    for (var d = 0; d < l; d += 2)
                        u.push(d);
                    return u
                }),
                odd: We(function(u, l) {
                    for (var d = 1; d < l; d += 2)
                        u.push(d);
                    return u
                }),
                lt: We(function(u, l, d) {
                    for (var v = d < 0 ? d + l : l < d ? l : d; 0 <= --v; )
                        u.push(v);
                    return u
                }),
                gt: We(function(u, l, d) {
                    for (var v = d < 0 ? d + l : d; ++v < l; )
                        u.push(v);
                    return u
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = Ur(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = Xr(t);
        function Gn() {}
        function At(u) {
            for (var l = 0, d = u.length, v = ""; l < d; l++)
                v += u[l].value;
            return v
        }
        function Dt(u, l, d) {
            var v = l.dir
              , h = l.next
              , b = h || v
              , w = d && "parentNode" === b
              , T = M++;
            return l.first ? function(C, L, N) {
                for (; C = C[v]; )
                    if (1 === C.nodeType || w)
                        return u(C, L, N);
                return !1
            }
            : function(C, L, N) {
                var j, I, V, O = [ae, T];
                if (N) {
                    for (; C = C[v]; )
                        if ((1 === C.nodeType || w) && u(C, L, N))
                            return !0
                } else
                    for (; C = C[v]; )
                        if (1 === C.nodeType || w)
                            if (I = (V = C[F] || (C[F] = {}))[C.uniqueID] || (V[C.uniqueID] = {}),
                            h && h === C.nodeName.toLowerCase())
                                C = C[v] || C;
                            else {
                                if ((j = I[b]) && j[0] === ae && j[1] === T)
                                    return O[2] = j[2];
                                if ((I[b] = O)[2] = u(C, L, N))
                                    return !0
                            }
                return !1
            }
        }
        function Qt(u) {
            return 1 < u.length ? function(l, d, v) {
                for (var h = u.length; h--; )
                    if (!u[h](l, d, v))
                        return !1;
                return !0
            }
            : u[0]
        }
        function Nt(u, l, d, v, h) {
            for (var b, w = [], T = 0, C = u.length, L = null != l; T < C; T++)
                (b = u[T]) && (d && !d(b, v, h) || (w.push(b),
                L && l.push(T)));
            return w
        }
        function Jt(u, l, d, v, h, b) {
            return v && !v[F] && (v = Jt(v)),
            h && !h[F] && (h = Jt(h, b)),
            we(function(w, T, C, L) {
                var N, j, I, V = [], O = [], Z = T.length, ee = w || function(Ae, ne, Q) {
                    for (var Ce = 0, jt = ne.length; Ce < jt; Ce++)
                        $(Ae, ne[Ce], Q);
                    return Q
                }(l || "*", C.nodeType ? [C] : C, []), re = !u || !w && l ? ee : Nt(ee, V, u, C, L), _ = d ? h || (w ? u : Z || v) ? [] : T : re;
                if (d && d(re, _, C, L),
                v)
                    for (N = Nt(_, O),
                    v(N, [], C, L),
                    j = N.length; j--; )
                        (I = N[j]) && (_[O[j]] = !(re[O[j]] = I));
                if (w) {
                    if (h || u) {
                        if (h) {
                            for (N = [],
                            j = _.length; j--; )
                                (I = _[j]) && N.push(re[j] = I);
                            h(null, _ = [], N, L)
                        }
                        for (j = _.length; j--; )
                            (I = _[j]) && -1 < (N = h ? fe(w, I) : V[j]) && (w[N] = !(T[N] = I))
                    }
                } else
                    _ = Nt(_ === T ? _.splice(Z, _.length) : _),
                    h ? h(null, T, _, L) : X.apply(T, _)
            })
        }
        function Kt(u) {
            for (var l, d, v, h = u.length, b = r.relative[u[0].type], w = b || r.relative[" "], T = b ? 1 : 0, C = Dt(function(j) {
                return j === l
            }, w, !0), L = Dt(function(j) {
                return -1 < fe(l, j)
            }, w, !0), N = [function(j, I, V) {
                var O = !b && (V || I !== p) || ((l = I).nodeType ? C(j, I, V) : L(j, I, V));
                return l = null,
                O
            }
            ]; T < h; T++)
                if (d = r.relative[u[T].type])
                    N = [Dt(Qt(N), d)];
                else {
                    if ((d = r.filter[u[T].type].apply(null, u[T].matches))[F]) {
                        for (v = ++T; v < h && !r.relative[u[v].type]; v++)
                            ;
                        return Jt(1 < T && Qt(N), 1 < T && At(u.slice(0, T - 1).concat({
                            value: " " === u[T - 2].type ? "*" : ""
                        })).replace(pe, "$1"), d, T < v && Kt(u.slice(T, v)), v < h && Kt(u = u.slice(v)), v < h && At(u))
                    }
                    N.push(d)
                }
            return Qt(N)
        }
        return Gn.prototype = r.filters = r.pseudos,
        r.setFilters = new Gn,
        s = $.tokenize = function(u, l) {
            var d, v, h, b, w, T, C, L = ct[u + " "];
            if (L)
                return l ? 0 : L.slice(0);
            for (w = u,
            T = [],
            C = r.preFilter; w; ) {
                for (b in d && !(v = et.exec(w)) || (v && (w = w.slice(v[0].length) || w),
                T.push(h = [])),
                d = !1,
                (v = Et.exec(w)) && (d = v.shift(),
                h.push({
                    value: d,
                    type: v[0].replace(pe, " ")
                }),
                w = w.slice(d.length)),
                r.filter)
                    !(v = St[b].exec(w)) || C[b] && !(v = C[b](v)) || (d = v.shift(),
                    h.push({
                        value: d,
                        type: b,
                        matches: v
                    }),
                    w = w.slice(d.length));
                if (!d)
                    break
            }
            return l ? w.length : w ? $.error(u) : ct(u, T).slice(0)
        }
        ,
        c = $.compile = function(u, l) {
            var d, v, h, b, w, T, C = [], L = [], N = Ct[u + " "];
            if (!N) {
                for (l || (l = s(u)),
                d = l.length; d--; )
                    (N = Kt(l[d]))[F] ? C.push(N) : L.push(N);
                (N = Ct(u, (v = L,
                b = 0 < (h = C).length,
                w = 0 < v.length,
                T = function(j, I, V, O, Z) {
                    var ee, re, _, Ae = 0, ne = "0", Q = j && [], Ce = [], jt = p, Yn = j || w && r.find.TAG("*", Z), Qn = ae += null == jt ? 1 : Math.random() || .1, Vr = Yn.length;
                    for (Z && (p = I == y || I || Z); ne !== Vr && null != (ee = Yn[ne]); ne++) {
                        if (w && ee) {
                            for (re = 0,
                            I || ee.ownerDocument == y || (g(ee),
                            V = !k); _ = v[re++]; )
                                if (_(ee, I || y, V)) {
                                    O.push(ee);
                                    break
                                }
                            Z && (ae = Qn)
                        }
                        b && ((ee = !_ && ee) && Ae--,
                        j && Q.push(ee))
                    }
                    if (Ae += ne,
                    b && ne !== Ae) {
                        for (re = 0; _ = h[re++]; )
                            _(Q, Ce, I, V);
                        if (j) {
                            if (0 < Ae)
                                for (; ne--; )
                                    Q[ne] || Ce[ne] || (Ce[ne] = Ze.call(O));
                            Ce = Nt(Ce)
                        }
                        X.apply(O, Ce),
                        Z && !j && 0 < Ce.length && 1 < Ae + h.length && $.uniqueSort(O)
                    }
                    return Z && (ae = Qn,
                    p = jt),
                    Q
                }
                ,
                b ? we(T) : T))).selector = u
            }
            return N
        }
        ,
        f = $.select = function(u, l, d, v) {
            var h, b, w, T, C, L = "function" == typeof u && u, N = !v && s(u = L.selector || u);
            if (d = d || [],
            1 === N.length) {
                if (2 < (b = N[0] = N[0].slice(0)).length && "ID" === (w = b[0]).type && 9 === l.nodeType && k && r.relative[b[1].type]) {
                    if (!(l = (r.find.ID(w.matches[0].replace(je, Le), l) || [])[0]))
                        return d;
                    L && (l = l.parentNode),
                    u = u.slice(b.shift().value.length)
                }
                for (h = St.needsContext.test(u) ? 0 : b.length; h-- && !r.relative[T = (w = b[h]).type]; )
                    if ((C = r.find[T]) && (v = C(w.matches[0].replace(je, Le), Vt.test(b[0].type) && Yt(l.parentNode) || l))) {
                        if (b.splice(h, 1),
                        !(u = v.length && At(b)))
                            return X.apply(d, v),
                            d;
                        break
                    }
            }
            return (L || c(u, N))(v, l, !k, d, !l || Vt.test(u) && Yt(l.parentNode) || l),
            d
        }
        ,
        n.sortStable = F.split("").sort(Me).join("") === F,
        n.detectDuplicates = !!x,
        g(),
        n.sortDetached = Te(function(u) {
            return 1 & u.compareDocumentPosition(y.createElement("fieldset"))
        }),
        Te(function(u) {
            return u.innerHTML = "<a href='#'></a>",
            "#" === u.firstChild.getAttribute("href")
        }) || Gt("type|href|height|width", function(u, l, d) {
            if (!d)
                return u.getAttribute(l, "type" === l.toLowerCase() ? 1 : 2)
        }),
        n.attributes && Te(function(u) {
            return u.innerHTML = "<input/>",
            u.firstChild.setAttribute("value", ""),
            "" === u.firstChild.getAttribute("value")
        }) || Gt("value", function(u, l, d) {
            if (!d && "input" === u.nodeName.toLowerCase())
                return u.defaultValue
        }),
        Te(function(u) {
            return null == u.getAttribute("disabled")
        }) || Gt(ke, function(u, l, d) {
            var v;
            if (!d)
                return !0 === u[l] ? l.toLowerCase() : (v = u.getAttributeNode(l)) && v.specified ? v.value : null
        }),
        $
    }(A);
    i.find = He,
    i.expr = He.selectors,
    i.expr[":"] = i.expr.pseudos,
    i.uniqueSort = i.unique = He.uniqueSort,
    i.text = He.getText,
    i.isXMLDoc = He.isXML,
    i.contains = He.contains,
    i.escapeSelector = He.escape;
    var _e = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && i(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , nn = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , rn = i.expr.match.needsContext;
    function ge(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var on = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function qt(e, t, n) {
        return P(t) ? i.grep(e, function(r, o) {
            return !!t.call(r, o, r) !== n
        }) : t.nodeType ? i.grep(e, function(r) {
            return r === t !== n
        }) : "string" != typeof t ? i.grep(e, function(r) {
            return -1 < qe.call(t, r) !== n
        }) : i.filter(t, e, n)
    }
    i.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
            return 1 === o.nodeType
        }))
    }
    ,
    i.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(i(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (i.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                i.find(e, o[t], n);
            return 1 < r ? i.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(qt(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(qt(this, e || [], !0))
        },
        is: function(e) {
            return !!qt(this, "string" == typeof e && rn.test(e) ? i(e) : e || [], !1).length
        }
    });
    var an, Zn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || an,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Zn.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (i.merge(this, i.parseHTML(r[1], (t = t instanceof i ? t[0] : t) && t.nodeType ? t.ownerDocument || t : R, !0)),
                on.test(r[1]) && i.isPlainObject(t))
                    for (r in t)
                        P(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = R.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : P(e) ? void 0 !== n.ready ? n.ready(e) : e(i) : i.makeArray(e, this)
    }
    ).prototype = i.fn,
    an = i(R);
    var er = /^(?:parents|prev(?:Until|All))/
      , tr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function sn(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    i.fn.extend({
        has: function(e) {
            var t = i(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var r = 0; r < n; r++)
                    if (i.contains(this, t[r]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, a = [], s = "string" != typeof e && i(e);
            if (!rn.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && i.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(1 < a.length ? i.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? qe.call(i(e), this[0]) : qe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    i.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _e(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return _e(e, "parentNode", n)
        },
        next: function(e) {
            return sn(e, "nextSibling")
        },
        prev: function(e) {
            return sn(e, "previousSibling")
        },
        nextAll: function(e) {
            return _e(e, "nextSibling")
        },
        prevAll: function(e) {
            return _e(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return _e(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return _e(e, "previousSibling", n)
        },
        siblings: function(e) {
            return nn((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return nn(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && he(e.contentDocument) ? e.contentDocument : (ge(e, "template") && (e = e.content || e),
            i.merge([], e.childNodes))
        }
    }, function(e, t) {
        i.fn[e] = function(n, r) {
            var o = i.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = i.filter(r, o)),
            1 < this.length && (tr[e] || i.uniqueSort(o),
            er.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var Ee = /[^\x20\t\r\n\f]+/g;
    function ze(e) {
        return e
    }
    function gt(e) {
        throw e
    }
    function un(e, t, n, r) {
        var o;
        try {
            e && P(o = e.promise) ? o.call(e).done(t).fail(n) : e && P(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (a) {
            n.apply(void 0, [a])
        }
    }
    i.Callbacks = function(e) {
        var n;
        e = "string" == typeof e ? (n = {},
        i.each(e.match(Ee) || [], function(g, y) {
            n[y] = !0
        }),
        n) : i.extend({}, e);
        var r, o, a, s, c = [], f = [], p = -1, m = function() {
            for (s = s || e.once,
            a = r = !0; f.length; p = -1)
                for (o = f.shift(); ++p < c.length; )
                    !1 === c[p].apply(o[0], o[1]) && e.stopOnFalse && (p = c.length,
                    o = !1);
            e.memory || (o = !1),
            r = !1,
            s && (c = o ? [] : "")
        }, x = {
            add: function() {
                return c && (o && !r && (p = c.length - 1,
                f.push(o)),
                function g(y) {
                    i.each(y, function(E, k) {
                        P(k) ? e.unique && x.has(k) || c.push(k) : k && k.length && "string" !== $e(k) && g(k)
                    })
                }(arguments),
                o && !r && m()),
                this
            },
            remove: function() {
                return i.each(arguments, function(g, y) {
                    for (var E; -1 < (E = i.inArray(y, c, E)); )
                        c.splice(E, 1),
                        E <= p && p--
                }),
                this
            },
            has: function(g) {
                return g ? -1 < i.inArray(g, c) : 0 < c.length
            },
            empty: function() {
                return c && (c = []),
                this
            },
            disable: function() {
                return s = f = [],
                c = o = "",
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return s = f = [],
                o || r || (c = o = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(g, y) {
                return s || (y = [g, (y = y || []).slice ? y.slice() : y],
                f.push(y),
                r || m()),
                this
            },
            fire: function() {
                return x.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return x
    }
    ,
    i.extend({
        Deferred: function(e) {
            var t = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(a) {
                    return r.then(null, a)
                },
                pipe: function() {
                    var a = arguments;
                    return i.Deferred(function(s) {
                        i.each(t, function(c, f) {
                            var p = P(a[f[4]]) && a[f[4]];
                            o[f[1]](function() {
                                var m = p && p.apply(this, arguments);
                                m && P(m.promise) ? m.promise().progress(s.notify).done(s.resolve).fail(s.reject) : s[f[0] + "With"](this, p ? [m] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                then: function(a, s, c) {
                    var f = 0;
                    function p(m, x, g, y) {
                        return function() {
                            var E = this
                              , k = arguments
                              , S = function() {
                                var J, ue;
                                if (!(m < f)) {
                                    if ((J = g.apply(E, k)) === x.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    P(ue = J && ("object" == typeof J || "function" == typeof J) && J.then) ? y ? ue.call(J, p(f, x, ze, y), p(f, x, gt, y)) : (f++,
                                    ue.call(J, p(f, x, ze, y), p(f, x, gt, y), p(f, x, ze, x.notifyWith))) : (g !== ze && (E = void 0,
                                    k = [J]),
                                    (y || x.resolveWith)(E, k))
                                }
                            }
                              , z = y ? S : function() {
                                try {
                                    S()
                                } catch (J) {
                                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(J, z.stackTrace),
                                    f <= m + 1 && (g !== gt && (E = void 0,
                                    k = [J]),
                                    x.rejectWith(E, k))
                                }
                            }
                            ;
                            m ? z() : (i.Deferred.getStackHook && (z.stackTrace = i.Deferred.getStackHook()),
                            A.setTimeout(z))
                        }
                    }
                    return i.Deferred(function(m) {
                        t[0][3].add(p(0, m, P(c) ? c : ze, m.notifyWith)),
                        t[1][3].add(p(0, m, P(a) ? a : ze)),
                        t[2][3].add(p(0, m, P(s) ? s : gt))
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? i.extend(a, r) : r
                }
            }
              , o = {};
            return i.each(t, function(a, s) {
                var c = s[2]
                  , f = s[5];
                r[s[1]] = c.add,
                f && c.add(function() {
                    n = f
                }, t[3 - a][2].disable, t[3 - a][3].disable, t[0][2].lock, t[0][3].lock),
                c.add(s[3].fire),
                o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[s[0] + "With"] = c.fireWith
            }),
            r.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = te.call(arguments)
              , a = i.Deferred()
              , s = function(c) {
                return function(f) {
                    r[c] = this,
                    o[c] = 1 < arguments.length ? te.call(arguments) : f,
                    --t || a.resolveWith(r, o)
                }
            };
            if (t <= 1 && (un(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || P(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                un(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var nr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(e, t) {
        A.console && A.console.warn && e && nr.test(e.name) && A.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    i.readyException = function(e) {
        A.setTimeout(function() {
            throw e
        })
    }
    ;
    var Ht = i.Deferred();
    function mt() {
        R.removeEventListener("DOMContentLoaded", mt),
        A.removeEventListener("load", mt),
        i.ready()
    }
    i.fn.ready = function(e) {
        return Ht.then(e).catch(function(t) {
            i.readyException(t)
        }),
        this
    }
    ,
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --i.readyWait : i.isReady) || (i.isReady = !0) !== e && 0 < --i.readyWait || Ht.resolveWith(R, [i])
        }
    }),
    i.ready.then = Ht.then,
    "complete" === R.readyState || "loading" !== R.readyState && !R.documentElement.doScroll ? A.setTimeout(i.ready) : (R.addEventListener("DOMContentLoaded", mt),
    A.addEventListener("load", mt));
    var De = function(e, t, n, r, o, a, s) {
        var c = 0
          , f = e.length
          , p = null == n;
        if ("object" === $e(n))
            for (c in o = !0,
            n)
                De(e, t, c, n[c], !0, a, s);
        else if (void 0 !== r && (o = !0,
        P(r) || (s = !0),
        p && (s ? (t.call(e, r),
        t = null) : (p = t,
        t = function(m, x, g) {
            return p.call(i(m), g)
        }
        )),
        t))
            for (; c < f; c++)
                t(e[c], n, s ? r : r.call(e[c], c, t(e[c], n)));
        return o ? e : p ? t.call(e) : f ? t(e[0], n) : a
    }
      , rr = /^-ms-/
      , ir = /-([a-z])/g;
    function or(e, t) {
        return t.toUpperCase()
    }
    function Se(e) {
        return e.replace(rr, "ms-").replace(ir, or)
    }
    var nt = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function rt() {
        this.expando = i.expando + rt.uid++
    }
    rt.uid = 1,
    rt.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            nt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[Se(t)] = n;
            else
                for (r in t)
                    o[Se(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Se(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for ((n = (t = Array.isArray(t) ? t.map(Se) : (t = Se(t))in r ? [t] : t.match(Ee) || []).length); n--; )
                        delete r[t[n]];
                (void 0 === t || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var D = new rt
      , ie = new rt
      , ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , sr = /[A-Z]/g;
    function ln(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(sr, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : ar.test(o) ? JSON.parse(o) : o)
                } catch {}
                ie.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    i.extend({
        hasData: function(e) {
            return ie.hasData(e) || D.hasData(e)
        },
        data: function(e, t, n) {
            return ie.access(e, t, n)
        },
        removeData: function(e, t) {
            ie.remove(e, t)
        },
        _data: function(e, t, n) {
            return D.access(e, t, n)
        },
        _removeData: function(e, t) {
            D.remove(e, t)
        }
    }),
    i.fn.extend({
        data: function(e, t) {
            var n, r, o, a = this[0], s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (o = ie.get(a),
                1 === a.nodeType && !D.get(a, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Se(r.slice(5)),
                        ln(a, r, o[r]));
                    D.set(a, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ie.set(this, e)
            }) : De(this, function(c) {
                var f;
                if (a && void 0 === c)
                    return void 0 !== (f = ie.get(a, e)) || void 0 !== (f = ln(a, e)) ? f : void 0;
                this.each(function() {
                    ie.set(this, e, c)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ie.remove(this, e)
            })
        }
    }),
    i.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = D.get(e, t = (t || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = D.access(e, t, i.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            var n = i.queue(e, t = t || "fx")
              , r = n.length
              , o = n.shift()
              , a = i._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            o.call(e, function() {
                i.dequeue(e, t)
            }, a)),
            !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return D.get(e, n) || D.access(e, n, {
                empty: i.Callbacks("once memory").add(function() {
                    D.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    i.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? i.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, e, t);
                i._queueHooks(this, e),
                "fx" === e && "inprogress" !== r[0] && i.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                i.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = i.Deferred(), a = this, s = this.length, c = function() {
                --r || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = D.get(a[s], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(c));
            return c(),
            o.promise(t)
        }
    });
    var cn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , it = new RegExp("^(?:([+-])=|)(" + cn + ")([a-z%]*)$","i")
      , Ne = ["Top", "Right", "Bottom", "Left"]
      , Oe = R.documentElement
      , Ue = function(e) {
        return i.contains(e.ownerDocument, e)
    }
      , ur = {
        composed: !0
    };
    Oe.getRootNode && (Ue = function(e) {
        return i.contains(e.ownerDocument, e) || e.getRootNode(ur) === e.ownerDocument
    }
    );
    var yt = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && Ue(e) && "none" === i.css(e, "display")
    };
    function fn(e, t, n, r) {
        var o, a, s = 20, c = r ? function() {
            return r.cur()
        }
        : function() {
            return i.css(e, t, "")
        }
        , f = c(), p = n && n[3] || (i.cssNumber[t] ? "" : "px"), m = e.nodeType && (i.cssNumber[t] || "px" !== p && +f) && it.exec(i.css(e, t));
        if (m && m[3] !== p) {
            for (p = p || m[3],
            m = +(f /= 2) || 1; s--; )
                i.style(e, t, m + p),
                (1 - a) * (1 - (a = c() / f || .5)) <= 0 && (s = 0),
                m /= a;
            i.style(e, t, (m *= 2) + p),
            n = n || []
        }
        return n && (m = +m || +f || 0,
        o = n[1] ? m + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = p,
        r.start = m,
        r.end = o)),
        o
    }
    var dn = {};
    function Xe(e, t) {
        for (var n, r, o, a, s, c, f, p = [], m = 0, x = e.length; m < x; m++)
            (r = e[m]).style && (n = r.style.display,
            t ? ("none" === n && (p[m] = D.get(r, "display") || null,
            p[m] || (r.style.display = "")),
            "" === r.style.display && yt(r) && (p[m] = (f = s = a = void 0,
            s = (o = r).ownerDocument,
            (f = dn[c = o.nodeName]) || (a = s.body.appendChild(s.createElement(c)),
            f = i.css(a, "display"),
            a.parentNode.removeChild(a),
            "none" === f && (f = "block"),
            dn[c] = f)))) : "none" !== n && (p[m] = "none",
            D.set(r, "display", n)));
        for (m = 0; m < x; m++)
            null != p[m] && (e[m].style.display = p[m]);
        return e
    }
    i.fn.extend({
        show: function() {
            return Xe(this, !0)
        },
        hide: function() {
            return Xe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                yt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var Pe, vt, ot = /^(?:checkbox|radio)$/i, pn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, hn = /^$|^module$|\/(?:java|ecma)script/i;
    Pe = R.createDocumentFragment().appendChild(R.createElement("div")),
    (vt = R.createElement("input")).setAttribute("type", "radio"),
    vt.setAttribute("checked", "checked"),
    vt.setAttribute("name", "t"),
    Pe.appendChild(vt),
    B.checkClone = Pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Pe.innerHTML = "<textarea>x</textarea>",
    B.noCloneChecked = !!Pe.cloneNode(!0).lastChild.defaultValue,
    Pe.innerHTML = "<option></option>",
    B.option = !!Pe.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function oe(e, t) {
        var n;
        return n = typeof e.getElementsByTagName < "u" ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && ge(e, t) ? i.merge([e], n) : n
    }
    function Ot(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            D.set(e[n], "globalEval", !t || D.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
    B.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var lr = /<|&#?\w+;/;
    function gn(e, t, n, r, o) {
        for (var a, s, c, f, p, m, x = t.createDocumentFragment(), g = [], y = 0, E = e.length; y < E; y++)
            if ((a = e[y]) || 0 === a)
                if ("object" === $e(a))
                    i.merge(g, a.nodeType ? [a] : a);
                else if (lr.test(a)) {
                    for (s = s || x.appendChild(t.createElement("div")),
                    c = (pn.exec(a) || ["", ""])[1].toLowerCase(),
                    s.innerHTML = (f = me[c] || me._default)[1] + i.htmlPrefilter(a) + f[2],
                    m = f[0]; m--; )
                        s = s.lastChild;
                    i.merge(g, s.childNodes),
                    (s = x.firstChild).textContent = ""
                } else
                    g.push(t.createTextNode(a));
        for (x.textContent = "",
        y = 0; a = g[y++]; )
            if (r && -1 < i.inArray(a, r))
                o && o.push(a);
            else if (p = Ue(a),
            s = oe(x.appendChild(a), "script"),
            p && Ot(s),
            n)
                for (m = 0; a = s[m++]; )
                    hn.test(a.type || "") && n.push(a);
        return x
    }
    var mn = /^([^.]*)(?:\.(.+)|)/;
    function Ve() {
        return !0
    }
    function Ge() {
        return !1
    }
    function cr(e, t) {
        return e === function() {
            try {
                return R.activeElement
            } catch {}
        }() == ("focus" === t)
    }
    function Pt(e, t, n, r, o, a) {
        var s, c;
        if ("object" == typeof t) {
            for (c in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Pt(e, c, n, r, t[c], a);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = Ge;
        else if (!o)
            return e;
        return 1 === a && (s = o,
        (o = function(f) {
            return i().off(f),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = i.guid++)),
        e.each(function() {
            i.event.add(this, t, o, r, n)
        })
    }
    function xt(e, t, n) {
        n ? (D.set(e, t, !1),
        i.event.add(e, t, {
            namespace: !1,
            handler: function(r) {
                var o, a, s = D.get(this, t);
                if (1 & r.isTrigger && this[t]) {
                    if (s.length)
                        (i.event.special[t] || {}).delegateType && r.stopPropagation();
                    else if (s = te.call(arguments),
                    D.set(this, t, s),
                    o = n(this, t),
                    this[t](),
                    s !== (a = D.get(this, t)) || o ? D.set(this, t, !1) : a = {},
                    s !== a)
                        return r.stopImmediatePropagation(),
                        r.preventDefault(),
                        a && a.value
                } else
                    s.length && (D.set(this, t, {
                        value: i.event.trigger(i.extend(s[0], i.Event.prototype), s.slice(1), this)
                    }),
                    r.stopImmediatePropagation())
            }
        })) : void 0 === D.get(e, t) && i.event.add(e, t, Ve)
    }
    i.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var a, s, c, f, p, m, x, g, y, E, k, S = D.get(e);
            if (nt(e))
                for (n.handler && (n = (a = n).handler,
                o = a.selector),
                o && i.find.matchesSelector(Oe, o),
                n.guid || (n.guid = i.guid++),
                (f = S.events) || (f = S.events = Object.create(null)),
                (s = S.handle) || (s = S.handle = function(z) {
                    return typeof i < "u" && i.event.triggered !== z.type ? i.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                p = (t = (t || "").match(Ee) || [""]).length; p--; )
                    y = k = (c = mn.exec(t[p]) || [])[1],
                    E = (c[2] || "").split(".").sort(),
                    y && (x = i.event.special[y] || {},
                    x = i.event.special[y = (o ? x.delegateType : x.bindType) || y] || {},
                    m = i.extend({
                        type: y,
                        origType: k,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && i.expr.match.needsContext.test(o),
                        namespace: E.join(".")
                    }, a),
                    (g = f[y]) || ((g = f[y] = []).delegateCount = 0,
                    x.setup && !1 !== x.setup.call(e, r, E, s) || e.addEventListener && e.addEventListener(y, s)),
                    x.add && (x.add.call(e, m),
                    m.handler.guid || (m.handler.guid = n.guid)),
                    o ? g.splice(g.delegateCount++, 0, m) : g.push(m),
                    i.event.global[y] = !0)
        },
        remove: function(e, t, n, r, o) {
            var a, s, c, f, p, m, x, g, y, E, k, S = D.hasData(e) && D.get(e);
            if (S && (f = S.events)) {
                for (p = (t = (t || "").match(Ee) || [""]).length; p--; )
                    if (y = k = (c = mn.exec(t[p]) || [])[1],
                    E = (c[2] || "").split(".").sort(),
                    y) {
                        for (x = i.event.special[y] || {},
                        g = f[y = (r ? x.delegateType : x.bindType) || y] || [],
                        c = c[2] && new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = a = g.length; a--; )
                            m = g[a],
                            !o && k !== m.origType || n && n.guid !== m.guid || c && !c.test(m.namespace) || r && r !== m.selector && ("**" !== r || !m.selector) || (g.splice(a, 1),
                            m.selector && g.delegateCount--,
                            x.remove && x.remove.call(e, m));
                        s && !g.length && (x.teardown && !1 !== x.teardown.call(e, E, S.handle) || i.removeEvent(e, y, S.handle),
                        delete f[y])
                    } else
                        for (y in f)
                            i.event.remove(e, y + t[p], n, r, !0);
                i.isEmptyObject(f) && D.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, a, s, c = new Array(arguments.length), f = i.event.fix(e), p = (D.get(this, "events") || Object.create(null))[f.type] || [], m = i.event.special[f.type] || {};
            for (c[0] = f,
            t = 1; t < arguments.length; t++)
                c[t] = arguments[t];
            if (f.delegateTarget = this,
            !m.preDispatch || !1 !== m.preDispatch.call(this, f)) {
                for (s = i.event.handlers.call(this, f, p),
                t = 0; (o = s[t++]) && !f.isPropagationStopped(); )
                    for (f.currentTarget = o.elem,
                    n = 0; (a = o.handlers[n++]) && !f.isImmediatePropagationStopped(); )
                        f.rnamespace && !1 !== a.namespace && !f.rnamespace.test(a.namespace) || (f.handleObj = a,
                        f.data = a.data,
                        void 0 !== (r = ((i.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, c)) && !1 === (f.result = r) && (f.preventDefault(),
                        f.stopPropagation()));
                return m.postDispatch && m.postDispatch.call(this, f),
                f.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, a, s, c = [], f = t.delegateCount, p = e.target;
            if (f && p.nodeType && !("click" === e.type && 1 <= e.button))
                for (; p !== this; p = p.parentNode || this)
                    if (1 === p.nodeType && ("click" !== e.type || !0 !== p.disabled)) {
                        for (a = [],
                        s = {},
                        n = 0; n < f; n++)
                            void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < i(o, this).index(p) : i.find(o, this, null, [p]).length),
                            s[o] && a.push(r);
                        a.length && c.push({
                            elem: p,
                            handlers: a
                        })
                    }
            return p = this,
            f < t.length && c.push({
                elem: p,
                handlers: t.slice(f)
            }),
            c
        },
        addProp: function(e, t) {
            Object.defineProperty(i.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: P(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(n) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    })
                }
            })
        },
        fix: function(e) {
            return e[i.expando] ? e : new i.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return ot.test(t.type) && t.click && ge(t, "input") && xt(t, "click", Ve),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return ot.test(t.type) && t.click && ge(t, "input") && xt(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return ot.test(t.type) && t.click && ge(t, "input") && D.get(t, "click") || ge(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    i.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    i.Event = function(e, t) {
        if (!(this instanceof i.Event))
            return new i.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ve : Ge,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && i.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[i.expando] = !0
    }
    ,
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: Ge,
        isPropagationStopped: Ge,
        isImmediatePropagationStopped: Ge,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ve,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ve,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ve,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, i.event.addProp),
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        i.event.special[e] = {
            setup: function() {
                return xt(this, e, cr),
                !1
            },
            trigger: function() {
                return xt(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var r, o = n.relatedTarget, a = n.handleObj;
                return o && (o === this || i.contains(this, o)) || (n.type = a.origType,
                r = a.handler.apply(this, arguments),
                n.type = t),
                r
            }
        }
    }),
    i.fn.extend({
        on: function(e, t, n, r) {
            return Pt(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Pt(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ge),
            this.each(function() {
                i.event.remove(this, e, n, t)
            })
        }
    });
    var fr = /<script|<style|<link/i
      , dr = /checked\s*(?:[^=]|=\s*.checked.)/i
      , pr = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function yn(e, t) {
        return ge(e, "table") && ge(11 !== t.nodeType ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e
    }
    function hr(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function gr(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function vn(e, t) {
        var n, r, o, a, s, c;
        if (1 === t.nodeType) {
            if (D.hasData(e) && (c = D.get(e).events))
                for (o in D.remove(t, "handle events"),
                c)
                    for (n = 0,
                    r = c[o].length; n < r; n++)
                        i.event.add(t, o, c[o][n]);
            ie.hasData(e) && (a = ie.access(e),
            s = i.extend({}, a),
            ie.set(t, s))
        }
    }
    function Ye(e, t, n, r) {
        t = dt(t);
        var o, a, s, c, f, p, m = 0, x = e.length, g = x - 1, y = t[0], E = P(y);
        if (E || 1 < x && "string" == typeof y && !B.checkClone && dr.test(y))
            return e.each(function(k) {
                var S = e.eq(k);
                E && (t[0] = y.call(this, k, S.html())),
                Ye(S, t, n, r)
            });
        if (x && (a = (o = gn(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || r)) {
            for (c = (s = i.map(oe(o, "script"), hr)).length; m < x; m++)
                f = o,
                m !== g && (f = i.clone(f, !0, !0),
                c && i.merge(s, oe(f, "script"))),
                n.call(e[m], f, m);
            if (c)
                for (p = s[s.length - 1].ownerDocument,
                i.map(s, gr),
                m = 0; m < c; m++)
                    hn.test((f = s[m]).type || "") && !D.access(f, "globalEval") && i.contains(p, f) && (f.src && "module" !== (f.type || "").toLowerCase() ? i._evalUrl && !f.noModule && i._evalUrl(f.src, {
                        nonce: f.nonce || f.getAttribute("nonce")
                    }, p) : en(f.textContent.replace(pr, ""), f, p))
        }
        return e
    }
    function xn(e, t, n) {
        for (var r, o = t ? i.filter(t, e) : e, a = 0; null != (r = o[a]); a++)
            n || 1 !== r.nodeType || i.cleanData(oe(r)),
            r.parentNode && (n && Ue(r) && Ot(oe(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    i.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, a, s, c, f, p, m = e.cloneNode(!0), x = Ue(e);
            if (!(B.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || i.isXMLDoc(e)))
                for (s = oe(m),
                r = 0,
                o = (a = oe(e)).length; r < o; r++)
                    c = a[r],
                    "input" === (p = (f = s[r]).nodeName.toLowerCase()) && ot.test(c.type) ? f.checked = c.checked : "input" !== p && "textarea" !== p || (f.defaultValue = c.defaultValue);
            if (t)
                if (n)
                    for (a = a || oe(e),
                    s = s || oe(m),
                    r = 0,
                    o = a.length; r < o; r++)
                        vn(a[r], s[r]);
                else
                    vn(e, m);
            return 0 < (s = oe(m, "script")).length && Ot(s, !x && oe(e, "script")),
            m
        },
        cleanData: function(e) {
            for (var t, n, r, o = i.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (nt(n)) {
                    if (t = n[D.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
                        n[D.expando] = void 0
                    }
                    n[ie.expando] && (n[ie.expando] = void 0)
                }
        }
    }),
    i.fn.extend({
        detach: function(e) {
            return xn(this, e, !0)
        },
        remove: function(e) {
            return xn(this, e)
        },
        text: function(e) {
            return De(this, function(t) {
                return void 0 === t ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ye(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || yn(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ye(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = yn(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ye(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ye(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (i.cleanData(oe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = t ?? e,
            this.map(function() {
                return i.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(t) {
                var n = this[0] || {}
                  , r = 0
                  , o = this.length;
                if (void 0 === t && 1 === n.nodeType)
                    return n.innerHTML;
                if ("string" == typeof t && !fr.test(t) && !me[(pn.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = i.htmlPrefilter(t);
                    try {
                        for (; r < o; r++)
                            1 === (n = this[r] || {}).nodeType && (i.cleanData(oe(n, !1)),
                            n.innerHTML = t);
                        n = 0
                    } catch {}
                }
                n && this.empty().append(t)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ye(this, arguments, function(t) {
                var n = this.parentNode;
                i.inArray(this, e) < 0 && (i.cleanData(oe(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        i.fn[e] = function(n) {
            for (var r, o = [], a = i(n), s = a.length - 1, c = 0; c <= s; c++)
                r = c === s ? this : this.clone(!0),
                i(a[c])[t](r),
                tt.apply(o, r.get());
            return this.pushStack(o)
        }
    });
    var Rt = new RegExp("^(" + cn + ")(?!px)[a-z%]+$","i")
      , bt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = A),
        t.getComputedStyle(e)
    }
      , bn = function(e, t, n) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.call(e),
        t)
            e.style[o] = a[o];
        return r
    }
      , mr = new RegExp(Ne.join("|"),"i");
    function at(e, t, n) {
        var r, o, a, s, c = e.style;
        return (n = n || bt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || Ue(e) || (s = i.style(e, t)),
        !B.pixelBoxStyles() && Rt.test(s) && mr.test(t) && (r = c.width,
        o = c.minWidth,
        a = c.maxWidth,
        c.minWidth = c.maxWidth = c.width = s,
        s = n.width,
        c.width = r,
        c.minWidth = o,
        c.maxWidth = a)),
        void 0 !== s ? s + "" : s
    }
    function wn(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (p) {
                f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                Oe.appendChild(f).appendChild(p);
                var m = A.getComputedStyle(p);
                n = "1%" !== m.top,
                c = 12 === t(m.marginLeft),
                p.style.right = "60%",
                a = 36 === t(m.right),
                r = 36 === t(m.width),
                p.style.position = "absolute",
                o = 12 === t(p.offsetWidth / 3),
                Oe.removeChild(f),
                p = null
            }
        }
        function t(m) {
            return Math.round(parseFloat(m))
        }
        var n, r, o, a, s, c, f = R.createElement("div"), p = R.createElement("div");
        p.style && (p.style.backgroundClip = "content-box",
        p.cloneNode(!0).style.backgroundClip = "",
        B.clearCloneStyle = "content-box" === p.style.backgroundClip,
        i.extend(B, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                a
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                c
            },
            scrollboxSize: function() {
                return e(),
                o
            },
            reliableTrDimensions: function() {
                var m, x, g, y;
                return null == s && (m = R.createElement("table"),
                x = R.createElement("tr"),
                g = R.createElement("div"),
                m.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                x.style.cssText = "border:1px solid",
                x.style.height = "1px",
                g.style.height = "9px",
                g.style.display = "block",
                Oe.appendChild(m).appendChild(x).appendChild(g),
                y = A.getComputedStyle(x),
                s = parseInt(y.height, 10) + parseInt(y.borderTopWidth, 10) + parseInt(y.borderBottomWidth, 10) === x.offsetHeight,
                Oe.removeChild(m)),
                s
            }
        }))
    }();
    var Tn = ["Webkit", "Moz", "ms"]
      , Cn = R.createElement("div").style
      , En = {};
    function It(e) {
        return i.cssProps[e] || En[e] || (e in Cn ? e : En[e] = function(n) {
            for (var r = n[0].toUpperCase() + n.slice(1), o = Tn.length; o--; )
                if ((n = Tn[o] + r)in Cn)
                    return n
        }(e) || e)
    }
    var yr = /^(none|table(?!-c[ea]).+)/
      , Sn = /^--/
      , vr = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , kn = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function An(e, t, n) {
        var r = it.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Mt(e, t, n, r, o, a) {
        var s = "width" === t ? 1 : 0
          , c = 0
          , f = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (f += i.css(e, n + Ne[s], !0, o)),
            r ? ("content" === n && (f -= i.css(e, "padding" + Ne[s], !0, o)),
            "margin" !== n && (f -= i.css(e, "border" + Ne[s] + "Width", !0, o))) : (f += i.css(e, "padding" + Ne[s], !0, o),
            "padding" !== n ? f += i.css(e, "border" + Ne[s] + "Width", !0, o) : c += i.css(e, "border" + Ne[s] + "Width", !0, o));
        return !r && 0 <= a && (f += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - f - c - .5)) || 0),
        f
    }
    function Dn(e, t, n) {
        var r = bt(e)
          , o = (!B.boxSizingReliable() || n) && "border-box" === i.css(e, "boxSizing", !1, r)
          , a = o
          , s = at(e, t, r)
          , c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Rt.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!B.boxSizingReliable() && o || !B.reliableTrDimensions() && ge(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === i.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === i.css(e, "boxSizing", !1, r),
        (a = c in e) && (s = e[c])),
        (s = parseFloat(s) || 0) + Mt(e, t, n || (o ? "border" : "content"), a, r, s) + "px"
    }
    function xe(e, t, n, r, o) {
        return new xe.prototype.init(e,t,n,r,o)
    }
    i.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = at(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, c = Se(t), f = Sn.test(t), p = e.style;
                if (f || (t = It(c)),
                s = i.cssHooks[t] || i.cssHooks[c],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, r)) ? o : p[t];
                "string" == (a = typeof n) && (o = it.exec(n)) && o[1] && (n = fn(e, t, o),
                a = "number"),
                null != n && n == n && ("number" !== a || f || (n += o && o[3] || (i.cssNumber[c] ? "" : "px")),
                B.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (p[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (f ? p.setProperty(t, n) : p[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, a, s, c = Se(t);
            return Sn.test(t) || (t = It(c)),
            (s = i.cssHooks[t] || i.cssHooks[c]) && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = at(e, t, r)),
            "normal" === o && t in kn && (o = kn[t]),
            "" === n || n ? (a = parseFloat(o),
            !0 === n || isFinite(a) ? a || 0 : o) : o
        }
    }),
    i.each(["height", "width"], function(e, t) {
        i.cssHooks[t] = {
            get: function(n, r, o) {
                if (r)
                    return !yr.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? Dn(n, t, o) : bn(n, vr, function() {
                        return Dn(n, t, o)
                    })
            },
            set: function(n, r, o) {
                var a, s = bt(n), c = !B.scrollboxSize() && "absolute" === s.position, f = (c || o) && "border-box" === i.css(n, "boxSizing", !1, s), p = o ? Mt(n, t, o, f, s) : 0;
                return f && c && (p -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Mt(n, t, "border", !1, s) - .5)),
                p && (a = it.exec(r)) && "px" !== (a[3] || "px") && (n.style[t] = r,
                r = i.css(n, t)),
                An(0, r, p)
            }
        }
    }),
    i.cssHooks.marginLeft = wn(B.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(at(e, "marginLeft")) || e.getBoundingClientRect().left - bn(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        i.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + Ne[r] + t] = a[r] || a[r - 2] || a[0];
                return o
            }
        },
        "margin" !== e && (i.cssHooks[e + t].set = An)
    }),
    i.fn.extend({
        css: function(e, t) {
            return De(this, function(n, r, o) {
                var a, s, c = {}, f = 0;
                if (Array.isArray(r)) {
                    for (a = bt(n),
                    s = r.length; f < s; f++)
                        c[r[f]] = i.css(n, r[f], !1, a);
                    return c
                }
                return void 0 !== o ? i.style(n, r, o) : i.css(n, r)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((i.Tween = xe).prototype = {
        constructor: xe,
        init: function(e, t, n, r, o, a) {
            this.elem = e,
            this.prop = n,
            this.easing = o || i.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (i.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = xe.propHooks[this.prop];
            return e && e.get ? e.get(this) : xe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = xe.propHooks[this.prop];
            return this.pos = t = this.options.duration ? i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : xe.propHooks._default.set(this),
            this
        }
    }).init.prototype = xe.prototype,
    (xe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                i.fx.step[e.prop] ? i.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !i.cssHooks[e.prop] && null == e.elem.style[It(e.prop)] ? e.elem[e.prop] = e.now : i.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = xe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    i.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    i.fx = xe.prototype.init,
    i.fx.step = {};
    var Qe, wt, Je, Nn, xr = /^(?:toggle|show|hide)$/, br = /queueHooks$/;
    function Wt() {
        wt && (!1 === R.hidden && A.requestAnimationFrame ? A.requestAnimationFrame(Wt) : A.setTimeout(Wt, i.fx.interval),
        i.fx.tick())
    }
    function jn() {
        return A.setTimeout(function() {
            Qe = void 0
        }),
        Qe = Date.now()
    }
    function Tt(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = Ne[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function Ln(e, t, n) {
        for (var r, o = (be.tweeners[t] || []).concat(be.tweeners["*"]), a = 0, s = o.length; a < s; a++)
            if (r = o[a].call(n, t, e))
                return r
    }
    function be(e, t, n) {
        var r, o, a = 0, s = be.prefilters.length, c = i.Deferred().always(function() {
            delete f.elem
        }), f = function() {
            if (o)
                return !1;
            for (var x = Qe || jn(), g = Math.max(0, p.startTime + p.duration - x), y = 1 - (g / p.duration || 0), E = 0, k = p.tweens.length; E < k; E++)
                p.tweens[E].run(y);
            return c.notifyWith(e, [p, y, g]),
            y < 1 && k ? g : (k || c.notifyWith(e, [p, 1, 0]),
            c.resolveWith(e, [p]),
            !1)
        }, p = c.promise({
            elem: e,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || jn(),
            duration: n.duration,
            tweens: [],
            createTween: function(x, g) {
                var y = i.Tween(e, p.opts, x, g, p.opts.specialEasing[x] || p.opts.easing);
                return p.tweens.push(y),
                y
            },
            stop: function(x) {
                var g = 0
                  , y = x ? p.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; g < y; g++)
                    p.tweens[g].run(1);
                return x ? (c.notifyWith(e, [p, 1, 0]),
                c.resolveWith(e, [p, x])) : c.rejectWith(e, [p, x]),
                this
            }
        }), m = p.props;
        for (function(x, g) {
            var y, E, k, S, z;
            for (y in x)
                if (k = g[E = Se(y)],
                S = x[y],
                Array.isArray(S) && (k = S[1],
                S = x[y] = S[0]),
                y !== E && (x[E] = S,
                delete x[y]),
                (z = i.cssHooks[E]) && "expand"in z)
                    for (y in S = z.expand(S),
                    delete x[E],
                    S)
                        y in x || (x[y] = S[y],
                        g[y] = k);
                else
                    g[E] = k
        }(m, p.opts.specialEasing); a < s; a++)
            if (r = be.prefilters[a].call(p, e, m, p.opts))
                return P(r.stop) && (i._queueHooks(p.elem, p.opts.queue).stop = r.stop.bind(r)),
                r;
        return i.map(m, Ln, p),
        P(p.opts.start) && p.opts.start.call(e, p),
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
        i.fx.timer(i.extend(f, {
            elem: e,
            anim: p,
            queue: p.opts.queue
        })),
        p
    }
    i.Animation = i.extend(be, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return fn(n.elem, e, it.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            P(e) ? (t = e,
            e = ["*"]) : e = e.match(Ee);
            for (var n, r = 0, o = e.length; r < o; r++)
                (be.tweeners[n = e[r]] = be.tweeners[n] || []).unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, a, s, c, f, p, m, x = "width"in t || "height"in t, g = this, y = {}, E = e.style, k = e.nodeType && yt(e), S = D.get(e, "fxshow");
            for (r in n.queue || (null == (s = i._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            c = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || c()
            }
            ),
            s.unqueued++,
            g.always(function() {
                g.always(function() {
                    s.unqueued--,
                    i.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (xr.test(o = t[r])) {
                    if (delete t[r],
                    a = a || "toggle" === o,
                    o === (k ? "hide" : "show")) {
                        if ("show" !== o || !S || void 0 === S[r])
                            continue;
                        k = !0
                    }
                    y[r] = S && S[r] || i.style(e, r)
                }
            if ((f = !i.isEmptyObject(t)) || !i.isEmptyObject(y))
                for (r in x && 1 === e.nodeType && (n.overflow = [E.overflow, E.overflowX, E.overflowY],
                null == (p = S && S.display) && (p = D.get(e, "display")),
                "none" === (m = i.css(e, "display")) && (p ? m = p : (Xe([e], !0),
                p = e.style.display || p,
                m = i.css(e, "display"),
                Xe([e]))),
                ("inline" === m || "inline-block" === m && null != p) && "none" === i.css(e, "float") && (f || (g.done(function() {
                    E.display = p
                }),
                null == p && (p = "none" === (m = E.display) ? "" : m)),
                E.display = "inline-block")),
                n.overflow && (E.overflow = "hidden",
                g.always(function() {
                    E.overflow = n.overflow[0],
                    E.overflowX = n.overflow[1],
                    E.overflowY = n.overflow[2]
                })),
                f = !1,
                y)
                    f || (S ? "hidden"in S && (k = S.hidden) : S = D.access(e, "fxshow", {
                        display: p
                    }),
                    a && (S.hidden = !k),
                    k && Xe([e], !0),
                    g.done(function() {
                        for (r in k || Xe([e]),
                        D.remove(e, "fxshow"),
                        y)
                            i.style(e, r, y[r])
                    })),
                    f = Ln(k ? S[r] : 0, r, g),
                    r in S || (S[r] = f.start,
                    k && (f.end = f.start,
                    f.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? be.prefilters.unshift(e) : be.prefilters.push(e)
        }
    }),
    i.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? i.extend({}, e) : {
            complete: n || !n && t || P(e) && e,
            duration: e,
            easing: n && t || t && !P(t) && t
        };
        return i.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in i.fx.speeds ? i.fx.speeds[r.duration] : i.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            P(r.old) && r.old.call(this),
            r.queue && i.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    i.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(yt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = i.isEmptyObject(e)
              , a = i.speed(t, n, r)
              , s = function() {
                var c = be(this, i.extend({}, e), a);
                (o || D.get(this, "finish")) && c.stop(!0)
            };
            return s.finish = s,
            o || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(o) {
                var a = o.stop;
                delete o.stop,
                a(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var o = !0
                  , a = null != e && e + "queueHooks"
                  , s = i.timers
                  , c = D.get(this);
                if (a)
                    c[a] && c[a].stop && r(c[a]);
                else
                    for (a in c)
                        c[a] && c[a].stop && br.test(a) && r(c[a]);
                for (a = s.length; a--; )
                    s[a].elem !== this || null != e && s[a].queue !== e || (s[a].anim.stop(n),
                    o = !1,
                    s.splice(a, 1));
                !o && n || i.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = D.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], a = i.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                i.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = a.length; t--; )
                    a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                    a.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    i.each(["toggle", "show", "hide"], function(e, t) {
        var n = i.fn[t];
        i.fn[t] = function(r, o, a) {
            return null == r || "boolean" == typeof r ? n.apply(this, arguments) : this.animate(Tt(t, !0), r, o, a)
        }
    }),
    i.each({
        slideDown: Tt("show"),
        slideUp: Tt("hide"),
        slideToggle: Tt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        i.fn[e] = function(n, r, o) {
            return this.animate(t, n, r, o)
        }
    }),
    i.timers = [],
    i.fx.tick = function() {
        var e, t = 0, n = i.timers;
        for (Qe = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || i.fx.stop(),
        Qe = void 0
    }
    ,
    i.fx.timer = function(e) {
        i.timers.push(e),
        i.fx.start()
    }
    ,
    i.fx.interval = 13,
    i.fx.start = function() {
        wt || (wt = !0,
        Wt())
    }
    ,
    i.fx.stop = function() {
        wt = null
    }
    ,
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    i.fn.delay = function(e, t) {
        return e = i.fx && i.fx.speeds[e] || e,
        this.queue(t = t || "fx", function(n, r) {
            var o = A.setTimeout(n, e);
            r.stop = function() {
                A.clearTimeout(o)
            }
        })
    }
    ,
    Je = R.createElement("input"),
    Nn = R.createElement("select").appendChild(R.createElement("option")),
    Je.type = "checkbox",
    B.checkOn = "" !== Je.value,
    B.optSelected = Nn.selected,
    (Je = R.createElement("input")).value = "t",
    Je.type = "radio",
    B.radioValue = "t" === Je.value;
    var qn, st = i.expr.attrHandle;
    i.fn.extend({
        attr: function(e, t) {
            return De(this, i.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                i.removeAttr(this, e)
            })
        }
    }),
    i.extend({
        attr: function(e, t, n) {
            var r, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return typeof e.getAttribute > "u" ? i.prop(e, t, n) : (1 === a && i.isXMLDoc(e) || (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? qn : void 0)),
                void 0 !== n ? null === n ? void i.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = i.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!B.radioValue && "radio" === t && ge(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(Ee);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    qn = {
        set: function(e, t, n) {
            return !1 === t ? i.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = st[t] || i.find.attr;
        st[t] = function(r, o, a) {
            var s, c, f = o.toLowerCase();
            return a || (c = st[f],
            st[f] = s,
            s = null != n(r, o, a) ? f : null,
            st[f] = c),
            s
        }
    });
    var wr = /^(?:input|select|textarea|button)$/i
      , Tr = /^(?:a|area)$/i;
    function Re(e) {
        return (e.match(Ee) || []).join(" ")
    }
    function Ie(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ee) || []
    }
    i.fn.extend({
        prop: function(e, t) {
            return De(this, i.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[i.propFix[e] || e]
            })
        }
    }),
    i.extend({
        prop: function(e, t, n) {
            var r, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && i.isXMLDoc(e) || (o = i.propHooks[t = i.propFix[t] || t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = i.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wr.test(e.nodeName) || Tr.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    B.optSelected || (i.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }),
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    }),
    i.fn.extend({
        addClass: function(e) {
            var t, n, r, o, a, s, c, f = 0;
            if (P(e))
                return this.each(function(p) {
                    i(this).addClass(e.call(this, p, Ie(this)))
                });
            if ((t = Bt(e)).length)
                for (; n = this[f++]; )
                    if (o = Ie(n),
                    r = 1 === n.nodeType && " " + Re(o) + " ") {
                        for (s = 0; a = t[s++]; )
                            r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        o !== (c = Re(r)) && n.setAttribute("class", c)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, a, s, c, f = 0;
            if (P(e))
                return this.each(function(p) {
                    i(this).removeClass(e.call(this, p, Ie(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = Bt(e)).length)
                for (; n = this[f++]; )
                    if (o = Ie(n),
                    r = 1 === n.nodeType && " " + Re(o) + " ") {
                        for (s = 0; a = t[s++]; )
                            for (; -1 < r.indexOf(" " + a + " "); )
                                r = r.replace(" " + a + " ", " ");
                        o !== (c = Re(r)) && n.setAttribute("class", c)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : P(e) ? this.each(function(o) {
                i(this).toggleClass(e.call(this, o, Ie(this), t), t)
            }) : this.each(function() {
                var o, a, s, c;
                if (r)
                    for (a = 0,
                    s = i(this),
                    c = Bt(e); o = c[a++]; )
                        s.hasClass(o) ? s.removeClass(o) : s.addClass(o);
                else
                    void 0 !== e && "boolean" !== n || ((o = Ie(this)) && D.set(this, "__className__", o),
                    this.setAttribute && this.setAttribute("class", o || !1 === e ? "" : D.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + Re(Ie(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Cr = /\r/g;
    i.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = P(e),
            this.each(function(a) {
                var s;
                1 === this.nodeType && (null == (s = r ? e.call(this, a, i(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = i.map(s, function(c) {
                    return null == c ? "" : c + ""
                })),
                (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Cr, "") : n ?? "" : void 0
        }
    }),
    i.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return i.find.attr(e, "value") ?? Re(i.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, c = s ? null : [], f = s ? a + 1 : o.length;
                    for (r = a < 0 ? f : s ? a : 0; r < f; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !ge(n.parentNode, "optgroup"))) {
                            if (t = i(n).val(),
                            s)
                                return t;
                            c.push(t)
                        }
                    return c
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, a = i.makeArray(t), s = o.length; s--; )
                        ((r = o[s]).selected = -1 < i.inArray(i.valHooks.option.get(r), a)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < i.inArray(i(e).val(), t)
            }
        },
        B.checkOn || (i.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    B.focusin = "onfocusin"in A;
    var Hn = /^(?:focusinfocus|focusoutblur)$/
      , On = function(e) {
        e.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function(e, t, n, r) {
            var o, a, s, c, f, p, m, x, g = [n || R], y = ht.call(e, "type") ? e.type : e, E = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = x = s = n = n || R,
            3 !== n.nodeType && 8 !== n.nodeType && !Hn.test(y + i.event.triggered) && (-1 < y.indexOf(".") && (y = (E = y.split(".")).shift(),
            E.sort()),
            f = y.indexOf(":") < 0 && "on" + y,
            (e = e[i.expando] ? e : new i.Event(y,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = E.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : i.makeArray(t, [e]),
            m = i.event.special[y] || {},
            r || !m.trigger || !1 !== m.trigger.apply(n, t))) {
                if (!r && !m.noBubble && !Fe(n)) {
                    for (Hn.test((c = m.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode)
                        g.push(a),
                        s = a;
                    s === (n.ownerDocument || R) && g.push(s.defaultView || s.parentWindow || A)
                }
                for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
                    x = a,
                    e.type = 1 < o ? c : m.bindType || y,
                    (p = (D.get(a, "events") || Object.create(null))[e.type] && D.get(a, "handle")) && p.apply(a, t),
                    (p = f && a[f]) && p.apply && nt(a) && (e.result = p.apply(a, t),
                    !1 === e.result && e.preventDefault());
                return e.type = y,
                r || e.isDefaultPrevented() || m._default && !1 !== m._default.apply(g.pop(), t) || !nt(n) || f && P(n[y]) && !Fe(n) && ((s = n[f]) && (n[f] = null),
                i.event.triggered = y,
                e.isPropagationStopped() && x.addEventListener(y, On),
                n[y](),
                e.isPropagationStopped() && x.removeEventListener(y, On),
                i.event.triggered = void 0,
                s && (n[f] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = i.extend(new i.Event, n, {
                type: e,
                isSimulated: !0
            });
            i.event.trigger(r, null, t)
        }
    }),
    i.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                i.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return i.event.trigger(e, t, n, !0)
        }
    }),
    B.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(r) {
            i.event.simulate(t, r.target, i.event.fix(r))
        };
        i.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , o = D.access(r, t);
                o || r.addEventListener(e, n, !0),
                D.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , o = D.access(r, t) - 1;
                o ? D.access(r, t, o) : (r.removeEventListener(e, n, !0),
                D.remove(r, t))
            }
        }
    });
    var ut = A.location
      , Pn = {
        guid: Date.now()
    }
      , Ft = /\?/;
    i.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new A.DOMParser).parseFromString(e, "text/xml")
        } catch {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
            return r.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Er = /\[\]$/
      , Rn = /\r?\n/g
      , Sr = /^(?:submit|button|image|reset|file)$/i
      , kr = /^(?:input|select|textarea|keygen)/i;
    function $t(e, t, n, r) {
        var o;
        if (Array.isArray(t))
            i.each(t, function(a, s) {
                n || Er.test(e) ? r(e, s) : $t(e + "[" + ("object" == typeof s && null != s ? a : "") + "]", s, n, r)
            });
        else if (n || "object" !== $e(t))
            r(e, t);
        else
            for (o in t)
                $t(e + "[" + o + "]", t[o], n, r)
    }
    i.param = function(e, t) {
        var n, r = [], o = function(a, s) {
            var c = P(s) ? s() : s;
            r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c ?? "")
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !i.isPlainObject(e))
            i.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                $t(n, e[n], t, o);
        return r.join("&")
    }
    ,
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = i.prop(this, "elements");
                return e ? i.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !i(this).is(":disabled") && kr.test(this.nodeName) && !Sr.test(e) && (this.checked || !ot.test(e))
            }).map(function(e, t) {
                var n = i(this).val();
                return null == n ? null : Array.isArray(n) ? i.map(n, function(r) {
                    return {
                        name: t.name,
                        value: r.replace(Rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Rn, "\r\n")
                }
            }).get()
        }
    });
    var Ar = /%20/g
      , Dr = /#.*$/
      , Nr = /([?&])_=[^&]*/
      , jr = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lr = /^(?:GET|HEAD)$/
      , qr = /^\/\//
      , In = {}
      , _t = {}
      , Mn = "*/".concat("*")
      , zt = R.createElement("a");
    function Wn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, a = t.toLowerCase().match(Ee) || [];
            if (P(n))
                for (; r = a[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Bn(e, t, n, r) {
        var o = {}
          , a = e === _t;
        function s(c) {
            var f;
            return o[c] = !0,
            i.each(e[c] || [], function(p, m) {
                var x = m(t, n, r);
                return "string" != typeof x || a || o[x] ? a ? !(f = x) : void 0 : (t.dataTypes.unshift(x),
                s(x),
                !1)
            }),
            f
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }
    function Ut(e, t) {
        var n, r, o = i.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && i.extend(!0, e, r),
        e
    }
    zt.href = ut.href,
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, i.ajaxSettings), t) : Ut(i.ajaxSettings, e)
        },
        ajaxPrefilter: Wn(In),
        ajaxTransport: Wn(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var n, r, o, a, s, c, f, p, m, x, g = i.ajaxSetup({}, t = t || {}), y = g.context || g, E = g.context && (y.nodeType || y.jquery) ? i(y) : i.event, k = i.Deferred(), S = i.Callbacks("once memory"), z = g.statusCode || {}, J = {}, ue = {}, F = "canceled", q = {
                readyState: 0,
                getResponseHeader: function(M) {
                    var U;
                    if (f) {
                        if (!a)
                            for (a = {}; U = jr.exec(o); )
                                a[U[1].toLowerCase() + " "] = (a[U[1].toLowerCase() + " "] || []).concat(U[2]);
                        U = a[M.toLowerCase() + " "]
                    }
                    return null == U ? null : U.join(", ")
                },
                getAllResponseHeaders: function() {
                    return f ? o : null
                },
                setRequestHeader: function(M, U) {
                    return null == f && (M = ue[M.toLowerCase()] = ue[M.toLowerCase()] || M,
                    J[M] = U),
                    this
                },
                overrideMimeType: function(M) {
                    return null == f && (g.mimeType = M),
                    this
                },
                statusCode: function(M) {
                    var U;
                    if (M)
                        if (f)
                            q.always(M[q.status]);
                        else
                            for (U in M)
                                z[U] = [z[U], M[U]];
                    return this
                },
                abort: function(M) {
                    var U = M || F;
                    return n && n.abort(U),
                    ae(0, U),
                    this
                }
            };
            if (k.promise(q),
            g.url = ((e || g.url || ut.href) + "").replace(qr, ut.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(Ee) || [""],
            null == g.crossDomain) {
                c = R.createElement("a");
                try {
                    c.href = g.url,
                    c.href = c.href,
                    g.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host
                } catch {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = i.param(g.data, g.traditional)),
            Bn(In, g, t, q),
            f)
                return q;
            for (m in (p = i.event && g.global) && 0 == i.active++ && i.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Lr.test(g.type),
            r = g.url.replace(Dr, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ar, "+")) : (x = g.url.slice(r.length),
            g.data && (g.processData || "string" == typeof g.data) && (r += (Ft.test(r) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (r = r.replace(Nr, "$1"),
            x = (Ft.test(r) ? "&" : "?") + "_=" + Pn.guid++ + x),
            g.url = r + x),
            g.ifModified && (i.lastModified[r] && q.setRequestHeader("If-Modified-Since", i.lastModified[r]),
            i.etag[r] && q.setRequestHeader("If-None-Match", i.etag[r])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && q.setRequestHeader("Content-Type", g.contentType),
            q.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Mn + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                q.setRequestHeader(m, g.headers[m]);
            if (g.beforeSend && (!1 === g.beforeSend.call(y, q, g) || f))
                return q.abort();
            if (F = "abort",
            S.add(g.complete),
            q.done(g.success),
            q.fail(g.error),
            n = Bn(_t, g, t, q)) {
                if (q.readyState = 1,
                p && E.trigger("ajaxSend", [q, g]),
                f)
                    return q;
                g.async && 0 < g.timeout && (s = A.setTimeout(function() {
                    q.abort("timeout")
                }, g.timeout));
                try {
                    f = !1,
                    n.send(J, ae)
                } catch (M) {
                    if (f)
                        throw M;
                    ae(-1, M)
                }
            } else
                ae(-1, "No Transport");
            function ae(M, U, ct, Ct) {
                var le, Me, Ke, se, Ze, ye = U;
                f || (f = !0,
                s && A.clearTimeout(s),
                n = void 0,
                o = Ct || "",
                q.readyState = 0 < M ? 4 : 0,
                le = 200 <= M && M < 300 || 304 === M,
                ct && (se = function(X, ce, fe) {
                    for (var ke, H, W, K, de = X.contents, Y = X.dataTypes; "*" === Y[0]; )
                        Y.shift(),
                        void 0 === ke && (ke = X.mimeType || ce.getResponseHeader("Content-Type"));
                    if (ke)
                        for (H in de)
                            if (de[H] && de[H].test(ke)) {
                                Y.unshift(H);
                                break
                            }
                    if (Y[0]in fe)
                        W = Y[0];
                    else {
                        for (H in fe) {
                            if (!Y[0] || X.converters[H + " " + Y[0]]) {
                                W = H;
                                break
                            }
                            K || (K = H)
                        }
                        W = W || K
                    }
                    if (W)
                        return W !== Y[0] && Y.unshift(W),
                        fe[W]
                }(g, q, ct)),
                !le && -1 < i.inArray("script", g.dataTypes) && i.inArray("json", g.dataTypes) < 0 && (g.converters["text script"] = function() {}
                ),
                se = function(X, ce, fe, ke) {
                    var H, W, K, de, Y, pe = {}, et = X.dataTypes.slice();
                    if (et[1])
                        for (K in X.converters)
                            pe[K.toLowerCase()] = X.converters[K];
                    for (W = et.shift(); W; )
                        if (X.responseFields[W] && (fe[X.responseFields[W]] = ce),
                        !Y && ke && X.dataFilter && (ce = X.dataFilter(ce, X.dataType)),
                        Y = W,
                        W = et.shift())
                            if ("*" === W)
                                W = Y;
                            else if ("*" !== Y && Y !== W) {
                                if (!(K = pe[Y + " " + W] || pe["* " + W]))
                                    for (H in pe)
                                        if ((de = H.split(" "))[1] === W && (K = pe[Y + " " + de[0]] || pe["* " + de[0]])) {
                                            !0 === K ? K = pe[H] : !0 !== pe[H] && (W = de[0],
                                            et.unshift(de[1]));
                                            break
                                        }
                                if (!0 !== K)
                                    if (K && X.throws)
                                        ce = K(ce);
                                    else
                                        try {
                                            ce = K(ce)
                                        } catch (Et) {
                                            return {
                                                state: "parsererror",
                                                error: K ? Et : "No conversion from " + Y + " to " + W
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: ce
                    }
                }(g, se, q, le),
                le ? (g.ifModified && ((Ze = q.getResponseHeader("Last-Modified")) && (i.lastModified[r] = Ze),
                (Ze = q.getResponseHeader("etag")) && (i.etag[r] = Ze)),
                204 === M || "HEAD" === g.type ? ye = "nocontent" : 304 === M ? ye = "notmodified" : (ye = se.state,
                Me = se.data,
                le = !(Ke = se.error))) : (Ke = ye,
                !M && ye || (ye = "error",
                M < 0 && (M = 0))),
                q.status = M,
                q.statusText = (U || ye) + "",
                le ? k.resolveWith(y, [Me, ye, q]) : k.rejectWith(y, [q, ye, Ke]),
                q.statusCode(z),
                z = void 0,
                p && E.trigger(le ? "ajaxSuccess" : "ajaxError", [q, g, le ? Me : Ke]),
                S.fireWith(y, [q, ye]),
                p && (E.trigger("ajaxComplete", [q, g]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            return q
        },
        getJSON: function(e, t, n) {
            return i.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return i.get(e, void 0, t, "script")
        }
    }),
    i.each(["get", "post"], function(e, t) {
        i[t] = function(n, r, o, a) {
            return P(r) && (a = a || o,
            o = r,
            r = void 0),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: a,
                data: r,
                success: o
            }, i.isPlainObject(n) && n))
        }
    }),
    i.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    i._evalUrl = function(e, t, n) {
        return i.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(r) {
                i.globalEval(r, t, n)
            }
        })
    }
    ,
    i.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (P(e) && (e = e.call(this[0])),
            t = i(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return P(e) ? this.each(function(t) {
                i(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = P(e);
            return this.each(function(n) {
                i(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    i.expr.pseudos.hidden = function(e) {
        return !i.expr.pseudos.visible(e)
    }
    ,
    i.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    i.ajaxSettings.xhr = function() {
        try {
            return new A.XMLHttpRequest
        } catch {}
    }
    ;
    var Hr = {
        0: 200,
        1223: 204
    }
      , lt = i.ajaxSettings.xhr();
    B.cors = !!lt && "withCredentials"in lt,
    B.ajax = lt = !!lt,
    i.ajaxTransport(function(e) {
        var t, n;
        if (B.cors || lt && !e.crossDomain)
            return {
                send: function(r, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (a in e.xhrFields)
                            s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        s.setRequestHeader(a, r[a]);
                    t = function(c) {
                        return function() {
                            t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === c ? s.abort() : "error" === c ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Hr[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = t(),
                    n = s.onerror = s.ontimeout = t("error"),
                    void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                        4 === s.readyState && A.setTimeout(function() {
                            t && n()
                        })
                    }
                    ,
                    t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (c) {
                        if (t)
                            throw c
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    i.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return i.globalEval(e),
                e
            }
        }
    }),
    i.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    i.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, o) {
                    t = i("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(a) {
                        t.remove(),
                        n = null,
                        a && o("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    R.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Fn, $n = [], Xt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $n.pop() || i.expando + "_" + Pn.guid++;
            return this[e] = !0,
            e
        }
    }),
    i.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, o, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = P(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return a || i.error(r + " was not called"),
                a[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = A[r],
            A[r] = function() {
                a = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? i(A).removeProp(r) : A[r] = o,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                $n.push(r)),
                a && P(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    B.createHTMLDocument = ((Fn = R.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Fn.childNodes.length),
    i.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (B.createHTMLDocument ? ((r = (t = R.implementation.createHTMLDocument("")).createElement("base")).href = R.location.href,
        t.head.appendChild(r)) : t = R),
        a = !n && [],
        (o = on.exec(e)) ? [t.createElement(o[1])] : (o = gn([e], t, a),
        a && a.length && i(a).remove(),
        i.merge([], o.childNodes)));
        var r, o, a
    }
    ,
    i.fn.load = function(e, t, n) {
        var r, o, a, s = this, c = e.indexOf(" ");
        return -1 < c && (r = Re(e.slice(c)),
        e = e.slice(0, c)),
        P(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < s.length && i.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(f) {
            a = arguments,
            s.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f)
        }).always(n && function(f, p) {
            s.each(function() {
                n.apply(this, a || [f.responseText, p, f])
            })
        }
        ),
        this
    }
    ,
    i.expr.pseudos.animated = function(e) {
        return i.grep(i.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(e, t, n) {
            var r, o, a, s, c, f, p = i.css(e, "position"), m = i(e), x = {};
            "static" === p && (e.style.position = "relative"),
            c = m.offset(),
            a = i.css(e, "top"),
            f = i.css(e, "left"),
            ("absolute" === p || "fixed" === p) && -1 < (a + f).indexOf("auto") ? (s = (r = m.position()).top,
            o = r.left) : (s = parseFloat(a) || 0,
            o = parseFloat(f) || 0),
            P(t) && (t = t.call(e, n, i.extend({}, c))),
            null != t.top && (x.top = t.top - c.top + s),
            null != t.left && (x.left = t.left - c.left + o),
            "using"in t ? t.using.call(e, x) : m.css(x)
        }
    },
    i.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(o) {
                    i.offset.setOffset(this, e, o)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? {
                top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === i.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === i.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = i(e).offset()).top += i.css(e, "borderTopWidth", !0),
                    o.left += i.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - i.css(r, "marginTop", !0),
                    left: t.left - o.left - i.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === i.css(e, "position"); )
                    e = e.offsetParent;
                return e || Oe
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        i.fn[e] = function(r) {
            return De(this, function(o, a, s) {
                var c;
                if (Fe(o) ? c = o : 9 === o.nodeType && (c = o.defaultView),
                void 0 === s)
                    return c ? c[t] : o[a];
                c ? c.scrollTo(n ? c.pageXOffset : s, n ? s : c.pageYOffset) : o[a] = s
            }, e, r, arguments.length)
        }
    }),
    i.each(["top", "left"], function(e, t) {
        i.cssHooks[t] = wn(B.pixelPosition, function(n, r) {
            if (r)
                return r = at(n, t),
                Rt.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        i.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            i.fn[r] = function(o, a) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , c = n || (!0 === o || !0 === a ? "margin" : "border");
                return De(this, function(f, p, m) {
                    var x;
                    return Fe(f) ? 0 === r.indexOf("outer") ? f["inner" + e] : f.document.documentElement["client" + e] : 9 === f.nodeType ? (x = f.documentElement,
                    Math.max(f.body["scroll" + e], x["scroll" + e], f.body["offset" + e], x["offset" + e], x["client" + e])) : void 0 === m ? i.css(f, p, c) : i.style(f, p, m, c)
                }, t, s ? o : void 0, s)
            }
        })
    }),
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        i.fn[t] = function(n, r) {
            return 0 < arguments.length ? this.on(t, null, n, r) : this.trigger(t)
        }
    });
    var Or = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    i.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        P(e))
            return r = te.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(te.call(arguments)))
            }
            ).guid = e.guid = e.guid || i.guid++,
            o
    }
    ,
    i.holdReady = function(e) {
        e ? i.readyWait++ : i.ready(!0)
    }
    ,
    i.isArray = Array.isArray,
    i.parseJSON = JSON.parse,
    i.nodeName = ge,
    i.isFunction = P,
    i.isWindow = Fe,
    i.camelCase = Se,
    i.type = $e,
    i.now = Date.now,
    i.isNumeric = function(e) {
        var t = i.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    i.trim = function(e) {
        return null == e ? "" : (e + "").replace(Or, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    });
    var Pr = A.jQuery
      , Rr = A.$;
    return i.noConflict = function(e) {
        return A.$ === i && (A.$ = Rr),
        e && A.jQuery === i && (A.jQuery = Pr),
        i
    }
    ,
    typeof ve > "u" && (A.jQuery = A.$ = i),
    i
});
