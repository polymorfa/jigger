__d("WAWebBizBusinessComplianceConfirmationModal", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function(t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-compliance-confirmation"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("OK"),
			onOK: function() {
				t == null || t(), o("WAWebModalManager").ModalManager.close();
			},
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: function() {
				return o("WAWebModalManager").ModalManager.close();
			},
			children: u.jsxs(u.Fragment, { children: [
				s._(
					/*BTDS*/
					""
				),
				u.jsx("br", {}),
				u.jsx("br", {}),
				s._(
					/*BTDS*/
					""
				)
			] })
		}));
	}, d = c;
	l.default = d;
}), 226);
