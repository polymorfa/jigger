__d("WAWebGroupHistoryPostJoinConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.children, r = e.okText, a = e.onCancel, i = e.onConfirm, l = e.title, d = c(!1), m = d[0], p = d[1], _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			surface: "unknown",
			viewName: "group-history-post-join"
		}, t[0] = _) : _ = t[0];
		var f;
		t[1] !== m || t[2] !== i ? (f = function() {
			m || (p(!0), i());
		}, t[1] = m, t[2] = i, t[3] = f) : f = t[3];
		var g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[4] = g) : g = t[4];
		var h;
		return t[5] !== n || t[6] !== m || t[7] !== r || t[8] !== a || t[9] !== f || t[10] !== l ? (h = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: _,
			title: l,
			onOK: f,
			okText: r,
			okDisabled: m,
			okSpinner: m,
			onCancel: a,
			cancelDisabled: m,
			cancelText: g,
			children: n
		}), t[5] = n, t[6] = m, t[7] = r, t[8] = a, t[9] = f, t[10] = l, t[11] = h) : h = t[11], h;
	}
	l.default = d;
}), 226);
