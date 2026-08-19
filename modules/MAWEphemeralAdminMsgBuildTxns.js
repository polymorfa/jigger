__d("MAWEphemeralAdminMsgBuildTxns", [
	"FBLogger",
	"MAWAckLevel",
	"MAWBridgeMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWEphemeralUtils",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWUserJidWrapper",
	"MAWWriteMsgTxns",
	"WAJids",
	"WAOdsEnums",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l, s, u) {
		if (n < 0) throw r("FBLogger")("messenger_web").mustfixThrow("Received unexpected ephemeral time setting");
		var c = o("MAWEphemeralUtils").getEphemeralSettingChangeData(t, n, l, s), d = {
			ack: o("MAWAckLevel").ACK.sent,
			altIndex: void 0,
			author: t != null ? t : o("WAJids").AUTHOR_SYSTEM,
			msgContent: c,
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN
		}, m = t != null ? o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, u, i.jid, t) : o("MAWDexieTable").dexieResolve();
		return m.then(function(t) {
			if (t == null) {
				var n = babelHelpers.extends({}, d, {
					externalId: u,
					sortOrderMs: o("WATimeUtils").castUnixTimeToMillisTime(a),
					threadJid: i.jid,
					ts: a
				});
				return o("MAWWriteMsgTxns").writeDedupedEphemeralSettingAdminMessage(e, n, i, o("WATimeUtils").castUnixTimeToMillisTime(a)).then(function(e) {
					return babelHelpers.extends({}, n, {
						msgId: e.msgId,
						protocolMsgId: e.protocolMsgId,
						rowId: e.rowId
					});
				});
			} else if (t.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT) {
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_LS_SYNC_IMPROVEMENTS,
					key: "ephemeral_setting_admin_msg_ciphertext_replacement"
				});
				var r = babelHelpers.extends({}, t, d);
				return e.messages.put(r).then(function() {
					return o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(r)
					}), r;
				});
			} else return null;
		});
	}
	function s(e, t, n, r, a, i, l) {
		var s = t === o("MAWUserJidWrapper").getMyUserJid(), u = o("MAWEphemeralUtils").getEphemeralScreenshotActionData(a, t, s), c = u.ephemeralScreenshotActionContent, d = u.ephemeralScreenshotActionType;
		if (l == null) {
			var m = {
				ack: o("MAWAckLevel").ACK.received,
				altIndex: void 0,
				author: s ? o("WAJids").AUTHOR_ME : t,
				externalId: i,
				msgContent: {
					adminMsgContent: c,
					adminType: d,
					screenshotActionType: a,
					version: 1
				},
				sortOrderMs: o("WATimeUtils").castUnixTimeToMillisTime(r),
				threadJid: n.jid,
				ts: r,
				type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION
			};
			return o("MAWWriteMsgTxns").writeDedupedEphemeralSettingAdminMessage(e, m, n, o("WATimeUtils").castUnixTimeToMillisTime(r)).then(function(e) {
				return babelHelpers.extends({}, m, {
					msgId: e.msgId,
					protocolMsgId: e.protocolMsgId,
					rowId: e.rowId
				});
			});
		} else if (l.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT) {
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_LS_SYNC_IMPROVEMENTS,
				key: "ephemeral_screenshot_action_msg_ciphertext_replacement"
			});
			var p = babelHelpers.extends({}, l, {
				ack: o("MAWAckLevel").ACK.received,
				altIndex: void 0,
				author: s ? o("WAJids").AUTHOR_ME : t,
				msgContent: {
					adminMsgContent: c,
					adminType: d,
					screenshotActionType: a,
					version: 1
				},
				type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION
			});
			return e.messages.put(p).then(function() {
				return o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(p)
				}), p;
			});
		} else return o("MAWDexieTable").dexieResolve(null);
	}
	l.writeEphemeralSettingAdminMsg = e, l.writeEphemeralScreenshotActionMsg = s;
}), 98);
