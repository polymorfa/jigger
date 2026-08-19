__d("WARequestPreKeyDigest", [
	"WABridge",
	"WAGenerateAndUploadPreKeys",
	"WAGetKeysForUpload",
	"WAGlobals",
	"WALogger",
	"WAOdsEnums",
	"WARequestPreKeyDigestProtocol",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield t(function(e) {
				var t = e.cryptoManager;
				return o("WAGetKeysForUpload").getKeysForUpload(t);
			}), a = yield o("WARequestPreKeyDigestProtocol").requestPreKeyDigestProtocol(n.value);
			if (a.success === !1) {
				if (o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
					entity: o("WAOdsEnums").Entity.PREKEY_DIGEST,
					key: "fail"
				}), a.error.type === "compare-error") {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["PreKey digest comparison failed: ", ""])), a.error.payload), o("WAGenerateAndUploadPreKeys").generateAndUploadPreKeys({ reason: "prekey digest comparison failed" }).catch(function(e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error while generating and uploading prekeys: ", ""])), e);
					});
					return;
				}
				throw r("err")("Error while requesting key digest: " + a.error.type + " " + a.error.payload);
			}
			a.success, o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
				entity: o("WAOdsEnums").Entity.PREKEY_DIGEST,
				key: "success"
			});
		}), c.apply(this, arguments);
	}
	function d() {
		return u(function(e) {
			return o("WAGlobals").getWaOneQueue().enqueue(e, {
				operationType: "request_prekey_digest",
				flush: !1
			});
		});
	}
	l.requestPreKeyDigestFn = u, l.requestPreKeyDigest = d;
}), 98);
