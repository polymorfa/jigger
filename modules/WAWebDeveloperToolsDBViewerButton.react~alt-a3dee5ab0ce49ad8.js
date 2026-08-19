__d("WAWebDeveloperToolsDBViewerButton.react", [
	"WAWebSpinner.react",
	"WAWebUnstyledButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { padding6: {
		paddingTop: "x1yrsyyn",
		paddingInlineEnd: "x1icxu4v",
		paddingBottom: "x10b6aqq",
		paddingInlineStart: "x25sj25",
		$$css: !0
	} }, c = {
		activeColor: {
			color: "xk4n5i7",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			color: "xhslqc4",
			$$css: !0
		},
		fixedHeight: {
			height: "x1s1d1n7",
			$$css: !0
		},
		hoverColor: {
			":hover_color": "xfrlarv",
			$$css: !0
		},
		disabled: {
			cursor: "x1h6gzvc",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		light: {
			backgroundColor: "xy57btm",
			$$css: !0
		},
		dark: {
			backgroundColor: "x1q7yeco",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.buttonRef, n = e.children, a = e.disabled, i = a === void 0 ? !1 : a, l = e.fixedHeight, d = l === void 0 ? !1 : l, m = e.fullWidth, p = m === void 0 ? !1 : m, _ = e.isActive, f = _ === void 0 ? !1 : _, g = e.light, h = g === void 0 ? !1 : g, y = e.loading, C = y === void 0 ? !1 : y, b = e.onClick, v = e.xstyle;
		return s.jsx(r("WAWebUnstyledButton.react"), {
			disabled: i,
			ref: t,
			onClick: b,
			xstyle: [
				c.button,
				u.padding6,
				d && c.fixedHeight,
				f && c.activeColor,
				(i || C) && c.disabled,
				!i && c.hoverColor,
				p && c.fullWidth,
				h ? c.light : c.dark,
				v
			],
			children: C ? s.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }) : n
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
