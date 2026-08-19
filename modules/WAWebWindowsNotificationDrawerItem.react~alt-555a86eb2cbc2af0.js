__d("WAWebWindowsNotificationDrawerItem.react", [
	"WAWebDrawerButton.react",
	"WAWebText.react",
	"WDSIconIcChevronRight.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		messagesItem: {
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1phvje8",
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			minHeight: "x1wxaq2x",
			height: "xt7dq6l",
			$$css: !0
		},
		chevronIconPaddingRight: {
			insetInlineEnd: "x67dgr1",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function c(e) {
		var t = e.onClick, n = e.subtitle, a = e.testid, i = e.title;
		return s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: a,
			divider: !1,
			useRoundedStyle: !0,
			xstyle: u.messagesItem,
			detail: s.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }),
			detailXstyle: u.chevronIconPaddingRight,
			onClick: t,
			children: [i, s.jsx(o("WAWebText.react").WAWebTextMuted, { children: n })]
		}), s.jsx("div", {
			className: "xdx6fka xvtqlqk x1tiyuxx x1nbhmlj",
			children: s.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" })
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
