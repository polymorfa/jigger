__d("WAWebMAIBAPrimaryRedirectPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = s._(
			/*BTDS*/
			""
		), t = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			testid: "popup-url-text",
			children: e
		});
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
			children: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
