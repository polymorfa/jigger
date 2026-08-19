__d("MWXMAV2XmaDataClass", ["FBLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e != null) try {
			return JSON.parse(e);
		} catch (e) {
			r("FBLogger")("messenger_web_sharing").mustfix("Error parsing xma dataclass");
		}
	}
	l.parseXmaDataClass = e;
}), 98);
