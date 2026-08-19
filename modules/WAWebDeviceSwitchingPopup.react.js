__d("WAWebDeviceSwitchingPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsPictoMovePhoneIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInline14: {
		marginInlineStart: "xcev3uh",
		marginInlineEnd: "x1my54xf",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, m = { hyphen: {
		textAlign: "x2b8uid",
		fontWeight: "xk50ysn",
		fontSize: "x579bpy",
		color: "x14ug900",
		$$css: !0
	} };
	function p(t) {
		var n = t.otpCode, a = n.split(""), i = a.slice(0, 3), l = a.slice(3), u = c.jsx(o("WAWebWdsPictoMovePhoneIcon.react").WdsPictoMovePhoneIcon, {}), d = c.jsx("div", {
			dir: "ltr",
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: [
					i.map(function(e, t) {
						return c.jsx(_, { content: e }, t + ":" + e);
					}),
					c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.hyphen, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, o("WDSPaddings.stylex").wdsPaddings.paddingHor8), {
						"aria-hidden": "true",
						children: "-"
					})),
					l.map(function(e, t) {
						return c.jsx(_, { content: e }, t + 3 + ":" + e);
					})
				]
			})
		});
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "device-switching"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			type: o("WAWebModal.react").ModalTheme.InviteNew,
			buttonAlign: "center",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding24,
				children: [
					u,
					c.jsx(o("WAWebText.react").WAWebTextLarge, {
						paddingTop: 24,
						paddingBottom: 24,
						weight: "medium",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx("div", {
						className: "x1jchvi3",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					d
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.content, r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [d.marginInline14, o("WDSPaddings.stylex").wdsPaddings.paddingTop20], a = { className: "x2b8uid xk50ysn x1q74xe4 x1jzgpr8 x14ug900" }, t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i;
		return t[2] !== n ? (i = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: r,
			children: c.jsx("span", babelHelpers.extends({}, a, { children: n }))
		}), t[2] = n, t[3] = i) : i = t[3], i;
	}
	l.default = p;
}), 226);
