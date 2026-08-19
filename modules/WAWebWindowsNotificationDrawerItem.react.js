__d("WAWebWindowsNotificationDrawerItem.react", [
	"WAWebDrawerButton.react",
	"WAWebText.react",
	"WDSIconIcChevronRight.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(11), n = e.onClick, a = e.subtitle, i = e.testid, l = e.title, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }), t[0] = c) : c = t[0];
		var d;
		t[1] !== a ? (d = s.jsx(o("WAWebText.react").WAWebTextMuted, { children: a }), t[1] = a, t[2] = d) : d = t[2];
		var m;
		t[3] !== n || t[4] !== d || t[5] !== i || t[6] !== l ? (m = s.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: i,
			divider: !1,
			useRoundedStyle: !0,
			xstyle: u.messagesItem,
			detail: c,
			detailXstyle: u.chevronIconPaddingRight,
			onClick: n,
			children: [l, d]
		}), t[3] = n, t[4] = d, t[5] = i, t[6] = l, t[7] = m) : m = t[7];
		var p;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx("div", {
			className: "xdx6fka xvtqlqk x1tiyuxx x1nbhmlj",
			children: s.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" })
		}), t[8] = p) : p = t[8];
		var _;
		return t[9] !== m ? (_ = s.jsxs(s.Fragment, { children: [m, p] }), t[9] = m, t[10] = _) : _ = t[10], _;
	}
	l.default = c;
}), 98);
