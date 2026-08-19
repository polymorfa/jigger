__d("EBWorkerEBDBApi", [
	"EBDB",
	"EBDBConsistencyApi",
	"EBLS",
	"EBMinosCheckWasmFeatureSupport",
	"LSAuthorityLevel",
	"LSEncryptedBackupsBackupTenancy",
	"WALogger",
	"WAResolvable",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new (o("WAResolvable")).Resolvable();
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndEBInitJK();
			if (!t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["startListeningEBDeviceRegistrations: WASM not supported, skipping"])));
				return;
			}
			var n = yield o("EBLS").genLSClient();
			try {
				yield o("EBDBConsistencyApi").startListeningDeviceRegistrations(n.db, o("EBDB").EBDBEnvironment.Worker);
			} catch (e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error on EBDB init in Worker: ", ""])), e);
			} finally {
				u.resolve(n.db);
			}
		}), d.apply(this, arguments);
	}
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			yield o("EBDBConsistencyApi").trackOverprompting(o("EBDB").EBDBEnvironment.Worker, e);
		}), p.apply(this, arguments);
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield u.promise;
			yield o("EBDBConsistencyApi").addNewDevice(t, o("EBDB").EBDBEnvironment.Worker, e);
		}), f.apply(this, arguments);
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield u.promise;
			return o("EBDBConsistencyApi").trackConsistency(t, o("EBDB").EBDBEnvironment.Worker, e), o("EBDBConsistencyApi").getDeviceId();
		}), h.apply(this, arguments);
	}
	function y() {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("EBDB").getEBDB(), t = yield e.store("secure_encrypted_backups_client_state").readAll();
			return t[0];
		}), C.apply(this, arguments);
	}
	function b() {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndEBInitJK();
			if (!e) return !1;
			var t = yield o("EBDB").getEBDB(), n = yield t.store("secure_encrypted_backups_client_state").readAll();
			if ((n == null ? void 0 : n.length) === 0) return !1;
			var a = n[0], i = a.authorityLevel, l = a.backupTenancy;
			if (i == null) return !1;
			var s = l != null ? l : r("LSEncryptedBackupsBackupTenancy").PRODUCTION;
			return Number(s) === r("LSEncryptedBackupsBackupTenancy").PRODUCTION && Number(i) === r("LSAuthorityLevel").AUTHORITATIVE;
		}), v.apply(this, arguments);
	}
	l.startListeningEBDeviceRegistrations = c, l.trackOverprompting = m, l.addNewDevice = _, l.trackConsistency = g, l.getSecureEBClientState = y, l.isEBEnabledEBDB = b;
}), 98);
