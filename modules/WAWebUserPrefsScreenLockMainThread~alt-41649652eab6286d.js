__d("WAWebUserPrefsScreenLockMainThread", ["WAWebUserPrefsScreenLock"], (function(t, n, r, o, a, i, l) {
	var e = {
		getScreenLockEnabled: async function() {
			return o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
		},
		getScreenLockIterations: async function() {
			return o("WAWebUserPrefsScreenLock").getScreenLockIterations();
		},
		getScreenLockIvString: async function() {
			return o("WAWebUserPrefsScreenLock").getScreenLockIvString();
		},
		getScreenLockSalt: async function() {
			return o("WAWebUserPrefsScreenLock").getScreenLockSalt();
		},
		setScreenLockIterations: async function(t) {
			return o("WAWebUserPrefsScreenLock").setScreenLockIterations(t);
		},
		setScreenLockIvString: async function(t) {
			return o("WAWebUserPrefsScreenLock").setScreenLockIvString(t);
		},
		setScreenLockSalt: async function(t) {
			return o("WAWebUserPrefsScreenLock").setScreenLockSalt(t);
		}
	};
	l.userPrefsScreenLockMainThread = e;
}), 98);
