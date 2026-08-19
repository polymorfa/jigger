__d("WAGetRegistrationInfoApi", [
	"Promise",
	"WACompareIdentity",
	"WADbSignal",
	"WALogger",
	"WASignalDB",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return o("WASignalDB").getDb().runInTransaction(["meta", "identity"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, r, a, i, l, u, c, d, m, p = yield (s || (s = n("Promise"))).all([e.stores.meta.bulkGet([
					o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId,
					o("WADbSignal").MetaKeysEnum.deviceUUID,
					o("WADbSignal").MetaKeysEnum.lastSessionDeviceWasLinkedTo,
					o("WADbSignal").MetaKeysEnum.regId,
					o("WADbSignal").MetaKeysEnum.identityKeyPair,
					o("WADbSignal").MetaKeysEnum.fbid,
					o("WADbSignal").MetaKeysEnum.deviceId,
					o("WADbSignal").MetaKeysEnum.registrationVersion,
					o("WADbSignal").MetaKeysEnum.deviceRegUnixTime,
					o("WADbSignal").MetaKeysEnum.cat
				]), o("WACompareIdentity").compareIdentity(e.stores)]), _ = p[0], f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = _[5], v = _[6], S = _[7], R = _[8], L = _[9], E = p[1], k = f == null || (t = f.value) == null ? void 0 : t.lastSignedPrekeyId, I = g == null || (r = g.value) == null ? void 0 : r.deviceUUID, T = h == null || (a = h.value) == null ? void 0 : a.lastSessionDeviceWasLinkedTo, D = y == null || (i = y.value) == null ? void 0 : i.regId, x = C == null || (l = C.value) == null ? void 0 : l.identityKeyPair, $ = b == null || (u = b.value) == null ? void 0 : u.fbid, P = v == null || (c = v.value) == null ? void 0 : c.deviceId, N = S == null ? void 0 : S.value.registrationVersion, M = R == null || (d = R.value) == null ? void 0 : d.deviceRegUnixTime, w = L == null || (m = L.value) == null || (m = m.cat) == null ? void 0 : m.expiration_time_in_seconds;
				return {
					lastSignedPrekeyId: k,
					deviceUUID: I,
					lastSessionDeviceWasLinkedTo: T,
					regId: D,
					identityKeyPair: x,
					registrationUnixTime: M,
					fbid: $,
					deviceId: P,
					registrationVersion: N,
					identityCompareResult: E,
					catExpiryUnixTime: w != null ? o("WATimeUtils").castToUnixTime(w) : void 0
				};
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getRegistrationInfo"));
	}
	var c = 10;
	function d(t) {
		return o("WASignalDB").getDb().runInTransaction(["plaintextMeta"], "readwrite", function(n) {
			return n.stores.plaintextMeta.get(o("WADbSignal").PlainTextMetaKeysEnum.registrationHistory).then(function(r) {
				var a = o("WATimeUtils").unixTime(), i = r == null ? void 0 : r.value.registrationHistory;
				if (!(i == null && t == null)) {
					var l;
					if (t != null) l = [].concat(i != null ? i : [], [{
						deviceRegTime: t,
						lastActivityTime: a
					}]);
					else {
						var s = i;
						if (s.length === 0) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Registration history log unexpectedly empty"])));
							return;
						}
						var u = s[s.length - 1];
						l = [].concat(s.slice(0, -1), [babelHelpers.extends({}, u, { lastActivityTime: a })]);
					}
					return n.stores.plaintextMeta.bulkPut([{
						key: o("WADbSignal").PlainTextMetaKeysEnum.registrationHistory,
						value: { registrationHistory: l.slice(-c) }
					}]).then(function() {});
				}
			});
		}, "updateRegistrationHistory");
	}
	l.getRegistrationInfo = u, l.updateRegistrationHistory = d;
}), 98);
