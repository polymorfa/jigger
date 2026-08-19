__d("MAWUpdateGroupSubjectApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAJids",
	"WAResultOrError",
	"WATimeUtils"
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
	}, s = async function(t, n, r, a) {
		var e, i = t.GroupInfoStore, l = t.MessagesStore, s = a != null ? a : "create_admin_message", u = await i.get(n);
		if (!u.success) return o("WAResultOrError").makeError("missing_group");
		var c = u.value;
		if (c.subject.ts != null && (r.ts == null || c.subject.ts > r.ts) || (await i.update(n, function(e) {
			return babelHelpers.extends({}, e, { subject: r });
		}), s === "skip_admin_message")) return o("WAResultOrError").makeResult();
		var d = await i.get(c.jid);
		if (!d.success) return o("WAResultOrError").makeError("missing_group");
		var m = d.value, p = m.subject.user, _ = o("MAWAdminMsgHelpers").createGroupNameChangeAdminMsg(n, m, p != null ? o("WAJids").userIdFromJid(p) : void 0, (e = r.ts) != null ? e : o("WATimeUtils").unixTime());
		return _ != null && await l.create(_), o("WAResultOrError").makeResult();
	};
	l.updateGroupSubject = e, l.updateGroupSubjectTransactor = s;
}), 98);
