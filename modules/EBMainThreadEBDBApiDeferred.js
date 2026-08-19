__d("EBMainThreadEBDBApiDeferred", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("EBMainThreadEBDBApi").__setRef("EBMainThreadEBDBApiDeferred");
	function s() {
		return e.load().then(function(e) {
			return e.startListeningDeviceRegistrations();
		});
	}
	function u(t) {
		return e.load().then(function(e) {
			return e.trackOverprompting(t);
		});
	}
	function c(t) {
		return e.load().then(function(e) {
			return e.addNewDevice(t);
		});
	}
	function d() {
		return e.load().then(function(e) {
			return e.getEBDBDump();
		});
	}
	function m(t, n) {
		return e.load().then(function(e) {
			return e.trackConsistency(t, n);
		});
	}
	l.startListeningDeviceRegistrations = s, l.trackOverprompting = u, l.addNewDevice = c, l.getEBDBDump = d, l.trackConsistency = m;
}), 98);
