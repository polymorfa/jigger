__d("MAWAddGroupParticipantsApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
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
	}, s = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l, s) {
			var u = e.GroupInfoStore, c = e.MessagesStore, d = e.ParticipantsStore, m = yield u.get(n);
			if (!m.success) return o("WAResultOrError").makeError("missing_group");
			var p = a.map(function(e) {
				return {
					addressable: e.addressable,
					chatJid: n,
					type: e.type,
					user: e.user
				};
			});
			if (yield d.bulkPut(p), t != null) {
				var _ = o("MAWAdminMsgHelpers").createParticipantAddAdminMessage(n, p.map(function(e) {
					return e.user;
				}), r, s);
				yield c.create(_), yield u.update(n, function(e) {
					return babelHelpers.extends({}, e, { participantVersion: t.current });
				}, { updateParticipantMedatadata: i });
			}
			return o("WAResultOrError").makeResult();
		});
		return function(n, r, o, a, i, l, s, u) {
			return e.apply(this, arguments);
		};
	})();
	l.addGroupParticipants = e, l.addGroupParticipantsTransactor = s;
}), 98);
