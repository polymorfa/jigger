__d("WAWebHatchPairingUnavailableDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { title: {
		marginTop: "xw7yly9",
		marginBottom: "x1yztbdb",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			textAlign: "center",
			xstyle: c.title,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: [t, u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 226);
