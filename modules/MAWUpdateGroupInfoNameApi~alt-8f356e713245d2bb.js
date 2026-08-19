__d("MAWUpdateGroupInfoNameApi", [
	"MAWInMemoryGroupInfoStore",
	"MAWUpdateLSThreadFromGroupInfoApi",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = async function(t) {
		var e = t.subject, n = t.threadFbid, r = o("WAJids").toGroupJid(n), a = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(r);
		if (a != null) {
			var i = e === "" ? void 0 : e;
			a.name !== i && (o("MAWInMemoryGroupInfoStore").storeInMemoryGroupInfo(babelHelpers.extends({}, a, { name: i })), o("MAWUpdateLSThreadFromGroupInfoApi").updateLSThreadFromGroupInfo(r));
		}
	};
	l.updateGroupInfoName = e;
}), 98);
