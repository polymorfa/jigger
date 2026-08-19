__d("WAWebWWAINUXModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebWWAINUXState",
	"WAWebWWAIPrivateProcessingBadge.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { buttonGroup: {
		paddingTop: "xexx8yu",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onAccept, a = e.onDecline, i;
		t[0] !== n ? (i = function() {
			o("WAWebWWAINUXState").markWWAINuxSeen(), n();
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, c, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), t[2] = c, t[3] = m) : (c = t[2], m = t[3]);
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSText.react"), {
			textAlign: "center",
			type: "Headline1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSText.react"), {
			textAlign: "center",
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [
				p,
				_,
				u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(r("WAWebWWAIPrivateProcessingBadge.react"), {}) })
			]
		}), t[6] = f) : f = t[6];
		var g;
		return t[7] !== l || t[8] !== a ? (g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			buttonGroupStyle: d.buttonGroup,
			cancelText: c,
			okText: m,
			onOK: l,
			onCancel: a,
			onOverlayClick: a,
			type: o("WAWebModal.react").ModalTheme.Promote,
			children: f
		}), t[7] = l, t[8] = a, t[9] = g) : g = t[9], g;
	}
	l.default = m;
}), 226);
