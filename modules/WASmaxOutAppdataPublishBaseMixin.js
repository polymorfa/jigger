__d("WASmaxOutAppdataPublishBaseMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutAppdataPublishDeviceIdentityMixin",
	"WASmaxOutAppdataPublishInternalTestMixin",
	"WASmaxOutAppdataPublishTraceContextMixin",
	"WASmaxOutAppdataPublishWithDeviceListCheckMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.deviceIdentityMixinArgs, r = e.withDeviceListCheckMixinArgs, a = e.internalTestMixinArgs, i = e.traceContextMixinArgs, l = (t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutAppdataPublishTraceContextMixin").mergeTraceContextMixin, t.optionalMerge(o("WASmaxOutAppdataPublishInternalTestMixin").mergeInternalTestMixin, t.optionalMerge(o("WASmaxOutAppdataPublishWithDeviceListCheckMixin").mergeWithDeviceListCheckMixin, t.optionalMerge(o("WASmaxOutAppdataPublishDeviceIdentityMixin").mergeDeviceIdentityMixin, o("WASmaxJsx").smax("appdata", null), n), r), a), i);
		return l;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeBaseMixin = s;
}), 98);
