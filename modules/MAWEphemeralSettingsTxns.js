__d("MAWEphemeralSettingsTxns", [
	"DateConsts",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWEphemeralSettingsCache",
	"MAWEphemeralUtil",
	"MAWIndexedDb",
	"MAWLoggerUtils",
	"MAWTransactionMode",
	"MAWUserJidWrapper",
	"MWFBLogger",
	"WAJids",
	"WAResultOrError",
	"WmiMetadataEphemeralSyncResponseBackoffWriter",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = o("MWFBLogger").MWLogger().tags([
		"maw_db",
		"txn",
		(_ = o("MAWLoggerUtils")).Tag.Ephemeral,
		_.Tag.SettingChange,
		_.Tag.Incoming
	]), g = o("MWFBLogger").MWLogger().tags([
		"maw_db",
		"txn",
		_.Tag.Ephemeral,
		_.Tag.SettingChange,
		_.Tag.Outgoing
	]), h = null, y = 90 * o("DateConsts").SEC_PER_DAY;
	function C(e, t) {
		if (o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled()) {
			var n = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(t);
			return o("MAWDexieTable").dexieResolve(n != null ? {
				ephemeralSetting: n,
				userJid: t
			} : null);
		}
		return e.ephemeralSettings.get({ userJid: t });
	}
	function b(t, n, r, a, i, l, d, m, p) {
		if (r < 0 || r > y) {
			var _ = o("WAJids").interpretAndValidateJid(l.jid).toString();
			throw f.mustfixThrow("EphemeralSetting duration is invalid " + r + ", jidType: " + _);
		}
		var g = {
			ephemeralExpirationInSec: r,
			ephemeralLastUpdatedOrSetTimestamp: a
		};
		f.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Handle Incoming Ephemeral Setting duration: ",
			", lastUpdated: ",
			". Thread: ",
			", Author: ",
			""
		])), r, a, String(l), n);
		var C = o("WAJids").interpretAsUserJid(l.jid);
		if (C == null) return f.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Received invalid chat jid for incoming ephemeral settings"]))), o("MAWDexieTable").dexieResolve(h);
		var b = o("WAJids").isAuthorMe(n) ? o("MAWUserJidWrapper").getMyUserJid() : n, v = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(l.jid), S = v == null ? void 0 : v.ephemeralExpirationInSec, R = v == null ? void 0 : v.ephemeralLastUpdatedOrSetTimestamp;
		if (p) return v != null && !o("MAWEphemeralUtil").isLocalSettingOutdated(g, v) ? a !== R ? (f.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"Sending Sync Response with duration ",
			", timestamp ",
			""
		])), S, R), o("MAWDexieTable").dexieResolve({ outOfSyncEphemeralSetting: {
			chatJid: l.jid,
			correctEphemeralExpirationInSec: v.ephemeralExpirationInSec,
			correctEphemeralLastUpdatedOrSetTimestamp: v.ephemeralLastUpdatedOrSetTimestamp
		} })) : (f.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Ephemeral setting in sync"]))), o("MAWDexieTable").dexieResolve(h)) : (o("MAWIndexedDb").afterTransaction({
			tag: "EphemeralSettingsUpdatedForUI",
			value: {
				author: o("WAJids").userIdFromJid(b),
				chatJid: l.jid,
				ephemeralSettingArgs: g,
				isEphemeralSettingReset: i
			}
		}), o("MAWDexieTable").dexieResolve(h));
		var L = {
			ephemeralSetting: g,
			ephemeralSyncResponseBackoffInfo: void 0,
			userJid: C
		};
		return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? (o("MAWEphemeralSettingsCache").setEphemeralSettingCache(l.jid, g), o("WmiMetadataEphemeralSyncResponseBackoffWriter").deleteEphemeralSyncResponseBackoffInfo([o("WAJids").unsafeCoerceToUserJid(l.jid)]), o("MAWDexieTable").dexieResolve(h)) : t.ephemeralSettings.put(L).then(function() {
			return h;
		});
	}
	function v(e, t, n, r, a) {
		var i = n;
		if (i < 0) throw g.mustfixThrow("Ephemeral duration should be 0 or more");
		var l = o("MAWEphemeralUtil").getUserJidForEphemeralSetting(t);
		return o("MAWDbThreadTxns").getThread(e, t).then(function(t) {
			return t.success ? C(e, l).then(function(t) {
				if (!o("MAWEphemeralUtil").shouldUpdateForOutgoingUserEphemeralSettingChange(t, i, r)) return o("WAResultOrError").makeResult({ shouldUpdateSetting: !1 });
				var n = {
					ephemeralExpirationInSec: i,
					ephemeralLastUpdatedOrSetTimestamp: r
				}, a = t == null ? {
					ephemeralSetting: n,
					userJid: l
				} : babelHelpers.extends({}, t, { ephemeralSetting: n });
				return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? (o("MAWEphemeralSettingsCache").setEphemeralSettingCache(l, n), o("WAResultOrError").makeResult({ shouldUpdateSetting: !0 })) : e.ephemeralSettings.put(a).then(function() {
					return o("WAResultOrError").makeResult({ shouldUpdateSetting: !0 });
				});
			}) : o("WAResultOrError").makeResult({ shouldUpdateSetting: !1 });
		});
	}
	function S(e, t, n) {
		var a = o("MAWEphemeralUtil").getUserJidForEphemeralSetting(t);
		return C(e, a).then(function(t) {
			if (t == null || t.ephemeralSetting == null) throw g.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"Contact ",
				" ",
				" and ephemeral setting ",
				" should not be null when receiving the server ack for outgoing ephemeral setting change"
			])), a, String(t), String(t == null ? void 0 : t.ephemeralSetting)), g.mustfixThrow("Contact and ephemeral setting should not be null when receiving the server ack for outgoing ephemeral setting change");
			var i = {
				ephemeralExpirationInSec: t.ephemeralSetting.ephemeralExpirationInSec,
				ephemeralLastUpdatedOrSetTimestamp: n
			}, l = babelHelpers.extends({}, t, { ephemeralSetting: i });
			return o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled() ? (o("MAWEphemeralSettingsCache").setEphemeralSettingCache(a, i), o("MAWDexieTable").dexieResolve()) : e.ephemeralSettings.put(l).then(r("emptyFunction"));
		});
	}
	function R(e, t) {
		var n = o("WAJids").interpretAsUserJid(t);
		n == null && g.mustfixThrow("Unexpected chatJid input to isEphemeralMessagesEnabledForContact");
		var r = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(t);
		return r == null ? o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError("no_ephemeral_setting")) : r.ephemeralExpirationInSec > 0 ? o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeResult({ outOfSyncEphemeralSetting: {
			chatJid: t,
			correctEphemeralExpirationInSec: r.ephemeralExpirationInSec,
			correctEphemeralLastUpdatedOrSetTimestamp: r.ephemeralLastUpdatedOrSetTimestamp
		} })) : o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError("no_ephemeral_setting"));
	}
	function L(e, t) {
		return e.ephemeralSettings.get({ userJid: t }).then(function(n) {
			return (n == null ? void 0 : n.ephemeralSyncResponseBackoffInfo) == null ? (f.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["maybeResetEphemeralSyncResponseBackoffInfo no op for ", ""])), t), o("WAResultOrError").makeResult()) : (f.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["maybeResetEphemeralSyncResponseBackoffInfo reset for ", ""])), t), n.ephemeralSyncResponseBackoffInfo = void 0, e.ephemeralSettings.put(n).then(function() {
				return o("WAResultOrError").makeResult();
			}));
		});
	}
	function E(e) {
		return o("MAWIndexedDb").makeMsgrTransactor({ ephemeralSettings: o("MAWTransactionMode").READWRITE }, "maybeResetEphemeralSyncResponseBackoffInfoTxn", function(t) {
			return function() {
				return L(t, e);
			};
		})();
	}
	l.handleAndWriteIncomingEphemeralSetting = b, l.handleAndWriteOutgoingUserEphemeralSettingChange = v, l.updateContactWhenEphemeralSettingChangeMarkedSent = S, l.getOutOfSyncEphemeralSettingForIncomingNonEphemeralMsg = R, l.maybeResetEphemeralSyncResponseBackoffInfo = L, l.maybeResetEphemeralSyncResponseBackoffInfoInTxn = E;
}), 98);
