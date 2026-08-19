__d("MAWMainThreadEBDeps", [
	"EBDeps",
	"EBMainThreadEBDBApiDeferred",
	"LSDatabaseSingleton",
	"MAWWaitForBackendSetup",
	"getMAWIdentityKeys",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("EBSMMainthreadAPI").__setRef("MAWMainThreadEBDeps");
	function u() {
		o("EBDeps").setDeps({
			getEBSMAPI: function() {
				return s.load();
			},
			getLSDB: function() {
				return (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			},
			getMAWIdentityKeys: r("getMAWIdentityKeys"),
			isBackendSetupSuccessful: function() {
				return o("MAWWaitForBackendSetup").isBackendSetupSuccessful();
			},
			trackAddingNewDevice: o("EBMainThreadEBDBApiDeferred").addNewDevice
		}, "MAW MainThread");
	}
	l.initEBDeps = u;
}), 98);
