__d("MAWFetchParticipants", [
	"I64",
	"LSDatabaseSingleton",
	"LSGroupParticipantJoinState",
	"LSInitSyncCompleteSubscription",
	"LSIntEnum",
	"MAWMiActMappingTableAPI",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"toMsgrUserJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e) {
		var t, n, a, i, l;
		return {
			deliveredWatermarkTimestampMs: (s || (s = o("I64"))).to_float((t = e.deliveredWatermarkTimestampMs) != null ? t : (s || (s = o("I64"))).zero),
			isAdmin: (n = e.isAdmin) != null ? n : !1,
			isInvited: e.groupParticipantJoinState != null && (s || (s = o("I64"))).to_float(e.groupParticipantJoinState) === r("LSGroupParticipantJoinState").INVITED,
			isSuperAdmin: (a = e.isSuperAdmin) != null ? a : !1,
			readActionTimestampMs: s.to_float((i = e.readActionTimestampMs) != null ? i : (s || (s = o("I64"))).zero),
			readWatermarkTimestampMs: s.to_float((l = e.readWatermarkTimestampMs) != null ? l : (s || (s = o("I64"))).zero),
			userJid: r("toMsgrUserJid")(s.to_string(e.contactId))
		};
	}
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = yield (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			return yield o("LSInitSyncCompleteSubscription").maybeWaitForSyncGroup(r, (c || (c = o("LSIntEnum"))).ofNumber(95)), r.runInTransaction((function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
					var a = new Map();
					return yield (e || (e = n("Promise"))).all(t.map((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							var t = yield o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(r, e);
							if (t != null) {
								var n = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(r.participants).getKeyRange(t));
								n.length > 0 && a.set(e, n.map(d));
							}
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})())), a;
				});
				return function(e) {
					return r.apply(this, arguments);
				};
			})(), "readonly", void 0, void 0, i.id + ":83");
		}), p.apply(this, arguments);
	}
	l.fetchParticipantsFromLSDB = m;
}), 98);
