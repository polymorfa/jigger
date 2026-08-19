__d("MAWRemoveGroupParticipantsApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAAPI",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
		return o("MAWRunInTransaction").runInTransaction({
			GroupInfoStore: !0,
			MessagesStore: !0,
			ParticipantsStore: !0
		}, function(e) {
			return s.apply(void 0, [e].concat(t));
		}, "removeGroupParticipants").then((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return e.success && (yield r("WAAPI").setRotateSenderKeyToTrue([t[1]])), e;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
	}, s = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l) {
			var s = e.GroupInfoStore, u = e.MessagesStore, c = e.ParticipantsStore, d = yield s.get(n);
			if (!d.success) return o("WAResultOrError").makeError("missing_group");
			var m = a.map(function(e) {
				return e.user;
			}), p = m.map(function(e) {
				return {
					groupJid: n,
					userJid: e
				};
			});
			if (yield c.bulkDelete(p, { remover: r }), t != null) {
				var _ = o("MAWAdminMsgHelpers").createParticipantRemoveAdminMsg(n, m, r, l);
				yield u.create(_), yield s.update(n, function(e) {
					return babelHelpers.extends({}, e, { participantVersion: t.current });
				}, { updateParticipantMedatadata: i });
			}
			return o("WAResultOrError").makeResult();
		});
		return function(n, r, o, a, i, l, s) {
			return e.apply(this, arguments);
		};
	})();
	l.removeGroupParticipants = e, l.removeGroupParticipantsTransactor = s;
}), 98);
