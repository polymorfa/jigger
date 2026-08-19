__d("WASmaxOutAppdataPublishPeerRequest", [
	"WASmaxAttrs",
	"WASmaxJsx",
	"WASmaxOutAppdataPublishBaseMixin",
	"WASmaxOutAppdataPublishPeerMsgTypes",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.appdataId, n = e.appdataPushPriority, r = e.peerMsgTypesArgs, a = o("WASmaxOutAppdataPublishPeerMsgTypes").mergePeerMsgTypes(o("WASmaxOutAppdataPublishBaseMixin").mergeBaseMixin(o("WASmaxJsx").smax("appdata", {
			id: o("WAWap").STANZA_ID(t),
			category: "peer",
			push_priority: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n)
		}), e), r);
		return a;
	}
	l.makePeerRequest = e;
}), 98);
