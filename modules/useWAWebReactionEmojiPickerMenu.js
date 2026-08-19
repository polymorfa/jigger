__d("useWAWebReactionEmojiPickerMenu", [
	"fbt",
	"WAWebReactionsPanel.react",
	"WAWebStopEvent",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = "x1wwg65c-B", d = "x1xe9l1o-B";
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.align, a = e.msgId, i = e.onClose, l = e.onSelection, c = e.targetRef, d = n === void 0 ? "start" : n, m;
		t[0] !== a || t[1] !== l ? (m = a != null ? u.jsx("div", {
			className: "x1280gxy x6nvzda x4i4b9w xhl9efl xj65ea0 x1ekq09l xlmuga0 x54tcbp xlzwp1d x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvktan5 x6ikm8r x10wlt62 x1jpg84f x65gd29 x4afe7t xuqacwm x10e4vud xyyilfv",
			"data-testid": "reaction_emoji_picker",
			role: "group",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onKeyPress: o("WAWebStopEvent").stopPropagation,
			children: u.jsx(r("WAWebReactionsPanel.react"), {
				msgId: a,
				onSelection: l
			})
		}) : null, t[0] = a, t[1] = l, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== d || t[4] !== p || t[5] !== i || t[6] !== c ? (_ = {
			targetRef: c,
			menu: p,
			position: "below",
			align: d,
			enableUIM: !0,
			isContainer: !0,
			repositionOnScroll: !0,
			onClose: i
		}, t[3] = d, t[4] = p, t[5] = i, t[6] = c, t[7] = _) : _ = t[7];
		var f = r("useWDSMenu")(_), g = f.closeMenu, h = f.isMenuOpen, y = f.menuPortal, C = f.openMenu, b;
		return t[8] !== g || t[9] !== h || t[10] !== y || t[11] !== C ? (b = {
			closeMenu: g,
			isMenuOpen: h,
			menuPortal: y,
			openMenu: C
		}, t[8] = g, t[9] = h, t[10] = y, t[11] = C, t[12] = b) : b = t[12], b;
	}
	l.default = m;
}), 226);
