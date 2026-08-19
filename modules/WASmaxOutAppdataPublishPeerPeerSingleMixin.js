__d("WASmaxOutAppdataPublishPeerPeerSingleMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutAppdataPublishEncTypeIndividualMixin",
	"WASmaxOutAppdataPublishEncVersionFutureproofMixin",
	"WASmaxOutAppdataPublishRetryMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.appdataTo, n = e.retryMixinArgs, r = e.encVersionFutureproofMixinArgs, a = e.encTypeIndividualMixinArgs, i = o("WASmaxMixins").optionalMerge(o("WASmaxOutAppdataPublishRetryMixin").mergeRetryMixin, o("WASmaxJsx").smax("appdata", { to: o("WAWap").DEVICE_JID(t) }, o("WASmaxOutAppdataPublishEncTypeIndividualMixin").mergeEncTypeIndividualMixin(o("WASmaxOutAppdataPublishEncVersionFutureproofMixin").mergeEncVersionFutureproofMixin(o("WASmaxJsx").smax("enc", null), r), a)), n);
		return i;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergePeerPeerSingleMixin = s;
}), 98);
