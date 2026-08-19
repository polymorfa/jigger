__d("EBConsoleUtils", [
	"EBDeps",
	"FBLogger",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = new TextDecoder(), n = t.decode(e), o = parseInt(n, 10);
		if (isNaN(o)) throw r("FBLogger")("encrypted_backups").mustfixThrow("Invalid integer string in buffer: \"%s\"", n);
		return o;
	}
	function s(t) {
		return t.sort(function(t, n) {
			var r = e(t.epochAnonIdBlob), o = e(n.epochAnonIdBlob);
			return r - o;
		});
	}
	function u(e) {
		for (var t = "", n = e.byteLength, r = 0; r < n; r++) t += String.fromCharCode(e[r]);
		return btoa(t);
	}
	function c(e) {
		return u(new Uint8Array(e));
	}
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("EBDeps").getDeps().getLSDB(), n = yield t.runInTransaction(function(e) {
				return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.secure_encrypted_backups_epochs));
			}, "readwrite"), r = s(n);
			return r.map(function(t) {
				return babelHelpers.extends({}, t, {
					anonId: e(t.epochAnonIdBlob),
					epochAnonIdBlobBase64: c(t.epochAnonIdBlob),
					epochHeadBase64: t.epochHead != null ? c(t.epochHead) : null,
					epochRootKeyBlobBase64: c(t.epochRootKeyBlob)
				});
			});
		}), m.apply(this, arguments);
	}
	l.getAllEpochsSorted = d;
}), 98);
