(self.webpackChunkapp = self.webpackChunkapp || []).push([[3461], {
    24050: (Ie, te, ce) => {
        window.process = {
            env: {
                DEBUG: void 0
            }
        },
        window.global = window,
        window.Buffer = window.Buffer || ce(83838).Buffer
    }
    ,
    13981: (Ie, te) => {
        "use strict";
        te.byteLength = function f(A) {
            var X = V(A)
              , P = X[1];
            return 3 * (X[0] + P) / 4 - P
        }
        ,
        te.toByteArray = function De(A) {
            var X, pe, K = V(A), P = K[0], we = K[1], ue = new ge(function Ae(A, X, K) {
                return 3 * (X + K) / 4 - K
            }(0, P, we)), Y = 0, Ve = we > 0 ? P - 4 : P;
            for (pe = 0; pe < Ve; pe += 4)
                X = Z[A.charCodeAt(pe)] << 18 | Z[A.charCodeAt(pe + 1)] << 12 | Z[A.charCodeAt(pe + 2)] << 6 | Z[A.charCodeAt(pe + 3)],
                ue[Y++] = X >> 16 & 255,
                ue[Y++] = X >> 8 & 255,
                ue[Y++] = 255 & X;
            return 2 === we && (X = Z[A.charCodeAt(pe)] << 2 | Z[A.charCodeAt(pe + 1)] >> 4,
            ue[Y++] = 255 & X),
            1 === we && (X = Z[A.charCodeAt(pe)] << 10 | Z[A.charCodeAt(pe + 1)] << 4 | Z[A.charCodeAt(pe + 2)] >> 2,
            ue[Y++] = X >> 8 & 255,
            ue[Y++] = 255 & X),
            ue
        }
        ,
        te.fromByteArray = function be(A) {
            for (var X, K = A.length, P = K % 3, we = [], Y = 0, Ve = K - P; Y < Ve; Y += 16383)
                we.push(re(A, Y, Y + 16383 > Ve ? Ve : Y + 16383));
            return 1 === P ? we.push(ce[(X = A[K - 1]) >> 2] + ce[X << 4 & 63] + "==") : 2 === P && we.push(ce[(X = (A[K - 2] << 8) + A[K - 1]) >> 10] + ce[X >> 4 & 63] + ce[X << 2 & 63] + "="),
            we.join("")
        }
        ;
        for (var ce = [], Z = [], ge = typeof Uint8Array < "u" ? Uint8Array : Array, Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", se = 0; se < 64; ++se)
            ce[se] = Re[se],
            Z[Re.charCodeAt(se)] = se;
        function V(A) {
            var X = A.length;
            if (X % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var K = A.indexOf("=");
            return -1 === K && (K = X),
            [K, K === X ? 0 : 4 - K % 4]
        }
        function _e(A) {
            return ce[A >> 18 & 63] + ce[A >> 12 & 63] + ce[A >> 6 & 63] + ce[63 & A]
        }
        function re(A, X, K) {
            for (var we = [], ue = X; ue < K; ue += 3)
                we.push(_e((A[ue] << 16 & 16711680) + (A[ue + 1] << 8 & 65280) + (255 & A[ue + 2])));
            return we.join("")
        }
        Z[45] = 62,
        Z[95] = 63
    }
    ,
    83838: (Ie, te, ce) => {
        "use strict";
        var Z = ce(13981)
          , ge = ce(22020)
          , Re = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        te.Buffer = f,
        te.SlowBuffer = function ue(r) {
            return +r != r && (r = 0),
            f.alloc(+r)
        }
        ,
        te.INSPECT_MAX_BYTES = 50;
        var se = 2147483647;
        function V(r) {
            if (r > se)
                throw new RangeError('The value "' + r + '" is invalid for option "size"');
            var e = new Uint8Array(r);
            return Object.setPrototypeOf(e, f.prototype),
            e
        }
        function f(r, e, t) {
            if ("number" == typeof r) {
                if ("string" == typeof e)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return re(r)
            }
            return Ae(r, e, t)
        }
        function Ae(r, e, t) {
            if ("string" == typeof r)
                return function be(r, e) {
                    if (("string" != typeof e || "" === e) && (e = "utf8"),
                    !f.isEncoding(e))
                        throw new TypeError("Unknown encoding: " + e);
                    var t = 0 | Y(r, e)
                      , n = V(t)
                      , a = n.write(r, e);
                    return a !== t && (n = n.slice(0, a)),
                    n
                }(r, e);
            if (ArrayBuffer.isView(r))
                return function X(r) {
                    if (Me(r, Uint8Array)) {
                        var e = new Uint8Array(r);
                        return K(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return A(r)
                }(r);
            if (null == r)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
            if (Me(r, ArrayBuffer) || r && Me(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Me(r, SharedArrayBuffer) || r && Me(r.buffer, SharedArrayBuffer)))
                return K(r, e, t);
            if ("number" == typeof r)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = r.valueOf && r.valueOf();
            if (null != n && n !== r)
                return f.from(n, e, t);
            var a = function P(r) {
                if (f.isBuffer(r)) {
                    var e = 0 | we(r.length)
                      , t = V(e);
                    return 0 === t.length || r.copy(t, 0, 0, e),
                    t
                }
                return void 0 !== r.length ? "number" != typeof r.length || et(r.length) ? V(0) : A(r) : "Buffer" === r.type && Array.isArray(r.data) ? A(r.data) : void 0
            }(r);
            if (a)
                return a;
            if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof r[Symbol.toPrimitive])
                return f.from(r[Symbol.toPrimitive]("string"), e, t);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
        }
        function De(r) {
            if ("number" != typeof r)
                throw new TypeError('"size" argument must be of type number');
            if (r < 0)
                throw new RangeError('The value "' + r + '" is invalid for option "size"')
        }
        function re(r) {
            return De(r),
            V(r < 0 ? 0 : 0 | we(r))
        }
        function A(r) {
            for (var e = r.length < 0 ? 0 : 0 | we(r.length), t = V(e), n = 0; n < e; n += 1)
                t[n] = 255 & r[n];
            return t
        }
        function K(r, e, t) {
            if (e < 0 || r.byteLength < e)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (r.byteLength < e + (t || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            var n;
            return n = void 0 === e && void 0 === t ? new Uint8Array(r) : void 0 === t ? new Uint8Array(r,e) : new Uint8Array(r,e,t),
            Object.setPrototypeOf(n, f.prototype),
            n
        }
        function we(r) {
            if (r >= se)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + se.toString(16) + " bytes");
            return 0 | r
        }
        function Y(r, e) {
            if (f.isBuffer(r))
                return r.length;
            if (ArrayBuffer.isView(r) || Me(r, ArrayBuffer))
                return r.byteLength;
            if ("string" != typeof r)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
            var t = r.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === t)
                return 0;
            for (var a = !1; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return t;
                case "utf8":
                case "utf-8":
                    return He(r).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * t;
                case "hex":
                    return t >>> 1;
                case "base64":
                    return ct(r).length;
                default:
                    if (a)
                        return n ? -1 : He(r).length;
                    e = ("" + e).toLowerCase(),
                    a = !0
                }
        }
        function Ve(r, e, t) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0),
            e > this.length || ((void 0 === t || t > this.length) && (t = this.length),
            t <= 0) || (t >>>= 0) <= (e >>>= 0))
                return "";
            for (r || (r = "utf8"); ; )
                switch (r) {
                case "hex":
                    return Oe(this, e, t);
                case "utf8":
                case "utf-8":
                    return st(this, e, t);
                case "ascii":
                    return Le(this, e, t);
                case "latin1":
                case "binary":
                    return Ye(this, e, t);
                case "base64":
                    return wt(this, e, t);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return kt(this, e, t);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + r);
                    r = (r + "").toLowerCase(),
                    n = !0
                }
        }
        function pe(r, e, t) {
            var n = r[e];
            r[e] = r[t],
            r[t] = n
        }
        function lt(r, e, t, n, a) {
            if (0 === r.length)
                return -1;
            if ("string" == typeof t ? (n = t,
            t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648),
            et(t = +t) && (t = a ? 0 : r.length - 1),
            t < 0 && (t = r.length + t),
            t >= r.length) {
                if (a)
                    return -1;
                t = r.length - 1
            } else if (t < 0) {
                if (!a)
                    return -1;
                t = 0
            }
            if ("string" == typeof e && (e = f.from(e, n)),
            f.isBuffer(e))
                return 0 === e.length ? -1 : it(r, e, t, n, a);
            if ("number" == typeof e)
                return e &= 255,
                "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : it(r, [e], t, n, a);
            throw new TypeError("val must be string, number or Buffer")
        }
        function it(r, e, t, n, a) {
            var ae, d = 1, E = r.length, $ = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (r.length < 2 || e.length < 2)
                    return -1;
                d = 2,
                E /= 2,
                $ /= 2,
                t /= 2
            }
            function Q(Tt, mt) {
                return 1 === d ? Tt[mt] : Tt.readUInt16BE(mt * d)
            }
            if (a) {
                var Ce = -1;
                for (ae = t; ae < E; ae++)
                    if (Q(r, ae) === Q(e, -1 === Ce ? 0 : ae - Ce)) {
                        if (-1 === Ce && (Ce = ae),
                        ae - Ce + 1 === $)
                            return Ce * d
                    } else
                        -1 !== Ce && (ae -= ae - Ce),
                        Ce = -1
            } else
                for (t + $ > E && (t = E - $),
                ae = t; ae >= 0; ae--) {
                    for (var de = !0, tt = 0; tt < $; tt++)
                        if (Q(r, ae + tt) !== Q(e, tt)) {
                            de = !1;
                            break
                        }
                    if (de)
                        return ae
                }
            return -1
        }
        function ft(r, e, t, n) {
            t = Number(t) || 0;
            var a = r.length - t;
            n ? (n = Number(n)) > a && (n = a) : n = a;
            var d = e.length;
            n > d / 2 && (n = d / 2);
            for (var E = 0; E < n; ++E) {
                var $ = parseInt(e.substr(2 * E, 2), 16);
                if (et($))
                    return E;
                r[t + E] = $
            }
            return E
        }
        function Je(r, e, t, n) {
            return $e(He(e, r.length - t), r, t, n)
        }
        function ot(r, e, t, n) {
            return $e(function vt(r) {
                for (var e = [], t = 0; t < r.length; ++t)
                    e.push(255 & r.charCodeAt(t));
                return e
            }(e), r, t, n)
        }
        function ht(r, e, t, n) {
            return $e(ct(e), r, t, n)
        }
        function Ke(r, e, t, n) {
            return $e(function Ne(r, e) {
                for (var t, n, d = [], E = 0; E < r.length && !((e -= 2) < 0); ++E)
                    n = (t = r.charCodeAt(E)) >> 8,
                    d.push(t % 256),
                    d.push(n);
                return d
            }(e, r.length - t), r, t, n)
        }
        function wt(r, e, t) {
            return Z.fromByteArray(0 === e && t === r.length ? r : r.slice(e, t))
        }
        function st(r, e, t) {
            t = Math.min(r.length, t);
            for (var n = [], a = e; a < t; ) {
                var Q, ae, Ce, de, d = r[a], E = null, $ = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                if (a + $ <= t)
                    switch ($) {
                    case 1:
                        d < 128 && (E = d);
                        break;
                    case 2:
                        128 == (192 & (Q = r[a + 1])) && (de = (31 & d) << 6 | 63 & Q) > 127 && (E = de);
                        break;
                    case 3:
                        ae = r[a + 2],
                        128 == (192 & (Q = r[a + 1])) && 128 == (192 & ae) && (de = (15 & d) << 12 | (63 & Q) << 6 | 63 & ae) > 2047 && (de < 55296 || de > 57343) && (E = de);
                        break;
                    case 4:
                        ae = r[a + 2],
                        Ce = r[a + 3],
                        128 == (192 & (Q = r[a + 1])) && 128 == (192 & ae) && 128 == (192 & Ce) && (de = (15 & d) << 18 | (63 & Q) << 12 | (63 & ae) << 6 | 63 & Ce) > 65535 && de < 1114112 && (E = de)
                    }
                null === E ? (E = 65533,
                $ = 1) : E > 65535 && (n.push((E -= 65536) >>> 10 & 1023 | 55296),
                E = 56320 | 1023 & E),
                n.push(E),
                a += $
            }
            return function pt(r) {
                var e = r.length;
                if (e <= at)
                    return String.fromCharCode.apply(String, r);
                for (var t = "", n = 0; n < e; )
                    t += String.fromCharCode.apply(String, r.slice(n, n += at));
                return t
            }(n)
        }
        te.kMaxLength = se,
        !(f.TYPED_ARRAY_SUPPORT = function xe() {
            try {
                var r = new Uint8Array(1)
                  , e = {
                    foo: function() {
                        return 42
                    }
                };
                return Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(r, e),
                42 === r.foo()
            } catch {
                return !1
            }
        }()) && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(f.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (f.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(f.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (f.isBuffer(this))
                    return this.byteOffset
            }
        }),
        f.poolSize = 8192,
        f.from = function(r, e, t) {
            return Ae(r, e, t)
        }
        ,
        Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(f, Uint8Array),
        f.alloc = function(r, e, t) {
            return function _e(r, e, t) {
                return De(r),
                r <= 0 ? V(r) : void 0 !== e ? "string" == typeof t ? V(r).fill(e, t) : V(r).fill(e) : V(r)
            }(r, e, t)
        }
        ,
        f.allocUnsafe = function(r) {
            return re(r)
        }
        ,
        f.allocUnsafeSlow = function(r) {
            return re(r)
        }
        ,
        f.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== f.prototype
        }
        ,
        f.compare = function(e, t) {
            if (Me(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
            Me(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
            !f.isBuffer(e) || !f.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            for (var n = e.length, a = t.length, d = 0, E = Math.min(n, a); d < E; ++d)
                if (e[d] !== t[d]) {
                    n = e[d],
                    a = t[d];
                    break
                }
            return n < a ? -1 : a < n ? 1 : 0
        }
        ,
        f.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        f.concat = function(e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return f.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var a = f.allocUnsafe(t)
              , d = 0;
            for (n = 0; n < e.length; ++n) {
                var E = e[n];
                if (Me(E, Uint8Array))
                    d + E.length > a.length ? f.from(E).copy(a, d) : Uint8Array.prototype.set.call(a, E, d);
                else {
                    if (!f.isBuffer(E))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    E.copy(a, d)
                }
                d += E.length
            }
            return a
        }
        ,
        f.byteLength = Y,
        f.prototype._isBuffer = !0,
        f.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                pe(this, t, t + 1);
            return this
        }
        ,
        f.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                pe(this, t, t + 3),
                pe(this, t + 1, t + 2);
            return this
        }
        ,
        f.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                pe(this, t, t + 7),
                pe(this, t + 1, t + 6),
                pe(this, t + 2, t + 5),
                pe(this, t + 3, t + 4);
            return this
        }
        ,
        f.prototype.toLocaleString = f.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? st(this, 0, e) : Ve.apply(this, arguments)
        }
        ,
        f.prototype.equals = function(e) {
            if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === f.compare(this, e)
        }
        ,
        f.prototype.inspect = function() {
            var e = ""
              , t = te.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
            this.length > t && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ,
        Re && (f.prototype[Re] = f.prototype.inspect),
        f.prototype.compare = function(e, t, n, a, d) {
            if (Me(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
            !f.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === a && (a = 0),
            void 0 === d && (d = this.length),
            t < 0 || n > e.length || a < 0 || d > this.length)
                throw new RangeError("out of range index");
            if (a >= d && t >= n)
                return 0;
            if (a >= d)
                return -1;
            if (t >= n)
                return 1;
            if (this === e)
                return 0;
            for (var E = (d >>>= 0) - (a >>>= 0), $ = (n >>>= 0) - (t >>>= 0), Q = Math.min(E, $), ae = this.slice(a, d), Ce = e.slice(t, n), de = 0; de < Q; ++de)
                if (ae[de] !== Ce[de]) {
                    E = ae[de],
                    $ = Ce[de];
                    break
                }
            return E < $ ? -1 : $ < E ? 1 : 0
        }
        ,
        f.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        f.prototype.indexOf = function(e, t, n) {
            return lt(this, e, t, n, !0)
        }
        ,
        f.prototype.lastIndexOf = function(e, t, n) {
            return lt(this, e, t, n, !1)
        }
        ,
        f.prototype.write = function(e, t, n, a) {
            if (void 0 === t)
                a = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" == typeof t)
                a = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0,
                isFinite(n) ? (n >>>= 0,
                void 0 === a && (a = "utf8")) : (a = n,
                n = void 0)
            }
            var d = this.length - t;
            if ((void 0 === n || n > d) && (n = d),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            a || (a = "utf8");
            for (var E = !1; ; )
                switch (a) {
                case "hex":
                    return ft(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return Je(this, e, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                    return ot(this, e, t, n);
                case "base64":
                    return ht(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return Ke(this, e, t, n);
                default:
                    if (E)
                        throw new TypeError("Unknown encoding: " + a);
                    a = ("" + a).toLowerCase(),
                    E = !0
                }
        }
        ,
        f.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var at = 4096;
        function Le(r, e, t) {
            var n = "";
            t = Math.min(r.length, t);
            for (var a = e; a < t; ++a)
                n += String.fromCharCode(127 & r[a]);
            return n
        }
        function Ye(r, e, t) {
            var n = "";
            t = Math.min(r.length, t);
            for (var a = e; a < t; ++a)
                n += String.fromCharCode(r[a]);
            return n
        }
        function Oe(r, e, t) {
            var n = r.length;
            (!e || e < 0) && (e = 0),
            (!t || t < 0 || t > n) && (t = n);
            for (var a = "", d = e; d < t; ++d)
                a += xt[r[d]];
            return a
        }
        function kt(r, e, t) {
            for (var n = r.slice(e, t), a = "", d = 0; d < n.length - 1; d += 2)
                a += String.fromCharCode(n[d] + 256 * n[d + 1]);
            return a
        }
        function ne(r, e, t) {
            if (r % 1 != 0 || r < 0)
                throw new RangeError("offset is not uint");
            if (r + e > t)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function Se(r, e, t, n, a, d) {
            if (!f.isBuffer(r))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > a || e < d)
                throw new RangeError('"value" argument is out of bounds');
            if (t + n > r.length)
                throw new RangeError("Index out of range")
        }
        function Qe(r, e, t, n, a, d) {
            if (t + n > r.length)
                throw new RangeError("Index out of range");
            if (t < 0)
                throw new RangeError("Index out of range")
        }
        function dt(r, e, t, n, a) {
            return e = +e,
            t >>>= 0,
            a || Qe(r, 0, t, 4),
            ge.write(r, e, t, n, 23, 4),
            t + 4
        }
        function Et(r, e, t, n, a) {
            return e = +e,
            t >>>= 0,
            a || Qe(r, 0, t, 8),
            ge.write(r, e, t, n, 52, 8),
            t + 8
        }
        f.prototype.slice = function(e, t) {
            var n = this.length;
            (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e);
            var a = this.subarray(e, t);
            return Object.setPrototypeOf(a, f.prototype),
            a
        }
        ,
        f.prototype.readUintLE = f.prototype.readUIntLE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || ne(e, t, this.length);
            for (var a = this[e], d = 1, E = 0; ++E < t && (d *= 256); )
                a += this[e + E] * d;
            return a
        }
        ,
        f.prototype.readUintBE = f.prototype.readUIntBE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || ne(e, t, this.length);
            for (var a = this[e + --t], d = 1; t > 0 && (d *= 256); )
                a += this[e + --t] * d;
            return a
        }
        ,
        f.prototype.readUint8 = f.prototype.readUInt8 = function(e, t) {
            return e >>>= 0,
            t || ne(e, 1, this.length),
            this[e]
        }
        ,
        f.prototype.readUint16LE = f.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        f.prototype.readUint16BE = f.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        f.prototype.readUint32LE = f.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        f.prototype.readUint32BE = f.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        f.prototype.readIntLE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || ne(e, t, this.length);
            for (var a = this[e], d = 1, E = 0; ++E < t && (d *= 256); )
                a += this[e + E] * d;
            return a >= (d *= 128) && (a -= Math.pow(2, 8 * t)),
            a
        }
        ,
        f.prototype.readIntBE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || ne(e, t, this.length);
            for (var a = t, d = 1, E = this[e + --a]; a > 0 && (d *= 256); )
                E += this[e + --a] * d;
            return E >= (d *= 128) && (E -= Math.pow(2, 8 * t)),
            E
        }
        ,
        f.prototype.readInt8 = function(e, t) {
            return e >>>= 0,
            t || ne(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        f.prototype.readInt16LE = function(e, t) {
            e >>>= 0,
            t || ne(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        f.prototype.readInt16BE = function(e, t) {
            e >>>= 0,
            t || ne(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        f.prototype.readInt32LE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        f.prototype.readInt32BE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        f.prototype.readFloatLE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            ge.read(this, e, !0, 23, 4)
        }
        ,
        f.prototype.readFloatBE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 4, this.length),
            ge.read(this, e, !1, 23, 4)
        }
        ,
        f.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 8, this.length),
            ge.read(this, e, !0, 52, 8)
        }
        ,
        f.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0,
            t || ne(e, 8, this.length),
            ge.read(this, e, !1, 52, 8)
        }
        ,
        f.prototype.writeUintLE = f.prototype.writeUIntLE = function(e, t, n, a) {
            e = +e,
            t >>>= 0,
            n >>>= 0,
            a || Se(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var E = 1
              , $ = 0;
            for (this[t] = 255 & e; ++$ < n && (E *= 256); )
                this[t + $] = e / E & 255;
            return t + n
        }
        ,
        f.prototype.writeUintBE = f.prototype.writeUIntBE = function(e, t, n, a) {
            e = +e,
            t >>>= 0,
            n >>>= 0,
            a || Se(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var E = n - 1
              , $ = 1;
            for (this[t + E] = 255 & e; --E >= 0 && ($ *= 256); )
                this[t + E] = e / $ & 255;
            return t + n
        }
        ,
        f.prototype.writeUint8 = f.prototype.writeUInt8 = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 1, 255, 0),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 2, 65535, 0),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 2, 65535, 0),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 4, 4294967295, 0),
            this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e,
            t + 4
        }
        ,
        f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 4, 4294967295, 0),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        f.prototype.writeIntLE = function(e, t, n, a) {
            if (e = +e,
            t >>>= 0,
            !a) {
                var d = Math.pow(2, 8 * n - 1);
                Se(this, e, t, n, d - 1, -d)
            }
            var E = 0
              , $ = 1
              , Q = 0;
            for (this[t] = 255 & e; ++E < n && ($ *= 256); )
                e < 0 && 0 === Q && 0 !== this[t + E - 1] && (Q = 1),
                this[t + E] = (e / $ | 0) - Q & 255;
            return t + n
        }
        ,
        f.prototype.writeIntBE = function(e, t, n, a) {
            if (e = +e,
            t >>>= 0,
            !a) {
                var d = Math.pow(2, 8 * n - 1);
                Se(this, e, t, n, d - 1, -d)
            }
            var E = n - 1
              , $ = 1
              , Q = 0;
            for (this[t + E] = 255 & e; --E >= 0 && ($ *= 256); )
                e < 0 && 0 === Q && 0 !== this[t + E + 1] && (Q = 1),
                this[t + E] = (e / $ | 0) - Q & 255;
            return t + n
        }
        ,
        f.prototype.writeInt8 = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        f.prototype.writeInt16LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 2, 32767, -32768),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        f.prototype.writeInt16BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 2, 32767, -32768),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        f.prototype.writeInt32LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 4, 2147483647, -2147483648),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24,
            t + 4
        }
        ,
        f.prototype.writeInt32BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || Se(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        f.prototype.writeFloatLE = function(e, t, n) {
            return dt(this, e, t, !0, n)
        }
        ,
        f.prototype.writeFloatBE = function(e, t, n) {
            return dt(this, e, t, !1, n)
        }
        ,
        f.prototype.writeDoubleLE = function(e, t, n) {
            return Et(this, e, t, !0, n)
        }
        ,
        f.prototype.writeDoubleBE = function(e, t, n) {
            return Et(this, e, t, !1, n)
        }
        ,
        f.prototype.copy = function(e, t, n, a) {
            if (!f.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (n || (n = 0),
            !a && 0 !== a && (a = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            a > 0 && a < n && (a = n),
            a === n || 0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("Index out of range");
            if (a < 0)
                throw new RangeError("sourceEnd out of bounds");
            a > this.length && (a = this.length),
            e.length - t < a - n && (a = e.length - t + n);
            var d = a - n;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, a) : Uint8Array.prototype.set.call(e, this.subarray(n, a), t),
            d
        }
        ,
        f.prototype.fill = function(e, t, n, a) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (a = t,
                t = 0,
                n = this.length) : "string" == typeof n && (a = n,
                n = this.length),
                void 0 !== a && "string" != typeof a)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof a && !f.isEncoding(a))
                    throw new TypeError("Unknown encoding: " + a);
                if (1 === e.length) {
                    var d = e.charCodeAt(0);
                    ("utf8" === a && d < 128 || "latin1" === a) && (e = d)
                }
            } else
                "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            var E;
            if (t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (E = t; E < n; ++E)
                    this[E] = e;
            else {
                var $ = f.isBuffer(e) ? e : f.from(e, a)
                  , Q = $.length;
                if (0 === Q)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (E = 0; E < n - t; ++E)
                    this[E + t] = $[E % Q]
            }
            return this
        }
        ;
        var yt = /[^+/0-9A-Za-z-_]/g;
        function He(r, e) {
            e = e || 1 / 0;
            for (var t, n = r.length, a = null, d = [], E = 0; E < n; ++E) {
                if ((t = r.charCodeAt(E)) > 55295 && t < 57344) {
                    if (!a) {
                        if (t > 56319) {
                            (e -= 3) > -1 && d.push(239, 191, 189);
                            continue
                        }
                        if (E + 1 === n) {
                            (e -= 3) > -1 && d.push(239, 191, 189);
                            continue
                        }
                        a = t;
                        continue
                    }
                    if (t < 56320) {
                        (e -= 3) > -1 && d.push(239, 191, 189),
                        a = t;
                        continue
                    }
                    t = 65536 + (a - 55296 << 10 | t - 56320)
                } else
                    a && (e -= 3) > -1 && d.push(239, 191, 189);
                if (a = null,
                t < 128) {
                    if ((e -= 1) < 0)
                        break;
                    d.push(t)
                } else if (t < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    d.push(t >> 6 | 192, 63 & t | 128)
                } else if (t < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    d.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
                } else {
                    if (!(t < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    d.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
                }
            }
            return d
        }
        function ct(r) {
            return Z.toByteArray(function _t(r) {
                if ((r = (r = r.split("=")[0]).trim().replace(yt, "")).length < 2)
                    return "";
                for (; r.length % 4 != 0; )
                    r += "=";
                return r
            }(r))
        }
        function $e(r, e, t, n) {
            for (var a = 0; a < n && !(a + t >= e.length || a >= r.length); ++a)
                e[a + t] = r[a];
            return a
        }
        function Me(r, e) {
            return r instanceof e || null != r && null != r.constructor && null != r.constructor.name && r.constructor.name === e.name
        }
        function et(r) {
            return r != r
        }
        var xt = function() {
            for (var r = "0123456789abcdef", e = new Array(256), t = 0; t < 16; ++t)
                for (var n = 16 * t, a = 0; a < 16; ++a)
                    e[n + a] = r[t] + r[a];
            return e
        }()
    }
    ,
    22020: (Ie, te) => {
        te.read = function(ce, Z, ge, Re, se) {
            var xe, V, f = 8 * se - Re - 1, Ae = (1 << f) - 1, De = Ae >> 1, _e = -7, re = ge ? se - 1 : 0, be = ge ? -1 : 1, A = ce[Z + re];
            for (re += be,
            xe = A & (1 << -_e) - 1,
            A >>= -_e,
            _e += f; _e > 0; xe = 256 * xe + ce[Z + re],
            re += be,
            _e -= 8)
                ;
            for (V = xe & (1 << -_e) - 1,
            xe >>= -_e,
            _e += Re; _e > 0; V = 256 * V + ce[Z + re],
            re += be,
            _e -= 8)
                ;
            if (0 === xe)
                xe = 1 - De;
            else {
                if (xe === Ae)
                    return V ? NaN : 1 / 0 * (A ? -1 : 1);
                V += Math.pow(2, Re),
                xe -= De
            }
            return (A ? -1 : 1) * V * Math.pow(2, xe - Re)
        }
        ,
        te.write = function(ce, Z, ge, Re, se, xe) {
            var V, f, Ae, De = 8 * xe - se - 1, _e = (1 << De) - 1, re = _e >> 1, be = 23 === se ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = Re ? 0 : xe - 1, X = Re ? 1 : -1, K = Z < 0 || 0 === Z && 1 / Z < 0 ? 1 : 0;
            for (Z = Math.abs(Z),
            isNaN(Z) || Z === 1 / 0 ? (f = isNaN(Z) ? 1 : 0,
            V = _e) : (V = Math.floor(Math.log(Z) / Math.LN2),
            Z * (Ae = Math.pow(2, -V)) < 1 && (V--,
            Ae *= 2),
            (Z += V + re >= 1 ? be / Ae : be * Math.pow(2, 1 - re)) * Ae >= 2 && (V++,
            Ae /= 2),
            V + re >= _e ? (f = 0,
            V = _e) : V + re >= 1 ? (f = (Z * Ae - 1) * Math.pow(2, se),
            V += re) : (f = Z * Math.pow(2, re - 1) * Math.pow(2, se),
            V = 0)); se >= 8; ce[ge + A] = 255 & f,
            A += X,
            f /= 256,
            se -= 8)
                ;
            for (V = V << se | f,
            De += se; De > 0; ce[ge + A] = 255 & V,
            A += X,
            V /= 256,
            De -= 8)
                ;
            ce[ge + A - X] |= 128 * K
        }
    }
    ,
    96935: () => {
        "use strict";
        const Ie = globalThis;
        function te(i) {
            return (Ie.__Zone_symbol_prefix || "__zone_symbol__") + i
        }
        const ge = Object.getOwnPropertyDescriptor
          , Re = Object.defineProperty
          , se = Object.getPrototypeOf
          , xe = Object.create
          , V = Array.prototype.slice
          , f = "addEventListener"
          , Ae = "removeEventListener"
          , De = te(f)
          , _e = te(Ae)
          , re = "true"
          , be = "false"
          , A = te("");
        function X(i, c) {
            return Zone.current.wrap(i, c)
        }
        function K(i, c, p, o, h) {
            return Zone.current.scheduleMacroTask(i, c, p, o, h)
        }
        const P = te
          , we = typeof window < "u"
          , ue = we ? window : void 0
          , Y = we && ue || globalThis
          , Ve = "removeAttribute";
        function pe(i, c) {
            for (let p = i.length - 1; p >= 0; p--)
                "function" == typeof i[p] && (i[p] = X(i[p], c + "_" + p));
            return i
        }
        function it(i) {
            return !i || !1 !== i.writable && !("function" == typeof i.get && typeof i.set > "u")
        }
        const ft = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
          , Je = !("nw"in Y) && typeof Y.process < "u" && "[object process]" === Y.process.toString()
          , ot = !Je && !ft && !(!we || !ue.HTMLElement)
          , ht = typeof Y.process < "u" && "[object process]" === Y.process.toString() && !ft && !(!we || !ue.HTMLElement)
          , Ke = {}
          , wt = P("enable_beforeunload")
          , st = function(i) {
            if (!(i = i || Y.event))
                return;
            let c = Ke[i.type];
            c || (c = Ke[i.type] = P("ON_PROPERTY" + i.type));
            const p = this || i.target || Y
              , o = p[c];
            let h;
            return ot && p === ue && "error" === i.type ? (h = o && o.call(this, i.message, i.filename, i.lineno, i.colno, i.error),
            !0 === h && i.preventDefault()) : (h = o && o.apply(this, arguments),
            "beforeunload" === i.type && Y[wt] && "string" == typeof h ? i.returnValue = h : null != h && !h && i.preventDefault()),
            h
        };
        function at(i, c, p) {
            let o = ge(i, c);
            if (!o && p && ge(p, c) && (o = {
                enumerable: !0,
                configurable: !0
            }),
            !o || !o.configurable)
                return;
            const h = P("on" + c + "patched");
            if (i.hasOwnProperty(h) && i[h])
                return;
            delete o.writable,
            delete o.value;
            const T = o.get
              , v = o.set
              , x = c.slice(2);
            let R = Ke[x];
            R || (R = Ke[x] = P("ON_PROPERTY" + x)),
            o.set = function(O) {
                let w = this;
                !w && i === Y && (w = Y),
                w && ("function" == typeof w[R] && w.removeEventListener(x, st),
                v && v.call(w, null),
                w[R] = O,
                "function" == typeof O && w.addEventListener(x, st, !1))
            }
            ,
            o.get = function() {
                let O = this;
                if (!O && i === Y && (O = Y),
                !O)
                    return null;
                const w = O[R];
                if (w)
                    return w;
                if (T) {
                    let N = T.call(this);
                    if (N)
                        return o.set.call(this, N),
                        "function" == typeof O[Ve] && O.removeAttribute(c),
                        N
                }
                return null
            }
            ,
            Re(i, c, o),
            i[h] = !0
        }
        function pt(i, c, p) {
            if (c)
                for (let o = 0; o < c.length; o++)
                    at(i, "on" + c[o], p);
            else {
                const o = [];
                for (const h in i)
                    "on" == h.slice(0, 2) && o.push(h);
                for (let h = 0; h < o.length; h++)
                    at(i, o[h], p)
            }
        }
        const Le = P("originalInstance");
        function Ye(i) {
            const c = Y[i];
            if (!c)
                return;
            Y[P(i)] = c,
            Y[i] = function() {
                const h = pe(arguments, i);
                switch (h.length) {
                case 0:
                    this[Le] = new c;
                    break;
                case 1:
                    this[Le] = new c(h[0]);
                    break;
                case 2:
                    this[Le] = new c(h[0],h[1]);
                    break;
                case 3:
                    this[Le] = new c(h[0],h[1],h[2]);
                    break;
                case 4:
                    this[Le] = new c(h[0],h[1],h[2],h[3]);
                    break;
                default:
                    throw new Error("Arg list too long.")
                }
            }
            ,
            ne(Y[i], c);
            const p = new c(function() {}
            );
            let o;
            for (o in p)
                "XMLHttpRequest" === i && "responseBlob" === o || function(h) {
                    "function" == typeof p[h] ? Y[i].prototype[h] = function() {
                        return this[Le][h].apply(this[Le], arguments)
                    }
                    : Re(Y[i].prototype, h, {
                        set: function(T) {
                            "function" == typeof T ? (this[Le][h] = X(T, i + "." + h),
                            ne(this[Le][h], T)) : this[Le][h] = T
                        },
                        get: function() {
                            return this[Le][h]
                        }
                    })
                }(o);
            for (o in c)
                "prototype" !== o && c.hasOwnProperty(o) && (Y[i][o] = c[o])
        }
        function Oe(i, c, p) {
            let o = i;
            for (; o && !o.hasOwnProperty(c); )
                o = se(o);
            !o && i[c] && (o = i);
            const h = P(c);
            let T = null;
            if (o && (!(T = o[h]) || !o.hasOwnProperty(h)) && (T = o[h] = o[c],
            it(o && ge(o, c)))) {
                const x = p(T, h, c);
                o[c] = function() {
                    return x(this, arguments)
                }
                ,
                ne(o[c], T)
            }
            return T
        }
        function kt(i, c, p) {
            let o = null;
            function h(T) {
                const v = T.data;
                return v.args[v.cbIdx] = function() {
                    T.invoke.apply(this, arguments)
                }
                ,
                o.apply(v.target, v.args),
                T
            }
            o = Oe(i, c, T => function(v, x) {
                const R = p(v, x);
                return R.cbIdx >= 0 && "function" == typeof x[R.cbIdx] ? K(R.name, x[R.cbIdx], R, h) : T.apply(v, x)
            }
            )
        }
        function ne(i, c) {
            i[P("OriginalDelegate")] = c
        }
        let Se = !1
          , Qe = !1;
        function Et() {
            if (Se)
                return Qe;
            Se = !0;
            try {
                const i = ue.navigator.userAgent;
                (-1 !== i.indexOf("MSIE ") || -1 !== i.indexOf("Trident/") || -1 !== i.indexOf("Edge/")) && (Qe = !0)
            } catch {}
            return Qe
        }
        function yt(i) {
            return "function" == typeof i
        }
        function _t(i) {
            return "number" == typeof i
        }
        let He = !1;
        if (typeof window < "u")
            try {
                const i = Object.defineProperty({}, "passive", {
                    get: function() {
                        He = !0
                    }
                });
                window.addEventListener("test", i, i),
                window.removeEventListener("test", i, i)
            } catch {
                He = !1
            }
        const vt = {
            useG: !0
        }
          , Ne = {}
          , ct = {}
          , $e = new RegExp("^" + A + "(\\w+)(true|false)$")
          , Me = P("propagationStopped");
        function et(i, c) {
            const p = (c ? c(i) : i) + be
              , o = (c ? c(i) : i) + re
              , h = A + p
              , T = A + o;
            Ne[i] = {},
            Ne[i][be] = h,
            Ne[i][re] = T
        }
        function xt(i, c, p, o) {
            const h = o && o.add || f
              , T = o && o.rm || Ae
              , v = o && o.listeners || "eventListeners"
              , x = o && o.rmAll || "removeAllListeners"
              , R = P(h)
              , O = "." + h + ":"
              , w = "prependListener"
              , N = "." + w + ":"
              , q = function(S, g, ee) {
                if (S.isRemoved)
                    return;
                const oe = S.callback;
                let ve;
                "object" == typeof oe && oe.handleEvent && (S.callback = b => oe.handleEvent(b),
                S.originalDelegate = oe);
                try {
                    S.invoke(S, g, [ee])
                } catch (b) {
                    ve = b
                }
                const le = S.options;
                return le && "object" == typeof le && le.once && g[T].call(g, ee.type, S.originalDelegate ? S.originalDelegate : S.callback, le),
                ve
            };
            function ie(S, g, ee) {
                if (!(g = g || i.event))
                    return;
                const oe = S || g.target || i
                  , ve = oe[Ne[g.type][ee ? re : be]];
                if (ve) {
                    const le = [];
                    if (1 === ve.length) {
                        const b = q(ve[0], oe, g);
                        b && le.push(b)
                    } else {
                        const b = ve.slice();
                        for (let ye = 0; ye < b.length && (!g || !0 !== g[Me]); ye++) {
                            const H = q(b[ye], oe, g);
                            H && le.push(H)
                        }
                    }
                    if (1 === le.length)
                        throw le[0];
                    for (let b = 0; b < le.length; b++) {
                        const ye = le[b];
                        c.nativeScheduleMicroTask( () => {
                            throw ye
                        }
                        )
                    }
                }
            }
            const Ee = function(S) {
                return ie(this, S, !1)
            }
              , Fe = function(S) {
                return ie(this, S, !0)
            };
            function Pe(S, g) {
                if (!S)
                    return !1;
                let ee = !0;
                g && void 0 !== g.useG && (ee = g.useG);
                const oe = g && g.vh;
                let ve = !0;
                g && void 0 !== g.chkDup && (ve = g.chkDup);
                let le = !1;
                g && void 0 !== g.rt && (le = g.rt);
                let b = S;
                for (; b && !b.hasOwnProperty(h); )
                    b = se(b);
                if (!b && S[h] && (b = S),
                !b || b[R])
                    return !1;
                const ye = g && g.eventNameToString
                  , H = {}
                  , L = b[R] = b[h]
                  , F = b[P(T)] = b[T]
                  , U = b[P(v)] = b[v]
                  , Be = b[P(x)] = b[x];
                let Te;
                g && g.prepend && (Te = b[P(g.prepend)] = b[g.prepend]);
                const me = ee ? function(l) {
                    if (!H.isExisting)
                        return L.call(H.target, H.eventName, H.capture ? Fe : Ee, H.options)
                }
                : function(l) {
                    return L.call(H.target, H.eventName, l.invoke, H.options)
                }
                  , J = ee ? function(l) {
                    if (!l.isRemoved) {
                        const _ = Ne[l.eventName];
                        let D;
                        _ && (D = _[l.capture ? re : be]);
                        const M = D && l.target[D];
                        if (M)
                            for (let C = 0; C < M.length; C++)
                                if (M[C] === l) {
                                    M.splice(C, 1),
                                    l.isRemoved = !0,
                                    l.removeAbortListener && (l.removeAbortListener(),
                                    l.removeAbortListener = null),
                                    0 === M.length && (l.allRemoved = !0,
                                    l.target[D] = null);
                                    break
                                }
                    }
                    if (l.allRemoved)
                        return F.call(l.target, l.eventName, l.capture ? Fe : Ee, l.options)
                }
                : function(l) {
                    return F.call(l.target, l.eventName, l.invoke, l.options)
                }
                  , We = g && g.diff ? g.diff : function(l, _) {
                    const D = typeof _;
                    return "function" === D && l.callback === _ || "object" === D && l.originalDelegate === _
                }
                  , ze = Zone[P("UNPATCHED_EVENTS")]
                  , Ue = i[P("PASSIVE_EVENTS")]
                  , y = function(l, _, D, M, C=!1, G=!1) {
                    return function() {
                        const W = this || i;
                        let z = arguments[0];
                        g && g.transferEventName && (z = g.transferEventName(z));
                        let fe = arguments[1];
                        if (!fe)
                            return l.apply(this, arguments);
                        if (Je && "uncaughtException" === z)
                            return l.apply(this, arguments);
                        let he = !1;
                        if ("function" != typeof fe) {
                            if (!fe.handleEvent)
                                return l.apply(this, arguments);
                            he = !0
                        }
                        if (oe && !oe(l, fe, W, arguments))
                            return;
                        const qe = He && !!Ue && -1 !== Ue.indexOf(z)
                          , je = function m(l) {
                            if ("object" == typeof l && null !== l) {
                                const _ = {
                                    ...l
                                };
                                return l.signal && (_.signal = l.signal),
                                _
                            }
                            return l
                        }(function j(l, _) {
                            return !He && "object" == typeof l && l ? !!l.capture : He && _ ? "boolean" == typeof l ? {
                                capture: l,
                                passive: !0
                            } : l ? "object" == typeof l && !1 !== l.passive ? {
                                ...l,
                                passive: !0
                            } : l : {
                                passive: !0
                            } : l
                        }(arguments[2], qe))
                          , rt = je?.signal;
                        if (rt?.aborted)
                            return;
                        if (ze)
                            for (let Ge = 0; Ge < ze.length; Ge++)
                                if (z === ze[Ge])
                                    return qe ? l.call(W, z, fe, je) : l.apply(this, arguments);
                        const bt = !!je && ("boolean" == typeof je || je.capture)
                          , At = !(!je || "object" != typeof je) && je.once
                          , Lt = Zone.current;
                        let Ct = Ne[z];
                        Ct || (et(z, ye),
                        Ct = Ne[z]);
                        const It = Ct[bt ? re : be];
                        let gt, nt = W[It], St = !1;
                        if (nt) {
                            if (St = !0,
                            ve)
                                for (let Ge = 0; Ge < nt.length; Ge++)
                                    if (We(nt[Ge], fe))
                                        return
                        } else
                            nt = W[It] = [];
                        const Dt = W.constructor.name
                          , Ft = ct[Dt];
                        Ft && (gt = Ft[z]),
                        gt || (gt = Dt + _ + (ye ? ye(z) : z)),
                        H.options = je,
                        At && (H.options.once = !1),
                        H.target = W,
                        H.capture = bt,
                        H.eventName = z,
                        H.isExisting = St;
                        const ut = ee ? vt : void 0;
                        ut && (ut.taskData = H),
                        rt && (H.options.signal = void 0);
                        const Ze = Lt.scheduleEventTask(gt, fe, ut, D, M);
                        if (rt) {
                            H.options.signal = rt;
                            const Ge = () => Ze.zone.cancelTask(Ze);
                            l.call(rt, "abort", Ge, {
                                once: !0
                            }),
                            Ze.removeAbortListener = () => rt.removeEventListener("abort", Ge)
                        }
                        return H.target = null,
                        ut && (ut.taskData = null),
                        At && (H.options.once = !0),
                        !He && "boolean" == typeof Ze.options || (Ze.options = je),
                        Ze.target = W,
                        Ze.capture = bt,
                        Ze.eventName = z,
                        he && (Ze.originalDelegate = fe),
                        G ? nt.unshift(Ze) : nt.push(Ze),
                        C ? W : void 0
                    }
                };
                return b[h] = y(L, O, me, J, le),
                Te && (b[w] = y(Te, N, function(l) {
                    return Te.call(H.target, H.eventName, l.invoke, H.options)
                }, J, le, !0)),
                b[T] = function() {
                    const l = this || i;
                    let _ = arguments[0];
                    g && g.transferEventName && (_ = g.transferEventName(_));
                    const D = arguments[2]
                      , M = !!D && ("boolean" == typeof D || D.capture)
                      , C = arguments[1];
                    if (!C)
                        return F.apply(this, arguments);
                    if (oe && !oe(F, C, l, arguments))
                        return;
                    const G = Ne[_];
                    let W;
                    G && (W = G[M ? re : be]);
                    const z = W && l[W];
                    if (z)
                        for (let fe = 0; fe < z.length; fe++) {
                            const he = z[fe];
                            if (We(he, C))
                                return z.splice(fe, 1),
                                he.isRemoved = !0,
                                0 !== z.length || (he.allRemoved = !0,
                                l[W] = null,
                                M || "string" != typeof _) || (l[A + "ON_PROPERTY" + _] = null),
                                he.zone.cancelTask(he),
                                le ? l : void 0
                        }
                    return F.apply(this, arguments)
                }
                ,
                b[v] = function() {
                    const l = this || i;
                    let _ = arguments[0];
                    g && g.transferEventName && (_ = g.transferEventName(_));
                    const D = []
                      , M = r(l, ye ? ye(_) : _);
                    for (let C = 0; C < M.length; C++) {
                        const G = M[C];
                        D.push(G.originalDelegate ? G.originalDelegate : G.callback)
                    }
                    return D
                }
                ,
                b[x] = function() {
                    const l = this || i;
                    let _ = arguments[0];
                    if (_) {
                        g && g.transferEventName && (_ = g.transferEventName(_));
                        const D = Ne[_];
                        if (D) {
                            const G = l[D[be]]
                              , W = l[D[re]];
                            if (G) {
                                const z = G.slice();
                                for (let fe = 0; fe < z.length; fe++) {
                                    const he = z[fe];
                                    this[T].call(this, _, he.originalDelegate ? he.originalDelegate : he.callback, he.options)
                                }
                            }
                            if (W) {
                                const z = W.slice();
                                for (let fe = 0; fe < z.length; fe++) {
                                    const he = z[fe];
                                    this[T].call(this, _, he.originalDelegate ? he.originalDelegate : he.callback, he.options)
                                }
                            }
                        }
                    } else {
                        const D = Object.keys(l);
                        for (let M = 0; M < D.length; M++) {
                            const G = $e.exec(D[M]);
                            let W = G && G[1];
                            W && "removeListener" !== W && this[x].call(this, W)
                        }
                        this[x].call(this, "removeListener")
                    }
                    if (le)
                        return this
                }
                ,
                ne(b[h], L),
                ne(b[T], F),
                Be && ne(b[x], Be),
                U && ne(b[v], U),
                !0
            }
            let ke = [];
            for (let S = 0; S < p.length; S++)
                ke[S] = Pe(p[S], o);
            return ke
        }
        function r(i, c) {
            if (!c) {
                const T = [];
                for (let v in i) {
                    const x = $e.exec(v);
                    let R = x && x[1];
                    if (R && (!c || R === c)) {
                        const O = i[v];
                        if (O)
                            for (let w = 0; w < O.length; w++)
                                T.push(O[w])
                    }
                }
                return T
            }
            let p = Ne[c];
            p || (et(c),
            p = Ne[c]);
            const o = i[p[be]]
              , h = i[p[re]];
            return o ? h ? o.concat(h) : o.slice() : h ? h.slice() : []
        }
        function e(i, c) {
            const p = i.Event;
            p && p.prototype && c.patchMethod(p.prototype, "stopImmediatePropagation", o => function(h, T) {
                h[Me] = !0,
                o && o.apply(h, T)
            }
            )
        }
        const n = P("zoneTask");
        function a(i, c, p, o) {
            let h = null
              , T = null;
            p += o;
            const v = {};
            function x(O) {
                const w = O.data;
                w.args[0] = function() {
                    return O.invoke.apply(this, arguments)
                }
                ;
                const N = h.apply(i, w.args);
                return _t(N) ? w.handleId = N : (w.handle = N,
                w.isRefreshable = yt(N.refresh)),
                O
            }
            function R(O) {
                const {handle: w, handleId: N} = O.data;
                return T.call(i, w ?? N)
            }
            h = Oe(i, c += o, O => function(w, N) {
                if (yt(N[0])) {
                    const q = {
                        isRefreshable: !1,
                        isPeriodic: "Interval" === o,
                        delay: "Timeout" === o || "Interval" === o ? N[1] || 0 : void 0,
                        args: N
                    }
                      , ie = N[0];
                    N[0] = function() {
                        try {
                            return ie.apply(this, arguments)
                        } finally {
                            const {handle: ee, handleId: oe, isPeriodic: ve, isRefreshable: le} = q;
                            !ve && !le && (oe ? delete v[oe] : ee && (ee[n] = null))
                        }
                    }
                    ;
                    const Ee = K(c, N[0], q, x, R);
                    if (!Ee)
                        return Ee;
                    const {handleId: Fe, handle: Pe, isRefreshable: ke, isPeriodic: S} = Ee.data;
                    if (Fe)
                        v[Fe] = Ee;
                    else if (Pe && (Pe[n] = Ee,
                    ke && !S)) {
                        const g = Pe.refresh;
                        Pe.refresh = function() {
                            const {zone: ee, state: oe} = Ee;
                            return "notScheduled" === oe ? (Ee._state = "scheduled",
                            ee._updateTaskCount(Ee, 1)) : "running" === oe && (Ee._state = "scheduling"),
                            g.call(this)
                        }
                    }
                    return Pe ?? Fe ?? Ee
                }
                return O.apply(i, N)
            }
            ),
            T = Oe(i, p, O => function(w, N) {
                const q = N[0];
                let ie;
                _t(q) ? (ie = v[q],
                delete v[q]) : (ie = q?.[n],
                ie ? q[n] = null : ie = q),
                ie?.type ? ie.cancelFn && ie.zone.cancelTask(ie) : O.apply(i, N)
            }
            )
        }
        function Q(i, c, p) {
            if (!p || 0 === p.length)
                return c;
            const o = p.filter(T => T.target === i);
            if (!o || 0 === o.length)
                return c;
            const h = o[0].ignoreProperties;
            return c.filter(T => -1 === h.indexOf(T))
        }
        function ae(i, c, p, o) {
            i && pt(i, Q(i, c, p), o)
        }
        function Ce(i) {
            return Object.getOwnPropertyNames(i).filter(c => c.startsWith("on") && c.length > 2).map(c => c.substring(2))
        }
        function Pt(i, c, p, o, h) {
            const T = Zone.__symbol__(o);
            if (c[T])
                return;
            const v = c[T] = c[o];
            c[o] = function(x, R, O) {
                return R && R.prototype && h.forEach(function(w) {
                    const N = `${p}.${o}::` + w
                      , q = R.prototype;
                    try {
                        if (q.hasOwnProperty(w)) {
                            const ie = i.ObjectGetOwnPropertyDescriptor(q, w);
                            ie && ie.value ? (ie.value = i.wrapWithCurrentZone(ie.value, N),
                            i._redefineProperty(R.prototype, w, ie)) : q[w] && (q[w] = i.wrapWithCurrentZone(q[w], N))
                        } else
                            q[w] && (q[w] = i.wrapWithCurrentZone(q[w], N))
                    } catch {}
                }),
                v.call(c, x, R, O)
            }
            ,
            i.attachOriginToPatched(c[o], v)
        }
        const Rt = function Z() {
            const i = globalThis
              , c = !0 === i[te("forceDuplicateZoneCheck")];
            if (i.Zone && (c || "function" != typeof i.Zone.__symbol__))
                throw new Error("Zone already loaded.");
            return i.Zone ??= function ce() {
                const i = Ie.performance;
                function c(j) {
                    i && i.mark && i.mark(j)
                }
                function p(j, k) {
                    i && i.measure && i.measure(j, k)
                }
                c("Zone");
                let o = ( () => {
                    class j {
                        static{this.__symbol__ = te
                        }static assertZonePatched() {
                            if (Ie.Promise !== H.ZoneAwarePromise)
                                throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let s = j.current;
                            for (; s.parent; )
                                s = s.parent;
                            return s
                        }
                        static get current() {
                            return F.zone
                        }
                        static get currentTask() {
                            return U
                        }
                        static __load_patch(s, u, I=!1) {
                            if (H.hasOwnProperty(s)) {
                                const B = !0 === Ie[te("forceDuplicateZoneCheck")];
                                if (!I && B)
                                    throw Error("Already loaded patch: " + s)
                            } else if (!Ie["__Zone_disable_" + s]) {
                                const B = "Zone:" + s;
                                c(B),
                                H[s] = u(Ie, j, L),
                                p(B, B)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        constructor(s, u) {
                            this._parent = s,
                            this._name = u ? u.name || "unnamed" : "<root>",
                            this._properties = u && u.properties || {},
                            this._zoneDelegate = new T(this,this._parent && this._parent._zoneDelegate,u)
                        }
                        get(s) {
                            const u = this.getZoneWith(s);
                            if (u)
                                return u._properties[s]
                        }
                        getZoneWith(s) {
                            let u = this;
                            for (; u; ) {
                                if (u._properties.hasOwnProperty(s))
                                    return u;
                                u = u._parent
                            }
                            return null
                        }
                        fork(s) {
                            if (!s)
                                throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, s)
                        }
                        wrap(s, u) {
                            if ("function" != typeof s)
                                throw new Error("Expecting function got: " + s);
                            const I = this._zoneDelegate.intercept(this, s, u)
                              , B = this;
                            return function() {
                                return B.runGuarded(I, this, arguments, u)
                            }
                        }
                        run(s, u, I, B) {
                            F = {
                                parent: F,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, s, u, I, B)
                            } finally {
                                F = F.parent
                            }
                        }
                        runGuarded(s, u=null, I, B) {
                            F = {
                                parent: F,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, s, u, I, B)
                                } catch (me) {
                                    if (this._zoneDelegate.handleError(this, me))
                                        throw me
                                }
                            } finally {
                                F = F.parent
                            }
                        }
                        runTask(s, u, I) {
                            if (s.zone != this)
                                throw new Error("A task can only be run in the zone of creation! (Creation: " + (s.zone || Pe).name + "; Execution: " + this.name + ")");
                            const B = s
                              , {type: me, data: {isPeriodic: J=!1, isRefreshable: Xe=!1}={}} = s;
                            if (s.state === ke && (me === ye || me === b))
                                return;
                            const We = s.state != ee;
                            We && B._transitionTo(ee, g);
                            const ze = U;
                            U = B,
                            F = {
                                parent: F,
                                zone: this
                            };
                            try {
                                me == b && s.data && !J && !Xe && (s.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, B, u, I)
                                } catch (Ue) {
                                    if (this._zoneDelegate.handleError(this, Ue))
                                        throw Ue
                                }
                            } finally {
                                const Ue = s.state;
                                if (Ue !== ke && Ue !== ve)
                                    if (me == ye || J || Xe && Ue === S)
                                        We && B._transitionTo(g, ee, S);
                                    else {
                                        const m = B._zoneDelegates;
                                        this._updateTaskCount(B, -1),
                                        We && B._transitionTo(ke, ee, ke),
                                        Xe && (B._zoneDelegates = m)
                                    }
                                F = F.parent,
                                U = ze
                            }
                        }
                        scheduleTask(s) {
                            if (s.zone && s.zone !== this) {
                                let I = this;
                                for (; I; ) {
                                    if (I === s.zone)
                                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);
                                    I = I.parent
                                }
                            }
                            s._transitionTo(S, ke);
                            const u = [];
                            s._zoneDelegates = u,
                            s._zone = this;
                            try {
                                s = this._zoneDelegate.scheduleTask(this, s)
                            } catch (I) {
                                throw s._transitionTo(ve, S, ke),
                                this._zoneDelegate.handleError(this, I),
                                I
                            }
                            return s._zoneDelegates === u && this._updateTaskCount(s, 1),
                            s.state == S && s._transitionTo(g, S),
                            s
                        }
                        scheduleMicroTask(s, u, I, B) {
                            return this.scheduleTask(new v(le,s,u,I,B,void 0))
                        }
                        scheduleMacroTask(s, u, I, B, me) {
                            return this.scheduleTask(new v(b,s,u,I,B,me))
                        }
                        scheduleEventTask(s, u, I, B, me) {
                            return this.scheduleTask(new v(ye,s,u,I,B,me))
                        }
                        cancelTask(s) {
                            if (s.zone != this)
                                throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (s.zone || Pe).name + "; Execution: " + this.name + ")");
                            if (s.state === g || s.state === ee) {
                                s._transitionTo(oe, g, ee);
                                try {
                                    this._zoneDelegate.cancelTask(this, s)
                                } catch (u) {
                                    throw s._transitionTo(ve, oe),
                                    this._zoneDelegate.handleError(this, u),
                                    u
                                }
                                return this._updateTaskCount(s, -1),
                                s._transitionTo(ke, oe),
                                s.runCount = -1,
                                s
                            }
                        }
                        _updateTaskCount(s, u) {
                            const I = s._zoneDelegates;
                            -1 == u && (s._zoneDelegates = null);
                            for (let B = 0; B < I.length; B++)
                                I[B]._updateTaskCount(s.type, u)
                        }
                    }
                    return j
                }
                )();
                const h = {
                    name: "",
                    onHasTask: (j, k, s, u) => j.hasTask(s, u),
                    onScheduleTask: (j, k, s, u) => j.scheduleTask(s, u),
                    onInvokeTask: (j, k, s, u, I, B) => j.invokeTask(s, u, I, B),
                    onCancelTask: (j, k, s, u) => j.cancelTask(s, u)
                };
                class T {
                    get zone() {
                        return this._zone
                    }
                    constructor(k, s, u) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        },
                        this._zone = k,
                        this._parentDelegate = s,
                        this._forkZS = u && (u && u.onFork ? u : s._forkZS),
                        this._forkDlgt = u && (u.onFork ? s : s._forkDlgt),
                        this._forkCurrZone = u && (u.onFork ? this._zone : s._forkCurrZone),
                        this._interceptZS = u && (u.onIntercept ? u : s._interceptZS),
                        this._interceptDlgt = u && (u.onIntercept ? s : s._interceptDlgt),
                        this._interceptCurrZone = u && (u.onIntercept ? this._zone : s._interceptCurrZone),
                        this._invokeZS = u && (u.onInvoke ? u : s._invokeZS),
                        this._invokeDlgt = u && (u.onInvoke ? s : s._invokeDlgt),
                        this._invokeCurrZone = u && (u.onInvoke ? this._zone : s._invokeCurrZone),
                        this._handleErrorZS = u && (u.onHandleError ? u : s._handleErrorZS),
                        this._handleErrorDlgt = u && (u.onHandleError ? s : s._handleErrorDlgt),
                        this._handleErrorCurrZone = u && (u.onHandleError ? this._zone : s._handleErrorCurrZone),
                        this._scheduleTaskZS = u && (u.onScheduleTask ? u : s._scheduleTaskZS),
                        this._scheduleTaskDlgt = u && (u.onScheduleTask ? s : s._scheduleTaskDlgt),
                        this._scheduleTaskCurrZone = u && (u.onScheduleTask ? this._zone : s._scheduleTaskCurrZone),
                        this._invokeTaskZS = u && (u.onInvokeTask ? u : s._invokeTaskZS),
                        this._invokeTaskDlgt = u && (u.onInvokeTask ? s : s._invokeTaskDlgt),
                        this._invokeTaskCurrZone = u && (u.onInvokeTask ? this._zone : s._invokeTaskCurrZone),
                        this._cancelTaskZS = u && (u.onCancelTask ? u : s._cancelTaskZS),
                        this._cancelTaskDlgt = u && (u.onCancelTask ? s : s._cancelTaskDlgt),
                        this._cancelTaskCurrZone = u && (u.onCancelTask ? this._zone : s._cancelTaskCurrZone),
                        this._hasTaskZS = null,
                        this._hasTaskDlgt = null,
                        this._hasTaskDlgtOwner = null,
                        this._hasTaskCurrZone = null;
                        const I = u && u.onHasTask;
                        (I || s && s._hasTaskZS) && (this._hasTaskZS = I ? u : h,
                        this._hasTaskDlgt = s,
                        this._hasTaskDlgtOwner = this,
                        this._hasTaskCurrZone = this._zone,
                        u.onScheduleTask || (this._scheduleTaskZS = h,
                        this._scheduleTaskDlgt = s,
                        this._scheduleTaskCurrZone = this._zone),
                        u.onInvokeTask || (this._invokeTaskZS = h,
                        this._invokeTaskDlgt = s,
                        this._invokeTaskCurrZone = this._zone),
                        u.onCancelTask || (this._cancelTaskZS = h,
                        this._cancelTaskDlgt = s,
                        this._cancelTaskCurrZone = this._zone))
                    }
                    fork(k, s) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, k, s) : new o(k,s)
                    }
                    intercept(k, s, u) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, k, s, u) : s
                    }
                    invoke(k, s, u, I, B) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, k, s, u, I, B) : s.apply(u, I)
                    }
                    handleError(k, s) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, k, s)
                    }
                    scheduleTask(k, s) {
                        let u = s;
                        if (this._scheduleTaskZS)
                            this._hasTaskZS && u._zoneDelegates.push(this._hasTaskDlgtOwner),
                            u = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, k, s),
                            u || (u = s);
                        else if (s.scheduleFn)
                            s.scheduleFn(s);
                        else {
                            if (s.type != le)
                                throw new Error("Task is missing scheduleFn.");
                            Ee(s)
                        }
                        return u
                    }
                    invokeTask(k, s, u, I) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, k, s, u, I) : s.callback.apply(u, I)
                    }
                    cancelTask(k, s) {
                        let u;
                        if (this._cancelTaskZS)
                            u = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, k, s);
                        else {
                            if (!s.cancelFn)
                                throw Error("Task is not cancelable");
                            u = s.cancelFn(s)
                        }
                        return u
                    }
                    hasTask(k, s) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, k, s)
                        } catch (u) {
                            this.handleError(k, u)
                        }
                    }
                    _updateTaskCount(k, s) {
                        const u = this._taskCounts
                          , I = u[k]
                          , B = u[k] = I + s;
                        if (B < 0)
                            throw new Error("More tasks executed then were scheduled.");
                        0 != I && 0 != B || this.hasTask(this._zone, {
                            microTask: u.microTask > 0,
                            macroTask: u.macroTask > 0,
                            eventTask: u.eventTask > 0,
                            change: k
                        })
                    }
                }
                class v {
                    constructor(k, s, u, I, B, me) {
                        if (this._zone = null,
                        this.runCount = 0,
                        this._zoneDelegates = null,
                        this._state = "notScheduled",
                        this.type = k,
                        this.source = s,
                        this.data = I,
                        this.scheduleFn = B,
                        this.cancelFn = me,
                        !u)
                            throw new Error("callback is not defined");
                        this.callback = u;
                        const J = this;
                        this.invoke = k === ye && I && I.useG ? v.invokeTask : function() {
                            return v.invokeTask.call(Ie, J, this, arguments)
                        }
                    }
                    static invokeTask(k, s, u) {
                        k || (k = this),
                        Be++;
                        try {
                            return k.runCount++,
                            k.zone.runTask(k, s, u)
                        } finally {
                            1 == Be && Fe(),
                            Be--
                        }
                    }
                    get zone() {
                        return this._zone
                    }
                    get state() {
                        return this._state
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(ke, S)
                    }
                    _transitionTo(k, s, u) {
                        if (this._state !== s && this._state !== u)
                            throw new Error(`${this.type} '${this.source}': can not transition to '${k}', expecting state '${s}'${u ? " or '" + u + "'" : ""}, was '${this._state}'.`);
                        this._state = k,
                        k == ke && (this._zoneDelegates = null)
                    }
                    toString() {
                        return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        }
                    }
                }
                const x = te("setTimeout")
                  , R = te("Promise")
                  , O = te("then");
                let q, w = [], N = !1;
                function ie(j) {
                    if (q || Ie[R] && (q = Ie[R].resolve(0)),
                    q) {
                        let k = q[O];
                        k || (k = q.then),
                        k.call(q, j)
                    } else
                        Ie[x](j, 0)
                }
                function Ee(j) {
                    0 === Be && 0 === w.length && ie(Fe),
                    j && w.push(j)
                }
                function Fe() {
                    if (!N) {
                        for (N = !0; w.length; ) {
                            const j = w;
                            w = [];
                            for (let k = 0; k < j.length; k++) {
                                const s = j[k];
                                try {
                                    s.zone.runTask(s, null, null)
                                } catch (u) {
                                    L.onUnhandledError(u)
                                }
                            }
                        }
                        L.microtaskDrainDone(),
                        N = !1
                    }
                }
                const Pe = {
                    name: "NO ZONE"
                }
                  , ke = "notScheduled"
                  , S = "scheduling"
                  , g = "scheduled"
                  , ee = "running"
                  , oe = "canceling"
                  , ve = "unknown"
                  , le = "microTask"
                  , b = "macroTask"
                  , ye = "eventTask"
                  , H = {}
                  , L = {
                    symbol: te,
                    currentZoneFrame: () => F,
                    onUnhandledError: Te,
                    microtaskDrainDone: Te,
                    scheduleMicroTask: Ee,
                    showUncaughtError: () => !o[te("ignoreConsoleErrorUncaughtError")],
                    patchEventTarget: () => [],
                    patchOnProperties: Te,
                    patchMethod: () => Te,
                    bindArguments: () => [],
                    patchThen: () => Te,
                    patchMacroTask: () => Te,
                    patchEventPrototype: () => Te,
                    isIEOrEdge: () => !1,
                    getGlobalObjects: () => {}
                    ,
                    ObjectDefineProperty: () => Te,
                    ObjectGetOwnPropertyDescriptor: () => {}
                    ,
                    ObjectCreate: () => {}
                    ,
                    ArraySlice: () => [],
                    patchClass: () => Te,
                    wrapWithCurrentZone: () => Te,
                    filterProperties: () => [],
                    attachOriginToPatched: () => Te,
                    _redefineProperty: () => Te,
                    patchCallbacks: () => Te,
                    nativeScheduleMicroTask: ie
                };
                let F = {
                    parent: null,
                    zone: new o(null,null)
                }
                  , U = null
                  , Be = 0;
                function Te() {}
                return p("Zone", "Zone"),
                o
            }(),
            i.Zone
        }();
        (function Nt(i) {
            (function Tt(i) {
                i.__load_patch("ZoneAwarePromise", (c, p, o) => {
                    const h = Object.getOwnPropertyDescriptor
                      , T = Object.defineProperty
                      , x = o.symbol
                      , R = []
                      , O = !1 !== c[x("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]
                      , w = x("Promise")
                      , N = x("then")
                      , q = "__creationTrace__";
                    o.onUnhandledError = m => {
                        if (o.showUncaughtError()) {
                            const y = m && m.rejection;
                            y ? console.error("Unhandled Promise rejection:", y instanceof Error ? y.message : y, "; Zone:", m.zone.name, "; Task:", m.task && m.task.source, "; Value:", y, y instanceof Error ? y.stack : void 0) : console.error(m)
                        }
                    }
                    ,
                    o.microtaskDrainDone = () => {
                        for (; R.length; ) {
                            const m = R.shift();
                            try {
                                m.zone.runGuarded( () => {
                                    throw m.throwOriginal ? m.rejection : m
                                }
                                )
                            } catch (y) {
                                Ee(y)
                            }
                        }
                    }
                    ;
                    const ie = x("unhandledPromiseRejectionHandler");
                    function Ee(m) {
                        o.onUnhandledError(m);
                        try {
                            const y = p[ie];
                            "function" == typeof y && y.call(this, m)
                        } catch {}
                    }
                    function Fe(m) {
                        return m && m.then
                    }
                    function Pe(m) {
                        return m
                    }
                    function ke(m) {
                        return J.reject(m)
                    }
                    const S = x("state")
                      , g = x("value")
                      , ee = x("finally")
                      , oe = x("parentPromiseValue")
                      , ve = x("parentPromiseState")
                      , le = "Promise.then"
                      , b = null
                      , ye = !0
                      , H = !1
                      , L = 0;
                    function F(m, y) {
                        return l => {
                            try {
                                j(m, y, l)
                            } catch (_) {
                                j(m, !1, _)
                            }
                        }
                    }
                    const U = function() {
                        let m = !1;
                        return function(l) {
                            return function() {
                                m || (m = !0,
                                l.apply(null, arguments))
                            }
                        }
                    }
                      , Be = "Promise resolved with itself"
                      , Te = x("currentTaskTrace");
                    function j(m, y, l) {
                        const _ = U();
                        if (m === l)
                            throw new TypeError(Be);
                        if (m[S] === b) {
                            let D = null;
                            try {
                                ("object" == typeof l || "function" == typeof l) && (D = l && l.then)
                            } catch (M) {
                                return _( () => {
                                    j(m, !1, M)
                                }
                                )(),
                                m
                            }
                            if (y !== H && l instanceof J && l.hasOwnProperty(S) && l.hasOwnProperty(g) && l[S] !== b)
                                s(l),
                                j(m, l[S], l[g]);
                            else if (y !== H && "function" == typeof D)
                                try {
                                    D.call(l, _(F(m, y)), _(F(m, !1)))
                                } catch (M) {
                                    _( () => {
                                        j(m, !1, M)
                                    }
                                    )()
                                }
                            else {
                                m[S] = y;
                                const M = m[g];
                                if (m[g] = l,
                                m[ee] === ee && y === ye && (m[S] = m[ve],
                                m[g] = m[oe]),
                                y === H && l instanceof Error) {
                                    const C = p.currentTask && p.currentTask.data && p.currentTask.data[q];
                                    C && T(l, Te, {
                                        configurable: !0,
                                        enumerable: !1,
                                        writable: !0,
                                        value: C
                                    })
                                }
                                for (let C = 0; C < M.length; )
                                    u(m, M[C++], M[C++], M[C++], M[C++]);
                                if (0 == M.length && y == H) {
                                    m[S] = L;
                                    let C = l;
                                    try {
                                        throw new Error("Uncaught (in promise): " + function v(m) {
                                            return m && m.toString === Object.prototype.toString ? (m.constructor && m.constructor.name || "") + ": " + JSON.stringify(m) : m ? m.toString() : Object.prototype.toString.call(m)
                                        }(l) + (l && l.stack ? "\n" + l.stack : ""))
                                    } catch (G) {
                                        C = G
                                    }
                                    O && (C.throwOriginal = !0),
                                    C.rejection = l,
                                    C.promise = m,
                                    C.zone = p.current,
                                    C.task = p.currentTask,
                                    R.push(C),
                                    o.scheduleMicroTask()
                                }
                            }
                        }
                        return m
                    }
                    const k = x("rejectionHandledHandler");
                    function s(m) {
                        if (m[S] === L) {
                            try {
                                const y = p[k];
                                y && "function" == typeof y && y.call(this, {
                                    rejection: m[g],
                                    promise: m
                                })
                            } catch {}
                            m[S] = H;
                            for (let y = 0; y < R.length; y++)
                                m === R[y].promise && R.splice(y, 1)
                        }
                    }
                    function u(m, y, l, _, D) {
                        s(m);
                        const M = m[S]
                          , C = M ? "function" == typeof _ ? _ : Pe : "function" == typeof D ? D : ke;
                        y.scheduleMicroTask(le, () => {
                            try {
                                const G = m[g]
                                  , W = !!l && ee === l[ee];
                                W && (l[oe] = G,
                                l[ve] = M);
                                const z = y.run(C, void 0, W && C !== ke && C !== Pe ? [] : [G]);
                                j(l, !0, z)
                            } catch (G) {
                                j(l, !1, G)
                            }
                        }
                        , l)
                    }
                    const B = function() {}
                      , me = c.AggregateError;
                    class J {
                        static toString() {
                            return "function ZoneAwarePromise() { [native code] }"
                        }
                        static resolve(y) {
                            return y instanceof J ? y : j(new this(null), ye, y)
                        }
                        static reject(y) {
                            return j(new this(null), H, y)
                        }
                        static withResolvers() {
                            const y = {};
                            return y.promise = new J( (l, _) => {
                                y.resolve = l,
                                y.reject = _
                            }
                            ),
                            y
                        }
                        static any(y) {
                            if (!y || "function" != typeof y[Symbol.iterator])
                                return Promise.reject(new me([],"All promises were rejected"));
                            const l = [];
                            let _ = 0;
                            try {
                                for (let C of y)
                                    _++,
                                    l.push(J.resolve(C))
                            } catch {
                                return Promise.reject(new me([],"All promises were rejected"))
                            }
                            if (0 === _)
                                return Promise.reject(new me([],"All promises were rejected"));
                            let D = !1;
                            const M = [];
                            return new J( (C, G) => {
                                for (let W = 0; W < l.length; W++)
                                    l[W].then(z => {
                                        D || (D = !0,
                                        C(z))
                                    }
                                    , z => {
                                        M.push(z),
                                        _--,
                                        0 === _ && (D = !0,
                                        G(new me(M,"All promises were rejected")))
                                    }
                                    )
                            }
                            )
                        }
                        static race(y) {
                            let l, _, D = new this( (G, W) => {
                                l = G,
                                _ = W
                            }
                            );
                            function M(G) {
                                l(G)
                            }
                            function C(G) {
                                _(G)
                            }
                            for (let G of y)
                                Fe(G) || (G = this.resolve(G)),
                                G.then(M, C);
                            return D
                        }
                        static all(y) {
                            return J.allWithCallback(y)
                        }
                        static allSettled(y) {
                            return (this && this.prototype instanceof J ? this : J).allWithCallback(y, {
                                thenCallback: _ => ({
                                    status: "fulfilled",
                                    value: _
                                }),
                                errorCallback: _ => ({
                                    status: "rejected",
                                    reason: _
                                })
                            })
                        }
                        static allWithCallback(y, l) {
                            let _, D, M = new this( (z, fe) => {
                                _ = z,
                                D = fe
                            }
                            ), C = 2, G = 0;
                            const W = [];
                            for (let z of y) {
                                Fe(z) || (z = this.resolve(z));
                                const fe = G;
                                try {
                                    z.then(he => {
                                        W[fe] = l ? l.thenCallback(he) : he,
                                        C--,
                                        0 === C && _(W)
                                    }
                                    , he => {
                                        l ? (W[fe] = l.errorCallback(he),
                                        C--,
                                        0 === C && _(W)) : D(he)
                                    }
                                    )
                                } catch (he) {
                                    D(he)
                                }
                                C++,
                                G++
                            }
                            return C -= 2,
                            0 === C && _(W),
                            M
                        }
                        constructor(y) {
                            const l = this;
                            if (!(l instanceof J))
                                throw new Error("Must be an instanceof Promise.");
                            l[S] = b,
                            l[g] = [];
                            try {
                                const _ = U();
                                y && y(_(F(l, ye)), _(F(l, H)))
                            } catch (_) {
                                j(l, !1, _)
                            }
                        }
                        get[Symbol.toStringTag]() {
                            return "Promise"
                        }
                        get[Symbol.species]() {
                            return J
                        }
                        then(y, l) {
                            let _ = this.constructor?.[Symbol.species];
                            (!_ || "function" != typeof _) && (_ = this.constructor || J);
                            const D = new _(B)
                              , M = p.current;
                            return this[S] == b ? this[g].push(M, D, y, l) : u(this, M, D, y, l),
                            D
                        }
                        catch(y) {
                            return this.then(null, y)
                        }
                        finally(y) {
                            let l = this.constructor?.[Symbol.species];
                            (!l || "function" != typeof l) && (l = J);
                            const _ = new l(B);
                            _[ee] = ee;
                            const D = p.current;
                            return this[S] == b ? this[g].push(D, _, y, y) : u(this, D, _, y, y),
                            _
                        }
                    }
                    J.resolve = J.resolve,
                    J.reject = J.reject,
                    J.race = J.race,
                    J.all = J.all;
                    const Xe = c[w] = c.Promise;
                    c.Promise = J;
                    const We = x("thenPatched");
                    function ze(m) {
                        const y = m.prototype
                          , l = h(y, "then");
                        if (l && (!1 === l.writable || !l.configurable))
                            return;
                        const _ = y.then;
                        y[N] = _,
                        m.prototype.then = function(D, M) {
                            return new J( (G, W) => {
                                _.call(this, G, W)
                            }
                            ).then(D, M)
                        }
                        ,
                        m[We] = !0
                    }
                    return o.patchThen = ze,
                    Xe && (ze(Xe),
                    Oe(c, "fetch", m => function Ue(m) {
                        return function(y, l) {
                            let _ = m.apply(y, l);
                            if (_ instanceof J)
                                return _;
                            let D = _.constructor;
                            return D[We] || ze(D),
                            _
                        }
                    }(m))),
                    Promise[p.__symbol__("uncaughtPromiseErrors")] = R,
                    J
                }
                )
            }
            )(i),
            function mt(i) {
                i.__load_patch("toString", c => {
                    const p = Function.prototype.toString
                      , o = P("OriginalDelegate")
                      , h = P("Promise")
                      , T = P("Error")
                      , v = function() {
                        if ("function" == typeof this) {
                            const w = this[o];
                            if (w)
                                return "function" == typeof w ? p.call(w) : Object.prototype.toString.call(w);
                            if (this === Promise) {
                                const N = c[h];
                                if (N)
                                    return p.call(N)
                            }
                            if (this === Error) {
                                const N = c[T];
                                if (N)
                                    return p.call(N)
                            }
                        }
                        return p.call(this)
                    };
                    v[o] = p,
                    Function.prototype.toString = v;
                    const x = Object.prototype.toString;
                    Object.prototype.toString = function() {
                        return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : x.call(this)
                    }
                }
                )
            }(i),
            function Bt(i) {
                i.__load_patch("util", (c, p, o) => {
                    const h = Ce(c);
                    o.patchOnProperties = pt,
                    o.patchMethod = Oe,
                    o.bindArguments = pe,
                    o.patchMacroTask = kt;
                    const T = p.__symbol__("BLACK_LISTED_EVENTS")
                      , v = p.__symbol__("UNPATCHED_EVENTS");
                    c[v] && (c[T] = c[v]),
                    c[T] && (p[T] = p[v] = c[T]),
                    o.patchEventPrototype = e,
                    o.patchEventTarget = xt,
                    o.isIEOrEdge = Et,
                    o.ObjectDefineProperty = Re,
                    o.ObjectGetOwnPropertyDescriptor = ge,
                    o.ObjectCreate = xe,
                    o.ArraySlice = V,
                    o.patchClass = Ye,
                    o.wrapWithCurrentZone = X,
                    o.filterProperties = Q,
                    o.attachOriginToPatched = ne,
                    o._redefineProperty = Object.defineProperty,
                    o.patchCallbacks = Pt,
                    o.getGlobalObjects = () => ({
                        globalSources: ct,
                        zoneSymbolEventNames: Ne,
                        eventNames: h,
                        isBrowser: ot,
                        isMix: ht,
                        isNode: Je,
                        TRUE_STR: re,
                        FALSE_STR: be,
                        ZONE_SYMBOL_PREFIX: A,
                        ADD_EVENT_LISTENER_STR: f,
                        REMOVE_EVENT_LISTENER_STR: Ae
                    })
                }
                )
            }(i)
        }
        )(Rt),
        function tt(i) {
            i.__load_patch("legacy", c => {
                const p = c[i.__symbol__("legacyPatch")];
                p && p()
            }
            ),
            i.__load_patch("timers", c => {
                const p = "set"
                  , o = "clear";
                a(c, p, o, "Timeout"),
                a(c, p, o, "Interval"),
                a(c, p, o, "Immediate")
            }
            ),
            i.__load_patch("requestAnimationFrame", c => {
                a(c, "request", "cancel", "AnimationFrame"),
                a(c, "mozRequest", "mozCancel", "AnimationFrame"),
                a(c, "webkitRequest", "webkitCancel", "AnimationFrame")
            }
            ),
            i.__load_patch("blocking", (c, p) => {
                const o = ["alert", "prompt", "confirm"];
                for (let h = 0; h < o.length; h++)
                    Oe(c, o[h], (v, x, R) => function(O, w) {
                        return p.current.run(v, c, w, R)
                    }
                    )
            }
            ),
            i.__load_patch("EventTarget", (c, p, o) => {
                (function $(i, c) {
                    c.patchEventPrototype(i, c)
                }
                )(c, o),
                function E(i, c) {
                    if (Zone[c.symbol("patchEventTarget")])
                        return;
                    const {eventNames: p, zoneSymbolEventNames: o, TRUE_STR: h, FALSE_STR: T, ZONE_SYMBOL_PREFIX: v} = c.getGlobalObjects();
                    for (let R = 0; R < p.length; R++) {
                        const O = p[R]
                          , q = v + (O + T)
                          , ie = v + (O + h);
                        o[O] = {},
                        o[O][T] = q,
                        o[O][h] = ie
                    }
                    const x = i.EventTarget;
                    x && x.prototype && c.patchEventTarget(i, c, [x && x.prototype])
                }(c, o);
                const h = c.XMLHttpRequestEventTarget;
                h && h.prototype && o.patchEventTarget(c, o, [h.prototype])
            }
            ),
            i.__load_patch("MutationObserver", (c, p, o) => {
                Ye("MutationObserver"),
                Ye("WebKitMutationObserver")
            }
            ),
            i.__load_patch("IntersectionObserver", (c, p, o) => {
                Ye("IntersectionObserver")
            }
            ),
            i.__load_patch("FileReader", (c, p, o) => {
                Ye("FileReader")
            }
            ),
            i.__load_patch("on_property", (c, p, o) => {
                !function de(i, c) {
                    if (Je && !ht || Zone[i.symbol("patchEvents")])
                        return;
                    const p = c.__Zone_ignore_on_properties;
                    let o = [];
                    if (ot) {
                        const h = window;
                        o = o.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const T = function dt() {
                            try {
                                const i = ue.navigator.userAgent;
                                if (-1 !== i.indexOf("MSIE ") || -1 !== i.indexOf("Trident/"))
                                    return !0
                            } catch {}
                            return !1
                        }() ? [{
                            target: h,
                            ignoreProperties: ["error"]
                        }] : [];
                        ae(h, Ce(h), p && p.concat(T), se(h))
                    }
                    o = o.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let h = 0; h < o.length; h++) {
                        const T = c[o[h]];
                        T && T.prototype && ae(T.prototype, Ce(T.prototype), p)
                    }
                }(o, c)
            }
            ),
            i.__load_patch("customElements", (c, p, o) => {
                !function d(i, c) {
                    const {isBrowser: p, isMix: o} = c.getGlobalObjects();
                    (p || o) && i.customElements && "customElements"in i && c.patchCallbacks(c, i.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"])
                }(c, o)
            }
            ),
            i.__load_patch("XHR", (c, p) => {
                !function O(w) {
                    const N = w.XMLHttpRequest;
                    if (!N)
                        return;
                    const q = N.prototype;
                    let Ee = q[De]
                      , Fe = q[_e];
                    if (!Ee) {
                        const L = w.XMLHttpRequestEventTarget;
                        if (L) {
                            const F = L.prototype;
                            Ee = F[De],
                            Fe = F[_e]
                        }
                    }
                    const Pe = "readystatechange"
                      , ke = "scheduled";
                    function S(L) {
                        const F = L.data
                          , U = F.target;
                        U[v] = !1,
                        U[R] = !1;
                        const Be = U[T];
                        Ee || (Ee = U[De],
                        Fe = U[_e]),
                        Be && Fe.call(U, Pe, Be);
                        const Te = U[T] = () => {
                            if (U.readyState === U.DONE)
                                if (!F.aborted && U[v] && L.state === ke) {
                                    const k = U[p.__symbol__("loadfalse")];
                                    if (0 !== U.status && k && k.length > 0) {
                                        const s = L.invoke;
                                        L.invoke = function() {
                                            const u = U[p.__symbol__("loadfalse")];
                                            for (let I = 0; I < u.length; I++)
                                                u[I] === L && u.splice(I, 1);
                                            !F.aborted && L.state === ke && s.call(L)
                                        }
                                        ,
                                        k.push(L)
                                    } else
                                        L.invoke()
                                } else
                                    !F.aborted && !1 === U[v] && (U[R] = !0)
                        }
                        ;
                        return Ee.call(U, Pe, Te),
                        U[o] || (U[o] = L),
                        ye.apply(U, F.args),
                        U[v] = !0,
                        L
                    }
                    function g() {}
                    function ee(L) {
                        const F = L.data;
                        return F.aborted = !0,
                        H.apply(F.target, F.args)
                    }
                    const oe = Oe(q, "open", () => function(L, F) {
                        return L[h] = 0 == F[2],
                        L[x] = F[1],
                        oe.apply(L, F)
                    }
                    )
                      , le = P("fetchTaskAborting")
                      , b = P("fetchTaskScheduling")
                      , ye = Oe(q, "send", () => function(L, F) {
                        if (!0 === p.current[b] || L[h])
                            return ye.apply(L, F);
                        {
                            const U = {
                                target: L,
                                url: L[x],
                                isPeriodic: !1,
                                args: F,
                                aborted: !1
                            }
                              , Be = K("XMLHttpRequest.send", g, U, S, ee);
                            L && !0 === L[R] && !U.aborted && Be.state === ke && Be.invoke()
                        }
                    }
                    )
                      , H = Oe(q, "abort", () => function(L, F) {
                        const U = function ie(L) {
                            return L[o]
                        }(L);
                        if (U && "string" == typeof U.type) {
                            if (null == U.cancelFn || U.data && U.data.aborted)
                                return;
                            U.zone.cancelTask(U)
                        } else if (!0 === p.current[le])
                            return H.apply(L, F)
                    }
                    )
                }(c);
                const o = P("xhrTask")
                  , h = P("xhrSync")
                  , T = P("xhrListener")
                  , v = P("xhrScheduled")
                  , x = P("xhrURL")
                  , R = P("xhrErrorBeforeScheduled")
            }
            ),
            i.__load_patch("geolocation", c => {
                c.navigator && c.navigator.geolocation && function lt(i, c) {
                    const p = i.constructor.name;
                    for (let o = 0; o < c.length; o++) {
                        const h = c[o]
                          , T = i[h];
                        if (T) {
                            if (!it(ge(i, h)))
                                continue;
                            i[h] = (x => {
                                const R = function() {
                                    return x.apply(this, pe(arguments, p + "." + h))
                                };
                                return ne(R, x),
                                R
                            }
                            )(T)
                        }
                    }
                }(c.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
            }
            ),
            i.__load_patch("PromiseRejectionEvent", (c, p) => {
                function o(h) {
                    return function(T) {
                        r(c, h).forEach(x => {
                            const R = c.PromiseRejectionEvent;
                            if (R) {
                                const O = new R(h,{
                                    promise: T.promise,
                                    reason: T.rejection
                                });
                                x.invoke(O)
                            }
                        }
                        )
                    }
                }
                c.PromiseRejectionEvent && (p[P("unhandledPromiseRejectionHandler")] = o("unhandledrejection"),
                p[P("rejectionHandledHandler")] = o("rejectionhandled"))
            }
            ),
            i.__load_patch("queueMicrotask", (c, p, o) => {
                !function t(i, c) {
                    c.patchMethod(i, "queueMicrotask", p => function(o, h) {
                        Zone.current.scheduleMicroTask("queueMicrotask", h[0])
                    }
                    )
                }(c, o)
            }
            )
        }(Rt)
    }
}, Ie => {
    var te = Z => Ie(Ie.s = Z);
    te(96935),
    te(24050)
}
]);
