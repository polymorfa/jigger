__d("WmiMetadataDeviceChangeAlertsReader", [
	"MAWDbDeviceChangeAlerts",
	"WAGlobals",
	"WATimeUtils",
	"WmiMetadataDb",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WATimeUtils").pastUnixTime(30 * o("WATimeUtils").DAY_SECONDS);
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.after, r = t.isArchived, a = r === void 0 ? !1 : r, i = t.limit, l = i === void 0 ? 20 : i, s = o("WAGlobals").getMyDeviceJid(), u = yield o("WmiMetadataDb").getMetadataDb().runInTransaction(["deviceChangeAlerts"], "readonly", function(t) {
				return t.stores.deviceChangeAlerts.readAll({
					filter: function(r) {
						return r.isArchived === a && r.ts >= e && (n == null || r.deviceChangeAlertsId > n);
					},
					limit: l,
					order: "desc"
				});
			}, "WmiMetadataGetDeviceChangeAlertsByOptions");
			return u.map(function(e) {
				return babelHelpers.extends({}, e, {
					deviceChangeAlertsId: o("MAWDbDeviceChangeAlerts").unsafeCoerceToDeviceChangeAlertsID(e.deviceChangeAlertsId),
					isCurrentDevice: s === e.deviceJid
				});
			});
		}), u.apply(this, arguments);
	}
	l.getDeviceChangeAlertsByOptionsFromMetadataDb = s;
}), 98);
