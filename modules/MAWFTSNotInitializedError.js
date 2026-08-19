__d("MAWFTSNotInitializedError", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = "MAWFTSWorker has not been initialized", l = "MAWFTSNotInitializedError", s = (function(t) {
		function n() {
			var n, r = e;
			return n = t.call(this, r) || this, n.message = r, n.name = l, n;
		}
		return babelHelpers.inheritsLoose(n, t), n;
	})(babelHelpers.wrapNativeSuper(Error));
	i.ERROR_NAME = l, i.MAWFTSNotInitializedError = s;
}), 66);
