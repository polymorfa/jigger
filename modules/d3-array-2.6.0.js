__d("d3-array-2.6.0", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {}, l = { exports: e }, s;
	function u() {
		(function(t, n) {
			typeof e == "object" && typeof l != "undefined" ? n(e) : typeof s == "function" && s.amd ? s(["exports"], n) : (t = typeof globalThis != "undefined" ? globalThis : t || self, n(t.d3 = t.d3 || {}));
		})(this, function(e) {
			function t(e, t) {
				return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
			}
			function n(e) {
				var t = e, n = e;
				e.length === 1 && (t = function(n, r) {
					return e(n) - r;
				}, n = r(e));
				function o(e, t, r, o) {
					for (r == null && (r = 0), o == null && (o = e.length); r < o;) {
						var a = r + o >>> 1;
						n(e[a], t) < 0 ? r = a + 1 : o = a;
					}
					return r;
				}
				function a(e, t, r, o) {
					for (r == null && (r = 0), o == null && (o = e.length); r < o;) {
						var a = r + o >>> 1;
						n(e[a], t) > 0 ? o = a : r = a + 1;
					}
					return r;
				}
				function i(e, n, r, a) {
					r == null && (r = 0), a == null && (a = e.length);
					var i = o(e, n, r, a);
					return i > r && t(e[i - 1], n) > -t(e[i], n) ? i - 1 : i;
				}
				return {
					left: o,
					center: i,
					right: a
				};
			}
			function r(e) {
				return function(n, r) {
					return t(e(n), r);
				};
			}
			var o = n(t), a = o.right, i = o.left;
			function l(e, t) {
				var n = 0;
				if (t === void 0) for (var r of e) r != null && (r = +r) >= r && ++n;
				else {
					var o = -1;
					for (var a of e) (a = t(a, ++o, e)) != null && (a = +a) >= a && ++n;
				}
				return n;
			}
			function s(e) {
				return e.length | 0;
			}
			function u(e) {
				return !(e > 0);
			}
			function c(e) {
				return typeof e != "object" || "length" in e ? e : Array.from(e);
			}
			function d(e) {
				return function(t) {
					return e.apply(void 0, t);
				};
			}
			function m() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				var r = typeof t[t.length - 1] == "function" && d(t.pop());
				t = t.map(c);
				var o = t.map(s), a = t.length - 1, i = new Array(a + 1).fill(0), l = [];
				if (a < 0 || o.some(u)) return l;
				for (;;) {
					l.push(i.map(function(e, n) {
						return t[n][e];
					}));
					for (var m = a; ++i[m] === o[m];) {
						if (m === 0) return r ? l.map(r) : l;
						i[m--] = 0;
					}
				}
			}
			function p(e, t) {
				var n = 0, r = 0;
				return Float64Array.from(e, t === void 0 ? function(e) {
					return n += +e || 0;
				} : function(o) {
					return n += +t(o, r++, e) || 0;
				});
			}
			function _(e, t) {
				return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
			}
			function f(e, t) {
				var n = 0, r, o = 0, a = 0;
				if (t === void 0) for (var i of e) i != null && (i = +i) >= i && (r = i - o, o += r / ++n, a += r * (i - o));
				else {
					var l = -1;
					for (var s of e) (s = t(s, ++l, e)) != null && (s = +s) >= s && (r = s - o, o += r / ++n, a += r * (s - o));
				}
				if (n > 1) return a / (n - 1);
			}
			function g(e, t) {
				var n = f(e, t);
				return n && Math.sqrt(n);
			}
			function h(e, t) {
				var n, r;
				if (t === void 0) for (var o of e) o != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
				else {
					var a = -1;
					for (var i of e) (i = t(i, ++a, e)) != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)));
				}
				return [n, r];
			}
			var y = (function() {
				function e() {
					this.$1 = new Float64Array(32), this.$2 = 0;
				}
				var t = e.prototype;
				return t.add = function(t) {
					for (var e = this.$1, n = 0, r = 0; r < this.$2 && r < 32; r++) {
						var o = e[r], a = t + o, i = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
						i && (e[n++] = i), t = a;
					}
					return e[n] = t, this.$2 = n + 1, this;
				}, t.valueOf = function() {
					var e = this.$1, t = this.$2, n, r, o, a = 0;
					if (t > 0) {
						for (a = e[--t]; t > 0 && (n = a, r = e[--t], a = n + r, o = r - (a - n), !o););
						t > 0 && (o < 0 && e[t - 1] < 0 || o > 0 && e[t - 1] > 0) && (r = o * 2, n = a + r, r == n - a && (a = n));
					}
					return a;
				}, e;
			})();
			function C(e, t) {
				var n = new y();
				if (t === void 0) for (var r of e) (r = +r) && n.add(r);
				else {
					var o = -1;
					for (var a of e) (a = +t(a, ++o, e)) && n.add(a);
				}
				return +n;
			}
			function b(e) {
				return e;
			}
			function v(e) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				return T(e, b, b, n);
			}
			function S(e) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				return T(e, Array.from, b, n);
			}
			function R(e, t) {
				for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
				return T(e, b, t, r);
			}
			function L(e, t) {
				for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
				return T(e, Array.from, t, r);
			}
			function E(e) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				return T(e, b, I, n);
			}
			function k(e) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				return T(e, Array.from, I, n);
			}
			function I(e) {
				if (e.length !== 1) throw new Error("duplicate key");
				return e[0];
			}
			function T(e, t, n, r) {
				return (function e(o, a) {
					if (a >= r.length) return n(o);
					var i = new Map(), l = r[a++], s = -1;
					for (var u of o) {
						var c = l(u, ++s, o), d = i.get(c);
						d ? d.push(u) : i.set(c, [u]);
					}
					for (var m of i) {
						var p = m[0], _ = m[1];
						i.set(p, e(_, a));
					}
					return t(i);
				})(e, 0);
			}
			var D = Array.prototype, x = D.slice;
			function $(e) {
				return function() {
					return e;
				};
			}
			function P(e, t, n) {
				e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
				for (var r = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, a = new Array(o); ++r < o;) a[r] = e + r * n;
				return a;
			}
			var N = Math.sqrt(50), M = Math.sqrt(10), w = Math.sqrt(2);
			function A(e, t, n) {
				var r, o = -1, a, i, l;
				if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
				if ((r = t < e) && (a = e, e = t, t = a), (l = F(e, t, n)) === 0 || !isFinite(l)) return [];
				if (l > 0) for (e = Math.ceil(e / l), t = Math.floor(t / l), i = new Array(a = Math.ceil(t - e + 1)); ++o < a;) i[o] = (e + o) * l;
				else for (l = -l, e = Math.ceil(e * l), t = Math.floor(t * l), i = new Array(a = Math.ceil(t - e + 1)); ++o < a;) i[o] = (e + o) / l;
				return r && i.reverse(), i;
			}
			function F(e, t, n) {
				var r = (t - e) / Math.max(0, n), o = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, o);
				return o >= 0 ? (a >= N ? 10 : a >= M ? 5 : a >= w ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= N ? 10 : a >= M ? 5 : a >= w ? 2 : 1);
			}
			function O(e, t, n) {
				var r = Math.abs(t - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / o;
				return a >= N ? o *= 10 : a >= M ? o *= 5 : a >= w && (o *= 2), t < e ? -o : o;
			}
			function B(e) {
				return Math.ceil(Math.log(l(e)) / Math.LN2) + 1;
			}
			function W() {
				var e = b, t = h, n = B;
				function r(r) {
					Array.isArray(r) || (r = Array.from(r));
					var o, i = r.length, l, s = new Array(i);
					for (o = 0; o < i; ++o) s[o] = e(r[o], o, r);
					var u = t(s), c = u[0], d = u[1], m = n(s, c, d);
					Array.isArray(m) || (m = O(c, d, m), m = P(Math.ceil(c / m) * m, d, m));
					for (var p = m.length; m[0] <= c;) m.shift(), --p;
					for (; m[p - 1] > d;) m.pop(), --p;
					var _ = new Array(p + 1), f;
					for (o = 0; o <= p; ++o) f = _[o] = [], f.x0 = o > 0 ? m[o - 1] : c, f.x1 = o < p ? m[o] : d;
					for (o = 0; o < i; ++o) l = s[o], c <= l && l <= d && _[a(m, l, 0, p)].push(r[o]);
					return _;
				}
				return r.value = function(t) {
					return arguments.length ? (e = typeof t == "function" ? t : $(t), r) : e;
				}, r.domain = function(e) {
					return arguments.length ? (t = typeof e == "function" ? e : $([e[0], e[1]]), r) : t;
				}, r.thresholds = function(e) {
					return arguments.length ? (n = typeof e == "function" ? e : Array.isArray(e) ? $(x.call(e)) : $(e), r) : n;
				}, r;
			}
			function q(e, t) {
				var n;
				if (t === void 0) for (var r of e) r != null && (n < r || n === void 0 && r >= r) && (n = r);
				else {
					var o = -1;
					for (var a of e) (a = t(a, ++o, e)) != null && (n < a || n === void 0 && a >= a) && (n = a);
				}
				return n;
			}
			function U(e, t) {
				var n;
				if (t === void 0) for (var r of e) r != null && (n > r || n === void 0 && r >= r) && (n = r);
				else {
					var o = -1;
					for (var a of e) (a = t(a, ++o, e)) != null && (n > a || n === void 0 && a >= a) && (n = a);
				}
				return n;
			}
			function V(e, n, r, o, a) {
				for (r === void 0 && (r = 0), o === void 0 && (o = e.length - 1), a === void 0 && (a = t); o > r;) {
					if (o - r > 600) {
						var i = o - r + 1, l = n - r + 1, s = Math.log(i), u = .5 * Math.exp(2 * s / 3), c = .5 * Math.sqrt(s * u * (i - u) / i) * (l - i / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(n - l * u / i + c)), m = Math.min(o, Math.floor(n + (i - l) * u / i + c));
						V(e, n, d, m, a);
					}
					var p = e[n], _ = r, f = o;
					for (H(e, r, n), a(e[o], p) > 0 && H(e, r, o); _ < f;) {
						for (H(e, _, f), ++_, --f; a(e[_], p) < 0;) ++_;
						for (; a(e[f], p) > 0;) --f;
					}
					a(e[r], p) === 0 ? H(e, r, f) : (++f, H(e, f, o)), f <= n && (r = f + 1), n <= f && (o = f - 1);
				}
				return e;
			}
			function H(e, t, n) {
				var r = e[t];
				e[t] = e[n], e[n] = r;
			}
			function G(e) {
				return e === null ? NaN : +e;
			}
			function* z(e, t) {
				if (t === void 0) for (var n of e) n != null && (n = +n) >= n && (yield n);
				else {
					var r = -1;
					for (var o of e) (o = t(o, ++r, e)) != null && (o = +o) >= o && (yield o);
				}
			}
			function j(e, t, n) {
				if (e = Float64Array.from(z(e, n)), !!(r = e.length)) {
					if ((t = +t) <= 0 || r < 2) return U(e);
					if (t >= 1) return q(e);
					var r, o = (r - 1) * t, a = Math.floor(o), i = q(V(e, a).subarray(0, a + 1)), l = U(e.subarray(a + 1));
					return i + (l - i) * (o - a);
				}
			}
			function K(e, t, n) {
				if (n === void 0 && (n = G), !!(r = e.length)) {
					if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
					if (t >= 1) return +n(e[r - 1], r - 1, e);
					var r, o = (r - 1) * t, a = Math.floor(o), i = +n(e[a], a, e), l = +n(e[a + 1], a + 1, e);
					return i + (l - i) * (o - a);
				}
			}
			function Q(e, t, n) {
				return Math.ceil((n - t) / (2 * (j(e, .75) - j(e, .25)) * Math.pow(l(e), -1 / 3)));
			}
			function X(e, t, n) {
				return Math.ceil((n - t) / (3.5 * g(e) * Math.pow(l(e), -1 / 3)));
			}
			function Y(e, t) {
				var n, r = -1, o = -1;
				if (t === void 0) for (var a of e) ++o, a != null && (n < a || n === void 0 && a >= a) && (n = a, r = o);
				else for (var i of e) (i = t(i, ++o, e)) != null && (n < i || n === void 0 && i >= i) && (n = i, r = o);
				return r;
			}
			function J(e, t) {
				var n = 0, r = 0;
				if (t === void 0) for (var o of e) o != null && (o = +o) >= o && (++n, r += o);
				else {
					var a = -1;
					for (var i of e) (i = t(i, ++a, e)) != null && (i = +i) >= i && (++n, r += i);
				}
				if (n) return r / n;
			}
			function Z(e, t) {
				return j(e, .5, t);
			}
			function* ee(e) {
				for (var t of e) yield* t;
			}
			function te(e) {
				return Array.from(ee(e));
			}
			function ne(e, t) {
				var n, r = -1, o = -1;
				if (t === void 0) for (var a of e) ++o, a != null && (n > a || n === void 0 && a >= a) && (n = a, r = o);
				else for (var i of e) (i = t(i, ++o, e)) != null && (n > i || n === void 0 && i >= i) && (n = i, r = o);
				return r;
			}
			function re(e, t) {
				t === void 0 && (t = oe);
				var n = [], r, o = !1;
				for (var a of e) o && n.push(t(r, a)), r = a, o = !0;
				return n;
			}
			function oe(e, t) {
				return [e, t];
			}
			function ae(e, t) {
				return Array.from(t, function(t) {
					return e[t];
				});
			}
			function ie(e, n) {
				n === void 0 && (n = t);
				var r, o = !1;
				if (n.length === 1) {
					var a;
					for (var i of e) {
						var l = n(i);
						(o ? t(l, a) < 0 : t(l, l) === 0) && (r = i, a = l, o = !0);
					}
				} else for (var s of e) (o ? n(s, r) < 0 : n(s, s) === 0) && (r = s, o = !0);
				return r;
			}
			function le(e, n) {
				if (n === void 0 && (n = t), n.length === 1) return ne(e, n);
				var r, o = -1, a = -1;
				for (var i of e) ++a, (o < 0 ? n(i, i) === 0 : n(i, r) < 0) && (r = i, o = a);
				return o;
			}
			function se(e, n) {
				n === void 0 && (n = t);
				var r, o = !1;
				if (n.length === 1) {
					var a;
					for (var i of e) {
						var l = n(i);
						(o ? t(l, a) > 0 : t(l, l) === 0) && (r = i, a = l, o = !0);
					}
				} else for (var s of e) (o ? n(s, r) > 0 : n(s, s) === 0) && (r = s, o = !0);
				return r;
			}
			function ue(e, n) {
				if (n === void 0 && (n = t), n.length === 1) return Y(e, n);
				var r, o = -1, a = -1;
				for (var i of e) ++a, (o < 0 ? n(i, i) === 0 : n(i, r) > 0) && (r = i, o = a);
				return o;
			}
			function ce(e, t) {
				var n = le(e, t);
				return n < 0 ? void 0 : n;
			}
			function de(e, t, n) {
				t === void 0 && (t = 0), n === void 0 && (n = e.length);
				for (var r = n - (t = +t), o, a; r;) a = Math.random() * r-- | 0, o = e[r + t], e[r + t] = e[a + t], e[a + t] = o;
				return e;
			}
			function me(e, t) {
				var n = 0;
				if (t === void 0) for (var r of e) (r = +r) && (n += r);
				else {
					var o = -1;
					for (var a of e) (a = +t(a, ++o, e)) && (n += a);
				}
				return n;
			}
			function pe(e) {
				if (!(a = e.length)) return [];
				for (var t = -1, n = U(e, _e), r = new Array(n); ++t < n;) for (var o = -1, a, i = r[t] = new Array(a); ++o < a;) i[o] = e[o][t];
				return r;
			}
			function _e(e) {
				return e.length;
			}
			function fe() {
				return pe(arguments);
			}
			e.Adder = y, e.ascending = t, e.bin = W, e.bisect = a, e.bisectLeft = i, e.bisectRight = a, e.bisector = n, e.count = l, e.cross = m, e.cumsum = p, e.descending = _, e.deviation = g, e.extent = h, e.fsum = C, e.greatest = se, e.greatestIndex = ue, e.group = v, e.groups = S, e.histogram = W, e.index = E, e.indexes = k, e.least = ie, e.leastIndex = le, e.max = q, e.maxIndex = Y, e.mean = J, e.median = Z, e.merge = te, e.min = U, e.minIndex = ne, e.pairs = re, e.permute = ae, e.quantile = j, e.quantileSorted = K, e.quickselect = V, e.range = P, e.rollup = R, e.rollups = L, e.scan = ce, e.shuffle = de, e.sum = me, e.thresholdFreedmanDiaconis = Q, e.thresholdScott = X, e.thresholdSturges = B, e.tickIncrement = F, e.tickStep = O, e.ticks = A, e.transpose = pe, e.variance = f, e.zip = fe, Object.defineProperty(e, "__esModule", { value: !0 });
		});
	}
	var c = !1;
	function d() {
		return c || (c = !0, u()), l.exports;
	}
	function m(e) {
		switch (e) {
			case void 0: return d();
		}
	}
	a.exports = m();
}), null);
