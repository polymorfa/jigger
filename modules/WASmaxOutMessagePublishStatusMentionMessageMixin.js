__d("WASmaxOutMessagePublishStatusMentionMessageMixin", ["WASmaxJsx", "WASmaxMixins"], (function(t, n, r, o, a, i, l) {
	function e() {
		var e = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", { is_status_mention: "true" }));
		return e;
	}
	function s(t) {
		var n = e();
		return o("WASmaxMixins").mergeStanzas(t, n);
	}
	l.mergeStatusMentionMessageMixin = s;
}), 98);
