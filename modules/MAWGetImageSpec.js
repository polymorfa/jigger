__d("MAWGetImageSpec", ["MAWImageUtils", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, n) {
		var r = t.URL.createObjectURL(e);
		return o("MAWImageUtils").urlToFile(r, n != null ? n : e.type).then(function(e) {
			var t = e.height, n = e.width;
			return {
				height: t,
				width: n
			};
		}).finally(function() {
			t.URL.revokeObjectURL(r);
		});
	}
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var n = t.URL.createObjectURL(e);
			try {
				return yield o("MAWImageUtils").urlToImageSpec(n);
			} finally {
				t.URL.revokeObjectURL(n);
			}
		}), u.apply(this, arguments);
	}
	l.getImageSpec_DEPRECATED = e, l.getImageSpec = s;
}), 98);
