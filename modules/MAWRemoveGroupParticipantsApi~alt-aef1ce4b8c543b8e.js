__d("MAWRemoveGroupParticipantsApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAAPI",
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
		}, "removeGroupParticipants").then(async function(e) {
			return e.success && await r("WAAPI").setRotateSenderKeyToTrue([t[1]]), e;
		});
	}, s = async function(t, n, r, a, i, l, s) {
		var e = t.GroupInfoStore, u = t.MessagesStore, c = t.ParticipantsStore, d = await e.get(r);
		if (!d.success) return o("WAResultOrError").makeError("missing_group");
		var m = i.map(function(e) {
			return e.user;
		}), p = m.map(function(e) {
			return {
				groupJid: r,
				userJid: e
			};
		});
		if (await c.bulkDelete(p, { remover: a }), n != null) {
			var _ = o("MAWAdminMsgHelpers").createParticipantRemoveAdminMsg(r, m, a, s);
			await u.create(_), await e.update(r, function(e) {
				return babelHelpers.extends({}, e, { participantVersion: n.current });
			}, { updateParticipantMedatadata: l });
		}
		return o("WAResultOrError").makeResult();
	};
	l.removeGroupParticipants = e, l.removeGroupParticipantsTransactor = s;
}), 98);
