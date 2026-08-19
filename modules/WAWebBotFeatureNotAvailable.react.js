__d("WAWebBotFeatureNotAvailable.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsPictoAiIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { headerText: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(6), t = r("useWAWebFocusOnMount")(), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, { height: 88 }) }), e[0] = n) : n = e[0];
		var a = n, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), e[1] = i) : i = e[1];
		var l = i, d;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (d = [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], e[2] = d) : d = e[2];
		var m;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: d,
			children: [a, u.jsx(r("WAWebBox.react"), {
				xstyle: [
					c.headerText,
					o("WDSMargins.stylex").wdsMargins.marginHor8,
					o("WDSMargins.stylex").wdsMargins.marginTop16,
					o("WDSMargins.stylex").wdsMargins.marginBottom8
				],
				children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
					weight: "bold",
					children: l
				})
			})]
		}), e[3] = m) : m = e[3];
		var p;
		return e[4] !== t ? (p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: t,
			children: m
		}), e[4] = t, e[5] = p) : p = e[5], p;
	}
	l.default = d;
}), 226);
