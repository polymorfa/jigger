__d("WAWebVoipAudioWaveform.react", [
	"WAWebVelocityAnimate",
	"react",
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
		var n = t.accentColor, o = t.audioLevel, a = o === void 0 ? 0 : o, i = t.barCount, l = i === void 0 ? p : i, s = t.isActive, c = s === void 0 ? !0 : s, _ = t.scale, g = _ === void 0 ? 1 : _, h = m([]), b = m([]), S = m(null), R = m(null);
		return d(function() {
			if (S.current != null && (window.clearTimeout(S.current), S.current = null), !c || a === 0) {
				h.current.forEach(function(e) {
					e && (e.style.height = y + f * 2 + "px");
				}), b.current.forEach(function(e) {
					e && (e.style.height = y + "px");
				}), S.current = window.setTimeout(function() {
					R.current && r("WAWebVelocityAnimate")(R.current, { opacity: [0, 1] }, {
						duration: 300,
						easing: "easeOutQuart"
					});
				}, v);
				return;
			}
			R.current && r("WAWebVelocityAnimate")(R.current, { opacity: [1, R.current.style.opacity || 0] }, {
				duration: 300,
				easing: "easeOutQuart"
			});
			var e = Math.max(0, Math.min(1, a)), t = C - y, n = Math.floor(l / 2), o = Array.from({ length: l }, function(r, o) {
				var a = Math.abs(o - n), i = n > 0 ? 1 - a / n : 1, l = .7 + Math.random() * .3, s = i * l * e;
				return y + t * s;
			});
			return h.current.forEach(function(e, t) {
				if (e) {
					var n, r = (n = o[t]) != null ? n : y;
					e.style.height = r + f * 2 + "px";
				}
			}), b.current.forEach(function(e, t) {
				if (e) {
					var n, r = (n = o[t]) != null ? n : y;
					e.style.height = r + "px";
				}
			}), function() {
				S.current != null && (window.clearTimeout(S.current), S.current = null);
			};
		}, [
			a,
			l,
			c
		]), u.jsx("div", {
			ref: R,
			children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.scaleWrapper(g)), { children: u.jsx("div", {
				className: "xlup9mm",
				children: u.jsx("div", babelHelpers.extends({}, e.props(L.barsContainer(l)), { children: Array.from({ length: l }, function(t, o) {
					return u.jsxs("div", {
						className: "x1n2onr6 xci0xqf xlup9mm x78zum5 x6s0dn4 xl56j7k x2lah0s",
						children: [u.jsx("div", {
							ref: function(t) {
								h.current[o] = t;
							},
							className: "x10l6tqk xci0xqf x1hagigm xt8t1vi x1xc408v x129tdwq x15urzxu xcrclan x1od0jb8"
						}), u.jsx("div", babelHelpers.extends({ ref: function(t) {
							b.current[o] = t;
						} }, (e || (e = r("stylex"))).props(L.accentBar, n != null && L.accentBarColor(n))))]
					}, o);
				}) }))
			}) }))
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 98);
