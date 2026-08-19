__d("WAWebSuspendedGroupMediaDownloadFailureModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "suspended-group-download-failure"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
