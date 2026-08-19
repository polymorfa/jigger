__d("MAWGetImageSpec", ["MAWImageUtils"], (function(t, n, r, o, a, i, l) {
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
	async function s(e) {
		var n = t.URL.createObjectURL(e);
		try {
			return await o("MAWImageUtils").urlToImageSpec(n);
		} finally {
			t.URL.revokeObjectURL(n);
		}
	}
	l.getImageSpec_DEPRECATED = e, l.getImageSpec = s;
}), 98);
