__d("WDSDialog.react", [
	"fbt",
	"WDSButton.react",
	"WDSDialogConfig",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useId, p = d.useRef;
	function _(e) {
		var t = e.menu, n = p(null), o = r("useWDSMenu")({
			targetRef: n,
			menu: t,
			position: "below",
			align: "end"
		}), a = o.menuPortal, i = o.openMenu;
		return c.jsxs(c.Fragment, { children: [c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			ref: n,
			variant: "borderless",
			onPress: i,
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}), a] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
		footerDivider: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			$$css: !0
		},
		topBarAfterMedia: {
			minHeight: "x65nank",
			$$css: !0
		},
		titleWrapperAfterMedia: {
			minHeight: "x65nank",
			$$css: !0
		},
		titleExpressive: {
			justifyContent: "xl56j7k",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.children, a = t.closeButton, i = a === void 0 ? !0 : a, l = t.description, u = t.footer, d = t.headerMedia, p = t.headerType, g = p === void 0 ? "functional" : p, h = t.layoutType, y = h === void 0 ? "functional" : h, C = t.menuToRenderOnDismiss, b = t.onDismiss, v = t.open, S = t.size, R = S === void 0 ? "md" : S, L = t.stickyFooter, E = L === void 0 ? !1 : L, k = t.testid, I = t.title, T = t.topBarEndContent, D = t.topBarStartContent, x = m(), $ = m(), P = o("WDSDialogConfig").getDialogStyles(R, y, g), N = g === "expressive" ? "Headline2" : "Body1", M = g === "expressive";
		if (!v) return null;
		var w = T;
		return i && (w = C != null ? c.jsx(_, { menu: C }) : c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			variant: "borderless",
			onPress: b,
			"aria-label": s._(
				/*BTDS*/
				""
			)
		})), c.jsx("div", {
			role: "dialog",
			"aria-modal": !0,
			"aria-labelledby": x,
			"aria-describedby": n != null && n !== !1 ? $ : void 0,
			children: c.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (e || (e = r("stylex"))).props.apply(e, P.container), { children: [
				d != null && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(P.headerMedia), { children: d })),
				(i || T != null) && c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x2fp4s7 x10l6tqk x242muq x1vjfegm" },
					1: { className: "x10l6tqk x1vjfegm xa3bivy xymx5cc" }
				}[(y === "expressive") << 0], { children: w })),
				c.jsxs("div", babelHelpers.extends({}, e.props.apply(e, P.header.concat(d != null ? P.headerAfterMedia : [])), { children: [c.jsxs("div", babelHelpers.extends({}, e.props.apply(e, P.topBar.concat([d != null && f.topBarAfterMedia])), { children: [D, c.jsx("div", babelHelpers.extends({ "data-testid": void 0 }, e.props.apply(e, P.titleWrapper.concat([d != null && f.titleWrapperAfterMedia, M && f.titleExpressive])), { children: c.jsx(r("WDSText.react"), {
					id: x,
					type: N,
					colorName: "contentDefault",
					children: I
				}) }))] })), l != null && c.jsx("div", {
					"data-testid": void 0,
					children: c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: l
					})
				})] })),
				n != null && n !== !1 && c.jsx("div", babelHelpers.extends({ id: $ }, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), P.body), { children: n })),
				u != null && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), P.footer.concat([E && f.footerDivider])), { children: u }))
			] }))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
