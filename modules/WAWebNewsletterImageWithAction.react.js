__d("WAWebNewsletterImageWithAction.react", [
	"WAWebDetailImage.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { padding5: {
		paddingTop: "x123j3cw",
		paddingInlineEnd: "x1gabggj",
		paddingBottom: "xs9asl8",
		paddingInlineStart: "xaso8d8",
		$$css: !0
	} }, c = {
		badge: {
			zIndex: "x12xzxwr",
			bottom: "x1c56n8",
			insetInlineEnd: "x1wmwbkl",
			left: null,
			right: null,
			position: "x1n2onr6",
			marginInlineEnd: "xhg6vv5",
			borderTopWidth: "xmn4e3e",
			borderInlineEndWidth: "x1if355w",
			borderBottomWidth: "x2x41l1",
			borderInlineStartWidth: "xct1zlm",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1y9zq84",
			borderInlineEndColor: "xt9xd2u",
			borderBottomColor: "x3tsejo",
			borderInlineStartColor: "x1ahzpo1",
			color: "x17t9dm2",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		primaryColor: {
			backgroundColor: "x1ooda66",
			$$css: !0
		},
		dangerColor: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.Icon, r = e.actionTheme, a = e.chat, i;
		t[0] !== a.id ? (i = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.id,
			size: 104,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			shape: o("WAWebDetailImage.react").DetailImageShape.Circle
		}), t[0] = a.id, t[1] = i) : i = t[1];
		var l = r === "primary" && c.primaryColor, d = r === "danger" && c.dangerColor, m;
		t[2] !== l || t[3] !== d ? (m = [
			c.badge,
			u.padding5,
			l,
			d
		], t[2] = l, t[3] = d, t[4] = m) : m = t[4];
		var p;
		t[5] !== n || t[6] !== m ? (p = s.jsx(n, {
			width: 24,
			height: 24,
			xstyle: m
		}), t[5] = n, t[6] = m, t[7] = p) : p = t[7];
		var _;
		return t[8] !== i || t[9] !== p ? (_ = s.jsxs(s.Fragment, { children: [i, p] }), t[8] = i, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	l.default = d;
}), 98);
