__d("MAWGetMediaPlaintextApi", [
	"MAWIndexedDb",
	"MAWMediaUtils",
	"MAWOptimisticUploadManager",
	"MAWTransactionMode",
	"Promise",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function(t) {
		var e = o("MAWOptimisticUploadManager").getOptimisticUploadManager(), r = e.get(t);
		return r == null ? c(t) : (s || (s = n("Promise"))).resolve(r.file);
	};
	function c(t) {
		return o("MAWIndexedDb").makeMsgrTransactor({ chunk: o("MAWTransactionMode").READONLY }, "getMediaPlaintextFromDb", function(t) {
			return function(n) {
				var r = o("MAWMediaUtils").genHMACPlaintextHash(n);
				return t.chunk.where("hashedPlaintextHash").equals(r).first().then(function(t) {
					return t ? new Blob([t.blobData], { type: t.mimetype }) : (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Media blob does not exist for the given hashedPlaintextHash"]))), null);
				});
			};
		})(t);
	}
	l.getMediaPlaintext = u;
}), 98);
