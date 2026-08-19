__d("EBDBConsistencyApi", [
	"$InternalEnum",
	"EBDB",
	"FBLogger",
	"I64",
	"QPLUserFlow",
	"ReQL",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = [
		"encrypted_backups_virtual_devices",
		"secure_encrypted_backups_recovery_code_status",
		"device_metadata",
		"secure_encrypted_backups_epochs",
		"secure_encrypted_backups_client_state",
		"encrypted_backups",
		"experiences_shared_state",
		"auto_restore_opt_out"
	], u = null;
	function c() {
		return u;
	}
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			try {
				var a = yield o("EBDB").getEBDB(), l = BigInt((e || (e = o("I64"))).to_string(n));
				yield a.runInTransaction(["device_state"], "readwrite", function(e) {
					return e.stores.device_state.bulkPut([{
						deviceId: l,
						env: t
					}]);
				}, "EBDB - AddDevice", i.id + ":54"), u = l;
			} catch (e) {
				r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("Error on EBDB - AddDevice");
			}
		}), m.apply(this, arguments);
	}
	function p(e) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.secure_encrypted_backups_client_state)).then(function(e) {
			return e == null ? void 0 : e.deviceId;
		});
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (n != null) return d(t, n);
			try {
				var o = yield p(e);
				return o == null ? void 0 : d(t, o);
			} catch (e) {
				r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("Error on fetching secure_encrypted_backups_client_state");
			}
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			r("QPLUserFlow").addPoint(t, "track_overprompting_start");
			try {
				var a = yield o("EBDB").getEBDB(), l = !1;
				yield a.runInTransaction(["device_state"], "readwrite", (function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						var n = yield t.stores.device_state.get(e);
						(n == null ? void 0 : n.deviceId) != null && (l = !0);
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})(), "EBDB - AddDevice", i.id + ":107"), r("QPLUserFlow").addAnnotations(t, { bool: { overprompting: l } }), r("QPLUserFlow").addPoint(t, "track_overprompting_end");
			} catch (e) {
				r("QPLUserFlow").addPoint(t, "track_overprompting_fail"), r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("Error on track overpropting");
			}
		}), h.apply(this, arguments);
	}
	var y = n("$InternalEnum")({
		Disabled: 0,
		EbsmInconsistent: 1,
		EbdbInconsistent: 2,
		Enabled: 3,
		Inconsistent: 4
	});
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield p(t), r = n != null ? BigInt((e || (e = o("I64"))).to_string(n)) : null;
			return r == null && u == null ? y.Disabled : r == null && u != null ? y.EbsmInconsistent : r != null && u == null ? y.EbdbInconsistent : r === u ? y.Enabled : y.Inconsistent;
		}), b.apply(this, arguments);
	}
	function v(e, t, n, r) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, o) {
			var a = 1 / r("justknobx")._("3914");
			if (!(Math.random() >= a)) {
				var i = r("qpl")._(521471316, "2831");
				try {
					r("QPLUserFlow").start(i);
					var l = yield C(e);
					o != null && r("QPLUserFlow").addAnnotations(i, o()), r("QPLUserFlow").endSuccess(i, { annotations: { int: {
						consistency: l,
						env: t,
						operation: n
					} } });
				} catch (e) {
					r("QPLUserFlow").endFailure(i, "error"), r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("Error on trackConsistency in %s", t);
				}
			}
		}), S.apply(this, arguments);
	}
	function R() {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("EBDB").clearDeviceState(), u = null;
		}), L.apply(this, arguments);
	}
	var E;
	function k(e, t) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			E != null && E(), yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.encrypted_backups)).then(function(e) {
				e != null && ((e == null ? void 0 : e.backupId) == null || (e == null ? void 0 : e.isUserOptedOut) === !0) && R();
			}).catch(function(e) {
				r("FBLogger")("wmi_eb").catching(e).mustfix("EBDBApi: EBLS error on fetching data from encrypted_backups");
			}), E = t.tables.encrypted_backups.subscribe(function(e, t) {
				t.operation !== "delete" && (t.value.backupId == null || t.value.isUserOptedOut === !0) && R();
			});
			var a = yield o("EBDB").getEBDB(), l = yield a.runInTransaction(["device_state"], "readonly", function(e) {
				return e.stores.device_state.get(n);
			}, "EBDB - readDeviceState", i.id + ":250").catch(function(e) {
				r("FBLogger")("wmi_eb").catching(e).mustfix("EBDB error: fetching device_state");
			});
			if (u = T(l == null ? void 0 : l.deviceId), u == null) {
				var s = yield p(t);
				if (s == null) return;
				var c = BigInt((e || (e = o("I64"))).to_string(s));
				u = c, yield a.runInTransaction(["device_state"], "readwrite", function(e) {
					return e.stores.device_state.bulkPut([{
						deviceId: c,
						env: n
					}]);
				}, "EBDB - writeDeviceState", i.id + ":272").catch(function(e) {
					r("FBLogger")("wmi_eb").catching(e).mustfix("EBDB error: write device_state");
				});
			}
		}), I.apply(this, arguments);
	}
	function T(t) {
		if (t != null) {
			if (typeof t == "bigint") return t;
			if (typeof t == "number") return BigInt(t);
			if (typeof t == "string") try {
				return BigInt(t);
			} catch (e) {
				r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("EBDBApi: Parsing string as BigInt"), R();
				return;
			}
			if (Array.isArray(t)) try {
				return BigInt((e || (e = o("I64"))).to_string(t));
			} catch (e) {
				r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(e)).mustfix("EBDBApi: Parsing I64 as BigInt"), R();
				return;
			}
			r("FBLogger")("wmi_eb").mustfix("EBDBApi: Parsing unknown as BigInt %s", String(t)), R();
		}
	}
	l.EB_STORES = s, l.getDeviceId = c, l.addNewDevice = _, l.trackOverprompting = g, l.EBConsistencyResult = y, l.checkRegistrationConsistency = C, l.trackConsistency = v, l.clearDeviceState = R, l.startListeningDeviceRegistrations = k;
}), 98);
