__d("WASmaxOutAppdataPublishRetryMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutAppdataPublishEncRetryMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.appdataT, n = e.encRetryMixinArgs, r = o("WASmaxJsx").smax("appdata", { t: o("WAWap").INT(t) }, o("WASmaxOutAppdataPublishEncRetryMixin").mergeEncRetryMixin(o("WASmaxJsx").smax("enc", null), n));
		return r;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeRetryMixin = s;
}), 98);
