__d("MAWGetGroupInfoApi", ["MAWRunInTransaction", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		return o("MAWRunInTransaction").runInTransaction({ GroupInfoStore: !0 }, function(e) {
			var n = e.GroupInfoStore;
			return s({ GroupInfoStore: n }, t);
		}, "getGroupInfo");
	};
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e.GroupInfoStore, r = yield n.get(t);
			return r.success ? r.value : null;
		}), u.apply(this, arguments);
	}
	l.getGroupInfo = e, l.getGroupInfoTransactor = s;
}), 98);
