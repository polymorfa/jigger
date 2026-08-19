__d("WAWebGroupSettingsConfirmation", [
	"fbt",
	"Promise",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d() {
		return new (e || (e = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					e(!0), o("WAWebModalManager").ModalManager.close();
				},
				onCancel: function() {
					e(!1), o("WAWebModalManager").ModalManager.close();
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-settings-pending-requests"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		});
	}
	function m() {
		return new (e || (e = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					e(!0), o("WAWebModalManager").ModalManager.close();
				},
				onCancel: function() {
					e(!1), o("WAWebModalManager").ModalManager.close();
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-settings-delete-reports"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		});
	}
	function p(t, a) {
		return new (e || (e = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: r("WAWebFbtCommon")("Continue"),
				onOK: function() {
					e(!0), o("WAWebModalManager").ModalManager.close();
				},
				onCancel: function() {
					e(!1), o("WAWebModalManager").ModalManager.close();
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-settings-full"
				},
				children: s._(
					/*BTDS*/
					"",
					[s._param("available", t, [0]), s._plural(a, "pending")]
				)
			}));
		});
	}
	l.confirmPendingRequests = d, l.confirmDeleteReportsForAdminReview = m, l.confirmGroupFull = p;
}), 226);
