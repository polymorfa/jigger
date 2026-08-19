__d("WAWebTPPoweredBy.react", [
	"fbt",
	"WAWebTooltip.react",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = { tooltip: {
		boxSizing: "x9f619",
		maxWidth: "xsfubfy",
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		boxShadow: "x1ay2l74",
		$$css: !0
	} }, f = 7e3;
	function g(e) {
		var t = e.isWindowsHybrid, n = t === void 0 ? !1 : t, a = e.persistent, i = a === void 0 ? !1 : a, l = e.position, c = l === void 0 ? "end" : l, g = p(!0), h = g[0], y = g[1], C = m(null), b = m({
			interacting: !1,
			timerFired: !1
		}), v = o("WAWebTooltip.react").useTooltip({
			target: C,
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			includeArrow: !0,
			initHandling: "controllable",
			tooltipXStyle: _.tooltip,
			enableEnterTransition: !1,
			enableExitTransition: !1,
			element: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentInverse",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), S = v.hideTooltip, R = v.showTooltip, L = v.tooltip;
		d(function() {
			if (!i) {
				var e = window.setTimeout(function() {
					b.current.timerFired = !0, b.current.interacting || y(!1);
				}, f);
				return function() {
					window.clearTimeout(e);
				};
			}
		}, [i]);
		var E = function() {
			b.current.interacting = !0, R();
		}, k = function() {
			b.current.interacting = !1, S(), !i && b.current.timerFired && y(!1);
		};
		return h ? u.jsxs("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x1n2onr6 x1d9eok4" }
		}[!!n << 0], { children: [u.jsxs("button", {
			ref: c === "center" ? C : void 0,
			className: "x78zum5 x6s0dn4 xboafo0 xhslqc4 xl2ypbo x1ypdohk x1trrmfo x11g6tue x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak",
			"data-testid": "webtp-powered-by",
			onMouseEnter: E,
			onMouseLeave: k,
			onFocus: E,
			onBlur: k,
			type: "button",
			children: [
				u.jsx("span", {
					className: "x1hl2dhg xt0b8zv",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c !== "center" && u.jsx("span", {
					ref: C,
					className: "x1i1rx1s xjm9jq1"
				}),
				u.jsx(r("WDSIconIcInfo.react"), {
					height: 12,
					width: 12
				})
			]
		}), L] })) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
