__d("MAWEphemeralUtil", [
	"FBLogger",
	"MAWAckLevel",
	"MAWBridgeMsgCountdown",
	"MAWExternalId",
	"MAWIndexedDb",
	"MAWLocalizationType",
	"MAWMsgType",
	"WAArmadilloApplication.pb",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		var n = t.ephemeralExpirationInSec !== e.ephemeralExpirationInSec && t.ephemeralLastUpdatedOrSetTimestamp === e.ephemeralLastUpdatedOrSetTimestamp;
		return n || e.ephemeralLastUpdatedOrSetTimestamp > t.ephemeralLastUpdatedOrSetTimestamp;
	}
	function c(t, n, r) {
		if (t == null) return !0;
		var a = t.ephemeralSetting;
		return a != null && a.ephemeralExpirationInSec === n ? (o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["New ephemeral duration should be different from the existing duration"]))), !1) : a != null && a.ephemeralLastUpdatedOrSetTimestamp > r ? (o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["The new ephemeral setting timestamp should be greater than the existing timestamp"]))), !1) : !0;
	}
	function d(e) {
		var t = {
			ack: o("MAWAckLevel").ACK.sent,
			altIndex: void 0,
			author: o("WAJids").AUTHOR_SYSTEM,
			externalId: o("MAWExternalId").generateExternalId(),
			msgContent: {
				adminMsgContent: [],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_MINUTES
			},
			ts: e,
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN
		};
		return {
			unstoredDbMedia: null,
			unstoredDbMsg: t,
			unstoredDbReaction: null
		};
	}
	function m(e, t) {
		var n;
		switch (t) {
			case o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREENSHOT_IMAGE:
				n = o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREENSHOT_IMAGE;
				break;
			case o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREEN_RECORDING:
				n = o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREEN_RECORDING;
				break;
			default: throw r("FBLogger")("messenger_web").mustfixThrow("Received unexpected screenshot action type");
		}
		var a = {
			ack: o("MAWAckLevel").ACK.sent,
			altIndex: void 0,
			author: o("WAJids").AUTHOR_SYSTEM,
			externalId: o("MAWExternalId").generateExternalId(),
			msgContent: {
				adminMsgContent: [],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_TAKE_SCREENSHOT,
				screenshotActionType: n
			},
			ts: e,
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION
		};
		return {
			unstoredDbMedia: null,
			unstoredDbMsg: a,
			unstoredDbReaction: void 0
		};
	}
	function p(e) {
		return o("WAJids").switchOnMsgrChatJidType(e, {
			group: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("Received invalid chatJid. We only support ephemeral messaging in 1:1 threads.");
			},
			user: function(t) {
				return t;
			}
		});
	}
	function _(e) {
		e != null && e.messageExpirationTs != null && e.ephemeralCounterStarted === !0 && o("MAWIndexedDb").afterTransaction({
			tag: "MsgClearCountdown",
			value: o("MAWBridgeMsgCountdown").createBridgeMsgClearCountdown(e.msgId, e.messageExpirationTs)
		});
	}
	function f(e, t) {
		return t != null && !u(e, t) && e.ephemeralLastUpdatedOrSetTimestamp !== t.ephemeralLastUpdatedOrSetTimestamp;
	}
	l.isLocalSettingOutdated = u, l.shouldUpdateForOutgoingUserEphemeralSettingChange = c, l.buildUnstoredDbEphemeralSettingMsgWithoutContentPlaceholder = d, l.buildUnstoredDbEphemeralScreenshotActionMsgWithoutContentPlaceholder = m, l.getUserJidForEphemeralSetting = p, l.maybeClearEphemeralMsgCountdown = _, l.shouldSendSyncResponse = f;
}), 98);
