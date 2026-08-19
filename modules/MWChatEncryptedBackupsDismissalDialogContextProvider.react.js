__d("MWChatEncryptedBackupsDismissalDialogContextProvider.react", [
	"MWChatEncryptedBackupsDismissalDialogContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.isDismissedDisabledValue, i = d(a), l = i[0], u = i[1], c;
		t[0] !== l ? (c = {
			isDismissedDisabled: l,
			setIsDismissedDisabled: u
		}, t[0] = l, t[1] = c) : c = t[1];
		var m = c, p;
		return t[2] !== n || t[3] !== m ? (p = s.jsx(r("MWChatEncryptedBackupsDismissalDialogContext").Provider, {
			value: m,
			children: n
		}), t[2] = n, t[3] = m, t[4] = p) : p = t[4], p;
	}
	l.default = m;
}), 98);
