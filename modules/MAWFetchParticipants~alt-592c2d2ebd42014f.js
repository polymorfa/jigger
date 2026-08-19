__d("MAWFetchParticipants", [
	"I64",
	"LSDatabaseSingleton",
	"LSGroupParticipantJoinState",
	"LSInitSyncCompleteSubscription",
	"LSIntEnum",
	"MAWMiActMappingTableAPI",
	"ReQL",
	"toMsgrUserJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t) {
		var n, a, i, l, s;
		return {
			deliveredWatermarkTimestampMs: (e || (e = o("I64"))).to_float((n = t.deliveredWatermarkTimestampMs) != null ? n : (e || (e = o("I64"))).zero),
			isAdmin: (a = t.isAdmin) != null ? a : !1,
			isInvited: t.groupParticipantJoinState != null && (e || (e = o("I64"))).to_float(t.groupParticipantJoinState) === r("LSGroupParticipantJoinState").INVITED,
			isSuperAdmin: (i = t.isSuperAdmin) != null ? i : !1,
			readActionTimestampMs: e.to_float((l = t.readActionTimestampMs) != null ? l : (e || (e = o("I64"))).zero),
			readWatermarkTimestampMs: e.to_float((s = t.readWatermarkTimestampMs) != null ? s : (e || (e = o("I64"))).zero),
			userJid: r("toMsgrUserJid")(e.to_string(t.contactId))
		};
	}
	async function d(e) {
		var t = await (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		return await o("LSInitSyncCompleteSubscription").maybeWaitForSyncGroup(t, (u || (u = o("LSIntEnum"))).ofNumber(95)), t.runInTransaction(async function(t) {
			var n = new Map();
			return await Promise.all(e.map(async function(e) {
				var r = await o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(t, e);
				if (r != null) {
					var a = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.participants).getKeyRange(r));
					a.length > 0 && n.set(e, a.map(c));
				}
			})), n;
		}, "readonly", void 0, void 0, i.id + ":83");
	}
	l.fetchParticipantsFromLSDB = d;
}), 98);
