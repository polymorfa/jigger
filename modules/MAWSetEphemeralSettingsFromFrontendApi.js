__d("MAWSetEphemeralSettingsFromFrontendApi", [
	"FBLogger",
	"MAWEphemeralSettingsTxns",
	"MAWExternalId",
	"MAWIndexedDb",
	"MAWSendEphemeralSettingMsg",
	"MAWTransactionMode",
	"Promise",
	"WAResultOrError",
	"WATimeUtils",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READONLY,
		ephemeralSettings: s.READWRITE,
		groupInfo: s.READONLY,
		media: s.READONLY,
		messages: s.READWRITE,
		threads: s.READWRITE
	}, "handleAndWriteOutgoingUserEphemeralSettingChange", function(e) {
		return (function(t, n, r, a) {
			return o("MAWEphemeralSettingsTxns").handleAndWriteOutgoingUserEphemeralSettingChange(e, t, n, r, a);
		});
	}), c = function(a) {
		var t = a.chatJid, i = a.ephemeralExpirationInSec, l = a.ephemeralLastUpdatedOrSetTimestamp, s = a.isEphemeralSettingReset, c = a.s2sInstanceKey;
		if (t == null) return r("FBLogger")("messenger_web").mustfix("Both chatJid and threadId passed to setEphemeralSettingsFromFrontend are null"), (e || (e = n("Promise"))).resolve(o("WAResultOrError").makeError({
			isRetriable: !1,
			type: "missing-thread"
		}));
		var d = l != null ? l : o("WATimeUtils").unixTime();
		return u(t, i, d, s).then(function(e) {
			if (e.value.shouldUpdateSetting === !1) return o("WAResultOrError").makeResult({
				description: "send not needed",
				messageType: "fixMe"
			});
			var n = {
				ephemeralExpirationInSec: i,
				ephemeralLastUpdatedOrSetTimestamp: d
			};
			return o("MAWSendEphemeralSettingMsg").sendEphemeralSettingMsgFn({
				args: {
					ephemeralSetting: n,
					isEphemeralSettingReset: s,
					isForSyncResponse: !1
				},
				chatJid: t,
				externalId: o("MAWExternalId").generateExternalId(),
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: c
			});
		});
	};
	l.setEphemeralSettingsFromFrontend = c;
}), 98);
