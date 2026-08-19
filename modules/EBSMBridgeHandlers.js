__d("EBSMBridgeHandlers", ["EBSMAPI"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["qplInstanceKeyMainthread"], s = ["qplInstanceKeyMainthread"], u = {
		addDeviceWithOtcInWorker: function() {
			var t = arguments.length <= 0 ? void 0 : arguments[0], n = t.qplInstanceKeyMainthread, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
			return r("EBSMAPI").otcAddDevice(babelHelpers.extends({}, o, { qplInstanceKeyMainthread: n }));
		},
		addDeviceWithRecoveryCodeInWorker: function() {
			var e = arguments.length <= 0 ? void 0 : arguments[0], t = e.qplInstanceKeyMainthread, n = babelHelpers.objectWithoutPropertiesLoose(e, s);
			return r("EBSMAPI").addDeviceWithRecoveryCode(babelHelpers.extends({}, n, { qplInstanceKeyMainthread: t }));
		},
		addVirtualDeviceInWorker: function() {
			return r("EBSMAPI").addVirtualDevice(arguments.length <= 0 ? void 0 : arguments[0]);
		},
		ebDeleteEncryptedBackupInWorker: function() {
			return r("EBSMAPI").deleteEncryptedBackup(arguments.length <= 0 ? void 0 : arguments[0]);
		},
		ebOptOutInWorker: function() {
			return r("EBSMAPI").ebOptOut();
		},
		fetchBackupIdsInWorker: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return r("EBSMAPI").fetchBackupIds(t[0].source);
		},
		initializeBackupInWorker: function() {
			return r("EBSMAPI").initializeBackup(arguments.length <= 0 ? void 0 : arguments[0]);
		},
		revokeVirtualDeviceInWorker: function() {
			return r("EBSMAPI").revokeVirtualDevice(arguments.length <= 0 ? void 0 : arguments[0]);
		}
	};
	l.ebsmapiBridgeHandlers = u;
}), 98);
