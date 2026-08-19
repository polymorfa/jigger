__d("MAWChangeGroupParticipantAdminStatusApi", [
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
		}, "changeGroupParticipantAdminStatus");
	}, s = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l) {
			var s = e.GroupInfoStore, u = e.MessagesStore, c = e.ParticipantsStore, d = yield s.get(n);
			if (!d.success) return o("WAResultOrError").makeError("missing_group");
			var m = a.map(function(e) {
				return {
					addressable: e.addressable,
					chatJid: n,
					type: i,
					user: e.user
				};
			});
			if (yield c.bulkPut(m), t != null) {
				yield s.update(n, function(e) {
					return babelHelpers.extends({}, e, { participantVersion: t.current });
				});
				for (var p, _ = 0; _ < m.length; _++) i === "admin" ? p = o("MAWAdminMsgHelpers").createParticipantPromoteAdminMsg(n, m[_].user, r, l) : p = o("MAWAdminMsgHelpers").createParticipantDemoteAdminMsg(n, m[_].user, r, l), yield u.create(p);
			}
			return o("WAResultOrError").makeResult();
		});
		return function(n, r, o, a, i, l, s) {
			return e.apply(this, arguments);
		};
	})();
	l.changeGroupParticipantAdminStatus = e, l.changeGroupParticipantAdminStatusTransactor = s;
}), 98);
