__d("MAWCutoverQPLLogger", ["QPLUserFlow", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		instanceKey: 0,
		isInProgress: !1
	};
	function s(t) {
		return e.isInProgress && r("QPLUserFlow").endCancel(r("qpl")._(1056840990, "2431"), { instanceKey: e.instanceKey }), r("QPLUserFlow").start(r("qpl")._(1056840990, "2431"), {
			annotations: { bool: { is_dtc: t } },
			instanceKey: ++e.instanceKey,
			timeoutInMs: 1e4
		}), e.isInProgress = !0, e.instanceKey;
	}
	function u(e, t, n) {
		e != null && r("QPLUserFlow").addPoint(r("qpl")._(1056840990, "2431"), t, babelHelpers.extends({ instanceKey: e }, n));
	}
	function c(e, t) {
		e != null && r("QPLUserFlow").addAnnotations(r("qpl")._(1056840990, "2431"), t, { instanceKey: e });
	}
	function d(t) {
		t != null && (e.isInProgress = !1, r("QPLUserFlow").endSuccess(r("qpl")._(1056840990, "2431"), { instanceKey: t }));
	}
	function m(e, t) {
		e != null && r("QPLUserFlow").endFailure(r("qpl")._(1056840990, "2431"), t, { instanceKey: e });
	}
	l.startQpl = s, l.addPoint = u, l.addAnnotations = c, l.endSuccess = d, l.endFailure = m;
}), 98);
