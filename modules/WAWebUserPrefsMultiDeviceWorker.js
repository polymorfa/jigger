__d("WAWebUserPrefsMultiDeviceWorker", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		return {
			getNoiseInfo: function() {
				return e.sendAndReceive("mainthread_userPrefsMultiDevice", "getNoiseInfo", void 0);
			},
			getNoiseInfoIv: function() {
				return e.sendAndReceive("mainthread_userPrefsMultiDevice", "getNoiseInfoIv", void 0);
			},
			setNoiseInfo: function(n) {
				return e.sendAndReceive("mainthread_userPrefsMultiDevice", "setNoiseInfo", { info: n });
			},
			setNoiseInfoIv: function(n) {
				return e.sendAndReceive("mainthread_userPrefsMultiDevice", "setNoiseInfoIv", { iv: n });
			}
		};
	}
	i.createUserPrefsMultiDeviceWorkerBridge = e;
}), 66);
