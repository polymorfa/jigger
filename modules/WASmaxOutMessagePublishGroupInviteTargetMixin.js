__d("WASmaxOutMessagePublishGroupInviteTargetMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.metaGroupInvite, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", { group_invite: o("WAWap").GROUP_JID(t) }));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeGroupInviteTargetMixin = s;
}), 98);
