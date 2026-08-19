__d("MAWChangeGroupMemberAddModeApi", [
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
			MessagesStore: !0
		}, function(e) {
			return s.apply(void 0, [e].concat(t));
		}, "changeGroupMemberAddMode");
	}, s = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i) {
			var l = e.GroupInfoStore, s = e.MessagesStore, u = yield l.get(t);
			if (!u.success) return o("WAResultOrError").makeError("missing_group");
			if (yield l.update(t, function(e) {
				return babelHelpers.extends({}, e, { memberAddMode: r });
			}), i === "create_admin_message") {
				var c = o("MAWAdminMsgHelpers").createMemberAddModeChangeAdminMsg(t, r, n, a);
				c != null && (yield s.create(c));
			}
			return o("WAResultOrError").makeResult();
		});
		return function(n, r, o, a, i, l) {
			return e.apply(this, arguments);
		};
	})();
	l.changeGroupMemberAddMode = e;
}), 98);
