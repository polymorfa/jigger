__d("WAWebDialerPadDrawer.react", [
	"fbt",
	"WAWebDialerPad.react",
	"WAWebDialerPadSearchResult.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerUtils",
	"WAWebRichTextField.react",
	"WAWebTabOrder",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = { search: {
		paddingInlineEnd: "x1xnnf8n",
		paddingInlineStart: "x106a9eq",
		color: "x14ug900",
		$$css: !0
	} };
	function _(e) {
		var t = e.entryPoint, n = e.initialPhoneNumber, a = e.onBack, i = e.onCancel, l = e.onContactClick, c = e.ref, _ = e.viewType, f = m(n != null ? n : ""), g = f[0], h = f[1], y = d(null), C = function(t) {
			var e = t.text;
			h(e);
		}, b = function(t) {
			h(t === "backspace" ? g.slice(0, -1) : g + t), y.current != null && y.current.triggerFocus();
		}, v = o("WAWebDrawerUtils").getDrawerHeaderType(_);
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "dialer-pad-drawer",
			viewType: _,
			tsNavigationData: {
				surface: "unknown",
				viewName: "dialer-pad"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: v,
				onBack: a,
				onCancel: i
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
				u.jsx(o("WAWebRichTextField.react").RichTextField, {
					ref: y,
					containerXstyle: p.search,
					value: g,
					managed: !0,
					theme: "phone-input",
					lineWrap: !1,
					startActive: !0,
					emojiBtnPosition: "none",
					hideFloatingLabel: !0,
					focusOnMount: !0,
					testid: "phone-number-input",
					onChange: C,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH
				}),
				u.jsx("div", {
					className: "xy75621 xx6bls6",
					children: u.jsx(r("WAWebDialerPadSearchResult.react"), {
						searchText: g,
						onResultClick: l,
						entryPoint: t
					})
				}),
				u.jsx(r("WAWebDialerPad.react"), {
					onClick: b,
					testid: "dialer-pad"
				})
			] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
