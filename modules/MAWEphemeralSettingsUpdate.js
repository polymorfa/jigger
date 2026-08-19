__d("MAWEphemeralSettingsUpdate", [
	"FBLogger",
	"I64",
	"LSOptimisticUpdateThreadDisappearingSettingStoredProcedure",
	"MAWChatJid",
	"MAWCurrentUser",
	"MAWEphemeralMsgAutoResetSystemId",
	"Promise",
	"asyncToGeneratorRuntime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("LSDatabaseSingletonLazyWrapper").__setRef("MAWEphemeralSettingsUpdate"), c = r("requireDeferred")("LSFactory").__setRef("MAWEphemeralSettingsUpdate"), d = r("requireDeferred")("WATimeUtils").__setRef("MAWEphemeralSettingsUpdate");
	function m(e, t, n, r) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield e.threads.get(r);
			if (a != null) {
				var i = a.disappearingSettingUpdatedTs, l = a.disappearingSettingTtl;
				if (i == null || l == null || (s || (s = o("I64"))).lt(i, (s || (s = o("I64"))).of_float(n)) && !(s || (s = o("I64"))).equal(l, (s || (s = o("I64"))).of_int32(t))) return !0;
			}
			return !1;
		}), p.apply(this, arguments);
	}
	function _(e, t, n, r, o, a, i) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, u, d, p) {
			var _ = yield m(t, a, i, u);
			if (!_) return (e || (e = n("Promise"))).resolve();
			d && r("FBLogger")("wmi_eb").addMetadata("LABYRINTH_WEB", "APP_VERSION", "OCCAM_EPHEMERAL_SETTINGS_UPDATE").info("[Occam][Web] Ephemeral Settings Updated.");
			var f = yield c.load();
			return r("LSOptimisticUpdateThreadDisappearingSettingStoredProcedure")(f(t), {
				disappearingTtl: (s || (s = o("I64"))).of_int32(a),
				threadKey: u,
				updatedBy: s.of_string(l ? r("MAWEphemeralMsgAutoResetSystemId") : p != null ? p : o("MAWCurrentUser").getID()),
				updatedTimestamp: s.of_float(i)
			});
		}), f.apply(this, arguments);
	}
	function g(e, t, n, r) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var o = yield u.load(), a = yield o();
			return a.runInTransaction(function(o) {
				return _(o, e, t, n, r, !1);
			}, "readwrite");
		}), h.apply(this, arguments);
	}
	function y(e, t, n, r, o) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i, l) {
			var s = yield u.load(), c = yield s(), m = (yield d.load()).castUnixTimeToMillisTime(r);
			return c.runInTransaction((function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
					var s = yield o("MAWChatJid").toThreadKeyMaybe(r, i);
					return s != null ? _(r, t, m, a, s, l) : (e || (e = n("Promise"))).resolve();
				});
				return function(e) {
					return r.apply(this, arguments);
				};
			})(), "readwrite");
		}), C.apply(this, arguments);
	}
	l.updateEphemeralSettingsWithTxn = _, l.updateEphemeralSettings = g, l.updateEphemeralSettingsByChatJid = y;
}), 98);
