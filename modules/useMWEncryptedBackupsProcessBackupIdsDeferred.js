__d("useMWEncryptedBackupsProcessBackupIdsDeferred", [
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect, u = r("requireDeferred")("MWEncryptedBackupsProcessBackupIdsDEPRECATED").__setRef("useMWEncryptedBackupsProcessBackupIdsDeferred");
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = r("useAsyncReStore")(), a, i;
		t[0] !== n || t[1] !== e ? (a = function() {
			var t, o = !1;
			return u.onReadyImmediately(function(a) {
				r("promiseDone")(n, function(n) {
					o || (t = a.subscribeToEncryptedBackupsRow(n, e));
				});
			}), (function() {
				o = !0, t == null || t();
			});
		}, i = [n, e], t[0] = n, t[1] = e, t[2] = a, t[3] = i) : (a = t[2], i = t[3]), s(a, i);
	}
	l.default = c;
}), 98);
