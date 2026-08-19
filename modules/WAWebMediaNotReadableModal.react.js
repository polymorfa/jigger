__d("WAWebMediaNotReadableModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "media-not-readable"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
