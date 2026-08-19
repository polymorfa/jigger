__d("MAWUnvaultTransform", ["MAWVault", "baseTextTransformAllStrings"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return function(e) {
			return r("baseTextTransformAllStrings")(e, function(e, t) {
				return s(e, t);
			});
		};
	}
	function s(e, t) {
		return e.length === 0 ? [e] : o("MAWVault").isVaulted(e) ? [o("MAWVault").unvault(e)] : [e];
	}
	l.default = e;
}), 98);
