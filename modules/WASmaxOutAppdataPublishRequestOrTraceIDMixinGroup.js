__d("WASmaxOutAppdataPublishRequestOrTraceIDMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutAppdataPublishRequestIDMixin",
	"WASmaxOutAppdataPublishTraceIDMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.requestID) return o("WASmaxOutAppdataPublishRequestIDMixin").mergeRequestIDMixin(e, t.requestID);
		if (t.traceID) return o("WASmaxOutAppdataPublishTraceIDMixin").mergeTraceIDMixin(e, t.traceID);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeRequestOrTraceIDMixinGroup = e;
}), 98);
