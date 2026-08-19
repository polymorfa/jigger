__d("WAFlowsEnvContextUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = function(t) {
		var e, n, r;
		switch (t) {
			case "ios":
				r = (e = navigator.userAgent.match(/OS ((\d+_?){2,3})\s/)) == null ? void 0 : e[1].replace("_", ".");
				break;
			default: r = (n = navigator.userAgent.match(/(chrome|safari(?=\/))\/?\s*(\d+)/i)) == null ? void 0 : n[2];
		}
		return r != null ? r : "";
	};
	i.getBrowserVersion = e;
}), 66);
