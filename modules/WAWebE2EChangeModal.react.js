__d("WAWebE2EChangeModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contact, n = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebFrontendContactGetters").getFormattedShortName]), a = n[0], i = r("WAWebFbtCommon")("OK"), l = a, c = s._(
			/*BTDS*/
			"",
			[s._param("contactName", l)]
		), d = s._(
			/*BTDS*/
			"",
			[s._param("contactName", l)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "e2e-change"
			},
			title: c,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: i,
			children: d
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
