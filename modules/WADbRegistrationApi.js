__d("WADbRegistrationApi", [
	"Promise",
	"WADbSignal",
	"WAJids",
	"WALogger",
	"WASignalDB",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readwrite", function(t) {
			return t.stores.meta.bulkPut([{
				key: o("WADbSignal").MetaKeysEnum.deviceId,
				value: { deviceId: e }
			}]);
		}, o("WASignalDB").signalOp("saveDeviceId")).then(function() {});
	}
	function c(e, t) {
		return o("WASignalDB").getDb().runInTransaction(["meta", "signedPrekey"], "readwrite", (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
				yield (s || (s = n("Promise"))).all([r.stores.meta.bulkPut([
					{
						key: o("WADbSignal").MetaKeysEnum.deviceUUID,
						value: { deviceUUID: t.deviceUUID }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.fbid,
						value: { fbid: e }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.regId,
						value: { regId: t.signalRegInfo.regId }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.identityKeyPair,
						value: { identityKeyPair: t.signalRegInfo.identityKeyPair }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId,
						value: { lastSignedPrekeyId: t.signalRegInfo.signedPreKey.keyId }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.registrationVersion,
						value: { registrationVersion: t.registrationVersion }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.authKeyPair,
						value: { authKeyPair: t.signalRegInfo.authKeyPair }
					},
					{
						key: o("WADbSignal").MetaKeysEnum.deviceRegUnixTime,
						value: { deviceRegUnixTime: t.registrationUnixTime }
					}
				]), r.stores.signedPrekey.bulkPut([t.signalRegInfo.signedPreKey])]);
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("saveRegistrationMeta"));
	}
	var d = function(t) {
		var e = t.sessionId;
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readwrite", function(t) {
			return t.stores.meta.bulkPut([{
				key: o("WADbSignal").MetaKeysEnum.lastSessionDeviceWasLinkedTo,
				value: { lastSessionDeviceWasLinkedTo: e }
			}]);
		}, o("WASignalDB").signalOp("saveLastSessionDeviceWasLinkedTo")).then(function() {});
	};
	function m() {
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n, a = yield t.stores.meta.bulkGet([
					(n = o("WADbSignal")).MetaKeysEnum.fbid,
					n.MetaKeysEnum.deviceId,
					n.MetaKeysEnum.cat,
					n.MetaKeysEnum.regId,
					n.MetaKeysEnum.identityKeyPair,
					n.MetaKeysEnum.authKeyPair
				]), i = a[0], l = a[1], s = a[2], u = a[3], c = a[4], d = a[5];
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["worker: got db data"])));
				var m = i == null ? void 0 : i.value.fbid, p = l == null ? void 0 : l.value.deviceId, _ = s == null ? void 0 : s.value.cat, f = u == null ? void 0 : u.value.regId, g = c == null ? void 0 : c.value.identityKeyPair, h = d == null ? void 0 : d.value.authKeyPair;
				if (m == null) throw r("err")("fbid not set");
				if (p == null) throw r("err")("deviceId not set");
				if (_ == null) throw r("err")("fbCat not set");
				if (f == null || g == null) throw r("err")("regInfo not set");
				return {
					deviceJid: o("WAJids").toDeviceJid(o("WAJids").toMsgrUserJid(m), p),
					fbCat: _.encrypted_serialized_cat,
					regInfo: {
						authKeyPair: h,
						regId: f,
						staticKeyPair: g
					},
					userJid: o("WAJids").toMsgrUserJid(m)
				};
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("loadAllRegistrationMeta"));
	}
	l.saveDeviceId = u, l.saveRegistrationMeta = c, l.saveLastSessionDeviceWasLinkedTo = d, l.loadAllRegistrationMetaInTransaction = m;
}), 98);
