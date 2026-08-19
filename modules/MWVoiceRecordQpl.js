__d("MWVoiceRecordQpl", [
	"MAWLoggerUtils",
	"QPLUserFlow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("qpl")._(25302342, "1531"), s = 600 * 1e3;
	function u(t) {
		var n = t.surface, a = o("MAWLoggerUtils").createInstanceKey();
		return {
			addAnnotations: function(n) {
				r("QPLUserFlow").addAnnotations(e, n, { instanceKey: a });
			},
			addPoint: function(n, o) {
				r("QPLUserFlow").addPoint(e, n, {
					data: o,
					instanceKey: a
				});
			},
			endCancel: function(n, o) {
				r("QPLUserFlow").endCancel(e, {
					annotations: o,
					cancelReason: n,
					instanceKey: a
				});
			},
			endFail: function(n, o) {
				r("QPLUserFlow").endFailure(e, n, {
					annotations: o,
					instanceKey: a
				});
			},
			endSuccess: function(n) {
				r("QPLUserFlow").endSuccess(e, {
					annotations: n,
					instanceKey: a
				});
			},
			start: function(o) {
				var t = o.startInfo.isOpusRecorder;
				r("QPLUserFlow").start(e, {
					annotations: {
						bool: { isOpusRecorder: t },
						string: { surface: n }
					},
					cancelOnUnload: !0,
					instanceKey: a,
					timeoutInMs: s
				});
			}
		};
	}
	l.event = e, l.createVoiceRecordQpl = u;
}), 98);
