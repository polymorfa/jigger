__d("MWPMiniSearch", ["minisearch"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = {
			fuzzy: 0,
			prefix: !0
		};
		return {
			fields: ["content"],
			searchOptions: e
		};
	}
	function s(t) {
		t === void 0 && (t = function() {
			return {};
		});
		var n;
		function o() {
			n = new (r("minisearch"))(babelHelpers.extends({}, e(), t()));
		}
		return { getInstance: function() {
			return n == null && o(), n;
		} };
	}
	l.createMiniSearchSingleton = s;
}), 98);
