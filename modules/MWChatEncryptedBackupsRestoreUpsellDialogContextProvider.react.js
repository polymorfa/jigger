__d("MWChatEncryptedBackupsRestoreUpsellDialogContextProvider.react", [
	"MWChatEncryptedBackupsSetIsDialogPersistedContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.setIsDialogPersisted, i;
		t[0] !== a ? (i = { setIsDialogPersisted: a }, t[0] = a, t[1] = i) : i = t[1];
		var l = i;
		if (a != null) {
			var u;
			return t[2] !== n || t[3] !== l ? (u = s.jsx(r("MWChatEncryptedBackupsSetIsDialogPersistedContext").Provider, {
				value: l,
				children: n
			}), t[2] = n, t[3] = l, t[4] = u) : u = t[4], u;
		}
		return n;
	}
	l.default = c;
}), 98);
