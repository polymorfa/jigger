__d("WASmaxOutAppdataPublishTraceIDMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.edgeIdElementValue, n = o("WASmaxJsx").smax("edge_id", null, t);
		return n;
	}
	function s(e) {
		var t = e.deviceArgs, n = e.correlationIdType, r = e.idElementValue, a = o("WASmaxJsx").smax("correlation_id", { type: o("WAWap").CUSTOM_STRING(n) }, o("WASmaxJsx").smax("id", null, r), o("WASmaxChildren").OPTIONAL_CHILD(u, t));
		return a;
	}
	function u(e) {
		var t = e.deviceId, n = o("WASmaxJsx").smax("device", { id: o("WAWap").INT(t) });
		return n;
	}
	function c(t) {
		var n = t.edgeIdArgs, r = t.correlationIdArgs, a = t.traceIdElementValue, i = o("WASmaxJsx").smax("trace", null, [o("WASmaxJsx").smax("trace_id", null, a), o("WASmaxChildren").OPTIONAL_CHILD(e, n)].concat(o("WASmaxChildren").REPEATED_CHILD(s, r, 0, 10)));
		return i;
	}
	function d(e, t) {
		var n = c(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeTraceIDEdgeId = e, l.makeTraceIDCorrelationId = s, l.makeTraceIDCorrelationIdDevice = u, l.mergeTraceIDMixin = d;
}), 98);
