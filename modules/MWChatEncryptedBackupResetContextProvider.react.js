__d("MWChatEncryptedBackupResetContextProvider.react", [
	"MWChatEncryptedBackupResetContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a = d(!1), i = d(!1), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			isEncryptedBackupResetStartedRef: a,
			isEncryptedBackupResetUserJourneyStartedRef: i
		}, t[0] = l) : l = t[0];
		var u = l, c;
		return t[1] !== n ? (c = s.jsx(r("MWChatEncryptedBackupResetContext").Provider, {
			value: u,
			children: n
		}), t[1] = n, t[2] = c) : c = t[2], c;
	}
	l.default = m;
}), 98);
