__d("MWSetupDBEncryption", [
	"BrowserLockManager",
	"ExecutionEnvironment",
	"FBLogger",
	"MAWEncryptionIndexedDbV2",
	"MAWKeychain",
	"MWEARKeychainV3",
	"Promise",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function(t, n) {
		return n();
	};
	function c(e) {
		u = e;
	}
	var d = "mw_ear_db";
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				return yield o("MAWEncryptionIndexedDbV2").makeEncryptionDB(e), yield u("init_setup_keychain", function() {
					return r("MAWKeychain").init("global_ear", e);
				});
			} catch (n) {
				var t = n instanceof Error ? n : r("getErrorSafe")(n);
				return r("FBLogger")("messenger_web").catching(t).mustfix("[%s] EAR setup error", String(e)), o("WAResultOrError").DEPRECATED_makeError("keychain-setup-failure", t);
			}
		}), p.apply(this, arguments);
	}
	function _(e) {
		return o("MAWEncryptionIndexedDbV2").getEncryptionDB() != null && o("MWEARKeychainV3").isKeychainInitialised("global_ear") ? (s || (s = n("Promise"))).resolve(o("WAResultOrError").makeResult(o("MWEARKeychainV3").getLatestVersion("global_ear"))) : r("BrowserLockManager") != null ? new (s || (s = (n("Promise"))))(function(t, o) {
			r("promiseDone")(r("BrowserLockManager").request(d, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield m(e);
					t(n);
				} catch (e) {
					o(e);
				}
			})), function(e) {}, function(e) {
				o(e);
			});
		}) : m(e);
	}
	function f(e, t) {
		t === void 0 && (t = function(t) {
			return !0;
		});
		var r = null;
		return function(a) {
			return r == null && (r = e(a).then(function(e) {
				return r = t(e) ? (s || (s = n("Promise"))).resolve(e) : null, e;
			}).catch(function(e) {
				throw r = null, e;
			})), r;
		};
	}
	var g = f(function(t) {
		return _(t);
	}, function(e) {
		return (e == null ? void 0 : e.success) === !0;
	}), h = (e || (e = r("ExecutionEnvironment"))).isInWorker ? g : _;
	l.setPerformanceMeasurementTool = c, l.init = h;
}), 98);
