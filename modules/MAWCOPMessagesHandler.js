__d("MAWCOPMessagesHandler", [
	"LSMessagingThreadAttributionType",
	"MAWBridge",
	"MAWCommonScheduler",
	"MAWEphemeralSettingsCache",
	"MAWEphemeralSettingsTxns",
	"MAWExternalId",
	"MAWLoggerUtils",
	"MAWQplProxy",
	"MAWSendEphemeralSettingMsg",
	"MAWSharedCOPLogger",
	"MWSharedS2SBaseAnnotations",
	"TaskSchedulerPriority",
	"WmiMetadataEphemeralSyncResponseBackoffWriter",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a, i, l) {
		r("MAWSharedCOPLogger").tags([o("MAWLoggerUtils").Tag.Ephemeral, o("MAWLoggerUtils").Tag.SettingSync]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleMsg: detected out-of-sync ephemeral setting for ", ", sending EPHEMERAL_SYNC_RESPONSE"])), a), r("promiseDone")(o("MAWCommonScheduler").mawCommonScheduler().run(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = o("MAWLoggerUtils").createInstanceKey(), n = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25313175, "1551"), yield o("MWSharedS2SBaseAnnotations").getSendToSentBaseAnnotations(o("MWSharedS2SBaseAnnotations").getMessageTypeParams({ isEphemeralSetting: !0 }), r("LSMessagingThreadAttributionType").UNKNOWN), { providedInstanceKey: e });
			try {
				var a = yield o("MAWSendEphemeralSettingMsg").sendEphemeralSettingMsgFn({
					args: {
						ephemeralSetting: {
							ephemeralExpirationInSec: l.ephemeralExpirationInSec,
							ephemeralLastUpdatedOrSetTimestamp: l.ephemeralLastUpdatedOrSetTimestamp
						},
						isEphemeralSettingReset: !1,
						isForSyncResponse: !0
					},
					chatJid: t,
					externalId: o("MAWExternalId").generateExternalId(),
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: e
				});
				if (a.success) {
					if (n.endSuccess(), o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? o("WmiMetadataEphemeralSyncResponseBackoffWriter").deleteEphemeralSyncResponseBackoffInfo([i]) : o("MAWEphemeralSettingsTxns").maybeResetEphemeralSyncResponseBackoffInfoInTxn(i), a.value != null) {
						var s = a.value;
						o("MAWBridge").getBridge().fireAndForget("event", "handleMessageSendResult", {
							report: s,
							success: !0
						}, !0);
					}
				} else n.endFail(a.error.type);
			} catch (e) {
				var u, c = e instanceof Error ? e : null;
				n == null || n.endFail("failed_to_send_empemeral_settings", { string: { errorDescription: (u = c == null ? void 0 : c.message) != null ? u : "" } });
			}
		}), {
			name: "ephemeral_sync_response",
			priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
		}).promise);
	}
	l.sendEphemeralSyncResponse = s;
}), 98);
