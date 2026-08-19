__d("MAWUpdateGroupInfoNameApi", [
	"MAWInMemoryGroupInfoStore",
	"MAWUpdateLSThreadFromGroupInfoApi",
	"WAJids",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.subject, n = e.threadFbid, r = o("WAJids").toGroupJid(n), a = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(r);
			if (a != null) {
				var i = t === "" ? void 0 : t;
				a.name !== i && (o("MAWInMemoryGroupInfoStore").storeInMemoryGroupInfo(babelHelpers.extends({}, a, { name: i })), o("MAWUpdateLSThreadFromGroupInfoApi").updateLSThreadFromGroupInfo(r));
			}
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.updateGroupInfoName = e;
}), 98);
