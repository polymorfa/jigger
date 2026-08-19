__d("MAWGetEphemeralSettings", [
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWChatJid",
	"ReQL",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"qex",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("LSDatabaseSingletonLazyWrapper").__setRef("MAWGetEphemeralSettings"), c = r("requireDeferred")("MAWEphemeralSettingsUpdate").__setRef("MAWGetEphemeralSettings");
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			if (o("WAJids").switchOnMsgrChatJidType(t, {
				group: function() {
					return !1;
				},
				user: function() {
					return !0;
				}
			})) {
				var a, i = yield u.load(), l = yield i(), d = n != null ? n : yield o("MAWChatJid").toThreadKeyMaybe(l.tables, t), m = (a = r("qex")._("1083")) != null ? a : !1;
				if (d != null) {
					var p = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(l.tables.threads).getKeyRange(d));
					return p != null && p.disappearingSettingTtl != null ? {
						ephemeralExpirationInSec: (s || (s = o("I64"))).to_int32(p.disappearingSettingTtl),
						ephemeralLastUpdatedOrSetTimestamp: p.disappearingSettingUpdatedTs != null ? o("WATimeUtils").castMilliSecondsToUnixTime((s || (s = o("I64"))).to_float(p.disappearingSettingUpdatedTs)) : o("WATimeUtils").unixTime()
					} : void 0;
				}
				return m ? void 0 : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getEphemeralSettings", { threadId: t }).then(function(n) {
					if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"[ephemeral settings in memory]: MAWGetEphemeralSettings api call for chatJid ",
						" returns ",
						""
					])), t, n), n != null) return r("promiseDone")(c.load().then(function(e) {
						return e.updateEphemeralSettingsByChatJid(n.ephemeralExpirationInSec, n.ephemeralLastUpdatedOrSetTimestamp, !1, t, !0);
					})), n;
				});
			}
		}), m.apply(this, arguments);
	}
	l.getEphemeralSetting = d;
}), 98);
