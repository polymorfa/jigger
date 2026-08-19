__d("MAWChangeGroupMemberAddModeApi", [
	"MAWAdminMsgHelpers",
	"MAWRunInTransaction",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return o("MAWRunInTransaction").runInTransaction({
			GroupInfoStore: !0,
			MessagesStore: !0
		}, function(e) {
			return s.apply(void 0, [e].concat(t));
		}, "changeGroupMemberAddMode");
	}, s = async function(t, n, r, a, i, l) {
		var e = t.GroupInfoStore, s = t.MessagesStore, u = await e.get(n);
		if (!u.success) return o("WAResultOrError").makeError("missing_group");
		if (await e.update(n, function(e) {
			return babelHelpers.extends({}, e, { memberAddMode: a });
		}), l === "create_admin_message") {
			var c = o("MAWAdminMsgHelpers").createMemberAddModeChangeAdminMsg(n, a, r, i);
			c != null && await s.create(c);
		}
		return o("WAResultOrError").makeResult();
	};
	l.changeGroupMemberAddMode = e;
}), 98);
