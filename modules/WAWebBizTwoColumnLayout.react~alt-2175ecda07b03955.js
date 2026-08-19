__d("WAWebBizTwoColumnLayout.react", [
	"WAWebFlexBox.react",
	"WAWebResizeObserver.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = 24, d = 20, m = 380, p = m * 2 + d + c * 2, _ = {
		largeScreenPrimary: {
			flexGrow: "xgyuaek",
			$$css: !0
		},
		largeScreenRoot: {
			justifyContent: "xl56j7k",
			$$css: !0
		},
		largeScreenSecondary: {
			flexGrow: "x1iyjqo2",
			position: "x7wzq59",
			top: "x242muq",
			$$css: !0
		},
		primary: {
			minWidth: "x1snuils",
			rowGap: "x1f0uite",
			$$css: !0
		},
		root: {
			alignContent: "xc26acl",
			columnGap: "x1mn2tih",
			display: "x78zum5",
			height: "x5yr21d",
			maxWidth: "x4t6xuk",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		secondary: {
			height: "xg7h5cd",
			minWidth: "x1snuils",
			rowGap: "x1f0uite",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.flipResizeOrder, n = t === void 0 ? !1 : t, a = e.primaryContent, i = e.secondaryContent, l = e.testid, c = u(!1), d = c[0], m = c[1], f = function(t) {
			m(t.width <= p);
		}, g = n && d && i != null, h = s.jsx(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: [_.primary, !d && _.largeScreenPrimary],
			align: "stretch",
			children: a
		}), y = i != null && s.jsx(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: [_.secondary, !d && _.largeScreenSecondary],
			children: i
		});
		return s.jsx(r("WAWebResizeObserver.react"), {
			className: "xc26acl x78zum5 x5yr21d xl56j7k xh8yej3",
			onResize: f,
			children: s.jsx(o("WAWebFlexBox.react").FlexItem, {
				direction: d ? "vertical" : "horizontal",
				flex: !0,
				testid: l,
				xstyle: [_.root, !d && _.largeScreenRoot],
				children: g ? s.jsxs(s.Fragment, { children: [y, h] }) : s.jsxs(s.Fragment, { children: [h, y] })
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
