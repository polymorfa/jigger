__d("WAWebVoipAudioWaveform.react", [
	"WAWebVelocityAnimate",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = 7, _ = 3, f = 2, g = _ + f * 2, h = 0, y = 3, C = 16, b = 300, v = 1e3, S = {
		transform: "xsqj5wx",
		transformOrigin: "x1jpgh95",
		$$css: !0
	}, R = {
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		columnGap: "x1o1pmfc",
		width: "x5lhr3w",
		$$css: !0
	}, L = {
		scaleWrapper: function(t) {
			return [S, { "--x-transform": "scale(" + t + ")" != null ? "scale(" + t + ")" : void 0 }];
		},
		barsContainer: function(t) {
			return [R, { "--x-width": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t * g + (t - 1) * h + "px") }];
		},
		accentBar: {
			position: "x10l6tqk",
			width: "x1g8rjiy",
			height: "xuoj239",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			transition: "xcrclan",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		accentBarColor: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		}
	};
	function E(t) {
		var n = o("react-compiler-runtime").c(21), a = t.accentColor, i = t.audioLevel, l = t.barCount, s = t.isActive, c = t.scale, _ = i === void 0 ? 0 : i, g = l === void 0 ? p : l, h = s === void 0 ? !0 : s, b = c === void 0 ? 1 : c, S;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (S = [], n[0] = S) : S = n[0];
		var R = m(S), E;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (E = [], n[1] = E) : E = n[1];
		var T = m(E), D = m(null), x = m(null), $, P;
		n[2] !== _ || n[3] !== g || n[4] !== h ? ($ = function() {
			if (D.current != null && (window.clearTimeout(D.current), D.current = null), !h || _ === 0) {
				R.current.forEach(I), T.current.forEach(k), D.current = window.setTimeout(function() {
					x.current && r("WAWebVelocityAnimate")(x.current, { opacity: [0, 1] }, {
						duration: 300,
						easing: "easeOutQuart"
					});
				}, v);
				return;
			}
			x.current && r("WAWebVelocityAnimate")(x.current, { opacity: [1, x.current.style.opacity || 0] }, {
				duration: 300,
				easing: "easeOutQuart"
			});
			var e = Math.max(0, Math.min(1, _)), t = C - y, n = Math.floor(g / 2), o = Array.from({ length: g }, function(r, o) {
				var a = Math.abs(o - n), i = n > 0 ? 1 - a / n : 1, l = .7 + Math.random() * .3, s = i * l * e;
				return y + t * s;
			});
			return R.current.forEach(function(e, t) {
				if (e) {
					var n, r = (n = o[t]) != null ? n : y;
					e.style.height = r + f * 2 + "px";
				}
			}), T.current.forEach(function(e, t) {
				if (e) {
					var n, r = (n = o[t]) != null ? n : y;
					e.style.height = r + "px";
				}
			}), (function() {
				D.current != null && (window.clearTimeout(D.current), D.current = null);
			});
		}, P = [
			_,
			g,
			h
		], n[2] = _, n[3] = g, n[4] = h, n[5] = $, n[6] = P) : ($ = n[5], P = n[6]), d($, P);
		var N;
		n[7] !== b ? (N = (e || (e = r("stylex"))).props(L.scaleWrapper(b)), n[7] = b, n[8] = N) : N = n[8];
		var M;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (M = { className: "xlup9mm" }, n[9] = M) : M = n[9];
		var w;
		n[10] !== g ? (w = (e || (e = r("stylex"))).props(L.barsContainer(g)), n[10] = g, n[11] = w) : w = n[11];
		var A;
		n[12] !== a || n[13] !== g ? (A = Array.from({ length: g }, function(t, n) {
			return u.jsxs("div", {
				className: "x1n2onr6 xci0xqf xlup9mm x78zum5 x6s0dn4 xl56j7k x2lah0s",
				children: [u.jsx("div", {
					ref: function(t) {
						R.current[n] = t;
					},
					className: "x10l6tqk xci0xqf x1hagigm xt8t1vi x1xc408v x129tdwq x15urzxu xcrclan x1od0jb8"
				}), u.jsx("div", babelHelpers.extends({ ref: function(t) {
					T.current[n] = t;
				} }, (e || (e = r("stylex"))).props(L.accentBar, a != null && L.accentBarColor(a))))]
			}, n);
		}), n[12] = a, n[13] = g, n[14] = A) : A = n[14];
		var F;
		n[15] !== w || n[16] !== A ? (F = u.jsx("div", babelHelpers.extends({}, M, { children: u.jsx("div", babelHelpers.extends({}, w, { children: A })) })), n[15] = w, n[16] = A, n[17] = F) : F = n[17];
		var O;
		return n[18] !== F || n[19] !== N ? (O = u.jsx("div", {
			ref: x,
			children: u.jsx("div", babelHelpers.extends({}, N, { children: F }))
		}), n[18] = F, n[19] = N, n[20] = O) : O = n[20], O;
	}
	function k(e) {
		e && (e.style.height = y + "px");
	}
	function I(e) {
		e && (e.style.height = y + f * 2 + "px");
	}
	l.default = E;
}), 98);
