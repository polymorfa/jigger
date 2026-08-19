__d("WAWebMediaUnsupportedModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtAppName",
	"WAWebFileSaver",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.msg, n = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebFileSaver").FileSaver.initDownload(t);
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "media-unsupported"
			},
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: n,
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
					/*BTDS*/
					""
				) }))]
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
