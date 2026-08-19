__d("MAWAppMutex", [
	"LocalStorageMutex",
	"MAWLocalStorage",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "armadillo_msgr_mutex", s = "armadillo_msgr_local_takeover", u = null;
	function c() {
		return u == null && (u = new (o("LocalStorageMutex")).LocalStorageMutex({
			getStorage: o("MAWLocalStorage").getStorage,
			localTakeoverKey: s,
			log: function(t) {
				o("WALogger").LOG([t]);
			},
			logError: function(t) {
				o("WALogger").ERROR([t]);
			},
			mutexKey: e,
			setItemGuarded: o("MAWLocalStorage").setItemGuarded
		})), u;
	}
	l.MAW_MUTEX_KEY = e, l.MAW_LOCALTAKEOVER_KEY = s, l.use = c;
}), 98);
