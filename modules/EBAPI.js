__d("EBAPI", ["MAWEBCombinedSwitch", "requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e = r("requireDeferred"))("EBAPIMinosVerifySingleEpoch").__setRef("EBAPI"), u = e("EBAPIWriteMinosPublicKeysForRecipient").__setRef("EBAPI"), c = e("EBGetContactEpochHead").__setRef("EBAPI"), d = e("EBGetMessageKeys").__setRef("EBAPI"), m = e("EBIsEbEnabled").__setRef("EBAPI"), p = e("EBMinosWriteKeyChangeAdminMessage").__setRef("EBAPI"), _ = e("EBMinosWriteSecureStorageAlert").__setRef("EBAPI"), f = {
		getContactEpochHead: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return c.load().then(function(e) {
				return e.getContactEpochHead.apply(e, t);
			});
		},
		getMessageKeys: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return d.load().then(function(e) {
				return e.getMessageKeys.apply(e, t);
			});
		},
		isEBEnabled: function() {
			return o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled();
		},
		isEbEnabledEbSwitch: function() {
			return m.load().then(function(e) {
				return e.isEbEnabledEbSwitch();
			});
		},
		minosVerifySingleEpoch: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return s.load().then(function(e) {
				return e.minosVerifySingleEpoch.apply(e, t);
			});
		},
		writeMinosKeyChangeAdminMessage: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return p.load().then(function(e) {
				return e.writeMinosKeyChangeAdminMessage.apply(e, t);
			});
		},
		writeMinosMailboxKeysForRecipientAPI: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return u.load().then(function(e) {
				return e.writeMinosMailboxKeysForRecipientAPI.apply(e, t);
			});
		},
		writeMinosSecureStorageAlert: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return _.load().then(function(e) {
				return e.writeMinosSecureStorageAlert.apply(e, t);
			});
		}
	}, g = f;
	l.default = g;
}), 98);
