__d("MAWBridgeSyncContacts", [
	"CurrentMessengerUser",
	"I64",
	"LSAuthorityLevel",
	"LSContactBlockedByViewerStatus",
	"LSContactGender",
	"LSContactIdType",
	"LSContactType",
	"LSContactViewerRelationship",
	"LSContactWorkForeignEntityType",
	"LSFactory",
	"LSIntEnum",
	"LSVerifyContactRowExistsStoredProcedure",
	"Promise",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("CurrentMessengerUser").getID();
	function d(t, a) {
		return a.reduce(function(e, n) {
			var a = (s || (s = o("I64"))).of_string(n);
			return e.then(function() {
				return r("LSVerifyContactRowExistsStoredProcedure")(r("LSFactory")(t), {
					authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
					blockedByViewerStatus: u.ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED),
					contactIdType: u.ofNumber(r("LSContactIdType").FBID),
					contactType: u.ofNumber(r("LSContactType").USER),
					contactViewerRelationship: u.ofNumber(r("LSContactViewerRelationship").UNKNOWN),
					gender: u.ofNumber(r("LSContactGender").UNKNOWN),
					id: a,
					isBlocked: !1,
					isMemorialized: !1,
					isSelf: c === n,
					workForeignEntityType: u.ofNumber(r("LSContactWorkForeignEntityType").UNKNOWN)
				});
			}).then(r("emptyFunction"));
		}, (e || (e = n("Promise"))).resolve());
	}
	l.call = d;
}), 98);
