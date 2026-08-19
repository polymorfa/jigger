__d("MAWEphemeralSettingsUpdate", [
	"FBLogger",
	"I64",
	"LSOptimisticUpdateThreadDisappearingSettingStoredProcedure",
	"MAWChatJid",
	"MAWCurrentUser",
	"MAWEphemeralMsgAutoResetSystemId",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("LSDatabaseSingletonLazyWrapper").__setRef("MAWEphemeralSettingsUpdate"), u = r("requireDeferred")("LSFactory").__setRef("MAWEphemeralSettingsUpdate"), c = r("requireDeferred")("WATimeUtils").__setRef("MAWEphemeralSettingsUpdate");
	async function d(t, n, r, a) {
		var i = await t.threads.get(a);
		if (i != null) {
			var l = i.disappearingSettingUpdatedTs, s = i.disappearingSettingTtl;
			if (l == null || s == null || (e || (e = o("I64"))).lt(l, (e || (e = o("I64"))).of_float(r)) && !(e || (e = o("I64"))).equal(s, (e || (e = o("I64"))).of_int32(n))) return !0;
		}
		return !1;
	}
	async function m(t, n, a, i, l, s, c) {
		var m = await d(t, n, a, l);
		if (!m) return Promise.resolve();
		s && r("FBLogger")("wmi_eb").addMetadata("LABYRINTH_WEB", "APP_VERSION", "OCCAM_EPHEMERAL_SETTINGS_UPDATE").info("[Occam][Web] Ephemeral Settings Updated.");
		var p = await u.load();
		return r("LSOptimisticUpdateThreadDisappearingSettingStoredProcedure")(p(t), {
			disappearingTtl: (e || (e = o("I64"))).of_int32(n),
			threadKey: l,
			updatedBy: e.of_string(i ? r("MAWEphemeralMsgAutoResetSystemId") : c != null ? c : o("MAWCurrentUser").getID()),
			updatedTimestamp: e.of_float(a)
		});
	}
	async function p(e, t, n, r) {
		var o = await s.load(), a = await o();
		return a.runInTransaction(function(o) {
			return m(o, e, t, n, r, !1);
		}, "readwrite");
	}
	async function _(e, t, n, r, a) {
		var i = await s.load(), l = await i(), u = (await c.load()).castUnixTimeToMillisTime(t);
		return l.runInTransaction(async function(t) {
			var i = await o("MAWChatJid").toThreadKeyMaybe(t, r);
			return i != null ? m(t, e, u, n, i, a) : Promise.resolve();
		}, "readwrite");
	}
	l.updateEphemeralSettingsWithTxn = m, l.updateEphemeralSettings = p, l.updateEphemeralSettingsByChatJid = _;
}), 98);
