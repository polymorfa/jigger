__d("WAFlowsResponseViewUtils.react", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t) {
		var n = e.dataSource;
		if (n instanceof Array && t != null && t instanceof Array) return t.map(function(e, t) {
			var r, o, a = n.find(function(t) {
				return t.id === e;
			});
			return {
				id: (r = a == null ? void 0 : a.id) != null ? r : t.toString(),
				title: (o = a == null ? void 0 : a.title) != null ? o : "",
				description: a == null ? void 0 : a.description,
				metadata: a == null ? void 0 : a.metadata
			};
		});
	}
	function l(e, t) {
		var n = e.dataSource;
		if (n instanceof Array) {
			var r, o, a = n.find(function(e) {
				return e.id === t;
			});
			return {
				id: (r = a == null ? void 0 : a.id) != null ? r : "",
				title: (o = a == null ? void 0 : a.title) != null ? o : "",
				description: a == null ? void 0 : a.description,
				metadata: a == null ? void 0 : a.metadata
			};
		}
	}
	i.getMultiSelectComponentValues = e, i.getSingleSelectComponentValues = l;
}), 66);
