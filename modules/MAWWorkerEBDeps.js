__d("MAWWorkerEBDeps", [
	"EBDeps",
	"EBLS",
	"EBMessagePointQuery",
	"EBSMWorkerThreadAPI",
	"EBWorkerEBDBApiDeferred",
	"MAWMpsDecryptedProtobufToFullMessage",
	"Promise",
	"WAAPI"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		o("EBDeps").setDeps({
			decryptedProtobufToFullMessage: o("MAWMpsDecryptedProtobufToFullMessage").decryptedProtobufToFullMessage,
			getEBSMAPI: function() {
				return (e || (e = n("Promise"))).resolve(r("EBSMWorkerThreadAPI"));
			},
			getLSDB: function() {
				return o("EBLS").init().then(function(e) {
					return e.db;
				});
			},
			getMAWIdentityKeys: r("WAAPI").getIdentityKeys,
			isBackendSetupSuccessful: function() {
				return !0;
			},
			messagePointQuery: o("EBMessagePointQuery").messagePointQuery,
			trackAddingNewDevice: o("EBWorkerEBDBApiDeferred").addNewDevice
		}, "MAW worker");
	}
	l.initEBDeps = s;
}), 98);
