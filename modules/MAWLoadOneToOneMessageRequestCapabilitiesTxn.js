__d("MAWLoadOneToOneMessageRequestCapabilitiesTxn", [
	"MAWDexieTable",
	"MAWIndexedDb",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.map(o("WAJids").interpretAsUserJid).forEach(function(e) {
			return e != null && o("MAWIndexedDb").afterTransaction({
				tag: "OneToOneMessageRequestLoaded",
				value: {
					fbid: o("WAJids").extractUserId(e),
					threadJid: e
				}
			});
		}), o("MAWDexieTable").dexieResolve();
	}
	l.loadOneToOneMessageRequestCapabilities = e;
}), 98);
