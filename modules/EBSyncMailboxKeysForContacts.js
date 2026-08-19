__d("EBSyncMailboxKeysForContacts", [
	"EBMinosFetchContactKeys",
	"EBMinosLogger",
	"EBMinosMailboxKeysCache",
	"EBMinosQplFlow",
	"EBMinosVerifyEpochAndWriteMailboxKey",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = "SPECIFIC_CONTACTS", a = o("EBMinosQplFlow").startMinosMailboxKeyFetchQpl(), i = t.filter(function(t) {
				var n = o("EBMinosMailboxKeysCache").getCachedMailboxKeys(t);
				return n == null ? (o("EBMinosLogger").minosLogger.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cached mailbox keys not found for contact ", ""])), t), !0) : !1;
			});
			if (i.length === 0) {
				a.endSuccess({ string: { reason: "cache_hit" } });
				return;
			}
			a.addPoint("fetch_keys_start");
			var l = yield o("EBMinosFetchContactKeys").fetchContactMinosKeys({
				contactIds: i,
				useCase: r
			});
			if (a.addPoint("fetch_keys_end"), l.value == null) {
				a.endSuccess({ string: { reason: "server does_not_have_keys" } });
				return;
			}
			if (!l.success) {
				a.endFailWithError("fetch_keys_failed", l.error);
				return;
			}
			a.addPoint("verify_keys_start");
			var c = l.value.contactKeys.map(function(e) {
				var t = e.contactId, r = e.mailboxPublicKeys;
				return r == null ? (u || (u = n("Promise"))).resolve(!1) : o("EBMinosVerifyEpochAndWriteMailboxKey").verifyEpochAndWriteMailboxKeyToMailbox(babelHelpers.extends({
					entryPoint: "fetch-and-verify-minos-keys",
					userFbid: t
				}, r), o("EBMinosLogger").minosLogger);
			});
			a.addPoint("verify_keys_end"), (u || (u = n("Promise"))).all(c).then(function(e) {
				var t = e.every(function(e) {
					return e === !0;
				});
				t ? a.endSuccess() : a.endFailWithError("verify_keys_failed", "One or more keys failed verification");
			}).catch(function(e) {
				o("EBMinosLogger").minosLogger.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to verify keys: ", ""])), e.message), a.endFailWithError("verify_keys_failed", e.message);
			});
		}), d.apply(this, arguments);
	}
	l.syncMailboxKeysForContacts = c;
}), 98);
