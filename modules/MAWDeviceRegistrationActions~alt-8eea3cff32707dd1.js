__d("MAWDeviceRegistrationActions", [
	"MAWLoggerUtils",
	"MAWODSProxy",
	"MWFBLogger",
	"MessengerWebInitData",
	"WADbSignal",
	"WAGetRegistrationInfoApi",
	"WAOdsEnums",
	"WASignedKeyApi"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = "Device registration meta is incomplete: ", g = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.DeviceRegistration]);
	function h(t, n, r, a, i) {
		(t != null || n != null || r != null || a != null || i != null) && (t == null && g.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"",
			": ",
			""
		])), f, o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId), n == null && g.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"",
			": ",
			""
		])), f, o("WADbSignal").MetaKeysEnum.deviceUUID), r == null && g.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"",
			": ",
			""
		])), f, o("WADbSignal").MetaKeysEnum.regId), a == null && g.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"",
			": ",
			""
		])), f, o("WADbSignal").MetaKeysEnum.identityKeyPair), i == null && g.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"",
			": ",
			""
		])), f, o("WADbSignal").MetaKeysEnum.fbid));
	}
	async function y() {
		var e = await o("WAGetRegistrationInfoApi").getRegistrationInfo(), t = e.deviceId, n = e.deviceUUID, a = e.fbid, i = e.identityCompareResult, l = e.identityKeyPair, s = e.lastSessionDeviceWasLinkedTo, u = e.lastSignedPrekeyId, c = e.regId, d = e.registrationUnixTime, y = e.registrationVersion;
		if (i || o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.COMPARE_IDENTITY,
			key: "meta_identity_mismatch"
		}), u == null || n == null || c == null || l == null || a == null) return h(u, n, c, l, a), null;
		if (r("MessengerWebInitData").sessionId == null && g.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["MAWDeviceRegistrationActions: sessionId is null"]))), t != null && typeof t != "number") return g.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[Device Registration Meta Check] Device Id should be a number"]))), null;
		var C = await o("WASignedKeyApi").getSignedKey(u);
		return C == null ? (g.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["", ": signedPrekey}"])), f), null) : {
			deviceId: t,
			deviceUUID: n,
			identityCompareResult: i,
			lastSessionDeviceWasLinkedTo: s,
			lastSignedPrekeyId: u,
			registrationUnixTime: d,
			registrationVersion: y != null ? y : void 0,
			signalRegInfo: {
				identityKeyPair: l,
				regId: c,
				signedPreKey: C
			}
		};
	}
	l.getRegistrationMetaWorm = y;
}), 98);
