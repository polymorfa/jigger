__d("WAWebBizLinkedCatalogErrorPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtAppName",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e, t, n) {
		var r, a;
		t ? (a = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
				/*BTDS*/
				""
			) }))]
		), e ? r = s._(
			/*BTDS*/
			""
		) : r = s._(
			/*BTDS*/
			""
		)) : e ? (r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		)) : (r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		)), n && o("WAWebModalManager").ModalManager.once("close_modal", n), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "linked-catalog-error"
			},
			title: r,
			onOK: o("WAWebModalManager").closeModalManager,
			children: a
		}));
	}
	l.showConnectedCatalogDisabledPopup = c;
}), 226);
