__d("MAWBridgeMsgUtils", ["LSTransportKey"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = Object.keys(r("LSTransportKey")).find(function(t) {
			return r("LSTransportKey")[t] === e;
		});
		return t ? r("LSTransportKey")[t] : "WhatsApp";
	}
	l.convertStringToLSTransportKeyType = e;
}), 98);
