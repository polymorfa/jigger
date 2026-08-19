__d("MAWUnshimUrl", ["CometLinkShimUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e != null) {
			var t = o("CometLinkShimUtils").getLinkShimInfo(e, void 0, void 0, void 0, void 0, void 0, !0);
			return t.shimmed ? t.unshimmedHref : e;
		}
	}
	l.unshimUrl = e;
}), 98);
