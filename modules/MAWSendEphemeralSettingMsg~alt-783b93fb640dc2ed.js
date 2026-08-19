__d("MAWSendEphemeralSettingMsg", [
	"MAWGetSyncResponseBackoffInfoByJidApi",
	"MAWLoggerUtils",
	"MAWMessageSendsCommon",
	"MAWMsgType",
	"MAWUpdateSyncResponseBackoffInfoApi",
	"MWFBLogger",
	"MawMessageSendService",
	"WAAPI",
	"WAJids",
	"WAResultOrError",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.Ephemeral, o("MAWLoggerUtils").Tag.SettingSync]);
	async function u(t, n, a, i, l, u) {
		if (t.isForSyncResponse) {
			var c = await o("WAJids").switchOnMsgrChatJidType(n, {
				group: function() {
					throw s.mustfixThrow("ChatJid is not supposed to be a group");
				},
				user: function(t) {
					return o("MAWGetSyncResponseBackoffInfoByJidApi").getSyncResponseBackoffInfoByJid(t);
				}
			});
			if (d(i, c)) return s.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ephemeral sync response backed off"]))), o("WAResultOrError").makeResult({
				description: "send not needed",
				messageType: "fixMe"
			});
		}
		await r("WAAPI").getDevicesBeforeSend({
			chatJid: n,
			reason: "SendEphemeralSettings"
		});
		var m = t.isForSyncResponse ? o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE : o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE;
		return await o("MAWUpdateSyncResponseBackoffInfoApi").updateSyncResponseBackoffInfo(n, m, i), t.isForSyncResponse ? o("MawMessageSendService").sendEphemeralSyncResponseMsg({
			chatJid: n,
			ephemeralSetting: t.ephemeralSetting,
			externalId: a,
			qplEventType: l,
			qplInstanceKey: u
		}) : o("MawMessageSendService").sendEphemeralSettingChangeMsg({
			chatJid: n,
			ephemeralSetting: t.ephemeralSetting,
			externalId: a,
			isEphemeralSettingReset: t.isEphemeralSettingReset,
			qplEventType: l,
			qplInstanceKey: u
		});
	}
	function c(e) {
		var t = e.args, n = e.chatJid, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey;
		return o("MAWMessageSendsCommon").messageSendObserver(a, i, function(e) {
			return u(t, n, r, e, a, i);
		}, "ephemeral", {
			author: o("WAJids").AUTHOR_ME,
			chat: n,
			externalId: r
		});
	}
	function d(e, t) {
		if (t == null) return !1;
		var n = t.syncResponseRetries, r = t.syncResponseSentTs;
		switch (n) {
			case 1: return o("WATimeUtils").happenedWithinAt(e, r, 180);
			case 2: return o("WATimeUtils").happenedWithinAt(e, r, 900);
			default: return !0;
		}
	}
	l.sendEphemeralSettingMsgFn = c;
}), 98);
