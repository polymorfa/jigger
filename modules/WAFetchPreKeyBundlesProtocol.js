__d("WAFetchPreKeyBundlesProtocol", [
	"WAConvertRegistrationIdMixin",
	"WAConvertSignedPreKeyMixin",
	"WAParsableXmlNode",
	"WAResultOrError",
	"WASignalKeys",
	"WASmaxPreKeysFetchKeyBundlesRPC",
	"WATagsLogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("WATagsLogger").TAGS(["fetchPreKeyBundlesProtocol"]);
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			d.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start fetching prekey of ", "..."])), t.join(", "));
			var r = n != null ? n : !1, a = yield o("WASmaxPreKeysFetchKeyBundlesRPC").sendFetchKeyBundlesRPC({
				userArgs: t.map(function(e) {
					return {
						userJid: e,
						hasUserReasonIdentity: !1
					};
				}),
				hasKeyPqsupportTrue: r
			});
			switch (a.name) {
				case "FetchKeyBundlesResponseSuccess": {
					d.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["fetched prekey successfully"])));
					var i = new Map();
					return a.value.listUser.map(function(e) {
						var t = e.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
						t.name === "FetchKeyBundlesUserSuccess" && i.set(e.jid, _(t.value));
					}), o("WAResultOrError").makeResult(i);
				}
				case "FetchKeyBundlesResponseServerError": {
					var l = a.value.errorServerErrors.name;
					return d.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["ServerError: ", ""])), l), o("WAResultOrError").makeError({
						type: "server-error",
						payload: l
					});
				}
				case "FetchKeyBundlesResponseRequestError": {
					var m = a.value.errorRequestErrorsFetch.name;
					return d.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["RequestError: ", ""])), m), o("WAResultOrError").makeError({
						type: "request-error",
						payload: m
					});
				}
			}
		}), p.apply(this, arguments);
	}
	function _(e) {
		var t = o("WAConvertRegistrationIdMixin").registrationIdMixin(e), n = o("WASignalKeys").serializeIdentity(e.elementValue), r = o("WAConvertSignedPreKeyMixin").convertSignedPreKeyMixin(e), a = e.preKeyMixin ? f(e.preKeyMixin) : null, i = e.pQKeyMixin ? g(e.pQKeyMixin) : null, l = o("WATimeUtils").castToUnixTime(e.t || 0);
		return {
			keys: {
				regId: t,
				identity: n,
				oneTimeKey: a,
				signedKey: {
					id: r.id,
					signature: r.signature,
					publicKey: o("WASignalKeys").serializeIdentity(r.pubkey)
				},
				kyberKey: i
			},
			timestamp: l
		};
	}
	function f(e) {
		return {
			id: o("WAParsableXmlNode").convertBytesToUint(e.keyIdKeyIDMixin.elementValue, 3),
			publicKey: o("WASignalKeys").serializeIdentity(e.keyValueKeyDataMixin.elementValue)
		};
	}
	function g(e) {
		return {
			id: o("WAParsableXmlNode").convertBytesToUint(e.pqkeyIdKeyIDMixin.elementValue, 3),
			publicKey: e.pqkeyValuePQKeyDataMixin.elementValue,
			signature: e.pqkeySignatureElementValue
		};
	}
	l.fetchPreKeyBundlesProtocol = m;
}), 98);
