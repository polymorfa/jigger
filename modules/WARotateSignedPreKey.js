__d("WARotateSignedPreKey", [
	"Promise",
	"WAGenerateAndUploadPreKeys",
	"WALoggerTag",
	"WARotateSignedPreKeyProtocol",
	"WATagsLogger",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("WATagsLogger").TAGS([r("WALoggerTag").SignedPrekeyRotation, r("WALoggerTag").SignedPrekey]);
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = yield o("WARotateSignedPreKeyProtocol").rotateSignedPreKeyProtocol(t);
			if (!(a.success || a.error.type === "no-prekey-reregistered")) {
				if (a.error.type === "validation-error") return d.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Signed prekey failed server validation. need to upload all keys."]))), o("WAGenerateAndUploadPreKeys").generateAndUploadPreKeys({ reason: "signed prekey failed server validation" }).catch(function(e) {
					d.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error while generating and uploading prekeys: ", ""])), e);
				}), (c || (c = n("Promise"))).resolve();
				throw d.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["rotateSignedPreKey failed."]))), r("err")("rotateSignedPreKey RPC failed: " + a.error.type);
			}
		}), p.apply(this, arguments);
	}
	l.rotateSignedPreKey = m;
}), 98);
