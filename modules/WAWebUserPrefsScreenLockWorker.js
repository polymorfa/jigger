__d("WAWebUserPrefsScreenLockWorker", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		return {
			getScreenLockEnabled: function() {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "getScreenLockEnabled", void 0);
			},
			getScreenLockIterations: function() {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "getScreenLockIterations", void 0);
			},
			getScreenLockIvString: function() {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "getScreenLockIvString", void 0);
			},
			getScreenLockSalt: function() {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "getScreenLockSalt", void 0);
			},
			setScreenLockIterations: function(n) {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "setScreenLockIterations", { iterations: n });
			},
			setScreenLockIvString: function(n) {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "setScreenLockIvString", { iv: n });
			},
			setScreenLockSalt: function(n) {
				return e.sendAndReceive("mainthread_userPrefsScreenLock", "setScreenLockSalt", { salt: n });
			}
		};
	}
	i.createUserPrefsScreenLockWorkerBridge = e;
}), 66);
