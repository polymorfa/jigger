__d("blobToDataUri", [
	"Promise",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var o = new FileReader(), a = new (e || (e = (n("Promise"))))(function(e, t) {
				o.onloadend = e, o.onerror = t;
			});
			o.readAsDataURL(t), yield a;
			var i = o.result;
			if (typeof i != "string") throw r("err")("Unexpected result type \"%s\" when reading Blob as DataURL.", i instanceof ArrayBuffer ? "ArrayBuffer" : typeof i);
			return i;
		}), u.apply(this, arguments);
	}
	l.default = s;
}), 98);
