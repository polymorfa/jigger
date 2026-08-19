__d("WAWebNewsletterForwardConfirmationModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.forwardToChat, n = e.handleConfirm, a = m(!1), i = a[0], l = a[1], s = d(function() {
			l(!0), n().finally(function() {
				l(!1);
			});
		}, [n]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-forward-confirmation"
			},
			okSpinner: i,
			okDisabled: i,
			cancelDisabled: i,
			onOK: s,
			okText: _.okText(),
			title: _.title(t.name),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			children: _.body()
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = {
		title: function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._param("channel-name", t)]
			);
		},
		body: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		okText: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	l.default = p;
}), 226);
