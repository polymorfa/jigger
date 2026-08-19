__d("WAWebObjectFit.react", [
	"WALogger",
	"WAWebObjectFit.stylex",
	"react",
	"stylex",
	"useWAWebListener",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useImperativeHandle, f = m.useLayoutEffect, g = m.useRef, h = m.useState, y = "transform 300ms cubic-bezier(.1,.82,.25,1)";
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, s), i = g(), l = g();
		_(n, function() {
			return {
				getInsideContainer: function() {
					return l.current;
				},
				getOutsideContainer: function() {
					return i.current;
				},
				getElement: function() {
					return i.current;
				}
			};
		});
		var c = a.objectPosition, m = a.onObjectLoad, y = a.position, C = a.size, L = a.type, E = a.zoomIn, k = C == null ? void 0 : C.width, I = C == null ? void 0 : C.height, T = E == null ? void 0 : E.factor, D = E == null ? void 0 : E.translateX, x = E == null ? void 0 : E.translateY, $ = p(function() {
			m != null && l.current != null && m(l.current.firstChild);
		}, [m]), P = h(null), N = P[0], M = P[1], w = p(function() {
			if (!(k == null || I == null)) {
				var t = i.current;
				if (t) {
					var n;
					switch (L) {
						case "contain":
							n = v({
								container: t,
								contentHeight: I,
								contentWidth: k
							});
							break;
						case "cover":
							n = b({
								container: t,
								contentHeight: I,
								contentWidth: k
							});
							break;
						case "scaleDown":
							n = S(t, k, I);
							break;
						case "zoomIn":
							n = R(t, k, I, T != null && D != null && x != null ? {
								factor: T,
								translateX: D,
								translateY: x
							} : null);
							break;
						default:
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["unrecognized type ", ""])), L).sendLogs("object-fit");
							return;
					}
					var r = {}, a = c != null ? c : n.style.position;
					a != null && (r.position = a);
					for (var l of Object.keys(n.style)) {
						var s = n.style[l];
						s == null || Number.isNaN(s) || (r[l] = typeof s == "number" ? s + "px" : s);
					}
					M({
						containerStyles: n.stylexStyles,
						innerStyle: r
					}), $();
				}
			}
		}, [
			$,
			c,
			I,
			k,
			L,
			T,
			D,
			x
		]), A = r("useWAWebThrottledCallback")(w);
		return o("useWAWebListener").useListener(window, "resize", A), f(function() {
			w();
		}, [w]), d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props.apply(u, (N != null ? N.containerStyles : [o("WAWebObjectFit.stylex").styles.fit]).concat([y === "relative" && o("WAWebObjectFit.stylex").styles.fitRelative])), {
			ref: i,
			children: d.jsx("div", {
				style: N != null ? N.innerStyle : { visibility: "hidden" },
				ref: l,
				children: a.children
			})
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.container, n = e.contentHeight, r = e.contentWidth, a = t.clientWidth, i = t.clientHeight, l = r, s = n, u = 0, c = 0;
		return l !== a && (s *= a / l, l = a, s > i && (u = i / 2 - s / 2)), s < i && (l *= i / s, s = i, l > a && (c = a / 2 - l / 2)), {
			style: {
				width: l,
				height: s,
				top: u,
				left: c,
				position: "absolute"
			},
			stylexStyles: [o("WAWebObjectFit.stylex").styles.fit]
		};
	}
	function v(e) {
		var t = e.container, n = e.contentHeight, r = e.contentWidth, a = t.clientWidth, i = t.clientHeight, l = r, s = n, u = 0, c = 0, d = l / a, m = s / i;
		return d > m ? (s *= a / l, l = a, s < i && (u = i / 2 - s / 2)) : (l *= i / s, s = i, l < a && (c = a / 2 - l / 2)), {
			style: {
				width: l,
				height: s,
				top: u,
				left: c,
				position: "absolute"
			},
			stylexStyles: [o("WAWebObjectFit.stylex").styles.fit]
		};
	}
	function S(e, t, n) {
		var r = e.clientWidth, a = e.clientHeight, i = n, l = t;
		return i > a && (i = a, l = t * (a / n)), l > r && (l = r, i = n * (r / t)), {
			style: {
				width: l,
				height: i
			},
			stylexStyles: [o("WAWebObjectFit.stylex").styles.fit, o("WAWebObjectFit.stylex").styles.fitScaledown]
		};
	}
	function R(e, t, n, r) {
		var a = S(e, t, n).style, i;
		return r ? i = {
			width: a.width,
			height: a.height,
			transition: y,
			transform: "translateX(" + r.translateX + "px) translateY(" + r.translateY + "px) scale(" + r.factor + ")"
		} : i = {
			width: a.width,
			height: a.height,
			transition: y
		}, {
			style: i,
			stylexStyles: [
				o("WAWebObjectFit.stylex").styles.fit,
				o("WAWebObjectFit.stylex").styles.fitScaledown,
				o("WAWebObjectFit.stylex").styles.fitZoomin
			]
		};
	}
	l.default = C;
}), 98);
