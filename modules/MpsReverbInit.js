__d("MpsReverbInit", [
	"MAWWormMaintenanceDbSetup",
	"WebReverbDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			yield o("WebReverbDB").makeWebReverb(e.name, e.strEncKey, e.blockingErrorThreshold, e.onBlockingError, e.qplEvent), yield o("MAWWormMaintenanceDbSetup").mawWormDbMaintenanceDbSetup();
		}), s.apply(this, arguments);
	}
	l.initReverb = e;
}), 98);
