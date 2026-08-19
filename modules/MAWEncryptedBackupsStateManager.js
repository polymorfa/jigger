__d("MAWEncryptedBackupsStateManager", ["MAWEBSwitch"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case 1: return;
			case 3:
				r("MAWEBSwitch").set(!0);
				return;
			case 2:
			case 4:
			default:
				r("MAWEBSwitch").set(!1);
				return;
		}
	}
	function s(e) {
		return e === 4 || e === 3;
	}
	l.setEncryptedBackupsState = e, l.eligibleForEBUX = s;
}), 98);
