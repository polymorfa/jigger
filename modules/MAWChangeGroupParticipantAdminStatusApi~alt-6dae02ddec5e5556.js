__d("MAWChangeGroupParticipantAdminStatusApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return o("MAWRunInTransaction").runInTransaction({
			GroupInfoStore: !0,
			MessagesStore: !0,
			ParticipantsStore: !0
		}, function(e) {
			return s.apply(void 0, [e].concat(t));
		}, "changeGroupParticipantAdminStatus");
	}, s = async function(t, n, r, a, i, l, s) {
		var e = t.GroupInfoStore, u = t.MessagesStore, c = t.ParticipantsStore, d = await e.get(r);
		if (!d.success) return o("WAResultOrError").makeError("missing_group");
		var m = i.map(function(e) {
			return {
				addressable: e.addressable,
				chatJid: r,
				type: l,
				user: e.user
			};
		});
		if (await c.bulkPut(m), n != null) {
			await e.update(r, function(e) {
				return babelHelpers.extends({}, e, { participantVersion: n.current });
			});
			for (var p, _ = 0; _ < m.length; _++) l === "admin" ? p = o("MAWAdminMsgHelpers").createParticipantPromoteAdminMsg(r, m[_].user, a, s) : p = o("MAWAdminMsgHelpers").createParticipantDemoteAdminMsg(r, m[_].user, a, s), await u.create(p);
		}
		return o("WAResultOrError").makeResult();
	};
	l.changeGroupParticipantAdminStatus = e, l.changeGroupParticipantAdminStatusTransactor = s;
}), 98);
