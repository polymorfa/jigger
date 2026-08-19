__d("MLV2RangeExtensionLogger", [
	"I64",
	"MAWQPLLogger",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return s == null && (s = r("MAWQPLLogger")(r("qpl")._(1056843758, "1768"))), s;
	}
	var c = new Map();
	function d(t, n) {
		return (e || (e = o("I64"))).to_string(t) + n;
	}
	function m(t, n, r, a) {
		var i = d(t, n), l = c.get(i);
		l != null && l.markQPLCancel("restart_logger");
		var s = u().markQPLStart(), m = new Set(), p = {
			addQPLAnnotations: function(t) {
				u().addQPLAnnotations(s, t);
			},
			annotateMessageRangesDataSource: function(t) {
				m.add(t), u().addQPLAnnotations(s, { string_array: { message_ranges_source: Array.from(m.keys()) } });
			},
			getInstanceKey: function() {
				return s;
			},
			markQPLCancel: function(t) {
				u().addQPLAnnotations(s, { string: { cancel_reason: t } }), u().markQPLCancel(s), c.delete(i);
			},
			markQPLFailure: function(t) {
				u().markQPLFailure(s, t), c.delete(i);
			},
			markQPLFailureWithMsg: function(t) {
				u().markQPLFailureWithMsg(s, t), c.delete(i);
			},
			markQPLPoint: function(t) {
				u().markQPLPoint(s, t);
			},
			markQPLSuccess: function() {
				u().markQPLSuccess(s), c.delete(i);
			}
		};
		return p.addQPLAnnotations({
			bool: { is_initial_range: (e || (e = o("I64"))).equal(r.minTimestampMs, (e || (e = o("I64"))).max_int) && (e || (e = o("I64"))).equal(r.maxTimestampMs, (e || (e = o("I64"))).max_int) },
			int: { page_size: a },
			string: {
				direction: n,
				start_range: JSON.stringify(babelHelpers.extends({}, r, {
					maxTimestampMs: r.maxTimestampMs == null ? null : (e || (e = o("I64"))).to_string(r.maxTimestampMs),
					minTimestampMs: r.minTimestampMs == null ? null : (e || (e = o("I64"))).to_string(r.minTimestampMs)
				})),
				thread_id: (e || (e = o("I64"))).to_string(t)
			}
		}), c.set(i, p), p;
	}
	function p(e, t) {
		var n = d(e, t);
		return c.get(n);
	}
	l.startRangeExtensionLoggerForThread = m, l.getRangeExtensionLoggerForThread = p;
}), 98);
