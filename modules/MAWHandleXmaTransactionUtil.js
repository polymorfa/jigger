__d("MAWHandleXmaTransactionUtil", [
	"MAWBridgeXMA",
	"MAWDbChunkTxns",
	"MAWDexieTable",
	"MAWIndexedDb"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return s(e, t, n).then(function(e) {
			return o("MAWIndexedDb").afterTransaction({
				tag: "NewXMA",
				value: e
			});
		});
	}
	function s(e, t, n) {
		var r = n == null ? o("MAWDexieTable").dexieResolve(!1) : o("MAWDbChunkTxns").hasMediaChunk(e, n.hashedPlaintextHash);
		return r.then(function(e) {
			return o("MAWBridgeXMA").createBridgeXMA(n, t, {
				hasMedia: e,
				hasXmaFaviconMedia: !1,
				hasXmaHeaderMedia: !1
			});
		});
	}
	l.checkMediaChunkAndHandleXmaAfterTransaction = e;
}), 98);
