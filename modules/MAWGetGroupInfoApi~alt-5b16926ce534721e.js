__d("MAWGetGroupInfoApi", ["MAWRunInTransaction"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		return o("MAWRunInTransaction").runInTransaction({ GroupInfoStore: !0 }, function(e) {
			var n = e.GroupInfoStore;
			return s({ GroupInfoStore: n }, t);
		}, "getGroupInfo");
	};
	async function s(e, t) {
		var n = e.GroupInfoStore, r = await n.get(t);
		return r.success ? r.value : null;
	}
	l.getGroupInfo = e, l.getGroupInfoTransactor = s;
}), 98);
