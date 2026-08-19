__d("WAWebDebugTee", ["WAHex", "WAWebTEENodeTokenThriftFetcher"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t) {
		var n = await o("WAWebTEENodeTokenThriftFetcher").fetchNodeTokenViaThrift(e != null ? e : "debug", t != null ? t : !1), r = {
			chipIdHex: o("WAHex").toHex(n.chipId),
			nodeTokenHex: o("WAHex").toHex(n.nodeToken),
			nodeTokenLength: n.nodeToken.length,
			ports: n.ports,
			tier: n.tier
		};
		return r;
	}
	var s = { fetchNodeTokenThrift: e };
	l.default = s;
}), 98);
