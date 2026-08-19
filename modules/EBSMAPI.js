__d("EBSMAPI", [
	"EBDeps",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return s != null || (s = o("EBDeps").getDeps().getEBSMAPI()), s;
	}
	var c = {
		addDeviceWithEBKeys: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).addDeviceWithEBKeys.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		addDeviceWithRecoveryCode: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).addDeviceWithRecoveryCode.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		addVirtualDevice: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).addVirtualDevice.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		deleteBackupsOnClient: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).deleteBackupsOnClient.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		deleteEncryptedBackup: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).deleteEncryptedBackup.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		ebOptOut: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).ebOptOut.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		fetchBackupIds: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).fetchBackupIds.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		generateRecoveryCode: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).generateRecoveryCode.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		getEBState: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return (yield u()).getEBState();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		getLSVirtualDevices: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return (yield u()).getLSVirtualDevices(e);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		initializeBackup: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).initializeBackup.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		isEbEnabled: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).isEbEnabled.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		optOutOfBackup: function() {
			return (e || (e = n("Promise"))).resolve();
		},
		otcAddDevice: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).otcAddDevice.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		repairEpochs: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return (yield u()).repairEpochs();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		repairMembershipHmac: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).repairMembershipHmac.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		revokeVirtualDevice: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				return (e = yield u()).revokeVirtualDevice.apply(e, arguments);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		syncEpochs: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return (yield u()).syncEpochs();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})()
	}, d = c;
	l.default = d;
}), 98);
