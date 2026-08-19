__d("WAWebMetaAiBotSessionCleanupJob", [
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebBackendEventBus",
	"WAWebBotBaseGating",
	"WAWebBotUtils",
	"WAWebDBDeviceListFanout",
	"WAWebSignalProtocolStore",
	"WAWebSignalSessionApi",
	"WAWebUserPrefsBot"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d() {
		if (o("WAWebABProps").getABPropConfigValue("ai_meta_ai_prekey_cleanup_enabled") && o("WAWebBotBaseGating").isBotEnabled()) {
			if (o("WATimeUtils").unixTimeMs() - o("WAWebUserPrefsBot").getMetaAiBotSessionLastCleanupTs() < o("WATimeUtils").DAY_MILLISECONDS) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[bot] skip cleanup; last run within interval"])));
				return;
			}
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[bot] running bot session cleanup"])));
			try {
				await p(), await o("WAWebUserPrefsBot").setMetaAiBotSessionLastCleanupTs(o("WATimeUtils").unixTimeMs());
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to clean up bot session: ", ""])), e).verbose().sendLogs("fbid-bot-session-cleanup-failed", { sendLogsType: o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD });
			}
		}
	}
	function m() {
		o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(function() {
			d();
		});
	}
	async function p() {
		var e, t = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: [
			(e = o("WAWebBotUtils")).META_BOT_PN_WID,
			e.META_BOT_FBID_WID,
			e.MANUS_BOT_FBID_WID,
			e.HATCH_BOT_FBID_WID
		] });
		if (t.length !== 0) {
			var n = await o("WAWebSignalSessionApi").hasSignalSessions(t), r = t.filter(function(e, t) {
				return n[t];
			});
			r.length !== 0 && (await Promise.all(r.map(function(e) {
				return o("WAWebSignalSessionApi").deleteRemoteSession(e);
			})), await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[bot] cleaned up ", " stale bot session(s)"])), r.length));
		}
	}
	l.maybeCleanupMetaAiBotSession = d, l.registerMetaAiBotSessionCleanupOnResume = m;
}), 98);
