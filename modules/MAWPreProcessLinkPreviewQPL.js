__d("MAWPreProcessLinkPreviewQPL", [
	"MAWLoggerUtils",
	"QPLUserFlow",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("qpl")._(1056840460, "718");
	function s(t) {
		var n = t.draftId, a = t.url, i = n.concat(a), l = o("MAWLoggerUtils").getInstanceKeyFromId(i), s = r("justknobx")._("2714");
		return r("QPLUserFlow").start(e, {
			annotations: { string: { preprocess_type: "link_preview_xma" } },
			instanceKey: l,
			timeoutInMs: s
		}), {
			addAnnotations: function(n) {
				r("QPLUserFlow").addAnnotations(e, n, { instanceKey: l });
			},
			addPoint: function(n, o) {
				r("QPLUserFlow").addPoint(e, n, { instanceKey: l }), o != null && r("QPLUserFlow").addAnnotations(e, o, { instanceKey: l });
			},
			endCancel: function(n, o) {
				r("QPLUserFlow").endCancel(e, {
					annotations: n,
					cancelReason: o,
					instanceKey: l
				});
			},
			endFail: function(n, o) {
				r("QPLUserFlow").endFailure(e, n, { instanceKey: l }), o != null && r("QPLUserFlow").addAnnotations(e, o, { instanceKey: l });
			},
			endSuccess: function() {
				r("QPLUserFlow").endSuccess(e, { instanceKey: l });
			}
		};
	}
	l.startMediaPreProcessLinkPreviewQpl = s;
}), 98);
