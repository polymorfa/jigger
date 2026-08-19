__d("WAWebGroupHistoryPostJoinConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.children, n = e.okText, r = e.onCancel, a = e.onConfirm, i = e.title, l = c(!1), d = l[0], m = l[1];
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "group-history-post-join"
			},
			title: i,
			onOK: function() {
				d || (m(!0), a());
			},
			okText: n,
			okDisabled: d,
			okSpinner: d,
			onCancel: r,
			cancelDisabled: d,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
