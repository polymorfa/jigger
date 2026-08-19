__d("MAWParseCollapsibleIdFromXMADataClass", ["FBLogger", "MWXMAV2IsDataclassLiveLocationXMA"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e == null) throw r("FBLogger")("messenger_web").mustfixThrow("xmaDataclass is missing or invalid");
		var t = o("MWXMAV2IsDataclassLiveLocationXMA").getLiveLocationMetadata(e);
		if (t != null) return parseInt(t.session_id, 10);
		if ((e == null ? void 0 : e.layout_config) == null || typeof (e == null ? void 0 : e.layout_config.collapsible_id) != "number") throw r("FBLogger")("messenger_web").mustfixThrow("Layout config or collapsible_id is missing or invalid");
		return e.layout_config.collapsible_id;
	}
	l.parseCollapsibleIdFromXMADataClass = e;
}), 98);
