__d("WAWebLongLinkPop.react", [
	"fbt",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebWamEnumUrlStatusClicked",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.closeLongLinkModal(!0);
	};
	function d(e) {
		var t = e.link, n = e.statusItemViewEventRef, r = function() {
			(n == null ? void 0 : n.current) != null && (n.current.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.TWO_CLICKS), o("WAWebModalManager").ModalManager.close(), o("WAWebExternalLink.react").openExternalLink(t.href);
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "long-link"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onOK: r,
			onCancel: c,
			type: o("WAWebModal.react").ModalTheme.LinkPopup,
			children: u.jsx("div", { children: t.href })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
