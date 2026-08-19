__d("GeoDivider.react", [
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["direction"], s, u, c = u || (u = o("react")), d = {
		root: {
			backgroundColor: "xjbqb8w",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		vertical: {
			width: "xnalus7",
			borderInlineEndWidth: "x1lun4ml",
			borderInlineEndStyle: "x18b5jzi",
			alignSelf: "xkh2ocl",
			$$css: !0
		},
		horizontal: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			height: "xqtp20y",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = r("useGeoTheme")(), a = n.selectBorderColor, i = n.selectSpacing, l = e === "horizontal" ? d.horizontal : d.vertical, s;
		t[0] !== a ? (s = a({
			color: "element",
			isDisabled: !1
		}), t[0] = a, t[1] = s) : s = t[1];
		var u = e === "horizontal" ? "vertical" : "horizontal", c;
		t[2] !== i || t[3] !== u ? (c = i({
			bounds: "external",
			context: "content",
			relation: "section",
			positions: [u]
		}), t[2] = i, t[3] = u, t[4] = c) : c = t[4];
		var m;
		return t[5] !== l || t[6] !== s || t[7] !== c ? (m = [
			d.root,
			l,
			s,
			c
		], t[5] = l, t[6] = s, t[7] = c, t[8] = m) : m = t[8], m;
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(13), a, i;
		n[0] !== t ? (i = t.direction, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = i === void 0 ? "horizontal" : i, u = m(l);
		if (l === "vertical") {
			var d;
			n[3] !== a.xstyle || n[4] !== u ? (d = (s || (s = r("stylex"))).props(u, a.xstyle), n[3] = a.xstyle, n[4] = u, n[5] = d) : d = n[5];
			var p;
			return n[6] !== d ? (p = c.jsx("div", babelHelpers.extends({}, d)), n[6] = d, n[7] = p) : p = n[7], p;
		}
		var _;
		n[8] !== a.xstyle || n[9] !== u ? (_ = (s || (s = r("stylex"))).props(u, a.xstyle), n[8] = a.xstyle, n[9] = u, n[10] = _) : _ = n[10];
		var f;
		return n[11] !== _ ? (f = c.jsx("hr", babelHelpers.extends({}, _)), n[11] = _, n[12] = f) : f = n[12], f;
	}
	var _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoDivider", p);
	l.default = _;
}), 98);
