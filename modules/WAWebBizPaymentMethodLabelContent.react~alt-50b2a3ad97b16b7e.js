__d("WAWebBizPaymentMethodLabelContent.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WDSIconIcVerifiedUser.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 24, d = 16, m = {
		addPaymentMethodIcon: {
			color: "x1du590y",
			height: "x1nqnulx",
			width: "x1xvr5cs",
			$$css: !0
		},
		container: {
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			$$css: !0
		}
	};
	function p(e, t) {
		return e == null ? u.jsx(r("WDSIconIcVerifiedUser.react"), { iconXstyle: m.addPaymentMethodIcon }) : t == null || t.length === 0 || t[0].uri == null ? null : u.jsx(r("WAWebImg.react"), {
			src: t[0].uri,
			style: {
				height: d,
				width: c
			}
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.label, n = e.labelAx, o = e.titleColor, a = e.titleType;
		return t == null ? u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentActionEmphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(r("WDSText.react"), {
			type: a,
			colorName: o,
			children: u.jsx("span", {
				"aria-label": n,
				children: t
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e == null ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null;
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.containerXstyle, n = e.data, r = e.titleColor, a = r === void 0 ? "contentDefault" : r, i = e.titleType, l = i === void 0 ? "Body1" : i;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [m.container, t],
			children: [p(n == null ? void 0 : n.label, n == null ? void 0 : n.logos), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [_({
				label: n == null ? void 0 : n.label,
				labelAx: n == null ? void 0 : n.labelAx,
				titleColor: a,
				titleType: l
			}), f(n == null ? void 0 : n.label)] })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
