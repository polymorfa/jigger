__d("MAWUpdateGroupSubjectApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAJids",
	"WAResultOrError",
	"WATimeUtils",
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
		}, "updateGroupSubject");
	}, s = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a, i = e.GroupInfoStore, l = e.MessagesStore, s = r != null ? r : "create_admin_message", u = yield i.get(t);
			if (!u.success) return o("WAResultOrError").makeError("missing_group");
			var c = u.value;
			if (c.subject.ts != null && (n.ts == null || c.subject.ts > n.ts) || (yield i.update(t, function(e) {
				return babelHelpers.extends({}, e, { subject: n });
			}), s === "skip_admin_message")) return o("WAResultOrError").makeResult();
			var d = yield i.get(c.jid);
			if (!d.success) return o("WAResultOrError").makeError("missing_group");
			var m = d.value, p = m.subject.user, _ = o("MAWAdminMsgHelpers").createGroupNameChangeAdminMsg(t, m, p != null ? o("WAJids").userIdFromJid(p) : void 0, (a = n.ts) != null ? a : o("WATimeUtils").unixTime());
			return _ != null && (yield l.create(_)), o("WAResultOrError").makeResult();
		});
		return function(n, r, o, a) {
			return e.apply(this, arguments);
		};
	})();
	l.updateGroupSubject = e, l.updateGroupSubjectTransactor = s;
}), 98);
