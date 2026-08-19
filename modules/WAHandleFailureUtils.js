__d("WAHandleFailureUtils", [
	"FBLogger",
	"MAWODSProxy",
	"Promise",
	"WABridge",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("MAWClearSignalAndTempStores").__setRef("WAHandleFailureUtils"), u = {
		GENERIC_FAILURE: "400",
		NOT_AUTHORIZED: "401",
		TEMP_BANNED: "402",
		BANNED: "403",
		CAT_EXPIRED: "413",
		CAT_INVALID: "414",
		NOT_FOUND: "415",
		CAT_SESSION_INVALID: "418",
		INTERNAL_ERROR: "500",
		SERVER_UNAVAILABLE: "503"
	};
	function c() {
		return new (e || (e = (n("Promise"))))(function(e, t) {
			s.onReady(function(n) {
				r("promiseDone")(n.clearSignalAndTempStores(), function() {
					return e();
				}, function(e) {
					var n = r("getErrorSafe")(e);
					r("FBLogger")("wmi").catching(n).mustfix("Failed to clear signal and temp stores"), t(n);
				});
			});
		});
	}
	function d() {
		return c().then(function() {
			o("WABridge").getBridge().fireAndForget("event", "logout", {});
		});
	}
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield c(), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.WA_REREGISTRATION,
				key: "reregister_phone"
			}), o("WABridge").getBridge().fireAndForget("event", "reregisterDevice", {});
		}), p.apply(this, arguments);
	}
	l.FAILURE_CODES = u, l.deregisterPhone = d, l.reregisterPhone = m;
}), 98);
