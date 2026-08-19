__d("MAWDbAppDataTxns", ["MAWAckLevel", "WALogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, r) {
		return t.appData.get({ externalId: n }).then(function(n) {
			if (!n) return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updateAppDataSystemAck on non existing appData"]))), null;
			if (n.ack > o("MAWAckLevel").ACK.clock) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["updateAppDataSystemAck on sent appData"]))), n;
			var a = babelHelpers.extends({}, n, { ack: r });
			return t.appData.put(a).then(function() {
				return a;
			});
		});
	}
	function c(e, t) {
		return e.appData.bulkGet(t);
	}
	l.updateAppDataSystemAck = u, l.bulkGetAppData = c;
}), 98);
