__d("MWXMAV2IsDataclassLiveLocationXMA", ["MSGDataclassTypes.flow", "justknobx"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s(e) != null;
	}
	function s(e) {
		if (e != null) {
			var t = e.content;
			if (!(t == null || (t == null ? void 0 : t.__typename) !== "XMSGXmaSingleContent")) {
				var n = t.custom_template_data;
				if (!(n == null || (n == null ? void 0 : n.__typename) !== "XMSGXmaLocationTemplateData")) {
					var r = n.location_metadata;
					if (!(r == null || (r == null ? void 0 : r.__typename) !== "XMSGXmaLiveLocationMetadata")) return r;
				}
			}
		}
	}
	var u = 1e3;
	function c(e, t) {
		var n, a = r("justknobx")._("4207"), i = Math.floor(Date.now() / u) - a;
		return t != null && t < i && ((n = s(e)) == null ? void 0 : n.session_state) === o("MSGDataclassTypes.flow").XmsgXmaLiveLocationSessionState.Started;
	}
	l.isDataclassLiveLocationXMA = e, l.getLiveLocationMetadata = s, l.isExpiredLiveLocationStarted = c;
}), 98);
