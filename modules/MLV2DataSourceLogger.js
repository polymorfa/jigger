__d("MLV2DataSourceLogger", [
	"I64",
	"MAWQPLLogger",
	"MWChatInteraction",
	"mergeDeep",
	"performanceNow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c() {
		return u == null && (u = r("MAWQPLLogger")(r("qpl")._(25303796, "1974"))), u;
	}
	var d = new Map();
	function m(e, t) {
		return (s || (s = o("I64"))).to_string(e) + t;
	}
	function p(e) {
		var t = e.getTrace(), n = (t == null ? void 0 : t.completed) != null, o = (t == null ? void 0 : t.qplEvent) === r("qpl")._(30605380, "18") || (t == null ? void 0 : t.qplEvent) === r("qpl")._(30609204, "1682");
		return !n && o;
	}
	function _(t, n, a, i) {
		var l = m(t, n), u = d.get(l);
		u != null && u.markQPLCancel("restart_logger");
		var _ = c().markQPLStart(), f = o("MWChatInteraction").getInteractionTraceForThreadKey((s || (s = o("I64"))).to_string(t)), g = (e || (e = r("performanceNow")))();
		f == null || f.addMarkerPoint("MLV2_fetch_start", "AppTiming", g);
		var h = function(n, o) {
			var t = (e || (e = r("performanceNow")))(), a = {
				action: n,
				full_duration: (t - g) / 1e3
			};
			if (o != null && (a = r("mergeDeep")(a, o)), f != null) {
				var i = p(f), l = n === "CANCEL" && t - g < 50;
				!i || l || f.addMarkerPoint("MLV2_fetch_end", "AppTiming", t, a);
			}
		}, y = new Set(), C = {
			addQPLAnnotations: function(t) {
				c().addQPLAnnotations(_, t);
			},
			annotateMessageRangesDataSource: function(t) {
				y.add(t), c().addQPLAnnotations(_, { string_array: { message_ranges_source: Array.from(y.keys()) } });
			},
			getInstanceKey: function() {
				return _;
			},
			markQPLCancel: function(t) {
				c().addQPLAnnotations(_, { string: { cancel_reason: t } }), c().markQPLCancel(_), h("CANCEL"), d.delete(l);
			},
			markQPLFailure: function(t) {
				c().markQPLFailure(_, t), h("FAIL"), d.delete(l);
			},
			markQPLFailureWithMsg: function(t) {
				c().markQPLFailureWithMsg(_, t), h("FAIL"), d.delete(l);
			},
			markQPLPoint: function(t) {
				c().markQPLPoint(_, t);
			},
			markQPLSuccess: function(t) {
				c().markQPLSuccess(_), h("SUCCESS", { num_msgs_fetched: t }), d.delete(l);
			}
		}, b = !1;
		return f != null && p(f) && (b = !0), C.addQPLAnnotations({
			bool: { during_chat_open: b },
			int: { queried_count: a },
			string: {
				direction: n,
				thread_id: s.to_string(t),
				thread_type: s.to_string(i)
			}
		}), d.set(l, C), C;
	}
	function f(e, t) {
		var n = m(e, t);
		return d.get(n);
	}
	l.startMLV2LoggerForThread = _, l.getMLV2LoggerForThread = f;
}), 98);
