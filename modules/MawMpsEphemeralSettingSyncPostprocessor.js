__d("MawMpsEphemeralSettingSyncPostprocessor", [
	"DateConsts",
	"FBLogger",
	"MAWCOPMessagesHandler",
	"MAWEphemeralSettingsCache",
	"MAWEphemeralSettingsTxns",
	"MAWEphemeralUtil",
	"MAWJids",
	"MAWProtobufDeserializers",
	"MpsTypes",
	"WAJids",
	"WALongInt",
	"WAStanzaUtils",
	"WATimeUtils",
	"WmiMetadataEphemeralSyncResponseBackoffWriter",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 90 * o("DateConsts").SEC_PER_DAY;
	function c(e) {
		var t, n, r, a, i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.message.payload), l = (t = i.encryptedTransportMessage()) == null || (t = t.proto.metadata) == null ? void 0 : t.chatEphemeralSetting;
		if (l == null) return null;
		var s = (n = o("WALongInt").maybeNumber(l.ephemeralSettingTimestamp)) != null ? n : 0;
		return {
			ephemeralExpirationInSec: (r = l.ephemeralExpiration) != null ? r : 0,
			ephemeralLastUpdatedOrSetTimestamp: o("WATimeUtils").castToUnixTime(Math.floor(s / 1e3)),
			isEphemeralSettingReset: (a = l.isEphemeralSettingReset) != null ? a : !1
		};
	}
	function d(t, n) {
		if (n.ephemeralExpirationInSec < 0 || n.ephemeralExpirationInSec > u) {
			var a = o("WAJids").interpretAndValidateJid(t.message.threadId).toString();
			r("FBLogger")("wmi").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"EphemeralSetting duration is invalid ",
				", jidType: ",
				""
			])), n.ephemeralExpirationInSec, a);
			return;
		}
		var i = o("MAWJids").threadIdToChatJid(t.message.threadId), l = o("WAJids").interpretAsUserJid(i);
		if (l == null) {
			r("FBLogger")("wmi").MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Received invalid chat jid for incoming ephemeral settings"])));
			return;
		}
		var c = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(i);
		if (c != null) {
			var d = {
				ephemeralExpirationInSec: n.ephemeralExpirationInSec,
				ephemeralLastUpdatedOrSetTimestamp: n.ephemeralLastUpdatedOrSetTimestamp
			};
			o("MAWEphemeralUtil").shouldSendSyncResponse(d, c) && o("MAWCOPMessagesHandler").sendEphemeralSyncResponse(i, o("WAStanzaUtils").toStanzaId(t.message.messageId), o("WAJids").unsafeCoerceToUserJid(t.message.senderId), c);
		}
	}
	function m(e) {
		var t = o("MAWJids").threadIdToChatJid(e.message.threadId);
		o("WAJids").switchOnMsgrChatJidType(t, {
			group: function() {
				var t = o("WAJids").unsafeCoerceToUserJid(e.message.senderId);
				o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? o("WmiMetadataEphemeralSyncResponseBackoffWriter").deleteEphemeralSyncResponseBackoffInfo([t]) : o("MAWEphemeralSettingsTxns").maybeResetEphemeralSyncResponseBackoffInfoInTxn(t);
			},
			user: function() {
				if (e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel) {
					var n = o("WAJids").interpretAsUserJid(t);
					if (n == null) return;
					var r = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(t);
					if (r == null || r.ephemeralExpirationInSec === 0) return;
					o("MAWCOPMessagesHandler").sendEphemeralSyncResponse(t, o("WAStanzaUtils").toStanzaId(e.message.messageId), o("WAJids").unsafeCoerceToUserJid(e.message.senderId), r);
				}
			}
		});
	}
	var p = {
		name: "ephemeral_setting_sync",
		process: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					for (var t of e) {
						var n = c(t);
						n != null ? d(t, n) : m(t);
					}
				} catch (e) {
					r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to process ephemeral settings via MPS");
				}
				return new Map();
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})()
	};
	l.MawMpsEphemeralSettingSyncPostprocessor = p;
}), 98);
