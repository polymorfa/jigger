__d("MAWAddGroupParticipantsApi", [
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
		}, "addGroupParticipants");
	}, s = async function(t, n, r, a, i, l, s, u) {
		var e = t.GroupInfoStore, c = t.MessagesStore, d = t.ParticipantsStore, m = await e.get(r);
		if (!m.success) return o("WAResultOrError").makeError("missing_group");
		var p = i.map(function(e) {
			return {
				addressable: e.addressable,
				chatJid: r,
				type: e.type,
				user: e.user
			};
		});
		if (await d.bulkPut(p), n != null) {
			var _ = o("MAWAdminMsgHelpers").createParticipantAddAdminMessage(r, p.map(function(e) {
				return e.user;
			}), a, u);
			await c.create(_), await e.update(r, function(e) {
				return babelHelpers.extends({}, e, { participantVersion: n.current });
			}, { updateParticipantMedatadata: l });
		}
		return o("WAResultOrError").makeResult();
	};
	l.addGroupParticipants = e, l.addGroupParticipantsTransactor = s;
}), 98);
