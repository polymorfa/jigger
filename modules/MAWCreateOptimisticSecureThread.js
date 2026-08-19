__d("MAWCreateOptimisticSecureThread", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSFactory",
	"LSGroupParticipantJoinState",
	"LSIntEnum",
	"MAWVerifyThreadExistsUtils",
	"Promise",
	"ReQLTable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return o("MAWVerifyThreadExistsUtils").runVerifyThreadExistsSproc(r("LSFactory")(e), {
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			threadType: t
		}, "createSecureOccamadilloOptimisticThread").then(function(t) {
			var n = t[0];
			return o("ReQLTable").update(e.threads, [n], function(e) {
				if (e == null) throw r("FBLogger")("maw_threads").mustfixThrow("Optimistic thread is missing");
				return babelHelpers.extends({}, e, { clientThreadKey: n });
			}).then(function() {
				return n;
			});
		});
	}
	function d(t, a, i) {
		return c(t, i).then(function(i) {
			return (e || (e = n("Promise"))).all(a.map(function(e) {
				return t.participants.add({
					authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
					contactId: e.id,
					deliveredWatermarkTimestampMs: (s || (s = o("I64"))).zero,
					groupParticipantJoinState: u.ofNumber(r("LSGroupParticipantJoinState").MEMBER),
					isAdmin: void 0,
					isModerator: !1,
					isSuperAdmin: void 0,
					nickname: void 0,
					normalizedSearchTerms: void 0,
					participantCapabilities: void 0,
					readActionTimestampMs: s.zero,
					readWatermarkTimestampMs: s.zero,
					subscribeSource: void 0,
					threadKey: i
				});
			})).then(function() {
				return i;
			});
		});
	}
	l.call = d;
}), 98);
