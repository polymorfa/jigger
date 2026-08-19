__d("MAWBridgeUIEventQueueQPLLogger", ["QPLUserFlow", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		r("QPLUserFlow").start(r("qpl")._(1056849266, "1765"), {
			annotations: { string_array: { events: t } },
			instanceKey: e
		});
	}
	function s(e, t) {
		r("QPLUserFlow").addAnnotations(r("qpl")._(1056849266, "1765"), t, { instanceKey: e });
	}
	function u(e) {
		r("QPLUserFlow").endSuccess(r("qpl")._(1056849266, "1765"), { instanceKey: e });
	}
	function c(e, t) {
		r("QPLUserFlow").endFailure(r("qpl")._(1056849266, "1765"), "MAWBridgeUIEventHandlerFailure", {
			annotations: { string: { failedEventTag: t } },
			instanceKey: e
		});
	}
	l.start = e, l.addAnnotations = s, l.endSuccess = u, l.endFailure = c;
}), 98);
