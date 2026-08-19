__d("WAWebMAIBAPrimaryRedirectPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n = s._(
				/*BTDS*/
				""
			);
			t = u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "popup-url-text",
				children: n
			}), e[0] = t;
		} else t = e[0];
		var r = t, a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "waweb_cta_popup",
			tsNavigationData: {
				surface: "unknown",
				viewName: "mai-ba-primary-redirect"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			children: r
		}), e[1] = a) : a = e[1], a;
	}
	l.default = c;
}), 226);
